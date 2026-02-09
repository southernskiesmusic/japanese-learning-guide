const GRAMMAR_N5 = {

    // ===== VERB CONJUGATIONS =====
    // 30 common JLPT N5 verbs with masu, nai, te, ta, potential, volitional forms
    conjugations: [

        // ────────────────────────────────────────
        //  GROUP 1 — Godan (u-verbs)  ×20
        // ────────────────────────────────────────

        {
            dictForm: 'かく',
            meaning: 'to write',
            group: 1,
            forms: {
                masu:       'かきます',
                nai:        'かかない',
                te:         'かいて',
                ta:         'かいた',
                potential:  'かける',
                volitional: 'かこう'
            }
        },
        {
            dictForm: 'よむ',
            meaning: 'to read',
            group: 1,
            forms: {
                masu:       'よみます',
                nai:        'よまない',
                te:         'よんで',
                ta:         'よんだ',
                potential:  'よめる',
                volitional: 'よもう'
            }
        },
        {
            dictForm: 'はなす',
            meaning: 'to speak',
            group: 1,
            forms: {
                masu:       'はなします',
                nai:        'はなさない',
                te:         'はなして',
                ta:         'はなした',
                potential:  'はなせる',
                volitional: 'はなそう'
            }
        },
        {
            dictForm: 'きく',
            meaning: 'to listen',
            group: 1,
            forms: {
                masu:       'ききます',
                nai:        'きかない',
                te:         'きいて',
                ta:         'きいた',
                potential:  'きける',
                volitional: 'きこう'
            }
        },
        {
            dictForm: 'のむ',
            meaning: 'to drink',
            group: 1,
            forms: {
                masu:       'のみます',
                nai:        'のまない',
                te:         'のんで',
                ta:         'のんだ',
                potential:  'のめる',
                volitional: 'のもう'
            }
        },
        {
            dictForm: 'いく',
            meaning: 'to go',
            group: 1,
            forms: {
                masu:       'いきます',
                nai:        'いかない',
                te:         'いって',       // irregular te-form
                ta:         'いった',       // irregular ta-form
                potential:  'いける',
                volitional: 'いこう'
            }
        },
        {
            dictForm: 'かえる',
            meaning: 'to return',
            group: 1,
            forms: {
                masu:       'かえります',
                nai:        'かえらない',
                te:         'かえって',
                ta:         'かえった',
                potential:  'かえれる',
                volitional: 'かえろう'
            }
        },
        {
            dictForm: 'かう',
            meaning: 'to buy',
            group: 1,
            forms: {
                masu:       'かいます',
                nai:        'かわない',
                te:         'かって',
                ta:         'かった',
                potential:  'かえる',
                volitional: 'かおう'
            }
        },
        {
            dictForm: 'まつ',
            meaning: 'to wait',
            group: 1,
            forms: {
                masu:       'まちます',
                nai:        'またない',
                te:         'まって',
                ta:         'まった',
                potential:  'まてる',
                volitional: 'まとう'
            }
        },
        {
            dictForm: 'およぐ',
            meaning: 'to swim',
            group: 1,
            forms: {
                masu:       'およぎます',
                nai:        'およがない',
                te:         'およいで',
                ta:         'およいだ',
                potential:  'およげる',
                volitional: 'およごう'
            }
        },
        {
            dictForm: 'あそぶ',
            meaning: 'to play',
            group: 1,
            forms: {
                masu:       'あそびます',
                nai:        'あそばない',
                te:         'あそんで',
                ta:         'あそんだ',
                potential:  'あそべる',
                volitional: 'あそぼう'
            }
        },
        {
            dictForm: 'しぬ',
            meaning: 'to die',
            group: 1,
            forms: {
                masu:       'しにます',
                nai:        'しなない',
                te:         'しんで',
                ta:         'しんだ',
                potential:  'しねる',
                volitional: 'しのう'
            }
        },
        {
            dictForm: 'たつ',
            meaning: 'to stand',
            group: 1,
            forms: {
                masu:       'たちます',
                nai:        'たたない',
                te:         'たって',
                ta:         'たった',
                potential:  'たてる',
                volitional: 'たとう'
            }
        },
        {
            dictForm: 'すわる',
            meaning: 'to sit',
            group: 1,
            forms: {
                masu:       'すわります',
                nai:        'すわらない',
                te:         'すわって',
                ta:         'すわった',
                potential:  'すわれる',
                volitional: 'すわろう'
            }
        },
        {
            dictForm: 'はしる',
            meaning: 'to run',
            group: 1,
            forms: {
                masu:       'はしります',
                nai:        'はしらない',
                te:         'はしって',
                ta:         'はしった',
                potential:  'はしれる',
                volitional: 'はしろう'
            }
        },
        {
            dictForm: 'つくる',
            meaning: 'to make',
            group: 1,
            forms: {
                masu:       'つくります',
                nai:        'つくらない',
                te:         'つくって',
                ta:         'つくった',
                potential:  'つくれる',
                volitional: 'つくろう'
            }
        },
        {
            dictForm: 'うたう',
            meaning: 'to sing',
            group: 1,
            forms: {
                masu:       'うたいます',
                nai:        'うたわない',
                te:         'うたって',
                ta:         'うたった',
                potential:  'うたえる',
                volitional: 'うたおう'
            }
        },
        {
            dictForm: 'もつ',
            meaning: 'to hold',
            group: 1,
            forms: {
                masu:       'もちます',
                nai:        'もたない',
                te:         'もって',
                ta:         'もった',
                potential:  'もてる',
                volitional: 'もとう'
            }
        },
        {
            dictForm: 'あう',
            meaning: 'to meet',
            group: 1,
            forms: {
                masu:       'あいます',
                nai:        'あわない',
                te:         'あって',
                ta:         'あった',
                potential:  'あえる',
                volitional: 'あおう'
            }
        },
        {
            dictForm: 'わかる',
            meaning: 'to understand',
            group: 1,
            forms: {
                masu:       'わかります',
                nai:        'わからない',
                te:         'わかって',
                ta:         'わかった',
                potential:  'わかれる',
                volitional: 'わかろう'
            }
        },

        // ────────────────────────────────────────
        //  GROUP 2 — Ichidan (ru-verbs)  ×8
        // ────────────────────────────────────────

        {
            dictForm: 'たべる',
            meaning: 'to eat',
            group: 2,
            forms: {
                masu:       'たべます',
                nai:        'たべない',
                te:         'たべて',
                ta:         'たべた',
                potential:  'たべられる',
                volitional: 'たべよう'
            }
        },
        {
            dictForm: 'みる',
            meaning: 'to see',
            group: 2,
            forms: {
                masu:       'みます',
                nai:        'みない',
                te:         'みて',
                ta:         'みた',
                potential:  'みられる',
                volitional: 'みよう'
            }
        },
        {
            dictForm: 'ねる',
            meaning: 'to sleep',
            group: 2,
            forms: {
                masu:       'ねます',
                nai:        'ねない',
                te:         'ねて',
                ta:         'ねた',
                potential:  'ねられる',
                volitional: 'ねよう'
            }
        },
        {
            dictForm: 'おきる',
            meaning: 'to wake up',
            group: 2,
            forms: {
                masu:       'おきます',
                nai:        'おきない',
                te:         'おきて',
                ta:         'おきた',
                potential:  'おきられる',
                volitional: 'おきよう'
            }
        },
        {
            dictForm: 'おしえる',
            meaning: 'to teach',
            group: 2,
            forms: {
                masu:       'おしえます',
                nai:        'おしえない',
                te:         'おしえて',
                ta:         'おしえた',
                potential:  'おしえられる',
                volitional: 'おしえよう'
            }
        },
        {
            dictForm: 'あける',
            meaning: 'to open',
            group: 2,
            forms: {
                masu:       'あけます',
                nai:        'あけない',
                te:         'あけて',
                ta:         'あけた',
                potential:  'あけられる',
                volitional: 'あけよう'
            }
        },
        {
            dictForm: 'しめる',
            meaning: 'to close',
            group: 2,
            forms: {
                masu:       'しめます',
                nai:        'しめない',
                te:         'しめて',
                ta:         'しめた',
                potential:  'しめられる',
                volitional: 'しめよう'
            }
        },
        {
            dictForm: 'きる',
            meaning: 'to wear',
            group: 2,
            forms: {
                masu:       'きます',
                nai:        'きない',
                te:         'きて',
                ta:         'きた',
                potential:  'きられる',
                volitional: 'きよう'
            }
        },

        // ────────────────────────────────────────
        //  GROUP 3 — Irregular  ×2
        // ────────────────────────────────────────

        {
            dictForm: 'する',
            meaning: 'to do',
            group: 3,
            forms: {
                masu:       'します',
                nai:        'しない',
                te:         'して',
                ta:         'した',
                potential:  'できる',
                volitional: 'しよう'
            }
        },
        {
            dictForm: 'くる',
            meaning: 'to come',
            group: 3,
            forms: {
                masu:       'きます',
                nai:        'こない',
                te:         'きて',
                ta:         'きた',
                potential:  'こられる',
                volitional: 'こよう'
            }
        }
    ],

    // ===== GRAMMAR PATTERNS =====
    // 20 essential JLPT N5 grammar patterns
    patterns: [

        // --- Particles ---

        {
            pattern: 'は',
            meaning: 'Topic marker — marks what the sentence is about',
            example: {
                jp: 'わたしは　がくせいです。',
                en: 'I am a student.'
            },
            notes: 'Pronounced "wa" when used as a particle. Marks the topic, not necessarily the grammatical subject.'
        },
        {
            pattern: 'が',
            meaning: 'Subject marker — marks the grammatical subject',
            example: {
                jp: 'ねこが　います。',
                en: 'There is a cat.'
            },
            notes: 'Used with existence verbs (いる/ある), adjectives of desire (ほしい/たい), and to introduce new information.'
        },
        {
            pattern: 'を',
            meaning: 'Object marker — marks the direct object of a verb',
            example: {
                jp: 'パンを　たべます。',
                en: 'I eat bread.'
            },
            notes: 'Pronounced "o". Always follows the noun that receives the action of the verb.'
        },
        {
            pattern: 'に',
            meaning: 'Direction / time / location of existence',
            example: {
                jp: 'がっこうに　いきます。',
                en: 'I go to school.'
            },
            notes: 'Indicates a target or destination, a specific point in time (七時に), or the location where something exists (with いる/ある).'
        },
        {
            pattern: 'で',
            meaning: 'Location of action / means or method',
            example: {
                jp: 'としょかんで　べんきょうします。',
                en: 'I study at the library.'
            },
            notes: 'Marks where an action takes place (different from に for existence) or the tool/means used (バスで = by bus).'
        },
        {
            pattern: 'へ',
            meaning: 'Direction — indicates the direction of movement',
            example: {
                jp: 'にほんへ　いきます。',
                en: 'I go to Japan.'
            },
            notes: 'Pronounced "e" when used as a particle. Emphasises direction of travel; often interchangeable with に for destinations.'
        },
        {
            pattern: 'と',
            meaning: '"And" (listing nouns) / "with" (accompaniment)',
            example: {
                jp: 'ともだちと　えいがを　みます。',
                en: 'I watch a movie with a friend.'
            },
            notes: 'Connects nouns exhaustively (A と B = A and B, nothing else). Also marks a companion for an action.'
        },
        {
            pattern: 'も',
            meaning: '"Also" / "too" — adds something to an existing statement',
            example: {
                jp: 'わたしも　にほんごを　べんきょうしています。',
                en: 'I am also studying Japanese.'
            },
            notes: 'Replaces は, が, or を. The item marked with も is presented as additional or similar to something already mentioned.'
        },
        {
            pattern: 'から',
            meaning: '"From" (starting point) / "because" (reason)',
            example: {
                jp: 'くじから　じゅうにじまで　はたらきます。',
                en: 'I work from 9 to 12.'
            },
            notes: 'As a time/place particle: marks the starting point. After a clause in plain or polite form: gives a reason (あついですから = because it is hot).'
        },
        {
            pattern: 'まで',
            meaning: '"Until" / "up to" — marks an endpoint in time or space',
            example: {
                jp: 'ごじまで　まちます。',
                en: 'I will wait until 5 o\'clock.'
            },
            notes: 'Often paired with から (from ... until ...). Can mark a physical endpoint too (えきまで = up to the station).'
        },
        {
            pattern: 'の',
            meaning: 'Possessive / noun modifier',
            example: {
                jp: 'わたしの　ほんです。',
                en: 'It is my book.'
            },
            notes: 'Connects two nouns: the first modifies the second. Functions like "\'s" or "of" in English.'
        },
        {
            pattern: 'よ',
            meaning: 'Sentence-ending particle — emphasis / informing',
            example: {
                jp: 'このケーキは　おいしいですよ。',
                en: 'This cake is delicious, you know!'
            },
            notes: 'Used to tell the listener something they may not know, or to add emphasis and assertion to a statement.'
        },
        {
            pattern: 'ね',
            meaning: 'Sentence-ending particle — seeking agreement / confirmation',
            example: {
                jp: 'いいてんきですね。',
                en: 'Nice weather, isn\'t it?'
            },
            notes: 'Invites the listener to agree. Similar to tag questions in English (right?, isn\'t it?).'
        },

        // --- Verb / adjective grammar forms ---

        {
            pattern: '～たい',
            meaning: '"Want to ~" — expresses the speaker\'s desire to do something',
            example: {
                jp: 'すしを　たべたいです。',
                en: 'I want to eat sushi.'
            },
            notes: 'Attach to the masu-stem (remove ます). Conjugates like an i-adjective (たくない = don\'t want to). Only for the speaker\'s own desires.'
        },
        {
            pattern: '～ている',
            meaning: 'Progressive / resultant state — "is ~ing" or "has ~ed"',
            example: {
                jp: 'いま　ほんを　よんでいます。',
                en: 'I am reading a book now.'
            },
            notes: 'Te-form + いる. For action verbs: ongoing action. For change-of-state verbs (e.g. 結婚する): resulting state (結婚している = is married).'
        },
        {
            pattern: '～てください',
            meaning: '"Please do ~" — polite request',
            example: {
                jp: 'ここに　なまえを　かいてください。',
                en: 'Please write your name here.'
            },
            notes: 'Te-form + ください. A standard polite way to ask someone to do something.'
        },
        {
            pattern: '～ないでください',
            meaning: '"Please don\'t ~" — polite negative request',
            example: {
                jp: 'ここで　たばこを　すわないでください。',
                en: 'Please don\'t smoke here.'
            },
            notes: 'Nai-form (remove い) + でください. Used for polite prohibitions or requests to refrain.'
        },
        {
            pattern: '～てもいい',
            meaning: '"May I ~?" / "It\'s okay to ~" — asking or giving permission',
            example: {
                jp: 'しゃしんを　とってもいいですか。',
                en: 'May I take a photo?'
            },
            notes: 'Te-form + もいい(です). Add か to ask permission. Negative permission: ～なくてもいい (you don\'t have to).'
        },
        {
            pattern: '～なければならない',
            meaning: '"Must ~" / "have to ~" — obligation',
            example: {
                jp: 'しゅくだいを　しなければなりません。',
                en: 'I must do my homework.'
            },
            notes: 'Nai-form, replace ない with なければならない (or なければいけない). The double negative creates a sense of obligation.'
        },
        {
            pattern: '～つもり',
            meaning: '"Intend to ~" / "plan to ~" — expresses intention',
            example: {
                jp: 'なつに　にほんに　いくつもりです。',
                en: 'I intend to go to Japan in summer.'
            },
            notes: 'Dictionary form + つもりです for positive intention. ～ないつもりです for intending not to do something.'
        }
    ]
};
