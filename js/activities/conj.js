/* ================================================================
   CONJ — Conjugation Activity
   Question types: type conjugation, MC conjugation, identify form,
                   MC meaning, type adj conjugation, MC adj conjugation,
                   identify adj type
   ================================================================ */
const CONJ = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'verbs', // 'verbs', 'adjectives', 'all'

    init() {
        loadActivityStats('CONJ', this);
        this.updateUI();
    },

    load() {
        resetHint('conj-hint', 'conj-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('conj-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('conj-next').classList.remove('show');

        if (this.level === 'verbs') this.loadVerb();
        else if (this.level === 'adjectives') this.loadAdjective();
        else Math.random() < 0.6 ? this.loadVerb() : this.loadAdjective();
    },

    // ── Verb question types ──────────────────────────────────────

    loadVerb() {
        const types = ['typeConjugation', 'mcConjugation', 'identifyForm', 'mcMeaning'];
        const type = pick(types);

        if (type === 'typeConjugation') this.loadTypeConjugation();
        else if (type === 'mcConjugation') this.loadMCConjugation();
        else if (type === 'identifyForm') this.loadIdentifyForm();
        else this.loadMCMeaning();
    },

    loadTypeConjugation() {
        const verb = pick(CONJUGATION_DATA.verbs);
        const formKeys = Object.keys(verb.forms);
        const targetForm = pick(formKeys);
        const answer = verb.forms[targetForm];
        const displayName = CONJUGATION_DATA.formNames[targetForm] || targetForm;
        const groupName = verb.group === 1 ? 'Group 1 (godan)' : verb.group === 2 ? 'Group 2 (ichidan)' : 'Group 3 (irregular)';

        this.currentQ = {
            type: 'typeVerb', answer: answer, verb: verb.dictForm, kanji: verb.kanji,
            meaning: verb.meaning, form: targetForm,
            hints: [groupName, 'Dictionary form: ' + verb.kanji + ' (' + verb.dictForm + ')']
        };

        let h = '<span class="rule-tag">Type the Conjugation</span>' +
            '<div class="question-prompt jp-large">' + verb.kanji + '</div>' +
            '<p class="question-hint">(' + verb.dictForm + ' — ' + verb.meaning + ')</p>' +
            '<p class="question-text">Conjugate to <strong>' + displayName + '</strong> form</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="conj-input" lang="ja" placeholder="conjugated form..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="CONJ.checkTyped()">Check</button></div>';
        document.getElementById('conj-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('conj-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') CONJ.checkTyped(); }); }
        }, 100);
    },

    loadMCConjugation() {
        const verb = pick(CONJUGATION_DATA.verbs);
        const formKeys = Object.keys(verb.forms);
        const targetForm = pick(formKeys);
        const answer = verb.forms[targetForm];
        const displayName = CONJUGATION_DATA.formNames[targetForm] || targetForm;
        const groupName = verb.group === 1 ? 'Group 1 (godan)' : verb.group === 2 ? 'Group 2 (ichidan)' : 'Group 3 (irregular)';

        // Build distractors from same form of other verbs
        const others = CONJUGATION_DATA.verbs.filter(v => v.dictForm !== verb.dictForm && v.forms[targetForm]);
        const distractorPool = others.map(v => v.forms[targetForm]).filter(f => f !== answer);
        const options = generateDistractors(answer, distractorPool, 4);

        this.currentQ = {
            type: 'mc', answer: answer, verb: verb.dictForm, kanji: verb.kanji,
            meaning: verb.meaning, form: targetForm,
            hints: [groupName, 'Dictionary form: ' + verb.kanji + ' (' + verb.dictForm + ')']
        };

        let h = '<span class="rule-tag">Verb Conjugation</span>' +
            '<div class="question-prompt jp-large">' + verb.kanji + '</div>' +
            '<p class="question-hint">(' + verb.dictForm + ' — ' + verb.meaning + ')</p>' +
            '<p class="question-text">What is the <strong>' + displayName + '</strong> form?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="CONJ.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.3rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conj-question').innerHTML = h;
    },

    loadIdentifyForm() {
        const verb = pick(CONJUGATION_DATA.verbs);
        const formKeys = Object.keys(verb.forms);
        const targetForm = pick(formKeys);
        const conjugated = verb.forms[targetForm];
        const displayName = CONJUGATION_DATA.formNames[targetForm] || targetForm;

        // Distractors: other form names
        const otherFormNames = formKeys.filter(k => k !== targetForm)
            .map(k => CONJUGATION_DATA.formNames[k] || k);
        const options = generateDistractors(displayName, otherFormNames, 4);

        this.currentQ = {
            type: 'mc', answer: displayName, verb: verb.dictForm, kanji: verb.kanji,
            meaning: verb.meaning, form: targetForm, conjugated: conjugated,
            hints: ['The dictionary form is ' + verb.dictForm, verb.meaning]
        };

        let h = '<span class="rule-tag">Identify the Form</span>' +
            '<div class="question-prompt jp-large">' + conjugated + '</div>' +
            '<p class="question-hint">(' + verb.kanji + ' — ' + verb.meaning + ')</p>' +
            '<p class="question-text">What form is this?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="CONJ.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')" style="font-size:0.9rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conj-question').innerHTML = h;
    },

    loadMCMeaning() {
        const verb = pick(CONJUGATION_DATA.verbs);
        const formKeys = Object.keys(verb.forms);
        const targetForm = pick(formKeys);
        const conjugated = verb.forms[targetForm];
        const displayName = CONJUGATION_DATA.formNames[targetForm] || targetForm;

        // Distractors: meanings from other verbs
        const others = CONJUGATION_DATA.verbs.filter(v => v.dictForm !== verb.dictForm);
        const options = generateDistractors(verb.meaning,
            others.map(v => v.meaning), 4);

        this.currentQ = {
            type: 'mc', answer: verb.meaning, verb: verb.dictForm, kanji: verb.kanji,
            meaning: verb.meaning, form: targetForm, conjugated: conjugated,
            hints: ['This is the ' + displayName + ' form', 'Dictionary form: ' + verb.dictForm]
        };

        let h = '<span class="rule-tag">What Does It Mean?</span>' +
            '<div class="question-prompt jp-large">' + conjugated + '</div>' +
            '<p class="question-hint">(' + displayName + ' form)</p>' +
            '<p class="question-text">What verb is this?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="CONJ.checkMC(this,\'' +
                o.replace(/'/g, "\\'").replace(/"/g, '&quot;') + '\')" style="font-size:0.9rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conj-question').innerHTML = h;
    },

    // ── Adjective question types ─────────────────────────────────

    loadAdjective() {
        const types = ['typeAdjConj', 'mcAdjConj', 'identifyAdjType'];
        const type = pick(types);

        if (type === 'typeAdjConj') this.loadTypeAdjConj();
        else if (type === 'mcAdjConj') this.loadMCAdjConj();
        else this.loadIdentifyAdjType();
    },

    loadTypeAdjConj() {
        const adj = pick(CONJUGATION_DATA.adjectives);
        const formKeys = Object.keys(adj.forms);
        const targetForm = pick(formKeys);
        const answer = adj.forms[targetForm];
        const displayName = CONJUGATION_DATA.formNames[targetForm] || targetForm;
        const typeName = adj.type === 'i' ? 'i-adjective' : 'na-adjective';

        this.currentQ = {
            type: 'typeAdj', answer: answer, adjective: adj.dictForm, kanji: adj.kanji,
            meaning: adj.meaning, form: targetForm, adjType: adj.type,
            hints: ['This is a ' + typeName, adj.irregular ? 'This adjective is IRREGULAR (uses よ- stem)' : 'Meaning: ' + adj.meaning]
        };

        let h = '<span class="rule-tag">Adjective Conjugation</span>' +
            '<div class="question-prompt jp-large">' + adj.kanji + '</div>' +
            '<p class="question-hint">(' + adj.dictForm + ' — ' + adj.meaning + ', ' + typeName + ')</p>' +
            '<p class="question-text">Conjugate to <strong>' + displayName + '</strong></p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="conj-input" lang="ja" placeholder="conjugated form..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="CONJ.checkTyped()">Check</button></div>';
        document.getElementById('conj-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('conj-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') CONJ.checkTyped(); }); }
        }, 100);
    },

    loadMCAdjConj() {
        const adj = pick(CONJUGATION_DATA.adjectives);
        const formKeys = Object.keys(adj.forms);
        const targetForm = pick(formKeys);
        const answer = adj.forms[targetForm];
        const displayName = CONJUGATION_DATA.formNames[targetForm] || targetForm;
        const typeName = adj.type === 'i' ? 'i-adjective' : 'na-adjective';

        // Distractors from same form of other adjectives
        const others = CONJUGATION_DATA.adjectives.filter(a => a.dictForm !== adj.dictForm && a.forms[targetForm]);
        const distractorPool = others.map(a => a.forms[targetForm]).filter(f => f !== answer);
        const options = generateDistractors(answer, distractorPool, 4);

        this.currentQ = {
            type: 'mc', answer: answer, adjective: adj.dictForm, kanji: adj.kanji,
            meaning: adj.meaning, form: targetForm, adjType: adj.type,
            hints: ['This is a ' + typeName, adj.irregular ? 'This adjective is IRREGULAR' : 'Meaning: ' + adj.meaning]
        };

        let h = '<span class="rule-tag">Adjective Conjugation</span>' +
            '<div class="question-prompt jp-large">' + adj.kanji + '</div>' +
            '<p class="question-hint">(' + adj.dictForm + ' — ' + adj.meaning + ', ' + typeName + ')</p>' +
            '<p class="question-text">What is the <strong>' + displayName + '</strong> form?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="CONJ.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.3rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conj-question').innerHTML = h;
    },

    loadIdentifyAdjType() {
        const adj = pick(CONJUGATION_DATA.adjectives);
        const typeName = adj.type === 'i' ? 'i-adjective' : 'na-adjective';
        const options = shuffle(['i-adjective', 'na-adjective']);

        this.currentQ = {
            type: 'mc', answer: typeName, adjective: adj.dictForm, kanji: adj.kanji,
            meaning: adj.meaning, adjType: adj.type,
            hints: ['Look at the ending of the dictionary form', adj.type === 'na' ? 'Careful — some na-adjectives look like i-adjectives (e.g. きれい)' : 'i-adjectives always end in い']
        };

        let h = '<span class="rule-tag">Identify Adjective Type</span>' +
            '<div class="question-prompt jp-large">' + adj.kanji + '</div>' +
            '<p class="question-hint">(' + adj.dictForm + ' — ' + adj.meaning + ')</p>' +
            '<p class="question-text">Is this an <strong>i-adjective</strong> or a <strong>na-adjective</strong>?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn" data-i="' + i + '" onclick="CONJ.checkMC(this,\'' +
                o + '\')">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('conj-question').innerHTML = h;
    },

    // ── Answer checking ──────────────────────────────────────────

    checkTyped() {
        const inp = document.getElementById('conj-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim();
        this.total++;
        const q = this.currentQ;
        const correct = (val === q.answer);
        if (correct) { this.score++; this.streak++; } else this.streak = 0;

        const srsKey = 'conj-' + (q.verb || q.adjective) + '-' + (q.form || 'type');
        SRS.review(srsKey, correct ? 5 : 1);
        inp.disabled = true;
        this.updateUI();
        saveActivityStats('CONJ', this, correct);

        const display = q.kanji || q.verb || q.adjective;
        const formLabel = CONJUGATION_DATA.formNames[q.form] || q.form;
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite',
            '<span class="jp-medium">' + display + '</span> → ' + formLabel +
            ': <span class="jp-medium"><strong>' + q.answer + '</strong></span>');
    },

    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);
        document.querySelectorAll('#conj-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });
        if (correct) { this.score++; this.streak++; } else this.streak = 0;

        const srsKey = 'conj-' + (q.verb || q.adjective) + '-' + (q.form || q.adjType || 'mc');
        SRS.review(srsKey, correct ? 4 : 1);
        this.updateUI();
        saveActivityStats('CONJ', this, correct);

        const display = q.kanji || q.verb || q.adjective || '';
        const formLabel = q.form ? (CONJUGATION_DATA.formNames[q.form] || q.form) : '';
        let expl = '<span class="jp-medium">' + display + '</span>';
        if (formLabel) expl += ' → ' + formLabel + ': <span class="jp-medium"><strong>' + q.answer + '</strong></span>';
        else expl += ' = ' + q.answer;
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('conj-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('conj-fb-title').textContent = title;
        document.getElementById('conj-fb-expl').innerHTML = explanation;
        document.getElementById('conj-next').classList.add('show');
        setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    },

    updateUI() {
        document.getElementById('conj-score').textContent = this.score;
        document.getElementById('conj-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('conj-streak').textContent = this.streak;
    }
};
