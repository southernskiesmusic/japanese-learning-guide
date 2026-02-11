/* ================================================================
   LESSON: Japanese Numbers
   Counting from 1 to 10,000 — basic numbers, hundreds, thousands, money
   ================================================================ */
var LESSON_NUMBERS_INTRO = {
    id: 'numbers-intro',
    title: 'Japanese Numbers',
    subtitle: 'Counting from 1 to 10,000',
    folder: 'vocab-folder',
    screens: [

        // ── 1. Number system overview ─────────────────────────────
        {
            type: 'concept',
            title: 'The Japanese Number System',
            html: '<p>Japanese primarily uses <strong>Sino-Japanese</strong> (Chinese-origin) readings for numbers. These are the standard numbers used for counting, prices, phone numbers, and most everyday purposes.</p>' +
                '<div class="example-box">' +
                '<p>Unlike English, Japanese numbers follow a <strong>completely logical, place-value pattern</strong>:</p>' +
                '<ul>' +
                '<li>There are no special words like "eleven" or "twelve"</li>' +
                '<li>25 is literally "two-ten-five" (<span class="jp-medium">にじゅうご</span>)</li>' +
                '<li>347 is "three-hundred-four-ten-seven" (<span class="jp-medium">さんびゃくよんじゅうなな</span>)</li>' +
                '</ul>' +
                '</div>' +
                '<p>However, there are some <strong>important irregular readings</strong> for certain hundreds and thousands that you will need to memorise.</p>' +
                '<p>Japanese also has a separate <strong>native Japanese</strong> counting system (ひとつ, ふたつ...) which is used with the general counter. You will learn that in the Counters lesson.</p>'
        },

        // ── 2. Numbers 1-10 ───────────────────────────────────────
        {
            type: 'concept',
            title: 'Numbers 1 - 10',
            html: '<p>These ten numbers are the foundation of all Japanese counting:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">#</th><th style="padding:6px;">Kanji</th><th style="padding:6px;">Reading</th><th style="padding:6px;">Romaji</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">1</td><td style="padding:6px;"><span class="jp-medium">一</span></td><td style="padding:6px;">いち</td><td style="padding:6px;">ichi</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">2</td><td style="padding:6px;"><span class="jp-medium">二</span></td><td style="padding:6px;">に</td><td style="padding:6px;">ni</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">3</td><td style="padding:6px;"><span class="jp-medium">三</span></td><td style="padding:6px;">さん</td><td style="padding:6px;">san</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">4</td><td style="padding:6px;"><span class="jp-medium">四</span></td><td style="padding:6px;">し / よん</td><td style="padding:6px;">shi / yon</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">5</td><td style="padding:6px;"><span class="jp-medium">五</span></td><td style="padding:6px;">ご</td><td style="padding:6px;">go</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">6</td><td style="padding:6px;"><span class="jp-medium">六</span></td><td style="padding:6px;">ろく</td><td style="padding:6px;">roku</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">7</td><td style="padding:6px;"><span class="jp-medium">七</span></td><td style="padding:6px;">しち / なな</td><td style="padding:6px;">shichi / nana</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">8</td><td style="padding:6px;"><span class="jp-medium">八</span></td><td style="padding:6px;">はち</td><td style="padding:6px;">hachi</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">9</td><td style="padding:6px;"><span class="jp-medium">九</span></td><td style="padding:6px;">きゅう / く</td><td style="padding:6px;">kyuu / ku</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;text-align:center;">10</td><td style="padding:6px;"><span class="jp-medium">十</span></td><td style="padding:6px;">じゅう</td><td style="padding:6px;">juu</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Tip:</strong> 4 has two readings: <span class="jp-medium">し</span> and <span class="jp-medium">よん</span>. Use <span class="jp-medium">よん</span> for counting (し sounds like 死 "death"). Similarly, use <span class="jp-medium">なな</span> for 7 rather than <span class="jp-medium">しち</span> (which can be confused with いち).</p>'
        },

        // ── 3. Building larger numbers ────────────────────────────
        {
            type: 'example',
            title: 'Building Numbers 11 - 99',
            problem: '<p>Japanese numbers are built logically: <strong>tens digit + じゅう + ones digit</strong></p>' +
                '<p>For example, 25 is literally "two tens five".</p>',
            steps: [
                { text: '<strong>14</strong> = じゅう + よん = <span class="jp-medium"><strong>じゅうよん</strong></span><br>十四 (ten + four)' },
                { text: '<strong>25</strong> = にじゅう + ご = <span class="jp-medium"><strong>にじゅうご</strong></span><br>二十五 (2 tens + 5)' },
                { text: '<strong>38</strong> = さんじゅう + はち = <span class="jp-medium"><strong>さんじゅうはち</strong></span><br>三十八 (3 tens + 8)' },
                { text: '<strong>47</strong> = よんじゅう + なな = <span class="jp-medium"><strong>よんじゅうなな</strong></span><br>四十七 (4 tens + 7)' },
                { text: '<strong>60</strong> = ろくじゅう (just the tens, no ones) = <span class="jp-medium"><strong>ろくじゅう</strong></span><br>六十 (6 tens)' },
                { text: '<strong>99</strong> = きゅうじゅう + きゅう = <span class="jp-medium"><strong>きゅうじゅうきゅう</strong></span><br>九十九 (9 tens + 9)' }
            ]
        },

        // ── 4. Practice: Number → reading MC ──────────────────────
        {
            type: 'practice',
            intro: 'What is this number in Japanese?',
            generate: function () {
                var ones = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
                var tensPfx = ['', '', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];

                function toReading(n) {
                    if (n === 0) return 'ゼロ';
                    if (n === 10) return 'じゅう';
                    if (n < 10) return ones[n];
                    var t = Math.floor(n / 10);
                    var o = n % 10;
                    return (t === 1 ? '' : tensPfx[t]) + 'じゅう' + (o > 0 ? ones[o] : '');
                }

                var num = randInt(11, 99);
                var correct = toReading(num);

                var wrongNums = [];
                var candidates = [num + 10, num - 10, num + 1, num - 1,
                    (num % 10) * 10 + Math.floor(num / 10)];
                for (var i = 0; i < candidates.length; i++) {
                    if (candidates[i] >= 1 && candidates[i] <= 99 && candidates[i] !== num) {
                        wrongNums.push(candidates[i]);
                    }
                }
                wrongNums = shuffle(wrongNums);
                var opts = [correct];
                for (var j = 0; j < wrongNums.length && opts.length < 4; j++) {
                    var wr = toReading(wrongNums[j]);
                    if (opts.indexOf(wr) === -1) opts.push(wr);
                }
                opts = shuffle(opts);

                return {
                    type: 'mc',
                    prompt: '<span style="font-size:2.5rem;font-weight:bold;">' + num + '</span>',
                    text: 'How do you say this number in Japanese?',
                    options: opts,
                    answer: correct,
                    explain: '<strong>' + num + '</strong> = <span class="jp-medium">' + correct + '</span>'
                };
            }
        },

        // ── 5. Hundreds — regular and irregular ───────────────────
        {
            type: 'concept',
            title: 'Hundreds: ひゃく',
            html: '<p><span class="jp-large">百</span> (ひゃく) = <strong>100</strong>. To count hundreds, place the digit before ひゃく.</p>' +
                '<p>But watch out for <strong>three irregular readings</strong>:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">#</th><th style="padding:6px;">Reading</th><th style="padding:6px;">Notes</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">100</td><td style="padding:6px;"><span class="jp-medium">ひゃく</span></td><td style="padding:6px;">No prefix for 1</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">200</td><td style="padding:6px;"><span class="jp-medium">にひゃく</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:6px;text-align:center;">300</td><td style="padding:6px;"><span class="jp-medium"><strong>さんびゃく</strong></span></td><td style="padding:6px;color:var(--error);">Irregular! (not さんひゃく)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">400</td><td style="padding:6px;"><span class="jp-medium">よんひゃく</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">500</td><td style="padding:6px;"><span class="jp-medium">ごひゃく</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:6px;text-align:center;">600</td><td style="padding:6px;"><span class="jp-medium"><strong>ろっぴゃく</strong></span></td><td style="padding:6px;color:var(--error);">Irregular! (not ろくひゃく)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">700</td><td style="padding:6px;"><span class="jp-medium">ななひゃく</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:6px;text-align:center;">800</td><td style="padding:6px;"><span class="jp-medium"><strong>はっぴゃく</strong></span></td><td style="padding:6px;color:var(--error);">Irregular! (not はちひゃく)</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;text-align:center;">900</td><td style="padding:6px;"><span class="jp-medium">きゅうひゃく</span></td><td style="padding:6px;">Regular</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Memory tip:</strong> The irregulars are 3, 6, and 8 hundred. The consonant changes are caused by <em>sound assimilation</em> (連濁) — the same reason we say "sanbyaku" instead of "sanhyaku" in spoken Japanese.</p>'
        },

        // ── 6. Thousands — regular and irregular ──────────────────
        {
            type: 'concept',
            title: 'Thousands: せん',
            html: '<p><span class="jp-large">千</span> (せん) = <strong>1,000</strong>. To count thousands, place the digit before せん.</p>' +
                '<p>There are <strong>two irregular readings</strong> to watch out for:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">#</th><th style="padding:6px;">Reading</th><th style="padding:6px;">Notes</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">1,000</td><td style="padding:6px;"><span class="jp-medium">せん</span></td><td style="padding:6px;">No prefix for 1</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">2,000</td><td style="padding:6px;"><span class="jp-medium">にせん</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:6px;text-align:center;">3,000</td><td style="padding:6px;"><span class="jp-medium"><strong>さんぜん</strong></span></td><td style="padding:6px;color:var(--error);">Irregular! (not さんせん)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">4,000</td><td style="padding:6px;"><span class="jp-medium">よんせん</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">5,000</td><td style="padding:6px;"><span class="jp-medium">ごせん</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">6,000</td><td style="padding:6px;"><span class="jp-medium">ろくせん</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">7,000</td><td style="padding:6px;"><span class="jp-medium">ななせん</span></td><td style="padding:6px;">Regular</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:6px;text-align:center;">8,000</td><td style="padding:6px;"><span class="jp-medium"><strong>はっせん</strong></span></td><td style="padding:6px;color:var(--error);">Irregular! (not はちせん)</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;text-align:center;">9,000</td><td style="padding:6px;"><span class="jp-medium">きゅうせん</span></td><td style="padding:6px;">Regular</td></tr>' +
                '</table>' +
                '</div>' +
                '<p>Above 9,999, Japanese uses <span class="jp-medium">万</span> (まん) = <strong>10,000</strong>. So 10,000 is <span class="jp-medium">いちまん</span>, not "じゅうせん".</p>'
        },

        // ── 7. Example: large number breakdown ────────────────────
        {
            type: 'example',
            title: 'Reading Large Numbers',
            problem: '<p>Let\'s break down the number <strong>4,562</strong> into its Japanese reading.</p>' +
                '<p>Remember: <strong>thousands + hundreds + tens + ones</strong></p>',
            steps: [
                { text: '<strong>Thousands:</strong> 4,000 = <span class="jp-medium">よんせん</span><br>4 is よん, thousand is せん (regular)' },
                { text: '<strong>Hundreds:</strong> 500 = <span class="jp-medium">ごひゃく</span><br>5 is ご, hundred is ひゃく (regular)' },
                { text: '<strong>Tens:</strong> 60 = <span class="jp-medium">ろくじゅう</span><br>6 is ろく, ten is じゅう' },
                { text: '<strong>Ones:</strong> 2 = <span class="jp-medium">に</span>' },
                { text: '<strong>Combined:</strong> 4,562 = <span class="jp-medium" style="font-size:1.4rem;"><strong>よんせんごひゃくろくじゅうに</strong></span><br>四千五百六十二' }
            ]
        },

        // ── 8. Practice: type the reading ─────────────────────────
        {
            type: 'practice',
            intro: 'Type the Japanese reading for this number.',
            generate: function () {
                var ones   = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
                var tensPfx = ['', '', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
                var hundredsMap = {
                    1: 'ひゃく', 2: 'にひゃく', 3: 'さんびゃく', 4: 'よんひゃく',
                    5: 'ごひゃく', 6: 'ろっぴゃく', 7: 'ななひゃく', 8: 'はっぴゃく', 9: 'きゅうひゃく'
                };

                function toReading(n) {
                    if (n === 0) return 'ゼロ';
                    var result = '';
                    var hu = Math.floor(n / 100);
                    var te = Math.floor((n % 100) / 10);
                    var on = n % 10;
                    if (hu > 0) result += hundredsMap[hu];
                    if (te > 0) result += (te === 1 ? '' : tensPfx[te]) + 'じゅう';
                    if (on > 0) result += ones[on];
                    return result;
                }

                var num = randInt(100, 999);
                var correct = toReading(num);

                return {
                    type: 'free',
                    lang: 'ja',
                    prompt: '<span style="font-size:2.5rem;font-weight:bold;">' + num + '</span>',
                    text: 'Type the reading in hiragana',
                    placeholder: 'ひらがな...',
                    answer: correct,
                    check: function (val) { return val === correct; },
                    explain: '<strong>' + num + '</strong> = <span class="jp-medium">' + correct + '</span>'
                };
            }
        },

        // ── 9. Money ──────────────────────────────────────────────
        {
            type: 'concept',
            title: 'Money: えん (Yen)',
            html: '<p>Japanese currency is <span class="jp-large">円</span> (えん, en/yen). Just add <span class="jp-medium">えん</span> after the number:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;">Amount</th><th style="padding:6px;">Reading</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">¥100</td><td style="padding:6px;"><span class="jp-medium">ひゃくえん</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">¥300</td><td style="padding:6px;"><span class="jp-medium"><strong>さんびゃく</strong>えん</span> (irregular!)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">¥500</td><td style="padding:6px;"><span class="jp-medium">ごひゃくえん</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">¥1,000</td><td style="padding:6px;"><span class="jp-medium">せんえん</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">¥3,000</td><td style="padding:6px;"><span class="jp-medium"><strong>さんぜん</strong>えん</span> (irregular!)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;">¥5,000</td><td style="padding:6px;"><span class="jp-medium">ごせんえん</span></td></tr>' +
                '<tr>' +
                '<td style="padding:6px;">¥10,000</td><td style="padding:6px;"><span class="jp-medium">いちまんえん</span></td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Common denominations:</strong> The most-used bills and coins in Japan are ¥100, ¥500, ¥1,000, ¥5,000, and ¥10,000. Knowing these readings is essential for shopping!</p>' +
                '<p>When asking a price: <span class="jp-medium">いくらですか？</span> (ikura desu ka?) = "How much is it?"</p>'
        },

        // ── 10. Summary ───────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned the Japanese number system from 1 to 10,000:</p>' +
                '<ul>' +
                '<li><strong>1-10:</strong> いち, に, さん, し/よん, ご, ろく, しち/なな, はち, きゅう/く, じゅう</li>' +
                '<li><strong>11-99:</strong> Logical pattern: tens digit + じゅう + ones digit</li>' +
                '<li><strong>Hundreds:</strong> ～ひゃく (irregulars: 300=さんびゃく, 600=ろっぴゃく, 800=はっぴゃく)</li>' +
                '<li><strong>Thousands:</strong> ～せん (irregulars: 3000=さんぜん, 8000=はっせん)</li>' +
                '<li><strong>Money:</strong> Number + えん (e.g. ¥500 = ごひゃくえん)</li>' +
                '</ul>' +
                '<p>Practice these numbers with the <strong>Numbers Activity</strong> to build speed and confidence!</p>',
            nextActivity: 'num-activity'
        }
    ]
};
