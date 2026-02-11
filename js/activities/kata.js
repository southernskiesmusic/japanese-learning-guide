/* ================================================================
   KATA — Katakana Activity
   Same structure as HIRA but uses KATAKANA_DATA
   ================================================================ */
const KATA = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'basic', mode: 'quiz',

    init() {
        loadActivityStats('KATA', this);
        this.updateUI();
    },

    getPool() {
        const d = KATAKANA_DATA;
        if (this.level === 'basic') return d.basic;
        if (this.level === 'dakuten') return d.dakuten;
        if (this.level === 'combos') return d.combos;
        return [...d.basic, ...d.dakuten, ...d.combos];
    },

    load() {
        resetHint('kata-hint', 'kata-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('kata-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('kata-next').classList.remove('show');

        const pool = this.getPool();
        const char = pick(pool);

        if (this.mode === 'write') {
            this.loadWrite(char, pool);
            return;
        }

        const types = ['kana2romaji', 'romaji2kana', 'typeRomaji', 'typeKana'];
        const type = pick(types);

        if (type === 'kana2romaji') this.loadKana2Romaji(char, pool);
        else if (type === 'romaji2kana') this.loadRomaji2Kana(char, pool);
        else if (type === 'typeRomaji') this.loadTypeRomaji(char);
        else this.loadTypeKana(char);
    },

    loadKana2Romaji(char, pool) {
        const options = generateDistractors(char.romaji, pool.map(c => c.romaji), 4);
        this.currentQ = {
            type: 'mc', answer: char.romaji, kana: char.kana,
            hints: ['This character is from the ' + char.row + ' row']
        };
        let h = '<span class="rule-tag">Kana → Romaji</span>' +
            '<div class="question-prompt jp-large">' + char.kana + '</div>' +
            '<p class="question-text">What is the romaji for this katakana?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="KATA.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('kata-question').innerHTML = h;
    },

    loadRomaji2Kana(char, pool) {
        const options = generateDistractors(char.kana, pool.map(c => c.kana), 4);
        this.currentQ = {
            type: 'mc', answer: char.kana, romaji: char.romaji,
            hints: ['The answer is from the ' + char.row + ' row']
        };
        let h = '<span class="rule-tag">Romaji → Kana</span>' +
            '<div class="question-prompt romaji" style="font-size:2rem;font-weight:700;">' + char.romaji + '</div>' +
            '<p class="question-text">Which katakana is this?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="KATA.checkMC(this,\'' +
                o + '\')" style="font-family:var(--jp-font);font-size:1.8rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('kata-question').innerHTML = h;
    },

    loadTypeRomaji(char) {
        this.currentQ = {
            type: 'typeRomaji', answer: char.romaji, kana: char.kana,
            hints: ['This is from the ' + char.row + ' row', 'It starts with "' + char.romaji[0] + '"']
        };
        let h = '<span class="rule-tag">Type the Romaji</span>' +
            '<div class="question-prompt jp-large">' + char.kana + '</div>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="kata-input" placeholder="Type romaji..." autocomplete="off" style="font-family:inherit;">' +
            '<button class="btn btn-primary" onclick="KATA.checkTyped()">Check</button></div>';
        document.getElementById('kata-question').innerHTML = h;
        setTimeout(() => {
            const inp = document.getElementById('kata-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') KATA.checkTyped(); }); }
        }, 100);
    },

    loadTypeKana(char) {
        this.currentQ = {
            type: 'typeKana', answer: char.kana, romaji: char.romaji,
            hints: ['Use your Japanese keyboard', 'The romaji is "' + char.romaji + '"']
        };
        let h = '<span class="rule-tag">Type the Kana (JP Keyboard)</span>' +
            '<div class="question-prompt romaji" style="font-size:2rem;font-weight:700;">' + char.romaji + '</div>' +
            '<p class="question-text">Type the katakana character</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="kata-input" lang="ja" placeholder="カタカナ..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="KATA.checkTypedKana()">Check</button></div>';
        document.getElementById('kata-question').innerHTML = h;
        setTimeout(() => {
            const inp = document.getElementById('kata-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') KATA.checkTypedKana(); }); }
        }, 100);
    },

    loadWrite(char, pool) {
        this.currentQ = {
            type: 'write', answer: char.kana, romaji: char.romaji,
            hints: ['The romaji is "' + char.romaji + '"']
        };
        const canvasId = 'kata-write-canvas';
        let h = '<span class="rule-tag">Write the Character</span>' +
            '<div class="question-prompt romaji" style="font-size:2rem;font-weight:700;">' + char.romaji + '</div>' +
            '<p class="question-text">Write this katakana character</p>' +
            '<div class="writing-pad-container" style="box-shadow:none;padding:0;">' +
            '<canvas id="' + canvasId + '" class="writing-canvas has-guide" width="300" height="300"></canvas>' +
            '<div class="writing-controls">' +
            '<button class="btn btn-hint" onclick="WritingPad.clear(\'' + canvasId + '\')">Clear</button>' +
            '<button class="btn btn-hint" onclick="WritingPad.undo(\'' + canvasId + '\')">Undo</button>' +
            '<button class="btn btn-hint" onclick="KATA.revealWrite()">Reveal</button></div>' +
            '<div class="self-assess" style="margin-top:16px;" id="kata-write-check">' +
            '<button class="btn btn-primary" onclick="KATA.checkWrite()">Check</button></div>' +
            '<div id="kata-write-compare"></div>' +
            '<div class="self-assess" style="margin-top:16px;display:none;" id="kata-write-assess">' +
            '<button class="btn btn-primary" onclick="KATA.selfAssess(true)" style="background:var(--success);">Got it</button>' +
            '<button class="btn btn-primary" onclick="KATA.selfAssess(false)" style="background:var(--error);">Needs practice</button></div></div>';
        document.getElementById('kata-question').innerHTML = h;
        setTimeout(() => {
            WritingPad.init(canvasId);
            if (document.body.classList.contains('dark-mode')) WritingPad.setDarkMode(canvasId, true);
        }, 50);
    },

    checkWrite() {
        const canvasId = 'kata-write-canvas';
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const snapshot = canvas.toDataURL('image/png');
        const compare = document.getElementById('kata-write-compare');
        compare.innerHTML = '<div class="write-compare">' +
            '<div class="write-compare-col"><div class="write-compare-label">Your attempt</div>' +
            '<img class="write-compare-img" src="' + snapshot + '"></div>' +
            '<div class="write-compare-col"><div class="write-compare-label">Correct</div>' +
            '<div class="write-compare-char jp">' + this.currentQ.answer + '</div></div></div>';
        document.getElementById('kata-write-check').style.display = 'none';
        document.getElementById('kata-write-assess').style.display = '';
    },

    revealWrite() { WritingPad.showAnswer('kata-write-canvas', this.currentQ.answer); },

    selfAssess(correct) {
        SRS.review('kata-' + this.currentQ.romaji, correct ? 5 : 1);
        this.total++;
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        this.updateUI();
        saveActivityStats('KATA', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Keep practising!',
            '<span class="jp-large">' + this.currentQ.answer + '</span> = ' + this.currentQ.romaji);
    },

    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);
        document.querySelectorAll('#kata-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('kata-' + (q.romaji || q.kana), correct ? 4 : 1);
        this.updateUI();
        saveActivityStats('KATA', this, correct);
        const explanation = q.kana
            ? '<span class="jp-medium">' + q.kana + '</span> = ' + (q.romaji || q.answer)
            : '<span class="jp-medium">' + q.answer + '</span> = ' + q.romaji;
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', explanation);
    },

    checkTyped() {
        const inp = document.getElementById('kata-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim().toLowerCase();
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('kata-' + q.answer, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveActivityStats('KATA', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            '<span class="jp-large">' + q.kana + '</span> = ' + q.answer);
    },

    checkTypedKana() {
        const inp = document.getElementById('kata-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim();
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('kata-' + q.romaji, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveActivityStats('KATA', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            q.romaji + ' = <span class="jp-large">' + q.answer + '</span>');
    },

    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('kata-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('kata-fb-title').textContent = title;
        document.getElementById('kata-fb-expl').innerHTML = explanation;
        document.getElementById('kata-next').classList.add('show');
        setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    },

    updateUI() {
        document.getElementById('kata-score').textContent = this.score;
        document.getElementById('kata-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('kata-streak').textContent = this.streak;
    },

    buildRefChart() {
        const container = document.getElementById('kata-ref-chart');
        if (!container) return;
        let h = '<div class="kana-chart">';
        KATAKANA_DATA.basic.forEach(c => {
            h += '<div class="kana-cell"><span class="jp">' + c.kana + '</span><small>' + c.romaji + '</small></div>';
        });
        h += '</div>';
        container.innerHTML = h;
    }
};
