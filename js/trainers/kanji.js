/* ================================================================
   KANJI — Kanji Trainer
   Question types: kanji→meaning MC, meaning→kanji MC,
                   kanji→type reading, reading→kanji MC,
                   kanji→write, example word recognition
   ================================================================ */
const KANJI = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'n5', mode: 'quiz',

    init() {
        loadTrainerStats('KANJI', this);
        this.updateUI();
    },

    getPool() {
        return KANJI_N5; // N4/N3 stubs for future
    },

    load() {
        resetHint('kanji-hint', 'kanji-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('kanji-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('kanji-next').classList.remove('show');

        const pool = this.getPool();
        const entry = pick(pool);

        if (this.mode === 'write') {
            this.loadWrite(entry);
            return;
        }

        const types = ['kanji2meaning', 'meaning2kanji', 'typeReading', 'reading2kanji', 'exampleWord'];
        const type = pick(types);

        if (type === 'kanji2meaning') this.loadKanji2Meaning(entry, pool);
        else if (type === 'meaning2kanji') this.loadMeaning2Kanji(entry, pool);
        else if (type === 'typeReading') this.loadTypeReading(entry);
        else if (type === 'reading2kanji') this.loadReading2Kanji(entry, pool);
        else this.loadExampleWord(entry, pool);
    },

    loadKanji2Meaning(entry, pool) {
        const options = generateDistractors(entry.meaning,
            pool.map(k => k.meaning), 4);
        this.currentQ = {
            type: 'mc', answer: entry.meaning, kanji: entry.kanji,
            hints: ['On\'yomi: ' + entry.onyomi, 'Kun\'yomi: ' + entry.kunyomi]
        };
        let h = '<span class="rule-tag">Kanji → Meaning</span>' +
            '<div class="question-prompt jp-large">' + entry.kanji + '</div>' +
            '<p class="question-text">What does this kanji mean?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="KANJI.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('kanji-question').innerHTML = h;
    },

    loadMeaning2Kanji(entry, pool) {
        const options = generateDistractors(entry.kanji,
            pool.map(k => k.kanji), 4);
        this.currentQ = {
            type: 'mc', answer: entry.kanji, meaning: entry.meaning,
            hints: ['On\'yomi: ' + entry.onyomi]
        };
        let h = '<span class="rule-tag">Meaning → Kanji</span>' +
            '<div class="question-prompt" style="font-size:1.8rem;font-weight:600;">' + entry.meaning + '</div>' +
            '<p class="question-text">Which kanji means this?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="KANJI.checkMC(this,\'' +
                o + '\')" style="font-family:var(--jp-font);font-size:2.5rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('kanji-question').innerHTML = h;
    },

    loadTypeReading(entry) {
        // Pick on or kun reading
        const useOn = Math.random() < 0.5 && entry.onyomi;
        const readingType = useOn ? 'on\'yomi' : 'kun\'yomi';
        const answer = useOn ? entry.onyomi : entry.kunyomi;
        // Clean answer for comparison (remove parenthetical okurigana markers)
        const cleanAnswer = answer.replace(/[()（）]/g, '');

        this.currentQ = {
            type: 'typeReading', answer: cleanAnswer, kanji: entry.kanji,
            readingType: readingType, fullReading: answer, meaning: entry.meaning,
            hints: ['This kanji means "' + entry.meaning + '"', 'The reading type is ' + readingType]
        };

        let h = '<span class="rule-tag">Type the Reading</span>' +
            '<div class="question-prompt jp-large">' + entry.kanji + '</div>' +
            '<p class="question-text">Type the ' + readingType + ' reading in hiragana/katakana</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="kanji-input" lang="ja" placeholder="よみかた..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="KANJI.checkTyped()">Check</button></div>';
        document.getElementById('kanji-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('kanji-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') KANJI.checkTyped(); }); }
        }, 100);
    },

    loadReading2Kanji(entry, pool) {
        const reading = entry.kunyomi || entry.onyomi;
        const options = generateDistractors(entry.kanji,
            pool.map(k => k.kanji), 4);
        this.currentQ = {
            type: 'mc', answer: entry.kanji, reading: reading, meaning: entry.meaning,
            hints: ['This kanji means "' + entry.meaning + '"']
        };
        let h = '<span class="rule-tag">Reading → Kanji</span>' +
            '<div class="question-prompt jp-medium">' + reading + '</div>' +
            '<p class="question-text">Which kanji has this reading?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="KANJI.checkMC(this,\'' +
                o + '\')" style="font-family:var(--jp-font);font-size:2.5rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('kanji-question').innerHTML = h;
    },

    loadExampleWord(entry, pool) {
        if (!entry.examples || entry.examples.length === 0) {
            this.loadKanji2Meaning(entry, pool);
            return;
        }
        const ex = pick(entry.examples);
        const options = generateDistractors(ex.meaning,
            pool.flatMap(k => (k.examples || []).map(e => e.meaning)).filter(Boolean), 4);
        this.currentQ = {
            type: 'mc', answer: ex.meaning, word: ex.word, reading: ex.reading,
            hints: ['The kanji ' + entry.kanji + ' means "' + entry.meaning + '"']
        };
        let h = '<span class="rule-tag">Example Word</span>' +
            '<div class="question-prompt jp-large">' + ex.word + '</div>' +
            '<p class="question-hint jp-small">(' + ex.reading + ')</p>' +
            '<p class="question-text">What does this word mean?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="KANJI.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('kanji-question').innerHTML = h;
    },

    loadWrite(entry) {
        this.currentQ = {
            type: 'write', answer: entry.kanji, meaning: entry.meaning,
            hints: ['On\'yomi: ' + entry.onyomi, 'Kun\'yomi: ' + entry.kunyomi]
        };
        const canvasId = 'kanji-write-canvas';
        let h = '<span class="rule-tag">Write the Kanji</span>' +
            '<div class="question-prompt" style="font-size:1.8rem;font-weight:600;">' + entry.meaning + '</div>' +
            '<p class="question-hint jp-small">(' + entry.onyomi + ' / ' + entry.kunyomi + ')</p>' +
            '<p class="question-text">Write this kanji</p>' +
            '<div class="writing-pad-container" style="box-shadow:none;padding:0;">' +
            '<canvas id="' + canvasId + '" class="writing-canvas has-guide" width="300" height="300"></canvas>' +
            '<div class="writing-controls">' +
            '<button class="btn btn-hint" onclick="WritingPad.clear(\'' + canvasId + '\')">Clear</button>' +
            '<button class="btn btn-hint" onclick="WritingPad.undo(\'' + canvasId + '\')">Undo</button>' +
            '<button class="btn btn-hint" onclick="KANJI.revealWrite()">Reveal</button></div>' +
            '<div class="self-assess" style="margin-top:16px;">' +
            '<button class="btn btn-primary" onclick="KANJI.selfAssess(true)" style="background:var(--success);">Got it</button>' +
            '<button class="btn btn-primary" onclick="KANJI.selfAssess(false)" style="background:var(--error);">Needs practice</button></div></div>';
        document.getElementById('kanji-question').innerHTML = h;
        setTimeout(() => {
            WritingPad.init(canvasId);
            if (document.body.classList.contains('dark-mode')) WritingPad.setDarkMode(canvasId, true);
        }, 50);
    },

    revealWrite() { WritingPad.showAnswer('kanji-write-canvas', this.currentQ.answer); },

    selfAssess(correct) {
        SRS.review('kanji-' + this.currentQ.answer, correct ? 5 : 1);
        this.total++;
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        this.updateUI();
        saveTrainerStats('KANJI', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Keep practising!',
            '<span class="jp-large">' + this.currentQ.answer + '</span> = ' + this.currentQ.meaning);
    },

    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);
        document.querySelectorAll('#kanji-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('kanji-' + (q.kanji || q.answer), correct ? 4 : 1);
        this.updateUI();
        saveTrainerStats('KANJI', this, correct);
        const expl = q.kanji
            ? '<span class="jp-large">' + q.kanji + '</span> = ' + (q.meaning || q.answer)
            : '<span class="jp-large">' + q.answer + '</span> = ' + (q.meaning || '');
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    checkTyped() {
        const inp = document.getElementById('kanji-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim().replace(/[()（）]/g, '');
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('kanji-' + q.kanji, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveTrainerStats('KANJI', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            '<span class="jp-large">' + q.kanji + '</span> — ' + q.readingType + ': ' + q.fullReading +
            '<br>Meaning: ' + q.meaning);
    },

    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('kanji-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('kanji-fb-title').textContent = title;
        document.getElementById('kanji-fb-expl').innerHTML = explanation;
        document.getElementById('kanji-next').classList.add('show');
    },

    updateUI() {
        document.getElementById('kanji-score').textContent = this.score;
        document.getElementById('kanji-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('kanji-streak').textContent = this.streak;
    }
};
