/* ================================================================
   Shared Utilities — Japanese Learning Guide
   ================================================================ */
function randInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// -- View Navigation ---------------------------------------------------------
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById('view-' + id);
    if (el) el.classList.add('active');
    window.scrollTo(0, 0);
}

// -- Progressive Hint System -------------------------------------------------
function handleHint(trainer, boxId, btnId) {
    const box = document.getElementById(boxId);
    const btn = document.getElementById(btnId);
    const q = trainer.currentQ;
    if (!q) return;
    let hints = q.hints;
    if (!hints) return;
    if (typeof hints === 'string') hints = [hints];

    if (trainer.hintIdx >= hints.length) {
        box.classList.toggle('show');
        return;
    }

    if (trainer.hintIdx === 0) box.innerHTML = '';
    const div = document.createElement('div');
    div.style.margin = '6px 0';
    div.innerHTML = hints.length > 1
        ? '<strong>Hint ' + (trainer.hintIdx + 1) + ':</strong> ' + hints[trainer.hintIdx]
        : hints[trainer.hintIdx];
    box.appendChild(div);
    box.classList.add('show');
    trainer.hintIdx++;

    if (trainer.hintIdx < hints.length) {
        btn.textContent = 'Next Hint (' + trainer.hintIdx + '/' + hints.length + ')';
    } else {
        btn.textContent = hints.length > 1 ? 'All Hints Shown' : 'Hint';
    }
}

function resetHint(boxId, btnId) {
    const box = document.getElementById(boxId);
    const btn = document.getElementById(btnId);
    if (box) { box.classList.remove('show'); box.innerHTML = ''; }
    if (btn) btn.textContent = 'Hint';
}

