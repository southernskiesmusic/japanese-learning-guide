/* ================================================================
   LESSON: Verb Forms
   Japanese verb conjugation — groups, masu, nai, te, ta
   ================================================================ */
var LESSON_VERB_FORMS = {
    id: 'verb-forms',
    title: 'Verb Forms',
    subtitle: 'Japanese verb conjugation',
    folder: 'grammar-folder',
    screens: [

        // ── 1. Verb groups ──────────────────────────────────────
        {
            type: 'concept',
            title: 'Japanese Verb Groups',
            html: '<p>Japanese verbs are divided into <strong>three groups</strong> based on how they conjugate:</p>' +
                '<h4>Group 1 — U-verbs (五段 / ごだん)</h4>' +
                '<p>The dictionary form ends in an <em>u-row</em> kana: く, ぐ, す, つ, ぬ, ぶ, む, る, う</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">書<strong>く</strong></span> (kaku) — to write &nbsp; | &nbsp; ' +
                '<span class="jp-medium">飲<strong>む</strong></span> (nomu) — to drink &nbsp; | &nbsp; ' +
                '<span class="jp-medium">話<strong>す</strong></span> (hanasu) — to speak</p>' +
                '</div>' +
                '<h4>Group 2 — Ru-verbs (一段 / いちだん)</h4>' +
                '<p>The dictionary form ends in <strong>-eru</strong> or <strong>-iru</strong>.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">食べ<strong>る</strong></span> (taberu) — to eat &nbsp; | &nbsp; ' +
                '<span class="jp-medium">見<strong>る</strong></span> (miru) — to see &nbsp; | &nbsp; ' +
                '<span class="jp-medium">起き<strong>る</strong></span> (okiru) — to wake up</p>' +
                '</div>' +
                '<h4>Group 3 — Irregular (2 verbs only!)</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">する</span> — to do &nbsp; | &nbsp; ' +
                '<span class="jp-medium">くる</span> (来る) — to come</p>' +
                '</div>'
        },

        // ── 2. Dictionary form vs masu form ─────────────────────
        {
            type: 'concept',
            title: 'Dictionary Form vs Masu Form',
            html: '<p>The <strong>dictionary form</strong> (辞書形) is the base form you find in the dictionary. It sounds casual.</p>' +
                '<p>The <strong>masu form</strong> (ます形) is the polite form used in everyday conversation.</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Dictionary</th><th style="padding:6px;text-align:left;">Masu form</th><th style="padding:6px;text-align:left;">Meaning</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">食べる</span></td><td style="padding:6px;"><span class="jp-medium">食べ<strong>ます</strong></span></td><td style="padding:6px;">to eat</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">飲む</span></td><td style="padding:6px;"><span class="jp-medium">飲み<strong>ます</strong></span></td><td style="padding:6px;">to drink</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">書く</span></td><td style="padding:6px;"><span class="jp-medium">書き<strong>ます</strong></span></td><td style="padding:6px;">to write</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">する</span></td><td style="padding:6px;"><span class="jp-medium"><strong>します</strong></span></td><td style="padding:6px;">to do</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;"><span class="jp-medium">くる</span></td><td style="padding:6px;"><span class="jp-medium"><strong>きます</strong></span></td><td style="padding:6px;">to come</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Rule for Group 2:</strong> Drop る, add ます.<br>' +
                '<strong>Rule for Group 1:</strong> Change the last kana to its い-row equivalent, add ます.</p>'
        },

        // ── 3. Group 2 conjugation (example) ────────────────────
        {
            type: 'example',
            title: 'Group 2 (Ru-verb) Conjugation',
            problem: '<p>Let\'s conjugate <span class="jp-large">食べる</span> (taberu — to eat) into all its main forms.</p>' +
                '<p>Group 2 verbs are the easiest: just drop る and add the ending.</p>',
            steps: [
                { text: '<strong>Masu form (polite):</strong> <span class="jp-medium">食べる → 食べ<strong>ます</strong></span><br>Drop る, add ます. "I eat" (polite)' },
                { text: '<strong>Negative (nai form):</strong> <span class="jp-medium">食べる → 食べ<strong>ない</strong></span><br>Drop る, add ない. "I don\'t eat"' },
                { text: '<strong>Te-form:</strong> <span class="jp-medium">食べる → 食べ<strong>て</strong></span><br>Drop る, add て. Used for requests, connecting sentences.' },
                { text: '<strong>Past (ta form):</strong> <span class="jp-medium">食べる → 食べ<strong>た</strong></span><br>Drop る, add た. "I ate"' }
            ]
        },

        // ── 4. Group 1 conjugation (example) ────────────────────
        {
            type: 'example',
            title: 'Group 1 (U-verb) Conjugation',
            problem: '<p>Let\'s conjugate <span class="jp-large">書く</span> (kaku — to write). Group 1 verbs change the final kana.</p>',
            steps: [
                { text: '<strong>Masu form:</strong> <span class="jp-medium">書く → 書<strong>きます</strong></span><br>く → き + ます (change to い-row)' },
                { text: '<strong>Negative:</strong> <span class="jp-medium">書く → 書<strong>かない</strong></span><br>く → か + ない (change to あ-row)' },
                { text: '<strong>Te-form:</strong> <span class="jp-medium">書く → 書<strong>いて</strong></span><br>く-verbs: く → いて (special te-form rule)' },
                { text: '<strong>Past:</strong> <span class="jp-medium">書く → 書<strong>いた</strong></span><br>く-verbs: く → いた (mirrors the te-form pattern)' }
            ]
        },

        // ── 5. Practice: conjugation MC ─────────────────────────
        {
            type: 'practice',
            intro: 'Choose the correct conjugation.',
            generate: function () {
                var verbs = GRAMMAR_N5.conjugations;
                var v = pick(verbs);
                var formKeys = ['masu', 'nai', 'te', 'ta'];
                var formNames = { masu: 'masu (polite)', nai: 'negative (nai)', te: 'te-form', ta: 'past (ta)' };
                var key = pick(formKeys);
                var correct = v.forms[key];
                var distractors = [];
                for (var i = 0; i < formKeys.length; i++) {
                    if (formKeys[i] !== key) distractors.push(v.forms[formKeys[i]]);
                }
                var others = verbs.filter(function (o) { return o.dictForm !== v.dictForm; });
                while (distractors.length < 3 && others.length > 0) {
                    var r = pick(others);
                    if (distractors.indexOf(r.forms[key]) === -1 && r.forms[key] !== correct) {
                        distractors.push(r.forms[key]);
                    }
                    others = others.filter(function (o) { return o.dictForm !== r.dictForm; });
                }
                var opts = [correct];
                distractors = shuffle(distractors);
                for (var j = 0; j < 3 && j < distractors.length; j++) opts.push(distractors[j]);
                opts = shuffle(opts);
                var groupName = v.group === 1 ? 'Group 1 (u-verb)' : v.group === 2 ? 'Group 2 (ru-verb)' : 'Group 3 (irregular)';
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + v.dictForm + '</span> &rarr; <strong>' + formNames[key] + '</strong> form',
                    text: v.meaning + ' &mdash; ' + groupName,
                    options: opts,
                    answer: correct,
                    explain: '<span class="jp-medium">' + v.dictForm + ' → <strong>' + correct + '</strong></span> (' + formNames[key] + ')'
                };
            }
        },

        // ── 6. Te-form and its uses ─────────────────────────────
        {
            type: 'concept',
            title: 'Te-form and Its Uses',
            html: '<p>The <strong>te-form</strong> (て形) is one of the most important verb forms in Japanese. It is used for:</p>' +
                '<h4>1. Polite requests</h4>' +
                '<div class="example-box"><span class="jp-medium">ここに名前を書い<strong>て</strong>ください。</span><br>Please write your name here.</div>' +
                '<h4>2. Progressive actions (~ている)</h4>' +
                '<div class="example-box"><span class="jp-medium">本を読ん<strong>で</strong>います。</span><br>I am reading a book.</div>' +
                '<h4>3. Connecting actions in sequence</h4>' +
                '<div class="example-box"><span class="jp-medium">朝起き<strong>て</strong>、ご飯を食べ<strong>て</strong>、学校に行きます。</span><br>I wake up, eat, and go to school.</div>' +
                '<p><strong>Te-form rules vary by verb group and ending.</strong> This is one of the trickiest parts of Japanese conjugation, so practice often!</p>'
        },

        // ── 7. Negative form (nai form) ─────────────────────────
        {
            type: 'concept',
            title: 'Negative Form — Nai Form',
            html: '<p>The <strong>nai form</strong> (ない形) expresses negation: "don\'t / doesn\'t do".</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Verb</th><th style="padding:6px;text-align:left;">Negative</th><th style="padding:6px;text-align:left;">Meaning</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">食べる</span></td><td style="padding:6px;"><span class="jp-medium">食べ<strong>ない</strong></span></td><td style="padding:6px;">don\'t eat</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">飲む</span></td><td style="padding:6px;"><span class="jp-medium">飲ま<strong>ない</strong></span></td><td style="padding:6px;">don\'t drink</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">する</span></td><td style="padding:6px;"><span class="jp-medium"><strong>しない</strong></span></td><td style="padding:6px;">don\'t do</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;"><span class="jp-medium">くる</span></td><td style="padding:6px;"><span class="jp-medium"><strong>こない</strong></span></td><td style="padding:6px;">don\'t come</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Group 2:</strong> Drop る, add ない.<br>' +
                '<strong>Group 1:</strong> Change last kana to its あ-row equivalent, add ない.<br>' +
                '<strong>Exception:</strong> Verbs ending in う → わない (e.g. 買う → 買わない).</p>'
        },

        // ── 8. Practice: another conjugation ────────────────────
        {
            type: 'practice',
            intro: 'What is the correct form of this verb?',
            generate: function () {
                var verbs = GRAMMAR_N5.conjugations;
                var v = pick(verbs);
                var formKeys = ['masu', 'nai', 'te', 'ta'];
                var formNames = { masu: 'masu (polite)', nai: 'negative (nai)', te: 'te-form', ta: 'past (ta)' };
                var key = pick(formKeys);
                var correct = v.forms[key];
                var distractors = [];
                for (var i = 0; i < formKeys.length; i++) {
                    if (formKeys[i] !== key && v.forms[formKeys[i]] !== correct) {
                        distractors.push(v.forms[formKeys[i]]);
                    }
                }
                var others = verbs.filter(function (o) { return o.dictForm !== v.dictForm; });
                var shuffledOthers = shuffle(others);
                for (var k = 0; k < shuffledOthers.length && distractors.length < 3; k++) {
                    var cand = shuffledOthers[k].forms[key];
                    if (distractors.indexOf(cand) === -1 && cand !== correct) {
                        distractors.push(cand);
                    }
                }
                var opts = [correct];
                distractors = shuffle(distractors);
                for (var j = 0; j < 3 && j < distractors.length; j++) opts.push(distractors[j]);
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + v.dictForm + '</span> &rarr; <strong>' + formNames[key] + '</strong>',
                    text: v.meaning,
                    options: opts,
                    answer: correct,
                    explain: '<span class="jp-medium">' + v.dictForm + ' → <strong>' + correct + '</strong></span> (' + formNames[key] + ')'
                };
            }
        },

        // ── 9. Past tense (ta form) ─────────────────────────────
        {
            type: 'concept',
            title: 'Past Tense — Ta Form',
            html: '<p>The <strong>ta form</strong> (た形) expresses the past tense: "did / has done".</p>' +
                '<p>Good news: the ta form follows the <strong>same pattern as the te-form</strong>, but with た/だ instead of て/で.</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:left;">Verb</th><th style="padding:6px;text-align:left;">Te-form</th><th style="padding:6px;text-align:left;">Ta-form</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">食べる</span></td><td style="padding:6px;"><span class="jp-medium">食べ<strong>て</strong></span></td><td style="padding:6px;"><span class="jp-medium">食べ<strong>た</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">飲む</span></td><td style="padding:6px;"><span class="jp-medium">飲ん<strong>で</strong></span></td><td style="padding:6px;"><span class="jp-medium">飲ん<strong>だ</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">書く</span></td><td style="padding:6px;"><span class="jp-medium">書い<strong>て</strong></span></td><td style="padding:6px;"><span class="jp-medium">書い<strong>た</strong></span></td></tr>' +
                '<tr>' +
                '<td style="padding:6px;"><span class="jp-medium">する</span></td><td style="padding:6px;"><span class="jp-medium">し<strong>て</strong></span></td><td style="padding:6px;"><span class="jp-medium">し<strong>た</strong></span></td></tr>' +
                '</table>' +
                '</div>' +
                '<p>Notice the pattern: て → た and で → だ. Once you know the te-form, you know the ta-form!</p>'
        },

        // ── 10. Summary ─────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned the fundamentals of Japanese verb conjugation:</p>' +
                '<ul>' +
                '<li><strong>Three verb groups:</strong> Group 1 (u-verbs), Group 2 (ru-verbs), Group 3 (irregular)</li>' +
                '<li><strong>Masu form</strong> — polite speech</li>' +
                '<li><strong>Nai form</strong> — negative ("don\'t do")</li>' +
                '<li><strong>Te-form</strong> — requests, progressive, connecting</li>' +
                '<li><strong>Ta-form</strong> — past tense ("did")</li>' +
                '</ul>' +
                '<p>Now test your conjugation skills with the Grammar Activity!</p>',
            nextActivity: 'gram-activity'
        }
    ]
};
