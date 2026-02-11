/* ============================================================
   Japanese Numbers, Counters, Time & Date Data
   Comprehensive reference for the NUM activity and lessons
   ============================================================ */

const NUMBERS_DATA = {

    // ── Basic numbers 0-10 ────────────────────────────────────
    basic: [
        { number: 0,  kanji: '零',  reading: 'れい/ゼロ',       romaji: 'rei/zero' },
        { number: 1,  kanji: '一',  reading: 'いち',             romaji: 'ichi' },
        { number: 2,  kanji: '二',  reading: 'に',               romaji: 'ni' },
        { number: 3,  kanji: '三',  reading: 'さん',             romaji: 'san' },
        { number: 4,  kanji: '四',  reading: 'し/よん',          romaji: 'shi/yon' },
        { number: 5,  kanji: '五',  reading: 'ご',               romaji: 'go' },
        { number: 6,  kanji: '六',  reading: 'ろく',             romaji: 'roku' },
        { number: 7,  kanji: '七',  reading: 'しち/なな',        romaji: 'shichi/nana' },
        { number: 8,  kanji: '八',  reading: 'はち',             romaji: 'hachi' },
        { number: 9,  kanji: '九',  reading: 'きゅう/く',        romaji: 'kyuu/ku' },
        { number: 10, kanji: '十',  reading: 'じゅう',           romaji: 'juu' }
    ],

    // ── Teens (11-19) ─────────────────────────────────────────
    teens: [
        { number: 11, reading: 'じゅういち',       romaji: 'juuichi' },
        { number: 12, reading: 'じゅうに',         romaji: 'juuni' },
        { number: 13, reading: 'じゅうさん',       romaji: 'juusan' },
        { number: 14, reading: 'じゅうよん',       romaji: 'juuyon' },
        { number: 15, reading: 'じゅうご',         romaji: 'juugo' },
        { number: 16, reading: 'じゅうろく',       romaji: 'juuroku' },
        { number: 17, reading: 'じゅうなな',       romaji: 'juunana' },
        { number: 18, reading: 'じゅうはち',       romaji: 'juuhachi' },
        { number: 19, reading: 'じゅうきゅう',     romaji: 'juukyuu' }
    ],

    // ── Tens (20-90) ──────────────────────────────────────────
    tens: [
        { number: 20, reading: 'にじゅう',         romaji: 'nijuu' },
        { number: 30, reading: 'さんじゅう',       romaji: 'sanjuu' },
        { number: 40, reading: 'よんじゅう',       romaji: 'yonjuu' },
        { number: 50, reading: 'ごじゅう',         romaji: 'gojuu' },
        { number: 60, reading: 'ろくじゅう',       romaji: 'rokujuu' },
        { number: 70, reading: 'ななじゅう',       romaji: 'nanajuu' },
        { number: 80, reading: 'はちじゅう',       romaji: 'hachijuu' },
        { number: 90, reading: 'きゅうじゅう',     romaji: 'kyuujuu' }
    ],

    // ── Hundreds (100-900) ────────────────────────────────────
    // Irregulars: 300=さんびゃく, 600=ろっぴゃく, 800=はっぴゃく
    hundreds: [
        { number: 100, reading: 'ひゃく',           romaji: 'hyaku' },
        { number: 200, reading: 'にひゃく',         romaji: 'nihyaku' },
        { number: 300, reading: 'さんびゃく',       romaji: 'sanbyaku',   irregular: true },
        { number: 400, reading: 'よんひゃく',       romaji: 'yonhyaku' },
        { number: 500, reading: 'ごひゃく',         romaji: 'gohyaku' },
        { number: 600, reading: 'ろっぴゃく',       romaji: 'roppyaku',   irregular: true },
        { number: 700, reading: 'ななひゃく',       romaji: 'nanahyaku' },
        { number: 800, reading: 'はっぴゃく',       romaji: 'happyaku',   irregular: true },
        { number: 900, reading: 'きゅうひゃく',     romaji: 'kyuuhyaku' }
    ],

    // ── Thousands (1000-9000) ─────────────────────────────────
    // Irregulars: 3000=さんぜん, 8000=はっせん
    thousands: [
        { number: 1000, reading: 'せん',             romaji: 'sen' },
        { number: 2000, reading: 'にせん',           romaji: 'nisen' },
        { number: 3000, reading: 'さんぜん',         romaji: 'sanzen',    irregular: true },
        { number: 4000, reading: 'よんせん',         romaji: 'yonsen' },
        { number: 5000, reading: 'ごせん',           romaji: 'gosen' },
        { number: 6000, reading: 'ろくせん',         romaji: 'rokusen' },
        { number: 7000, reading: 'ななせん',         romaji: 'nanasen' },
        { number: 8000, reading: 'はっせん',         romaji: 'hassen',    irregular: true },
        { number: 9000, reading: 'きゅうせん',       romaji: 'kyuusen' }
    ],

    // ── Counter words ─────────────────────────────────────────
    counters: [
        {
            counter: 'つ',
            name: 'General counter',
            description: 'General-purpose (native Japanese). Works for almost anything.',
            items: [
                { count: 1,  reading: 'ひとつ',     romaji: 'hitotsu' },
                { count: 2,  reading: 'ふたつ',     romaji: 'futatsu' },
                { count: 3,  reading: 'みっつ',     romaji: 'mittsu' },
                { count: 4,  reading: 'よっつ',     romaji: 'yottsu' },
                { count: 5,  reading: 'いつつ',     romaji: 'itsutsu' },
                { count: 6,  reading: 'むっつ',     romaji: 'muttsu' },
                { count: 7,  reading: 'ななつ',     romaji: 'nanatsu' },
                { count: 8,  reading: 'やっつ',     romaji: 'yattsu' },
                { count: 9,  reading: 'ここのつ',   romaji: 'kokonotsu' },
                { count: 10, reading: 'とお',       romaji: 'too' }
            ]
        },
        {
            counter: '人',
            name: 'People counter',
            description: 'For counting people. 1 and 2 are irregular (native Japanese).',
            items: [
                { count: 1,  reading: 'ひとり',             romaji: 'hitori',           irregular: true },
                { count: 2,  reading: 'ふたり',             romaji: 'futari',           irregular: true },
                { count: 3,  reading: 'さんにん',           romaji: 'sannin' },
                { count: 4,  reading: 'よにん',             romaji: 'yonin',            irregular: true },
                { count: 5,  reading: 'ごにん',             romaji: 'gonin' },
                { count: 6,  reading: 'ろくにん',           romaji: 'rokunin' },
                { count: 7,  reading: 'しちにん/ななにん',   romaji: 'shichinin/nananin' },
                { count: 8,  reading: 'はちにん',           romaji: 'hachinin' },
                { count: 9,  reading: 'きゅうにん/くにん',   romaji: 'kyuunin/kunin' },
                { count: 10, reading: 'じゅうにん',         romaji: 'juunin' }
            ]
        },
        {
            counter: '本',
            name: 'Long thin objects',
            description: 'For pencils, bottles, trees, roads, films, phone calls, etc.',
            items: [
                { count: 1,  reading: 'いっぽん',           romaji: 'ippon',    irregular: true },
                { count: 2,  reading: 'にほん',             romaji: 'nihon' },
                { count: 3,  reading: 'さんぼん',           romaji: 'sanbon',   irregular: true },
                { count: 4,  reading: 'よんほん',           romaji: 'yonhon' },
                { count: 5,  reading: 'ごほん',             romaji: 'gohon' },
                { count: 6,  reading: 'ろっぽん',           romaji: 'roppon',   irregular: true },
                { count: 7,  reading: 'ななほん',           romaji: 'nanahon' },
                { count: 8,  reading: 'はっぽん/はちほん',   romaji: 'happon/hachihon', irregular: true },
                { count: 9,  reading: 'きゅうほん',         romaji: 'kyuuhon' },
                { count: 10, reading: 'じゅっぽん',         romaji: 'juppon',   irregular: true }
            ]
        },
        {
            counter: '枚',
            name: 'Flat objects',
            description: 'For paper, shirts, plates, tickets, pizza slices, etc.',
            items: [
                { count: 1,  reading: 'いちまい',     romaji: 'ichimai' },
                { count: 2,  reading: 'にまい',       romaji: 'nimai' },
                { count: 3,  reading: 'さんまい',     romaji: 'sanmai' },
                { count: 4,  reading: 'よんまい',     romaji: 'yonmai' },
                { count: 5,  reading: 'ごまい',       romaji: 'gomai' },
                { count: 6,  reading: 'ろくまい',     romaji: 'rokumai' },
                { count: 7,  reading: 'ななまい',     romaji: 'nanamai' },
                { count: 8,  reading: 'はちまい',     romaji: 'hachimai' },
                { count: 9,  reading: 'きゅうまい',   romaji: 'kyuumai' },
                { count: 10, reading: 'じゅうまい',   romaji: 'juumai' }
            ]
        },
        {
            counter: '匹',
            name: 'Small animals',
            description: 'For cats, dogs, fish, insects, etc. (not large animals).',
            items: [
                { count: 1,  reading: 'いっぴき',     romaji: 'ippiki',   irregular: true },
                { count: 2,  reading: 'にひき',       romaji: 'nihiki' },
                { count: 3,  reading: 'さんびき',     romaji: 'sanbiki',  irregular: true },
                { count: 4,  reading: 'よんひき',     romaji: 'yonhiki' },
                { count: 5,  reading: 'ごひき',       romaji: 'gohiki' },
                { count: 6,  reading: 'ろっぴき',     romaji: 'roppiki',  irregular: true },
                { count: 7,  reading: 'ななひき',     romaji: 'nanahiki' },
                { count: 8,  reading: 'はっぴき',     romaji: 'happiki',  irregular: true },
                { count: 9,  reading: 'きゅうひき',   romaji: 'kyuuhiki' },
                { count: 10, reading: 'じゅっぴき',   romaji: 'juppiki',  irregular: true }
            ]
        },
        {
            counter: '台',
            name: 'Machines/vehicles',
            description: 'For cars, computers, TVs, bicycles, etc.',
            items: [
                { count: 1,  reading: 'いちだい',     romaji: 'ichidai' },
                { count: 2,  reading: 'にだい',       romaji: 'nidai' },
                { count: 3,  reading: 'さんだい',     romaji: 'sandai' },
                { count: 4,  reading: 'よんだい',     romaji: 'yondai' },
                { count: 5,  reading: 'ごだい',       romaji: 'godai' },
                { count: 6,  reading: 'ろくだい',     romaji: 'rokudai' },
                { count: 7,  reading: 'ななだい',     romaji: 'nanadai' },
                { count: 8,  reading: 'はちだい',     romaji: 'hachidai' },
                { count: 9,  reading: 'きゅうだい',   romaji: 'kyuudai' },
                { count: 10, reading: 'じゅうだい',   romaji: 'juudai' }
            ]
        }
    ],

    // ── Time: Hours ───────────────────────────────────────────
    // Irregulars: 4=よじ (not しじ), 7=しちじ, 9=くじ (not きゅうじ)
    hours: [
        { hour: 1,  reading: 'いちじ',         romaji: 'ichiji' },
        { hour: 2,  reading: 'にじ',           romaji: 'niji' },
        { hour: 3,  reading: 'さんじ',         romaji: 'sanji' },
        { hour: 4,  reading: 'よじ',           romaji: 'yoji',           irregular: true },
        { hour: 5,  reading: 'ごじ',           romaji: 'goji' },
        { hour: 6,  reading: 'ろくじ',         romaji: 'rokuji' },
        { hour: 7,  reading: 'しちじ',         romaji: 'shichiji' },
        { hour: 8,  reading: 'はちじ',         romaji: 'hachiji' },
        { hour: 9,  reading: 'くじ',           romaji: 'kuji',           irregular: true },
        { hour: 10, reading: 'じゅうじ',       romaji: 'juuji' },
        { hour: 11, reading: 'じゅういちじ',   romaji: 'juuichiji' },
        { hour: 12, reading: 'じゅうにじ',     romaji: 'juuniji' }
    ],

    // ── Time: Minutes ─────────────────────────────────────────
    // Irregulars: 1=いっぷん, 3=さんぷん, 4=よんぷん, 6=ろっぷん,
    //            8=はっぷん/はちふん, 10=じゅっぷん/じっぷん
    minutes: [
        { minute: 1,  reading: 'いっぷん',               romaji: 'ippun',              irregular: true },
        { minute: 2,  reading: 'にふん',                 romaji: 'nifun' },
        { minute: 3,  reading: 'さんぷん',               romaji: 'sanpun',             irregular: true },
        { minute: 4,  reading: 'よんぷん',               romaji: 'yonpun',             irregular: true },
        { minute: 5,  reading: 'ごふん',                 romaji: 'gofun' },
        { minute: 6,  reading: 'ろっぷん',               romaji: 'roppun',             irregular: true },
        { minute: 7,  reading: 'ななふん',               romaji: 'nanafun' },
        { minute: 8,  reading: 'はっぷん/はちふん',       romaji: 'happun/hachifun',    irregular: true },
        { minute: 9,  reading: 'きゅうふん',             romaji: 'kyuufun' },
        { minute: 10, reading: 'じゅっぷん/じっぷん',     romaji: 'juppun/jippun',      irregular: true },
        { minute: 15, reading: 'じゅうごふん',           romaji: 'juugofun' },
        { minute: 20, reading: 'にじゅっぷん',           romaji: 'nijuppun' },
        { minute: 30, reading: 'さんじゅっぷん/はん',     romaji: 'sanjuppun/han' },
        { minute: 45, reading: 'よんじゅうごふん',       romaji: 'yonjuugofun' }
    ],

    // ── Days of the month ─────────────────────────────────────
    // 1st-10th use native Japanese readings (almost all irregular)
    days: [
        { day: 1,  reading: 'ついたち',         romaji: 'tsuitachi',      irregular: true },
        { day: 2,  reading: 'ふつか',           romaji: 'futsuka',        irregular: true },
        { day: 3,  reading: 'みっか',           romaji: 'mikka',          irregular: true },
        { day: 4,  reading: 'よっか',           romaji: 'yokka',          irregular: true },
        { day: 5,  reading: 'いつか',           romaji: 'itsuka',         irregular: true },
        { day: 6,  reading: 'むいか',           romaji: 'muika',          irregular: true },
        { day: 7,  reading: 'なのか',           romaji: 'nanoka',         irregular: true },
        { day: 8,  reading: 'ようか',           romaji: 'youka',          irregular: true },
        { day: 9,  reading: 'ここのか',         romaji: 'kokonoka',       irregular: true },
        { day: 10, reading: 'とおか',           romaji: 'tooka',          irregular: true },
        { day: 14, reading: 'じゅうよっか',     romaji: 'juuyokka',       irregular: true },
        { day: 20, reading: 'はつか',           romaji: 'hatsuka',        irregular: true },
        { day: 24, reading: 'にじゅうよっか',   romaji: 'nijuuyokka',     irregular: true }
    ],

    // ── Months ────────────────────────────────────────────────
    // Irregulars: 4=しがつ (not よんがつ), 7=しちがつ, 9=くがつ (not きゅうがつ)
    months: [
        { month: 1,  reading: 'いちがつ',       romaji: 'ichigatsu',      name: 'January' },
        { month: 2,  reading: 'にがつ',         romaji: 'nigatsu',        name: 'February' },
        { month: 3,  reading: 'さんがつ',       romaji: 'sangatsu',       name: 'March' },
        { month: 4,  reading: 'しがつ',         romaji: 'shigatsu',       name: 'April',     irregular: true },
        { month: 5,  reading: 'ごがつ',         romaji: 'gogatsu',        name: 'May' },
        { month: 6,  reading: 'ろくがつ',       romaji: 'rokugatsu',      name: 'June' },
        { month: 7,  reading: 'しちがつ',       romaji: 'shichigatsu',    name: 'July' },
        { month: 8,  reading: 'はちがつ',       romaji: 'hachigatsu',     name: 'August' },
        { month: 9,  reading: 'くがつ',         romaji: 'kugatsu',        name: 'September', irregular: true },
        { month: 10, reading: 'じゅうがつ',     romaji: 'juugatsu',       name: 'October' },
        { month: 11, reading: 'じゅういちがつ', romaji: 'juuichigatsu',   name: 'November' },
        { month: 12, reading: 'じゅうにがつ',   romaji: 'juunigatsu',     name: 'December' }
    ],

    // ── Money expressions ─────────────────────────────────────
    money: [
        { amount: 100,   reading: 'ひゃくえん',         romaji: 'hyakuen' },
        { amount: 200,   reading: 'にひゃくえん',       romaji: 'nihyakuen' },
        { amount: 300,   reading: 'さんびゃくえん',     romaji: 'sanbyakuen' },
        { amount: 500,   reading: 'ごひゃくえん',       romaji: 'gohyakuen' },
        { amount: 1000,  reading: 'せんえん',           romaji: 'senen' },
        { amount: 2000,  reading: 'にせんえん',         romaji: 'nisenen' },
        { amount: 3000,  reading: 'さんぜんえん',       romaji: 'sanzenen' },
        { amount: 5000,  reading: 'ごせんえん',         romaji: 'gosenen' },
        { amount: 10000, reading: 'いちまんえん',       romaji: 'ichimanen' }
    ]
};
