const HIRAGANA_DATA = {

    // ===== Basic 46 (Gojuuon) =====
    basic: [
        // a-row
        { kana: 'あ', romaji: 'a',   row: 'a' },
        { kana: 'い', romaji: 'i',   row: 'a' },
        { kana: 'う', romaji: 'u',   row: 'a' },
        { kana: 'え', romaji: 'e',   row: 'a' },
        { kana: 'お', romaji: 'o',   row: 'a' },

        // ka-row
        { kana: 'か', romaji: 'ka',  row: 'ka' },
        { kana: 'き', romaji: 'ki',  row: 'ka' },
        { kana: 'く', romaji: 'ku',  row: 'ka' },
        { kana: 'け', romaji: 'ke',  row: 'ka' },
        { kana: 'こ', romaji: 'ko',  row: 'ka' },

        // sa-row
        { kana: 'さ', romaji: 'sa',  row: 'sa' },
        { kana: 'し', romaji: 'shi', row: 'sa' },
        { kana: 'す', romaji: 'su',  row: 'sa' },
        { kana: 'せ', romaji: 'se',  row: 'sa' },
        { kana: 'そ', romaji: 'so',  row: 'sa' },

        // ta-row
        { kana: 'た', romaji: 'ta',  row: 'ta' },
        { kana: 'ち', romaji: 'chi', row: 'ta' },
        { kana: 'つ', romaji: 'tsu', row: 'ta' },
        { kana: 'て', romaji: 'te',  row: 'ta' },
        { kana: 'と', romaji: 'to',  row: 'ta' },

        // na-row
        { kana: 'な', romaji: 'na',  row: 'na' },
        { kana: 'に', romaji: 'ni',  row: 'na' },
        { kana: 'ぬ', romaji: 'nu',  row: 'na' },
        { kana: 'ね', romaji: 'ne',  row: 'na' },
        { kana: 'の', romaji: 'no',  row: 'na' },

        // ha-row
        { kana: 'は', romaji: 'ha',  row: 'ha' },
        { kana: 'ひ', romaji: 'hi',  row: 'ha' },
        { kana: 'ふ', romaji: 'fu',  row: 'ha' },
        { kana: 'へ', romaji: 'he',  row: 'ha' },
        { kana: 'ほ', romaji: 'ho',  row: 'ha' },

        // ma-row
        { kana: 'ま', romaji: 'ma',  row: 'ma' },
        { kana: 'み', romaji: 'mi',  row: 'ma' },
        { kana: 'む', romaji: 'mu',  row: 'ma' },
        { kana: 'め', romaji: 'me',  row: 'ma' },
        { kana: 'も', romaji: 'mo',  row: 'ma' },

        // ya-row
        { kana: 'や', romaji: 'ya',  row: 'ya' },
        { kana: 'ゆ', romaji: 'yu',  row: 'ya' },
        { kana: 'よ', romaji: 'yo',  row: 'ya' },

        // ra-row
        { kana: 'ら', romaji: 'ra',  row: 'ra' },
        { kana: 'り', romaji: 'ri',  row: 'ra' },
        { kana: 'る', romaji: 'ru',  row: 'ra' },
        { kana: 'れ', romaji: 're',  row: 'ra' },
        { kana: 'ろ', romaji: 'ro',  row: 'ra' },

        // wa-row
        { kana: 'わ', romaji: 'wa',  row: 'wa' },
        { kana: 'を', romaji: 'wo',  row: 'wa' },

        // n
        { kana: 'ん', romaji: 'n',   row: 'n' }
    ],

    // ===== Dakuten & Handakuten 25 =====
    dakuten: [
        // ga-row
        { kana: 'が', romaji: 'ga',  row: 'ga' },
        { kana: 'ぎ', romaji: 'gi',  row: 'ga' },
        { kana: 'ぐ', romaji: 'gu',  row: 'ga' },
        { kana: 'げ', romaji: 'ge',  row: 'ga' },
        { kana: 'ご', romaji: 'go',  row: 'ga' },

        // za-row
        { kana: 'ざ', romaji: 'za',  row: 'za' },
        { kana: 'じ', romaji: 'ji',  row: 'za' },
        { kana: 'ず', romaji: 'zu',  row: 'za' },
        { kana: 'ぜ', romaji: 'ze',  row: 'za' },
        { kana: 'ぞ', romaji: 'zo',  row: 'za' },

        // da-row
        { kana: 'だ', romaji: 'da',  row: 'da' },
        { kana: 'ぢ', romaji: 'ji',  row: 'da' },
        { kana: 'づ', romaji: 'zu',  row: 'da' },
        { kana: 'で', romaji: 'de',  row: 'da' },
        { kana: 'ど', romaji: 'do',  row: 'da' },

        // ba-row
        { kana: 'ば', romaji: 'ba',  row: 'ba' },
        { kana: 'び', romaji: 'bi',  row: 'ba' },
        { kana: 'ぶ', romaji: 'bu',  row: 'ba' },
        { kana: 'べ', romaji: 'be',  row: 'ba' },
        { kana: 'ぼ', romaji: 'bo',  row: 'ba' },

        // pa-row (handakuten)
        { kana: 'ぱ', romaji: 'pa',  row: 'pa' },
        { kana: 'ぴ', romaji: 'pi',  row: 'pa' },
        { kana: 'ぷ', romaji: 'pu',  row: 'pa' },
        { kana: 'ぺ', romaji: 'pe',  row: 'pa' },
        { kana: 'ぽ', romaji: 'po',  row: 'pa' }
    ],

    // ===== Combination Characters 33 (Youon) =====
    combos: [
        // ki + ya/yu/yo
        { kana: 'きゃ', romaji: 'kya', row: 'kya' },
        { kana: 'きゅ', romaji: 'kyu', row: 'kya' },
        { kana: 'きょ', romaji: 'kyo', row: 'kya' },

        // shi + ya/yu/yo
        { kana: 'しゃ', romaji: 'sha', row: 'sha' },
        { kana: 'しゅ', romaji: 'shu', row: 'sha' },
        { kana: 'しょ', romaji: 'sho', row: 'sha' },

        // chi + ya/yu/yo
        { kana: 'ちゃ', romaji: 'cha', row: 'cha' },
        { kana: 'ちゅ', romaji: 'chu', row: 'cha' },
        { kana: 'ちょ', romaji: 'cho', row: 'cha' },

        // ni + ya/yu/yo
        { kana: 'にゃ', romaji: 'nya', row: 'nya' },
        { kana: 'にゅ', romaji: 'nyu', row: 'nya' },
        { kana: 'にょ', romaji: 'nyo', row: 'nya' },

        // hi + ya/yu/yo
        { kana: 'ひゃ', romaji: 'hya', row: 'hya' },
        { kana: 'ひゅ', romaji: 'hyu', row: 'hya' },
        { kana: 'ひょ', romaji: 'hyo', row: 'hya' },

        // mi + ya/yu/yo
        { kana: 'みゃ', romaji: 'mya', row: 'mya' },
        { kana: 'みゅ', romaji: 'myu', row: 'mya' },
        { kana: 'みょ', romaji: 'myo', row: 'mya' },

        // ri + ya/yu/yo
        { kana: 'りゃ', romaji: 'rya', row: 'rya' },
        { kana: 'りゅ', romaji: 'ryu', row: 'rya' },
        { kana: 'りょ', romaji: 'ryo', row: 'rya' },

        // gi + ya/yu/yo
        { kana: 'ぎゃ', romaji: 'gya', row: 'gya' },
        { kana: 'ぎゅ', romaji: 'gyu', row: 'gya' },
        { kana: 'ぎょ', romaji: 'gyo', row: 'gya' },

        // ji + ya/yu/yo
        { kana: 'じゃ', romaji: 'ja',  row: 'ja' },
        { kana: 'じゅ', romaji: 'ju',  row: 'ja' },
        { kana: 'じょ', romaji: 'jo',  row: 'ja' },

        // bi + ya/yu/yo
        { kana: 'びゃ', romaji: 'bya', row: 'bya' },
        { kana: 'びゅ', romaji: 'byu', row: 'bya' },
        { kana: 'びょ', romaji: 'byo', row: 'bya' },

        // pi + ya/yu/yo
        { kana: 'ぴゃ', romaji: 'pya', row: 'pya' },
        { kana: 'ぴゅ', romaji: 'pyu', row: 'pya' },
        { kana: 'ぴょ', romaji: 'pyo', row: 'pya' }
    ]
};
