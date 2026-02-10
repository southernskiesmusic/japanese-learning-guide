/* ================================================================
   LESSON: Katakana Loan Words
   Decoding foreign words in katakana
   ================================================================ */
var LESSON_KATAKANA_LOANWORDS = {
    id: 'katakana-loanwords',
    title: 'Katakana Loan Words',
    subtitle: 'Decoding foreign words written in katakana',
    folder: 'writing',
    screens: [

        // ── 1. How loan words work ────────────────────────────────
        {
            type: 'concept',
            title: 'Foreign Words in Japanese',
            html: '<p>Japanese borrows thousands of words from English and other languages. These are written in <strong>katakana</strong> and adapted to fit the Japanese sound system.</p>' +
                '<p>Once you learn the patterns, you can <strong>decode</strong> most katakana words back to their English originals!</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-large">テレビ</span> → terebi → <strong>television</strong></p>' +
                '<p><span class="jp-large">ホテル</span> → hoteru → <strong>hotel</strong></p>' +
                '<p><span class="jp-large">バス</span> → basu → <strong>bus</strong></p>' +
                '</div>'
        },

        // ── 2. Sound change rules ─────────────────────────────────
        {
            type: 'concept',
            title: 'Sound Change Rules',
            html: '<p>Japanese has strict syllable rules, so English sounds get transformed:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);background:var(--primary-light);">' +
                '<th style="padding:8px;text-align:left;">Rule</th><th style="padding:8px;text-align:left;">English</th><th style="padding:8px;text-align:left;">Japanese</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><strong>L → R</strong></td><td style="padding:8px;">hotel</td><td style="padding:8px;">ホテ<strong>ル</strong> (ru)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><strong>V → B</strong></td><td style="padding:8px;">television</td><td style="padding:8px;">テレ<strong>ビ</strong> (bi)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><strong>Add vowels</strong> after consonants</td><td style="padding:8px;">bus</td><td style="padding:8px;">バ<strong>ス</strong> (su)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><strong>Break clusters</strong></td><td style="padding:8px;">str → sut-o-r</td><td style="padding:8px;">レ<strong>スト</strong>ラン</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><strong>TH → S</strong></td><td style="padding:8px;">marathon</td><td style="padding:8px;">マラ<strong>ソ</strong>ン</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;"><strong>Long vowels → ー</strong></td><td style="padding:8px;">cream</td><td style="padding:8px;">クリ<strong>ー</strong>ム</td></tr>' +
                '</table>'
        },

        // ── 3. Common loan words (example) ────────────────────────
        {
            type: 'example',
            title: 'Common Loan Words',
            problem: '<p>Let\'s look at common loan words and see how the English maps to katakana:</p>',
            steps: [
                { text: '<span class="jp-large">パソコン</span> → pasokon → <strong>personal computer</strong> (abbreviated!)' },
                { text: '<span class="jp-large">アイスクリーム</span> → aisukurīmu → <strong>ice cream</strong>' },
                { text: '<span class="jp-large">チョコレート</span> → chokorēto → <strong>chocolate</strong> (l→r, vowels added)' },
                { text: '<span class="jp-large">スマートフォン</span> → sumātofon → <strong>smartphone</strong> (ph→f)' },
                { text: '<span class="jp-large">レストラン</span> → resutoran → <strong>restaurant</strong> (clusters broken up)' },
                { text: '<span class="jp-large">コンビニ</span> → konbini → <strong>convenience store</strong> (abbreviated!)' }
            ]
        },

        // ── 4. Practice: match katakana to English ────────────────
        {
            type: 'practice',
            intro: 'What English word does this katakana represent?',
            generate: function () {
                var words = [
                    { jp: 'テレビ', en: 'television' },
                    { jp: 'ホテル', en: 'hotel' },
                    { jp: 'バス', en: 'bus' },
                    { jp: 'パソコン', en: 'personal computer' },
                    { jp: 'チョコレート', en: 'chocolate' },
                    { jp: 'レストラン', en: 'restaurant' },
                    { jp: 'スマートフォン', en: 'smartphone' },
                    { jp: 'アイスクリーム', en: 'ice cream' },
                    { jp: 'コンビニ', en: 'convenience store' },
                    { jp: 'タクシー', en: 'taxi' },
                    { jp: 'エレベーター', en: 'elevator' },
                    { jp: 'カメラ', en: 'camera' },
                    { jp: 'ビール', en: 'beer' },
                    { jp: 'コーヒー', en: 'coffee' },
                    { jp: 'サンドイッチ', en: 'sandwich' },
                    { jp: 'インターネット', en: 'internet' }
                ];
                var q = pick(words);
                var others = words.filter(function (w) { return w.en !== q.en; });
                var opts = [q.en];
                others = shuffle(others);
                for (var i = 0; i < 3; i++) opts.push(others[i].en);
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-large">' + q.jp + '</span>',
                    text: 'Which English word is this?',
                    options: opts,
                    answer: q.en,
                    explain: '<span class="jp-large">' + q.jp + '</span> = <strong>' + q.en + '</strong>'
                };
            }
        },

        // ── 5. Practice: which katakana matches? ──────────────────
        {
            type: 'practice',
            intro: 'Which katakana matches this English word?',
            generate: function () {
                var words = [
                    { jp: 'テレビ', en: 'television' },
                    { jp: 'ホテル', en: 'hotel' },
                    { jp: 'コーヒー', en: 'coffee' },
                    { jp: 'カメラ', en: 'camera' },
                    { jp: 'タクシー', en: 'taxi' },
                    { jp: 'ビール', en: 'beer' },
                    { jp: 'レストラン', en: 'restaurant' },
                    { jp: 'バス', en: 'bus' },
                    { jp: 'サンドイッチ', en: 'sandwich' },
                    { jp: 'エレベーター', en: 'elevator' },
                    { jp: 'チョコレート', en: 'chocolate' },
                    { jp: 'インターネット', en: 'internet' }
                ];
                var q = pick(words);
                var others = words.filter(function (w) { return w.jp !== q.jp; });
                var opts = [q.jp];
                others = shuffle(others);
                for (var i = 0; i < 3; i++) opts.push(others[i].jp);
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<strong style="font-size:1.3rem;">' + q.en + '</strong>',
                    text: 'Which katakana word matches?',
                    options: opts,
                    answer: q.jp,
                    explain: q.en + ' = <span class="jp-large">' + q.jp + '</span>'
                };
            }
        },

        // ── 6. Summary ───────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You can now decode katakana loan words! Remember the key rules:</p>' +
                '<ul>' +
                '<li><strong>L → R</strong> (hotel → ホテル)</li>' +
                '<li><strong>V → B</strong> (television → テレビ)</li>' +
                '<li><strong>Vowels added</strong> after consonants (bus → バス)</li>' +
                '<li><strong>Clusters broken</strong> with vowels (restaurant → レストラン)</li>' +
                '<li>Some words are <strong>abbreviated</strong> (パソコン, コンビニ)</li>' +
                '</ul>' +
                '<p>Try reading katakana signs and menus — you\'ll be surprised how much you can decode!</p>',
            nextActivity: 'kata-trainer'
        }
    ]
};