// -- SRS (Spaced Repetition System — SM-2) -----------------------------------
const SRS = {
    data: {},

    load() {
        try { this.data = JSON.parse(localStorage.getItem('jp_srsData') || '{}'); }
        catch (e) { this.data = {}; }
    },

    save() {
        localStorage.setItem('jp_srsData', JSON.stringify(this.data));
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    },

    getItem(key) {
        if (!this.data[key]) {
            this.data[key] = {
                interval: 0, // days
                repetition: 0,
                efactor: 2.5,
                nextReview: 0, // timestamp
                level: 'new' // new, learning, reviewing, mastered
            };
        }
        return this.data[key];
    },

    review(key, quality) {
        // quality: 0-5 (0=total blackout, 5=perfect)
        const item = this.getItem(key);

        if (quality >= 3) {
            // Correct
            if (item.repetition === 0) item.interval = 1;
            else if (item.repetition === 1) item.interval = 6;
            else item.interval = Math.round(item.interval * item.efactor);
            item.repetition++;
        } else {
            // Incorrect
            item.repetition = 0;
            item.interval = 0;
        }

        item.efactor = Math.max(1.3,
            item.efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

        const now = Date.now();
        item.nextReview = now + item.interval * 86400000;

        // Update mastery level
        if (item.repetition === 0) item.level = 'learning';
        else if (item.repetition <= 1) item.level = 'learning';
        else if (item.repetition <= 4) item.level = 'reviewing';
        else item.level = 'mastered';

        this.data[key] = item;
        this.save();
    },

    isDue(key) {
        const item = this.data[key];
        if (!item) return true; // new items are always "due"
        return Date.now() >= item.nextReview;
    },

    getLevel(key) {
        const item = this.data[key];
        if (!item) return 'new';
        return item.level;
    },

    getDueItems(prefix) {
        const now = Date.now();
        const due = [];
        for (const key in this.data) {
            if (key.startsWith(prefix) && now >= this.data[key].nextReview) {
                due.push(key);
            }
        }
        return due;
    },

    getStats(prefix) {
        let counts = { new: 0, learning: 0, reviewing: 0, mastered: 0 };
        for (const key in this.data) {
            if (key.startsWith(prefix)) {
                counts[this.data[key].level]++;
            }
        }
        return counts;
    }
};

// -- Timed Challenge Mode ----------------------------------------------------
const TIMED = {
    active: false,
    prefix: null,
    trainer: null,
    score: 0, total: 0,
    _startScore: 0, _startTotal: 0,
    timeLeft: 60,
    interval: null,
    best: {},

    start(prefix, trainer) {
        this.active = true;
        this.prefix = prefix;
        this.trainer = trainer;
        this._startScore = trainer.score;
        this._startTotal = trainer.total;
        this.score = 0;
        this.total = 0;
        this.timeLeft = 60;
        this.loadBest();

        const view = document.querySelector('.view.active');
        const scoreBar = view ? view.querySelector('.score-bar') : null;
        if (scoreBar) scoreBar.style.display = 'none';

        let timerBar = document.getElementById('timed-timer');
        if (!timerBar) {
            timerBar = document.createElement('div');
            timerBar.id = 'timed-timer';
            timerBar.className = 'timed-timer';
            timerBar.innerHTML = '<div class="timed-timer-fill" id="timed-timer-fill"></div>' +
                '<span class="timed-timer-text" id="timed-timer-text">60s</span>';
            document.getElementById('app').prepend(timerBar);
        }
        timerBar.style.display = '';
        document.getElementById('timed-timer-fill').style.width = '100%';
        document.getElementById('timed-timer-fill').style.background = '';
        document.getElementById('timed-timer-text').textContent = '60s';

        this.interval = setInterval(() => this.tick(), 1000);
        trainer.load();
    },

    tick() {
        this.timeLeft--;
        const pct = Math.max(0, (this.timeLeft / 60) * 100);
        document.getElementById('timed-timer-fill').style.width = pct + '%';
        document.getElementById('timed-timer-text').textContent = this.timeLeft + 's';
        if (this.timeLeft <= 10) {
            document.getElementById('timed-timer-fill').style.background = 'var(--error)';
        }
        if (this.timeLeft <= 0) this.end();
    },

    recordAnswer() {
        this.score = this.trainer.score - this._startScore;
        this.total = this.trainer.total - this._startTotal;
        if (this.active) {
            setTimeout(() => {
                if (this.active && this.trainer) this.trainer.load();
            }, 800);
        }
    },

    end() {
        this.active = false;
        clearInterval(this.interval);
        this.interval = null;

        this.score = this.trainer.score - this._startScore;
        this.total = this.trainer.total - this._startTotal;

        const timerBar = document.getElementById('timed-timer');
        if (timerBar) timerBar.style.display = 'none';

        const view = document.querySelector('.view.active');
        const scoreBar = view ? view.querySelector('.score-bar') : null;
        if (scoreBar) scoreBar.style.display = '';

        this.saveBest();

        const accuracy = this.total > 0 ? Math.round(this.score / this.total * 100) : 0;
        const pb = this.best[this.prefix];
        const pbText = pb ? pb.score + '/' + pb.total + ' (' + Math.round(pb.score / pb.total * 100) + '%)' : '\u2014';

        let overlay = document.getElementById('timed-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'timed-overlay';
            overlay.className = 'timed-overlay';
            document.body.appendChild(overlay);
        }
        overlay.innerHTML = '<div class="timed-results">' +
            '<h2>Time\'s Up!</h2>' +
            '<div class="timed-stat-grid">' +
            '<div class="timed-stat"><div class="timed-stat-val">' + this.score + '/' + this.total + '</div><div class="timed-stat-lbl">Correct</div></div>' +
            '<div class="timed-stat"><div class="timed-stat-val">' + accuracy + '%</div><div class="timed-stat-lbl">Accuracy</div></div>' +
            '<div class="timed-stat"><div class="timed-stat-val">' + pbText + '</div><div class="timed-stat-lbl">Personal Best</div></div>' +
            '</div>' +
            '<div class="timed-btn-row">' +
            '<button class="btn btn-hint" onclick="TIMED.close()">Back</button>' +
            '<button class="btn btn-primary" onclick="TIMED.retry()">Try Again</button>' +
            '</div></div>';
        overlay.style.display = 'flex';
    },

    close() {
        const overlay = document.getElementById('timed-overlay');
        if (overlay) overlay.style.display = 'none';
    },

    retry() {
        this.close();
        this.start(this.prefix, this.trainer);
    },

    loadBest() {
        try { this.best = JSON.parse(localStorage.getItem('jp_timedChallenges') || '{}'); } catch (e) { this.best = {}; }
    },

    saveBest() {
        this.loadBest();
        const k = this.prefix;
        const prev = this.best[k];
        if (!prev || this.score > prev.score || (this.score === prev.score && this.total < prev.total)) {
            this.best[k] = { score: this.score, total: this.total, ts: Date.now() };
        }
        localStorage.setItem('jp_timedChallenges', JSON.stringify(this.best));
    }
};

// -- Wrong Answer Review Pool ------------------------------------------------
function saveWrongAnswer(prefix, qData) {
    try {
        const all = JSON.parse(localStorage.getItem('jp_wrongAnswers') || '{}');
        if (!all[prefix]) all[prefix] = [];
        all[prefix].push(qData);
        if (all[prefix].length > 10) all[prefix].shift();
        localStorage.setItem('jp_wrongAnswers', JSON.stringify(all));
    } catch (e) {}
}
function getWrongAnswer(prefix) {
    try {
        const all = JSON.parse(localStorage.getItem('jp_wrongAnswers') || '{}');
        const pool = all[prefix];
        if (!pool || pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    } catch (e) { return null; }
}
function removeWrongAnswer(prefix, qData) {
    try {
        const all = JSON.parse(localStorage.getItem('jp_wrongAnswers') || '{}');
        const pool = all[prefix];
        if (!pool) return;
        const idx = pool.findIndex(q => JSON.stringify(q) === JSON.stringify(qData));
        if (idx !== -1) pool.splice(idx, 1);
        localStorage.setItem('jp_wrongAnswers', JSON.stringify(all));
    } catch (e) {}
}

// -- Practice History --------------------------------------------------------
function savePracticeSession(prefix, score, total) {
    try {
        const hist = JSON.parse(localStorage.getItem('jp_practiceHistory') || '[]');
        const now = Date.now();
        const last = hist[hist.length - 1];
        if (last && last.prefix === prefix && (now - last.date) < 120000) {
            last.score = score;
            last.total = total;
            last.date = now;
        } else {
            hist.push({ prefix: prefix, date: now, score: score, total: total });
        }
        if (hist.length > 50) hist.shift();
        localStorage.setItem('jp_practiceHistory', JSON.stringify(hist));
    } catch (e) {}
}

// -- Trainer Score Persistence -----------------------------------------------
function saveTrainerStats(prefix, trainer, ok) {
    try {
        const all = JSON.parse(localStorage.getItem('jp_trainerStats') || '{}');
        all[prefix] = {
            score: trainer.score, total: trainer.total, streak: trainer.streak,
            bestStreak: Math.max(trainer.streak, (all[prefix]?.bestStreak || 0)),
            lastTs: Date.now()
        };
        localStorage.setItem('jp_trainerStats', JSON.stringify(all));
        updateDailyStreak();
        // Gem reward per correct answer (streak-scaled, capped at 5)
        if (ok === true) addGems(Math.min(trainer.streak || 1, 5));
        if (ok === false && trainer.currentQ) saveWrongAnswer(prefix, trainer.currentQ);
        if (ok === true && trainer.currentQ) removeWrongAnswer(prefix, trainer.currentQ);
        savePracticeSession(prefix, trainer.score, trainer.total);
        if (TIMED.active) TIMED.recordAnswer();
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    } catch (e) {}
}
function loadTrainerStats(prefix, trainer) {
    try {
        const all = JSON.parse(localStorage.getItem('jp_trainerStats') || '{}');
        const s = all[prefix];
        if (s) { trainer.score = s.score || 0; trainer.total = s.total || 0; trainer.streak = s.streak || 0; }
    } catch (e) {}
}
function getAllTrainerStats() {
    try { return JSON.parse(localStorage.getItem('jp_trainerStats') || '{}'); } catch (e) { return {}; }
}

// -- Gems -----------------------------------------------------------------
function getGems() {
    try { return JSON.parse(localStorage.getItem('jp_gems') || '{"balance":0,"totalEarned":0}'); }
    catch (e) { return { balance: 0, totalEarned: 0 }; }
}
function addGems(amount) {
    if (!amount || amount <= 0) return;
    try {
        const g = getGems();
        g.balance += amount;
        g.totalEarned += amount;
        localStorage.setItem('jp_gems', JSON.stringify(g));
        updateGemsUI();
        showGemToast(amount);
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    } catch (e) {}
}
function spendGems(amount) {
    const g = getGems();
    if (g.balance < amount) return false;
    g.balance -= amount;
    localStorage.setItem('jp_gems', JSON.stringify(g));
    updateGemsUI();
    if (typeof Auth !== 'undefined') Auth.saveAndSync();
    return true;
}
function updateGemsUI() {
    const el = document.getElementById('gem-count');
    if (el) el.textContent = getGems().balance;
}
function showGemToast(amount) {
    const toast = document.createElement('div');
    toast.className = 'gem-toast';
    toast.textContent = '+' + amount + (amount === 1 ? ' gem' : ' gems');
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.add('out'); setTimeout(() => toast.remove(), 400); }, 2000);
}

