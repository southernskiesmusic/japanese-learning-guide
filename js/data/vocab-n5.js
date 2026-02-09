/* ============================================================
   JLPT N5 Vocabulary Data
   ~200 common words across 13 categories + 40 sentences
   ============================================================ */

const VOCAB_N5 = [

    // ── Greetings (15) ──────────────────────────────────────
    { word: 'おはようございます', reading: 'おはようございます', meaning: 'good morning', category: 'greetings' },
    { word: 'こんにちは',         reading: 'こんにちは',         meaning: 'hello',        category: 'greetings' },
    { word: 'こんばんは',         reading: 'こんばんは',         meaning: 'good evening', category: 'greetings' },
    { word: 'さようなら',         reading: 'さようなら',         meaning: 'goodbye',      category: 'greetings' },
    { word: 'ありがとうございます', reading: 'ありがとうございます', meaning: 'thank you',   category: 'greetings' },
    { word: 'すみません',         reading: 'すみません',         meaning: 'excuse me',    category: 'greetings' },
    { word: 'ごめんなさい',       reading: 'ごめんなさい',       meaning: 'sorry',         category: 'greetings' },
    { word: 'はじめまして',       reading: 'はじめまして',       meaning: 'nice to meet you', category: 'greetings' },
    { word: 'おねがいします',     reading: 'おねがいします',     meaning: 'please',        category: 'greetings' },
    { word: 'いただきます',       reading: 'いただきます',       meaning: 'before eating', category: 'greetings' },
    { word: 'ごちそうさま',       reading: 'ごちそうさま',       meaning: 'after eating',  category: 'greetings' },
    { word: 'おやすみなさい',     reading: 'おやすみなさい',     meaning: 'goodnight',     category: 'greetings' },
    { word: 'いらっしゃいませ',   reading: 'いらっしゃいませ',   meaning: 'welcome (shop)', category: 'greetings' },
    { word: 'ただいま',           reading: 'ただいま',           meaning: "I'm home",      category: 'greetings' },
    { word: 'おかえりなさい',     reading: 'おかえりなさい',     meaning: 'welcome back',  category: 'greetings' },

    // ── Family (12) ─────────────────────────────────────────
    { word: '家族',     reading: 'かぞく',     meaning: 'family',         category: 'family' },
    { word: 'お父さん', reading: 'おとうさん', meaning: 'father',         category: 'family' },
    { word: 'お母さん', reading: 'おかあさん', meaning: 'mother',         category: 'family' },
    { word: '兄',       reading: 'あに',       meaning: 'older brother',  category: 'family' },
    { word: '姉',       reading: 'あね',       meaning: 'older sister',   category: 'family' },
    { word: '弟',       reading: 'おとうと',   meaning: 'younger brother', category: 'family' },
    { word: '妹',       reading: 'いもうと',   meaning: 'younger sister', category: 'family' },
    { word: '子供',     reading: 'こども',     meaning: 'child',          category: 'family' },
    { word: '赤ちゃん', reading: 'あかちゃん', meaning: 'baby',           category: 'family' },
    { word: '両親',     reading: 'りょうしん', meaning: 'parents',        category: 'family' },
    { word: '夫',       reading: 'おっと',     meaning: 'husband',        category: 'family' },
    { word: '妻',       reading: 'つま',       meaning: 'wife',           category: 'family' },

    // ── Food (20) ───────────────────────────────────────────
    { word: 'ご飯',     reading: 'ごはん',       meaning: 'rice; meal',   category: 'food' },
    { word: 'パン',     reading: 'ぱん',         meaning: 'bread',        category: 'food' },
    { word: '肉',       reading: 'にく',         meaning: 'meat',         category: 'food' },
    { word: '魚',       reading: 'さかな',       meaning: 'fish',         category: 'food' },
    { word: '野菜',     reading: 'やさい',       meaning: 'vegetables',   category: 'food' },
    { word: '果物',     reading: 'くだもの',     meaning: 'fruit',        category: 'food' },
    { word: '卵',       reading: 'たまご',       meaning: 'egg',          category: 'food' },
    { word: '牛乳',     reading: 'ぎゅうにゅう', meaning: 'milk',         category: 'food' },
    { word: '水',       reading: 'みず',         meaning: 'water',        category: 'food' },
    { word: 'お茶',     reading: 'おちゃ',       meaning: 'tea',          category: 'food' },
    { word: 'コーヒー', reading: 'こーひー',     meaning: 'coffee',       category: 'food' },
    { word: '砂糖',     reading: 'さとう',       meaning: 'sugar',        category: 'food' },
    { word: '塩',       reading: 'しお',         meaning: 'salt',         category: 'food' },
    { word: 'りんご',   reading: 'りんご',       meaning: 'apple',        category: 'food' },
    { word: 'みかん',   reading: 'みかん',       meaning: 'mandarin',     category: 'food' },
    { word: 'バナナ',   reading: 'ばなな',       meaning: 'banana',       category: 'food' },
    { word: '弁当',     reading: 'べんとう',     meaning: 'lunch box',    category: 'food' },
    { word: 'ラーメン', reading: 'らーめん',     meaning: 'ramen',        category: 'food' },
    { word: '寿司',     reading: 'すし',         meaning: 'sushi',        category: 'food' },
    { word: 'カレー',   reading: 'かれー',       meaning: 'curry',        category: 'food' },

    // ── Travel (15) ─────────────────────────────────────────
    { word: '駅',       reading: 'えき',           meaning: 'station',     category: 'travel' },
    { word: '電車',     reading: 'でんしゃ',       meaning: 'train',       category: 'travel' },
    { word: 'バス',     reading: 'ばす',           meaning: 'bus',         category: 'travel' },
    { word: '飛行機',   reading: 'ひこうき',       meaning: 'airplane',    category: 'travel' },
    { word: '切符',     reading: 'きっぷ',         meaning: 'ticket',      category: 'travel' },
    { word: '地図',     reading: 'ちず',           meaning: 'map',         category: 'travel' },
    { word: 'ホテル',   reading: 'ほてる',         meaning: 'hotel',       category: 'travel' },
    { word: '空港',     reading: 'くうこう',       meaning: 'airport',     category: 'travel' },
    { word: 'タクシー', reading: 'たくしー',       meaning: 'taxi',        category: 'travel' },
    { word: '道',       reading: 'みち',           meaning: 'road',        category: 'travel' },
    { word: '橋',       reading: 'はし',           meaning: 'bridge',      category: 'travel' },
    { word: '病院',     reading: 'びょういん',     meaning: 'hospital',    category: 'travel' },
    { word: '銀行',     reading: 'ぎんこう',       meaning: 'bank',        category: 'travel' },
    { word: '郵便局',   reading: 'ゆうびんきょく', meaning: 'post office', category: 'travel' },
    { word: '交番',     reading: 'こうばん',       meaning: 'police box',  category: 'travel' },

    // ── School (15) ─────────────────────────────────────────
    { word: '学校',   reading: 'がっこう',     meaning: 'school',         category: 'school' },
    { word: '先生',   reading: 'せんせい',     meaning: 'teacher',        category: 'school' },
    { word: '学生',   reading: 'がくせい',     meaning: 'student',        category: 'school' },
    { word: '教室',   reading: 'きょうしつ',   meaning: 'classroom',      category: 'school' },
    { word: '本',     reading: 'ほん',         meaning: 'book',           category: 'school' },
    { word: 'ノート', reading: 'のーと',       meaning: 'notebook',       category: 'school' },
    { word: '鉛筆',   reading: 'えんぴつ',     meaning: 'pencil',         category: 'school' },
    { word: 'ペン',   reading: 'ぺん',         meaning: 'pen',            category: 'school' },
    { word: '宿題',   reading: 'しゅくだい',   meaning: 'homework',       category: 'school' },
    { word: 'テスト', reading: 'てすと',       meaning: 'test',           category: 'school' },
    { word: '授業',   reading: 'じゅぎょう',   meaning: 'class; lesson',  category: 'school' },
    { word: '図書館', reading: 'としょかん',   meaning: 'library',        category: 'school' },
    { word: '大学',   reading: 'だいがく',     meaning: 'university',     category: 'school' },
    { word: '勉強',   reading: 'べんきょう',   meaning: 'study',          category: 'school' },
    { word: '質問',   reading: 'しつもん',     meaning: 'question',       category: 'school' },

    // ── Time (15) ───────────────────────────────────────────
    { word: '今日',   reading: 'きょう',       meaning: 'today',        category: 'time' },
    { word: '明日',   reading: 'あした',       meaning: 'tomorrow',     category: 'time' },
    { word: '昨日',   reading: 'きのう',       meaning: 'yesterday',    category: 'time' },
    { word: '今',     reading: 'いま',         meaning: 'now',          category: 'time' },
    { word: '朝',     reading: 'あさ',         meaning: 'morning',      category: 'time' },
    { word: '昼',     reading: 'ひる',         meaning: 'noon',         category: 'time' },
    { word: '夜',     reading: 'よる',         meaning: 'night',        category: 'time' },
    { word: '毎日',   reading: 'まいにち',     meaning: 'every day',    category: 'time' },
    { word: '毎週',   reading: 'まいしゅう',   meaning: 'every week',   category: 'time' },
    { word: '先週',   reading: 'せんしゅう',   meaning: 'last week',    category: 'time' },
    { word: '来週',   reading: 'らいしゅう',   meaning: 'next week',    category: 'time' },
    { word: '今月',   reading: 'こんげつ',     meaning: 'this month',   category: 'time' },
    { word: '来月',   reading: 'らいげつ',     meaning: 'next month',   category: 'time' },
    { word: '去年',   reading: 'きょねん',     meaning: 'last year',    category: 'time' },
    { word: '来年',   reading: 'らいねん',     meaning: 'next year',    category: 'time' },

    // ── Nature (10) ─────────────────────────────────────────
    { word: '山',   reading: 'やま',   meaning: 'mountain', category: 'nature' },
    { word: '川',   reading: 'かわ',   meaning: 'river',    category: 'nature' },
    { word: '海',   reading: 'うみ',   meaning: 'sea',      category: 'nature' },
    { word: '空',   reading: 'そら',   meaning: 'sky',      category: 'nature' },
    { word: '天気', reading: 'てんき', meaning: 'weather',  category: 'nature' },
    { word: '雨',   reading: 'あめ',   meaning: 'rain',     category: 'nature' },
    { word: '雪',   reading: 'ゆき',   meaning: 'snow',     category: 'nature' },
    { word: '風',   reading: 'かぜ',   meaning: 'wind',     category: 'nature' },
    { word: '花',   reading: 'はな',   meaning: 'flower',   category: 'nature' },
    { word: '木',   reading: 'き',     meaning: 'tree',     category: 'nature' },

    // ── Body (10) ───────────────────────────────────────────
    { word: '頭', reading: 'あたま',   meaning: 'head',          category: 'body' },
    { word: '目', reading: 'め',       meaning: 'eye',           category: 'body' },
    { word: '耳', reading: 'みみ',     meaning: 'ear',           category: 'body' },
    { word: '口', reading: 'くち',     meaning: 'mouth',         category: 'body' },
    { word: '手', reading: 'て',       meaning: 'hand',          category: 'body' },
    { word: '足', reading: 'あし',     meaning: 'foot; leg',     category: 'body' },
    { word: '体', reading: 'からだ',   meaning: 'body',          category: 'body' },
    { word: '顔', reading: 'かお',     meaning: 'face',          category: 'body' },
    { word: '歯', reading: 'は',       meaning: 'tooth',         category: 'body' },
    { word: '指', reading: 'ゆび',     meaning: 'finger',        category: 'body' },

    // ── Adjectives (25) ─────────────────────────────────────
    { word: '大きい',   reading: 'おおきい',   meaning: 'big',              category: 'adjective' },
    { word: '小さい',   reading: 'ちいさい',   meaning: 'small',            category: 'adjective' },
    { word: '新しい',   reading: 'あたらしい', meaning: 'new',              category: 'adjective' },
    { word: '古い',     reading: 'ふるい',     meaning: 'old',              category: 'adjective' },
    { word: '良い',     reading: 'いい',       meaning: 'good',             category: 'adjective' },
    { word: '悪い',     reading: 'わるい',     meaning: 'bad',              category: 'adjective' },
    { word: '高い',     reading: 'たかい',     meaning: 'expensive; tall',  category: 'adjective' },
    { word: '安い',     reading: 'やすい',     meaning: 'cheap',            category: 'adjective' },
    { word: '長い',     reading: 'ながい',     meaning: 'long',             category: 'adjective' },
    { word: '短い',     reading: 'みじかい',   meaning: 'short',            category: 'adjective' },
    { word: '暑い',     reading: 'あつい',     meaning: 'hot (weather)',    category: 'adjective' },
    { word: '寒い',     reading: 'さむい',     meaning: 'cold (weather)',   category: 'adjective' },
    { word: '熱い',     reading: 'あつい',     meaning: 'hot (touch)',      category: 'adjective' },
    { word: '冷たい',   reading: 'つめたい',   meaning: 'cold (touch)',     category: 'adjective' },
    { word: '早い',     reading: 'はやい',     meaning: 'early; fast',      category: 'adjective' },
    { word: '遅い',     reading: 'おそい',     meaning: 'late; slow',       category: 'adjective' },
    { word: '近い',     reading: 'ちかい',     meaning: 'near',             category: 'adjective' },
    { word: '遠い',     reading: 'とおい',     meaning: 'far',              category: 'adjective' },
    { word: '多い',     reading: 'おおい',     meaning: 'many',             category: 'adjective' },
    { word: '少ない',   reading: 'すくない',   meaning: 'few',              category: 'adjective' },
    { word: '楽しい',   reading: 'たのしい',   meaning: 'fun',              category: 'adjective' },
    { word: '難しい',   reading: 'むずかしい', meaning: 'difficult',        category: 'adjective' },
    { word: '易しい',   reading: 'やさしい',   meaning: 'easy',             category: 'adjective' },
    { word: '忙しい',   reading: 'いそがしい', meaning: 'busy',             category: 'adjective' },
    { word: '美味しい', reading: 'おいしい',   meaning: 'delicious',        category: 'adjective' },

    // ── Adverbs (12) ────────────────────────────────────────
    { word: 'とても',   reading: 'とても',     meaning: 'very',         category: 'adverb' },
    { word: 'たくさん', reading: 'たくさん',   meaning: 'many; much',   category: 'adverb' },
    { word: '少し',     reading: 'すこし',     meaning: 'a little',     category: 'adverb' },
    { word: 'もう',     reading: 'もう',       meaning: 'already',      category: 'adverb' },
    { word: 'まだ',     reading: 'まだ',       meaning: 'still; not yet', category: 'adverb' },
    { word: 'いつも',   reading: 'いつも',     meaning: 'always',       category: 'adverb' },
    { word: '時々',     reading: 'ときどき',   meaning: 'sometimes',    category: 'adverb' },
    { word: 'よく',     reading: 'よく',       meaning: 'often; well',  category: 'adverb' },
    { word: 'あまり',   reading: 'あまり',     meaning: 'not much',     category: 'adverb' },
    { word: '全然',     reading: 'ぜんぜん',   meaning: 'not at all',   category: 'adverb' },
    { word: 'たぶん',   reading: 'たぶん',     meaning: 'probably',     category: 'adverb' },
    { word: 'ゆっくり', reading: 'ゆっくり',   meaning: 'slowly',       category: 'adverb' },

    // ── Pronouns (10) ───────────────────────────────────────
    { word: '私',     reading: 'わたし',       meaning: 'I',              category: 'pronoun' },
    { word: 'あなた', reading: 'あなた',       meaning: 'you',            category: 'pronoun' },
    { word: '彼',     reading: 'かれ',         meaning: 'he',             category: 'pronoun' },
    { word: '彼女',   reading: 'かのじょ',     meaning: 'she',            category: 'pronoun' },
    { word: '私たち', reading: 'わたしたち',   meaning: 'we',             category: 'pronoun' },
    { word: 'これ',   reading: 'これ',         meaning: 'this',           category: 'pronoun' },
    { word: 'それ',   reading: 'それ',         meaning: 'that',           category: 'pronoun' },
    { word: 'あれ',   reading: 'あれ',         meaning: 'that over there', category: 'pronoun' },
    { word: 'ここ',   reading: 'ここ',         meaning: 'here',           category: 'pronoun' },
    { word: 'そこ',   reading: 'そこ',         meaning: 'there',          category: 'pronoun' },

    // ── Daily (20) ──────────────────────────────────────────
    { word: '家',       reading: 'いえ',       meaning: 'house',          category: 'daily' },
    { word: '部屋',     reading: 'へや',       meaning: 'room',           category: 'daily' },
    { word: 'ドア',     reading: 'どあ',       meaning: 'door',           category: 'daily' },
    { word: '窓',       reading: 'まど',       meaning: 'window',         category: 'daily' },
    { word: 'テーブル', reading: 'てーぶる',   meaning: 'table',          category: 'daily' },
    { word: '椅子',     reading: 'いす',       meaning: 'chair',          category: 'daily' },
    { word: '電話',     reading: 'でんわ',     meaning: 'telephone',      category: 'daily' },
    { word: '時計',     reading: 'とけい',     meaning: 'clock; watch',   category: 'daily' },
    { word: '傘',       reading: 'かさ',       meaning: 'umbrella',       category: 'daily' },
    { word: '鍵',       reading: 'かぎ',       meaning: 'key',            category: 'daily' },
    { word: '財布',     reading: 'さいふ',     meaning: 'wallet',         category: 'daily' },
    { word: '靴',       reading: 'くつ',       meaning: 'shoes',          category: 'daily' },
    { word: '服',       reading: 'ふく',       meaning: 'clothes',        category: 'daily' },
    { word: '帽子',     reading: 'ぼうし',     meaning: 'hat',            category: 'daily' },
    { word: '写真',     reading: 'しゃしん',   meaning: 'photo',          category: 'daily' },
    { word: '新聞',     reading: 'しんぶん',   meaning: 'newspaper',      category: 'daily' },
    { word: '映画',     reading: 'えいが',     meaning: 'movie',          category: 'daily' },
    { word: '音楽',     reading: 'おんがく',   meaning: 'music',          category: 'daily' },
    { word: '仕事',     reading: 'しごと',     meaning: 'work; job',      category: 'daily' },
    { word: '趣味',     reading: 'しゅみ',     meaning: 'hobby',          category: 'daily' },
];


