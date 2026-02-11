/* ================================================================
   LESSON: Everyday Conversations
   Common dialogues for daily life — intro, greetings, restaurant, directions
   ================================================================ */
var LESSON_CONVERSATIONS_INTRO = {
    id: 'conversations-intro',
    title: 'Everyday Conversations',
    subtitle: 'Common dialogues for daily life',
    folder: 'conv-folder',
    screens: [

        // ── 1. Concept: Conversational patterns ──────────────
        {
            type: 'concept',
            title: 'Japanese Conversational Patterns',
            content: '<p>Japanese conversation follows certain <strong>patterns and formality levels</strong> that differ from English.</p>' +
                '<h4>Politeness Levels</h4>' +
                '<ul>' +
                '<li><strong>Casual (タメ語)</strong> — used with close friends: <span class="jp-medium">おはよう</span></li>' +
                '<li><strong>Polite (丁寧語 / ていねいご)</strong> — standard for daily life: <span class="jp-medium">おはようございます</span></li>' +
                '<li><strong>Honorific (敬語 / けいご)</strong> — for business, service staff, elders</li>' +
                '</ul>' +
                '<p>In this course, we focus on <strong>polite (masu/desu) form</strong> — the safest and most common level for learners.</p>' +
                '<h4>Key Conversational Rules</h4>' +
                '<ul>' +
                '<li>Always <strong>greet first</strong> before asking questions</li>' +
                '<li>Use <span class="jp-medium">すみません</span> (sumimasen) to get attention politely</li>' +
                '<li>End conversations with a thank-you or farewell phrase</li>' +
                '<li>Nod and use <span class="jp-medium">はい</span> to show you are listening (aizuchi)</li>' +
                '</ul>'
        },

        // ── 2. Concept: Self-introduction template ───────────
        {
            type: 'concept',
            title: 'Self-Introduction (jikoshoukai)',
            content: '<p>Self-introductions follow a <strong>set pattern</strong> in Japanese. Memorise this template:</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-large">はじめまして。</span><br>Nice to meet you.</p>' +
                '<p><span class="jp-large">[NAME] です。</span><br>I am [NAME].</p>' +
                '<p><span class="jp-large">[COUNTRY] から きました。</span><br>I came from [COUNTRY].</p>' +
                '<p><span class="jp-large">[JOB/STATUS] です。</span><br>I am a [JOB/STATUS].</p>' +
                '<p><span class="jp-large">どうぞよろしくおねがいします。</span><br>Please treat me well.</p>' +
                '</div>' +
                '<h4>Useful Vocabulary</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">学生</span> (がくせい) — student</li>' +
                '<li><span class="jp-medium">会社員</span> (かいしゃいん) — company employee</li>' +
                '<li><span class="jp-medium">先生</span> (せんせい) — teacher</li>' +
                '<li><span class="jp-medium">趣味</span> (しゅみ) — hobby</li>' +
                '</ul>'
        },

        // ── 3. Example: Full self-introduction dialogue ──────
        {
            type: 'example',
            title: 'Self-Introduction Dialogue',
            content: '<p>Here is a complete self-introduction conversation between two people meeting for the first time.</p>',
            steps: [
                { detail: '<strong>A:</strong> <span class="jp-medium">はじめまして。田中です。</span><br>Nice to meet you. I am Tanaka.' },
                { detail: '<strong>B:</strong> <span class="jp-medium">はじめまして。マイクです。オーストラリアから きました。</span><br>Nice to meet you. I am Mike. I came from Australia.' },
                { detail: '<strong>A:</strong> <span class="jp-medium">おしごとは なんですか。</span><br>What is your occupation? (Note: おしごと is the polite form of しごと)' },
                { detail: '<strong>B:</strong> <span class="jp-medium">学生です。日本語を べんきょうしています。</span><br>I am a student. I am studying Japanese.' },
                { detail: '<strong>A:</strong> <span class="jp-medium">どうぞよろしくおねがいします。</span><br>Pleased to meet you. (This phrase closes the introduction.)' }
            ]
        },

        // ── 4. Practice: Pick correct self-intro response ────
        {
            type: 'practice',
            instruction: 'Choose the correct response in a self-introduction.',
            generate: function () {
                var scenarios = [
                    { prompt: 'Someone says: <span class="jp-medium">はじめまして。田中です。</span> What do you say?',
                      answer: 'はじめまして。どうぞよろしくおねがいします。',
                      options: ['はじめまして。どうぞよろしくおねがいします。', 'さようなら。', 'おかいけいを おねがいします。', 'ごちそうさまでした。'] },
                    { prompt: 'Someone asks: <span class="jp-medium">おくには どちらですか。</span> You are from America.',
                      answer: 'アメリカから きました。',
                      options: ['アメリカから きました。', 'アメリカは すきです。', '学生です。', 'わかりません。'] },
                    { prompt: 'Someone asks: <span class="jp-medium">おしごとは なんですか。</span> You are a student.',
                      answer: '学生です。',
                      options: ['学生です。', 'イギリスから きました。', 'すみません。', 'おはようございます。'] },
                    { prompt: 'Someone asks: <span class="jp-medium">しゅみは なんですか。</span> You like music.',
                      answer: '音楽が すきです。',
                      options: ['音楽が すきです。', '学生です。', 'おねがいします。', 'わかりません。'] }
                ];
                var q = pick(scenarios);
                return {
                    type: 'mc',
                    prompt: q.prompt,
                    options: shuffle(q.options),
                    answer: q.answer,
                    explain: 'Correct answer: <span class="jp-medium">' + q.answer + '</span>'
                };
            }
        },

        // ── 5. Concept: Restaurant phrases ───────────────────
        {
            type: 'concept',
            title: 'Restaurant Phrases',
            content: '<p>Eating out is a great way to practise Japanese. Here are the <strong>essential phrases</strong>:</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-large">すみません</span> — Excuse me (to call a waiter)</p>' +
                '<p><span class="jp-large">メニューを ください</span> — Please give me the menu</p>' +
                '<p><span class="jp-large">これを ください</span> — I will have this, please</p>' +
                '<p><span class="jp-large">おすすめは なんですか</span> — What do you recommend?</p>' +
                '<p><span class="jp-large">おかいけいを おねがいします</span> — The bill, please</p>' +
                '</div>' +
                '<h4>Before and After Eating</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">いただきます</span> — Said before eating (expresses gratitude)</li>' +
                '<li><span class="jp-medium">ごちそうさまでした</span> — Said after eating (thanks for the meal)</li>' +
                '</ul>' +
                '<h4>Useful Ordering Patterns</h4>' +
                '<p><span class="jp-medium">[Item] を [number] おねがいします</span> — [Number] of [item], please</p>' +
                '<p>Example: <span class="jp-medium">ラーメンを ひとつ おねがいします</span> — One ramen, please</p>'
        },

        // ── 6. Example: Restaurant ordering dialogue ─────────
        {
            type: 'example',
            title: 'Restaurant Ordering Dialogue',
            content: '<p>A typical restaurant conversation from entering to ordering:</p>',
            steps: [
                { detail: '<strong>Waiter:</strong> <span class="jp-medium">いらっしゃいませ。なんめいさまですか。</span><br>Welcome. How many guests? (Very polite service Japanese)' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">二人です。</span><br>Two people.' },
                { detail: '<strong>Waiter:</strong> <span class="jp-medium">ごちゅうもんは おきまりですか。</span><br>Have you decided on your order? (おきまり = decided, polite form)' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">はい。ラーメンを ひとつ おねがいします。</span><br>Yes. One ramen, please. (ひとつ = one item)' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">すみません、おかいけいを おねがいします。</span><br>Excuse me, the bill please. (おかいけい = bill/check)' }
            ]
        },

        // ── 7. Practice: Fill in restaurant dialogue ─────────
        {
            type: 'practice',
            instruction: 'Fill in the blank in this restaurant dialogue.',
            generate: function () {
                var scenarios = [
                    { context: 'Waiter: <span class="jp-medium">ごちゅうもんは おきまりですか。</span><br>You want to order sushi.',
                      answer: 'おすしを おねがいします。',
                      options: ['おすしを おねがいします。', 'おかいけいを おねがいします。', 'メニューを ください。', 'ごちそうさまでした。'] },
                    { context: 'You have finished your meal and want the bill.<br>You: <span class="jp-medium">すみません、______</span>',
                      answer: 'おかいけいを おねがいします。',
                      options: ['おかいけいを おねがいします。', 'メニューを ください。', 'いただきます。', 'これを ください。'] },
                    { context: 'The waiter asks: <span class="jp-medium">おのみものは いかがですか。</span><br>You want green tea.',
                      answer: 'おちゃを ください。',
                      options: ['おちゃを ください。', 'お水を ください。', 'いりません。', 'おかいけいを おねがいします。'] },
                    { context: 'You want to know what the waiter recommends.<br>You: <span class="jp-medium">______</span>',
                      answer: 'おすすめは なんですか。',
                      options: ['おすすめは なんですか。', 'これは いくらですか。', 'メニューを ください。', 'おなまえは なんですか。'] }
                ];
                var q = pick(scenarios);
                return {
                    type: 'mc',
                    prompt: q.context,
                    options: shuffle(q.options),
                    answer: q.answer,
                    explain: 'Correct: <span class="jp-medium">' + q.answer + '</span>'
                };
            }
        },

        // ── 8. Concept: Asking for directions ────────────────
        {
            type: 'concept',
            title: 'Asking for Directions',
            content: '<p>Getting around in Japan requires a few key phrases. Here is the pattern:</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-large">すみません、___ は どこですか。</span><br>Excuse me, where is ___?</p>' +
                '</div>' +
                '<h4>Direction Words</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">みぎ</span> (右) — right</li>' +
                '<li><span class="jp-medium">ひだり</span> (左) — left</li>' +
                '<li><span class="jp-medium">まっすぐ</span> — straight ahead</li>' +
                '<li><span class="jp-medium">まがってください</span> — please turn</li>' +
                '<li><span class="jp-medium">しんごう</span> (信号) — traffic light</li>' +
                '<li><span class="jp-medium">かど</span> (角) — corner</li>' +
                '<li><span class="jp-medium">となり</span> (隣) — next to</li>' +
                '</ul>' +
                '<h4>Asking About Distance</h4>' +
                '<p><span class="jp-medium">ここから とおいですか。</span> — Is it far from here?</p>' +
                '<p><span class="jp-medium">あるいて なんぷんですか。</span> — How many minutes on foot?</p>'
        },

        // ── 9. Practice: Pick correct direction response ─────
        {
            type: 'practice',
            instruction: 'Choose the correct response for each situation.',
            generate: function () {
                var scenarios = [
                    { prompt: 'You want to ask where the station is. What do you say?',
                      answer: 'すみません、えきは どこですか。',
                      options: ['すみません、えきは どこですか。', 'えきは いくらですか。', 'えきは なんですか。', 'えきに いきたくないです。'] },
                    { prompt: 'Someone says: <span class="jp-medium">まっすぐ いってください。</span> What does this mean?',
                      answer: 'Please go straight.',
                      options: ['Please go straight.', 'Please turn left.', 'Please turn right.', 'Please wait.'] },
                    { prompt: 'You want to know if a place is far. What do you ask?',
                      answer: 'ここから とおいですか。',
                      options: ['ここから とおいですか。', 'ここは どこですか。', 'いくらですか。', 'なんじですか。'] },
                    { prompt: 'You did not understand the directions. What do you say?',
                      answer: 'すみません、もういちど おねがいします。',
                      options: ['すみません、もういちど おねがいします。', 'わかりました。', 'だいじょうぶです。', 'ありがとうございます。'] }
                ];
                var q = pick(scenarios);
                return {
                    type: 'mc',
                    prompt: q.prompt,
                    options: shuffle(q.options),
                    answer: q.answer,
                    explain: 'Correct: <span class="jp-medium">' + q.answer + '</span>'
                };
            }
        },

        // ── 10. Summary ─────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            content: '<p>You have learned the basics of everyday Japanese conversation:</p>' +
                '<ul>' +
                '<li><strong>Politeness levels</strong> — casual, polite (masu/desu), and honorific</li>' +
                '<li><strong>Self-introduction pattern</strong> — hajimemashite, name, country, occupation, yoroshiku</li>' +
                '<li><strong>Restaurant phrases</strong> — ordering, asking for the menu, requesting the bill</li>' +
                '<li><strong>Direction phrases</strong> — asking where, left/right/straight, distance questions</li>' +
                '</ul>' +
                '<p>Now practise these dialogues with the <strong>Conversation Activity</strong>!</p>',
            nextActivity: 'conv-activity'
        }
    ]
};
