/* ================================================================
   DASHBOARD — Progress overview for Japanese Learning Guide
   ================================================================ */
const DASHBOARD = {
    topics: [
        {
            name: 'Writing System',
            color: '#e63946',
            trainers: [
                { key: 'HIRA', label: 'Hiragana' },
                { key: 'KATA', label: 'Katakana' }
            ],
            lessons: ['hiragana-intro', 'katakana-intro']
        },
        {
            name: 'Kanji',
            color: '#457b9d',
            trainers: [
                { key: 'KANJI', label: 'Kanji N5' }
            ],
            lessons: ['kanji-basics']
        },
        {
            name: 'Grammar',
            color: '#2a9d8f',
            trainers: [
                { key: 'GRAM', label: 'Grammar' }
            ],
            lessons: ['particles-intro', 'verb-forms', 'adjectives', 'sentence-structure']
        },
        {
            name: 'Vocabulary',
            color: '#e9c46a',
            trainers: [
                { key: 'VOCAB', label: 'Vocabulary' }
            ],
            lessons: ['counting']
        }
    ],

    render() {
        const container = document.getElementById('dashboard-content');
        const allStats = getAllTrainerStats();
        const ds = getDailyStreak();

        // Overall stats
        let totalScore = 0, totalQuestions = 0, totalLessons = 0, totalLessonsDone = 0;
        this.topics.forEach(t => {
            t.trainers.forEach(tr => {
                const s = allStats[tr.key];
                if (s) { totalScore += s.score || 0; totalQuestions += s.total || 0; }
            });
            t.lessons.forEach(lid => {
                totalLessons++;
                if (LessonEngine.isComplete(lid)) totalLessonsDone++;
            });
        });

        // SRS stats
        let srsTotal = 0, srsMastered = 0;
        for (const key in SRS.data) {
            srsTotal++;
            if (SRS.data[key].level === 'mastered') srsMastered++;
        }

        let h = '<div class="dash-overview">' +
            '<div class="dash-stat"><div class="dash-stat-value" style="color:#e63946;">' + (ds.current || 0) + '</div><div class="dash-stat-label">Day Streak</div></div>' +
            '<div class="dash-stat"><div class="dash-stat-value" style="color:#457b9d;">' + totalQuestions + '</div><div class="dash-stat-label">Questions</div></div>' +
            '<div class="dash-stat"><div class="dash-stat-value" style="color:#2a9d8f;">' + totalLessonsDone + '/' + totalLessons + '</div><div class="dash-stat-label">Lessons</div></div>' +
            '<div class="dash-stat"><div class="dash-stat-value" style="color:#e9c46a;">' + srsMastered + '</div><div class="dash-stat-label">Mastered</div></div>' +
            '</div>';

        // Per-topic sections
        this.topics.forEach(topic => {
            const lessonsDone = topic.lessons.filter(lid => LessonEngine.isComplete(lid)).length;
            h += '<div class="dash-topic">' +
                '<div class="dash-topic-header" style="color:' + topic.color + ';">' +
                topic.name +
                '<span style="font-size:0.78rem;font-weight:400;color:var(--text-light);margin-left:8px;">' +
                lessonsDone + '/' + topic.lessons.length + ' lessons</span></div>';

            topic.trainers.forEach(tr => {
                const s = allStats[tr.key] || {};
                const score = s.score || 0;
                const total = s.total || 0;
                const pct = total > 0 ? Math.round(score / total * 100) : 0;

                h += '<div class="dash-row">' +
                    '<div class="dash-row-label">' + tr.label + '</div>' +
                    '<div class="dash-row-bar"><div class="dash-row-fill" style="width:' + pct + '%;background:' + topic.color + ';"></div></div>' +
                    '<div class="dash-row-stat">' + score + '/' + total + '</div>' +
                    '<div class="dash-row-pct">' + pct + '%</div>' +
                    '</div>';
            });

            h += '</div>';
        });

        // Practice history
        try {
            const hist = JSON.parse(localStorage.getItem('jp_practiceHistory') || '[]');
            if (hist.length > 0) {
                h += '<div class="dash-topic"><div class="dash-topic-header">Recent Practice</div>';
                const NAMES = {
                    HIRA: 'Hiragana', KATA: 'Katakana', KANJI: 'Kanji',
                    GRAM: 'Grammar', VOCAB: 'Vocabulary'
                };
                const recent = hist.slice(-10).reverse();
                recent.forEach(r => {
                    const name = NAMES[r.prefix] || r.prefix;
                    const pct = r.total > 0 ? Math.round(r.score / r.total * 100) : 0;
                    const date = new Date(r.date);
                    const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    h += '<div class="hist-row">' +
                        '<div class="hist-name">' + name + '</div>' +
                        '<div class="hist-date">' + dateStr + '</div>' +
                        '<div class="hist-score">' + r.score + '/' + r.total + '</div>' +
                        '<div class="hist-pct">' + pct + '%</div></div>';
                });
                h += '</div>';
            }
        } catch (e) {}

        // SRS overview
        if (srsTotal > 0) {
            const stats = { new: 0, learning: 0, reviewing: 0, mastered: 0 };
            for (const key in SRS.data) {
                stats[SRS.data[key].level]++;
            }
            h += '<div class="dash-topic"><div class="dash-topic-header">SRS Overview</div>' +
                '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center;">' +
                '<div><div style="font-size:1.2rem;font-weight:700;color:#999;">' + stats.new + '</div><div style="font-size:0.75rem;color:var(--text-light);">New</div></div>' +
                '<div><div style="font-size:1.2rem;font-weight:700;color:#ffc107;">' + stats.learning + '</div><div style="font-size:0.75rem;color:var(--text-light);">Learning</div></div>' +
                '<div><div style="font-size:1.2rem;font-weight:700;color:#4361ee;">' + stats.reviewing + '</div><div style="font-size:0.75rem;color:var(--text-light);">Reviewing</div></div>' +
                '<div><div style="font-size:1.2rem;font-weight:700;color:#06d6a0;">' + stats.mastered + '</div><div style="font-size:0.75rem;color:var(--text-light);">Mastered</div></div>' +
                '</div></div>';
        }

        container.innerHTML = h;
    }
};
