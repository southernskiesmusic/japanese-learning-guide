/* ================================================================
   INIT — Wire everything together
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize SRS
    SRS.load();

    // Initialize trainers
    HIRA.init();
    KATA.init();
    KANJI.init();
    GRAM.init();
    VOCAB.init();

    // Build reference charts
    HIRA.buildRefChart();
    KATA.buildRefChart();

    // Update streak UI
    updateDailyStreakUI();

    // Initialize free writing canvas
    WritingPad.init('free-canvas');

    // ---- Topic card navigation ----
    document.querySelectorAll('.topic-card[data-topic]').forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.dataset.topic;
            // Hub → folders
            if (topic === 'writing') showView('writing');
            else if (topic === 'kanji-folder') showView('kanji-folder');
            else if (topic === 'grammar-folder') showView('grammar-folder');
            else if (topic === 'vocab-folder') showView('vocab-folder');
            else if (topic === 'dashboard') { showView('dashboard'); DASHBOARD.render(); }
            // Folder → trainers
            else if (topic === 'hira-trainer') { showView('hira-trainer'); HIRA.load(); }
            else if (topic === 'kata-trainer') { showView('kata-trainer'); KATA.load(); }
            else if (topic === 'kanji-trainer') { showView('kanji-trainer'); KANJI.load(); }
            else if (topic === 'gram-trainer') { showView('gram-trainer'); GRAM.load(); }
            else if (topic === 'vocab-trainer') { showView('vocab-trainer'); VOCAB.load(); }
            else if (topic === 'writing-canvas') showView('writing-canvas');
        });
    });

    // ---- Lesson card navigation ----
    const LESSONS = {
        'hiragana-intro': typeof LESSON_HIRAGANA_INTRO !== 'undefined' ? LESSON_HIRAGANA_INTRO : null,
        'katakana-intro': typeof LESSON_KATAKANA_INTRO !== 'undefined' ? LESSON_KATAKANA_INTRO : null,
        'kanji-basics': typeof LESSON_KANJI_BASICS !== 'undefined' ? LESSON_KANJI_BASICS : null,
        'particles-intro': typeof LESSON_PARTICLES_INTRO !== 'undefined' ? LESSON_PARTICLES_INTRO : null,
        'verb-forms': typeof LESSON_VERB_FORMS !== 'undefined' ? LESSON_VERB_FORMS : null,
        'adjectives': typeof LESSON_ADJECTIVES !== 'undefined' ? LESSON_ADJECTIVES : null,
        'sentence-structure': typeof LESSON_SENTENCE_STRUCTURE !== 'undefined' ? LESSON_SENTENCE_STRUCTURE : null,
        'counting': typeof LESSON_COUNTING !== 'undefined' ? LESSON_COUNTING : null
    };

    document.querySelectorAll('[data-lesson]').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.lesson;
            const lesson = LESSONS[id];
            if (lesson) LessonEngine.start(lesson);
        });
    });

    // Update lesson tags (done/not done)
    Object.keys(LESSONS).forEach(id => {
        const tag = document.getElementById('lesson-tag-' + id);
        if (tag && LessonEngine.isComplete(id)) {
            tag.textContent = 'Done';
            tag.className = 'topic-tag lesson-done';
        }
    });

    // ---- Level selectors ----
    function setupLevels(containerId, trainer, callback) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                container.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                trainer.level = btn.dataset.level;
                if (callback) callback();
            });
        });
    }

    setupLevels('hira-levels', HIRA, () => HIRA.load());
    setupLevels('kata-levels', KATA, () => KATA.load());
    setupLevels('kanji-levels', KANJI, () => KANJI.load());
    setupLevels('gram-levels', GRAM, () => GRAM.load());
    setupLevels('vocab-levels', VOCAB, () => VOCAB.load());

    // ---- Mode toggles (Quiz / Write) ----
    function setupModes(containerId, trainer, callback) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                trainer.mode = btn.dataset.mode;
                if (callback) callback();
            });
        });
    }

    setupModes('hira-modes', HIRA, () => HIRA.load());
    setupModes('kata-modes', KATA, () => KATA.load());
    setupModes('kanji-modes', KANJI, () => KANJI.load());

    // ---- Enter key for Next buttons ----
    document.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        if (document.activeElement && (
            document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'TEXTAREA')) return;

        // Check for visible next buttons
        const nextBtns = ['hira-next', 'kata-next', 'kanji-next', 'gram-next', 'vocab-next'];
        for (const id of nextBtns) {
            const btn = document.getElementById(id);
            if (btn && btn.classList.contains('show')) {
                e.preventDefault();
                btn.click();
                return;
            }
        }
    });

    // ---- Settings ----
    const settingsBtn = document.getElementById('settings-btn');
    const settingsDropdown = document.getElementById('settings-dropdown');
    settingsBtn.addEventListener('click', () => {
        settingsDropdown.classList.toggle('show');
    });

    // Dark mode
    const darkToggle = document.getElementById('dark-toggle');
    const isDark = document.body.classList.contains('dark-mode');
    darkToggle.textContent = isDark ? 'On' : 'Off';

    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const on = document.body.classList.contains('dark-mode');
        darkToggle.textContent = on ? 'On' : 'Off';
        localStorage.setItem('jp_darkMode', on);

        // Update writing pads
        Object.keys(WritingPad.pads).forEach(id => {
            WritingPad.setDarkMode(id, on);
        });
    });

    // Custom wallpaper
    const bgUpload = document.getElementById('bg-upload');
    const bgChoose = document.getElementById('bg-choose');
    const bgClear = document.getElementById('bg-clear');
    const bgOpacity = document.getElementById('bg-opacity');
    const bgOpacityVal = document.getElementById('bg-opacity-val');
    const bgOverlay = document.getElementById('bg-overlay');

    bgChoose.addEventListener('click', () => bgUpload.click());
    bgUpload.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            const url = ev.target.result;
            localStorage.setItem('jp_bgImage', url);
            applyBg(url);
        };
        reader.readAsDataURL(file);
    });

    bgClear.addEventListener('click', () => {
        localStorage.removeItem('jp_bgImage');
        bgOverlay.style.backgroundImage = '';
        document.body.classList.remove('has-bg');
        bgClear.style.display = 'none';
    });

    bgOpacity.addEventListener('input', () => {
        const val = bgOpacity.value;
        bgOpacityVal.textContent = val + '%';
        bgOverlay.style.opacity = val / 100;
        localStorage.setItem('jp_bgOpacity', val);
    });

    function applyBg(url) {
        bgOverlay.style.backgroundImage = 'url(' + url + ')';
        document.body.classList.add('has-bg');
        bgClear.style.display = '';
    }

    // Restore saved bg
    const savedBg = localStorage.getItem('jp_bgImage');
    if (savedBg) applyBg(savedBg);

    const savedOpacity = localStorage.getItem('jp_bgOpacity');
    if (savedOpacity) {
        bgOpacity.value = savedOpacity;
        bgOpacityVal.textContent = savedOpacity + '%';
        bgOverlay.style.opacity = savedOpacity / 100;
    }

    // Font selector
    const fontSelector = document.getElementById('font-selector');
    const savedFont = localStorage.getItem('jp_selectedFont');
    if (savedFont) {
        fontSelector.value = savedFont;
        if (savedFont !== 'system') document.body.classList.add('font-' + savedFont);
    }

    fontSelector.addEventListener('change', () => {
        // Remove old font class
        document.body.className = document.body.className.replace(/font-\S+/g, '').trim();
        const val = fontSelector.value;
        if (val !== 'system') document.body.classList.add('font-' + val);
        localStorage.setItem('jp_selectedFont', val);
    });

    // ---- Continue Prompt ----
    function showContinuePrompt() {
        const container = document.getElementById('continue-prompt');
        if (!container) return;

        const allStats = getAllTrainerStats();
        const CONTINUE_MAP = {
            HIRA: { name: 'Hiragana Trainer', view: 'hira-trainer', loader: () => { showView('hira-trainer'); HIRA.load(); } },
            KATA: { name: 'Katakana Trainer', view: 'kata-trainer', loader: () => { showView('kata-trainer'); KATA.load(); } },
            KANJI: { name: 'Kanji Trainer', view: 'kanji-trainer', loader: () => { showView('kanji-trainer'); KANJI.load(); } },
            GRAM: { name: 'Grammar Trainer', view: 'gram-trainer', loader: () => { showView('gram-trainer'); GRAM.load(); } },
            VOCAB: { name: 'Vocabulary Trainer', view: 'vocab-trainer', loader: () => { showView('vocab-trainer'); VOCAB.load(); } }
        };

        // Find most recent trainer
        let latest = null, latestTs = 0;
        for (const key in allStats) {
            const s = allStats[key];
            if (s.lastTs > latestTs && CONTINUE_MAP[key]) {
                latestTs = s.lastTs;
                latest = key;
            }
        }

        if (!latest || Date.now() - latestTs > 7 * 86400000) {
            container.innerHTML = '';
            return;
        }

        const info = CONTINUE_MAP[latest];
        const s = allStats[latest];
        const ago = formatTimeAgo(latestTs);

        container.innerHTML = '<div class="continue-card">' +
            '<div class="continue-left">' +
            '<div class="continue-label">Pick up where you left off</div>' +
            '<div class="continue-name">' + info.name + '</div>' +
            '<div class="continue-meta">Score: ' + s.score + '/' + s.total + ' &middot; ' + ago + '</div>' +
            '</div>' +
            '<button class="btn btn-primary continue-go" id="continue-go-btn">Continue</button>' +
            '<button class="continue-dismiss" id="continue-dismiss" title="Dismiss">&times;</button>' +
            '</div>';

        document.getElementById('continue-go-btn').addEventListener('click', () => {
            info.loader();
        });
        document.getElementById('continue-dismiss').addEventListener('click', () => {
            container.innerHTML = '';
        });
    }

    function formatTimeAgo(ts) {
        const diff = Date.now() - ts;
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return mins + 'm ago';
        const hours = Math.floor(mins / 60);
        if (hours < 24) return hours + 'h ago';
        const days = Math.floor(hours / 24);
        if (days === 1) return 'yesterday';
        if (days < 7) return days + ' days ago';
        return new Date(ts).toLocaleDateString();
    }

    showContinuePrompt();

    // ---- Hub card auto-count tags ----
    function updateHubCounts() {
        const lessonIds = {
            writing: ['hiragana-intro', 'katakana-intro'],
            'kanji-folder': ['kanji-basics'],
            'grammar-folder': ['particles-intro', 'verb-forms', 'adjectives', 'sentence-structure'],
            'vocab-folder': ['counting']
        };
        const trainerIds = {
            writing: ['HIRA', 'KATA'],
            'kanji-folder': ['KANJI'],
            'grammar-folder': ['GRAM'],
            'vocab-folder': ['VOCAB']
        };

        const tagMap = {
            writing: 'writing-count',
            'kanji-folder': 'kanji-count',
            'grammar-folder': 'grammar-count',
            'vocab-folder': 'vocab-count'
        };

        for (const topic in tagMap) {
            const el = document.getElementById(tagMap[topic]);
            if (!el) continue;
            const tCount = (trainerIds[topic] || []).length;
            const lCount = (lessonIds[topic] || []).length;
            el.textContent = tCount + ' trainer' + (tCount !== 1 ? 's' : '') +
                ' · ' + lCount + ' lesson' + (lCount !== 1 ? 's' : '');
        }
    }
    updateHubCounts();

    // ---- Remove loading screen ----
    setTimeout(() => {
        const ls = document.getElementById('loading-screen');
        if (ls) ls.classList.add('hidden');
    }, 400);
});
