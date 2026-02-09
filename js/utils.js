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

// -- Daily Streak ------------------------------------------------------------
function updateDailyStreak() {
    try {
        const today = new Date().toISOString().slice(0, 10);
        const ds = JSON.parse(localStorage.getItem('jp_dailyStreak') || '{}');
        if (ds.lastDate === today) return;
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (ds.lastDate === yesterday) {
            ds.current = (ds.current || 0) + 1;
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
