/* ================================================================
   STUDY GUIDE — Structured JLPT N5 Roadmap
   ================================================================ */
const STUDY_GUIDE = {
    phases: [
        {
            name: 'Writing Foundation', color: '#e63946',
            steps: [
                { type: 'lesson', id: 'hiragana-intro', title: 'Hiragana Introduction', desc: 'Learn the basic Japanese syllabary' },
                { type: 'activity', id: 'HIRA', title: 'Hiragana Practice', desc: '20 questions, 80%+ accuracy', threshold: 20, accuracy: 80 },
                { type: 'lesson', id: 'katakana-intro', title: 'Katakana Introduction', desc: 'Learn katakana for foreign words' },
                { type: 'lesson', id: 'katakana-loanwords', title: 'Katakana Loan Words', desc: 'Sound change rules and common patterns' },
                { type: 'activity', id: 'KATA', title: 'Katakana Practice', desc: '20 questions, 80%+ accuracy', threshold: 20, accuracy: 80 }
            ]
        },
        {
            name: 'Reading & Grammar Basics', color: '#457b9d',
            steps: [
                { type: 'lesson', id: 'kanji-basics', title: 'Kanji Basics', desc: 'On\'yomi vs kun\'yomi, radicals, and study methods' },
                { type: 'lesson', id: 'particles-intro', title: 'Particles Introduction', desc: 'Essential particles: wa, ga, wo, ni, de' },
                { type: 'lesson', id: 'sentence-structure', title: 'Sentence Structure', desc: 'SOV word order and topic-comment' },
                { type: 'lesson', id: 'question-words', title: 'Question Words', desc: 'Essential interrogatives for N5' },
                { type: 'activity', id: 'KANJI', title: 'Kanji Recognition', desc: '15 questions, 70%+ accuracy', threshold: 15, accuracy: 70 },
                { type: 'activity', id: 'GRAM', title: 'Grammar Drill', desc: '15 questions, 70%+ accuracy', threshold: 15, accuracy: 70 }
            ]
        },
        {
            name: 'Vocabulary & Numbers', color: '#e9c46a',
            steps: [
                { type: 'lesson', id: 'counting', title: 'Counting & Numbers', desc: 'Japanese counters and number systems' },
                { type: 'lesson', id: 'numbers-intro', title: 'Japanese Numbers', desc: 'Counting from 1 to 10,000' },
                { type: 'lesson', id: 'numbers-counters', title: 'Counters & Time', desc: 'Counter words, telling time, dates' },
                { type: 'lesson', id: 'family-vocab', title: 'Family Vocabulary', desc: 'Humble and polite family terms' },
                { type: 'activity', id: 'VOCAB', title: 'Vocabulary Drill', desc: '25 questions, 75%+ accuracy', threshold: 25, accuracy: 75 },
                { type: 'activity', id: 'NUM', title: 'Numbers Mastery', desc: '20 questions, 75%+ accuracy', threshold: 20, accuracy: 75 }
            ]
        },
        {
            name: 'Verb & Adjective Mastery', color: '#2a9d8f',
            steps: [
                { type: 'lesson', id: 'verb-forms', title: 'Verb Forms', desc: 'Dictionary, masu, te-form, and past tense' },
                { type: 'lesson', id: 'conjugation-verbs', title: 'Verb Conjugation', desc: 'Master essential verb conjugations' },
                { type: 'lesson', id: 'adjectives', title: 'Adjectives', desc: 'i-adjectives and na-adjectives' },
                { type: 'lesson', id: 'conjugation-adjectives', title: 'Adjective Conjugation', desc: 'Negative, past, and adverb forms' },
                { type: 'lesson', id: 'adjectives-n5', title: 'N5 Adjectives', desc: 'Complete N5 adjective vocabulary' },
                { type: 'activity', id: 'CONJ', title: 'Conjugation Drill', desc: '20 questions, 75%+ accuracy', threshold: 20, accuracy: 75 }
            ]
        },
        {
            name: 'Communication', color: '#f77f00',
            steps: [
                { type: 'lesson', id: 'conversations-intro', title: 'Everyday Conversations', desc: 'Greetings, introductions, and restaurant phrases' },
                { type: 'lesson', id: 'conversations-daily', title: 'Shopping & Services', desc: 'Navigate shops and everyday situations' },
                { type: 'activity', id: 'CONV', title: 'Conversation Practice', desc: '20 questions, 75%+ accuracy', threshold: 20, accuracy: 75 }
            ]
        }
    ],

    isStepComplete(step) {
        if (step.type === 'lesson') {
            return LessonEngine.isComplete(step.id);
        }
        const stats = getAllActivityStats();
        const s = stats[step.id];
        if (!s) return false;
        const pct = s.total > 0 ? Math.round(s.score / s.total * 100) : 0;
        return s.total >= step.threshold && pct >= step.accuracy;
    },

    isPhaseComplete(phaseIdx) {
        return this.phases[phaseIdx].steps.every(s => this.isStepComplete(s));
    },

    getStepStatus(step, phaseIdx, stepIdx) {
        if (this.isStepComplete(step)) return 'complete';

        // Check availability: first step of phase 0 is always available
        let available = false;
        if (phaseIdx === 0 && stepIdx === 0) {
            available = true;
        } else if (stepIdx === 0) {
            // First step of a new phase — previous phase must be complete
            available = this.isPhaseComplete(phaseIdx - 1);
        } else {
            // Previous step in same phase must be complete
            available = this.isStepComplete(this.phases[phaseIdx].steps[stepIdx - 1]);
        }

        if (!available) return 'locked';

        // Check if activity has some progress but hasn't met threshold
        if (step.type === 'activity') {
            const stats = getAllActivityStats();
            const s = stats[step.id];
            if (s && s.total > 0) return 'in-progress';
        }

        return 'available';
    },

    getOverallProgress() {
        let complete = 0, total = 0;
        this.phases.forEach(p => {
            p.steps.forEach(s => {
                total++;
                if (this.isStepComplete(s)) complete++;
            });
        });
        return { complete, total, percent: total > 0 ? Math.round(complete / total * 100) : 0 };
    },

    getPhaseProgress(phaseIdx) {
        const phase = this.phases[phaseIdx];
        let complete = 0;
        phase.steps.forEach(s => { if (this.isStepComplete(s)) complete++; });
        return { complete, total: phase.steps.length, percent: phase.steps.length > 0 ? Math.round(complete / phase.steps.length * 100) : 0 };
    },

    getRecommendedNext() {
        for (let pi = 0; pi < this.phases.length; pi++) {
            const phase = this.phases[pi];
            for (let si = 0; si < phase.steps.length; si++) {
                const status = this.getStepStatus(phase.steps[si], pi, si);
                if (status === 'in-progress' || status === 'available') {
                    return { step: phase.steps[si], phaseIdx: pi, stepIdx: si, status };
                }
            }
        }
        return null;
    },

    goToStep(step) {
        if (step.type === 'lesson') {
            const card = document.querySelector('[data-lesson="' + step.id + '"]');
            if (card) card.click();
        } else {
            const activityMap = {
                HIRA: { view: 'hira-activity', obj: typeof HIRA !== 'undefined' ? HIRA : null },
                KATA: { view: 'kata-activity', obj: typeof KATA !== 'undefined' ? KATA : null },
                KANJI: { view: 'kanji-activity', obj: typeof KANJI !== 'undefined' ? KANJI : null },
                GRAM: { view: 'gram-activity', obj: typeof GRAM !== 'undefined' ? GRAM : null },
                VOCAB: { view: 'vocab-activity', obj: typeof VOCAB !== 'undefined' ? VOCAB : null },
                CONV: { view: 'conv-activity', obj: typeof CONV !== 'undefined' ? CONV : null },
                CONJ: { view: 'conj-activity', obj: typeof CONJ !== 'undefined' ? CONJ : null },
                NUM: { view: 'num-activity', obj: typeof NUM !== 'undefined' ? NUM : null }
            };
            const t = activityMap[step.id];
            if (t) {
                showView(t.view);
                if (t.obj) t.obj.load();
            }
        }
    },

    // ---- Rendering ----
    render() {
        this.renderOverall();
        this.renderRecommended();
        this.renderTimeline();
        this.checkMilestoneCelebration();
    },

    renderOverall() {
        const el = document.getElementById('sg-overall-progress');
        if (!el) return;
        const p = this.getOverallProgress();
        el.innerHTML =
            '<div class="sg-overall">' +
                '<div class="sg-overall-label">' + p.complete + ' / ' + p.total + ' steps complete</div>' +
                '<div class="sg-overall-bar"><div class="sg-overall-fill" style="width:' + p.percent + '%"></div></div>' +
                '<div class="sg-overall-pct">' + p.percent + '%</div>' +
            '</div>';
    },

    renderRecommended() {
        const el = document.getElementById('sg-recommended');
        if (!el) return;
        const rec = this.getRecommendedNext();
        if (!rec) {
            el.innerHTML = '<div class="sg-next-card sg-next-done"><div class="sg-next-title">All Complete!</div><div class="sg-next-desc">You\'ve finished every step on the roadmap. Amazing work!</div></div>';
            return;
        }
        const phase = this.phases[rec.phaseIdx];
        const btnLabel = rec.step.type === 'lesson' ? 'Start Lesson' : 'Start Practice';
        el.innerHTML =
            '<div class="sg-next-card" style="border-left-color:' + phase.color + '">' +
                '<div class="sg-next-phase" style="color:' + phase.color + '">Phase ' + (rec.phaseIdx + 1) + ': ' + phase.name + '</div>' +
                '<div class="sg-next-title">' + rec.step.title + '</div>' +
                '<div class="sg-next-desc">' + rec.step.desc + '</div>' +
                '<button class="btn btn-primary sg-next-btn" id="sg-go-btn">' + btnLabel + '</button>' +
            '</div>';
        document.getElementById('sg-go-btn').addEventListener('click', () => this.goToStep(rec.step));
    },

    renderTimeline() {
        const el = document.getElementById('sg-timeline');
        if (!el) return;
        const stats = getAllActivityStats();
        let html = '';

        this.phases.forEach((phase, pi) => {
            const pp = this.getPhaseProgress(pi);
            const milestoneState = this._getMilestoneState();
            const phaseComplete = pp.complete === pp.total;

            html += '<div class="sg-phase">';
            html += '<div class="sg-phase-header">';
            html += '<div class="sg-phase-num" style="background:' + phase.color + '">' + (pi + 1) + '</div>';
            html += '<div class="sg-phase-info">';
            html += '<div class="sg-phase-title">' + phase.name;
            if (phaseComplete && milestoneState['phase_' + pi]) {
                html += ' <span class="sg-milestone-badge">Complete!</span>';
            }
            html += '</div>';
            html += '<div class="sg-phase-bar"><div class="sg-phase-bar-fill" style="width:' + pp.percent + '%;background:' + phase.color + '"></div></div>';
            html += '<div class="sg-phase-stat">' + pp.complete + ' / ' + pp.total + '</div>';
            html += '</div></div>';

            phase.steps.forEach((step, si) => {
                const status = this.getStepStatus(step, pi, si);
                html += '<div class="sg-step sg-step-' + status + '">';
                html += '<div class="sg-step-dot sg-dot-' + status + '"></div>';
                html += '<div class="sg-step-card">';
                html += '<div class="sg-step-head">';
                html += '<div class="sg-step-title">' + step.title + '</div>';
                html += '<span class="sg-step-badge sg-badge-' + status + '">' + this._badgeLabel(status) + '</span>';
                html += '</div>';
                html += '<div class="sg-step-desc">' + step.desc + '</div>';

                // Show activity progress sub-bar
                if (step.type === 'activity') {
                    const s = stats[step.id];
                    const answered = s ? s.total : 0;
                    const pct = s && s.total > 0 ? Math.round(s.score / s.total * 100) : 0;
                    html += '<div class="sg-activity-progress">';
                    html += '<div class="sg-activity-bar"><div class="sg-activity-fill" style="width:' + Math.min(100, Math.round(answered / step.threshold * 100)) + '%;background:' + phase.color + '"></div></div>';
                    html += '<div class="sg-activity-stat">' + answered + '/' + step.threshold + ' answered &middot; ' + pct + '% accuracy</div>';
                    html += '</div>';
                }

                // Action button for available/in-progress
                if (status === 'available' || status === 'in-progress') {
                    const label = step.type === 'lesson' ? 'Start' : 'Practice';
                    html += '<button class="btn btn-primary btn-sm sg-step-go" data-pi="' + pi + '" data-si="' + si + '">' + label + '</button>';
                }

                html += '</div></div>';
            });

            html += '</div>';
        });

        el.innerHTML = html;

        // Bind step action buttons
        el.querySelectorAll('.sg-step-go').forEach(btn => {
            btn.addEventListener('click', () => {
                const pi = parseInt(btn.dataset.pi);
                const si = parseInt(btn.dataset.si);
                this.goToStep(this.phases[pi].steps[si]);
            });
        });
    },

    _badgeLabel(status) {
        if (status === 'complete') return 'Done';
        if (status === 'in-progress') return 'In Progress';
        if (status === 'available') return 'Up Next';
        return 'Locked';
    },

    // ---- Milestone Celebrations ----
    _getMilestoneState() {
        try { return JSON.parse(localStorage.getItem('jp_studyGuideState') || '{}'); }
        catch (e) { return {}; }
    },

    _saveMilestoneState(state) {
        localStorage.setItem('jp_studyGuideState', JSON.stringify(state));
    },

    checkMilestoneCelebration() {
        const state = this._getMilestoneState();
        this.phases.forEach((phase, pi) => {
            const key = 'phase_' + pi;
            if (state[key]) return; // Already celebrated
            if (this.isPhaseComplete(pi)) {
                state[key] = true;
                this._saveMilestoneState(state);
                // Fire celebration
                setTimeout(() => {
                    if (typeof fireConfetti === 'function') fireConfetti(3);
                    this._showMilestoneToast(phase.name);
                }, 300);
            }
        });
    },

    _showMilestoneToast(phaseName) {
        const toast = document.createElement('div');
        toast.className = 'sg-toast';
        toast.textContent = 'Phase complete: ' + phaseName + '!';
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('out');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    },

    updateHubTag() {
        const tag = document.getElementById('sg-hub-tag');
        if (!tag) return;
        const p = this.getOverallProgress();
        tag.textContent = p.complete + '/' + p.total;
    }
};
