/* ================================================================
   LESSON: Counting & Numbers
   Japanese number systems and counters
   ================================================================ */
var LESSON_COUNTING = {
    id: 'counting',
    title: 'Counting & Numbers',
    subtitle: 'Japanese number systems',
    folder: 'vocab-folder',
    screens: [

        // ── 1. Numbers 1-10 ─────────────────────────────────────
        {
            type: 'concept',
            title: 'Numbers 1 - 10',
            html: '<p>Japanese uses <strong>Sino-Japanese</strong> (Chinese-origin) numbers for most counting:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">#</th><th style="padding:6px;">Kanji</th><th style="padding:6px;">Reading</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">1</td><td style="padding:6px;"><span class="jp-medium">一</span></td><td style="padding:6px;">いち (ichi)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">2</td><td style="padding:6px;"><span class="jp-medium">二</span></td><td style="padding:6px;">に (ni)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">3</td><td style="padding:6px;"><span class="jp-medium">三</span></td><td style="padding:6px;">さん (san)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">4</td><td style="padding:6px;"><span class="jp-medium">四</span></td><td style="padding:6px;">し / よん (shi / yon)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">5</td><td style="padding:6px;"><span class="jp-medium">五</span></td><td style="padding:6px;">ご (go)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">6</td><td style="padding:6px;"><span class="jp-medium">六</span></td><td style="padding:6px;">ろく (roku)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">7</td><td style="padding:6px;"><span class="jp-medium">七</span></td><td style="padding:6px;">しち / なな (shichi / nana)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">8</td><td style="padding:6px;"><span class="jp-medium">八</span></td><td style="padding:6px;">はち (hachi)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">9</td><td style="padding:6px;"><span class="jp-medium">九</span></td><td style="padding:6px;">きゅう / く (kyuu / ku)</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;text-align:center;">10</td><td style="padding:6px;"><span class="jp-medium">十</span></td><td style="padding:6px;">じゅう (juu)</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Tip:</strong> 4 and 7 have two readings each. よん and なな are more commonly used because し sounds like 死 (death) and しち can be confused with いち.</p>'
        },

        // ── 2. Numbers 11-100 ───────────────────────────────────
        {
            type: 'concept',
            title: 'Numbers 11 - 100',
            html: '<p>Japanese numbers follow a very logical <strong>building pattern</strong>:</p>' +
                '<div class="example-box">' +
                '<p><strong>11-19:</strong> じゅう + ones digit</p>' +
                '<p><span class="jp-medium">十一</span> = じゅういち (11) &nbsp; | &nbsp; ' +
                '<span class="jp-medium">十五</span> = じゅうご (15) &nbsp; | &nbsp; ' +
                '<span class="jp-medium">十九</span> = じゅうきゅう (19)</p>' +
                '</div>' +
                '<div class="example-box">' +
                '<p><strong>20-90:</strong> digit + じゅう</p>' +
                '<p><span class="jp-medium">二十</span> = にじゅう (20) &nbsp; | &nbsp; ' +
                '<span class="jp-medium">三十</span> = さんじゅう (30) &nbsp; | &nbsp; ' +
                '<span class="jp-medium">五十</span> = ごじゅう (50)</p>' +
                '</div>' +
                '<div class="example-box">' +
                '<p><strong>Combining:</strong> tens + ones</p>' +
                '<p><span class="jp-medium">二十三</span> = にじゅうさん (23) &nbsp; | &nbsp; ' +
                '<span class="jp-medium">四十七</span> = よんじゅうなな (47)</p>' +
                '</div>' +
                '<p><span class="jp-large">百</span> = ひゃく (hyaku) = <strong>100</strong></p>' +
                '<p>Unlike English, there is no special word for "eleven" or "twelve" — the pattern is completely regular!</p>'
        },

        // ── 3. Example: count to 99 ─────────────────────────────
        {
            type: 'example',
            title: 'Counting Practice',
            problem: '<p>Let\'s practice building numbers. Remember: <strong>tens digit + じゅう + ones digit</strong></p>',
            steps: [
                { text: '<strong>21</strong> = にじゅう + いち = <span class="jp-medium"><strong>にじゅういち</strong></span><br>二十一 (2 tens + 1)' },
                { text: '<strong>35</strong> = さんじゅう + ご = <span class="jp-medium"><strong>さんじゅうご</strong></span><br>三十五 (3 tens + 5)' },
                { text: '<strong>48</strong> = よんじゅう + はち = <span class="jp-medium"><strong>よんじゅうはち</strong></span><br>四十八 (4 tens + 8)' },
                { text: '<strong>76</strong> = ななじゅう + ろく = <span class="jp-medium"><strong>ななじゅうろく</strong></span><br>七十六 (7 tens + 6)' },
                { text: '<strong>99</strong> = きゅうじゅう + きゅう = <span class="jp-medium"><strong>きゅうじゅうきゅう</strong></span><br>九十九 (9 tens + 9)' }
            ]
        },

        // ── 4. Practice: number → reading MC ────────────────────
        {
            type: 'practice',
            intro: 'How do you read this number in Japanese?',
            generate: function () {
                var ones = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
                var tens = ['', 'じゅう', 'にじゅう', 'さんじゅう', 'よんじゅう', 'ごじゅう', 'ろくじゅう', 'ななじゅう', 'はちじゅう', 'きゅうじゅう'];

                function toReading(n) {
                    if (n === 0) return 'ゼロ';
                    if (n <= 10) {
                        if (n === 10) return 'じゅう';
                        return ones[n];
                    }
                    var t = Math.floor(n / 10);
                    var o = n % 10;
                    return tens[t] + (o > 0 ? ones[o] : '');
                }

                var num = randInt(11, 99);
                var correct = toReading(num);

                // Generate distractors by nearby or swapped numbers
                var wrongNums = [];
                var candidates = [num + 10, num - 10, num + 1, num - 1, (num % 10) * 10 + Math.floor(num / 10)];
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

        // ── 5. Counters ─────────────────────────────────────────
        {
            type: 'concept',
            title: 'Counters (助数詞)',
            html: '<p>In Japanese, you cannot just say "three books" — you need a <strong>counter</strong> (助数詞 / じょすうし) between the number and noun.</p>' +
                '<p>Think of it like English "three <em>sheets</em> of paper" or "two <em>cups</em> of coffee" — but for <em>everything</em>.</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;">Counter</th><th style="padding:6px;">Used for</th><th style="padding:6px;">Example</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">つ</span></td><td style="padding:6px;">General (native Japanese)</td><td style="padding:6px;"><span class="jp-medium">りんごを三<strong>つ</strong></span> — 3 apples</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">人（にん）</span></td><td style="padding:6px;">People</td><td style="padding:6px;"><span class="jp-medium">三<strong>人</strong></span> — 3 people</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">本（ほん）</span></td><td style="padding:6px;">Long/thin objects</td><td style="padding:6px;"><span class="jp-medium">ペンを二<strong>本</strong></span> — 2 pens</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">枚（まい）</span></td><td style="padding:6px;">Flat objects</td><td style="padding:6px;"><span class="jp-medium">紙を五<strong>枚</strong></span> — 5 sheets of paper</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;"><span class="jp-medium">匹（ひき）</span></td><td style="padding:6px;">Small animals</td><td style="padding:6px;"><span class="jp-medium">猫が二<strong>匹</strong></span> — 2 cats</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;"><span class="jp-medium">個（こ）</span></td><td style="padding:6px;">Small round objects</td><td style="padding:6px;"><span class="jp-medium">卵を三<strong>個</strong></span> — 3 eggs</td></tr>' +
                '</table>' +
                '</div>'
        },

        // ── 6. The つ counter ───────────────────────────────────
        {
            type: 'concept',
            title: 'The つ Counter (Native Japanese)',
            html: '<p>The <span class="jp-large">つ</span> counter uses <strong>native Japanese numbers</strong> (not Sino-Japanese). It works for almost anything when you are unsure which counter to use.</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">#</th><th style="padding:6px;">Reading</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">1</td><td style="padding:6px;"><span class="jp-medium">ひと<strong>つ</strong></span> (hitotsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">2</td><td style="padding:6px;"><span class="jp-medium">ふた<strong>つ</strong></span> (futatsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">3</td><td style="padding:6px;"><span class="jp-medium">みっ<strong>つ</strong></span> (mittsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">4</td><td style="padding:6px;"><span class="jp-medium">よっ<strong>つ</strong></span> (yottsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">5</td><td style="padding:6px;"><span class="jp-medium">いつ<strong>つ</strong></span> (itsutsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">6</td><td style="padding:6px;"><span class="jp-medium">むっ<strong>つ</strong></span> (muttsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">7</td><td style="padding:6px;"><span class="jp-medium">なな<strong>つ</strong></span> (nanatsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">8</td><td style="padding:6px;"><span class="jp-medium">やっ<strong>つ</strong></span> (yattsu)</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">9</td><td style="padding:6px;"><span class="jp-medium">ここの<strong>つ</strong></span> (kokonotsu)</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;text-align:center;">10</td><td style="padding:6px;"><span class="jp-medium"><strong>とお</strong></span> (too) — no つ!</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Note:</strong> This system only goes up to 10. For 11 and above, use Sino-Japanese numbers with the appropriate counter.</p>'
        },

        // ── 7. Practice: number/counter MC ──────────────────────
        {
            type: 'practice',
            intro: 'How do you say this in Japanese?',
            generate: function () {
                var types = ['tsu', 'number', 'people'];
                var type = pick(types);

                if (type === 'tsu') {
                    var tsuReadings = ['ひとつ', 'ふたつ', 'みっつ', 'よっつ', 'いつつ', 'むっつ', 'ななつ', 'やっつ', 'ここのつ', 'とお'];
                    var idx = randInt(0, 9);
                    var correct = tsuReadings[idx];
                    var wrongIdx = shuffle([0,1,2,3,4,5,6,7,8,9].filter(function (i) { return i !== idx; }));
                    var opts = [correct];
                    for (var i = 0; i < 3; i++) opts.push(tsuReadings[wrongIdx[i]]);
                    opts = shuffle(opts);
                    return {
                        type: 'mc',
                        prompt: '<strong>' + (idx + 1) + ' thing' + (idx > 0 ? 's' : '') + '</strong> (using the つ counter)',
                        text: 'Choose the correct reading.',
                        options: opts,
                        answer: correct,
                        explain: '<strong>' + (idx + 1) + '</strong> = <span class="jp-medium">' + correct + '</span>'
                    };
                }

                if (type === 'people') {
                    var peopleData = [
                        { num: 1, reading: 'ひとり', kanji: '一人' },
                        { num: 2, reading: 'ふたり', kanji: '二人' },
                        { num: 3, reading: 'さんにん', kanji: '三人' },
                        { num: 4, reading: 'よにん', kanji: '四人' },
                        { num: 5, reading: 'ごにん', kanji: '五人' }
                    ];
                    var p = pick(peopleData);
                    var wrongPeople = shuffle(peopleData.filter(function (x) { return x.num !== p.num; }));
                    var opts2 = [p.reading];
                    for (var j = 0; j < 3 && j < wrongPeople.length; j++) opts2.push(wrongPeople[j].reading);
                    opts2 = shuffle(opts2);
                    return {
                        type: 'mc',
                        prompt: '<strong>' + p.num + ' person' + (p.num > 1 ? 's' : '') + '</strong> (using 人 counter)',
                        text: 'Choose the correct reading.',
                        options: opts2,
                        answer: p.reading,
                        explain: '<strong>' + p.num + ' person' + (p.num > 1 ? 's' : '') + '</strong> = <span class="jp-medium">' + p.kanji + ' (' + p.reading + ')</span>'
                    };
                }

                // Plain number
                var ones = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
                var tens = ['', 'じゅう', 'にじゅう', 'さんじゅう', 'よんじゅう', 'ごじゅう', 'ろくじゅう', 'ななじゅう', 'はちじゅう', 'きゅうじゅう'];
                function toReading(n) {
                    if (n <= 10) {
                        if (n === 10) return 'じゅう';
                        return ones[n];
                    }
                    var t = Math.floor(n / 10);
                    var o = n % 10;
                    return tens[t] + (o > 0 ? ones[o] : '');
                }
                var num = randInt(1, 99);
                var correctR = toReading(num);
                var wrongNums = shuffle([num + 1, num - 1, num + 10, num - 10].filter(function (n) { return n >= 1 && n <= 99 && n !== num; }));
                var opts3 = [correctR];
                for (var k = 0; k < wrongNums.length && opts3.length < 4; k++) {
                    var wr = toReading(wrongNums[k]);
                    if (opts3.indexOf(wr) === -1) opts3.push(wr);
                }
                opts3 = shuffle(opts3);
                return {
                    type: 'mc',
                    prompt: '<span style="font-size:2.5rem;font-weight:bold;">' + num + '</span>',
                    text: 'How do you say this number?',
                    options: opts3,
                    answer: correctR,
                    explain: '<strong>' + num + '</strong> = <span class="jp-medium">' + correctR + '</span>'
                };
            }
        },

        // ── 8. Summary ──────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned the Japanese number system:</p>' +
                '<ul>' +
                '<li><strong>1-10:</strong> いち, に, さん, し/よん, ご, ろく, しち/なな, はち, きゅう, じゅう</li>' +
                '<li><strong>11-99:</strong> Combine tens + ones (にじゅうさん = 23)</li>' +
                '<li><strong>100:</strong> ひゃく</li>' +
                '<li><strong>Counters:</strong> つ (general), 人 (people), 本 (long), 枚 (flat), 匹 (animals), 個 (small)</li>' +
                '<li><strong>Native つ counter:</strong> ひとつ, ふたつ, みっつ... とお</li>' +
                '</ul>' +
                '<p>Test your number skills with the Vocabulary Trainer!</p>',
            nextActivity: 'vocab-trainer'
        }
    ]
};
