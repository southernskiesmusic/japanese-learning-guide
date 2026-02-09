/* ================================================================
   INIT — Wire everything together
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase Auth
    if (typeof Auth !== 'undefined') Auth.init();

    // Initialize SRS
    SRS.load();

    // Initialize trainers
    HIRA.init();
    KATA.init();
    KANJI.init();
    GRAM.init();
    VOCAB.init();
    CONV.init();
    CONJ.init();
    NUM.init();

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
            else if (topic === 'conv-folder') showView('conv-folder');
            else if (topic === 'dashboard') { showView('dashboard'); DASHBOARD.render(); }
            // Folder → trainers
            else if (topic === 'hira-trainer') { showView('hira-trainer'); HIRA.load(); }
            else if (topic === 'kata-trainer') { showView('kata-trainer'); KATA.load(); }
            else if (topic === 'kanji-trainer') { showView('kanji-trainer'); KANJI.load(); }
            else if (topic === 'gram-trainer') { showView('gram-trainer'); GRAM.load(); }
            else if (topic === 'vocab-trainer') { showView('vocab-trainer'); VOCAB.load(); }
            else if (topic === 'conv-trainer') { showView('conv-trainer'); CONV.load(); }
            else if (topic === 'conj-trainer') { showView('conj-trainer'); CONJ.load(); }
            else if (topic === 'num-trainer') { showView('num-trainer'); NUM.load(); }
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
        'counting': typeof LESSON_COUNTING !== 'undefined' ? LESSON_COUNTING : null,
        'conversations-intro': typeof LESSON_CONVERSATIONS_INTRO !== 'undefined' ? LESSON_CONVERSATIONS_INTRO : null,
        'conversations-daily': typeof LESSON_CONVERSATIONS_DAILY !== 'undefined' ? LESSON_CONVERSATIONS_DAILY : null,
        'conjugation-verbs': typeof LESSON_CONJUGATION_VERBS !== 'undefined' ? LESSON_CONJUGATION_VERBS : null,
        'conjugation-adjectives': typeof LESSON_CONJUGATION_ADJECTIVES !== 'undefined' ? LESSON_CONJUGATION_ADJECTIVES : null,
        'numbers-intro': typeof LESSON_NUMBERS_INTRO !== 'undefined' ? LESSON_NUMBERS_INTRO : null,
        'numbers-counters': typeof LESSON_NUMBERS_COUNTERS !== 'undefined' ? LESSON_NUMBERS_COUNTERS : null
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
    setupLevels('conv-levels', CONV, () => CONV.load());
    setupLevels('conj-levels', CONJ, () => CONJ.load());
    setupLevels('num-levels', NUM, () => NUM.load());

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
        const nextBtns = ['hira-next', 'kata-next', 'kanji-next', 'gram-next', 'vocab-next', 'conv-next', 'conj-next', 'num-next'];
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
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
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
        const img = new Image();
        img.onload = () => {
            const maxW = 1920;
            let w = img.width, h = img.height;
            if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            try {
                localStorage.setItem('jp_bgImage', dataUrl);
                applyBg(dataUrl);
                if (typeof Auth !== 'undefined') Auth.saveAndSync();
            } catch (err) {
                alert('Image too large for localStorage. Try a smaller image.');
            }
        };
        img.src = URL.createObjectURL(file);
        bgUpload.value = '';
    });

    bgClear.addEventListener('click', () => {
        localStorage.removeItem('jp_bgImage');
        bgOverlay.style.backgroundImage = '';
        document.body.classList.remove('has-bg');
        bgClear.style.display = 'none';
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    });

    bgOpacity.addEventListener('input', () => {
        const val = bgOpacity.value;
        bgOpacityVal.textContent = val + '%';
        bgOverlay.style.opacity = val / 100;
        localStorage.setItem('jp_bgOpacity', val);
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
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
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
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
            VOCAB: { name: 'Vocabulary Trainer', view: 'vocab-trainer', loader: () => { showView('vocab-trainer'); VOCAB.load(); } },
            CONV: { name: 'Conversation Trainer', view: 'conv-trainer', loader: () => { showView('conv-trainer'); CONV.load(); } },
            CONJ: { name: 'Conjugation Drill', view: 'conj-trainer', loader: () => { showView('conj-trainer'); CONJ.load(); } },
            NUM: { name: 'Numbers Trainer', view: 'num-trainer', loader: () => { showView('num-trainer'); NUM.load(); } }
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
            'grammar-folder': ['particles-intro', 'verb-forms', 'adjectives', 'sentence-structure', 'conjugation-verbs', 'conjugation-adjectives'],
            'vocab-folder': ['counting', 'numbers-intro', 'numbers-counters'],
            'conv-folder': ['conversations-intro', 'conversations-daily']
        };
        const trainerIds = {
            writing: ['HIRA', 'KATA'],
            'kanji-folder': ['KANJI'],
            'grammar-folder': ['GRAM', 'CONJ'],
            'vocab-folder': ['VOCAB', 'NUM'],
            'conv-folder': ['CONV']
        };

        const tagMap = {
            writing: 'writing-count',
            'kanji-folder': 'kanji-count',
            'grammar-folder': 'grammar-count',
            'vocab-folder': 'vocab-count',
            'conv-folder': 'conv-count'
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

    // ---- Background music ----
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    const musicSettingBtn = document.getElementById('music-setting-toggle');
    const musicVolSlider = document.getElementById('music-volume');
    const musicVolVal = document.getElementById('music-volume-val');

    if (bgMusic && musicBtn) {
        const savedVol = parseFloat(localStorage.getItem('jp_musicVolume') || '0.3');
        const savedOn = localStorage.getItem('jp_musicOn') === 'true';
        bgMusic.volume = savedVol;
        if (musicVolSlider) musicVolSlider.value = Math.round(savedVol * 100);
        if (musicVolVal) musicVolVal.textContent = Math.round(savedVol * 100) + '%';
        if (musicSettingBtn) musicSettingBtn.textContent = savedOn ? 'On' : 'Off';

        function toggleMusic() {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicBtn.classList.add('playing');
                    if (musicSettingBtn) musicSettingBtn.textContent = 'On';
                    localStorage.setItem('jp_musicOn', 'true');
                }).catch(() => {});
            } else {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
                if (musicSettingBtn) musicSettingBtn.textContent = 'Off';
                localStorage.setItem('jp_musicOn', 'false');
            }
        }

        musicBtn.addEventListener('click', toggleMusic);
        if (musicSettingBtn) musicSettingBtn.addEventListener('click', toggleMusic);

        if (musicVolSlider) {
            musicVolSlider.addEventListener('input', () => {
                const v = musicVolSlider.value / 100;
                bgMusic.volume = v;
                if (musicVolVal) musicVolVal.textContent = musicVolSlider.value + '%';
                localStorage.setItem('jp_musicVolume', v);
            });
        }

        // Auto-play if previously on (requires user gesture first)
        if (savedOn) {
            bgMusic.play().then(() => {
                musicBtn.classList.add('playing');
            }).catch(() => {});
        }
    }

    // ---- Remove loading screen ----
    setTimeout(() => {
        const ls = document.getElementById('loading-screen');
        if (ls) ls.classList.add('hidden');
    }, 400);
});
