/* ============================================================
   Conversation / Dialogue Data
   ~32 dialogues across 4 scenarios + ~30 situation-response pairs
   JLPT N5 level, polite (masu/desu) form
   ============================================================ */

const CONVERSATIONS_DATA = {

    // ── Dialogues ──────────────────────────────────────────────
    dialogues: [

        // ──── Self-Introduction (8) ────────────────────────────
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'はじめまして。田中です。', en: 'Nice to meet you. I am Tanaka.' },
                { speaker: 'B', jp: 'はじめまして。マイクです。', en: 'Nice to meet you. I am Mike.' },
                { speaker: 'A', jp: 'どうぞよろしくおねがいします。', en: 'Please treat me well.' },
                { speaker: 'B', jp: 'こちらこそ、よろしくおねがいします。', en: 'Likewise, pleased to meet you.' }
            ],
            question: { type: 'fillBlank', blankLine: 2, answer: 'どうぞよろしくおねがいします。', options: ['どうぞよろしくおねがいします。', 'さようなら。', 'すみません。', 'いただきます。'] }
        },
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'おなまえは なんですか。', en: 'What is your name?' },
                { speaker: 'B', jp: 'リサです。オーストラリアから きました。', en: 'I am Lisa. I came from Australia.' },
                { speaker: 'A', jp: 'おしごとは なんですか。', en: 'What is your occupation?' },
                { speaker: 'B', jp: '学生です。日本語を べんきょうしています。', en: 'I am a student. I am studying Japanese.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'リサです。オーストラリアから きました。', options: ['リサです。オーストラリアから きました。', 'げんきです。', 'わかりません。', 'ありがとうございます。'] }
        },
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'しゅみは なんですか。', en: 'What are your hobbies?' },
                { speaker: 'B', jp: '音楽を きくのが すきです。', en: 'I like listening to music.' },
                { speaker: 'A', jp: 'いいですね。わたしは えいがが すきです。', en: 'That is nice. I like movies.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: '音楽を きくのが すきです。', options: ['音楽を きくのが すきです。', 'げんきです。', 'わかりました。', 'おねがいします。'] }
        },
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'おくには どちらですか。', en: 'Where are you from?' },
                { speaker: 'B', jp: 'イギリスから きました。', en: 'I came from England.' },
                { speaker: 'A', jp: 'イギリスのどこですか。', en: 'Where in England?' },
                { speaker: 'B', jp: 'ロンドンです。', en: 'London.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'おくには どちらですか。', options: ['おくには どちらですか。', 'おいくつですか。', 'なにが すきですか。', 'おしごとは なんですか。'] }
        },
        {
            scenario: 'intro',
            speakers: ['Yuki', 'Tom'],
            lines: [
                { speaker: 'Yuki', jp: 'こんにちは。ゆきです。', en: 'Hello. I am Yuki.' },
                { speaker: 'Tom', jp: 'こんにちは。トムです。アメリカじんです。', en: 'Hello. I am Tom. I am American.' },
                { speaker: 'Yuki', jp: '日本語が じょうずですね。', en: 'Your Japanese is good.' },
                { speaker: 'Tom', jp: 'いいえ、まだまだです。', en: 'No, I still have a long way to go.' }
            ],
            question: { type: 'fillBlank', blankLine: 3, answer: 'いいえ、まだまだです。', options: ['いいえ、まだまだです。', 'はい、そうです。', 'ありがとうございます。', 'すみません。'] }
        },
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'おしごとは なんですか。', en: 'What do you do for work?' },
                { speaker: 'B', jp: 'かいしゃいんです。銀行で はたらいています。', en: 'I am a company employee. I work at a bank.' },
                { speaker: 'A', jp: 'そうですか。いそがしいですか。', en: 'I see. Are you busy?' },
                { speaker: 'B', jp: 'はい、すこし いそがしいです。', en: 'Yes, I am a little busy.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'かいしゃいんです。銀行で はたらいています。', options: ['かいしゃいんです。銀行で はたらいています。', '学生です。', 'せんせいです。', 'いしゃです。'] }
        },
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'すみません、にほんごを はなしますか。', en: 'Excuse me, do you speak Japanese?' },
                { speaker: 'B', jp: 'はい、すこし はなします。', en: 'Yes, I speak a little.' },
                { speaker: 'A', jp: 'どこで べんきょうしましたか。', en: 'Where did you study?' },
                { speaker: 'B', jp: '大学で べんきょうしました。', en: 'I studied at university.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'はい、すこし はなします。', options: ['はい、すこし はなします。', 'いいえ、わかりません。', 'はい、たくさん。', 'いいえ、えいごだけです。'] }
        },
        {
            scenario: 'intro',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'かぞくは なんにんですか。', en: 'How many people are in your family?' },
                { speaker: 'B', jp: '四人です。両親と あねが います。', en: 'Four people. I have my parents and an older sister.' },
                { speaker: 'A', jp: 'おねえさんは おいくつですか。', en: 'How old is your older sister?' },
                { speaker: 'B', jp: '二十五さいです。', en: 'She is 25 years old.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: '四人です。両親と あねが います。', options: ['四人です。両親と あねが います。', '二人です。', 'たくさんです。', 'わかりません。'] }
        },

        // ──── Restaurant (8) ───────────────────────────────────
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Waiter', jp: 'いらっしゃいませ。なんめいさまですか。', en: 'Welcome. How many guests?' },
                { speaker: 'Customer', jp: '二人です。', en: 'Two people.' },
                { speaker: 'Waiter', jp: 'こちらへ どうぞ。', en: 'This way, please.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: '二人です。', options: ['二人です。', 'すみません。', 'メニューを ください。', 'おねがいします。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Customer', jp: 'すみません、メニューを ください。', en: 'Excuse me, please give me the menu.' },
                { speaker: 'Waiter', jp: 'はい、どうぞ。', en: 'Yes, here you are.' },
                { speaker: 'Customer', jp: 'ありがとうございます。', en: 'Thank you.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'すみません、メニューを ください。', options: ['すみません、メニューを ください。', 'おかいけいを おねがいします。', 'いただきます。', 'ごちそうさまでした。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Waiter', jp: 'ごちゅうもんは おきまりですか。', en: 'Have you decided on your order?' },
                { speaker: 'Customer', jp: 'はい。ラーメンを ひとつ おねがいします。', en: 'Yes. One ramen, please.' },
                { speaker: 'Waiter', jp: 'おのみものは いかがですか。', en: 'Would you like a drink?' },
                { speaker: 'Customer', jp: 'お水を ください。', en: 'Water, please.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'はい。ラーメンを ひとつ おねがいします。', options: ['はい。ラーメンを ひとつ おねがいします。', 'いいえ、けっこうです。', 'まだです。', 'メニューを ください。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Customer', jp: 'すみません、おかいけいを おねがいします。', en: 'Excuse me, the bill please.' },
                { speaker: 'Waiter', jp: 'はい、ぜんぶで 千五百円です。', en: 'Yes, the total is 1500 yen.' },
                { speaker: 'Customer', jp: 'カードで はらえますか。', en: 'Can I pay by card?' },
                { speaker: 'Waiter', jp: 'はい、だいじょうぶです。', en: 'Yes, that is fine.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'すみません、おかいけいを おねがいします。', options: ['すみません、おかいけいを おねがいします。', 'すみません、メニューを ください。', 'ごちそうさまでした。', 'いただきます。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Customer', jp: 'これは なんですか。', en: 'What is this?' },
                { speaker: 'Waiter', jp: 'それは てんぷらです。', en: 'That is tempura.' },
                { speaker: 'Customer', jp: 'じゃ、それを ください。', en: 'Then, I will have that please.' },
                { speaker: 'Waiter', jp: 'かしこまりました。', en: 'Certainly.' }
            ],
            question: { type: 'fillBlank', blankLine: 2, answer: 'じゃ、それを ください。', options: ['じゃ、それを ください。', 'いりません。', 'わかりません。', 'もういちど おねがいします。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Customer', jp: 'おすすめは なんですか。', en: 'What do you recommend?' },
                { speaker: 'Waiter', jp: 'おすしが にんきです。', en: 'Sushi is popular.' },
                { speaker: 'Customer', jp: 'じゃ、おすしを おねがいします。', en: 'Then, sushi please.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'おすすめは なんですか。', options: ['おすすめは なんですか。', 'おいくらですか。', 'なんじですか。', 'なんにんですか。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Customer', jp: 'にくは たべられません。ベジタリアンです。', en: 'I cannot eat meat. I am vegetarian.' },
                { speaker: 'Waiter', jp: 'やさいの りょうりが ありますよ。', en: 'We have vegetable dishes.' },
                { speaker: 'Customer', jp: 'よかった。やさいカレーを おねがいします。', en: 'Good. Vegetable curry, please.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'にくは たべられません。ベジタリアンです。', options: ['にくは たべられません。ベジタリアンです。', 'なんでも たべます。', 'おなかが すいています。', 'アレルギーが あります。'] }
        },
        {
            scenario: 'restaurant',
            speakers: ['Customer', 'Waiter'],
            lines: [
                { speaker: 'Customer', jp: 'ごちそうさまでした。', en: 'Thank you for the meal.' },
                { speaker: 'Waiter', jp: 'ありがとうございました。またおこしください。', en: 'Thank you. Please come again.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'ごちそうさまでした。', options: ['ごちそうさまでした。', 'いただきます。', 'さようなら。', 'おやすみなさい。'] }
        },

        // ──── Directions (8) ───────────────────────────────────
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'すみません、えきは どこですか。', en: 'Excuse me, where is the station?' },
                { speaker: 'B', jp: 'まっすぐ いって、つぎの かどを みぎに まがってください。', en: 'Go straight and turn right at the next corner.' },
                { speaker: 'A', jp: 'ありがとうございます。', en: 'Thank you.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'まっすぐ いって、つぎの かどを みぎに まがってください。', options: ['まっすぐ いって、つぎの かどを みぎに まがってください。', 'わかりません。', 'ここです。', 'とおいです。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'すみません、ゆうびんきょくは どこですか。', en: 'Excuse me, where is the post office?' },
                { speaker: 'B', jp: 'あのしんごうを ひだりに まがってください。', en: 'Please turn left at that traffic light.' },
                { speaker: 'A', jp: 'ここから とおいですか。', en: 'Is it far from here?' },
                { speaker: 'B', jp: 'いいえ、あるいて 五分ぐらいです。', en: 'No, it is about 5 minutes on foot.' }
            ],
            question: { type: 'fillBlank', blankLine: 3, answer: 'いいえ、あるいて 五分ぐらいです。', options: ['いいえ、あるいて 五分ぐらいです。', 'はい、とおいです。', 'わかりません。', 'バスで いってください。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'コンビニは ちかくに ありますか。', en: 'Is there a convenience store nearby?' },
                { speaker: 'B', jp: 'はい、あのビルの となりに あります。', en: 'Yes, it is next to that building.' },
                { speaker: 'A', jp: 'どうも ありがとう。', en: 'Thank you.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'はい、あのビルの となりに あります。', options: ['はい、あのビルの となりに あります。', 'いいえ、ありません。', 'すみません。', 'しりません。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'びょういんへは どう いきますか。', en: 'How do I get to the hospital?' },
                { speaker: 'B', jp: 'このみちを まっすぐ いってください。みぎがわに あります。', en: 'Go straight on this road. It is on the right side.' },
                { speaker: 'A', jp: 'あるいて なんぷんですか。', en: 'How many minutes on foot?' },
                { speaker: 'B', jp: '十分ぐらいです。', en: 'About 10 minutes.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'びょういんへは どう いきますか。', options: ['びょういんへは どう いきますか。', 'びょういんは いくらですか。', 'びょういんは なんですか。', 'びょういんに いきたくないです。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'すみません、ちかてつのえきは どこですか。', en: 'Excuse me, where is the subway station?' },
                { speaker: 'B', jp: 'この みちの おわりに あります。', en: 'It is at the end of this road.' },
                { speaker: 'A', jp: 'わかりました。ありがとうございます。', en: 'I understand. Thank you.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'この みちの おわりに あります。', options: ['この みちの おわりに あります。', 'ここに あります。', 'しりません。', 'バスに のってください。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'すみません、トイレは どこですか。', en: 'Excuse me, where is the toilet?' },
                { speaker: 'B', jp: '二かいに あります。エレベーターで どうぞ。', en: 'It is on the second floor. Please use the elevator.' },
                { speaker: 'A', jp: 'ありがとうございます。', en: 'Thank you.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: '二かいに あります。エレベーターで どうぞ。', options: ['二かいに あります。エレベーターで どうぞ。', 'ありません。', 'そとに あります。', 'わかりません。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'この バスは えきに いきますか。', en: 'Does this bus go to the station?' },
                { speaker: 'B', jp: 'いいえ、つぎのバスに のってください。', en: 'No, please take the next bus.' },
                { speaker: 'A', jp: 'つぎのバスは なんじですか。', en: 'What time is the next bus?' },
                { speaker: 'B', jp: '三時十分です。', en: 'It is 3:10.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'いいえ、つぎのバスに のってください。', options: ['いいえ、つぎのバスに のってください。', 'はい、いきます。', 'わかりません。', 'あるいて いってください。'] }
        },
        {
            scenario: 'directions',
            speakers: ['A', 'B'],
            lines: [
                { speaker: 'A', jp: 'ここから 空港まで どのくらいですか。', en: 'How far is it from here to the airport?' },
                { speaker: 'B', jp: 'でんしゃで 三十分ぐらいです。', en: 'About 30 minutes by train.' },
                { speaker: 'A', jp: 'タクシーは いくらぐらいですか。', en: 'About how much is a taxi?' },
                { speaker: 'B', jp: '三千円ぐらいです。', en: 'About 3000 yen.' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'でんしゃで 三十分ぐらいです。', options: ['でんしゃで 三十分ぐらいです。', 'あるいて 五分です。', 'わかりません。', 'とおくないです。'] }
        },

        // ──── Shopping (8) ─────────────────────────────────────
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'すみません、これは いくらですか。', en: 'Excuse me, how much is this?' },
                { speaker: 'Staff', jp: '二千円です。', en: 'It is 2000 yen.' },
                { speaker: 'Customer', jp: 'じゃ、これを ください。', en: 'Then, I will take this please.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'すみません、これは いくらですか。', options: ['すみません、これは いくらですか。', 'すみません、これは なんですか。', 'すみません、どこですか。', 'すみません、なんじですか。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'もう すこし やすいのは ありますか。', en: 'Do you have something a little cheaper?' },
                { speaker: 'Staff', jp: 'こちらは せんえんです。', en: 'This one is 1000 yen.' },
                { speaker: 'Customer', jp: 'それに します。', en: 'I will take that one.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'もう すこし やすいのは ありますか。', options: ['もう すこし やすいのは ありますか。', 'もう すこし おおきいのは ありますか。', 'べつのいろは ありますか。', 'これを ください。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'この シャツの Mサイズは ありますか。', en: 'Do you have this shirt in size M?' },
                { speaker: 'Staff', jp: 'はい、あります。こちらです。', en: 'Yes, we do. Here it is.' },
                { speaker: 'Customer', jp: 'しちゃくしても いいですか。', en: 'May I try it on?' },
                { speaker: 'Staff', jp: 'はい、どうぞ。しちゃくしつは あちらです。', en: 'Yes, please. The fitting room is over there.' }
            ],
            question: { type: 'fillBlank', blankLine: 2, answer: 'しちゃくしても いいですか。', options: ['しちゃくしても いいですか。', 'かっても いいですか。', 'みても いいですか。', 'さわっても いいですか。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'べつのいろは ありますか。', en: 'Do you have another color?' },
                { speaker: 'Staff', jp: 'あかと あおが あります。', en: 'We have red and blue.' },
                { speaker: 'Customer', jp: 'あおを みせてください。', en: 'Please show me the blue one.' },
                { speaker: 'Staff', jp: 'はい、どうぞ。', en: 'Yes, here you are.' }
            ],
            question: { type: 'fillBlank', blankLine: 2, answer: 'あおを みせてください。', options: ['あおを みせてください。', 'あかを ください。', 'いりません。', 'きいろは ありますか。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Staff', jp: 'いらっしゃいませ。なにか おさがしですか。', en: 'Welcome. Are you looking for something?' },
                { speaker: 'Customer', jp: 'おみやげを さがしています。', en: 'I am looking for souvenirs.' },
                { speaker: 'Staff', jp: 'こちらに にんきの おかしが あります。', en: 'Over here we have popular sweets.' },
                { speaker: 'Customer', jp: 'これは いくらですか。', en: 'How much is this?' }
            ],
            question: { type: 'fillBlank', blankLine: 1, answer: 'おみやげを さがしています。', options: ['おみやげを さがしています。', 'みているだけです。', 'なにも いりません。', 'えいごを はなしますか。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'クレジットカードで はらえますか。', en: 'Can I pay by credit card?' },
                { speaker: 'Staff', jp: 'はい、つかえます。', en: 'Yes, you can use it.' },
                { speaker: 'Customer', jp: 'ふくろを おねがいします。', en: 'A bag please.' },
                { speaker: 'Staff', jp: 'はい、十円です。', en: 'Yes, it is 10 yen.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'クレジットカードで はらえますか。', options: ['クレジットカードで はらえますか。', 'げんきんで はらいます。', 'ぜんぶで いくらですか。', 'レシートを ください。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'これと これを ください。', en: 'I will take this and this.' },
                { speaker: 'Staff', jp: 'ぜんぶで 三千円です。', en: 'The total is 3000 yen.' },
                { speaker: 'Customer', jp: '五千円で おねがいします。', en: 'Here is 5000 yen.' },
                { speaker: 'Staff', jp: '二千円の おつりです。ありがとうございました。', en: 'Here is 2000 yen change. Thank you.' }
            ],
            question: { type: 'fillBlank', blankLine: 3, answer: '二千円の おつりです。ありがとうございました。', options: ['二千円の おつりです。ありがとうございました。', 'ちょうどです。', 'レシートです。', 'ありがとうございます。'] }
        },
        {
            scenario: 'shopping',
            speakers: ['Customer', 'Staff'],
            lines: [
                { speaker: 'Customer', jp: 'プレゼントようの ほうそうは できますか。', en: 'Can you gift-wrap it?' },
                { speaker: 'Staff', jp: 'はい、できます。すこし おまちください。', en: 'Yes, we can. Please wait a moment.' },
                { speaker: 'Customer', jp: 'おねがいします。', en: 'Please.' }
            ],
            question: { type: 'fillBlank', blankLine: 0, answer: 'プレゼントようの ほうそうは できますか。', options: ['プレゼントようの ほうそうは できますか。', 'ふくろを ください。', 'いくらですか。', 'べつのいろは ありますか。'] }
        }
    ],


    // ── Situation-Response Pairs (30) ──────────────────────────
    responses: [
        // Greetings
        {
            situation: 'Someone greets you in the morning',
            situationJp: 'おはようございます。',
            correctResponse: 'おはようございます。',
            correctResponseEn: 'Good morning.',
            distractors: ['こんばんは。', 'さようなら。', 'おやすみなさい。']
        },
        {
            situation: 'Someone says hello in the afternoon',
            situationJp: 'こんにちは。',
            correctResponse: 'こんにちは。',
            correctResponseEn: 'Hello.',
            distractors: ['おはようございます。', 'おやすみなさい。', 'いただきます。']
        },
        {
            situation: 'Someone says goodbye',
            situationJp: 'さようなら。',
            correctResponse: 'さようなら。',
            correctResponseEn: 'Goodbye.',
            distractors: ['こんにちは。', 'はじめまして。', 'いらっしゃいませ。']
        },
        {
            situation: 'Someone thanks you',
            situationJp: 'ありがとうございます。',
            correctResponse: 'いいえ、どういたしまして。',
            correctResponseEn: 'No, you are welcome.',
            distractors: ['ありがとうございます。', 'すみません。', 'ごめんなさい。']
        },
        {
            situation: 'Someone apologizes to you',
            situationJp: 'すみません。',
            correctResponse: 'だいじょうぶですよ。',
            correctResponseEn: 'It is okay.',
            distractors: ['すみません。', 'ごめんなさい。', 'ありがとうございます。']
        },
        {
            situation: 'You are about to start eating',
            situationJp: 'ごはんが できましたよ。',
            correctResponse: 'いただきます。',
            correctResponseEn: 'I will humbly receive this food.',
            distractors: ['ごちそうさまでした。', 'おいしいです。', 'おねがいします。']
        },
        {
            situation: 'You just finished eating',
            situationJp: 'もう おわりましたか。',
            correctResponse: 'ごちそうさまでした。',
            correctResponseEn: 'Thank you for the meal.',
            distractors: ['いただきます。', 'おいしいです。', 'もっと ください。']
        },
        {
            situation: 'Someone introduces themselves for the first time',
            situationJp: 'はじめまして。田中です。',
            correctResponse: 'はじめまして。どうぞよろしくおねがいします。',
            correctResponseEn: 'Nice to meet you. Pleased to make your acquaintance.',
            distractors: ['さようなら。', 'おひさしぶりです。', 'おつかれさまです。']
        },
        // Restaurant
        {
            situation: 'A waiter asks what you want to order',
            situationJp: 'ごちゅうもんは おきまりですか。',
            correctResponse: 'はい、カレーを おねがいします。',
            correctResponseEn: 'Yes, curry please.',
            distractors: ['いいえ、たべません。', 'おかいけいを おねがいします。', 'さようなら。']
        },
        {
            situation: 'You want to ask for the check at a restaurant',
            situationJp: '(You want the bill)',
            correctResponse: 'すみません、おかいけいを おねがいします。',
            correctResponseEn: 'Excuse me, the bill please.',
            distractors: ['メニューを ください。', 'いただきます。', 'ごちゅうもんは なんですか。']
        },
        {
            situation: 'You enter a restaurant and the staff greets you',
            situationJp: 'いらっしゃいませ。',
            correctResponse: '二人です。',
            correctResponseEn: 'Two people.',
            distractors: ['いらっしゃいませ。', 'さようなら。', 'こんにちは。']
        },
        {
            situation: 'You want to ask what a dish is',
            situationJp: '(Pointing at an item on the menu)',
            correctResponse: 'すみません、これは なんですか。',
            correctResponseEn: 'Excuse me, what is this?',
            distractors: ['これを ください。', 'おいしいですか。', 'いくらですか。']
        },
        {
            situation: 'You want to order water',
            situationJp: 'おのみものは いかがですか。',
            correctResponse: 'お水を ください。',
            correctResponseEn: 'Water, please.',
            distractors: ['いりません。', 'おかいけいを おねがいします。', 'メニューを ください。']
        },
        // Directions
        {
            situation: 'You want to ask where the station is',
            situationJp: '(You are lost)',
            correctResponse: 'すみません、えきは どこですか。',
            correctResponseEn: 'Excuse me, where is the station?',
            distractors: ['えきに いきたくないです。', 'えきは いくらですか。', 'えきは なんじですか。']
        },
        {
            situation: 'Someone gives you directions and you understand',
            situationJp: 'まっすぐ いって、みぎに まがってください。',
            correctResponse: 'わかりました。ありがとうございます。',
            correctResponseEn: 'I understand. Thank you.',
            distractors: ['わかりません。', 'もういちど おねがいします。', 'いやです。']
        },
        {
            situation: 'You want to know how far something is',
            situationJp: '(You want to know the distance)',
            correctResponse: 'ここから とおいですか。',
            correctResponseEn: 'Is it far from here?',
            distractors: ['ここは どこですか。', 'なんじですか。', 'いくらですか。']
        },
        {
            situation: 'You did not understand the directions',
            situationJp: 'あの しんごうを ひだりに...',
            correctResponse: 'すみません、もういちど おねがいします。',
            correctResponseEn: 'Excuse me, one more time please.',
            distractors: ['わかりました。', 'ありがとうございます。', 'だいじょうぶです。']
        },
        {
            situation: 'Someone asks if you need help finding something',
            situationJp: 'なにか おさがしですか。',
            correctResponse: 'はい、えきを さがしています。',
            correctResponseEn: 'Yes, I am looking for the station.',
            distractors: ['いいえ、げんきです。', 'さようなら。', 'おなかが すいています。']
        },
        // Shopping
        {
            situation: 'You want to know the price of something',
            situationJp: '(Pointing at an item)',
            correctResponse: 'すみません、これは いくらですか。',
            correctResponseEn: 'Excuse me, how much is this?',
            distractors: ['これは なんですか。', 'これは どこですか。', 'これを ください。']
        },
        {
            situation: 'You want to buy an item',
            situationJp: '二千円です。',
            correctResponse: 'じゃ、これを ください。',
            correctResponseEn: 'Then, I will take this please.',
            distractors: ['いりません。', 'たかいです。', 'さようなら。']
        },
        {
            situation: 'You want to try on clothes',
            situationJp: '(You found something you like)',
            correctResponse: 'しちゃくしても いいですか。',
            correctResponseEn: 'May I try it on?',
            distractors: ['これを ください。', 'いくらですか。', 'べつのいろは ありますか。']
        },
        {
            situation: 'You want to ask for a different size',
            situationJp: 'このサイズは ちょっと ちいさいです。',
            correctResponse: 'もう すこし おおきいのは ありますか。',
            correctResponseEn: 'Do you have something a little bigger?',
            distractors: ['もう すこし ちいさいのは ありますか。', 'やすいのは ありますか。', 'べつのいろは ありますか。']
        },
        {
            situation: 'You want to ask about payment',
            situationJp: 'ぜんぶで 五千円です。',
            correctResponse: 'クレジットカードで はらえますか。',
            correctResponseEn: 'Can I pay by credit card?',
            distractors: ['やすいですね。', 'いくらですか。', 'おつりを ください。']
        },
        {
            situation: 'A staff member asks if you need help',
            situationJp: 'いらっしゃいませ。なにか おさがしですか。',
            correctResponse: 'みているだけです。ありがとうございます。',
            correctResponseEn: 'I am just looking. Thank you.',
            distractors: ['いらっしゃいませ。', 'これを ください。', 'いくらですか。']
        },
        // Mixed everyday
        {
            situation: 'Someone asks how you are',
            situationJp: 'おげんきですか。',
            correctResponse: 'はい、おかげさまで。',
            correctResponseEn: 'Yes, thanks to you (I am fine).',
            distractors: ['いいえ、だめです。', 'さようなら。', 'すみません。']
        },
        {
            situation: 'You want someone to wait a moment',
            situationJp: '(Someone is rushing you)',
            correctResponse: 'ちょっと まってください。',
            correctResponseEn: 'Please wait a moment.',
            distractors: ['はやく してください。', 'もう いいです。', 'さようなら。']
        },
        {
            situation: 'You did not hear what someone said',
            situationJp: '(You missed what was said)',
            correctResponse: 'すみません、もういちど おねがいします。',
            correctResponseEn: 'Excuse me, one more time please.',
            distractors: ['わかりました。', 'だいじょうぶです。', 'いいです。']
        },
        {
            situation: 'You want to say you do not understand',
            situationJp: '(Something confusing was said)',
            correctResponse: 'すみません、わかりません。',
            correctResponseEn: 'Excuse me, I do not understand.',
            distractors: ['わかりました。', 'しっています。', 'もちろんです。']
        },
        {
            situation: 'You are leaving someone\'s home',
            situationJp: 'きょうは たのしかったです。',
            correctResponse: 'おじゃましました。',
            correctResponseEn: 'Thank you for having me (lit: I intruded).',
            distractors: ['ただいま。', 'おかえりなさい。', 'いらっしゃいませ。']
        },
        {
            situation: 'Someone compliments your Japanese',
            situationJp: '日本語が じょうずですね。',
            correctResponse: 'いいえ、まだまだです。',
            correctResponseEn: 'No, I still have a long way to go.',
            distractors: ['はい、じょうずです。', 'ありがとうございます。', 'もちろんです。']
        }
    ]
};
