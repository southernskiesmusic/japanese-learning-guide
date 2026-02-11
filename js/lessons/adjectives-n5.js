/* ================================================================
   LESSON: N5 Adjectives Vocabulary
   Comprehensive list of JLPT N5 adjectives
   ================================================================ */
var LESSON_ADJECTIVES_N5 = {
    id: 'adjectives-n5',
    title: 'N5 Adjectives',
    subtitle: 'Complete vocabulary list of essential JLPT N5 adjectives',
    folder: 'grammar-folder',
    screens: [

        // ── 1. い-adjectives ──────────────────────────────────────
        {
            type: 'concept',
            title: 'Common い-Adjectives',
            html: '<p>These adjectives all end in <span class="jp-medium">い</span> and conjugate by dropping the い:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;text-align:left;">Japanese</th><th style="padding:8px;text-align:left;">Romaji</th><th style="padding:8px;text-align:left;">Meaning</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">おおきい</span></td><td style="padding:6px 8px;">ōkii</td><td style="padding:6px 8px;">big</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">ちいさい</span></td><td style="padding:6px 8px;">chiisai</td><td style="padding:6px 8px;">small</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">たかい</span></td><td style="padding:6px 8px;">takai</td><td style="padding:6px 8px;">expensive / tall</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">やすい</span></td><td style="padding:6px 8px;">yasui</td><td style="padding:6px 8px;">cheap</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">あたらしい</span></td><td style="padding:6px 8px;">atarashii</td><td style="padding:6px 8px;">new</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">ふるい</span></td><td style="padding:6px 8px;">furui</td><td style="padding:6px 8px;">old (things)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">いい</span></td><td style="padding:6px 8px;">ii</td><td style="padding:6px 8px;">good *</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">わるい</span></td><td style="padding:6px 8px;">warui</td><td style="padding:6px 8px;">bad</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">おいしい</span></td><td style="padding:6px 8px;">oishii</td><td style="padding:6px 8px;">delicious</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">むずかしい</span></td><td style="padding:6px 8px;">muzukashii</td><td style="padding:6px 8px;">difficult</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">あつい</span></td><td style="padding:6px 8px;">atsui</td><td style="padding:6px 8px;">hot</td></tr>' +
                '<tr><td style="padding:6px 8px;"><span class="jp">さむい</span></td><td style="padding:6px 8px;">samui</td><td style="padding:6px 8px;">cold (weather)</td></tr>' +
                '</table>' +
                '<p>* <span class="jp">いい</span> is <strong>irregular</strong> — its conjugated forms use よ as the stem.</p>'
        },

        // ── 2. な-adjectives ──────────────────────────────────────
        {
            type: 'concept',
            title: 'Common な-Adjectives',
            html: '<p>These adjectives need <span class="jp-medium">な</span> before a noun:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;text-align:left;">Japanese</th><th style="padding:8px;text-align:left;">Romaji</th><th style="padding:8px;text-align:left;">Meaning</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">きれい（な）</span></td><td style="padding:6px 8px;">kirei</td><td style="padding:6px 8px;">pretty / clean</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">しずか（な）</span></td><td style="padding:6px 8px;">shizuka</td><td style="padding:6px 8px;">quiet</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">げんき（な）</span></td><td style="padding:6px 8px;">genki</td><td style="padding:6px 8px;">healthy / energetic</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">すき（な）</span></td><td style="padding:6px 8px;">suki</td><td style="padding:6px 8px;">liked / favourite</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">きらい（な）</span></td><td style="padding:6px 8px;">kirai</td><td style="padding:6px 8px;">disliked</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">べんり（な）</span></td><td style="padding:6px 8px;">benri</td><td style="padding:6px 8px;">convenient</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">たいへん（な）</span></td><td style="padding:6px 8px;">taihen</td><td style="padding:6px 8px;">tough / terrible</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">ゆうめい（な）</span></td><td style="padding:6px 8px;">yūmei</td><td style="padding:6px 8px;">famous</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px 8px;"><span class="jp">じょうず（な）</span></td><td style="padding:6px 8px;">jōzu</td><td style="padding:6px 8px;">skilled</td></tr>' +
                '<tr><td style="padding:6px 8px;"><span class="jp">へた（な）</span></td><td style="padding:6px 8px;">heta</td><td style="padding:6px 8px;">unskilled</td></tr>' +
                '</table>' +
                '<p><strong>Watch out:</strong> <span class="jp">きれい</span> ends in い but is a <strong>な-adjective</strong>!</p>'
        },

        // ── 3. Irregular: いい ────────────────────────────────────
        {
            type: 'concept',
            title: 'The Irregular Adjective: いい',
            html: '<p><span class="jp-large">いい</span> (good) is the only irregular adjective. Its conjugated forms use <strong>よ</strong> as the stem instead of い:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;text-align:left;">Form</th><th style="padding:8px;text-align:left;">Regular Pattern</th><th style="padding:8px;text-align:left;">いい (Irregular)</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Present</td><td style="padding:8px;">—</td><td style="padding:8px;"><span class="jp">いい</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Negative</td><td style="padding:8px;">い → くない</td><td style="padding:8px;"><span class="jp"><strong>よ</strong>くない</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Past</td><td style="padding:8px;">い → かった</td><td style="padding:8px;"><span class="jp"><strong>よ</strong>かった</span></td></tr>' +
                '<tr>' +
                '<td style="padding:8px;">Past negative</td><td style="padding:8px;">い → くなかった</td><td style="padding:8px;"><span class="jp"><strong>よ</strong>くなかった</span></td></tr>' +
                '</table>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">天気がよかったです。</span><br>The weather was good.</p>' +
                '</div>'
        },

        // ── 4. Examples in context ────────────────────────────────
        {
            type: 'example',
            title: 'Adjectives in Sentences',
            problem: '<p>See how both types of adjectives are used naturally:</p>',
            steps: [
                { text: '<span class="jp-medium">この本は<strong>おもしろい</strong>です。</span><br>This book is interesting. (い-adj)' },
                { text: '<span class="jp-medium"><strong>きれいな</strong>花ですね。</span><br>What a pretty flower! (な-adj before noun)' },
                { text: '<span class="jp-medium">日本語は<strong>むずかしくない</strong>です。</span><br>Japanese is not difficult. (negative い-adj)' },
                { text: '<span class="jp-medium"><strong>しずかな</strong>場所が好きです。</span><br>I like quiet places. (な-adj before noun)' },
                { text: '<span class="jp-medium">昨日は<strong>さむかった</strong>です。</span><br>Yesterday was cold. (past い-adj)' }
            ]
        },

        // ── 5. Practice: match adjective to meaning ───────────────
        {
            type: 'practice',
            intro: 'What does this adjective mean?',
            generate: function () {
                var pool = [
                    { jp: 'おおきい', en: 'big' }, { jp: 'ちいさい', en: 'small' },
                    { jp: 'たかい', en: 'expensive / tall' }, { jp: 'やすい', en: 'cheap' },
                    { jp: 'あたらしい', en: 'new' }, { jp: 'ふるい', en: 'old (things)' },
                    { jp: 'おいしい', en: 'delicious' }, { jp: 'むずかしい', en: 'difficult' },
                    { jp: 'きれい', en: 'pretty / clean' }, { jp: 'しずか', en: 'quiet' },
                    { jp: 'げんき', en: 'energetic' }, { jp: 'すき', en: 'liked' },
                    { jp: 'べんり', en: 'convenient' }, { jp: 'ゆうめい', en: 'famous' },
                    { jp: 'じょうず', en: 'skilled' }, { jp: 'へた', en: 'unskilled' },
                    { jp: 'あつい', en: 'hot' }, { jp: 'さむい', en: 'cold (weather)' },
                    { jp: 'わるい', en: 'bad' }, { jp: 'いい', en: 'good' }
                ];
                var q = pick(pool);
                var others = pool.filter(function (w) { return w.en !== q.en; });
                var opts = [q.en];
                others = shuffle(others);
                for (var i = 0; i < 3; i++) opts.push(others[i].en);
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + q.jp + '</span>',
                    text: 'Choose the correct meaning:',
                    options: opts,
                    answer: q.en,
                    explain: '<span class="jp-large">' + q.jp + '</span> = <strong>' + q.en + '</strong>'
                };
            }
        },

        // ── 6. Practice: い or な? ────────────────────────────────
        {
            type: 'practice',
            intro: 'Is this an い-adjective or a な-adjective?',
            generate: function () {
                var pool = [
                    { jp: 'おおきい', type: 'い-adjective' }, { jp: 'ちいさい', type: 'い-adjective' },
                    { jp: 'たかい', type: 'い-adjective' }, { jp: 'やすい', type: 'い-adjective' },
                    { jp: 'おいしい', type: 'い-adjective' }, { jp: 'むずかしい', type: 'い-adjective' },
                    { jp: 'あつい', type: 'い-adjective' }, { jp: 'さむい', type: 'い-adjective' },
                    { jp: 'きれい', type: 'な-adjective' }, { jp: 'しずか', type: 'な-adjective' },
                    { jp: 'げんき', type: 'な-adjective' }, { jp: 'すき', type: 'な-adjective' },
                    { jp: 'きらい', type: 'な-adjective' }, { jp: 'べんり', type: 'な-adjective' },
                    { jp: 'ゆうめい', type: 'な-adjective' }, { jp: 'じょうず', type: 'な-adjective' }
                ];
                var q = pick(pool);
                var trick = q.jp === 'きれい' ? ' (Careful — this one is tricky!)' : '';
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + q.jp + '</span>' + trick,
                    text: 'What type of adjective is this?',
                    options: ['い-adjective', 'な-adjective'],
                    answer: q.type,
                    explain: '<span class="jp-large">' + q.jp + '</span> is a <strong>' + q.type + '</strong>.' +
                        (q.jp === 'きれい' ? ' Even though it ends in い, it\'s a な-adjective!' : '')
                };
            }
        },

        // ── 7. Summary ───────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You now know the essential N5 adjectives:</p>' +
                '<ul>' +
                '<li><strong>12 い-adjectives</strong> — おおきい, ちいさい, たかい, やすい, あたらしい, ふるい, いい, わるい, おいしい, むずかしい, あつい, さむい</li>' +
                '<li><strong>10 な-adjectives</strong> — きれい, しずか, げんき, すき, きらい, べんり, たいへん, ゆうめい, じょうず, へた</li>' +
                '<li><strong>Irregular:</strong> いい conjugates with よ stem (よくない, よかった)</li>' +
                '<li><strong>Trap:</strong> きれい ends in い but is a な-adjective!</li>' +
                '</ul>' +
                '<p>Practice these with the Grammar Activity to lock them in!</p>',
            nextActivity: 'gram-activity'
        }
    ]
};
