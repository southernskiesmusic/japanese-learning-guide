/* ================================================================
   AUTH — Firebase Google Auth + Cloud Sync for Japanese Learning Guide
   Shares the same Firebase project as MYP Study Hub.
   Japanese data stored under users/{uid}.japanese
   ================================================================ */
const Auth = {
    user: null,
    db: null,
    _ready: false,
    _syncTimer: null,

    // All jp_* localStorage keys to sync
    SYNC_KEYS: [
        'jp_srsData', 'jp_activityStats', 'jp_practiceHistory',
        'jp_wrongAnswers', 'jp_dailyStreak', 'jp_timedChallenges',
        'jp_lessonProgress', 'jp_darkMode', 'jp_bgImage',
        'jp_bgOpacity', 'jp_selectedFont',
        'jp_gems', 'jp_streakFreezes', 'jp_gemShopClaimed',
        'jp_country', 'jp_school', 'jp_weeklyRewardState'
    ],

    init() {
        if (!FIREBASE_CONFIG || FIREBASE_CONFIG.apiKey === 'PASTE_YOUR_API_KEY') {
            console.log('Firebase not configured — using localStorage only');
            this._ready = true;
            return;
        }

        // Only initialize if not already done (shared project with Study Hub)
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }
        this.db = firebase.firestore();

        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
            this._ready = true;
            this.renderUI();
            if (user) this.pullFromCloud().then(() => {
                this.checkOnboarding();
                if (typeof WEEKLY_REWARD !== 'undefined') WEEKLY_REWARD.check('japanese');
            });
        });
    },

    signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log('Sign-in success:', result.user.email);
        }).catch(function(e) {
            console.error('Sign-in error code:', e.code);
            console.error('Sign-in error message:', e.message);
            alert('Sign-in failed [' + e.code + ']: ' + e.message);
        });
    },

    signOut() {
        firebase.auth().signOut().then(() => {
            this.user = null;
            this.renderUI();
        });
    },

    _docRef() {
        if (!this.db || !this.user) return null;
        return this.db.collection('users').doc(this.user.uid);
    },

    // Pull cloud data -> merge into localStorage
    async pullFromCloud() {
        const ref = this._docRef();
        if (!ref) return;
        try {
            const doc = await ref.get();
            if (doc.exists) {
                const cloud = doc.data();
                const jp = cloud.japanese;
                if (jp) {
                    // Restore all synced keys
                    for (const key of this.SYNC_KEYS) {
                        const cloudKey = key.replace('jp_', '');
                        if (jp[cloudKey] !== undefined && jp[cloudKey] !== null) {
                            const val = typeof jp[cloudKey] === 'object'
                                ? JSON.stringify(jp[cloudKey])
                                : String(jp[cloudKey]);
                            localStorage.setItem(key, val);
                        }
                    }

                    // Apply dark mode
                    if (jp.darkMode === 'true') document.body.classList.add('dark-mode');
                    else if (jp.darkMode === 'false') document.body.classList.remove('dark-mode');
                    const darkToggle = document.getElementById('dark-toggle');
                    if (darkToggle) darkToggle.textContent = document.body.classList.contains('dark-mode') ? 'On' : 'Off';

                    // Apply font
                    if (jp.selectedFont) {
                        document.body.className = document.body.className.replace(/font-\S+/g, '').trim();
                        if (jp.selectedFont !== 'system') document.body.classList.add('font-' + jp.selectedFont);
                        const fontSel = document.getElementById('font-selector');
                        if (fontSel) fontSel.value = jp.selectedFont;
                    }

                    // Apply background if present
                    if (jp.bgImage) {
                        const bgOverlay = document.getElementById('bg-overlay');
                        if (bgOverlay) {
                            bgOverlay.style.backgroundImage = 'url(' + jp.bgImage + ')';
                            document.body.classList.add('has-bg');
                            const bgClear = document.getElementById('bg-clear');
                            if (bgClear) bgClear.style.display = '';
                        }
                        if (jp.bgOpacity) {
                            const bgOp = document.getElementById('bg-opacity');
                            const bgOpVal = document.getElementById('bg-opacity-val');
                            const bgOverlay2 = document.getElementById('bg-overlay');
                            if (bgOp) bgOp.value = jp.bgOpacity;
                            if (bgOpVal) bgOpVal.textContent = jp.bgOpacity + '%';
                            if (bgOverlay2) bgOverlay2.style.opacity = jp.bgOpacity / 100;
                        }
                    }

                    // Wallpaper sharing: import from Study Hub if user has none locally
                    if (!jp.bgImage && !localStorage.getItem('jp_bgImage') && cloud.customBg) {
                        localStorage.setItem('jp_bgImage', cloud.customBg);
                        const bgOverlay = document.getElementById('bg-overlay');
                        if (bgOverlay) {
                            bgOverlay.style.backgroundImage = 'url(' + cloud.customBg + ')';
                            document.body.classList.add('has-bg');
                            const bgClear = document.getElementById('bg-clear');
                            if (bgClear) bgClear.style.display = '';
                        }
                    }

                    // Apply country/school from cloud
                    if (jp.country) localStorage.setItem('jp_country', typeof jp.country === 'object' ? JSON.stringify(jp.country) : jp.country);
                    if (jp.school) localStorage.setItem('jp_school', typeof jp.school === 'object' ? JSON.stringify(jp.school) : jp.school);

                    // Reload SRS data
                    SRS.load();
                    updateDailyStreakUI();
                    updateGemsUI();
                    updateFreezeUI();
                    console.log('Synced Japanese data from cloud');
                } else {
                    // No Japanese data in cloud yet — check for Study Hub wallpaper sharing
                    if (cloud.customBg && !localStorage.getItem('jp_bgImage')) {
                        localStorage.setItem('jp_bgImage', cloud.customBg);
                        const bgOverlay = document.getElementById('bg-overlay');
                        if (bgOverlay) {
                            bgOverlay.style.backgroundImage = 'url(' + cloud.customBg + ')';
                            document.body.classList.add('has-bg');
                            const bgClear = document.getElementById('bg-clear');
                            if (bgClear) bgClear.style.display = '';
                        }
                    }
                    // First time: push local data up
                    this.pushToCloud();
                }
            } else {
                // No doc at all — push local
                this.pushToCloud();
            }
        } catch (e) {
            console.error('Cloud pull failed:', e.message);
        }
    },

    // Push localStorage -> cloud
    async pushToCloud() {
        const ref = this._docRef();
        if (!ref) return;
        try {
            const jp = {};
            for (const key of this.SYNC_KEYS) {
                const cloudKey = key.replace('jp_', '');
                const raw = localStorage.getItem(key);
                if (raw !== null) {
                    try { jp[cloudKey] = JSON.parse(raw); }
                    catch (e) { jp[cloudKey] = raw; }
                }
            }
            jp.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

            await ref.set({ japanese: jp }, { merge: true });
            this.pushLeaderboard();
            console.log('Pushed Japanese data to cloud');
        } catch (e) {
            console.error('Cloud push failed:', e.message);
        }
    },

    // Push leaderboard entry
    async pushLeaderboard() {
        if (!this.db || !this.user) return;
        try {
            const ts = JSON.parse(localStorage.getItem('jp_activityStats') || '{}');
            const lp = JSON.parse(localStorage.getItem('jp_lessonProgress') || '{}');
            const srs = JSON.parse(localStorage.getItem('jp_srsData') || '{}');
            let totalQ = 0, totalCorrect = 0, bestStreak = 0;
            for (const k in ts) {
                totalQ += ts[k].total || 0;
                totalCorrect += ts[k].score || 0;
                const bs = Math.max(ts[k].bestStreak || 0, ts[k].streak || 0);
                if (bs > bestStreak) bestStreak = bs;
            }
            if (totalQ === 0) return;
            let itemsMastered = 0;
            for (const k in srs) { if (srs[k].level === 'mastered') itemsMastered++; }
            const lbData = {
                displayName: this.user.displayName || 'Student',
                photoURL: this.user.photoURL || '',
                totalQuestions: totalQ,
                totalCorrect: totalCorrect,
                bestStreak: bestStreak,
                itemsMastered: itemsMastered,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            const c = localStorage.getItem('jp_country');
            if (c) lbData.country = c;
            const s = localStorage.getItem('jp_school');
            if (s) lbData.school = s;
            await this.db.collection('japanese-leaderboard').doc(this.user.uid).set(lbData);
        } catch (e) { console.error('Leaderboard push failed:', e.message); }
    },

    // Onboarding modal
    checkOnboarding() {
        if (!this.user) return;
        if (localStorage.getItem('jp_country') && localStorage.getItem('jp_school')) return;
        const overlay = document.getElementById('onboard-overlay');
        if (!overlay) return;
        overlay.classList.add('show');
        const saveBtn = document.getElementById('onboard-save');
        const skipBtn = document.getElementById('onboard-skip');
        const countryEl = document.getElementById('onboard-country');
        const schoolEl = document.getElementById('onboard-school');
        const close = () => overlay.classList.remove('show');
        saveBtn.onclick = () => {
            if (countryEl.value) localStorage.setItem('jp_country', countryEl.value);
            if (schoolEl.value.trim()) localStorage.setItem('jp_school', schoolEl.value.trim());
            const cs = document.getElementById('country-selector');
            if (cs) cs.value = countryEl.value;
            const si = document.getElementById('school-input');
            if (si) si.value = schoolEl.value.trim();
            this.saveAndSync();
            close();
        };
        skipBtn.onclick = close;
    },

    // Debounced sync (2s)
    saveAndSync() {
        clearTimeout(this._syncTimer);
        this._syncTimer = setTimeout(() => this.pushToCloud(), 2000);
    },

    renderUI() {
        const container = document.getElementById('auth-bar');
        if (!container) return;

        if (this.user) {
            const name = this.user.displayName || 'Student';
            const photo = this.user.photoURL || '';
            container.innerHTML =
                '<div style="display:flex;align-items:center;gap:8px;">' +
                (photo ? '<img src="' + photo + '" style="width:28px;height:28px;border-radius:50%;" referrerpolicy="no-referrer">' : '') +
                '<span style="font-size:0.85rem;font-weight:600;">' + name + '</span>' +
                '<button class="btn btn-hint btn-sm" onclick="Auth.signOut()" style="font-size:0.75rem;">Sign Out</button>' +
                '</div>';
        } else {
            container.innerHTML =
                '<button class="btn btn-hint btn-sm" onclick="Auth.signIn()" style="font-size:0.8rem;">' +
                'Sign in with Google</button>';
        }
    }
};