// -- Streak Freezes -------------------------------------------------------
function getStreakFreezes() {
    try { return JSON.parse(localStorage.getItem('jp_streakFreezes') || '{"count":0}'); }
    catch (e) { return { count: 0 }; }
}
function buyStreakFreeze() {
    const msg = document.getElementById('freeze-dialog-msg');
    const f = getStreakFreezes();
    if (f.count >= 3) { _freezeMsg(msg, 'Already at max (3 freezes).', true); return false; }
    if (!spendGems(200)) { _freezeMsg(msg, 'Not enough gems! You need 200.', true); return false; }
    f.count = Math.min(f.count + 1, 3);
    localStorage.setItem('jp_streakFreezes', JSON.stringify(f));
    updateFreezeUI();
    updateFreezeDialog();
    if (typeof Auth !== 'undefined') Auth.saveAndSync();
    _freezeMsg(msg, 'Streak freeze purchased!', false);
    return true;
}
function consumeStreakFreeze() {
    const f = getStreakFreezes();
    if (f.count <= 0) return false;
    f.count--;
    localStorage.setItem('jp_streakFreezes', JSON.stringify(f));
    updateFreezeUI();
    if (typeof Auth !== 'undefined') Auth.saveAndSync();
    return true;
}
function updateFreezeUI() {
    const f = getStreakFreezes();
    document.querySelectorAll('.daily-streak-bar .freeze-dot').forEach((dot, i) => {
        dot.classList.toggle('filled', i < f.count);
    });
}
function _freezeMsg(el, text, isError) {
    if (!el) return;
    el.textContent = text;
    el.className = 'freeze-dialog-msg ' + (isError ? 'error' : 'success');
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.textContent = ''; el.className = 'freeze-dialog-msg'; }, 3000);
}

