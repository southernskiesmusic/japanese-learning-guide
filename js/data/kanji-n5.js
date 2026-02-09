/* ============================================================
   JLPT N5 Kanji Data — 80 entries
   Each entry: { kanji, meaning, onyomi, kunyomi, examples[] }
   ============================================================ */

const KANJI_N5 = [

  // ── Numbers ──────────────────────────────────────────────
  {
    kanji: '一', meaning: 'one', onyomi: 'イチ', kunyomi: 'ひと(つ)',
    examples: [
      { word: '一人', reading: 'ひとり', meaning: 'one person / alone' },
      { word: '一月', reading: 'いちがつ', meaning: 'January' }
    ]
  },
  {
    kanji: '二', meaning: 'two', onyomi: 'ニ', kunyomi: 'ふた(つ)',
    examples: [
      { word: '二人', reading: 'ふたり', meaning: 'two people' },
      { word: '二月', reading: 'にがつ', meaning: 'February' }
    ]
  },
  {
    kanji: '三', meaning: 'three', onyomi: 'サン', kunyomi: 'み(つ)',
    examples: [
      { word: '三月', reading: 'さんがつ', meaning: 'March' },
      { word: '三つ', reading: 'みっつ', meaning: 'three (things)' }
    ]
  },
  {
    kanji: '四', meaning: 'four', onyomi: 'シ', kunyomi: 'よ(つ)',
    examples: [
      { word: '四月', reading: 'しがつ', meaning: 'April' },
      { word: '四つ', reading: 'よっつ', meaning: 'four (things)' }
    ]
  },
  {
    kanji: '五', meaning: 'five', onyomi: 'ゴ', kunyomi: 'いつ(つ)',
    examples: [
      { word: '五月', reading: 'ごがつ', meaning: 'May' },
      { word: '五つ', reading: 'いつつ', meaning: 'five (things)' }
    ]
  },
  {
    kanji: '六', meaning: 'six', onyomi: 'ロク', kunyomi: 'む(つ)',
    examples: [
      { word: '六月', reading: 'ろくがつ', meaning: 'June' },
      { word: '六つ', reading: 'むっつ', meaning: 'six (things)' }
    ]
  },
  {
    kanji: '七', meaning: 'seven', onyomi: 'シチ', kunyomi: 'なな(つ)',
    examples: [
      { word: '七月', reading: 'しちがつ', meaning: 'July' },
      { word: '七つ', reading: 'ななつ', meaning: 'seven (things)' }
    ]
  },
  {
    kanji: '八', meaning: 'eight', onyomi: 'ハチ', kunyomi: 'や(つ)',
    examples: [
      { word: '八月', reading: 'はちがつ', meaning: 'August' },
      { word: '八つ', reading: 'やっつ', meaning: 'eight (things)' }
    ]
  },
  {
    kanji: '九', meaning: 'nine', onyomi: 'キュウ', kunyomi: 'ここの(つ)',
    examples: [
      { word: '九月', reading: 'くがつ', meaning: 'September' },
      { word: '九つ', reading: 'ここのつ', meaning: 'nine (things)' }
    ]
  },
  {
    kanji: '十', meaning: 'ten', onyomi: 'ジュウ', kunyomi: 'とお',
    examples: [
      { word: '十月', reading: 'じゅうがつ', meaning: 'October' },
      { word: '十分', reading: 'じゅっぷん', meaning: 'ten minutes' }
    ]
  },
  {
    kanji: '百', meaning: 'hundred', onyomi: 'ヒャク', kunyomi: '',
    examples: [
      { word: '百円', reading: 'ひゃくえん', meaning: 'one hundred yen' },
      { word: '三百', reading: 'さんびゃく', meaning: 'three hundred' }
    ]
  },
  {
    kanji: '千', meaning: 'thousand', onyomi: 'セン', kunyomi: 'ち',
    examples: [
      { word: '千円', reading: 'せんえん', meaning: 'one thousand yen' },
      { word: '三千', reading: 'さんぜん', meaning: 'three thousand' }
    ]
  },
  {
    kanji: '万', meaning: 'ten thousand', onyomi: 'マン', kunyomi: '',
    examples: [
      { word: '一万', reading: 'いちまん', meaning: 'ten thousand' },
      { word: '万年筆', reading: 'まんねんひつ', meaning: 'fountain pen' }
    ]
  },
  {
    kanji: '円', meaning: 'yen / circle', onyomi: 'エン', kunyomi: 'まる(い)',
    examples: [
      { word: '百円', reading: 'ひゃくえん', meaning: 'one hundred yen' },
      { word: '円い', reading: 'まるい', meaning: 'round / circular' }
    ]
  },

  // ── Time ─────────────────────────────────────────────────
  {
    kanji: '年', meaning: 'year', onyomi: 'ネン', kunyomi: 'とし',
    examples: [
      { word: '今年', reading: 'ことし', meaning: 'this year' },
      { word: '来年', reading: 'らいねん', meaning: 'next year' }
    ]
  },
  {
    kanji: '月', meaning: 'month / moon', onyomi: 'ゲツ・ガツ', kunyomi: 'つき',
    examples: [
      { word: '月曜日', reading: 'げつようび', meaning: 'Monday' },
      { word: '今月', reading: 'こんげつ', meaning: 'this month' }
    ]
  },
  {
    kanji: '日', meaning: 'day / sun', onyomi: 'ニチ・ジツ', kunyomi: 'ひ・か',
    examples: [
      { word: '日曜日', reading: 'にちようび', meaning: 'Sunday' },
      { word: '毎日', reading: 'まいにち', meaning: 'every day' }
    ]
  },
  {
    kanji: '時', meaning: 'time / hour', onyomi: 'ジ', kunyomi: 'とき',
    examples: [
      { word: '時間', reading: 'じかん', meaning: 'time / hour' },
      { word: '時計', reading: 'とけい', meaning: 'clock / watch' }
    ]
  },
  {
    kanji: '分', meaning: 'minute / part', onyomi: 'ブン・フン', kunyomi: 'わ(かる)',
    examples: [
      { word: '五分', reading: 'ごふん', meaning: 'five minutes' },
      { word: '自分', reading: 'じぶん', meaning: 'oneself' }
    ]
  },
  {
    kanji: '半', meaning: 'half', onyomi: 'ハン', kunyomi: 'なか(ば)',
    examples: [
      { word: '半分', reading: 'はんぶん', meaning: 'half' },
      { word: '三時半', reading: 'さんじはん', meaning: 'half past three' }
    ]
  },

  // ── People & Size ────────────────────────────────────────
  {
    kanji: '人', meaning: 'person', onyomi: 'ジン・ニン', kunyomi: 'ひと',
    examples: [
      { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
      { word: '大人', reading: 'おとな', meaning: 'adult' }
    ]
  },
  {
    kanji: '子', meaning: 'child', onyomi: 'シ', kunyomi: 'こ',
    examples: [
      { word: '子供', reading: 'こども', meaning: 'child' },
      { word: '女の子', reading: 'おんなのこ', meaning: 'girl' }
    ]
  },
  {
    kanji: '女', meaning: 'woman', onyomi: 'ジョ', kunyomi: 'おんな',
    examples: [
      { word: '女性', reading: 'じょせい', meaning: 'woman / female' },
      { word: '女の人', reading: 'おんなのひと', meaning: 'woman' }
    ]
  },
  {
    kanji: '男', meaning: 'man', onyomi: 'ダン', kunyomi: 'おとこ',
    examples: [
      { word: '男性', reading: 'だんせい', meaning: 'man / male' },
      { word: '男の子', reading: 'おとこのこ', meaning: 'boy' }
    ]
  },
  {
    kanji: '大', meaning: 'big', onyomi: 'ダイ・タイ', kunyomi: 'おお(きい)',
    examples: [
      { word: '大学', reading: 'だいがく', meaning: 'university' },
      { word: '大きい', reading: 'おおきい', meaning: 'big / large' }
    ]
  },
  {
    kanji: '小', meaning: 'small', onyomi: 'ショウ', kunyomi: 'ちい(さい)・こ',
    examples: [
      { word: '小学校', reading: 'しょうがっこう', meaning: 'elementary school' },
      { word: '小さい', reading: 'ちいさい', meaning: 'small / little' }
    ]
  },
  {
    kanji: '中', meaning: 'middle / inside', onyomi: 'チュウ', kunyomi: 'なか',
    examples: [
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'middle school' },
      { word: '中国', reading: 'ちゅうごく', meaning: 'China' }
    ]
  },

  // ── Direction & Position ─────────────────────────────────
  {
    kanji: '上', meaning: 'up / above', onyomi: 'ジョウ', kunyomi: 'うえ・あ(がる)',
    examples: [
      { word: '上手', reading: 'じょうず', meaning: 'skillful / good at' },
      { word: '上げる', reading: 'あげる', meaning: 'to raise' }
    ]
  },
  {
    kanji: '下', meaning: 'down / below', onyomi: 'カ・ゲ', kunyomi: 'した・さ(がる)',
    examples: [
      { word: '下手', reading: 'へた', meaning: 'unskillful / bad at' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' }
    ]
  },
  {
    kanji: '左', meaning: 'left', onyomi: 'サ', kunyomi: 'ひだり',
    examples: [
      { word: '左手', reading: 'ひだりて', meaning: 'left hand' },
      { word: '左側', reading: 'ひだりがわ', meaning: 'left side' }
    ]
  },
  {
    kanji: '右', meaning: 'right', onyomi: 'ウ・ユウ', kunyomi: 'みぎ',
    examples: [
      { word: '右手', reading: 'みぎて', meaning: 'right hand' },
      { word: '右側', reading: 'みぎがわ', meaning: 'right side' }
    ]
  },
  {
    kanji: '前', meaning: 'before / front', onyomi: 'ゼン', kunyomi: 'まえ',
    examples: [
      { word: '名前', reading: 'なまえ', meaning: 'name' },
      { word: '午前', reading: 'ごぜん', meaning: 'morning / AM' }
    ]
  },
  {
    kanji: '後', meaning: 'after / behind', onyomi: 'ゴ・コウ', kunyomi: 'うし(ろ)・あと',
    examples: [
      { word: '午後', reading: 'ごご', meaning: 'afternoon / PM' },
      { word: '後ろ', reading: 'うしろ', meaning: 'behind / back' }
    ]
  },
  {
    kanji: '外', meaning: 'outside', onyomi: 'ガイ・ゲ', kunyomi: 'そと・はず(す)',
    examples: [
      { word: '外国', reading: 'がいこく', meaning: 'foreign country' },
      { word: '外国人', reading: 'がいこくじん', meaning: 'foreigner' }
    ]
  },
  {
    kanji: '内', meaning: 'inside / within', onyomi: 'ナイ', kunyomi: 'うち',
    examples: [
      { word: '案内', reading: 'あんない', meaning: 'guidance / information' },
      { word: '国内', reading: 'こくない', meaning: 'domestic / within the country' }
    ]
  },

  // ── Nature ───────────────────────────────────────────────
  {
    kanji: '山', meaning: 'mountain', onyomi: 'サン', kunyomi: 'やま',
    examples: [
      { word: '富士山', reading: 'ふじさん', meaning: 'Mt. Fuji' },
      { word: '山田', reading: 'やまだ', meaning: 'Yamada (surname)' }
    ]
  },
  {
    kanji: '川', meaning: 'river', onyomi: 'セン', kunyomi: 'かわ',
    examples: [
      { word: '川', reading: 'かわ', meaning: 'river' },
      { word: '小川', reading: 'おがわ', meaning: 'stream / Ogawa (surname)' }
    ]
  },
  {
    kanji: '田', meaning: 'rice field', onyomi: 'デン', kunyomi: 'た',
    examples: [
      { word: '田中', reading: 'たなか', meaning: 'Tanaka (surname)' },
      { word: '田んぼ', reading: 'たんぼ', meaning: 'rice paddy' }
    ]
  },
  {
    kanji: '天', meaning: 'heaven / sky', onyomi: 'テン', kunyomi: 'あめ・あま',
    examples: [
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '天ぷら', reading: 'てんぷら', meaning: 'tempura' }
    ]
  },
  {
    kanji: '気', meaning: 'spirit / energy', onyomi: 'キ・ケ', kunyomi: '',
    examples: [
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '元気', reading: 'げんき', meaning: 'healthy / energetic' }
    ]
  },
  {
    kanji: '水', meaning: 'water', onyomi: 'スイ', kunyomi: 'みず',
    examples: [
      { word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' },
      { word: 'お水', reading: 'おみず', meaning: 'water (polite)' }
    ]
  },
  {
    kanji: '火', meaning: 'fire', onyomi: 'カ', kunyomi: 'ひ',
    examples: [
      { word: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' }
    ]
  },
  {
    kanji: '土', meaning: 'earth / soil', onyomi: 'ド・ト', kunyomi: 'つち',
    examples: [
      { word: '土曜日', reading: 'どようび', meaning: 'Saturday' },
      { word: 'お土産', reading: 'おみやげ', meaning: 'souvenir' }
    ]
  },
  {
    kanji: '金', meaning: 'gold / money', onyomi: 'キン・コン', kunyomi: 'かね',
    examples: [
      { word: '金曜日', reading: 'きんようび', meaning: 'Friday' },
      { word: 'お金', reading: 'おかね', meaning: 'money' }
    ]
  },
  {
    kanji: '木', meaning: 'tree / wood', onyomi: 'モク・ボク', kunyomi: 'き・こ',
    examples: [
      { word: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
      { word: '木', reading: 'き', meaning: 'tree' }
    ]
  },
  {
    kanji: '花', meaning: 'flower', onyomi: 'カ', kunyomi: 'はな',
    examples: [
      { word: '花見', reading: 'はなみ', meaning: 'flower viewing' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' }
    ]
  },
  {
    kanji: '雨', meaning: 'rain', onyomi: 'ウ', kunyomi: 'あめ・あま',
    examples: [
      { word: '大雨', reading: 'おおあめ', meaning: 'heavy rain' },
      { word: '雨天', reading: 'うてん', meaning: 'rainy weather' }
    ]
  },
  {
    kanji: '電', meaning: 'electricity', onyomi: 'デン', kunyomi: '',
    examples: [
      { word: '電話', reading: 'でんわ', meaning: 'telephone' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' }
    ]
  },

  // ── School & Study ───────────────────────────────────────
  {
    kanji: '学', meaning: 'study / learning', onyomi: 'ガク', kunyomi: 'まな(ぶ)',
    examples: [
      { word: '学生', reading: 'がくせい', meaning: 'student' },
      { word: '大学', reading: 'だいがく', meaning: 'university' }
    ]
  },
  {
    kanji: '校', meaning: 'school', onyomi: 'コウ', kunyomi: '',
    examples: [
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '高校', reading: 'こうこう', meaning: 'high school' }
    ]
  },
  {
    kanji: '生', meaning: 'life / birth', onyomi: 'セイ・ショウ', kunyomi: 'い(きる)・う(まれる)',
    examples: [
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '学生', reading: 'がくせい', meaning: 'student' }
    ]
  },
  {
    kanji: '先', meaning: 'previous / ahead', onyomi: 'セン', kunyomi: 'さき',
    examples: [
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '先月', reading: 'せんげつ', meaning: 'last month' }
    ]
  },
  {
    kanji: '友', meaning: 'friend', onyomi: 'ユウ', kunyomi: 'とも',
    examples: [
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '友人', reading: 'ゆうじん', meaning: 'friend (formal)' }
    ]
  },
  {
    kanji: '本', meaning: 'book / origin', onyomi: 'ホン', kunyomi: 'もと',
    examples: [
      { word: '日本', reading: 'にほん', meaning: 'Japan' },
      { word: '本屋', reading: 'ほんや', meaning: 'bookstore' }
    ]
  },
  {
    kanji: '名', meaning: 'name', onyomi: 'メイ・ミョウ', kunyomi: 'な',
    examples: [
      { word: '名前', reading: 'なまえ', meaning: 'name' },
      { word: '有名', reading: 'ゆうめい', meaning: 'famous' }
    ]
  },

  // ── Language & Communication ─────────────────────────────
  {
    kanji: '語', meaning: 'language / word', onyomi: 'ゴ', kunyomi: 'かた(る)',
    examples: [
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese language' },
      { word: '英語', reading: 'えいご', meaning: 'English language' }
    ]
  },
  {
    kanji: '話', meaning: 'talk / story', onyomi: 'ワ', kunyomi: 'はな(す)・はなし',
    examples: [
      { word: '電話', reading: 'でんわ', meaning: 'telephone' },
      { word: '話す', reading: 'はなす', meaning: 'to speak / to talk' }
    ]
  },
  {
    kanji: '読', meaning: 'read', onyomi: 'ドク', kunyomi: 'よ(む)',
    examples: [
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '読書', reading: 'どくしょ', meaning: 'reading (books)' }
    ]
  },
  {
    kanji: '書', meaning: 'write', onyomi: 'ショ', kunyomi: 'か(く)',
    examples: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' }
    ]
  },
  {
    kanji: '聞', meaning: 'hear / ask / listen', onyomi: 'ブン・モン', kunyomi: 'き(く)',
    examples: [
      { word: '聞く', reading: 'きく', meaning: 'to hear / to listen / to ask' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' }
    ]
  },
  {
    kanji: '見', meaning: 'see / look', onyomi: 'ケン', kunyomi: 'み(る)',
    examples: [
      { word: '見る', reading: 'みる', meaning: 'to see / to watch' },
      { word: '花見', reading: 'はなみ', meaning: 'flower viewing' }
    ]
  },
  {
    kanji: '食', meaning: 'eat / food', onyomi: 'ショク', kunyomi: 'た(べる)',
    examples: [
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '食堂', reading: 'しょくどう', meaning: 'cafeteria / dining hall' }
    ]
  },
  {
    kanji: '飲', meaning: 'drink', onyomi: 'イン', kunyomi: 'の(む)',
    examples: [
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '飲み物', reading: 'のみもの', meaning: 'beverage / drink' }
    ]
  },

  // ── Movement ─────────────────────────────────────────────
  {
    kanji: '行', meaning: 'go / conduct', onyomi: 'コウ・ギョウ', kunyomi: 'い(く)・おこな(う)',
    examples: [
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '銀行', reading: 'ぎんこう', meaning: 'bank' }
    ]
  },
  {
    kanji: '来', meaning: 'come / next', onyomi: 'ライ', kunyomi: 'く(る)',
    examples: [
      { word: '来る', reading: 'くる', meaning: 'to come' },
      { word: '来年', reading: 'らいねん', meaning: 'next year' }
    ]
  },
  {
    kanji: '出', meaning: 'exit / put out', onyomi: 'シュツ', kunyomi: 'で(る)・だ(す)',
    examples: [
      { word: '出る', reading: 'でる', meaning: 'to go out / to exit' },
      { word: '出口', reading: 'でぐち', meaning: 'exit' }
    ]
  },
  {
    kanji: '入', meaning: 'enter / put in', onyomi: 'ニュウ', kunyomi: 'い(る)・はい(る)',
    examples: [
      { word: '入る', reading: 'はいる', meaning: 'to enter' },
      { word: '入口', reading: 'いりぐち', meaning: 'entrance' }
    ]
  },
  {
    kanji: '立', meaning: 'stand', onyomi: 'リツ', kunyomi: 'た(つ)',
    examples: [
      { word: '立つ', reading: 'たつ', meaning: 'to stand' },
      { word: '国立', reading: 'こくりつ', meaning: 'national / state-run' }
    ]
  },
  {
    kanji: '休', meaning: 'rest / holiday', onyomi: 'キュウ', kunyomi: 'やす(む)',
    examples: [
      { word: '休む', reading: 'やすむ', meaning: 'to rest / to take a day off' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'holiday / day off' }
    ]
  },

  // ── Places & Things ──────────────────────────────────────
  {
    kanji: '車', meaning: 'car / vehicle', onyomi: 'シャ', kunyomi: 'くるま',
    examples: [
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'automobile' }
    ]
  },
  {
    kanji: '駅', meaning: 'station', onyomi: 'エキ', kunyomi: '',
    examples: [
      { word: '駅', reading: 'えき', meaning: 'station' },
      { word: '駅前', reading: 'えきまえ', meaning: 'in front of the station' }
    ]
  },
  {
    kanji: '道', meaning: 'road / way', onyomi: 'ドウ', kunyomi: 'みち',
    examples: [
      { word: '道', reading: 'みち', meaning: 'road / path' },
      { word: '柔道', reading: 'じゅうどう', meaning: 'judo' }
    ]
  },
  {
    kanji: '店', meaning: 'shop / store', onyomi: 'テン', kunyomi: 'みせ',
    examples: [
      { word: 'お店', reading: 'おみせ', meaning: 'shop / store' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'cafe / coffee shop' }
    ]
  },
  {
    kanji: '国', meaning: 'country', onyomi: 'コク', kunyomi: 'くに',
    examples: [
      { word: '外国', reading: 'がいこく', meaning: 'foreign country' },
      { word: '中国', reading: 'ちゅうごく', meaning: 'China' }
    ]
  },
  {
    kanji: '会', meaning: 'meet / society', onyomi: 'カイ', kunyomi: 'あ(う)',
    examples: [
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' }
    ]
  },

  // ── Question & Time Words ────────────────────────────────
  {
    kanji: '何', meaning: 'what', onyomi: 'カ', kunyomi: 'なに・なん',
    examples: [
      { word: '何', reading: 'なに', meaning: 'what' },
      { word: '何時', reading: 'なんじ', meaning: 'what time' }
    ]
  },
  {
    kanji: '今', meaning: 'now / this', onyomi: 'コン・キン', kunyomi: 'いま',
    examples: [
      { word: '今日', reading: 'きょう', meaning: 'today' },
      { word: '今週', reading: 'こんしゅう', meaning: 'this week' }
    ]
  },

  // ── Adjectives ───────────────────────────────────────────
  {
    kanji: '新', meaning: 'new', onyomi: 'シン', kunyomi: 'あたら(しい)・あら(た)',
    examples: [
      { word: '新しい', reading: 'あたらしい', meaning: 'new' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' }
    ]
  },
  {
    kanji: '古', meaning: 'old (things)', onyomi: 'コ', kunyomi: 'ふる(い)',
    examples: [
      { word: '古い', reading: 'ふるい', meaning: 'old (not for people)' },
      { word: '中古', reading: 'ちゅうこ', meaning: 'secondhand / used' }
    ]
  },
  {
    kanji: '長', meaning: 'long / leader', onyomi: 'チョウ', kunyomi: 'なが(い)',
    examples: [
      { word: '長い', reading: 'ながい', meaning: 'long' },
      { word: '社長', reading: 'しゃちょう', meaning: 'company president' }
    ]
  },
  {
    kanji: '高', meaning: 'tall / expensive', onyomi: 'コウ', kunyomi: 'たか(い)',
    examples: [
      { word: '高い', reading: 'たかい', meaning: 'tall / expensive' },
      { word: '高校', reading: 'こうこう', meaning: 'high school' }
    ]
  },
  {
    kanji: '安', meaning: 'cheap / safe', onyomi: 'アン', kunyomi: 'やす(い)',
    examples: [
      { word: '安い', reading: 'やすい', meaning: 'cheap / inexpensive' },
      { word: '安心', reading: 'あんしん', meaning: 'relief / peace of mind' }
    ]
  },
  {
    kanji: '白', meaning: 'white', onyomi: 'ハク・ビャク', kunyomi: 'しろ(い)・しろ',
    examples: [
      { word: '白い', reading: 'しろい', meaning: 'white' },
      { word: '白人', reading: 'はくじん', meaning: 'white person / Caucasian' }
    ]
  },

  // ── Compass Directions ───────────────────────────────────
  {
    kanji: '北', meaning: 'north', onyomi: 'ホク', kunyomi: 'きた',
    examples: [
      { word: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' },
      { word: '北口', reading: 'きたぐち', meaning: 'north exit' }
    ]
  },
  {
    kanji: '南', meaning: 'south', onyomi: 'ナン', kunyomi: 'みなみ',
    examples: [
      { word: '南口', reading: 'みなみぐち', meaning: 'south exit' },
      { word: '南米', reading: 'なんべい', meaning: 'South America' }
    ]
  },
  {
    kanji: '東', meaning: 'east', onyomi: 'トウ', kunyomi: 'ひがし',
    examples: [
      { word: '東京', reading: 'とうきょう', meaning: 'Tokyo' },
      { word: '東口', reading: 'ひがしぐち', meaning: 'east exit' }
    ]
  },
  {
    kanji: '西', meaning: 'west', onyomi: 'セイ・サイ', kunyomi: 'にし',
    examples: [
      { word: '西口', reading: 'にしぐち', meaning: 'west exit' },
      { word: '東西', reading: 'とうざい', meaning: 'east and west' }
    ]
  }

];
