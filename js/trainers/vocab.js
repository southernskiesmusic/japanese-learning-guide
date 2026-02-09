/* ================================================================
   VOCAB — Vocabulary Trainer
   Question types: JP→EN MC, EN→JP MC, type reading, sentence fill
   ================================================================ */
const VOCAB = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'n5',

    init() {
        loadTrainerStats('VOCAB', this);
        this.updateUI();
    },

    getPool() {
        const pool = VOCAB_N5;
        if (this.level === 'n5') return pool;
        return pool.filter(w => w.category === this.level);
    },

    load() {
        resetHint('vocab-hint', 'vocab-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('vocab-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('vocab-next').classList.remove('show');

        const pool = this.getPool();
        if (pool.length === 0) { this.level = 'n5'; return this.load(); }

        const types = ['jp2en', 'en2jp', 'typeReading', 'sentenceFill'];
        const type = pick(types);

        if (type === 'jp2en') this.loadJP2EN(pool);
        else if (type === 'en2jp') this.loadEN2JP(pool);
        else if (type === 'typeReading') this.loadTypeReading(pool);
        else this.loadSentenceFill();
    },

    loadJP2EN(pool) {
        const entry = pick(pool);
        const options = generateDistractors(entry.meaning,
            pool.map(w => w.meaning), 4);

        this.currentQ = {
            type: 'mc', answer: entry.meaning, word: entry.word, reading: entry.reading,
            hints: ['Reading: ' + entry.reading, 'Category: ' + entry.category]
        };

        let h = '<span class="rule-tag">JP → EN</span>' +
            '<div class="question-prompt jp-large">' + entry.word + '</div>';
        if (entry.reading !== entry.word) {
            h += '<p class="question-hint jp-small">(' + entry.reading + ')</p>';
        }
        h += '<p class="question-text">What does this word mean?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="VOCAB.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('vocab-question').innerHTML = h;
    },

    loadEN2JP(pool) {
        const entry = pick(pool);
        const options = generateDistractors(entry.word,
            pool.map(w => w.word), 4);

        this.currentQ = {
            type: 'mc', answer: entry.word, meaning: entry.meaning,
            reading: entry.reading,
            hints: ['The reading is ' + entry.reading]
        };

        let h = '<span class="rule-tag">EN → JP</span>' +
            '<div class="question-prompt" style="font-size:1.8rem;font-weight:600;">' + entry.meaning + '</div>' +
            '<p class="question-text">Which word means this?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="VOCAB.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.4rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('vocab-question').innerHTML = h;
    },

    loadTypeReading(pool) {
        // Filter to words where word !== reading (has kanji)
        const kanjiWords = pool.filter(w => w.word !== w.reading);
        if (kanjiWords.length === 0) { this.loadJP2EN(pool); return; }

        const entry = pick(kanjiWords);
        this.currentQ = {
            type: 'typeReading', answer: entry.reading, word: entry.word,
            meaning: entry.meaning,
            hints: ['This word means "' + entry.meaning + '"', 'Category: ' + entry.category]
        };

        let h = '<span class="rule-tag">Type the Reading</span>' +
            '<div class="question-prompt jp-large">' + entry.word + '</div>' +
            '<p class="question-text">Type the reading in hiragana</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="vocab-input" lang="ja" placeholder="よみかた..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="VOCAB.checkTyped()">Check</button></div>';
        document.getElementById('vocab-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('vocab-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') VOCAB.checkTyped(); }); }
        }, 100);
    },

    loadSentenceFill() {
        if (typeof VOCAB_SENTENCES === 'undefined' || VOCAB_SENTENCES.length === 0) {
            this.loadJP2EN(this.getPool());
            return;
        }
        const s = pick(VOCAB_SENTENCES);
        const pool = this.getPool();
        const options = generateDistractors(s.blank,
            pool.map(w => w.word).filter(w => w !== s.blank), 4);

        this.currentQ = {
            type: 'mc', answer: s.blank, sentence: s.sentence,
            meaning: s.meaning,
            hints: [s.hint || 'Think about the meaning', 'English: ' + s.meaning]
        };

        let h = '<span class="rule-tag">Sentence Completion</span>' +
            '<p class="question-text">' + s.meaning + '</p>' +
            '<div class="question-prompt jp-medium">' +
            s.sentence.replace(s.blank, '<span style="color:var(--primary);border-bottom:3px solid var(--primary);padding:0 8px;">___</span>').replace('___', '<span style="color:var(--primary);border-bottom:3px solid var(--primary);padding:0 8px;">___</span>') +
            '</div>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="VOCAB.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.2rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('vocab-question').innerHTML = h;
    },

    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);
        document.querySelectorAll('#vocab-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('vocab-' + (q.word || q.answer), correct ? 4 : 1);
        this.updateUI();
        saveTrainerStats('VOCAB', this, correct);
        const expl = q.word
            ? '<span class="jp-medium">' + q.word + '</span> = ' + (q.meaning || q.answer)
            : 'Answer: <span class="jp-medium">' + q.answer + '</span>';
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    checkTyped() {
        const inp = document.getElementById('vocab-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim();
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('vocab-' + q.word, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveTrainerStats('VOCAB', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            '<span class="jp-large">' + q.word + '</span> = ' + q.reading +
            '<br>Meaning: ' + q.meaning);
    },

    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('vocab-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('vocab-fb-title').textContent = title;
        document.getElementById('vocab-fb-expl').innerHTML = explanation;
        document.getElementById('vocab-next').classList.add('show');
    },

    updateUI() {
        document.getElementById('vocab-score').textContent = this.score;
        document.getElementById('vocab-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('vocab-streak').textContent = this.streak;
    }
};
