/* ================================================================
   INIT — Wire everything together
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase Auth
    if (typeof Auth !== 'undefined') Auth.init();

    // Initialize SRS
    SRS.load();

    // Initialize trainers
    HIRA.init();
    KATA.init();
    KANJI.init();
    GRAM.init();
    VOCAB.init();
    CONV.init();
    CONJ.init();
    NUM.init();

    // Build reference charts
    HIRA.buildRefChart();
    KATA.buildRefChart();

    // Update streak + gems + freeze UI
    updateDailyStreakUI();
    updateGemsUI();
    updateFreezeUI();

    // Initialize free writing canvas
    WritingPad.init('free-canvas');

    // ---- Topic card navigation ----
    document.querySelectorAll('.topic-card[data-topic]').forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.dataset.topic;
            // Hub → folders
            if (topic === 'writing') showView('writing');
            else if (topic === 'kanji-folder') showView('kanji-folder');
            else if (topic === 'grammar-folder') showView('grammar-folder');
            else if (topic === 'vocab-folder') showView('vocab-folder');
            else if (topic === 'conv-folder') showView('conv-folder');
            else if (topic === 'study-guide') { showView('study-guide'); STUDY_GUIDE.render(); }
            else if (topic === 'dashboard') { showView('dashboard'); DASHBOARD.render(); }
            else if (topic === 'leaderboard') { showView('leaderboard'); renderLeaderboard(); }
            // Folder → trainers
            else if (topic === 'hira-trainer') { showView('hira-trainer'); HIRA.load(); }
            else if (topic === 'kata-trainer') { showView('kata-trainer'); KATA.load(); }
            else if (topic === 'kanji-trainer') { showView('kanji-trainer'); KANJI.load(); }
            else if (topic === 'gram-trainer') { showView('gram-trainer'); GRAM.load(); }
            else if (topic === 'vocab-trainer') { showView('vocab-trainer'); VOCAB.load(); }
            else if (topic === 'conv-trainer') { showView('conv-trainer'); CONV.load(); }
            else if (topic === 'conj-trainer') { showView('conj-trainer'); CONJ.load(); }
            else if (topic === 'num-trainer') { showView('num-trainer'); NUM.load(); }
            else if (topic === 'writing-canvas') showView('writing-canvas');
        });
    });

    // ---- Lesson card navigation ----
    const LESSONS = {
        'hiragana-intro': typeof LESSON_HIRAGANA_INTRO !== 'undefined' ? LESSON_HIRAGANA_INTRO : null,
        'katakana-intro': typeof LESSON_KATAKANA_INTRO !== 'undefined' ? LESSON_KATAKANA_INTRO : null,
        'kanji-basics': typeof LESSON_KANJI_BASICS !== 'undefined' ? LESSON_KANJI_BASICS : null,
        'particles-intro': typeof LESSON_PARTICLES_INTRO !== 'undefined' ? LESSON_PARTICLES_INTRO : null,
        'verb-forms': typeof LESSON_VERB_FORMS !== 'undefined' ? LESSON_VERB_FORMS : null,
        'adjectives': typeof LESSON_ADJECTIVES !== 'undefined' ? LESSON_ADJECTIVES : null,
        'sentence-structure': typeof LESSON_SENTENCE_STRUCTURE !== 'undefined' ? LESSON_SENTENCE_STRUCTURE : null,
        'counting': typeof LESSON_COUNTING !== 'undefined' ? LESSON_COUNTING : null,
        'conversations-intro': typeof LESSON_CONVERSATIONS_INTRO !== 'undefined' ? LESSON_CONVERSATIONS_INTRO : null,
        'conversations-daily': typeof LESSON_CONVERSATIONS_DAILY !== 'undefined' ? LESSON_CONVERSATIONS_DAILY : null,
        'conjugation-verbs': typeof LESSON_CONJUGATION_VERBS !== 'undefined' ? LESSON_CONJUGATION_VERBS : null,
        'conjugation-adjectives': typeof LESSON_CONJUGATION_ADJECTIVES !== 'undefined' ? LESSON_CONJUGATION_ADJECTIVES : null,
        'numbers-intro': typeof LESSON_NUMBERS_INTRO !== 'undefined' ? LESSON_NUMBERS_INTRO : null,
        'numbers-counters': typeof LESSON_NUMBERS_COUNTERS !== 'undefined' ? LESSON_NUMBERS_COUNTERS : null,
        'katakana-loanwords': typeof LESSON_KATAKANA_LOANWORDS !== 'undefined' ? LESSON_KATAKANA_LOANWORDS : null,
        'family-vocab': typeof LESSON_FAMILY_VOCAB !== 'undefined' ? LESSON_FAMILY_VOCAB : null,
        'question-words': typeof LESSON_QUESTION_WORDS !== 'undefined' ? LESSON_QUESTION_WORDS : null,
        'adjectives-n5': typeof LESSON_ADJECTIVES_N5 !== 'undefined' ? LESSON_ADJECTIVES_N5 : null
    };

    document.querySelectorAll('[data-lesson]').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.lesson;
            const lesson = LESSONS[id];
            if (lesson) LessonEngine.start(lesson);
        });
    });

    // Update lesson tags (done/not done)
    Object.keys(LESSONS).forEach(id => {
        const tag = document.getElementById('lesson-tag-' + id);
        if (tag && LessonEngine.isComplete(id)) {
            tag.textContent = 'Done';
            tag.className = 'topic-tag lesson-done';
        }
    });

    // ---- Level selectors ----
    function setupLevels(containerId, trainer, callback) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                container.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                trainer.level = btn.dataset.level;
                if (callback) callback();
            });
        });
    }

    setupLevels('hira-levels', HIRA, () => HIRA.load());
    setupLevels('kata-levels', KATA, () => KATA.load());
    setupLevels('kanji-levels', KANJI, () => KANJI.load());
    setupLevels('gram-levels', GRAM, () => GRAM.load());
    setupLevels('vocab-levels', VOCAB, () => VOCAB.load());
    setupLevels('conv-levels', CONV, () => CONV.load());
    setupLevels('conj-levels', CONJ, () => CONJ.load());
    setupLevels('num-levels', NUM, () => NUM.load());

    // ---- Mode toggles (Quiz / Write) ----
    function setupModes(containerId, trainer, callback) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                trainer.mode = btn.dataset.mode;
                if (callback) callback();
            });
        });
    }

    setupModes('hira-modes', HIRA, () => HIRA.load());
    setupModes('kata-modes', KATA, () => KATA.load());
    setupModes('kanji-modes', KANJI, () => KANJI.load());

    // ---- Enter key for Next buttons ----
    document.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        if (document.activeElement && (
            document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'TEXTAREA')) return;

        // Check for visible next buttons
        const nextBtns = ['hira-next', 'kata-next', 'kanji-next', 'gram-next', 'vocab-next', 'conv-next', 'conj-next', 'num-next'];
        for (const id of nextBtns) {
            const btn = document.getElementById(id);
            if (btn && btn.classList.contains('show')) {
                e.preventDefault();
                btn.click();
                return;
            }
        }
    });

    // ---- Settings ----
    const settingsBtn = document.getElementById('settings-btn');
    const settingsDropdown = document.getElementById('settings-dropdown');
    settingsBtn.addEventListener('click', () => {
        settingsDropdown.classList.toggle('show');
    });

    // Dark mode
    const darkToggle = document.getElementById('dark-toggle');
    const isDark = document.body.classList.contains('dark-mode');
    darkToggle.textContent = isDark ? 'On' : 'Off';

    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const on = document.body.classList.contains('dark-mode');
        darkToggle.textContent = on ? 'On' : 'Off';
        localStorage.setItem('jp_darkMode', on);

        // Update writing pads
        Object.keys(WritingPad.pads).forEach(id => {
            WritingPad.setDarkMode(id, on);
        });
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    });

    // Custom wallpaper
    const bgUpload = document.getElementById('bg-upload');
    const bgChoose = document.getElementById('bg-choose');
    const bgClear = document.getElementById('bg-clear');
    const bgOpacity = document.getElementById('bg-opacity');
    const bgOpacityVal = document.getElementById('bg-opacity-val');
    const bgOverlay = document.getElementById('bg-overlay');

    bgChoose.addEventListener('click', () => bgUpload.click());
    bgUpload.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const img = new Image();
        img.onload = () => {
            const maxW = 1920;
            let w = img.width, h = img.height;
            if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            try {
                localStorage.setItem('jp_bgImage', dataUrl);
                applyBg(dataUrl);
                if (typeof Auth !== 'undefined') Auth.saveAndSync();
            } catch (err) {
                alert('Image too large for localStorage. Try a smaller image.');
            }
        };
        img.src = URL.createObjectURL(file);
        bgUpload.value = '';
    });

    bgClear.addEventListener('click', () => {
        localStorage.removeItem('jp_bgImage');
        applyBgFull();
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    });

    bgOpacity.addEventListener('input', () => {
        const val = bgOpacity.value;
        bgOpacityVal.textContent = val + '%';
        bgOverlay.style.opacity = val / 100;
        localStorage.setItem('jp_bgOpacity', val);
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    });

    function toggleBgCredit(show) {
        let el = document.getElementById('bg-credit');
        if (show && !el) {
            el = document.createElement('div');
            el.id = 'bg-credit';
            el.style.cssText = 'position:fixed;bottom:8px;right:12px;font-size:0.65rem;opacity:0.55;z-index:1001;pointer-events:auto;';
            el.innerHTML = 'BG: <a href="https://otographicmusic.com" target="_blank" rel="noopener" style="color:inherit">Otographic</a> \u00b7 <a href="https://open.spotify.com/album/1qmgLILPd22BpsmPgqbV55" target="_blank" rel="noopener" style="color:inherit">Kalos Eidos \u2014 Masanori Yasuda</a>';
            document.body.appendChild(el);
        } else if (!show && el) {
            el.remove();
        }
    }

    function applyBgFull() {
        const data = localStorage.getItem('jp_bgImage');
        const opacity = parseInt(localStorage.getItem('jp_bgOpacity') || '15') / 100;
        if (data) {
            bgOverlay.style.backgroundImage = 'url(' + data + ')';
            bgOverlay.style.opacity = opacity;
            document.body.classList.add('has-bg');
            bgClear.style.display = '';
            toggleBgCredit(false);
        } else {
            const defOpacity = localStorage.getItem('jp_bgOpacity') ? opacity : 0.80;
            bgOverlay.style.backgroundImage = 'url(assets/default-bg.jpg)';
            bgOverlay.style.opacity = defOpacity;
            document.body.classList.add('has-bg');
            bgClear.style.display = 'none';
            toggleBgCredit(true);
        }
    }

    function applyBg(url) {
        bgOverlay.style.backgroundImage = 'url(' + url + ')';
        document.body.classList.add('has-bg');
        bgClear.style.display = '';
        toggleBgCredit(false);
    }

    // Restore saved bg or apply default
    applyBgFull();

    const savedOpacity = localStorage.getItem('jp_bgOpacity');
    if (savedOpacity) {
        bgOpacity.value = savedOpacity;
        bgOpacityVal.textContent = savedOpacity + '%';
    }

    // Font selector
    const fontSelector = document.getElementById('font-selector');
    const savedFont = localStorage.getItem('jp_selectedFont');
    if (savedFont) {
        fontSelector.value = savedFont;
        if (savedFont !== 'system') document.body.classList.add('font-' + savedFont);
    }

    fontSelector.addEventListener('change', () => {
        // Remove old font class
        document.body.className = document.body.className.replace(/font-\S+/g, '').trim();
        const val = fontSelector.value;
        if (val !== 'system') document.body.classList.add('font-' + val);
        localStorage.setItem('jp_selectedFont', val);
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    });

    // ---- Continue Prompt ----
    function showContinuePrompt() {
        const container = document.getElementById('continue-prompt');
        if (!container) return;

        const allStats = getAllTrainerStats();
        const CONTINUE_MAP = {
            HIRA: { name: 'Hiragana Trainer', view: 'hira-trainer', loader: () => { showView('hira-trainer'); HIRA.load(); } },
            KATA: { name: 'Katakana Trainer', view: 'kata-trainer', loader: () => { showView('kata-trainer'); KATA.load(); } },
            KANJI: { name: 'Kanji Trainer', view: 'kanji-trainer', loader: () => { showView('kanji-trainer'); KANJI.load(); } },
            GRAM: { name: 'Grammar Trainer', view: 'gram-trainer', loader: () => { showView('gram-trainer'); GRAM.load(); } },
            VOCAB: { name: 'Vocabulary Trainer', view: 'vocab-trainer', loader: () => { showView('vocab-trainer'); VOCAB.load(); } },
            CONV: { name: 'Conversation Trainer', view: 'conv-trainer', loader: () => { showView('conv-trainer'); CONV.load(); } },
            CONJ: { name: 'Conjugation Drill', view: 'conj-trainer', loader: () => { showView('conj-trainer'); CONJ.load(); } },
            NUM: { name: 'Numbers Trainer', view: 'num-trainer', loader: () => { showView('num-trainer'); NUM.load(); } }
        };

        // Find most recent trainer
        let latest = null, latestTs = 0;
        for (const key in allStats) {
            const s = allStats[key];
            if (s.lastTs > latestTs && CONTINUE_MAP[key]) {
                latestTs = s.lastTs;
                latest = key;
            }
        }

        if (!latest || Date.now() - latestTs > 7 * 86400000) {
            container.innerHTML = '';
            return;
        }

        const info = CONTINUE_MAP[latest];
        const s = allStats[latest];
        const ago = formatTimeAgo(latestTs);

        container.innerHTML = '<div class="continue-card">' +
            '<div class="continue-left">' +
            '<div class="continue-label">Pick up where you left off</div>' +
            '<div class="continue-name">' + info.name + '</div>' +
            '<div class="continue-meta">Score: ' + s.score + '/' + s.total + ' &middot; ' + ago + '</div>' +
            '</div>' +
            '<button class="btn btn-primary continue-go" id="continue-go-btn">Continue</button>' +
            '<button class="continue-dismiss" id="continue-dismiss" title="Dismiss">&times;</button>' +
            '</div>';

        document.getElementById('continue-go-btn').addEventListener('click', () => {
            info.loader();
        });
        document.getElementById('continue-dismiss').addEventListener('click', () => {
            container.innerHTML = '';
        });
    }

    function formatTimeAgo(ts) {
        const diff = Date.now() - ts;
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return mins + 'm ago';
        const hours = Math.floor(mins / 60);
        if (hours < 24) return hours + 'h ago';
        const days = Math.floor(hours / 24);
        if (days === 1) return 'yesterday';
        if (days < 7) return days + ' days ago';
        return new Date(ts).toLocaleDateString();
    }

    showContinuePrompt();

    // ---- Hub card auto-count tags ----
    function updateHubCounts() {
        const lessonIds = {
            writing: ['hiragana-intro', 'katakana-intro'],
            'kanji-folder': ['kanji-basics'],
            'grammar-folder': ['particles-intro', 'verb-forms', 'adjectives', 'sentence-structure', 'conjugation-verbs', 'conjugation-adjectives'],
            'vocab-folder': ['counting', 'numbers-intro', 'numbers-counters'],
            'conv-folder': ['conversations-intro', 'conversations-daily']
        };
        const trainerIds = {
            writing: ['HIRA', 'KATA'],
            'kanji-folder': ['KANJI'],
            'grammar-folder': ['GRAM', 'CONJ'],
            'vocab-folder': ['VOCAB', 'NUM'],
            'conv-folder': ['CONV']
        };

        const tagMap = {
            writing: 'writing-count',
            'kanji-folder': 'kanji-count',
            'grammar-folder': 'grammar-count',
            'vocab-folder': 'vocab-count',
            'conv-folder': 'conv-count'
        };

        for (const topic in tagMap) {
            const el = document.getElementById(tagMap[topic]);
            if (!el) continue;
            const tCount = (trainerIds[topic] || []).length;
            const lCount = (lessonIds[topic] || []).length;
            el.textContent = tCount + ' trainer' + (tCount !== 1 ? 's' : '') +
                ' · ' + lCount + ' lesson' + (lCount !== 1 ? 's' : '');
        }
    }
    updateHubCounts();

    // ---- Background music ----
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    const musicSettingBtn = document.getElementById('music-setting-toggle');
    const musicVolSlider = document.getElementById('music-volume');
    const musicVolVal = document.getElementById('music-volume-val');

    if (bgMusic && musicBtn) {
        const savedVol = parseFloat(localStorage.getItem('jp_musicVolume') || '0.3');
        const savedOn = localStorage.getItem('jp_musicOn') === 'true';
        bgMusic.volume = savedVol;
        if (musicVolSlider) musicVolSlider.value = Math.round(savedVol * 100);
        if (musicVolVal) musicVolVal.textContent = Math.round(savedVol * 100) + '%';
        if (musicSettingBtn) musicSettingBtn.textContent = savedOn ? 'On' : 'Off';

        function toggleMusic() {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicBtn.classList.add('playing');
                    if (musicSettingBtn) musicSettingBtn.textContent = 'On';
                    localStorage.setItem('jp_musicOn', 'true');
                }).catch(() => {});
            } else {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
                if (musicSettingBtn) musicSettingBtn.textContent = 'Off';
                localStorage.setItem('jp_musicOn', 'false');
            }
        }

        musicBtn.addEventListener('click', toggleMusic);
        if (musicSettingBtn) musicSettingBtn.addEventListener('click', toggleMusic);

        if (musicVolSlider) {
            musicVolSlider.addEventListener('input', () => {
                const v = musicVolSlider.value / 100;
                bgMusic.volume = v;
                if (musicVolVal) musicVolVal.textContent = musicVolSlider.value + '%';
                localStorage.setItem('jp_musicVolume', v);
            });
        }

        // Auto-play if previously on (requires user gesture first)
        if (savedOn) {
            bgMusic.play().then(() => {
                musicBtn.classList.add('playing');
            }).catch(() => {});
        }
    }

    // ---- Country + School Settings ----
    const countrySelector = document.getElementById('country-selector');
    if (countrySelector) {
        countrySelector.value = localStorage.getItem('jp_country') || '';
        countrySelector.addEventListener('change', () => {
            localStorage.setItem('jp_country', countrySelector.value);
            if (typeof Auth !== 'undefined') Auth.saveAndSync();
        });
    }
    const schoolInput = document.getElementById('school-input');
    if (schoolInput) {
        schoolInput.value = localStorage.getItem('jp_school') || '';
        let schoolTimer;
        schoolInput.addEventListener('input', () => {
            clearTimeout(schoolTimer);
            schoolTimer = setTimeout(() => {
                localStorage.setItem('jp_school', schoolInput.value.trim());
                if (typeof Auth !== 'undefined') Auth.saveAndSync();
            }, 1000);
        });
    }

    // ---- Feedback Widget ----
    const fbBtn = document.getElementById('fb-float-btn');
    const fbPanel = document.getElementById('fb-float-panel');
    if (fbBtn && fbPanel) {
        fbBtn.addEventListener('click', () => { fbPanel.classList.toggle('show'); fbBtn.classList.toggle('hidden'); });
        document.getElementById('fb-float-close').addEventListener('click', () => { fbPanel.classList.remove('show'); fbBtn.classList.remove('hidden'); });
        document.getElementById('fb-submit').addEventListener('click', () => FEEDBACK.submit());
    }

    // ---- Leaderboard ----
    function countryFlag(code) {
        if (!code || code.length !== 2) return '';
        return String.fromCodePoint(...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) + ' ';
    }

    async function renderLeaderboard() {
        const el = document.getElementById('leaderboard-content');
        if (!el) return;
        if (typeof Auth === 'undefined' || !Auth.db) {
            el.innerHTML = '<p style="text-align:center;color:var(--text-light)">Sign in to view the leaderboard.</p>';
            return;
        }
        el.innerHTML = '<p style="text-align:center;color:var(--text-light)">Loading\u2026</p>';
        try {
            const snap = await Auth.db.collection('japanese-leaderboard').orderBy('totalQuestions', 'desc').limit(20).get();
            if (snap.empty) {
                el.innerHTML = '<p style="text-align:center;color:var(--text-light)">No entries yet. Answer some questions to appear here!</p>';
                return;
            }
            let h = '<table class="lb-table"><thead><tr><th>#</th><th>Student</th><th>School</th><th>Questions</th><th>Accuracy</th><th>Streak</th></tr></thead><tbody>';
            let rank = 0;
            snap.forEach(doc => {
                rank++;
                const d = doc.data();
                const isMe = Auth.user && doc.id === Auth.user.uid;
                const pct = d.totalQuestions > 0 ? Math.round((d.totalCorrect || 0) / d.totalQuestions * 100) + '%' : '\u2014';
                const avatar = d.photoURL ? '<img class="lb-avatar" src="' + d.photoURL + '" alt="" referrerpolicy="no-referrer">' : '';
                const flag = countryFlag(d.country);
                h += '<tr class="' + (isMe ? 'lb-me' : '') + '">';
                h += '<td>' + rank + '</td>';
                h += '<td>' + avatar + flag + (d.displayName || 'Student') + '</td>';
                h += '<td class="lb-school">' + (d.school || '\u2014') + '</td>';
                h += '<td>' + (d.totalQuestions || 0) + '</td>';
                h += '<td>' + pct + '</td>';
                h += '<td>' + (d.bestStreak || 0) + '</td>';
                h += '</tr>';
            });
            h += '</tbody></table>';
            el.innerHTML = h;
        } catch (e) {
            el.innerHTML = '<p style="text-align:center;color:var(--text-light)">Could not load leaderboard.</p>';
        }
    }

    // ---- Hub Stats Card ----
    function renderHubStats() {
        const el = document.getElementById('hub-stats');
        if (!el) return;
        const gems = getGems();
        const ds = getDailyStreak();
        const allStats = getAllTrainerStats();
        let totalQ = 0, totalCorrect = 0;
        for (const k in allStats) { totalQ += allStats[k].total || 0; totalCorrect += allStats[k].score || 0; }
        const accuracy = totalQ > 0 ? Math.round(totalCorrect / totalQ * 100) : 0;
        const lp = JSON.parse(localStorage.getItem('jp_lessonProgress') || '{}');
        let lessonsComplete = 0;
        for (const k in lp) { if (lp[k] && lp[k].completed) lessonsComplete++; }
        const srsData = JSON.parse(localStorage.getItem('jp_srsData') || '{}');
        let mastered = 0;
        for (const k in srsData) { if (srsData[k].level === 'mastered') mastered++; }

        el.innerHTML =
            '<div class="hub-stat"><div class="hub-stat-value gem-val">' + gems.balance + '</div><div class="hub-stat-label">Gems</div></div>' +
            '<div class="hub-stat"><div class="hub-stat-value" style="color:#ffc107">' + (ds.current || 0) + '</div><div class="hub-stat-label">Day Streak</div></div>' +
            '<div class="hub-stat"><div class="hub-stat-value">' + totalQ + '</div><div class="hub-stat-label">Questions</div></div>' +
            '<div class="hub-stat"><div class="hub-stat-value" style="color:var(--success)">' + accuracy + '%</div><div class="hub-stat-label">Accuracy</div></div>' +
            '<div class="hub-stat"><div class="hub-stat-value" style="color:#457b9d">' + lessonsComplete + '</div><div class="hub-stat-label">Lessons</div></div>' +
            '<div class="hub-stat"><div class="hub-stat-value" style="color:#2a9d8f">' + mastered + '</div><div class="hub-stat-label">Mastered</div></div>';
    }
    renderHubStats();

    // Update Study Guide hub tag
    if (typeof STUDY_GUIDE !== 'undefined') STUDY_GUIDE.updateHubTag();

    // ---- Search Bar (Ctrl+K) ----
    (function () {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        if (!searchInput || !searchResults) return;

        // Build search index
        const index = [];
        const TRAINER_MAP = {
            'hira-trainer': 'Hiragana Trainer', 'kata-trainer': 'Katakana Trainer',
            'kanji-trainer': 'Kanji Trainer', 'gram-trainer': 'Grammar Trainer',
            'vocab-trainer': 'Vocabulary Trainer', 'conv-trainer': 'Conversation Trainer',
            'conj-trainer': 'Conjugation Drill', 'num-trainer': 'Numbers Trainer'
        };
        for (const id in TRAINER_MAP) {
            index.push({ name: TRAINER_MAP[id], type: 'Trainer', action: () => {
                document.querySelector('[data-topic="' + id + '"]').click();
            }});
        }
        const FOLDER_MAP = {
            'writing': 'Writing System', 'kanji-folder': 'Kanji',
            'grammar-folder': 'Grammar', 'vocab-folder': 'Vocabulary',
            'conv-folder': 'Conversation', 'study-guide': 'Study Guide',
            'dashboard': 'Progress Dashboard', 'leaderboard': 'Leaderboard'
        };
        for (const id in FOLDER_MAP) {
            index.push({ name: FOLDER_MAP[id], type: 'Topic', action: () => {
                document.querySelector('[data-topic="' + id + '"]').click();
            }});
        }
        document.querySelectorAll('[data-lesson]').forEach(card => {
            const name = card.querySelector('h2') ? card.querySelector('h2').textContent : card.dataset.lesson;
            index.push({ name: name, type: 'Lesson', action: () => card.click() });
        });

        let activeIdx = -1;

        function doSearch(query) {
            const q = query.toLowerCase().trim();
            if (!q) { searchResults.classList.remove('show'); searchResults.innerHTML = ''; return; }
            const matches = index.filter(item => item.name.toLowerCase().includes(q));
            if (matches.length === 0) { searchResults.classList.remove('show'); searchResults.innerHTML = ''; return; }
            searchResults.innerHTML = matches.slice(0, 8).map((m, i) =>
                '<div class="search-result' + (i === activeIdx ? ' active' : '') + '" data-idx="' + i + '">' +
                m.name + '<span class="search-result-type">' + m.type + '</span></div>'
            ).join('');
            searchResults.classList.add('show');
            searchResults.querySelectorAll('.search-result').forEach(el => {
                el.addEventListener('click', () => {
                    const idx = parseInt(el.dataset.idx);
                    matches[idx].action();
                    searchInput.value = '';
                    searchResults.classList.remove('show');
                    searchResults.innerHTML = '';
                });
            });
        }

        searchInput.addEventListener('input', () => { activeIdx = -1; doSearch(searchInput.value); });
        searchInput.addEventListener('keydown', e => {
            const items = searchResults.querySelectorAll('.search-result');
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIdx = Math.min(activeIdx + 1, items.length - 1);
                items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIdx = Math.max(activeIdx - 1, 0);
                items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
            } else if (e.key === 'Enter' && activeIdx >= 0 && items[activeIdx]) {
                e.preventDefault();
                items[activeIdx].click();
            } else if (e.key === 'Escape') {
                searchInput.value = '';
                searchInput.blur();
                doSearch('');
            }
        });

        // Ctrl+K shortcut
        document.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                showView('hub');
                searchInput.focus();
            }
        });
    })();

    // ---- Streak reminder (3s delay) ----
    setTimeout(() => {
        if (typeof checkStreakReminder === 'function') checkStreakReminder();
    }, 3000);

    // ---- Remove loading screen ----
    setTimeout(() => {
        const ls = document.getElementById('loading-screen');
        if (ls) ls.classList.add('hidden');
    }, 400);
});
