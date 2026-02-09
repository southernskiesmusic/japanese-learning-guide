/* ================================================================
   LESSON: Sentence Structure
   Building Japanese sentences — SOV, topic-comment, questions
   ================================================================ */
var LESSON_SENTENCE_STRUCTURE = {
    id: 'sentence-structure',
    title: 'Sentence Structure',
    subtitle: 'Building Japanese sentences',
    folder: 'grammar-folder',
    screens: [

        // ── 1. SOV word order ───────────────────────────────────
        {
            type: 'concept',
            title: 'SOV Word Order',
            html: '<p>English uses <strong>SVO</strong> order: Subject &rarr; Verb &rarr; Object.</p>' +
                '<p>Japanese uses <strong>SOV</strong> order: Subject &rarr; Object &rarr; <strong>Verb</strong>.</p>' +
                '<p>The verb <em>always</em> comes at the <strong>end</strong> of the sentence.</p>' +
                '<div class="example-box">' +
                '<p><strong>English (SVO):</strong> I <em>read</em> a book.</p>' +
                '<p><strong>Japanese (SOV):</strong></p>' +
                '<p><span class="jp-large">私は 本を <strong>読みます</strong>。</span></p>' +
                '<p>watashi wa &nbsp; hon o &nbsp; <strong>yomimasu</strong></p>' +
                '<p>I (topic) &nbsp; book (object) &nbsp; <strong>read</strong></p>' +
                '</div>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">田中さんは 寿司を <strong>食べます</strong>。</span></p>' +
                '<p>Tanaka (topic) &nbsp; sushi (object) &nbsp; <strong>eats</strong></p>' +
                '</div>' +
                '<p><strong>Key rule:</strong> The verb is always last. Everything else can be rearranged, as long as the particles mark each word\'s role.</p>'
        },

        // ── 2. Topic-comment structure ──────────────────────────
        {
            type: 'concept',
            title: 'Topic-Comment Structure',
            html: '<p>Japanese sentences follow a <strong>topic-comment</strong> pattern:</p>' +
                '<p><span class="jp-large">X<span style="color:var(--accent)">は</span> Y です。</span></p>' +
                '<p>"As for X, Y."</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">私<strong>は</strong> 学生です。</span><br>As for me, (I am) a student.</p>' +
                '<p><span class="jp-medium">東京<strong>は</strong> 大きいです。</span><br>As for Tokyo, (it is) big.</p>' +
                '<p><span class="jp-medium">明日<strong>は</strong> 日曜日です。</span><br>As for tomorrow, (it is) Sunday.</p>' +
                '</div>' +
                '<p>The topic does not have to be the subject! It is simply what the sentence is <em>about</em>.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">魚<strong>は</strong> 田中さんが食べました。</span></p>' +
                '<p>"As for <em>the fish</em>, Tanaka ate it." (Topic = fish, subject = Tanaka)</p>' +
                '</div>'
        },

        // ── 3. Example: build a sentence ────────────────────────
        {
            type: 'example',
            title: 'Building a Sentence',
            problem: '<p>Let\'s build the sentence: <strong>"I eat sushi at the restaurant."</strong></p>' +
                '<p>We need: I (topic) + restaurant (location) + sushi (object) + eat (verb)</p>',
            steps: [
                { text: '<strong>Step 1 — Topic:</strong> <span class="jp-medium">私<strong>は</strong></span><br>watashi wa — "As for me..." (often omitted in context)' },
                { text: '<strong>Step 2 — Location (で):</strong> <span class="jp-medium">レストラン<strong>で</strong></span><br>resutoran de — "at the restaurant"' },
                { text: '<strong>Step 3 — Object (を):</strong> <span class="jp-medium">寿司<strong>を</strong></span><br>sushi o — "sushi (object)"' },
                { text: '<strong>Step 4 — Verb (last):</strong> <span class="jp-medium"><strong>食べます</strong>。</span><br>tabemasu — "eat"' },
                { text: '<strong>Full sentence:</strong> <span class="jp-medium">（私は）レストランで寿司を食べます。</span><br>(I) eat sushi at the restaurant.' }
            ]
        },

        // ── 4. Practice: sentence translation MC ────────────────
        {
            type: 'practice',
            intro: 'Choose the correct Japanese translation.',
            generate: function () {
                var items = [
                    {
                        en: 'I drink coffee at the cafe.',
                        jp: 'カフェでコーヒーを飲みます。',
                        wrong: ['コーヒーでカフェを飲みます。', 'カフェにコーヒーが飲みます。', 'コーヒーをカフェに飲みます。']
                    },
                    {
                        en: 'I study Japanese at school.',
                        jp: '学校で日本語を勉強します。',
                        wrong: ['日本語で学校を勉強します。', '学校に日本語が勉強します。', '日本語を学校が勉強します。']
                    },
                    {
                        en: 'My friend reads a book at the library.',
                        jp: '友達は図書館で本を読みます。',
                        wrong: ['図書館は友達で本を読みます。', '友達を図書館に本が読みます。', '本は友達に図書館を読みます。']
                    },
                    {
                        en: 'I go to school by bus.',
                        jp: 'バスで学校に行きます。',
                        wrong: ['学校でバスに行きます。', 'バスに学校で行きます。', '学校がバスを行きます。']
                    },
                    {
                        en: 'I watch a movie with friends.',
                        jp: '友達と映画を見ます。',
                        wrong: ['映画と友達を見ます。', '友達が映画に見ます。', '映画で友達と見ます。']
                    },
                    {
                        en: 'I write a letter at home.',
                        jp: '家で手紙を書きます。',
                        wrong: ['手紙で家を書きます。', '家に手紙が書きます。', '手紙を家が書きます。']
                    }
                ];
                var item = pick(items);
                var opts = shuffle([item.jp].concat(item.wrong.slice(0, 3)));
                return {
                    type: 'mc',
                    prompt: '<strong>' + item.en + '</strong>',
                    text: 'Select the correct Japanese sentence.',
                    options: opts,
                    answer: item.jp,
                    explain: '<span class="jp-medium"><strong>' + item.jp + '</strong></span><br>' + item.en
                };
            }
        },

        // ── 5. Questions ────────────────────────────────────────
        {
            type: 'concept',
            title: 'Asking Questions',
            html: '<p>In Japanese, you turn a statement into a question simply by adding <span class="jp-large">か</span> at the end.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">学生です。</span> → <span class="jp-medium">学生です<strong>か</strong>。</span></p>' +
                '<p>"(You) are a student." → "Are (you) a student?"</p>' +
                '</div>' +
                '<h4>Question Words</h4>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">何（なに / なん）</span></td><td style="padding:6px;">what</td>' +
                '<td style="padding:6px;"><span class="jp-medium">これは<strong>何</strong>ですか。</span> What is this?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">どこ</span></td><td style="padding:6px;">where</td>' +
                '<td style="padding:6px;"><span class="jp-medium">トイレは<strong>どこ</strong>ですか。</span> Where is the toilet?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">いつ</span></td><td style="padding:6px;">when</td>' +
                '<td style="padding:6px;"><span class="jp-medium"><strong>いつ</strong>行きますか。</span> When will you go?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">だれ</span></td><td style="padding:6px;">who</td>' +
                '<td style="padding:6px;"><span class="jp-medium"><strong>だれ</strong>が来ましたか。</span> Who came?</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;"><span class="jp-medium">どう / いかが</span></td><td style="padding:6px;">how</td>' +
                '<td style="padding:6px;"><span class="jp-medium">日本語は<strong>どう</strong>ですか。</span> How is Japanese?</td></tr>' +
                '</table>' +
                '</div>'
        },

        // ── 6. Connecting sentences ─────────────────────────────
        {
            type: 'concept',
            title: 'Connecting Sentences',
            html: '<p>You can join clauses together using several patterns:</p>' +
                '<h4>1. て-form — "and then"</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">朝起き<strong>て</strong>、ご飯を食べます。</span></p>' +
                '<p>I wake up <strong>and then</strong> eat breakfast.</p>' +
                '</div>' +
                '<h4>2. から — "because"</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">暑い<strong>から</strong>窓を開けます。</span></p>' +
                '<p><strong>Because</strong> it\'s hot, I open the window.</p>' +
                '</div>' +
                '<h4>3. が / けど — "but"</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">日本語は難しいです<strong>が</strong>、楽しいです。</span></p>' +
                '<p>Japanese is difficult, <strong>but</strong> it\'s fun.</p>' +
                '</div>' +
                '<h4>4. し — "and also" (listing reasons)</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">安い<strong>し</strong>、美味しい<strong>し</strong>、最高です。</span></p>' +
                '<p>It\'s cheap, <strong>and</strong> delicious, <strong>so</strong> it\'s the best.</p>' +
                '</div>'
        },

        // ── 7. Practice: translation MC ─────────────────────────
        {
            type: 'practice',
            intro: 'What does this Japanese sentence mean?',
            generate: function () {
                var items = [
                    {
                        jp: '明日は何をしますか。',
                        en: 'What will you do tomorrow?',
                        wrong: ['When will you do it?', 'Who is going tomorrow?', 'Where will you go tomorrow?']
                    },
                    {
                        jp: 'どこで日本語を勉強しますか。',
                        en: 'Where do you study Japanese?',
                        wrong: ['When do you study Japanese?', 'Why do you study Japanese?', 'Who studies Japanese?']
                    },
                    {
                        jp: '暑いから窓を開けてください。',
                        en: 'Because it\'s hot, please open the window.',
                        wrong: ['Please close the window, it\'s cold.', 'It\'s hot but the window is open.', 'Open the window and it will be hot.']
                    },
                    {
                        jp: '日本語は難しいですが、楽しいです。',
                        en: 'Japanese is difficult, but fun.',
                        wrong: ['Japanese is easy and boring.', 'Japanese is difficult because it\'s fun.', 'Difficult Japanese is fun.']
                    },
                    {
                        jp: '朝起きて、ご飯を食べて、学校に行きます。',
                        en: 'I wake up, eat breakfast, and go to school.',
                        wrong: ['I go to school before eating breakfast.', 'I eat breakfast at school every morning.', 'After school I eat and then sleep.']
                    },
                    {
                        jp: 'だれが来ましたか。',
                        en: 'Who came?',
                        wrong: ['When did they come?', 'Where did they go?', 'What happened?']
                    }
                ];
                var item = pick(items);
                var opts = shuffle([item.en].concat(item.wrong));
                return {
                    type: 'mc',
                    prompt: '<span class="jp-medium">' + item.jp + '</span>',
                    text: 'What does this mean in English?',
                    options: opts,
                    answer: item.en,
                    explain: '<span class="jp-medium">' + item.jp + '</span><br><strong>' + item.en + '</strong>'
                };
            }
        },

        // ── 8. Summary ──────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned the fundamentals of Japanese sentence structure:</p>' +
                '<ul>' +
                '<li><strong>SOV word order</strong> — the verb always comes last</li>' +
                '<li><strong>Topic-comment</strong> — Xは Y (as for X, Y)</li>' +
                '<li><strong>Questions</strong> — add か; use 何, どこ, いつ, だれ</li>' +
                '<li><strong>Connecting sentences</strong> — て (and then), から (because), が (but)</li>' +
                '</ul>' +
                '<p>Keep practising sentence building with the Grammar Trainer!</p>',
            nextActivity: 'gram-trainer'
        }
    ]
};
