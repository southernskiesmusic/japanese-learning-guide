/* ================================================================
   LESSON: Adjective Conjugation
   i-adjectives and na-adjectives — negative, past, te, adverb forms
   ================================================================ */
var LESSON_CONJUGATION_ADJECTIVES = {
    id: 'conjugation-adjectives',
    title: 'Adjective Conjugation',
    subtitle: 'i-adjectives and na-adjectives',
    folder: 'grammar-folder',
    screens: [

        // ── 1. Two types of adjectives ───────────────────────────
        {
            type: 'concept',
            title: 'Two Types of Japanese Adjectives',
            content: '<p>Japanese has two types of adjectives that conjugate in completely different ways:</p>' +
                '<h4>い-adjectives (i-adjectives)</h4>' +
                '<p>These always end in <strong>い</strong> in their dictionary form. They conjugate by <em>changing the ending</em>.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">大き<strong>い</strong></span> (ookii) — big &nbsp; | &nbsp; ' +
                '<span class="jp-medium">高<strong>い</strong></span> (takai) — expensive &nbsp; | &nbsp; ' +
                '<span class="jp-medium">美味し<strong>い</strong></span> (oishii) — delicious</p></div>' +
                '<h4>な-adjectives (na-adjectives)</h4>' +
                '<p>These do <em>not</em> follow the い-adjective rules. They need <strong>な</strong> when placed before a noun, and they conjugate using <strong>だ/じゃない/だった</strong>.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">静か<strong>な</strong></span> (shizuka) — quiet &nbsp; | &nbsp; ' +
                '<span class="jp-medium">元気<strong>な</strong></span> (genki) — energetic &nbsp; | &nbsp; ' +
                '<span class="jp-medium">きれい<strong>な</strong></span> — beautiful</p></div>' +
                '<p><strong>Tricky na-adjectives:</strong> <span class="jp-medium">きれい</span> and <span class="jp-medium">嫌い</span> (kirai) end in い but are na-adjectives! You must memorise these exceptions.</p>'
        },

        // ── 2. i-adjective conjugation rules ─────────────────────
        {
            type: 'concept',
            title: 'い-Adjective Conjugation Rules',
            content: '<p>To conjugate an い-adjective, <strong>drop the final い</strong> and add the appropriate ending:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Rule</th><th style="padding:6px;text-align:left;">Example (たかい)</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Dictionary (+)</td><td style="padding:6px;">As-is</td><td style="padding:6px;"><span class="jp-medium">たか<strong>い</strong></span> — is expensive</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Negative</td><td style="padding:6px;">い → <strong>くない</strong></td><td style="padding:6px;"><span class="jp-medium">たか<strong>くない</strong></span> — is not expensive</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past</td><td style="padding:6px;">い → <strong>かった</strong></td><td style="padding:6px;"><span class="jp-medium">たか<strong>かった</strong></span> — was expensive</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past negative</td><td style="padding:6px;">い → <strong>くなかった</strong></td><td style="padding:6px;"><span class="jp-medium">たか<strong>くなかった</strong></span> — was not expensive</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Te-form</td><td style="padding:6px;">い → <strong>くて</strong></td><td style="padding:6px;"><span class="jp-medium">たか<strong>くて</strong></span> — is expensive and...</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;">Adverb</td><td style="padding:6px;">い → <strong>く</strong></td><td style="padding:6px;"><span class="jp-medium">たか<strong>く</strong></span> — expensively</td></tr>' +
                '</table></div>' +
                '<p>The pattern is consistent: drop い and add the suffix. Simple!</p>'
        },

        // ── 3. Example: conjugate おおきい ────────────────────────
        {
            type: 'example',
            title: 'Conjugate: おおきい (big)',
            problem: '<p>Let\'s conjugate <span class="jp-large">大きい</span> (ookii — big) through all its forms.</p>' +
                '<p>This is a regular い-adjective: drop the final い and add the ending.</p>',
            steps: [
                { text: '<strong>Dictionary form:</strong> <span class="jp-medium">おおき<strong>い</strong></span><br>"is big"' },
                { text: '<strong>Negative:</strong> <span class="jp-medium">おおき<strong>くない</strong></span><br>Drop い, add くない. "is not big"' },
                { text: '<strong>Past:</strong> <span class="jp-medium">おおき<strong>かった</strong></span><br>Drop い, add かった. "was big"' },
                { text: '<strong>Past negative:</strong> <span class="jp-medium">おおき<strong>くなかった</strong></span><br>Drop い, add くなかった. "was not big"' },
                { text: '<strong>Te-form:</strong> <span class="jp-medium">おおき<strong>くて</strong></span><br>Drop い, add くて. "is big and..." (connecting)' },
                { text: '<strong>Adverb:</strong> <span class="jp-medium">おおき<strong>く</strong></span><br>Drop い, add く. "big-ly" (modifies verbs)' }
            ]
        },

        // ── 4. Practice: type negative of i-adjective ────────────
        {
            type: 'practice',
            instruction: 'Type the negative form of this い-adjective.',
            generate: function () {
                // Exclude irregular いい so students practise regular pattern
                var iAdjs = CONJUGATION_DATA.adjectives.filter(function (a) { return a.type === 'i' && !a.irregular; });
                var adj = pick(iAdjs);
                return {
                    type: 'free',
                    prompt: '<span class="jp-large">' + adj.kanji + '</span> (' + adj.dictForm + ' — ' + adj.meaning + ')',
                    text: 'い-adjective → negative: drop い, add くない',
                    answer: adj.forms['negative'],
                    lang: 'ja',
                    placeholder: 'negative form...',
                    explain: '<span class="jp-medium">' + adj.dictForm + ' → <strong>' + adj.forms['negative'] + '</strong></span> (negative)'
                };
            }
        },

        // ── 5. The irregular adjective いい/よい ──────────────────
        {
            type: 'concept',
            title: 'The Irregular Adjective: いい (good)',
            content: '<p><span class="jp-large">いい</span> (good) is the <strong>only irregular い-adjective</strong>. Its conjugated forms use the stem <strong>よ-</strong> instead of い-.</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Regular (たかい)</th><th style="padding:6px;text-align:left;">Irregular (いい)</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Dictionary</td><td style="padding:6px;"><span class="jp-medium">たかい</span></td><td style="padding:6px;"><span class="jp-medium"><strong>いい</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Negative</td><td style="padding:6px;"><span class="jp-medium">たかくない</span></td><td style="padding:6px;"><span class="jp-medium"><strong>よくない</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past</td><td style="padding:6px;"><span class="jp-medium">たかかった</span></td><td style="padding:6px;"><span class="jp-medium"><strong>よかった</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past negative</td><td style="padding:6px;"><span class="jp-medium">たかくなかった</span></td><td style="padding:6px;"><span class="jp-medium"><strong>よくなかった</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Te-form</td><td style="padding:6px;"><span class="jp-medium">たかくて</span></td><td style="padding:6px;"><span class="jp-medium"><strong>よくて</strong></span></td></tr>' +
                '<tr>' +
                '<td style="padding:6px;">Adverb</td><td style="padding:6px;"><span class="jp-medium">たかく</span></td><td style="padding:6px;"><span class="jp-medium"><strong>よく</strong></span></td></tr>' +
                '</table></div>' +
                '<p>The dictionary form is いい, but <em>every other form</em> uses よ- as the stem. This is the most common mistake for beginners!</p>' +
                '<p>The original form is <span class="jp-medium">よい</span>, which still exists in formal writing. That is why the conjugations use よ-.</p>'
        },

        // ── 6. na-adjective conjugation rules ────────────────────
        {
            type: 'concept',
            title: 'な-Adjective Conjugation Rules',
            content: '<p>な-adjectives conjugate by adding <strong>suffixes after the word</strong> (they don\'t change the word itself):</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Rule</th><th style="padding:6px;text-align:left;">Example (しずか)</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Present (casual)</td><td style="padding:6px;">+ だ</td><td style="padding:6px;"><span class="jp-medium">しずか<strong>だ</strong></span> — is quiet</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Negative</td><td style="padding:6px;">+ <strong>じゃない</strong></td><td style="padding:6px;"><span class="jp-medium">しずか<strong>じゃない</strong></span> — is not quiet</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past</td><td style="padding:6px;">+ <strong>だった</strong></td><td style="padding:6px;"><span class="jp-medium">しずか<strong>だった</strong></span> — was quiet</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Past negative</td><td style="padding:6px;">+ <strong>じゃなかった</strong></td><td style="padding:6px;"><span class="jp-medium">しずか<strong>じゃなかった</strong></span> — was not quiet</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">Te-form</td><td style="padding:6px;">+ <strong>で</strong></td><td style="padding:6px;"><span class="jp-medium">しずか<strong>で</strong></span> — is quiet and...</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;">Adverb</td><td style="padding:6px;">+ <strong>に</strong></td><td style="padding:6px;"><span class="jp-medium">しずか<strong>に</strong></span> — quietly</td></tr>' +
                '</table></div>' +
                '<p>In polite speech, use です instead of だ: <span class="jp-medium">しずかです</span>, <span class="jp-medium">しずかじゃないです</span>, <span class="jp-medium">しずかでした</span>.</p>' +
                '<p><strong>Before nouns:</strong> add な → <span class="jp-medium">しずか<strong>な</strong>まち</span> (a quiet town).</p>'
        },

        // ── 7. Example: conjugate きれい ──────────────────────────
        {
            type: 'example',
            title: 'Conjugate: きれい (beautiful)',
            problem: '<p>Let\'s conjugate the な-adjective <span class="jp-large">きれい</span> (beautiful / clean) through all forms.</p>' +
                '<p>Remember: きれい ends in い but it is a <strong>na-adjective</strong>, not an i-adjective!</p>',
            steps: [
                { text: '<strong>Present (casual):</strong> <span class="jp-medium">きれい<strong>だ</strong></span> / <span class="jp-medium">きれい<strong>です</strong></span> (polite)<br>"is beautiful"' },
                { text: '<strong>Negative:</strong> <span class="jp-medium">きれい<strong>じゃない</strong></span><br>Add じゃない after the word. "is not beautiful"' },
                { text: '<strong>Past:</strong> <span class="jp-medium">きれい<strong>だった</strong></span><br>Add だった. "was beautiful"' },
                { text: '<strong>Past negative:</strong> <span class="jp-medium">きれい<strong>じゃなかった</strong></span><br>Add じゃなかった. "was not beautiful"' },
                { text: '<strong>Te-form:</strong> <span class="jp-medium">きれい<strong>で</strong></span><br>Add で. "is beautiful and..." (connecting)' },
                { text: '<strong>Adverb:</strong> <span class="jp-medium">きれい<strong>に</strong></span><br>Add に. "beautifully" (modifies verbs: きれいにかく = to write beautifully)' }
            ]
        },

        // ── 8. Practice: MC — pick correct past form of na-adj ───
        {
            type: 'practice',
            instruction: 'Choose the correct past form of this な-adjective.',
            generate: function () {
                var naAdjs = CONJUGATION_DATA.adjectives.filter(function (a) { return a.type === 'na'; });
                var adj = pick(naAdjs);
                var correct = adj.forms['past'];
                var others = naAdjs.filter(function (a) { return a.dictForm !== adj.dictForm; });
                var distractorPool = others.map(function (a) { return a.forms['past']; }).filter(function (f) { return f !== correct; });
                // Add a cross-type distractor (i-adj pattern applied to na-adj)
                distractorPool.push(adj.dictForm + 'かった');
                var opts = generateDistractors(correct, distractorPool, 4);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + adj.kanji + '</span> (' + adj.dictForm + ') → <strong>past form</strong>',
                    text: adj.meaning + ' (na-adjective)',
                    options: opts,
                    answer: correct,
                    explain: '<span class="jp-medium">' + adj.dictForm + ' → <strong>' + correct + '</strong></span> (past form — na-adjective: add だった)'
                };
            }
        },

        // ── 9. Practice: type adverb form ────────────────────────
        {
            type: 'practice',
            instruction: 'Type the adverb form of this adjective.',
            generate: function () {
                var adj = pick(CONJUGATION_DATA.adjectives);
                var typeLabel = adj.type === 'i' ? 'i-adjective: い → く' : 'na-adjective: add に';
                return {
                    type: 'free',
                    prompt: '<span class="jp-large">' + adj.kanji + '</span> (' + adj.dictForm + ' — ' + adj.meaning + ')',
                    text: typeLabel,
                    answer: adj.forms['adverb'],
                    lang: 'ja',
                    placeholder: 'adverb form...',
                    explain: '<span class="jp-medium">' + adj.dictForm + ' → <strong>' + adj.forms['adverb'] + '</strong></span> (adverb form)'
                };
            }
        },

        // ── 10. Summary ──────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned how to conjugate both types of Japanese adjectives:</p>' +
                '<ul>' +
                '<li><strong>い-adjectives:</strong> drop final い, add くない / かった / くなかった / くて / く</li>' +
                '<li><strong>な-adjectives:</strong> add じゃない / だった / じゃなかった / で / に</li>' +
                '<li><strong>Exception:</strong> いい (good) → よくない / よかった / よくなかった / よくて / よく</li>' +
                '<li><strong>Watch out:</strong> きれい and きらい look like い-adjectives but are な-adjectives!</li>' +
                '</ul>' +
                '<p>Now practise adjective conjugation in the Conjugation Trainer!</p>',
            nextActivity: 'conj-trainer'
        }
    ]
};