// -- Freeze Dialog --------------------------------------------------------
function openFreezeDialog() {
    updateFreezeDialog();
    const dlg = document.getElementById('freeze-dialog');
    if (dlg) dlg.classList.add('show');
}
function closeFreezeDialog() {
    const dlg = document.getElementById('freeze-dialog');
    if (dlg) dlg.classList.remove('show');
    const msg = document.getElementById('freeze-dialog-msg');
    if (msg) { msg.textContent = ''; msg.className = 'freeze-dialog-msg'; }
}
function updateFreezeDialog() {
    const f = getStreakFreezes();
    const g = getGems();
    const dotsEl = document.getElementById('freeze-dialog-dots');
    if (dotsEl) {
        dotsEl.querySelectorAll('.freeze-dot').forEach((dot, i) => {
            dot.classList.toggle('filled', i < f.count);
        });
    }
    const countEl = document.getElementById('freeze-dialog-count');
    if (countEl) countEl.textContent = f.count + ' / 3 freezes';
    const gemsEl = document.getElementById('freeze-dialog-gems');
    if (gemsEl) gemsEl.textContent = g.balance;
    const buyBtn = document.getElementById('freeze-dialog-buy');
    if (buyBtn) {
        const canBuy = f.count < 3 && g.balance >= 200;
        buyBtn.disabled = !canBuy;
        buyBtn.textContent = f.count >= 3 ? 'Max freezes reached' : 'Buy Streak Freeze \u2014 200 gems';
    }
}

