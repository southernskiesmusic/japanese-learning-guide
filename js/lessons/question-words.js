/* ================================================================
   LESSON: Question Words
   Essential Japanese interrogatives (N5)
   ================================================================ */
var LESSON_QUESTION_WORDS = {
    id: 'question-words',
    title: 'Question Words',
    subtitle: 'Essential Japanese interrogatives for asking questions',
    folder: 'grammar-folder',
    screens: [

        // ── 1. Overview ──────────────────────────────────────────
        {
            type: 'concept',
            title: 'Asking Questions in Japanese',
            html: '<p>Japanese forms questions by adding the particle <span class="jp-large">か</span> to the end of a sentence. The word order stays the same!</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">これはペンです。</span> → This is a pen.</p>' +
                '<p><span class="jp-medium">これはペンです<strong>か</strong>。</span> → Is this a pen?</p>' +
                '</div>' +
                '<p>To ask <em>what, who, where, when</em>, etc., you use <strong>question words</strong> (疑問詞 / ぎもんし). Let\'s learn the most important ones.</p>'
        },

        // ── 2. なに/なん, だれ, どこ ──────────────────────────────
        {
            type: 'concept',
            title: 'What, Who, Where',
            html: '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;">Word</th><th style="padding:8px;">Meaning</th><th style="padding:8px;">Example</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">なに / なん</span></td><td style="padding:8px;">what</td>' +
                '<td style="padding:8px;"><span class="jp">これは<strong>なん</strong>ですか。</span><br>What is this?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">だれ</span></td><td style="padding:8px;">who</td>' +
                '<td style="padding:8px;"><span class="jp"><strong>だれ</strong>が来ましたか。</span><br>Who came?</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;"><span class="jp-medium">どこ</span></td><td style="padding:8px;">where</td>' +
                '<td style="padding:8px;"><span class="jp">トイレは<strong>どこ</strong>ですか。</span><br>Where is the toilet?</td></tr>' +
                '</table>' +
                '<p><strong>Tip:</strong> なに becomes <strong>なん</strong> before です, で, and counters.</p>'
        },

        // ── 3. いつ, どうして, いくら, どう ──────────────────────
        {
            type: 'concept',
            title: 'When, Why, How Much, How',
            html: '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;">Word</th><th style="padding:8px;">Meaning</th><th style="padding:8px;">Example</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">いつ</span></td><td style="padding:8px;">when</td>' +
                '<td style="padding:8px;"><span class="jp"><strong>いつ</strong>行きますか。</span><br>When will you go?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">どうして</span></td><td style="padding:8px;">why</td>' +
                '<td style="padding:8px;"><span class="jp"><strong>どうして</strong>勉強しますか。</span><br>Why do you study?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">いくら</span></td><td style="padding:8px;">how much</td>' +
                '<td style="padding:8px;"><span class="jp"><strong>いくら</strong>ですか。</span><br>How much is it?</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;"><span class="jp-medium">どう</span></td><td style="padding:8px;">how</td>' +
                '<td style="padding:8px;"><span class="jp">日本は<strong>どう</strong>ですか。</span><br>How is Japan?</td></tr>' +
                '</table>'
        },

        // ── 4. Example sentences ──────────────────────────────────
        {
            type: 'example',
            title: 'Question Words in Context',
            problem: '<p>Let\'s see all seven question words used in natural sentences:</p>',
            steps: [
                { text: '<span class="jp-medium">お名前は<strong>なん</strong>ですか。</span><br>What is your name?' },
                { text: '<span class="jp-medium"><strong>だれ</strong>の本ですか。</span><br>Whose book is it?' },
                { text: '<span class="jp-medium">駅は<strong>どこ</strong>ですか。</span><br>Where is the station?' },
                { text: '<span class="jp-medium">パーティーは<strong>いつ</strong>ですか。</span><br>When is the party?' },
                { text: '<span class="jp-medium"><strong>どうして</strong>日本語を勉強していますか。</span><br>Why are you studying Japanese?' },
                { text: '<span class="jp-medium">これは<strong>いくら</strong>ですか。</span><br>How much is this?' },
                { text: '<span class="jp-medium">東京は<strong>どう</strong>でしたか。</span><br>How was Tokyo?' }
            ]
        },

        // ── 5. Practice: match question word to meaning ───────────
        {
            type: 'practice',
            intro: 'What does this question word mean?',
            generate: function () {
                var pool = [
                    { jp: 'なに', en: 'what' },
                    { jp: 'だれ', en: 'who' },
                    { jp: 'どこ', en: 'where' },
                    { jp: 'いつ', en: 'when' },
                    { jp: 'どうして', en: 'why' },
                    { jp: 'いくら', en: 'how much' },
                    { jp: 'どう', en: 'how' }
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

        // ── 6. Practice: fill in the question word ────────────────
        {
            type: 'practice',
            intro: 'Which question word completes this sentence?',
            generate: function () {
                var pool = [
                    { sentence: '___ですか。(pointing at an object)', answer: 'なん', english: 'What is it?', hint: 'asking about identity' },
                    { sentence: '___が来ましたか。', answer: 'だれ', english: 'Who came?', hint: 'asking about a person' },
                    { sentence: 'トイレは___ですか。', answer: 'どこ', english: 'Where is the toilet?', hint: 'asking about location' },
                    { sentence: 'テストは___ですか。', answer: 'いつ', english: 'When is the test?', hint: 'asking about time' },
                    { sentence: '___日本語を勉強しますか。', answer: 'どうして', english: 'Why do you study Japanese?', hint: 'asking about reason' },
                    { sentence: 'これは___ですか。(at a shop)', answer: 'いくら', english: 'How much is this?', hint: 'asking about price' },
                    { sentence: '日本は___ですか。', answer: 'どう', english: 'How is Japan?', hint: 'asking about impression' }
                ];
                var q = pick(pool);
                var display = q.sentence.replace('___', ' <span class="jp-large" style="color:var(--accent,var(--primary))">___</span> ');
                var answers = ['なん', 'だれ', 'どこ', 'いつ', 'どうして', 'いくら', 'どう'];
                var opts = [q.answer];
                var distractors = shuffle(answers.filter(function (a) { return a !== q.answer; }));
                for (var i = 0; i < 3; i++) opts.push(distractors[i]);
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-medium">' + display + '</span>',
                    text: q.english + ' (Hint: ' + q.hint + ')',
                    options: opts,
                    answer: q.answer,
                    explain: '<span class="jp-medium">' + q.sentence.replace('___', '<strong>' + q.answer + '</strong>') + '</span><br>' + q.english
                };
            }
        },

        // ── 7. Summary ───────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You now know the 7 essential Japanese question words:</p>' +
                '<ul>' +
                '<li><span class="jp"><strong>なに / なん</strong></span> — what</li>' +
                '<li><span class="jp"><strong>だれ</strong></span> — who</li>' +
                '<li><span class="jp"><strong>どこ</strong></span> — where</li>' +
                '<li><span class="jp"><strong>いつ</strong></span> — when</li>' +
                '<li><span class="jp"><strong>どうして</strong></span> — why</li>' +
                '<li><span class="jp"><strong>いくら</strong></span> — how much</li>' +
                '<li><span class="jp"><strong>どう</strong></span> — how</li>' +
                '</ul>' +
                '<p>Remember: just add <span class="jp"><strong>か</strong></span> at the end to make any sentence a question. Practice with the Grammar Trainer!</p>',
            nextActivity: 'gram-trainer'
        }
    ]
};
