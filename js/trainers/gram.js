/* ================================================================
   GRAM — Grammar Trainer
   Question types: particle fill-in, verb conjugation,
                   sentence reordering, JP→EN translation MC
   ================================================================ */
const GRAM = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'n5',

    init() {
        loadTrainerStats('GRAM', this);
        this.updateUI();
    },

    load() {
        resetHint('gram-hint', 'gram-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('gram-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('gram-next').classList.remove('show');

        const types = ['particle', 'conjugation', 'reorder', 'translate'];
        const type = pick(types);

        if (type === 'particle') this.loadParticle();
        else if (type === 'conjugation') this.loadConjugation();
        else if (type === 'reorder') this.loadReorder();
        else this.loadTranslate();
    },

    loadParticle() {
        const s = pick(PARTICLES_DATA.sentences);
        this.currentQ = {
            type: 'particle', answer: s.answer,
            hints: [s.hint || 'Think about the particle\'s role', 'The English is: ' + s.english]
        };

        let h = '<span class="rule-tag">Fill in the Particle</span>' +
            '<p class="question-text">' + s.english + '</p>' +
            '<div class="question-prompt jp-medium">' +
            s.sentence.replace('___', '<span style="color:var(--primary);border-bottom:3px solid var(--primary);padding:0 8px;">___</span>') +
            '</div>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="gram-input" lang="ja" placeholder="particle..." autocomplete="off" style="max-width:120px;">' +
            '<button class="btn btn-primary" onclick="GRAM.checkParticle()">Check</button></div>';
        document.getElementById('gram-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('gram-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') GRAM.checkParticle(); }); }
        }, 100);
    },

    checkParticle() {
        const inp = document.getElementById('gram-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim();
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('gram-particle-' + q.answer, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveTrainerStats('GRAM', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            'The correct particle is: <span class="jp-medium">' + q.answer + '</span>');
    },

    loadConjugation() {
        const verb = pick(GRAMMAR_N5.conjugations);
        const formKeys = Object.keys(verb.forms);
        const targetForm = pick(formKeys);
        const answer = verb.forms[targetForm];

        this.currentQ = {
            type: 'conjugation', answer: answer, verb: verb.dictForm,
            meaning: verb.meaning, form: targetForm,
            hints: ['This is a Group ' + verb.group + ' verb', 'Dictionary form: ' + verb.dictForm]
        };

        let h = '<span class="rule-tag">Verb Conjugation</span>' +
            '<div class="question-prompt jp-medium">' + verb.dictForm + '</div>' +
            '<p class="question-text">Conjugate to <strong>' + targetForm + '</strong> form</p>' +
            '<p class="question-hint">(' + verb.meaning + ')</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="gram-input" lang="ja" placeholder="conjugated form..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="GRAM.checkConjugation()">Check</button></div>';
        document.getElementById('gram-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('gram-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') GRAM.checkConjugation(); }); }
        }, 100);
    },

    checkConjugation() {
        const inp = document.getElementById('gram-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim();
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('gram-conj-' + q.verb + '-' + q.form, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveTrainerStats('GRAM', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            q.verb + ' → ' + q.form + ' form: <span class="jp-medium">' + q.answer + '</span>');
    },

    loadReorder() {
        const patterns = GRAMMAR_N5.patterns.filter(p => p.example);
        const pattern = pick(patterns);
        const sentence = pattern.example.jp;
        // Split into words/particles (split on particles and keep them)
        const words = this._splitSentence(sentence);
        if (words.length < 3) { this.loadParticle(); return; } // fallback

        const shuffled = shuffle(words);
        this.currentQ = {
            type: 'reorder', answer: words, shuffled: shuffled,
            english: pattern.example.en, selected: [],
            hints: ['The English translation is: ' + pattern.example.en, 'Grammar pattern: ' + pattern.pattern]
        };

        this._renderReorder();
    },

    _splitSentence(sentence) {
        // Simple split: split on common boundaries
        // Remove ending period/。
        sentence = sentence.replace(/[。．.]$/, '');
        // Split between particle boundaries — crude but workable for N5
        const parts = [];
        let current = '';
        const particles = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'の', 'から', 'まで', 'よ', 'ね'];

        // Simple word-by-word split for Japanese
        // Use spaces if present, otherwise split every 1-3 characters as chunks
        if (sentence.includes(' ')) {
            return sentence.split(' ').filter(Boolean);
        }

        // Fallback: split into meaningful chunks
        const chars = [...sentence];
        let i = 0;
        while (i < chars.length) {
            // Check for 2-char particles first
            if (i + 1 < chars.length) {
                const two = chars[i] + chars[i + 1];
                if (particles.includes(two)) {
                    if (current) { parts.push(current); current = ''; }
                    parts.push(two);
                    i += 2;
                    continue;
                }
            }
            // Check for 1-char particles
            if (particles.includes(chars[i]) && current.length > 0) {
                parts.push(current); current = '';
                parts.push(chars[i]);
                i++;
                continue;
            }
            current += chars[i];
            i++;
            // Break at verb endings (ます、です)
            if (current.endsWith('ます') || current.endsWith('です') || current.endsWith('した') || current.endsWith('ません')) {
                parts.push(current); current = '';
            }
        }
        if (current) parts.push(current);
        return parts.length >= 3 ? parts : sentence.split('').reduce((acc, c, i) => {
            const idx = Math.floor(i / 2);
            if (!acc[idx]) acc[idx] = '';
            acc[idx] += c;
            return acc;
        }, []);
    },

    _renderReorder() {
        const q = this.currentQ;
        let h = '<span class="rule-tag">Sentence Reordering</span>' +
            '<p class="question-text">' + q.english + '</p>' +
            '<p class="question-hint">Tap words in the correct order, or type it below</p>' +
            '<div class="sentence-build" id="gram-build">';
        q.selected.forEach((w, i) => {
            h += '<span class="word-chip" onclick="GRAM.unselectWord(' + i + ')">' + w + '</span>';
        });
        h += '</div><div class="word-bank" id="gram-bank">';
        q.shuffled.forEach((w, i) => {
            const used = q.selected.includes(w) && q.selected.filter(x => x === w).length >=
                q.shuffled.slice(0, i + 1).filter(x => x === w).length ? ' used' : '';
            h += '<span class="word-chip' + (q._usedIndices && q._usedIndices.has(i) ? ' used' : '') +
                '" onclick="GRAM.selectWord(' + i + ')">' + w + '</span>';
        });
        h += '</div>';
        if (q.selected.length === q.shuffled.length) {
            h += '<div style="margin-top:16px;"><button class="btn btn-primary" onclick="GRAM.checkReorder()">Check</button></div>';
        }
        // Type-it option
        h += '<div style="margin-top:16px;border-top:1px solid #e0e0e0;padding-top:14px;">' +
            '<p class="question-hint" style="margin-bottom:8px;">Or type the sentence:</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="gram-reorder-input" lang="ja" placeholder="Type the full sentence..." autocomplete="off" style="max-width:100%;">' +
            '<button class="btn btn-primary" onclick="GRAM.checkReorderTyped()">Check</button></div></div>';
        document.getElementById('gram-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('gram-reorder-input');
            if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') GRAM.checkReorderTyped(); });
        }, 100);
    },

    selectWord(idx) {
        const q = this.currentQ;
        if (!q._usedIndices) q._usedIndices = new Set();
        if (q._usedIndices.has(idx)) return;
        q._usedIndices.add(idx);
        q.selected.push(q.shuffled[idx]);
        this._renderReorder();
    },

    unselectWord(selIdx) {
        const q = this.currentQ;
        const word = q.selected[selIdx];
        q.selected.splice(selIdx, 1);
        // Find and un-use the corresponding bank index
        if (q._usedIndices) {
            for (const idx of q._usedIndices) {
                if (q.shuffled[idx] === word) {
                    q._usedIndices.delete(idx);
                    break;
                }
            }
        }
        this._renderReorder();
    },

    checkReorder() {
        const q = this.currentQ;
        this.total++;
        const correct = q.selected.join('') === q.answer.join('');
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('gram-reorder', correct ? 4 : 2);
        this.updateUI();
        saveTrainerStats('GRAM', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            'Correct order: <span class="jp-medium">' + q.answer.join('') + '</span>');
    },

    checkReorderTyped() {
        const inp = document.getElementById('gram-reorder-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim().replace(/[\s　]+/g, '');
        const q = this.currentQ;
        const answerStr = q.answer.join('');
        this.total++;
        const correct = (val === answerStr);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('gram-reorder', correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveTrainerStats('GRAM', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            'Correct order: <span class="jp-medium">' + q.answer.join(' ') + '</span>');
    },

    loadTranslate() {
        const patterns = GRAMMAR_N5.patterns.filter(p => p.example);
        const pattern = pick(patterns);
        const others = patterns.filter(p => p !== pattern && p.example);
        const options = generateDistractors(pattern.example.en,
            others.map(p => p.example.en), 4);

        this.currentQ = {
            type: 'mc', answer: pattern.example.en, jp: pattern.example.jp,
            hints: ['Grammar pattern: ' + pattern.pattern, pattern.meaning]
        };

        let h = '<span class="rule-tag">JP → EN Translation</span>' +
            '<div class="question-prompt jp-medium">' + pattern.example.jp + '</div>' +
            '<p class="question-text">What does this sentence mean?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="GRAM.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')" style="font-size:0.9rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('gram-question').innerHTML = h;
    },

    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);
        document.querySelectorAll('#gram-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('gram-translate', correct ? 4 : 1);
        this.updateUI();
        saveTrainerStats('GRAM', this, correct);
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            '<span class="jp-medium">' + (q.jp || '') + '</span> = ' + q.answer);
    },

    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('gram-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('gram-fb-title').textContent = title;
        document.getElementById('gram-fb-expl').innerHTML = explanation;
        document.getElementById('gram-next').classList.add('show');
        setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    },

    updateUI() {
        document.getElementById('gram-score').textContent = this.score;
        document.getElementById('gram-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('gram-streak').textContent = this.streak;
    }
};