// -- Daily Streak ------------------------------------------------------------
function updateDailyStreak() {
    try {
        const today = new Date().toISOString().slice(0, 10);
        const ds = JSON.parse(localStorage.getItem('jp_dailyStreak') || '{}');
        if (ds.lastDate === today) return;
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (ds.lastDate === yesterday) {
            ds.current = (ds.current || 0) + 1;
        } else if (ds.lastDate && ds.current > 0) {
            // Missed more than 1 day — try streak freeze
            if (consumeStreakFreeze()) {
                ds.current = (ds.current || 0) + 1;
            } else {
                ds.current = 1;
            }
        } else {
            ds.current = 1;
        }
        ds.lastDate = today;
        ds.best = Math.max(ds.current, ds.best || 0);
        localStorage.setItem('jp_dailyStreak', JSON.stringify(ds));
        updateDailyStreakUI();
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    } catch (e) {}
}
function getDailyStreak() {
    try {
        const ds = JSON.parse(localStorage.getItem('jp_dailyStreak') || '{}');
        const today = new Date().toISOString().slice(0, 10);
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (ds.lastDate === today || ds.lastDate === yesterday) return ds;
        return { current: 0, best: ds.best || 0, lastDate: ds.lastDate };
    } catch (e) { return { current: 0, best: 0 }; }
}
function updateDailyStreakUI() {
    const el = document.getElementById('daily-streak');
    if (!el) return;
    const ds = getDailyStreak();
    el.textContent = ds.current || 0;
    const bestEl = document.getElementById('daily-streak-best');
    if (bestEl) bestEl.textContent = ds.best || 0;
}

// -- Keyboard shortcuts (number keys 1-4 for MC, Enter to confirm) -----------
let _selectedMC = null;
document.addEventListener('keydown', e => {
    if (document.activeElement && (
        document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA' ||
        document.activeElement.isContentEditable)) return;
    const k = parseInt(e.key);
    if (k >= 1 && k <= 4) {
        const btn = document.querySelector('.option-btn[data-i="' + (k - 1) + '"]:not(:disabled)');
        if (btn) {
            e.preventDefault();
            document.querySelectorAll('.option-btn.selected').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            _selectedMC = btn;
        }
    } else if (e.key === 'Enter' && _selectedMC && document.body.contains(_selectedMC) && !_selectedMC.disabled) {
        e.preventDefault();
        e.stopImmediatePropagation();
        _selectedMC.click();
        _selectedMC = null;
    }
});

