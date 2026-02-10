/* ================================================================
   LESSON: Family Vocabulary
   Japanese family terms — uchi (humble) vs soto (polite)
   ================================================================ */
var LESSON_FAMILY_VOCAB = {
    id: 'family-vocab',
    title: 'Family Vocabulary',
    subtitle: 'Learn Japanese family terms and the uchi/soto distinction',
    folder: 'vocab-folder',
    screens: [

        // ── 1. Uchi vs Soto ──────────────────────────────────────
        {
            type: 'concept',
            title: 'Uchi vs Soto — Two Sets of Words',
            html: '<p>In Japanese, there are <strong>two sets</strong> of family vocabulary:</p>' +
                '<ul>' +
                '<li><strong>Humble forms (uchi / 内)</strong> — used when talking about <em>your own</em> family to others.</li>' +
                '<li><strong>Polite forms (soto / 外)</strong> — used when referring to <em>someone else\'s</em> family.</li>' +
                '</ul>' +
                '<p>This reflects the deeply embedded concept of <strong>social hierarchy</strong> in Japanese culture — you lower your own family and elevate others\'.</p>' +
                '<div class="example-box">' +
                '<p>My mother: <span class="jp-medium">はは</span> (haha) — humble</p>' +
                '<p>Your mother: <span class="jp-medium">おかあさん</span> (okāsan) — polite</p>' +
                '</div>'
        },

        // ── 2. Your family — humble forms ─────────────────────────
        {
            type: 'concept',
            title: 'Your Family (Humble Forms)',
            html: '<p>Use these when talking about <strong>your own</strong> family members:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;text-align:left;">Relation</th><th style="padding:8px;text-align:left;">Japanese</th><th style="padding:8px;text-align:left;">Romaji</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Father</td><td style="padding:8px;"><span class="jp">ちち</span></td><td style="padding:8px;">chichi</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Mother</td><td style="padding:8px;"><span class="jp">はは</span></td><td style="padding:8px;">haha</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Older brother</td><td style="padding:8px;"><span class="jp">あに</span></td><td style="padding:8px;">ani</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Older sister</td><td style="padding:8px;"><span class="jp">あね</span></td><td style="padding:8px;">ane</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Younger brother</td><td style="padding:8px;"><span class="jp">おとうと</span></td><td style="padding:8px;">otōto</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;">Younger sister</td><td style="padding:8px;"><span class="jp">いもうと</span></td><td style="padding:8px;">imōto</td></tr>' +
                '</table>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">ちちは教師です。</span><br>My father is a teacher.</p>' +
                '</div>'
        },

        // ── 3. Someone else's family — polite forms ───────────────
        {
            type: 'concept',
            title: 'Someone Else\'s Family (Polite Forms)',
            html: '<p>Use these when referring to <strong>someone else\'s</strong> family members:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;text-align:left;">Relation</th><th style="padding:8px;text-align:left;">Japanese</th><th style="padding:8px;text-align:left;">Romaji</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Father</td><td style="padding:8px;"><span class="jp">おとうさん</span></td><td style="padding:8px;">otōsan</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Mother</td><td style="padding:8px;"><span class="jp">おかあさん</span></td><td style="padding:8px;">okāsan</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Older brother</td><td style="padding:8px;"><span class="jp">おにいさん</span></td><td style="padding:8px;">onīsan</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Older sister</td><td style="padding:8px;"><span class="jp">おねえさん</span></td><td style="padding:8px;">onēsan</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;">Younger brother</td><td style="padding:8px;"><span class="jp">おとうとさん</span></td><td style="padding:8px;">otōto-san</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;">Younger sister</td><td style="padding:8px;"><span class="jp">いもうとさん</span></td><td style="padding:8px;">imōto-san</td></tr>' +
                '</table>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">おかあさんはお元気ですか。</span><br>Is your mother well?</p>' +
                '</div>'
        },

        // ── 4. Side-by-side comparison (example) ──────────────────
        {
            type: 'example',
            title: 'Humble vs Polite Comparison',
            problem: '<p>Notice how each relation has two forms — humble (your family) and polite (someone else\'s):</p>',
            steps: [
                { text: 'Father: <span class="jp-medium">ちち</span> (mine) vs <span class="jp-medium">おとうさん</span> (yours)' },
                { text: 'Mother: <span class="jp-medium">はは</span> (mine) vs <span class="jp-medium">おかあさん</span> (yours)' },
                { text: 'Older brother: <span class="jp-medium">あに</span> (mine) vs <span class="jp-medium">おにいさん</span> (yours)' },
                { text: 'Older sister: <span class="jp-medium">あね</span> (mine) vs <span class="jp-medium">おねえさん</span> (yours)' },
                { text: '<strong>Tip:</strong> The polite forms are longer and usually start with お or end with さん!' }
            ]
        },

        // ── 5. Practice: match meaning ────────────────────────────
        {
            type: 'practice',
            intro: 'What does this family word mean?',
            generate: function () {
                var pool = [
                    { jp: 'ちち', en: 'my father' },
                    { jp: 'はは', en: 'my mother' },
                    { jp: 'あに', en: 'my older brother' },
                    { jp: 'あね', en: 'my older sister' },
                    { jp: 'おとうと', en: 'my younger brother' },
                    { jp: 'いもうと', en: 'my younger sister' },
                    { jp: 'おとうさん', en: 'someone\'s father' },
                    { jp: 'おかあさん', en: 'someone\'s mother' },
                    { jp: 'おにいさん', en: 'someone\'s older brother' },
                    { jp: 'おねえさん', en: 'someone\'s older sister' }
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

        // ── 6. Practice: uchi or soto? ────────────────────────────
        {
            type: 'practice',
            intro: 'Is this a humble (your family) or polite (someone else\'s) form?',
            generate: function () {
                var pool = [
                    { jp: 'ちち', form: 'Humble (your family)' },
                    { jp: 'はは', form: 'Humble (your family)' },
                    { jp: 'あに', form: 'Humble (your family)' },
                    { jp: 'あね', form: 'Humble (your family)' },
                    { jp: 'おとうと', form: 'Humble (your family)' },
                    { jp: 'いもうと', form: 'Humble (your family)' },
                    { jp: 'おとうさん', form: 'Polite (someone else\'s)' },
                    { jp: 'おかあさん', form: 'Polite (someone else\'s)' },
                    { jp: 'おにいさん', form: 'Polite (someone else\'s)' },
                    { jp: 'おねえさん', form: 'Polite (someone else\'s)' },
                    { jp: 'おとうとさん', form: 'Polite (someone else\'s)' },
                    { jp: 'いもうとさん', form: 'Polite (someone else\'s)' }
                ];
                var q = pick(pool);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + q.jp + '</span>',
                    text: 'Is this humble or polite?',
                    options: ['Humble (your family)', 'Polite (someone else\'s)'],
                    answer: q.form,
                    explain: '<span class="jp-large">' + q.jp + '</span> is a <strong>' + q.form.toLowerCase() + '</strong> form.'
                };
            }
        },

        // ── 7. Summary ───────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You now know the Japanese family vocabulary:</p>' +
                '<ul>' +
                '<li><strong>Humble forms</strong> (ちち, はは, あに, あね, おとうと, いもうと) — for your own family</li>' +
                '<li><strong>Polite forms</strong> (おとうさん, おかあさん, おにいさん, おねえさん) — for someone else\'s family</li>' +
                '</ul>' +
                '<p>Remember: humble forms are shorter, polite forms usually have お or さん. Practice with the Vocabulary Trainer!</p>',
            nextActivity: 'vocab-trainer'
        }
    ]
};
