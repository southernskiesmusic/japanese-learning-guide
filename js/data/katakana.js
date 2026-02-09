const KATAKANA_DATA = {
    basic: [
        // a-row
        { kana: 'ア', romaji: 'a',   row: 'a' },
        { kana: 'イ', romaji: 'i',   row: 'a' },
        { kana: 'ウ', romaji: 'u',   row: 'a' },
        { kana: 'エ', romaji: 'e',   row: 'a' },
        { kana: 'オ', romaji: 'o',   row: 'a' },
        // ka-row
        { kana: 'カ', romaji: 'ka',  row: 'ka' },
        { kana: 'キ', romaji: 'ki',  row: 'ka' },
        { kana: 'ク', romaji: 'ku',  row: 'ka' },
        { kana: 'ケ', romaji: 'ke',  row: 'ka' },
        { kana: 'コ', romaji: 'ko',  row: 'ka' },
        // sa-row
        { kana: 'サ', romaji: 'sa',  row: 'sa' },
        { kana: 'シ', romaji: 'shi', row: 'sa' },
        { kana: 'ス', romaji: 'su',  row: 'sa' },
        { kana: 'セ', romaji: 'se',  row: 'sa' },
        { kana: 'ソ', romaji: 'so',  row: 'sa' },
        // ta-row
        { kana: 'タ', romaji: 'ta',  row: 'ta' },
        { kana: 'チ', romaji: 'chi', row: 'ta' },
        { kana: 'ツ', romaji: 'tsu', row: 'ta' },
        { kana: 'テ', romaji: 'te',  row: 'ta' },
        { kana: 'ト', romaji: 'to',  row: 'ta' },
        // na-row
        { kana: 'ナ', romaji: 'na',  row: 'na' },
        { kana: 'ニ', romaji: 'ni',  row: 'na' },
        { kana: 'ヌ', romaji: 'nu',  row: 'na' },
        { kana: 'ネ', romaji: 'ne',  row: 'na' },
        { kana: 'ノ', romaji: 'no',  row: 'na' },
        // ha-row
        { kana: 'ハ', romaji: 'ha',  row: 'ha' },
        { kana: 'ヒ', romaji: 'hi',  row: 'ha' },
        { kana: 'フ', romaji: 'fu',  row: 'ha' },
        { kana: 'ヘ', romaji: 'he',  row: 'ha' },
        { kana: 'ホ', romaji: 'ho',  row: 'ha' },
        // ma-row
        { kana: 'マ', romaji: 'ma',  row: 'ma' },
        { kana: 'ミ', romaji: 'mi',  row: 'ma' },
        { kana: 'ム', romaji: 'mu',  row: 'ma' },
        { kana: 'メ', romaji: 'me',  row: 'ma' },
        { kana: 'モ', romaji: 'mo',  row: 'ma' },
        // ya-row
        { kana: 'ヤ', romaji: 'ya',  row: 'ya' },
        { kana: 'ユ', romaji: 'yu',  row: 'ya' },
        { kana: 'ヨ', romaji: 'yo',  row: 'ya' },
        // ra-row
        { kana: 'ラ', romaji: 'ra',  row: 'ra' },
        { kana: 'リ', romaji: 'ri',  row: 'ra' },
        { kana: 'ル', romaji: 'ru',  row: 'ra' },
        { kana: 'レ', romaji: 're',  row: 'ra' },
        { kana: 'ロ', romaji: 'ro',  row: 'ra' },
        // wa-row
        { kana: 'ワ', romaji: 'wa',  row: 'wa' },
        { kana: 'ヲ', romaji: 'wo',  row: 'wa' },
        // n
        { kana: 'ン', romaji: 'n',   row: 'n' }
    ],

    dakuten: [
        // ga-row
        { kana: 'ガ', romaji: 'ga',  row: 'ga' },
        { kana: 'ギ', romaji: 'gi',  row: 'ga' },
        { kana: 'グ', romaji: 'gu',  row: 'ga' },
        { kana: 'ゲ', romaji: 'ge',  row: 'ga' },
        { kana: 'ゴ', romaji: 'go',  row: 'ga' },
        // za-row
        { kana: 'ザ', romaji: 'za',  row: 'za' },
        { kana: 'ジ', romaji: 'ji',  row: 'za' },
        { kana: 'ズ', romaji: 'zu',  row: 'za' },
        { kana: 'ゼ', romaji: 'ze',  row: 'za' },
        { kana: 'ゾ', romaji: 'zo',  row: 'za' },
        // da-row
        { kana: 'ダ', romaji: 'da',  row: 'da' },
        { kana: 'ヂ', romaji: 'di',  row: 'da' },
        { kana: 'ヅ', romaji: 'du',  row: 'da' },
        { kana: 'デ', romaji: 'de',  row: 'da' },
        { kana: 'ド', romaji: 'do',  row: 'da' },
        // ba-row
        { kana: 'バ', romaji: 'ba',  row: 'ba' },
        { kana: 'ビ', romaji: 'bi',  row: 'ba' },
        { kana: 'ブ', romaji: 'bu',  row: 'ba' },
        { kana: 'ベ', romaji: 'be',  row: 'ba' },
        { kana: 'ボ', romaji: 'bo',  row: 'ba' },
        // pa-row
        { kana: 'パ', romaji: 'pa',  row: 'pa' },
        { kana: 'ピ', romaji: 'pi',  row: 'pa' },
        { kana: 'プ', romaji: 'pu',  row: 'pa' },
        { kana: 'ペ', romaji: 'pe',  row: 'pa' },
        { kana: 'ポ', romaji: 'po',  row: 'pa' }
    ],

    combos: [
        // kya-row
        { kana: 'キャ', romaji: 'kya', row: 'kya' },
        { kana: 'キュ', romaji: 'kyu', row: 'kya' },
        { kana: 'キョ', romaji: 'kyo', row: 'kya' },
        // sha-row
        { kana: 'シャ', romaji: 'sha', row: 'sha' },
        { kana: 'シュ', romaji: 'shu', row: 'sha' },
        { kana: 'ショ', romaji: 'sho', row: 'sha' },
        // cha-row
        { kana: 'チャ', romaji: 'cha', row: 'cha' },
        { kana: 'チュ', romaji: 'chu', row: 'cha' },
        { kana: 'チョ', romaji: 'cho', row: 'cha' },
        // nya-row
        { kana: 'ニャ', romaji: 'nya', row: 'nya' },
        { kana: 'ニュ', romaji: 'nyu', row: 'nya' },
        { kana: 'ニョ', romaji: 'nyo', row: 'nya' },
        // hya-row
        { kana: 'ヒャ', romaji: 'hya', row: 'hya' },
        { kana: 'ヒュ', romaji: 'hyu', row: 'hya' },
        { kana: 'ヒョ', romaji: 'hyo', row: 'hya' },
        // mya-row
        { kana: 'ミャ', romaji: 'mya', row: 'mya' },
        { kana: 'ミュ', romaji: 'myu', row: 'mya' },
        { kana: 'ミョ', romaji: 'myo', row: 'mya' },
        // rya-row
        { kana: 'リャ', romaji: 'rya', row: 'rya' },
        { kana: 'リュ', romaji: 'ryu', row: 'rya' },
        { kana: 'リョ', romaji: 'ryo', row: 'rya' },
        // gya-row
        { kana: 'ギャ', romaji: 'gya', row: 'gya' },
        { kana: 'ギュ', romaji: 'gyu', row: 'gya' },
        { kana: 'ギョ', romaji: 'gyo', row: 'gya' },
        // ja-row
        { kana: 'ジャ', romaji: 'ja',  row: 'ja' },
        { kana: 'ジュ', romaji: 'ju',  row: 'ja' },
        { kana: 'ジョ', romaji: 'jo',  row: 'ja' },
        // bya-row
        { kana: 'ビャ', romaji: 'bya', row: 'bya' },
        { kana: 'ビュ', romaji: 'byu', row: 'bya' },
        { kana: 'ビョ', romaji: 'byo', row: 'bya' },
        // pya-row
        { kana: 'ピャ', romaji: 'pya', row: 'pya' },
        { kana: 'ピュ', romaji: 'pyu', row: 'pya' },
        { kana: 'ピョ', romaji: 'pyo', row: 'pya' }
    ]
};