// -- Gem Shop (Missions) --------------------------------------------------
const GEM_SHOP = {
    _key: 'jp_gemShopClaimed',

    missions: [
        // Daily missions
        { id: 'daily-practice', title: 'Daily Practice', desc: 'Answer at least 1 question today', reward: 10, type: 'daily',
          check() { return GEM_SHOP._questionsToday() >= 1; } },
        { id: 'daily-twenty', title: 'Dedicated Learner', desc: 'Answer 20 questions today', reward: 50, type: 'daily',
          check() { return GEM_SHOP._questionsToday() >= 20; } },
        // Streak milestones
        { id: 'streak-5', title: 'Hot Streak', desc: 'Get a 5 answer streak', reward: 50, type: 'milestone',
          check() { return GEM_SHOP._bestStreak() >= 5; } },
        { id: 'streak-10', title: 'On Fire', desc: 'Get a 10 answer streak', reward: 100, type: 'milestone',
          check() { return GEM_SHOP._bestStreak() >= 10; } },
        { id: 'streak-25', title: 'Unstoppable', desc: 'Get a 25 answer streak', reward: 250, type: 'milestone',
          check() { return GEM_SHOP._bestStreak() >= 25; } },
        // Day streak milestones
        { id: 'days-3', title: '3-Day Streak', desc: 'Maintain a 3-day practice streak', reward: 75, type: 'milestone',
          check() { return (getDailyStreak().current || 0) >= 3; } },
        { id: 'days-7', title: 'Week Warrior', desc: '7-day practice streak', reward: 200, type: 'milestone',
          check() { return (getDailyStreak().current || 0) >= 7; } },
        { id: 'days-14', title: 'Two Weeks Strong', desc: '14-day practice streak', reward: 500, type: 'milestone',
          check() { return (getDailyStreak().current || 0) >= 14; } },
        // Other
        { id: 'timed-1', title: 'Speed Runner', desc: 'Complete a timed challenge', reward: 50, type: 'milestone',
          check() { return GEM_SHOP._hasTimedChallenge(); } },
        { id: 'questions-100', title: 'Century', desc: 'Answer 100 questions this week', reward: 100, type: 'weekly',
          check() { return GEM_SHOP._totalQuestions() >= 100; } },
    ],

    _questionsToday() {
        try {
            const hist = JSON.parse(localStorage.getItem('jp_practiceHistory') || '[]');
            const today = new Date().toISOString().slice(0, 10);
            let count = 0;
            hist.forEach(h => { if (new Date(h.date).toISOString().slice(0, 10) === today) count += (h.total || 0); });
            return count;
        } catch (e) { return 0; }
    },
    _bestStreak() {
        try {
            const all = JSON.parse(localStorage.getItem('jp_trainerStats') || '{}');
            let best = 0;
            for (const k in all) if ((all[k].bestStreak || 0) > best) best = all[k].bestStreak;
            return best;
        } catch (e) { return 0; }
    },
    _totalQuestions() {
        try {
            const all = JSON.parse(localStorage.getItem('jp_trainerStats') || '{}');
            let total = 0;
            for (const k in all) total += (all[k].total || 0);
            return total;
        } catch (e) { return 0; }
    },
    _hasTimedChallenge() {
        try { return Object.keys(JSON.parse(localStorage.getItem('jp_timedChallenges') || '{}')).length > 0; }
        catch (e) { return false; }
    },

    getClaimed() {
        try { return JSON.parse(localStorage.getItem(this._key) || '{}'); }
        catch (e) { return {}; }
    },
    _weekStart() {
        const d = new Date(); d.setHours(0,0,0,0);
        d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
        return d.toISOString().slice(0, 10);
    },
    isClaimed(id) {
        const claimed = this.getClaimed();
        const m = this.missions.find(x => x.id === id);
        if (!m) return false;
        if (m.type === 'daily') return claimed[id] === new Date().toISOString().slice(0, 10);
        if (m.type === 'weekly') return claimed[id] === this._weekStart();
        return !!claimed[id];
    },
    claim(id) {
        const m = this.missions.find(x => x.id === id);
        if (!m || !m.check() || this.isClaimed(id)) return;
        const claimed = this.getClaimed();
        if (m.type === 'daily') claimed[id] = new Date().toISOString().slice(0, 10);
        else if (m.type === 'weekly') claimed[id] = this._weekStart();
        else claimed[id] = true;
        localStorage.setItem(this._key, JSON.stringify(claimed));
        addGems(m.reward);
        this.render();
    },

    open() {
        this.render();
        const dlg = document.getElementById('gem-shop');
        if (dlg) dlg.classList.add('show');
    },
    close() {
        const dlg = document.getElementById('gem-shop');
        if (dlg) dlg.classList.remove('show');
    },
    render() {
        const g = getGems();
        const balEl = document.getElementById('gem-shop-gems');
        if (balEl) balEl.textContent = g.balance;

        const dailyEl = document.getElementById('gem-shop-daily');
        const mileEl = document.getElementById('gem-shop-milestones');
        if (!dailyEl || !mileEl) return;

        dailyEl.innerHTML = '';
        mileEl.innerHTML = '';

        this.missions.forEach(m => {
            const done = m.check();
            const claimed = this.isClaimed(m.id);
            const row = document.createElement('div');
            row.className = 'gem-mission' + (claimed ? ' claimed' : done ? ' ready' : '');
            row.innerHTML =
                '<div class="gem-mission-info">' +
                    '<div class="gem-mission-title">' + m.title + '</div>' +
                    '<div class="gem-mission-desc">' + m.desc + '</div>' +
                '</div>' +
                '<div class="gem-mission-reward">' + m.reward + '</div>' +
                (claimed ? '<span class="gem-mission-badge">Claimed</span>' :
                 done ? '<button class="btn btn-primary btn-sm gem-mission-claim" data-id="' + m.id + '">Claim</button>' :
                 '<span class="gem-mission-badge pending">Locked</span>');
            if (m.type === 'daily') dailyEl.appendChild(row);
            else mileEl.appendChild(row);
        });

        document.querySelectorAll('.gem-mission-claim').forEach(btn => {
            btn.addEventListener('click', () => GEM_SHOP.claim(btn.dataset.id));
        });
    }
};

