const PARTICLES_DATA = {
    particles: [
        {
            particle: 'は',
            roles: ['topic marker'],
            examples: [
                { jp: '私は学生です。', en: 'I am a student.' }
            ]
        },
        {
            particle: 'が',
            roles: ['subject marker'],
            examples: [
                { jp: '猫がいます。', en: 'There is a cat.' }
            ]
        },
        {
            particle: 'を',
            roles: ['object marker'],
            examples: [
                { jp: '本を読みます。', en: 'I read a book.' }
            ]
        },
        {
            particle: 'に',
            roles: ['direction', 'time', 'location'],
            examples: [
                { jp: '学校に行きます。', en: 'I go to school.' },
                { jp: '三時に起きます。', en: 'I wake up at 3.' }
            ]
        },
        {
            particle: 'で',
            roles: ['location of action', 'means'],
            examples: [
                { jp: '図書館で勉強します。', en: 'I study at the library.' },
                { jp: 'バスで行きます。', en: 'I go by bus.' }
            ]
        },
        {
            particle: 'へ',
            roles: ['direction'],
            examples: [
                { jp: '日本へ行きます。', en: 'I go to Japan.' }
            ]
        },
        {
            particle: 'と',
            roles: ['and', 'with'],
            examples: [
                { jp: '友達と遊びます。', en: 'I play with friends.' }
            ]
        },
        {
            particle: 'も',
            roles: ['also'],
            examples: [
                { jp: '私も学生です。', en: 'I am also a student.' }
            ]
        },
        {
            particle: 'の',
            roles: ['possessive', 'noun modifier'],
            examples: [
                { jp: '私の本', en: 'my book' }
            ]
        },
        {
            particle: 'から',
            roles: ['from', 'because'],
            examples: [
                { jp: '九時から始まります。', en: 'It starts from 9.' },
                { jp: '暑いから窓を開けます。', en: "Because it's hot, I open the window." }
            ]
        },
        {
            particle: 'まで',
            roles: ['until', 'to'],
            examples: [
                { jp: '五時まで勉強します。', en: 'I study until 5.' }
            ]
        },
        {
            particle: 'よ',
            roles: ['emphasis', 'new information'],
            examples: [
                { jp: 'これは美味しいですよ。', en: 'This is delicious, you know.' }
            ]
        },
        {
            particle: 'ね',
            roles: ['confirmation', 'agreement'],
            examples: [
                { jp: 'いい天気ですね。', en: "Nice weather, isn't it." }
            ]
        }
    ],

    sentences: [
        // は (topic marker) — 5 sentences
        { sentence: '私___学生です。', answer: 'は', english: 'I am a student.', hint: 'topic marker' },
        { sentence: '私___田中です。', answer: 'は', english: 'I am Tanaka.', hint: 'topic marker' },
        { sentence: 'これ___ペンです。', answer: 'は', english: 'This is a pen.', hint: 'topic marker' },
        { sentence: '明日___日曜日です。', answer: 'は', english: 'Tomorrow is Sunday.', hint: 'topic marker' },
        { sentence: '東京___大きいです。', answer: 'は', english: 'Tokyo is big.', hint: 'topic marker' },

        // が (subject marker) — 5 sentences
        { sentence: '猫___います。', answer: 'が', english: 'There is a cat.', hint: 'subject marker' },
        { sentence: '水___飲みたいです。', answer: 'が', english: 'I want to drink water.', hint: 'subject marker (desire)' },
        { sentence: '誰___来ましたか。', answer: 'が', english: 'Who came?', hint: 'subject marker (question word)' },
        { sentence: '日本語___好きです。', answer: 'が', english: 'I like Japanese.', hint: 'subject marker (feelings)' },
        { sentence: '雨___降っています。', answer: 'が', english: 'It is raining.', hint: 'subject marker' },

        // を (object marker) — 5 sentences
        { sentence: 'コーヒー___飲みます。', answer: 'を', english: 'I drink coffee.', hint: 'object marker' },
        { sentence: '音楽___聞きます。', answer: 'を', english: 'I listen to music.', hint: 'object marker' },
        { sentence: '本___読みます。', answer: 'を', english: 'I read a book.', hint: 'object marker' },
        { sentence: 'テレビ___見ます。', answer: 'を', english: 'I watch TV.', hint: 'object marker' },
        { sentence: '手紙___書きます。', answer: 'を', english: 'I write a letter.', hint: 'object marker' },

        // に (direction/time/location) — 6 sentences
        { sentence: '学校___行きます。', answer: 'に', english: 'I go to school.', hint: 'direction' },
        { sentence: '七時___起きます。', answer: 'に', english: 'I wake up at 7.', hint: 'time' },
        { sentence: '椅子___座ります。', answer: 'に', english: 'I sit on a chair.', hint: 'location (target)' },
        { sentence: '友達___会います。', answer: 'に', english: 'I meet my friend.', hint: 'target of action' },
        { sentence: '月曜日___テストがあります。', answer: 'に', english: 'There is a test on Monday.', hint: 'time' },
        { sentence: '駅___着きました。', answer: 'に', english: 'I arrived at the station.', hint: 'destination' },

        // で (location of action/means) — 5 sentences
        { sentence: '公園___走ります。', answer: 'で', english: 'I run in the park.', hint: 'location of action' },
        { sentence: '電車___来ました。', answer: 'で', english: 'I came by train.', hint: 'means of transport' },
        { sentence: '図書館___勉強します。', answer: 'で', english: 'I study at the library.', hint: 'location of action' },
        { sentence: '日本語___話してください。', answer: 'で', english: 'Please speak in Japanese.', hint: 'means (language)' },
        { sentence: '箸___食べます。', answer: 'で', english: 'I eat with chopsticks.', hint: 'means (tool)' },

        // へ (direction) — 4 sentences
        { sentence: '日本___行きます。', answer: 'へ', english: 'I go to Japan.', hint: 'direction (toward)' },
        { sentence: '北___向かいます。', answer: 'へ', english: 'I head north.', hint: 'direction (toward)' },
        { sentence: '海___行きたいです。', answer: 'へ', english: 'I want to go to the sea.', hint: 'direction (toward)' },
        { sentence: '会社___歩きます。', answer: 'へ', english: 'I walk toward the office.', hint: 'direction (toward)' },

        // と (and/with) — 5 sentences
        { sentence: '友達___映画を見ます。', answer: 'と', english: 'I watch a movie with friends.', hint: 'with (companion)' },
        { sentence: '犬___猫がいます。', answer: 'と', english: 'There are dogs and cats.', hint: 'and (listing)' },
        { sentence: '母___買い物に行きます。', answer: 'と', english: 'I go shopping with my mother.', hint: 'with (companion)' },
        { sentence: '先生___話しました。', answer: 'と', english: 'I talked with the teacher.', hint: 'with (companion)' },
        { sentence: 'りんご___みかんを買いました。', answer: 'と', english: 'I bought apples and oranges.', hint: 'and (listing)' },

        // も (also) — 5 sentences
        { sentence: '彼___日本人です。', answer: 'も', english: 'He is also Japanese.', hint: 'also' },
        { sentence: '私___行きたいです。', answer: 'も', english: 'I also want to go.', hint: 'also' },
        { sentence: 'これ___美味しいです。', answer: 'も', english: 'This is also delicious.', hint: 'also' },
        { sentence: '姉___学生です。', answer: 'も', english: 'My older sister is also a student.', hint: 'also' },
        { sentence: '日曜日___勉強します。', answer: 'も', english: 'I study on Sunday too.', hint: 'also' },

        // の (possessive/noun modifier) — 5 sentences
        { sentence: 'これは私___本です。', answer: 'の', english: 'This is my book.', hint: 'possessive' },
        { sentence: '日本___食べ物は美味しいです。', answer: 'の', english: 'Japanese food is delicious.', hint: 'noun modifier' },
        { sentence: '友達___名前は田中です。', answer: 'の', english: "My friend's name is Tanaka.", hint: 'possessive' },
        { sentence: '英語___先生は優しいです。', answer: 'の', english: 'The English teacher is kind.', hint: 'noun modifier' },
        { sentence: 'あれは誰___かばんですか。', answer: 'の', english: 'Whose bag is that?', hint: 'possessive' },

        // から (from/because) — 5 sentences
        { sentence: '九時___始まります。', answer: 'から', english: 'It starts from 9.', hint: 'from (time)' },
        { sentence: '東京___来ました。', answer: 'から', english: 'I came from Tokyo.', hint: 'from (place)' },
        { sentence: '暑い___窓を開けます。', answer: 'から', english: "Because it's hot, I open the window.", hint: 'because (reason)' },
        { sentence: '家___学校まで歩きます。', answer: 'から', english: 'I walk from home to school.', hint: 'from (starting point)' },
        { sentence: '疲れた___休みます。', answer: 'から', english: "Because I'm tired, I rest.", hint: 'because (reason)' },

        // まで (until/to) — 4 sentences
        { sentence: '五時___勉強します。', answer: 'まで', english: 'I study until 5.', hint: 'until (time)' },
        { sentence: '駅___歩きます。', answer: 'まで', english: 'I walk to the station.', hint: 'to (destination/extent)' },
        { sentence: '三時___五時___勉強します。', answer: 'から', english: 'I study from 3 to 5.', hint: 'from (paired with まで)' },
        { sentence: '金曜日___待ちます。', answer: 'まで', english: 'I wait until Friday.', hint: 'until (time)' },

        // よ (emphasis/new info) — 3 sentences
        { sentence: '明日テストがあります___。', answer: 'よ', english: 'There is a test tomorrow, you know!', hint: 'emphasis (new info)' },
        { sentence: 'この映画は面白いです___。', answer: 'よ', english: 'This movie is interesting!', hint: 'emphasis (new info)' },
        { sentence: '気をつけてください___。', answer: 'よ', english: 'Please be careful!', hint: 'emphasis (warning)' },

        // ね (confirmation/agreement) — 3 sentences
        { sentence: 'いい天気です___。', answer: 'ね', english: "Nice weather, isn't it.", hint: 'confirmation' },
        { sentence: 'この料理は美味しいです___。', answer: 'ね', english: "This food is delicious, isn't it.", hint: 'agreement' },
        { sentence: '日本語は難しいです___。', answer: 'ね', english: "Japanese is difficult, isn't it.", hint: 'seeking agreement' }
    ]
};
