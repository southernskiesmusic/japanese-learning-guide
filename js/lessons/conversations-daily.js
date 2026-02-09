/* ================================================================
   LESSON: Shopping & Services
   Navigate shops, restaurants, and everyday situations
   ================================================================ */
var LESSON_CONVERSATIONS_DAILY = {
    id: 'conversations-daily',
    title: 'Shopping & Services',
    subtitle: 'Navigate shops, restaurants, and everyday situations',
    folder: 'conv-folder',
    screens: [

        // ── 1. Concept: Shopping vocabulary ──────────────────
        {
            type: 'concept',
            title: 'Shopping Vocabulary',
            content: '<p>Shopping in Japan is straightforward once you know the key phrases. Here is the essential vocabulary:</p>' +
                '<h4>Core Shopping Words</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">みせ</span> (店) — shop, store</li>' +
                '<li><span class="jp-medium">ねだん</span> (値段) — price</li>' +
                '<li><span class="jp-medium">おつり</span> — change (money back)</li>' +
                '<li><span class="jp-medium">レシート</span> — receipt</li>' +
                '<li><span class="jp-medium">ふくろ</span> (袋) — bag</li>' +
                '<li><span class="jp-medium">おみやげ</span> (お土産) — souvenir</li>' +
                '</ul>' +
                '<h4>Payment Words</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">げんきん</span> (現金) — cash</li>' +
                '<li><span class="jp-medium">クレジットカード</span> — credit card</li>' +
                '<li><span class="jp-medium">ぜんぶで</span> — in total</li>' +
                '<li><span class="jp-medium">ぜいこみ</span> (税込) — tax included</li>' +
                '</ul>'
        },

        // ── 2. Concept: Prices, sizes, colours ──────────────
        {
            type: 'concept',
            title: 'Asking About Prices, Sizes & Colours',
            content: '<h4>Asking the Price</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-large">これは いくらですか。</span><br>How much is this?</p>' +
                '<p><span class="jp-large">ぜんぶで いくらですか。</span><br>How much is it in total?</p>' +
                '</div>' +
                '<h4>Sizes</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">Sサイズ</span> — small</li>' +
                '<li><span class="jp-medium">Mサイズ</span> — medium</li>' +
                '<li><span class="jp-medium">Lサイズ</span> — large</li>' +
                '<li><span class="jp-medium">もう すこし おおきいの</span> — something a little bigger</li>' +
                '<li><span class="jp-medium">もう すこし ちいさいの</span> — something a little smaller</li>' +
                '</ul>' +
                '<h4>Colours (いろ)</h4>' +
                '<ul>' +
                '<li><span class="jp-medium">あか</span> (赤) — red &nbsp; | &nbsp; <span class="jp-medium">あお</span> (青) — blue</li>' +
                '<li><span class="jp-medium">しろ</span> (白) — white &nbsp; | &nbsp; <span class="jp-medium">くろ</span> (黒) — black</li>' +
                '<li><span class="jp-medium">きいろ</span> (黄色) — yellow &nbsp; | &nbsp; <span class="jp-medium">みどり</span> (緑) — green</li>' +
                '</ul>' +
                '<p>To ask for a different colour: <span class="jp-medium">べつの いろは ありますか。</span></p>'
        },

        // ── 3. Example: Shopping dialogue ────────────────────
        {
            type: 'example',
            title: 'Shopping Dialogue',
            content: '<p>A typical shopping conversation at a clothing store:</p>',
            steps: [
                { detail: '<strong>Staff:</strong> <span class="jp-medium">いらっしゃいませ。なにか おさがしですか。</span><br>Welcome. Are you looking for something? (おさがし = polite form of さがす)' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">この シャツの Mサイズは ありますか。</span><br>Do you have this shirt in size M?' },
                { detail: '<strong>Staff:</strong> <span class="jp-medium">はい、あります。こちらです。</span><br>Yes, we do. Here it is.' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">しちゃくしても いいですか。</span><br>May I try it on? (~ても いいですか = May I ~?)' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">これを ください。クレジットカードで はらえますか。</span><br>I will take this. Can I pay by credit card?' }
            ]
        },

        // ── 4. Practice: Pick correct shopping phrase ────────
        {
            type: 'practice',
            instruction: 'Choose the correct phrase for each shopping situation.',
            generate: function () {
                var scenarios = [
                    { prompt: 'You want to know the price of an item.',
                      answer: 'すみません、これは いくらですか。',
                      options: ['すみません、これは いくらですか。', 'すみません、これは なんですか。', 'これを ください。', 'べつのいろは ありますか。'] },
                    { prompt: 'You want to try on a piece of clothing.',
                      answer: 'しちゃくしても いいですか。',
                      options: ['しちゃくしても いいですか。', 'これを ください。', 'いくらですか。', 'やすくしてください。'] },
                    { prompt: 'You want to ask for a larger size.',
                      answer: 'もう すこし おおきいのは ありますか。',
                      options: ['もう すこし おおきいのは ありますか。', 'もう すこし ちいさいのは ありますか。', 'べつのいろは ありますか。', 'やすいのは ありますか。'] },
                    { prompt: 'You want to buy the item.',
                      answer: 'これを ください。',
                      options: ['これを ください。', 'いりません。', 'いくらですか。', 'しちゃくしても いいですか。'] }
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

        // ── 5. Concept: Restaurant — dietary needs & groups ──
        {
            type: 'concept',
            title: 'Restaurant — Dietary Needs & Group Ordering',
            content: '<h4>Dietary Restrictions</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">にくは たべられません。</span><br>I cannot eat meat.</p>' +
                '<p><span class="jp-medium">アレルギーが あります。</span><br>I have an allergy.</p>' +
                '<p><span class="jp-medium">ベジタリアンです。</span><br>I am vegetarian.</p>' +
                '<p><span class="jp-medium">たまごは だいじょうぶです。</span><br>Eggs are okay.</p>' +
                '</div>' +
                '<h4>Ordering for Groups</h4>' +
                '<p>When ordering multiple items, use counters:</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">ラーメンを <strong>ふたつ</strong> おねがいします。</span><br>Two ramens, please.</p>' +
                '<p><span class="jp-medium">コーヒーを <strong>みっつ</strong> ください。</span><br>Three coffees, please.</p>' +
                '</div>' +
                '<p><strong>General counters:</strong> ひとつ (1), ふたつ (2), みっつ (3), よっつ (4), いつつ (5)</p>' +
                '<p>For drinks in cups: いっぱい (1 cup), にはい (2 cups), さんばい (3 cups)</p>'
        },

        // ── 6. Example: Group ordering dialogue ─────────────
        {
            type: 'example',
            title: 'Group Ordering Dialogue',
            content: '<p>Ordering for a group at a restaurant:</p>',
            steps: [
                { detail: '<strong>Waiter:</strong> <span class="jp-medium">いらっしゃいませ。なんめいさまですか。</span><br>Welcome. How many guests?' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">三人です。</span><br>Three people.' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">すみません、ラーメンを ふたつと カレーを ひとつ おねがいします。</span><br>Excuse me, two ramens and one curry, please. (と = and, connecting items)' },
                { detail: '<strong>Waiter:</strong> <span class="jp-medium">おのみものは いかがですか。</span><br>Would you like drinks?' },
                { detail: '<strong>Customer:</strong> <span class="jp-medium">お水を みっつ ください。あと、ともだちは にくが たべられません。やさいの りょうりは ありますか。</span><br>Three waters, please. Also, my friend cannot eat meat. Do you have vegetable dishes?' }
            ]
        },

        // ── 7. Practice: Fill in blank — shopping scenario ───
        {
            type: 'practice',
            instruction: 'Fill in the blank with the correct phrase.',
            generate: function () {
                var scenarios = [
                    { context: 'Staff: <span class="jp-medium">ぜんぶで 三千円です。</span><br>You want to pay by card. You say:',
                      answer: 'クレジットカードで はらえますか。',
                      options: ['クレジットカードで はらえますか。', 'げんきんで おねがいします。', 'おつりを ください。', 'いくらですか。'] },
                    { context: 'You are looking for souvenirs. The staff asks if you need help. You say:',
                      answer: 'おみやげを さがしています。',
                      options: ['おみやげを さがしています。', 'みているだけです。', 'いりません。', 'さようなら。'] },
                    { context: 'You like a shirt but want it in blue. You say:',
                      answer: 'あおは ありますか。',
                      options: ['あおは ありますか。', 'いくらですか。', 'これを ください。', 'しちゃくしても いいですか。'] },
                    { context: 'The staff says: <span class="jp-medium">ふくろは いりますか。</span> (Do you need a bag?) You want one. You say:',
                      answer: 'はい、おねがいします。',
                      options: ['はい、おねがいします。', 'いいえ、けっこうです。', 'いくらですか。', 'さようなら。'] }
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

        // ── 8. Concept: Useful set phrases ──────────────────
        {
            type: 'concept',
            title: 'Useful Set Phrases',
            content: '<p>These phrases are incredibly useful in everyday situations. Memorise them as fixed expressions:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">ちょっと まってください</span></td>' +
                '<td style="padding:8px;">Please wait a moment</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">もういちど おねがいします</span></td>' +
                '<td style="padding:8px;">One more time, please</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">ゆっくり はなしてください</span></td>' +
                '<td style="padding:8px;">Please speak slowly</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">えいごで いいですか</span></td>' +
                '<td style="padding:8px;">Is English okay?</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">だいじょうぶです</span></td>' +
                '<td style="padding:8px;">It is okay / I am fine</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">すみません、わかりません</span></td>' +
                '<td style="padding:8px;">Sorry, I do not understand</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-medium">これを かいてください</span></td>' +
                '<td style="padding:8px;">Please write this down</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;"><span class="jp-medium">たすけてください</span></td>' +
                '<td style="padding:8px;">Please help me</td></tr>' +
                '</table>' +
                '<p>These are your <strong>survival phrases</strong> — they work in any situation where you need help or clarification.</p>'
        },

        // ── 9. Practice: Match situation to phrase ───────────
        {
            type: 'practice',
            instruction: 'Match the situation to the correct Japanese phrase.',
            generate: function () {
                var scenarios = [
                    { prompt: 'You want someone to speak more slowly.',
                      answer: 'ゆっくり はなしてください。',
                      options: ['ゆっくり はなしてください。', 'もういちど おねがいします。', 'ちょっと まってください。', 'えいごで いいですか。'] },
                    { prompt: 'You want them to repeat what they said.',
                      answer: 'もういちど おねがいします。',
                      options: ['もういちど おねがいします。', 'ゆっくり はなしてください。', 'わかりました。', 'だいじょうぶです。'] },
                    { prompt: 'You want to ask if you can use English.',
                      answer: 'えいごで いいですか。',
                      options: ['えいごで いいですか。', 'にほんごで おねがいします。', 'えいごが わかりますか。', 'ゆっくり はなしてください。'] },
                    { prompt: 'Someone is rushing you and you need a moment.',
                      answer: 'ちょっと まってください。',
                      options: ['ちょっと まってください。', 'はやく してください。', 'だいじょうぶです。', 'もう いいです。'] },
                    { prompt: 'You do not understand what someone said.',
                      answer: 'すみません、わかりません。',
                      options: ['すみません、わかりません。', 'わかりました。', 'しっています。', 'だいじょうぶです。'] },
                    { prompt: 'You need help with something.',
                      answer: 'たすけてください。',
                      options: ['たすけてください。', 'ちょっと まってください。', 'だいじょうぶです。', 'すみません。'] }
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
            content: '<p>You have learned essential phrases for shopping and everyday services:</p>' +
                '<ul>' +
                '<li><strong>Shopping phrases</strong> — asking prices, sizes, colours, paying</li>' +
                '<li><strong>Restaurant skills</strong> — dietary restrictions, group ordering, counters</li>' +
                '<li><strong>Set phrases</strong> — wait, repeat, slow down, help</li>' +
                '<li><strong>Payment vocabulary</strong> — cash, card, change, receipt</li>' +
                '</ul>' +
                '<p>Keep practising these conversations with the <strong>Conversation Trainer</strong> to build fluency!</p>',
            nextActivity: 'conv-trainer'
        }
    ]
};
