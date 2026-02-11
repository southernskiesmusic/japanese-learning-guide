/* ================================================================
   LESSON: Verb Conjugation
   Master the essential verb forms — groups, masu, te, nai, ta,
   potential, volitional, and irregular verbs
   ================================================================ */
var LESSON_CONJUGATION_VERBS = {
    id: 'conjugation-verbs',
    title: 'Verb Conjugation',
    subtitle: 'Master the essential verb forms',
    folder: 'grammar-folder',
    screens: [

        // ── 1. Overview of 3 verb groups ─────────────────────────
        {
            type: 'concept',
            title: 'The Three Verb Groups',
            content: '<p>Japanese verbs are divided into <strong>three groups</strong> based on how they conjugate.</p>' +
                '<h4>Group 2 — Ichidan (ru-verbs)</h4>' +
                '<p>The easiest group. Dictionary form ends in <strong>-eru</strong> or <strong>-iru</strong>. To conjugate, simply drop る and add the ending.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">食べ<strong>る</strong></span> (taberu) — to eat &nbsp; | &nbsp; ' +
                '<span class="jp-medium">見<strong>る</strong></span> (miru) — to see &nbsp; | &nbsp; ' +
                '<span class="jp-medium">起き<strong>る</strong></span> (okiru) — to wake up</p></div>' +
                '<h4>Group 1 — Godan (u-verbs)</h4>' +
                '<p>The largest group. Dictionary form ends in an <strong>u-row</strong> kana: く, ぐ, す, つ, ぬ, ぶ, む, る, う. The final kana changes when conjugating.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">書<strong>く</strong></span> (kaku) — to write &nbsp; | &nbsp; ' +
                '<span class="jp-medium">飲<strong>む</strong></span> (nomu) — to drink &nbsp; | &nbsp; ' +
                '<span class="jp-medium">話<strong>す</strong></span> (hanasu) — to speak</p></div>' +
                '<h4>Group 3 — Irregular (only 2 verbs!)</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">する</span> — to do &nbsp; | &nbsp; ' +
                '<span class="jp-medium">くる</span> (来る) — to come</p></div>'
        },

        // ── 2. How to identify verb group ────────────────────────
        {
            type: 'concept',
            title: 'Identifying Verb Groups',
            content: '<p>Here is how to tell which group a verb belongs to:</p>' +
                '<h4>Step 1: Check for irregular verbs</h4>' +
                '<p>Is it <span class="jp-medium">する</span> or <span class="jp-medium">くる</span>? If yes → <strong>Group 3</strong>.</p>' +
                '<h4>Step 2: Does it end in -eru or -iru?</h4>' +
                '<p>If the last two sounds are -eru or -iru → likely <strong>Group 2</strong> (ichidan).</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">たべ<strong>る</strong></span> → ends in -eru → Group 2</p>' +
                '<p><span class="jp-medium">おき<strong>る</strong></span> → ends in -iru → Group 2</p></div>' +
                '<h4>Step 3: Everything else → Group 1</h4>' +
                '<p>Verbs ending in く, ぐ, す, つ, ぬ, ぶ, む, う are always Group 1.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">か<strong>く</strong></span> → ends in く → Group 1</p>' +
                '<p><span class="jp-medium">の<strong>む</strong></span> → ends in む → Group 1</p></div>' +
                '<p><strong>Watch out!</strong> Some verbs look like Group 2 but are actually Group 1:</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">帰<strong>る</strong></span> (kaeru — to return) → Group 1!</p>' +
                '<p><span class="jp-medium">走<strong>る</strong></span> (hashiru — to run) → Group 1!</p>' +
                '<p>These must be memorised as exceptions.</p></div>'
        },

        // ── 3. Example: Group 2 verb through all forms ───────────
        {
            type: 'example',
            title: 'Group 2 (Ichidan): たべる',
            problem: '<p>Let\'s conjugate <span class="jp-large">食べる</span> (taberu — to eat) through all its main forms.</p>' +
                '<p>Group 2 is the easiest: just <strong>drop る</strong> and add the ending.</p>',
            steps: [
                { text: '<strong>Masu form (polite):</strong> <span class="jp-medium">たべる → たべ<strong>ます</strong></span><br>Drop る, add ます. "I eat" (polite)' },
                { text: '<strong>Masen (polite negative):</strong> <span class="jp-medium">たべる → たべ<strong>ません</strong></span><br>Drop る, add ません. "I don\'t eat" (polite)' },
                { text: '<strong>Te-form:</strong> <span class="jp-medium">たべる → たべ<strong>て</strong></span><br>Drop る, add て. Used for requests and connecting sentences.' },
                { text: '<strong>Nai (negative):</strong> <span class="jp-medium">たべる → たべ<strong>ない</strong></span><br>Drop る, add ない. "I don\'t eat" (casual)' },
                { text: '<strong>Ta (past):</strong> <span class="jp-medium">たべる → たべ<strong>た</strong></span><br>Drop る, add た. "I ate"' },
                { text: '<strong>Potential:</strong> <span class="jp-medium">たべる → たべ<strong>られる</strong></span><br>Drop る, add られる. "I can eat"' },
                { text: '<strong>Volitional:</strong> <span class="jp-medium">たべる → たべ<strong>よう</strong></span><br>Drop る, add よう. "Let\'s eat"' }
            ]
        },

        // ── 4. Practice: type masu form of Group 2 verb ──────────
        {
            type: 'practice',
            instruction: 'Type the masu (polite) form of this Group 2 verb.',
            generate: function () {
                var group2 = CONJUGATION_DATA.verbs.filter(function (v) { return v.group === 2; });
                var v = pick(group2);
                return {
                    type: 'free',
                    prompt: '<span class="jp-large">' + v.kanji + '</span> (' + v.dictForm + ' — ' + v.meaning + ')',
                    text: 'Group 2 (ichidan): drop る, add ます',
                    answer: v.forms['masu'],
                    lang: 'ja',
                    placeholder: 'masu form...',
                    explain: '<span class="jp-medium">' + v.dictForm + ' → <strong>' + v.forms['masu'] + '</strong></span> (masu form)'
                };
            }
        },

        // ── 5. Group 1 (godan) conjugation rules ─────────────────
        {
            type: 'concept',
            title: 'Group 1 (Godan) — Stem Changes',
            content: '<p>Group 1 verbs are trickier because the <strong>final kana changes</strong> depending on the conjugation.</p>' +
                '<h4>Masu form: change to い-row + ます</h4>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Ending</th><th style="padding:6px;text-align:left;">い-row</th><th style="padding:6px;text-align:left;">Example</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">く</td><td style="padding:6px;">き</td><td style="padding:6px;"><span class="jp-medium">かく → かきます</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">む</td><td style="padding:6px;">み</td><td style="padding:6px;"><span class="jp-medium">のむ → のみます</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">す</td><td style="padding:6px;">し</td><td style="padding:6px;"><span class="jp-medium">はなす → はなします</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">つ</td><td style="padding:6px;">ち</td><td style="padding:6px;"><span class="jp-medium">まつ → まちます</span></td></tr>' +
                '<tr><td style="padding:6px;">う</td><td style="padding:6px;">い</td><td style="padding:6px;"><span class="jp-medium">かう → かいます</span></td></tr>' +
                '</table></div>' +
                '<h4>Nai form: change to あ-row + ない</h4>' +
                '<p>Exception: verbs ending in う → <strong>わない</strong> (not あない).</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">のむ → のま<strong>ない</strong></span> &nbsp; | &nbsp; ' +
                '<span class="jp-medium">かう → かわ<strong>ない</strong></span></p></div>' +
                '<h4>Te-form: special rules by ending</h4>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Ending</th><th style="padding:6px;text-align:left;">Te-form</th><th style="padding:6px;text-align:left;">Example</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">く</td><td style="padding:6px;">いて</td><td style="padding:6px;"><span class="jp-medium">かく → かいて</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">ぐ</td><td style="padding:6px;">いで</td><td style="padding:6px;"><span class="jp-medium">およぐ → およいで</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">す</td><td style="padding:6px;">して</td><td style="padding:6px;"><span class="jp-medium">はなす → はなして</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">む, ぶ, ぬ</td><td style="padding:6px;">んで</td><td style="padding:6px;"><span class="jp-medium">のむ → のんで</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">つ, る, う</td><td style="padding:6px;">って</td><td style="padding:6px;"><span class="jp-medium">まつ → まって</span></td></tr>' +
                '<tr><td style="padding:6px;">いく (exception)</td><td style="padding:6px;">いって</td><td style="padding:6px;"><span class="jp-medium">いく → いって</span></td></tr>' +
                '</table></div>'
        },

        // ── 6. Example: Group 1 verb のむ ────────────────────────
        {
            type: 'example',
            title: 'Group 1 (Godan): のむ',
            problem: '<p>Let\'s conjugate <span class="jp-large">飲む</span> (nomu — to drink) through the masu, te, and ta forms.</p>' +
                '<p>のむ ends in む, so it is a Group 1 verb.</p>',
            steps: [
                { text: '<strong>Masu form:</strong> <span class="jp-medium">のむ → の<strong>みます</strong></span><br>む → み (い-row) + ます' },
                { text: '<strong>Masen:</strong> <span class="jp-medium">のむ → の<strong>みません</strong></span><br>む → み (い-row) + ません' },
                { text: '<strong>Nai (negative):</strong> <span class="jp-medium">のむ → の<strong>まない</strong></span><br>む → ま (あ-row) + ない' },
                { text: '<strong>Te-form:</strong> <span class="jp-medium">のむ → <strong>のんで</strong></span><br>む/ぶ/ぬ verbs → んで (the む becomes ん + で)' },
                { text: '<strong>Ta (past):</strong> <span class="jp-medium">のむ → <strong>のんだ</strong></span><br>Same as te-form but with だ: のんだ. "I drank"' }
            ]
        },

        // ── 7. Practice: MC — pick correct te-form of godan verb ─
        {
            type: 'practice',
            instruction: 'Choose the correct te-form of this Group 1 (godan) verb.',
            generate: function () {
                var group1 = CONJUGATION_DATA.verbs.filter(function (v) { return v.group === 1; });
                var v = pick(group1);
                var correct = v.forms['te'];
                var others = group1.filter(function (o) { return o.dictForm !== v.dictForm; });
                var distractorPool = others.map(function (o) { return o.forms['te']; }).filter(function (f) { return f !== correct; });
                var opts = generateDistractors(correct, distractorPool, 4);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + v.kanji + '</span> (' + v.dictForm + ') → <strong>te-form</strong>',
                    text: v.meaning,
                    options: opts,
                    answer: correct,
                    explain: '<span class="jp-medium">' + v.dictForm + ' → <strong>' + correct + '</strong></span> (te-form)'
                };
            }
        },

        // ── 8. Irregular verbs する and くる ──────────────────────
        {
            type: 'concept',
            title: 'Irregular Verbs: する & くる',
            content: '<p>There are only two truly irregular verbs in Japanese. Their conjugation patterns must be memorised.</p>' +
                '<h4>する (to do)</h4>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Conjugation</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Masu</td><td style="padding:6px;"><span class="jp-medium"><strong>します</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Nai</td><td style="padding:6px;"><span class="jp-medium"><strong>しない</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Te-form</td><td style="padding:6px;"><span class="jp-medium"><strong>して</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Ta (past)</td><td style="padding:6px;"><span class="jp-medium"><strong>した</strong></span></td></tr>' +
                '<tr><td style="padding:6px;">Potential</td><td style="padding:6px;"><span class="jp-medium"><strong>できる</strong></span> (completely different!)</td></tr>' +
                '</table></div>' +
                '<h4>くる (来る — to come)</h4>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Form</th><th style="padding:6px;text-align:left;">Conjugation</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Masu</td><td style="padding:6px;"><span class="jp-medium"><strong>きます</strong></span> (く → き)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Nai</td><td style="padding:6px;"><span class="jp-medium"><strong>こない</strong></span> (く → こ)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Te-form</td><td style="padding:6px;"><span class="jp-medium"><strong>きて</strong></span> (く → き)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">Ta (past)</td><td style="padding:6px;"><span class="jp-medium"><strong>きた</strong></span> (く → き)</td></tr>' +
                '<tr><td style="padding:6px;">Potential</td><td style="padding:6px;"><span class="jp-medium"><strong>こられる</strong></span> (く → こ)</td></tr>' +
                '</table></div>' +
                '<p>Notice how くる alternates between <strong>き-</strong> and <strong>こ-</strong> stems. There is no shortcut — just memorise them!</p>'
        },

        // ── 9. Practice: type te-form of する or くる ─────────────
        {
            type: 'practice',
            instruction: 'Type the te-form of this irregular verb.',
            generate: function () {
                var irregulars = CONJUGATION_DATA.verbs.filter(function (v) { return v.group === 3; });
                var v = pick(irregulars);
                return {
                    type: 'free',
                    prompt: '<span class="jp-large">' + v.kanji + '</span> (' + v.dictForm + ' — ' + v.meaning + ')',
                    text: 'Group 3 (irregular) — te-form',
                    answer: v.forms['te'],
                    lang: 'ja',
                    placeholder: 'te-form...',
                    explain: '<span class="jp-medium">' + v.dictForm + ' → <strong>' + v.forms['te'] + '</strong></span> (te-form)'
                };
            }
        },

        // ── 10. Summary ──────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned the fundamentals of Japanese verb conjugation:</p>' +
                '<ul>' +
                '<li><strong>Three verb groups:</strong> Group 1 (godan / u-verbs), Group 2 (ichidan / ru-verbs), Group 3 (irregular)</li>' +
                '<li><strong>Group 2</strong> — the easiest: drop る, add the ending</li>' +
                '<li><strong>Group 1</strong> — the final kana changes row (い-row for masu, あ-row for nai, special rules for te)</li>' +
                '<li><strong>Group 3</strong> — する and くる must be memorised</li>' +
                '<li><strong>Key forms:</strong> masu (polite), nai (negative), te (requests/connecting), ta (past)</li>' +
                '</ul>' +
                '<p>Now practise verb conjugation in the Conjugation Activity!</p>',
            nextActivity: 'conj-activity'
        }
    ]
};
