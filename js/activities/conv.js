/* ================================================================
   CONV — Conversation Activity
   Question types: fillBlank, responseSelect, dialogueOrder, translate
   ================================================================ */
const CONV = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'all',

    init() {
        loadActivityStats('CONV', this);
        this.updateUI();
    },

    getDialogues() {
        const pool = CONVERSATIONS_DATA.dialogues;
        if (this.level === 'all') return pool;
        return pool.filter(d => d.scenario === this.level);
    },

    getResponses() {
        const pool = CONVERSATIONS_DATA.responses;
        if (this.level === 'all') return pool;
        // Map level to relevant responses
        const scenarioMap = {
            intro: [0, 1, 2, 3, 4, 5, 6, 7, 24, 29],
            restaurant: [5, 6, 8, 9, 10, 11, 12],
            directions: [13, 14, 15, 16, 17],
            shopping: [18, 19, 20, 21, 22, 23]
        };
        const indices = scenarioMap[this.level];
        if (!indices) return pool;
        return indices.map(i => pool[i]).filter(Boolean);
    },

    load() {
        resetHint('conv-hint', 'conv-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('conv-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('conv-next').classList.remove('show');

        const types = ['fillBlank', 'responseSelect', 'dialogueOrder', 'translate'];
        const type = pick(types);

        if (type === 'fillBlank') this.loadFillBlank();
        else if (type === 'responseSelect') this.loadResponseSelect();
        else if (type === 'dialogueOrder') this.loadDialogueOrder();
        else this.loadTranslate();
    },

    // ── 1. Fill in the Blank ──────────────────────────────────
    loadFillBlank() {
        const dialogues = this.getDialogues();
        if (dialogues.length === 0) { this.loadResponseSelect(); return; }

        const d = pick(dialogues);
        const q = d.question;
        const blankIdx = q.blankLine;

        this.currentQ = {
            type: 'mc', answer: q.answer,
            dialogue: d,
            hints: [
                'Scenario: ' + d.scenario,
                'The English is: "' + d.lines[blankIdx].en + '"'
            ]
        };

        let h = '<span class="rule-tag">Fill in the Blank</span>';
        h += '<div class="dialogue-box">';
        d.lines.forEach((line, i) => {
            if (i === blankIdx) {
                h += '<div class="dialogue-line blank-line">' +
                    '<strong>' + line.speaker + ':</strong> ' +
                    '<span style="color:var(--primary);border-bottom:3px solid var(--primary);padding:0 8px;">______</span>' +
                    '</div>';
                h += '<div class="dialogue-en">' + line.en + '</div>';
            } else {
                h += '<div class="dialogue-line"><strong>' + line.speaker + ':</strong> <span class="jp-medium">' + line.jp + '</span></div>';
                h += '<div class="dialogue-en">' + line.en + '</div>';
            }
        });
        h += '</div>';
        h += '<p class="question-text">What goes in the blank?</p>';
        h += '<div class="options-grid">';
        const options = shuffle([...q.options]);
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="CONV.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')" style="font-family:var(--jp-font);font-size:1rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conv-question').innerHTML = h;
    },

    // ── 2. Response Select ────────────────────────────────────
    loadResponseSelect() {
        const responses = this.getResponses();
        if (responses.length === 0) { this.loadTranslate(); return; }

        const r = pick(responses);
        const options = shuffle([r.correctResponse, ...r.distractors]);

        this.currentQ = {
            type: 'mc', answer: r.correctResponse,
            response: r,
            hints: [
                'The correct response means: "' + r.correctResponseEn + '"',
                'Situation: ' + r.situation
            ]
        };

        let h = '<span class="rule-tag">Choose the Response</span>';
        h += '<div class="situation-box">';
        h += '<p class="question-text">' + r.situation + '</p>';
        if (r.situationJp && !r.situationJp.startsWith('(')) {
            h += '<div class="question-prompt jp-medium">' + r.situationJp + '</div>';
        } else if (r.situationJp) {
            h += '<p class="question-hint">' + r.situationJp + '</p>';
        }
        h += '</div>';
        h += '<p class="question-text">How would you respond?</p>';
        h += '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="CONV.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')" style="font-family:var(--jp-font);font-size:1rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conv-question').innerHTML = h;
    },

    // ── 3. Dialogue Order ─────────────────────────────────────
    loadDialogueOrder() {
        const dialogues = this.getDialogues();
        if (dialogues.length === 0) { this.loadResponseSelect(); return; }

        // Filter to dialogues with 3+ lines
        const viable = dialogues.filter(d => d.lines.length >= 3);
        if (viable.length === 0) { this.loadFillBlank(); return; }

        const d = pick(viable);
        const correctOrder = d.lines.map(l => l.jp);
        const shuffled = shuffle([...correctOrder]);

        // Avoid starting in correct order
        let attempts = 0;
        while (shuffled.join('|') === correctOrder.join('|') && attempts < 10) {
            const s2 = shuffle([...correctOrder]);
            for (let i = 0; i < s2.length; i++) shuffled[i] = s2[i];
            attempts++;
        }

        this.currentQ = {
            type: 'reorder', answer: correctOrder, shuffled: shuffled,
            dialogue: d, selected: [],
            _usedIndices: new Set(),
            hints: [
                'Scenario: ' + d.scenario,
                'English: ' + d.lines.map(l => l.en).join(' / ')
            ]
        };

        this._renderDialogueOrder();
    },

    _renderDialogueOrder() {
        const q = this.currentQ;
        let h = '<span class="rule-tag">Put in Order</span>';
        h += '<p class="question-text">Arrange this dialogue in the correct order:</p>';

        // Show English meaning
        h += '<div class="dialogue-box" style="margin-bottom:16px;">';
        q.dialogue.lines.forEach(line => {
            h += '<div class="dialogue-en"><strong>' + line.speaker + ':</strong> ' + line.en + '</div>';
        });
        h += '</div>';

        // Selected lines (build area)
        h += '<div class="sentence-build" id="conv-build">';
        q.selected.forEach((w, i) => {
            h += '<span class="word-chip" onclick="CONV.unselectWord(' + i + ')" style="font-family:var(--jp-font);">' + w + '</span>';
        });
        h += '</div>';

        // Word bank
        h += '<div class="word-bank" id="conv-bank">';
        q.shuffled.forEach((w, i) => {
            const used = q._usedIndices.has(i) ? ' used' : '';
            h += '<span class="word-chip' + used +
                '" onclick="CONV.selectWord(' + i + ')" style="font-family:var(--jp-font);font-size:0.95rem;">' + w + '</span>';
        });
        h += '</div>';

        if (q.selected.length === q.shuffled.length) {
            h += '<div style="margin-top:16px;"><button class="btn btn-primary" onclick="CONV.checkReorder()">Check</button></div>';
        }
        document.getElementById('conv-question').innerHTML = h;
    },

    selectWord(idx) {
        const q = this.currentQ;
        if (q._usedIndices.has(idx)) return;
        q._usedIndices.add(idx);
        q.selected.push(q.shuffled[idx]);
        this._renderDialogueOrder();
    },

    unselectWord(selIdx) {
        const q = this.currentQ;
        const word = q.selected[selIdx];
        q.selected.splice(selIdx, 1);
        if (q._usedIndices) {
            for (const idx of q._usedIndices) {
                if (q.shuffled[idx] === word) {
                    q._usedIndices.delete(idx);
                    break;
                }
            }
        }
        this._renderDialogueOrder();
    },

    checkReorder() {
        const q = this.currentQ;
        this.total++;
        const correct = q.selected.join('|') === q.answer.join('|');
        if (correct) { this.score++; this.streak++; } else this.streak = 0;
        SRS.review('conv-reorder', correct ? 4 : 2);
        this.updateUI();
        saveActivityStats('CONV', this, correct);

        let expl = '<strong>Correct order:</strong><br>';
        q.dialogue.lines.forEach(l => {
            expl += '<span class="jp-medium">' + l.speaker + ': ' + l.jp + '</span><br>';
        });
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    // ── 4. Translate ──────────────────────────────────────────
    loadTranslate() {
        const dialogues = this.getDialogues();
        if (dialogues.length === 0) { this.loadResponseSelect(); return; }

        const d = pick(dialogues);
        const lineIdx = Math.floor(Math.random() * d.lines.length);
        const line = d.lines[lineIdx];

        // Generate distractors from other dialogues
        const allLines = [];
        CONVERSATIONS_DATA.dialogues.forEach(dlg => {
            dlg.lines.forEach(l => {
                if (l.en !== line.en) allLines.push(l.en);
            });
        });
        const options = generateDistractors(line.en, allLines, 4);

        this.currentQ = {
            type: 'mc', answer: line.en,
            jp: line.jp, speaker: line.speaker,
            hints: [
                'Speaker: ' + line.speaker,
                'Scenario: ' + d.scenario
            ]
        };

        let h = '<span class="rule-tag">JP &rarr; EN Translation</span>';
        h += '<div class="question-prompt jp-medium" style="margin-bottom:12px;">' + line.jp + '</div>';
        h += '<p class="question-text">What does this line mean?</p>';
        h += '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="CONV.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')" style="font-size:0.9rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conv-question').innerHTML = h;
    },

    // ── Check MC ──────────────────────────────────────────────
    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);
        document.querySelectorAll('#conv-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });
        if (correct) { this.score++; this.streak++; } else this.streak = 0;

        const srsKey = q.response
            ? 'conv-resp-' + q.response.situation.slice(0, 20)
            : q.jp
                ? 'conv-trans-' + q.jp.slice(0, 20)
                : 'conv-fill-' + (q.dialogue ? q.dialogue.lines[0].jp.slice(0, 15) : 'q');
        SRS.review(srsKey, correct ? 4 : 1);
        this.updateUI();
        saveActivityStats('CONV', this, correct);

        let expl;
        if (q.response) {
            expl = '<span class="jp-medium">' + q.response.correctResponse + '</span><br>' + q.response.correctResponseEn;
        } else if (q.jp) {
            expl = '<span class="jp-medium">' + q.jp + '</span> = ' + q.answer;
        } else {
            expl = 'Answer: <span class="jp-medium">' + q.answer + '</span>';
        }
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    // ── Feedback ──────────────────────────────────────────────
    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('conv-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('conv-fb-title').textContent = title;
        document.getElementById('conv-fb-expl').innerHTML = explanation;
        document.getElementById('conv-next').classList.add('show');
        setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    },

    // ── UI Update ─────────────────────────────────────────────
    updateUI() {
        document.getElementById('conv-score').textContent = this.score;
        document.getElementById('conv-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('conv-streak').textContent = this.streak;
    }
};
