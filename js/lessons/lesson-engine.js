/* ================================================================
   LESSON ENGINE — Adapted from Study Hub for Japanese Learning
   No KaTeX — uses native Japanese text rendering
   ================================================================ */
const LessonEngine = {
    lesson: null,
    screenIdx: 0,
    folder: null,
    practiceQ: null,
    practiceAnswered: false,
    practiceCorrect: 0,
    practiceTotal: 0,
    exampleStepIdx: 0,
    _enterBound: false,

    start(lesson) {
        this.lesson = lesson;
        this.screenIdx = 0;
        this.folder = lesson.folder;
        this.practiceCorrect = 0;
        this.practiceTotal = 0;
        this.furthestIdx = 0;
        showView('lesson');
        this.renderScreen();
        if (!this._enterBound) {
            this._enterBound = true;
            SwipeNav.bind('#view-lesson', {
                onSwipeLeft: function() {
                    var btn = document.getElementById('lesson-continue-btn');
                    if (btn && btn.style.display !== 'none') LessonEngine.advance();
                },
                onSwipeRight: function() { LessonEngine.back(); },
                excludeSelector: 'input, textarea, .writing-canvas, .word-bank'
            });
            document.addEventListener('keydown', e => {
                if (e.key !== 'Enter') return;
                const lessonView = document.getElementById('view-lesson');
                if (!lessonView || !lessonView.classList.contains('active')) return;
                if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
                const cont = document.getElementById('lesson-continue-btn');
                if (cont && cont.style.display !== 'none') { e.preventDefault(); cont.click(); return; }
                const reveal = document.getElementById('lesson-reveal-btn');
                if (reveal && reveal.style.display !== 'none') { e.preventDefault(); reveal.click(); return; }
                const navPrimary = document.querySelector('#lesson-nav .btn-primary');
                if (navPrimary) { e.preventDefault(); navPrimary.click(); }
            });
        }
    },

    backToFolder() {
        if (this.folder) showView(this.folder);
        else showView('hub');
    },

    navButtons(forwardLabel, forwardAction) {
        const backDisabled = this.screenIdx <= 0 ? ' disabled' : '';
        let h = '<div class="lesson-btn-row">' +
            '<button class="btn btn-hint" onclick="LessonEngine.back()"' + backDisabled + '>&larr; Back</button>';
        if (forwardLabel) {
            h += '<button class="btn btn-primary" id="lesson-continue-btn" onclick="' + forwardAction + '">' + forwardLabel + ' &rarr;</button>';
        }
        h += '</div>';
        return h;
    },

    renderScreen() {
        const screen = this.lesson.screens[this.screenIdx];
        const total = this.lesson.screens.length;

        document.getElementById('lesson-progress-fill').style.width =
            ((this.screenIdx + 1) / total * 100) + '%';
        document.getElementById('lesson-title').textContent = this.lesson.title;
        document.getElementById('lesson-subtitle').textContent =
            this.lesson.subtitle + '  —  ' + (this.screenIdx + 1) + ' / ' + total;

        const content = document.getElementById('lesson-content');
        const nav = document.getElementById('lesson-nav');

        if (screen.type === 'concept') this.renderConcept(screen, content, nav);
        else if (screen.type === 'example') this.renderExample(screen, content, nav);
        else if (screen.type === 'practice') this.renderPractice(screen, content, nav);
        else if (screen.type === 'summary') this.renderSummary(screen, content, nav);
    },

    renderConcept(screen, content, nav) {
        content.innerHTML = '<h3>' + screen.title + '</h3>' + (screen.html || screen.content || '');
        nav.innerHTML = this.navButtons('Continue', 'LessonEngine.advance()');
    },

    renderExample(screen, content, nav) {
        this.exampleStepIdx = 0;
        let h = '<h3>' + screen.title + '</h3>' +
            '<div class="question-prompt" style="font-size:1.15rem;margin-bottom:16px;">' + (screen.problem || screen.content || '') + '</div>';
        screen.steps.forEach((step, i) => {
            h += '<div class="lesson-step" id="lesson-step-' + i + '">' + (step.text || step.detail || '') + '</div>';
        });
        content.innerHTML = h;
        nav.innerHTML = '<div class="lesson-btn-row">' +
            '<button class="btn btn-hint" onclick="LessonEngine.back()"' + (this.screenIdx <= 0 ? ' disabled' : '') + '>&larr; Back</button>' +
            '<button class="btn btn-primary" id="lesson-reveal-btn" onclick="LessonEngine.revealStep()">Reveal Next Step</button>' +
            '<button class="btn btn-primary" id="lesson-continue-btn" onclick="LessonEngine.advance()" style="display:none;">Continue &rarr;</button>' +
            '</div>';
    },

    revealStep() {
        const screen = this.lesson.screens[this.screenIdx];
        const stepEl = document.getElementById('lesson-step-' + this.exampleStepIdx);
        if (stepEl) stepEl.classList.add('revealed');
        this.exampleStepIdx++;
        if (this.exampleStepIdx >= screen.steps.length) {
            document.getElementById('lesson-reveal-btn').style.display = 'none';
            document.getElementById('lesson-continue-btn').style.display = '';
        }
    },

    renderPractice(screen, content, nav) {
        this.practiceAnswered = false;
        this.practiceQ = screen.generate();
        const q = this.practiceQ;

        let h = '<h3>' + (screen.intro || screen.instruction || 'Try this one:') + '</h3>';

        if (q.text) h += '<div class="question-text">' + q.text + '</div>';
        if (q.prompt) h += '<div class="question-prompt" style="font-size:1.3rem;margin:16px 0;">' + q.prompt + '</div>';

        if (q.type === 'mc') {
            h += '<div class="options-grid">';
            q.options.forEach((o, i) => {
                h += '<button class="option-btn" data-i="' + i + '" onclick="LessonEngine.checkMC(this)">' + o + '</button>';
            });
            h += '</div>';
        } else {
            h += '<div class="input-area">' +
                '<input type="text" class="jp-input" id="lesson-input" ' +
                (q.lang === 'ja' ? 'lang="ja"' : '') +
                ' placeholder="' + (q.placeholder || 'Type your answer...') + '" autocomplete="off">' +
                '<button class="btn btn-primary" id="lesson-check-btn" onclick="LessonEngine.checkFree()">Check</button>' +
                '</div>';
        }

        h += '<div class="feedback" id="lesson-fb"><div class="feedback-title" id="lesson-fb-title"></div>' +
            '<div class="feedback-explanation" id="lesson-fb-expl"></div></div>';

        content.innerHTML = h;
        nav.innerHTML = '<div class="lesson-btn-row">' +
            '<button class="btn btn-hint" onclick="LessonEngine.back()"' + (this.screenIdx <= 0 ? ' disabled' : '') + '>&larr; Back</button>' +
            '</div>';

        setTimeout(() => {
            const inp = document.getElementById('lesson-input');
            if (inp) {
                inp.focus();
                inp.addEventListener('keydown', e => {
                    if (e.key === 'Enter') { e.preventDefault(); LessonEngine.checkFree(); }
                });
            }
        }, 200);
    },

    checkMC(btn) {
        if (this.practiceAnswered) return;
        this.practiceAnswered = true;
        this.practiceTotal++;
        const q = this.practiceQ;
        const chosen = q.options[parseInt(btn.dataset.i)];
        const correct = chosen === q.answer;
        if (correct) this.practiceCorrect++;

        document.querySelectorAll('#lesson-content .option-btn').forEach(b => {
            const val = q.options[parseInt(b.dataset.i)];
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn) b.classList.add('incorrect');
            b.disabled = true;
        });

        this.showPracticeFeedback(correct, q);
    },

    checkFree() {
        if (this.practiceAnswered) return;
        const inp = document.getElementById('lesson-input');
        if (!inp || !inp.value.trim()) return;

        const q = this.practiceQ;
        const val = inp.value.trim();
        let correct = false;

        if (q.check) {
            correct = q.check(val);
        } else {
            correct = val === q.answer || val.toLowerCase() === String(q.answer).toLowerCase();
        }

        this.practiceAnswered = true;
        this.practiceTotal++;
        if (correct) this.practiceCorrect++;
        inp.disabled = true;

        this.showPracticeFeedback(correct, q);
    },

    showPracticeFeedback(correct, q) {
        const fb = document.getElementById('lesson-fb');
        const title = document.getElementById('lesson-fb-title');
        const expl = document.getElementById('lesson-fb-expl');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        title.textContent = correct ? 'Correct!' : 'Not quite';
        expl.innerHTML = q.explain || ('The answer is: ' + q.answer);

        document.getElementById('lesson-nav').innerHTML = this.navButtons('Continue', 'LessonEngine.advance()');
    },

    markComplete() {
        try {
            const lp = JSON.parse(localStorage.getItem('jp_lessonProgress') || '{}');
            lp[this.lesson.id] = {
                completed: true,
                score: this.practiceCorrect,
                total: this.practiceTotal,
                ts: Date.now()
            };
            localStorage.setItem('jp_lessonProgress', JSON.stringify(lp));
            if (typeof Auth !== 'undefined') Auth.saveAndSync();
        } catch (e) {}
    },

    isComplete(lessonId) {
        try {
            const lp = JSON.parse(localStorage.getItem('jp_lessonProgress') || '{}');
            return lp[lessonId] && lp[lessonId].completed;
        } catch (e) { return false; }
    },

    renderSummary(screen, content, nav) {
        this.markComplete();

        let h = '<h3>' + screen.title + '</h3>';
        if (this.practiceTotal > 0) {
            h += '<div class="lesson-score">Practice score: <strong>' +
                this.practiceCorrect + ' / ' + this.practiceTotal + '</strong></div>';
        }
        h += (screen.html || screen.content || '');
        content.innerHTML = h;

        let navH = '<div class="lesson-btn-row">' +
            '<button class="btn btn-hint" onclick="LessonEngine.back()">&larr; Back</button>';
        if (screen.nextActivity) {
            navH += '<button class="btn btn-primary" onclick="LessonEngine.goToActivity(\'' +
                screen.nextActivity + '\')">Start Practising</button>';
        }
        navH += '</div>' +
            '<button class="btn btn-hint" style="margin-top:8px;" onclick="showView(\'' + this.folder + '\')">Back to Topics</button>';
        nav.innerHTML = navH;
    },

    goToActivity(topic) {
        const card = document.querySelector('[data-topic="' + topic + '"]');
        if (card) card.click();
    },

    back() {
        if (this.screenIdx <= 0) return;
        this.screenIdx--;
        this.renderScreen();
        window.scrollTo(0, 0);
    },

    advance() {
        this.screenIdx++;
        if (this.screenIdx >= this.lesson.screens.length) {
            showView(this.folder);
            return;
        }
        if (this.screenIdx > this.furthestIdx) this.furthestIdx = this.screenIdx;
        this.renderScreen();
        window.scrollTo(0, 0);
    }
};