// -- Generate distractors for MC questions -----------------------------------
function generateDistractors(correct, pool, count) {
    const options = [correct];
    const filtered = pool.filter(x => x !== correct);
    const shuffled = shuffle(filtered);
    for (let i = 0; i < Math.min(count - 1, shuffled.length); i++) {
        options.push(shuffled[i]);
    }
    return shuffle(options);
}

// -- Break Reminder (2 hours) ---------------------------------------------
(function () {
    var style = document.createElement('style');
    style.textContent =
        '.break-reminder{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;' +
        'background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:br-fade .4s ease}' +
        '.break-reminder-card{background:var(--card,#fff);border-radius:20px;padding:40px 32px;text-align:center;' +
        'max-width:380px;width:90%;box-shadow:0 12px 48px rgba(0,0,0,0.3);animation:br-pop .4s cubic-bezier(.34,1.56,.64,1)}' +
        '.break-reminder-card h2{font-size:1.6rem;margin-bottom:8px;color:var(--primary,#e63946)}' +
        '.break-reminder-card p{color:var(--text-light,#6c757d);font-size:0.95rem;line-height:1.6;margin-bottom:24px}' +
        '@keyframes br-fade{from{opacity:0}to{opacity:1}}' +
        '@keyframes br-pop{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}';
    document.head.appendChild(style);

    setTimeout(function () {
        if (document.getElementById('break-reminder')) return;
        var overlay = document.createElement('div');
        overlay.id = 'break-reminder';
        overlay.className = 'break-reminder';
        overlay.innerHTML =
            '<div class="break-reminder-card">' +
            '<h2>Take a break!</h2>' +
            '<p>You\'ve been studying for over 2 hours. Stand up, stretch, grab some water.</p>' +
            '<button class="btn btn-primary" onclick="document.getElementById(\'break-reminder\').remove()">I\'m good, thanks</button>' +
            '</div>';
        document.body.appendChild(overlay);
    }, 7200000);
})();
