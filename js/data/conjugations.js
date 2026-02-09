/* ================================================================
   CONJUGATION DATA — Comprehensive verb & adjective conjugation data
   30 verbs (Groups 1/2/3) + 20 adjectives (i/na) with all forms
   ================================================================ */
const CONJUGATION_DATA = {

    // ===== VERBS =====
    verbs: [

        // ────────────────────────────────────────
        //  GROUP 1 — Godan (u-verbs)  ×18
        // ────────────────────────────────────────

        {
            dictForm: 'のむ',
            kanji: '飲む',
            meaning: 'to drink',
            group: 1,
            forms: {
                'masu': 'のみます',
                'masen': 'のみません',
                'mashita': 'のみました',
                'masendeshita': 'のみませんでした',
                'te': 'のんで',
                'nai': 'のまない',
                'ta': 'のんだ',
                'potential': 'のめる',
                'volitional': 'のもう',
                'imperative': 'のめ',
                'conditional': 'のめば'
            }
        },
        {
            dictForm: 'かく',
            kanji: '書く',
            meaning: 'to write',
            group: 1,
            forms: {
                'masu': 'かきます',
                'masen': 'かきません',
                'mashita': 'かきました',
                'masendeshita': 'かきませんでした',
                'te': 'かいて',
                'nai': 'かかない',
                'ta': 'かいた',
                'potential': 'かける',
                'volitional': 'かこう',
                'imperative': 'かけ',
                'conditional': 'かけば'
            }
        },
        {
            dictForm: 'はなす',
            kanji: '話す',
            meaning: 'to speak',
            group: 1,
            forms: {
                'masu': 'はなします',
                'masen': 'はなしません',
                'mashita': 'はなしました',
                'masendeshita': 'はなしませんでした',
                'te': 'はなして',
                'nai': 'はなさない',
                'ta': 'はなした',
                'potential': 'はなせる',
                'volitional': 'はなそう',
                'imperative': 'はなせ',
                'conditional': 'はなせば'
            }
        },
        {
            dictForm: 'よむ',
            kanji: '読む',
            meaning: 'to read',
            group: 1,
            forms: {
                'masu': 'よみます',
                'masen': 'よみません',
                'mashita': 'よみました',
                'masendeshita': 'よみませんでした',
                'te': 'よんで',
                'nai': 'よまない',
                'ta': 'よんだ',
                'potential': 'よめる',
                'volitional': 'よもう',
                'imperative': 'よめ',
                'conditional': 'よめば'
            }
        },
        {
            dictForm: 'きく',
            kanji: '聞く',
            meaning: 'to listen',
            group: 1,
            forms: {
                'masu': 'ききます',
                'masen': 'ききません',
                'mashita': 'ききました',
                'masendeshita': 'ききませんでした',
                'te': 'きいて',
                'nai': 'きかない',
                'ta': 'きいた',
                'potential': 'きける',
                'volitional': 'きこう',
                'imperative': 'きけ',
                'conditional': 'きけば'
            }
        },
        {
            dictForm: 'まつ',
            kanji: '待つ',
            meaning: 'to wait',
            group: 1,
            forms: {
                'masu': 'まちます',
                'masen': 'まちません',
                'mashita': 'まちました',
                'masendeshita': 'まちませんでした',
                'te': 'まって',
                'nai': 'またない',
                'ta': 'まった',
                'potential': 'まてる',
                'volitional': 'まとう',
                'imperative': 'まて',
                'conditional': 'まてば'
            }
        },
        {
            dictForm: 'かう',
            kanji: '買う',
            meaning: 'to buy',
            group: 1,
            forms: {
                'masu': 'かいます',
                'masen': 'かいません',
                'mashita': 'かいました',
                'masendeshita': 'かいませんでした',
                'te': 'かって',
                'nai': 'かわない',
                'ta': 'かった',
                'potential': 'かえる',
                'volitional': 'かおう',
                'imperative': 'かえ',
                'conditional': 'かえば'
            }
        },
        {
            dictForm: 'あう',
            kanji: '会う',
            meaning: 'to meet',
            group: 1,
            forms: {
                'masu': 'あいます',
                'masen': 'あいません',
                'mashita': 'あいました',
                'masendeshita': 'あいませんでした',
                'te': 'あって',
                'nai': 'あわない',
                'ta': 'あった',
                'potential': 'あえる',
                'volitional': 'あおう',
                'imperative': 'あえ',
                'conditional': 'あえば'
            }
        },
        {
            dictForm: 'つくる',
            kanji: '作る',
            meaning: 'to make',
            group: 1,
            forms: {
                'masu': 'つくります',
                'masen': 'つくりません',
                'mashita': 'つくりました',
                'masendeshita': 'つくりませんでした',
                'te': 'つくって',
                'nai': 'つくらない',
                'ta': 'つくった',
                'potential': 'つくれる',
                'volitional': 'つくろう',
                'imperative': 'つくれ',
                'conditional': 'つくれば'
            }
        },
        {
            dictForm: 'いく',
            kanji: '行く',
            meaning: 'to go',
            group: 1,
            forms: {
                'masu': 'いきます',
                'masen': 'いきません',
                'mashita': 'いきました',
                'masendeshita': 'いきませんでした',
                'te': 'いって',          // irregular te-form for いく
                'nai': 'いかない',
                'ta': 'いった',           // irregular ta-form for いく
                'potential': 'いける',
                'volitional': 'いこう',
                'imperative': 'いけ',
                'conditional': 'いけば'
            }
        },
        {
            dictForm: 'かえる',
            kanji: '帰る',
            meaning: 'to return',
            group: 1,
            forms: {
                'masu': 'かえります',
                'masen': 'かえりません',
                'mashita': 'かえりました',
                'masendeshita': 'かえりませんでした',
                'te': 'かえって',
                'nai': 'かえらない',
                'ta': 'かえった',
                'potential': 'かえれる',
                'volitional': 'かえろう',
                'imperative': 'かえれ',
                'conditional': 'かえれば'
            }
        },
        {
            dictForm: 'あそぶ',
            kanji: '遊ぶ',
            meaning: 'to play',
            group: 1,
            forms: {
                'masu': 'あそびます',
                'masen': 'あそびません',
                'mashita': 'あそびました',
                'masendeshita': 'あそびませんでした',
                'te': 'あそんで',
                'nai': 'あそばない',
                'ta': 'あそんだ',
                'potential': 'あそべる',
                'volitional': 'あそぼう',
                'imperative': 'あそべ',
                'conditional': 'あそべば'
            }
        },
        {
            dictForm: 'しぬ',
            kanji: '死ぬ',
            meaning: 'to die',
            group: 1,
            forms: {
                'masu': 'しにます',
                'masen': 'しにません',
                'mashita': 'しにました',
                'masendeshita': 'しにませんでした',
                'te': 'しんで',
                'nai': 'しなない',
                'ta': 'しんだ',
                'potential': 'しねる',
                'volitional': 'しのう',
                'imperative': 'しね',
                'conditional': 'しねば'
            }
        },
        {
            dictForm: 'およぐ',
            kanji: '泳ぐ',
            meaning: 'to swim',
            group: 1,
            forms: {
                'masu': 'およぎます',
                'masen': 'およぎません',
                'mashita': 'およぎました',
                'masendeshita': 'およぎませんでした',
                'te': 'およいで',
                'nai': 'およがない',
                'ta': 'およいだ',
                'potential': 'およげる',
                'volitional': 'およごう',
                'imperative': 'およげ',
                'conditional': 'およげば'
            }
        },
        {
            dictForm: 'のる',
            kanji: '乗る',
            meaning: 'to ride',
            group: 1,
            forms: {
                'masu': 'のります',
                'masen': 'のりません',
                'mashita': 'のりました',
                'masendeshita': 'のりませんでした',
                'te': 'のって',
                'nai': 'のらない',
                'ta': 'のった',
                'potential': 'のれる',
                'volitional': 'のろう',
                'imperative': 'のれ',
                'conditional': 'のれば'
            }
        },
        {
            dictForm: 'おくる',
            kanji: '送る',
            meaning: 'to send',
            group: 1,
            forms: {
                'masu': 'おくります',
                'masen': 'おくりません',
                'mashita': 'おくりました',
                'masendeshita': 'おくりませんでした',
                'te': 'おくって',
                'nai': 'おくらない',
                'ta': 'おくった',
                'potential': 'おくれる',
                'volitional': 'おくろう',
                'imperative': 'おくれ',
                'conditional': 'おくれば'
            }
        },
        {
            dictForm: 'はしる',
            kanji: '走る',
            meaning: 'to run',
            group: 1,
            forms: {
                'masu': 'はしります',
                'masen': 'はしりません',
                'mashita': 'はしりました',
                'masendeshita': 'はしりませんでした',
                'te': 'はしって',
                'nai': 'はしらない',
                'ta': 'はしった',
                'potential': 'はしれる',
                'volitional': 'はしろう',
                'imperative': 'はしれ',
                'conditional': 'はしれば'
            }
        },
        {
            dictForm: 'もつ',
            kanji: '持つ',
            meaning: 'to hold',
            group: 1,
            forms: {
                'masu': 'もちます',
                'masen': 'もちません',
                'mashita': 'もちました',
                'masendeshita': 'もちませんでした',
                'te': 'もって',
                'nai': 'もたない',
                'ta': 'もった',
                'potential': 'もてる',
                'volitional': 'もとう',
                'imperative': 'もて',
                'conditional': 'もてば'
            }
        },

        // ────────────────────────────────────────
        //  GROUP 2 — Ichidan (ru-verbs)  ×10
        // ────────────────────────────────────────

        {
            dictForm: 'たべる',
            kanji: '食べる',
            meaning: 'to eat',
            group: 2,
            forms: {
                'masu': 'たべます',
                'masen': 'たべません',
                'mashita': 'たべました',
                'masendeshita': 'たべませんでした',
                'te': 'たべて',
                'nai': 'たべない',
                'ta': 'たべた',
                'potential': 'たべられる',
                'volitional': 'たべよう',
                'imperative': 'たべろ',
                'conditional': 'たべれば'
            }
        },
        {
            dictForm: 'みる',
            kanji: '見る',
            meaning: 'to see',
            group: 2,
            forms: {
                'masu': 'みます',
                'masen': 'みません',
                'mashita': 'みました',
                'masendeshita': 'みませんでした',
                'te': 'みて',
                'nai': 'みない',
                'ta': 'みた',
                'potential': 'みられる',
                'volitional': 'みよう',
                'imperative': 'みろ',
                'conditional': 'みれば'
            }
        },
        {
            dictForm: 'おきる',
            kanji: '起きる',
            meaning: 'to wake up',
            group: 2,
            forms: {
                'masu': 'おきます',
                'masen': 'おきません',
                'mashita': 'おきました',
                'masendeshita': 'おきませんでした',
                'te': 'おきて',
                'nai': 'おきない',
                'ta': 'おきた',
                'potential': 'おきられる',
                'volitional': 'おきよう',
                'imperative': 'おきろ',
                'conditional': 'おきれば'
            }
        },
        {
            dictForm: 'ねる',
            kanji: '寝る',
            meaning: 'to sleep',
            group: 2,
            forms: {
                'masu': 'ねます',
                'masen': 'ねません',
                'mashita': 'ねました',
                'masendeshita': 'ねませんでした',
                'te': 'ねて',
                'nai': 'ねない',
                'ta': 'ねた',
                'potential': 'ねられる',
                'volitional': 'ねよう',
                'imperative': 'ねろ',
                'conditional': 'ねれば'
            }
        },
        {
            dictForm: 'あげる',
            kanji: 'あげる',
            meaning: 'to give',
            group: 2,
            forms: {
                'masu': 'あげます',
                'masen': 'あげません',
                'mashita': 'あげました',
                'masendeshita': 'あげませんでした',
                'te': 'あげて',
                'nai': 'あげない',
                'ta': 'あげた',
                'potential': 'あげられる',
                'volitional': 'あげよう',
                'imperative': 'あげろ',
                'conditional': 'あげれば'
            }
        },
        {
            dictForm: 'でる',
            kanji: '出る',
            meaning: 'to leave',
            group: 2,
            forms: {
                'masu': 'でます',
                'masen': 'でません',
                'mashita': 'でました',
                'masendeshita': 'でませんでした',
                'te': 'でて',
                'nai': 'でない',
                'ta': 'でた',
                'potential': 'でられる',
                'volitional': 'でよう',
                'imperative': 'でろ',
                'conditional': 'でれば'
            }
        },
        {
            dictForm: 'おしえる',
            kanji: '教える',
            meaning: 'to teach',
            group: 2,
            forms: {
                'masu': 'おしえます',
                'masen': 'おしえません',
                'mashita': 'おしえました',
                'masendeshita': 'おしえませんでした',
                'te': 'おしえて',
                'nai': 'おしえない',
                'ta': 'おしえた',
                'potential': 'おしえられる',
                'volitional': 'おしえよう',
                'imperative': 'おしえろ',
                'conditional': 'おしえれば'
            }
        },
        {
            dictForm: 'あける',
            kanji: '開ける',
            meaning: 'to open',
            group: 2,
            forms: {
                'masu': 'あけます',
                'masen': 'あけません',
                'mashita': 'あけました',
                'masendeshita': 'あけませんでした',
                'te': 'あけて',
                'nai': 'あけない',
                'ta': 'あけた',
                'potential': 'あけられる',
                'volitional': 'あけよう',
                'imperative': 'あけろ',
                'conditional': 'あければ'
            }
        },
        {
            dictForm: 'しめる',
            kanji: '閉める',
            meaning: 'to close',
            group: 2,
            forms: {
                'masu': 'しめます',
                'masen': 'しめません',
                'mashita': 'しめました',
                'masendeshita': 'しめませんでした',
                'te': 'しめて',
                'nai': 'しめない',
                'ta': 'しめた',
                'potential': 'しめられる',
                'volitional': 'しめよう',
                'imperative': 'しめろ',
                'conditional': 'しめれば'
            }
        },
        {
            dictForm: 'いれる',
            kanji: '入れる',
            meaning: 'to put in',
            group: 2,
            forms: {
                'masu': 'いれます',
                'masen': 'いれません',
                'mashita': 'いれました',
                'masendeshita': 'いれませんでした',
                'te': 'いれて',
                'nai': 'いれない',
                'ta': 'いれた',
                'potential': 'いれられる',
                'volitional': 'いれよう',
                'imperative': 'いれろ',
                'conditional': 'いれれば'
            }
        },

        // ────────────────────────────────────────
        //  GROUP 3 — Irregular  ×2
        // ────────────────────────────────────────

        {
            dictForm: 'する',
            kanji: 'する',
            meaning: 'to do',
            group: 3,
            forms: {
                'masu': 'します',
                'masen': 'しません',
                'mashita': 'しました',
                'masendeshita': 'しませんでした',
                'te': 'して',
                'nai': 'しない',
                'ta': 'した',
                'potential': 'できる',
                'volitional': 'しよう',
                'imperative': 'しろ',
                'conditional': 'すれば'
            }
        },
        {
            dictForm: 'くる',
            kanji: '来る',
            meaning: 'to come',
            group: 3,
            forms: {
                'masu': 'きます',
                'masen': 'きません',
                'mashita': 'きました',
                'masendeshita': 'きませんでした',
                'te': 'きて',
                'nai': 'こない',
                'ta': 'きた',
                'potential': 'こられる',
                'volitional': 'こよう',
                'imperative': 'こい',
                'conditional': 'くれば'
            }
        }
    ],

    // ===== ADJECTIVES =====
    adjectives: [

        // ────────────────────────────────────────
        //  i-adjectives  ×10
        // ────────────────────────────────────────

        {
            dictForm: 'おおきい',
            kanji: '大きい',
            meaning: 'big',
            type: 'i',
            forms: {
                'negative': 'おおきくない',
                'past': 'おおきかった',
                'past-negative': 'おおきくなかった',
                'te': 'おおきくて',
                'adverb': 'おおきく'
            }
        },
        {
            dictForm: 'ちいさい',
            kanji: '小さい',
            meaning: 'small',
            type: 'i',
            forms: {
                'negative': 'ちいさくない',
                'past': 'ちいさかった',
                'past-negative': 'ちいさくなかった',
                'te': 'ちいさくて',
                'adverb': 'ちいさく'
            }
        },
        {
            dictForm: 'たかい',
            kanji: '高い',
            meaning: 'expensive / tall',
            type: 'i',
            forms: {
                'negative': 'たかくない',
                'past': 'たかかった',
                'past-negative': 'たかくなかった',
                'te': 'たかくて',
                'adverb': 'たかく'
            }
        },
        {
            dictForm: 'やすい',
            kanji: '安い',
            meaning: 'cheap',
            type: 'i',
            forms: {
                'negative': 'やすくない',
                'past': 'やすかった',
                'past-negative': 'やすくなかった',
                'te': 'やすくて',
                'adverb': 'やすく'
            }
        },
        {
            dictForm: 'あつい',
            kanji: '暑い',
            meaning: 'hot',
            type: 'i',
            forms: {
                'negative': 'あつくない',
                'past': 'あつかった',
                'past-negative': 'あつくなかった',
                'te': 'あつくて',
                'adverb': 'あつく'
            }
        },
        {
            dictForm: 'さむい',
            kanji: '寒い',
            meaning: 'cold',
            type: 'i',
            forms: {
                'negative': 'さむくない',
                'past': 'さむかった',
                'past-negative': 'さむくなかった',
                'te': 'さむくて',
                'adverb': 'さむく'
            }
        },
        {
            dictForm: 'おいしい',
            kanji: '美味しい',
            meaning: 'delicious',
            type: 'i',
            forms: {
                'negative': 'おいしくない',
                'past': 'おいしかった',
                'past-negative': 'おいしくなかった',
                'te': 'おいしくて',
                'adverb': 'おいしく'
            }
        },
        {
            dictForm: 'たのしい',
            kanji: '楽しい',
            meaning: 'fun',
            type: 'i',
            forms: {
                'negative': 'たのしくない',
                'past': 'たのしかった',
                'past-negative': 'たのしくなかった',
                'te': 'たのしくて',
                'adverb': 'たのしく'
            }
        },
        {
            dictForm: 'むずかしい',
            kanji: '難しい',
            meaning: 'difficult',
            type: 'i',
            forms: {
                'negative': 'むずかしくない',
                'past': 'むずかしかった',
                'past-negative': 'むずかしくなかった',
                'te': 'むずかしくて',
                'adverb': 'むずかしく'
            }
        },
        {
            dictForm: 'いい',
            kanji: 'いい',
            meaning: 'good',
            type: 'i',
            irregular: true,   // conjugates from よ- stem, not い- stem
            forms: {
                'negative': 'よくない',
                'past': 'よかった',
                'past-negative': 'よくなかった',
                'te': 'よくて',
                'adverb': 'よく'
            }
        },

        // ────────────────────────────────────────
        //  na-adjectives  ×10
        // ────────────────────────────────────────

        {
            dictForm: 'しずか',
            kanji: '静か',
            meaning: 'quiet',
            type: 'na',
            forms: {
                'negative': 'しずかじゃない',
                'past': 'しずかだった',
                'past-negative': 'しずかじゃなかった',
                'te': 'しずかで',
                'adverb': 'しずかに'
            }
        },
        {
            dictForm: 'きれい',
            kanji: 'きれい',
            meaning: 'beautiful / clean',
            type: 'na',
            forms: {
                'negative': 'きれいじゃない',
                'past': 'きれいだった',
                'past-negative': 'きれいじゃなかった',
                'te': 'きれいで',
                'adverb': 'きれいに'
            }
        },
        {
            dictForm: 'げんき',
            kanji: '元気',
            meaning: 'healthy / energetic',
            type: 'na',
            forms: {
                'negative': 'げんきじゃない',
                'past': 'げんきだった',
                'past-negative': 'げんきじゃなかった',
                'te': 'げんきで',
                'adverb': 'げんきに'
            }
        },
        {
            dictForm: 'すき',
            kanji: '好き',
            meaning: 'liked / favourite',
            type: 'na',
            forms: {
                'negative': 'すきじゃない',
                'past': 'すきだった',
                'past-negative': 'すきじゃなかった',
                'te': 'すきで',
                'adverb': 'すきに'
            }
        },
        {
            dictForm: 'きらい',
            kanji: '嫌い',
            meaning: 'disliked',
            type: 'na',
            forms: {
                'negative': 'きらいじゃない',
                'past': 'きらいだった',
                'past-negative': 'きらいじゃなかった',
                'te': 'きらいで',
                'adverb': 'きらいに'
            }
        },
        {
            dictForm: 'じょうず',
            kanji: '上手',
            meaning: 'skilful',
            type: 'na',
            forms: {
                'negative': 'じょうずじゃない',
                'past': 'じょうずだった',
                'past-negative': 'じょうずじゃなかった',
                'te': 'じょうずで',
                'adverb': 'じょうずに'
            }
        },
        {
            dictForm: 'へた',
            kanji: '下手',
            meaning: 'unskillful',
            type: 'na',
            forms: {
                'negative': 'へたじゃない',
                'past': 'へただった',
                'past-negative': 'へたじゃなかった',
                'te': 'へたで',
                'adverb': 'へたに'
            }
        },
        {
            dictForm: 'ゆうめい',
            kanji: '有名',
            meaning: 'famous',
            type: 'na',
            forms: {
                'negative': 'ゆうめいじゃない',
                'past': 'ゆうめいだった',
                'past-negative': 'ゆうめいじゃなかった',
                'te': 'ゆうめいで',
                'adverb': 'ゆうめいに'
            }
        },
        {
            dictForm: 'たいへん',
            kanji: '大変',
            meaning: 'terrible / tough',
            type: 'na',
            forms: {
                'negative': 'たいへんじゃない',
                'past': 'たいへんだった',
                'past-negative': 'たいへんじゃなかった',
                'te': 'たいへんで',
                'adverb': 'たいへんに'
            }
        },
        {
            dictForm: 'べんり',
            kanji: '便利',
            meaning: 'convenient',
            type: 'na',
            forms: {
                'negative': 'べんりじゃない',
                'past': 'べんりだった',
                'past-negative': 'べんりじゃなかった',
                'te': 'べんりで',
                'adverb': 'べんりに'
            }
        }
    ],

    // ===== FORM DISPLAY NAMES =====
    formNames: {
        'masu': 'masu (polite)',
        'masen': 'masen (polite negative)',
        'mashita': 'mashita (polite past)',
        'masendeshita': 'masen deshita (polite past neg.)',
        'te': 'te-form',
        'nai': 'nai (negative)',
        'ta': 'ta (past)',
        'potential': 'potential',
        'volitional': 'volitional (let\'s / shall)',
        'imperative': 'imperative (command)',
        'conditional': 'conditional (if)',
        'negative': 'negative',
        'past': 'past',
        'past-negative': 'past negative',
        'adverb': 'adverb form'
    }
};