/* ============================================================
   Fill-in-the-blank sentences (40)
   ============================================================ */

const VOCAB_SENTENCES = [
    // Food & Drink
    { sentence: '毎朝___を飲みます。',           blank: 'コーヒー', reading: 'こーひー',     meaning: 'I drink ___ every morning.',                   hint: 'coffee' },
    { sentence: '___に塩をかけます。',             blank: '卵',       reading: 'たまご',       meaning: 'I put salt on the ___.',                       hint: 'egg' },
    { sentence: '日本の___はとても美味しいです。', blank: '寿司',     reading: 'すし',         meaning: 'Japanese ___ is very delicious.',              hint: 'sushi' },
    { sentence: '___を食べてから学校に行きます。', blank: 'ご飯',     reading: 'ごはん',       meaning: 'I go to school after eating ___.',             hint: 'rice; meal' },
    { sentence: '冷たい___を一杯ください。',       blank: '水',       reading: 'みず',         meaning: 'Please give me a glass of cold ___.',          hint: 'water' },
    { sentence: '母は毎日___を作ります。',         blank: '弁当',     reading: 'べんとう',     meaning: 'My mother makes a ___ every day.',             hint: 'lunch box' },
    { sentence: '___にミルクを入れますか。',       blank: 'お茶',     reading: 'おちゃ',       meaning: 'Do you put milk in your ___?',                 hint: 'tea' },
    { sentence: 'スーパーで___を買いました。',     blank: '野菜',     reading: 'やさい',       meaning: 'I bought ___ at the supermarket.',             hint: 'vegetables' },

    // Travel & Places
    { sentence: '___で電車を待ちます。',           blank: '駅',       reading: 'えき',         meaning: 'I wait for the train at the ___.',             hint: 'station' },
    { sentence: '___に乗って会社に行きます。',     blank: 'バス',     reading: 'ばす',         meaning: 'I ride the ___ to go to work.',                hint: 'bus' },
    { sentence: '___で東京に行きました。',         blank: '飛行機',   reading: 'ひこうき',     meaning: 'I went to Tokyo by ___.',                      hint: 'airplane' },
    { sentence: '旅行の前に___を見ます。',         blank: '地図',     reading: 'ちず',         meaning: 'I look at the ___ before a trip.',             hint: 'map' },
    { sentence: '___でお金をおろします。',         blank: '銀行',     reading: 'ぎんこう',     meaning: 'I withdraw money at the ___.',                 hint: 'bank' },
    { sentence: '手紙を___に出しました。',         blank: '郵便局',   reading: 'ゆうびんきょく', meaning: 'I sent a letter at the ___.',                hint: 'post office' },

    // School & Study
    { sentence: '___で日本語を勉強しています。',   blank: '学校',     reading: 'がっこう',     meaning: 'I am studying Japanese at ___.',               hint: 'school' },
    { sentence: '___は優しいです。',               blank: '先生',     reading: 'せんせい',     meaning: 'The ___ is kind.',                             hint: 'teacher' },
    { sentence: '___を忘れました。',               blank: '宿題',     reading: 'しゅくだい',   meaning: 'I forgot my ___.',                             hint: 'homework' },
    { sentence: '___で本を借りました。',           blank: '図書館',   reading: 'としょかん',   meaning: 'I borrowed a book at the ___.',                hint: 'library' },
    { sentence: '明日___があります。',             blank: 'テスト',   reading: 'てすと',       meaning: 'There is a ___ tomorrow.',                     hint: 'test' },
    { sentence: '___を一生懸命します。',           blank: '勉強',     reading: 'べんきょう',   meaning: 'I ___ very hard.',                             hint: 'study' },

    // Time
    { sentence: '___は天気がいいです。',           blank: '今日',     reading: 'きょう',       meaning: 'The weather is nice ___.',                     hint: 'today' },
    { sentence: '___友達に会います。',             blank: '明日',     reading: 'あした',       meaning: 'I will meet my friend ___.',                   hint: 'tomorrow' },
    { sentence: '___早く起きました。',             blank: '朝',       reading: 'あさ',         meaning: 'I woke up early in the ___.',                  hint: 'morning' },
    { sentence: '___は静かです。',                 blank: '夜',       reading: 'よる',         meaning: 'The ___ is quiet.',                            hint: 'night' },

    // Nature
    { sentence: '___に登りました。',               blank: '山',       reading: 'やま',         meaning: 'I climbed a ___.',                             hint: 'mountain' },
    { sentence: '___で泳ぎたいです。',             blank: '海',       reading: 'うみ',         meaning: 'I want to swim in the ___.',                   hint: 'sea' },
    { sentence: '___がきれいですね。',             blank: '花',       reading: 'はな',         meaning: 'The ___ are beautiful, aren\'t they?',         hint: 'flower' },
    { sentence: '今日の___はどうですか。',         blank: '天気',     reading: 'てんき',       meaning: 'How is the ___ today?',                        hint: 'weather' },

    // Family
    { sentence: '___は料理が上手です。',           blank: 'お母さん', reading: 'おかあさん',   meaning: 'My ___ is good at cooking.',                   hint: 'mother' },
    { sentence: '___は会社で働いています。',       blank: 'お父さん', reading: 'おとうさん',   meaning: 'My ___ works at a company.',                   hint: 'father' },
    { sentence: '___はまだ小さいです。',           blank: '弟',       reading: 'おとうと',     meaning: 'My ___ is still small.',                       hint: 'younger brother' },

    // Adjectives
    { sentence: 'この部屋は___です。',             blank: '大きい',   reading: 'おおきい',     meaning: 'This room is ___.',                            hint: 'big' },
    { sentence: 'この本は___です。',               blank: '新しい',   reading: 'あたらしい',   meaning: 'This book is ___.',                            hint: 'new' },
    { sentence: '日本語は___です。',               blank: '難しい',   reading: 'むずかしい',   meaning: 'Japanese is ___.',                             hint: 'difficult' },
    { sentence: 'このケーキは___です。',           blank: '美味しい', reading: 'おいしい',     meaning: 'This cake is ___.',                            hint: 'delicious' },
    { sentence: '今日は___ですね。',               blank: '暑い',     reading: 'あつい',       meaning: 'It is ___ today, isn\'t it?',                  hint: 'hot (weather)' },

    // Daily life
    { sentence: '___を忘れないでください。',       blank: '鍵',       reading: 'かぎ',         meaning: 'Please don\'t forget the ___.',                hint: 'key' },
    { sentence: '___で友達と話しました。',         blank: '電話',     reading: 'でんわ',       meaning: 'I talked with my friend on the ___.',          hint: 'telephone' },
    { sentence: '___を見に行きましょう。',         blank: '映画',     reading: 'えいが',       meaning: 'Let\'s go see a ___.',                         hint: 'movie' },
    { sentence: '___を聞くのが好きです。',         blank: '音楽',     reading: 'おんがく',     meaning: 'I like listening to ___.',                      hint: 'music' },
];
