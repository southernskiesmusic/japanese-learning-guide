/* ================================================================
   LESSON: Adjectives
   Describing things in Japanese — i-adjectives and na-adjectives
   ================================================================ */
var LESSON_ADJECTIVES = {
    id: 'adjectives',
    title: 'Adjectives',
    subtitle: 'Describing things in Japanese',
    folder: 'grammar-folder',
    screens: [

        // ── 1. Two types of adjectives ──────────────────────────
        {
            type: 'concept',
            title: 'Two Types of Japanese Adjectives',
            html: '<p>Japanese has two kinds of adjectives, and they conjugate differently:</p>' +
                '<h4>い-adjectives (i-adjectives)</h4>' +
                '<p>These always end in い in their dictionary form. They conjugate by changing the い ending.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">大き<strong>い</strong></span> (ookii) — big &nbsp; | &nbsp; ' +
                '<span class="jp-medium">小さ<strong>い</strong></span> (chiisai) — small &nbsp; | &nbsp; ' +
                '<span class="jp-medium">高<strong>い</strong></span> (takai) — expensive/tall</p>' +
                '<p><span class="jp-medium">美味し<strong>い</strong></span> (oishii) — delicious &nbsp; | &nbsp; ' +
                '<span class="jp-medium">楽し<strong>い</strong></span> (tanoshii) — fun &nbsp; | &nbsp; ' +
                '<span class="jp-medium">暑<strong>い</strong></span> (atsui) — hot</p>' +
                '</div>' +
                '<h4>な-adjectives (na-adjectives)</h4>' +
                '<p>These do <em>not</em> end in い (or if they do, they are exceptions). They need な when placed before a noun.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">きれい<strong>な</strong></span> — beautiful/clean &nbsp; | &nbsp; ' +
                '<span class="jp-medium">静か<strong>な</strong></span> (shizuka) — quiet &nbsp; | &nbsp; ' +
                '<span class="jp-medium">元気<strong>な</strong></span> (genki) — healthy/energetic</p>' +
                '</div>' +
                '<p><strong>Watch out:</strong> きれい and 有名 (famous) <em>look</em> like い-adjectives but are actually な-adjectives!</p>'
        },

        // ── 2. i-adjective conjugation ──────────────────────────
        {
            type: 'concept',
            title: 'い-Adjective Conjugation',
            html: '<p>い-adjectives conjugate by replacing the final い:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Rule</th><th style="padding:6px;text-align:left;">Example (大きい)</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Present (+)</td><td style="padding:6px;">As-is</td><td style="padding:6px;"><span class="jp-medium">大き<strong>い</strong></span> — is big</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Negative</td><td style="padding:6px;">い → くない</td><td style="padding:6px;"><span class="jp-medium">大き<strong>くない</strong></span> — is not big</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past</td><td style="padding:6px;">い → かった</td><td style="padding:6px;"><span class="jp-medium">大き<strong>かった</strong></span> — was big</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;">Past negative</td><td style="padding:6px;">い → くなかった</td><td style="padding:6px;"><span class="jp-medium">大き<strong>くなかった</strong></span> — was not big</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Exception:</strong> いい (good) uses よ- as its stem: よくない, よかった, よくなかった.</p>'
        },

        // ── 3. Example: conjugate 高い ───────────────────────────
        {
            type: 'example',
            title: 'Conjugate: 高い (takai)',
            problem: '<p>Let\'s conjugate <span class="jp-large">高い</span> (expensive / tall) through all four forms.</p>',
            steps: [
                { text: '<strong>Present:</strong> <span class="jp-medium">高<strong>い</strong></span><br>"is expensive / is tall"' },
                { text: '<strong>Negative:</strong> <span class="jp-medium">高<strong>くない</strong></span><br>Drop い, add くない. "is not expensive"' },
                { text: '<strong>Past:</strong> <span class="jp-medium">高<strong>かった</strong></span><br>Drop い, add かった. "was expensive"' },
                { text: '<strong>Past negative:</strong> <span class="jp-medium">高<strong>くなかった</strong></span><br>Drop い, add くなかった. "was not expensive"' }
            ]
        },

        // ── 4. Practice: i-adjective conjugation MC ─────────────
        {
            type: 'practice',
            intro: 'Choose the correct い-adjective form.',
            generate: function () {
                var adjData = [
                    { base: '大きい', stem: '大き', meaning: 'big' },
                    { base: '小さい', stem: '小さ', meaning: 'small' },
                    { base: '高い',   stem: '高',   meaning: 'expensive/tall' },
                    { base: '安い',   stem: '安',   meaning: 'cheap' },
                    { base: '暑い',   stem: '暑',   meaning: 'hot' },
                    { base: '寒い',   stem: '寒',   meaning: 'cold' },
                    { base: '長い',   stem: '長',   meaning: 'long' },
                    { base: '短い',   stem: '短',   meaning: 'short' },
                    { base: '楽しい', stem: '楽し', meaning: 'fun' },
                    { base: '難しい', stem: '難し', meaning: 'difficult' },
                    { base: '美味しい', stem: '美味し', meaning: 'delicious' },
                    { base: '忙しい', stem: '忙し', meaning: 'busy' }
                ];
                var adj = pick(adjData);
                var forms = [
                    { key: 'negative', label: 'negative',      val: adj.stem + 'くない' },
                    { key: 'past',     label: 'past',          val: adj.stem + 'かった' },
                    { key: 'pastneg',  label: 'past negative', val: adj.stem + 'くなかった' }
                ];
                var target = pick(forms);
                var correct = target.val;
                var wrongForms = forms.filter(function (f) { return f.key !== target.key; }).map(function (f) { return f.val; });
                var otherAdj = pick(adjData.filter(function (a) { return a.base !== adj.base; }));
                wrongForms.push(otherAdj.stem + (target.key === 'negative' ? 'くない' : target.key === 'past' ? 'かった' : 'くなかった'));
                var opts = [correct];
                wrongForms = shuffle(wrongForms);
                for (var i = 0; i < 3 && i < wrongForms.length; i++) {
                    if (opts.indexOf(wrongForms[i]) === -1) opts.push(wrongForms[i]);
                }
                while (opts.length < 4) opts.push(adj.stem + 'い');
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + adj.base + '</span> &rarr; <strong>' + target.label + '</strong>',
                    text: adj.meaning,
                    options: opts,
                    answer: correct,
                    explain: '<span class="jp-medium">' + adj.base + ' → <strong>' + correct + '</strong></span> (' + target.label + ')'
                };
            }
        },

        // ── 5. na-adjective conjugation ─────────────────────────
        {
            type: 'concept',
            title: 'な-Adjective Conjugation',
            html: '<p>な-adjectives conjugate using です (polite) or だ (casual) endings:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Casual</th><th style="padding:6px;text-align:left;">Example (きれい)</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Present (+)</td><td style="padding:6px;">~ だ</td><td style="padding:6px;"><span class="jp-medium">きれい<strong>だ</strong></span> — is beautiful</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Negative</td><td style="padding:6px;">~ じゃない</td><td style="padding:6px;"><span class="jp-medium">きれい<strong>じゃない</strong></span> — is not beautiful</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past</td><td style="padding:6px;">~ だった</td><td style="padding:6px;"><span class="jp-medium">きれい<strong>だった</strong></span> — was beautiful</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;">Past negative</td><td style="padding:6px;">~ じゃなかった</td><td style="padding:6px;"><span class="jp-medium">きれい<strong>じゃなかった</strong></span> — was not beautiful</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Before a noun:</strong> add な → <span class="jp-medium">きれい<strong>な</strong>花</span> (beautiful flower)</p>' +
                '<p>In polite speech, replace だ with です, じゃない with じゃないです (or ではありません), etc.</p>'
        },

        // ── 6. Example: conjugate 静か ───────────────────────────
        {
            type: 'example',
            title: 'Conjugate: 静か (shizuka — quiet)',
            problem: '<p>Let\'s conjugate the な-adjective <span class="jp-large">静か</span> through all four forms.</p>',
            steps: [
                { text: '<strong>Present:</strong> <span class="jp-medium">静か<strong>だ</strong></span> (casual) / <span class="jp-medium">静か<strong>です</strong></span> (polite)<br>"is quiet"' },
                { text: '<strong>Negative:</strong> <span class="jp-medium">静か<strong>じゃない</strong></span> / <span class="jp-medium">静か<strong>じゃないです</strong></span><br>"is not quiet"' },
                { text: '<strong>Past:</strong> <span class="jp-medium">静か<strong>だった</strong></span> / <span class="jp-medium">静か<strong>でした</strong></span><br>"was quiet"' },
                { text: '<strong>Past negative:</strong> <span class="jp-medium">静か<strong>じゃなかった</strong></span> / <span class="jp-medium">静か<strong>じゃなかったです</strong></span><br>"was not quiet"' }
            ]
        },

        // ── 7. Practice: adjective form MC ──────────────────────
        {
            type: 'practice',
            intro: 'Pick the correct adjective form.',
            generate: function () {
                var pool = [
                    { base: '大きい', type: 'i', stem: '大き', meaning: 'big' },
                    { base: '高い',   type: 'i', stem: '高',   meaning: 'expensive' },
                    { base: '楽しい', type: 'i', stem: '楽し', meaning: 'fun' },
                    { base: '美味しい', type: 'i', stem: '美味し', meaning: 'delicious' },
                    { base: '寒い',   type: 'i', stem: '寒',   meaning: 'cold' },
                    { base: 'きれい', type: 'na', stem: 'きれい', meaning: 'beautiful' },
                    { base: '静か',   type: 'na', stem: '静か',   meaning: 'quiet' },
                    { base: '元気',   type: 'na', stem: '元気',   meaning: 'healthy' },
                    { base: '有名',   type: 'na', stem: '有名',   meaning: 'famous' },
                    { base: '好き',   type: 'na', stem: '好き',   meaning: 'liked' }
                ];
                var adj = pick(pool);
                var formList, correct, label;
                if (adj.type === 'i') {
                    var iForms = [
                        { label: 'negative',      val: adj.stem + 'くない' },
                        { label: 'past',          val: adj.stem + 'かった' },
                        { label: 'past negative', val: adj.stem + 'くなかった' }
                    ];
                    var f = pick(iForms);
                    correct = f.val;
                    label = f.label;
                    formList = iForms.map(function (x) { return x.val; });
                } else {
                    var naForms = [
                        { label: 'negative',      val: adj.stem + 'じゃない' },
                        { label: 'past',          val: adj.stem + 'だった' },
                        { label: 'past negative', val: adj.stem + 'じゃなかった' }
                    ];
                    var g = pick(naForms);
                    correct = g.val;
                    label = g.label;
                    formList = naForms.map(function (x) { return x.val; });
                }
                var wrongOpts = formList.filter(function (v) { return v !== correct; });
                // Add a cross-type distractor
                if (adj.type === 'i') {
                    wrongOpts.push(adj.stem + 'じゃない');
                } else {
                    wrongOpts.push(adj.stem + 'くない');
                }
                var opts = [correct];
                wrongOpts = shuffle(wrongOpts);
                for (var i = 0; i < 3 && i < wrongOpts.length; i++) {
                    if (opts.indexOf(wrongOpts[i]) === -1) opts.push(wrongOpts[i]);
                }
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + adj.base + '</span> &rarr; <strong>' + label + '</strong>',
                    text: adj.meaning + ' (' + adj.type + '-adjective)',
                    options: opts,
                    answer: correct,
                    explain: '<span class="jp-medium">' + adj.base + ' → <strong>' + correct + '</strong></span> (' + label + ')'
                };
            }
        },

        // ── 8. Summary ──────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned how to conjugate both types of Japanese adjectives:</p>' +
                '<ul>' +
                '<li><strong>い-adjectives:</strong> change the final い → くない / かった / くなかった</li>' +
                '<li><strong>な-adjectives:</strong> add じゃない / だった / じゃなかった</li>' +
                '<li><strong>Exception:</strong> いい (good) → よくない / よかった / よくなかった</li>' +
                '</ul>' +
                '<p>Practice more adjective conjugation in the Grammar Activity!</p>',
            nextActivity: 'gram-activity'
        }
    ]
};
