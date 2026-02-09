/* ================================================================
   LESSON: Counters & Time
   Japanese counter words, telling time, and dates
   ================================================================ */
var LESSON_NUMBERS_COUNTERS = {
    id: 'numbers-counters',
    title: 'Counters & Time',
    subtitle: 'Japanese counter words, time, and dates',
    folder: 'vocab-folder',
    screens: [

        // ── 1. Why counters exist ─────────────────────────────────
        {
            type: 'concept',
            title: 'Why Japanese Needs Counters',
            html: '<p>In English you can say "three books" directly. In Japanese, you must use a <strong>counter word</strong> (助数詞 / じょすうし) — a special suffix between the number and the noun.</p>' +
                '<div class="example-box">' +
                '<p>Think of it like English measure words:</p>' +
                '<ul>' +
                '<li>three <em>sheets</em> of paper</li>' +
                '<li>two <em>cups</em> of coffee</li>' +
                '<li>a <em>loaf</em> of bread</li>' +
                '</ul>' +
                '<p>In Japanese, <strong>everything</strong> needs a counter — not just uncountable nouns.</p>' +
                '</div>' +
                '<p>Counters are grouped by the <strong>shape or category</strong> of what you are counting:</p>' +
                '<ul>' +
                '<li><span class="jp-medium">～つ</span> — general purpose (native Japanese)</li>' +
                '<li><span class="jp-medium">～人（にん）</span> — people</li>' +
                '<li><span class="jp-medium">～本（ほん）</span> — long, thin objects</li>' +
                '<li><span class="jp-medium">～枚（まい）</span> — flat objects</li>' +
                '<li><span class="jp-medium">～匹（ひき）</span> — small animals</li>' +
                '<li><span class="jp-medium">～台（だい）</span> — machines and vehicles</li>' +
                '</ul>' +
                '<p>When you are unsure which counter to use, the <strong>general counter ～つ</strong> works for almost anything!</p>'
        },

        // ── 2. General counter ～つ ────────────────────────────────
        {
            type: 'concept',
            title: 'The General Counter: ～つ',
            html: '<p>The <span class="jp-large">つ</span> counter uses <strong>native Japanese numbers</strong> (not the Sino-Japanese ones). It only goes up to 10 and works as a safe fallback for almost any object.</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">#</th><th style="padding:6px;">Reading</th><th style="padding:6px;">Romaji</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">1</td><td style="padding:6px;"><span class="jp-medium">ひと<strong>つ</strong></span></td><td style="padding:6px;">hitotsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">2</td><td style="padding:6px;"><span class="jp-medium">ふた<strong>つ</strong></span></td><td style="padding:6px;">futatsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">3</td><td style="padding:6px;"><span class="jp-medium">みっ<strong>つ</strong></span></td><td style="padding:6px;">mittsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">4</td><td style="padding:6px;"><span class="jp-medium">よっ<strong>つ</strong></span></td><td style="padding:6px;">yottsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">5</td><td style="padding:6px;"><span class="jp-medium">いつ<strong>つ</strong></span></td><td style="padding:6px;">itsutsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">6</td><td style="padding:6px;"><span class="jp-medium">むっ<strong>つ</strong></span></td><td style="padding:6px;">muttsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">7</td><td style="padding:6px;"><span class="jp-medium">なな<strong>つ</strong></span></td><td style="padding:6px;">nanatsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">8</td><td style="padding:6px;"><span class="jp-medium">やっ<strong>つ</strong></span></td><td style="padding:6px;">yattsu</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">9</td><td style="padding:6px;"><span class="jp-medium">ここの<strong>つ</strong></span></td><td style="padding:6px;">kokonotsu</td></tr>' +
                '<tr>' +
                '<td style="padding:6px;text-align:center;">10</td><td style="padding:6px;"><span class="jp-medium"><strong>とお</strong></span></td><td style="padding:6px;">too (no つ!)</td></tr>' +
                '</table>' +
                '</div>' +
                '<p><strong>Note:</strong> 10 is just <span class="jp-medium">とお</span> — it drops the つ. Above 10, you switch to Sino-Japanese numbers with specific counters.</p>'
        },

        // ── 3. Example: using the general counter ─────────────────
        {
            type: 'example',
            title: 'Using the General Counter',
            problem: '<p>The ～つ counter is placed <strong>after</strong> the particle or <strong>before</strong> the verb. Here are some natural examples:</p>',
            steps: [
                { text: '<span class="jp-medium">りんごを<strong>みっつ</strong>ください。</span><br>Ringo wo mittsu kudasai.<br>"Three apples, please."' },
                { text: '<span class="jp-medium">いすが<strong>よっつ</strong>あります。</span><br>Isu ga yottsu arimasu.<br>"There are four chairs."' },
                { text: '<span class="jp-medium">おかしを<strong>ふたつ</strong>かいました。</span><br>Okashi wo futatsu kaimashita.<br>"I bought two sweets."' },
                { text: '<span class="jp-medium">もんだいが<strong>ひとつ</strong>あります。</span><br>Mondai ga hitotsu arimasu.<br>"There is one problem."' }
            ]
        },

        // ── 4. Practice: counter MC ───────────────────────────────
        {
            type: 'practice',
            intro: 'How do you count this in Japanese?',
            generate: function () {
                var types = ['tsu', 'people', 'hon'];
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
                        prompt: '<strong>' + (idx + 1) + ' thing' + (idx > 0 ? 's' : '') + '</strong> (using the ～つ counter)',
                        text: 'Choose the correct reading.',
                        options: opts,
                        answer: correct,
                        explain: '<strong>' + (idx + 1) + '</strong> = <span class="jp-medium">' + correct + '</span>'
                    };
                }

                if (type === 'people') {
                    var peopleData = [
                        { num: 1, reading: 'ひとり', note: 'irregular' },
                        { num: 2, reading: 'ふたり', note: 'irregular' },
                        { num: 3, reading: 'さんにん', note: '' },
                        { num: 4, reading: 'よにん', note: 'irregular (not しにん)' },
                        { num: 5, reading: 'ごにん', note: '' }
                    ];
                    var p = pick(peopleData);
                    var wrongPeople = shuffle(peopleData.filter(function (x) { return x.num !== p.num; }));
                    var opts2 = [p.reading];
                    for (var j = 0; j < 3 && j < wrongPeople.length; j++) opts2.push(wrongPeople[j].reading);
                    opts2 = shuffle(opts2);
                    return {
                        type: 'mc',
                        prompt: '<strong>' + p.num + ' person' + (p.num > 1 ? 's' : '') + '</strong> (using the 人 counter)',
                        text: 'Choose the correct reading.',
                        options: opts2,
                        answer: p.reading,
                        explain: '<strong>' + p.num + ' person' + (p.num > 1 ? 's' : '') + '</strong> = <span class="jp-medium">' + p.reading + '</span>' + (p.note ? ' (' + p.note + ')' : '')
                    };
                }

                // 本 counter (long objects)
                var honData = [
                    { num: 1, reading: 'いっぽん', note: 'irregular' },
                    { num: 2, reading: 'にほん', note: '' },
                    { num: 3, reading: 'さんぼん', note: 'irregular' },
                    { num: 4, reading: 'よんほん', note: '' },
                    { num: 5, reading: 'ごほん', note: '' },
                    { num: 6, reading: 'ろっぽん', note: 'irregular' }
                ];
                var h = pick(honData);
                var wrongHon = shuffle(honData.filter(function (x) { return x.num !== h.num; }));
                var opts3 = [h.reading];
                for (var k = 0; k < 3 && k < wrongHon.length; k++) opts3.push(wrongHon[k].reading);
                opts3 = shuffle(opts3);
                return {
                    type: 'mc',
                    prompt: '<strong>' + h.num + ' pencil' + (h.num > 1 ? 's' : '') + '</strong> (using the 本 counter)',
                    text: 'Choose the correct reading.',
                    options: opts3,
                    answer: h.reading,
                    explain: '<strong>' + h.num + ' pencil' + (h.num > 1 ? 's' : '') + '</strong> = <span class="jp-medium">' + h.reading + '</span>' + (h.note ? ' (' + h.note + ')' : '')
                };
            }
        },

        // ── 5. People, long objects, flat objects ─────────────────
        {
            type: 'concept',
            title: 'Common Counters: 人, 本, 枚',
            html: '<h4><span class="jp-medium">～人（にん）</span> — People</h4>' +
                '<div class="example-box">' +
                '<p>1 and 2 are <strong>irregular</strong> (use native Japanese):</p>' +
                '<p><span class="jp-medium"><strong>ひとり</strong></span> (1 person), <span class="jp-medium"><strong>ふたり</strong></span> (2 people), <span class="jp-medium">さんにん</span> (3), <span class="jp-medium"><strong>よにん</strong></span> (4 — not しにん!), <span class="jp-medium">ごにん</span> (5)...</p>' +
                '</div>' +
                '<h4><span class="jp-medium">～本（ほん）</span> — Long, thin objects</h4>' +
                '<div class="example-box">' +
                '<p>Used for pencils, bottles, trees, roads, films, phone calls. The reading changes with certain numbers:</p>' +
                '<p><span class="jp-medium"><strong>いっぽん</strong></span> (1), <span class="jp-medium">にほん</span> (2), <span class="jp-medium"><strong>さんぼん</strong></span> (3), <span class="jp-medium">よんほん</span> (4), <span class="jp-medium">ごほん</span> (5), <span class="jp-medium"><strong>ろっぽん</strong></span> (6)...</p>' +
                '<p>Pattern: 1, 6, 8, 10 get <strong>っぽん</strong>; 3 gets <strong>ぼん</strong>; rest stay <strong>ほん</strong>.</p>' +
                '</div>' +
                '<h4><span class="jp-medium">～枚（まい）</span> — Flat objects</h4>' +
                '<div class="example-box">' +
                '<p>Used for paper, shirts, plates, tickets, pizza slices. Good news — <strong>completely regular</strong>!</p>' +
                '<p><span class="jp-medium">いちまい, にまい, さんまい, よんまい, ごまい, ろくまい...</span></p>' +
                '</div>'
        },

        // ── 6. Telling time ───────────────────────────────────────
        {
            type: 'concept',
            title: 'Telling Time: じ and ふん',
            html: '<p>Hours use <span class="jp-medium">～じ</span> (時) and minutes use <span class="jp-medium">～ふん/ぷん</span> (分).</p>' +
                '<h4>Hours (～じ)</h4>' +
                '<div class="example-box">' +
                '<p>Most are regular, but watch for these <strong>irregulars</strong>:</p>' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:4px;">4:00</td><td style="padding:4px;"><span class="jp-medium"><strong>よじ</strong></span></td><td style="padding:4px;color:var(--error);">not しじ</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:4px;">7:00</td><td style="padding:4px;"><span class="jp-medium">しちじ</span></td><td style="padding:4px;">uses しち, not なな</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);background:rgba(255,100,100,0.1);">' +
                '<td style="padding:4px;">9:00</td><td style="padding:4px;"><span class="jp-medium"><strong>くじ</strong></span></td><td style="padding:4px;color:var(--error);">not きゅうじ</td></tr>' +
                '</table>' +
                '</div>' +
                '<h4>Minutes (～ふん / ～ぷん)</h4>' +
                '<div class="example-box">' +
                '<p>Minutes alternate between ふん and ぷん. The irregulars are:</p>' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:4px;">1 min</td><td style="padding:4px;"><span class="jp-medium"><strong>いっぷん</strong></span></td>' +
                '<td style="padding:4px;">6 min</td><td style="padding:4px;"><span class="jp-medium"><strong>ろっぷん</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:4px;">3 min</td><td style="padding:4px;"><span class="jp-medium"><strong>さんぷん</strong></span></td>' +
                '<td style="padding:4px;">8 min</td><td style="padding:4px;"><span class="jp-medium"><strong>はっぷん</strong></span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:4px;">4 min</td><td style="padding:4px;"><span class="jp-medium"><strong>よんぷん</strong></span></td>' +
                '<td style="padding:4px;">10 min</td><td style="padding:4px;"><span class="jp-medium"><strong>じゅっぷん</strong></span></td></tr>' +
                '</table>' +
                '<p style="margin-top:8px;">Regular: 2 = にふん, 5 = ごふん, 7 = ななふん, 9 = きゅうふん</p>' +
                '</div>' +
                '<p><span class="jp-medium">はん</span> (half) can replace 30分: <span class="jp-medium">さんじはん</span> = 3:30</p>'
        },

        // ── 7. Example: reading clock time ────────────────────────
        {
            type: 'example',
            title: 'Reading Clock Time',
            problem: '<p>Let\'s read the time <strong>3:45</strong> in Japanese.</p>' +
                '<p>Format: <strong>hour + じ + minutes + ふん/ぷん</strong></p>',
            steps: [
                { text: '<strong>Hour:</strong> 3 = さん → <span class="jp-medium">さんじ</span><br>3 o\'clock is regular (just さん + じ)' },
                { text: '<strong>Minutes:</strong> 45 = よんじゅうご → <span class="jp-medium">よんじゅうごふん</span><br>45 uses ふん (regular — 5 takes ふん, not ぷん)' },
                { text: '<strong>Combined:</strong> 3:45 = <span class="jp-medium" style="font-size:1.3rem;"><strong>さんじよんじゅうごふん</strong></span>' },
                { text: '<strong>Another example:</strong> 4:30<br>Hour: <span class="jp-medium"><strong>よじ</strong></span> (irregular!)<br>Minutes: <span class="jp-medium">さんじゅっぷん</span> or <span class="jp-medium"><strong>はん</strong></span><br>= <span class="jp-medium"><strong>よじはん</strong></span>' },
                { text: '<strong>One more:</strong> 9:10<br>Hour: <span class="jp-medium"><strong>くじ</strong></span> (irregular!)<br>Minutes: <span class="jp-medium"><strong>じゅっぷん</strong></span> (irregular!)<br>= <span class="jp-medium"><strong>くじじゅっぷん</strong></span>' }
            ]
        },

        // ── 8. Practice: time reading (typed) ─────────────────────
        {
            type: 'practice',
            intro: 'Type the Japanese reading for this time.',
            generate: function () {
                var hourReadings = ['', 'いちじ', 'にじ', 'さんじ', 'よじ', 'ごじ', 'ろくじ', 'しちじ', 'はちじ', 'くじ', 'じゅうじ', 'じゅういちじ', 'じゅうにじ'];
                var commonMinutes = [0, 15, 30, 45];
                var hr = randInt(1, 12);
                var min = pick(commonMinutes);

                var hourPart = hourReadings[hr];
                var minPart = '';
                if (min === 0) minPart = '';
                else if (min === 15) minPart = 'じゅうごふん';
                else if (min === 30) minPart = 'はん';
                else if (min === 45) minPart = 'よんじゅうごふん';

                var correct = hourPart + minPart;
                var display = hr + ':' + (min < 10 ? '0' : '') + min;

                return {
                    type: 'free',
                    lang: 'ja',
                    prompt: '<span style="font-size:2.5rem;font-weight:bold;">' + display + '</span>',
                    text: 'Type the reading in hiragana',
                    placeholder: 'ひらがな...',
                    answer: correct,
                    check: function (val) { return val === correct; },
                    explain: '<strong>' + display + '</strong> = <span class="jp-medium">' + correct + '</span>'
                };
            }
        },

        // ── 9. Days of the month ──────────────────────────────────
        {
            type: 'concept',
            title: 'Days of the Month',
            html: '<p>The days of the month (1st through 10th) use <strong>special native Japanese readings</strong> — these are all irregular and must be memorised:</p>' +
                '<div class="example-box">' +
                '<table style="width:100%;border-collapse:collapse;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<th style="padding:6px;text-align:center;">Day</th><th style="padding:6px;">Reading</th>' +
                '<th style="padding:6px;text-align:center;">Day</th><th style="padding:6px;">Reading</th></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">1st</td><td style="padding:6px;"><span class="jp-medium">ついたち</span></td>' +
                '<td style="padding:6px;text-align:center;">6th</td><td style="padding:6px;"><span class="jp-medium">むいか</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">2nd</td><td style="padding:6px;"><span class="jp-medium">ふつか</span></td>' +
                '<td style="padding:6px;text-align:center;">7th</td><td style="padding:6px;"><span class="jp-medium">なのか</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">3rd</td><td style="padding:6px;"><span class="jp-medium">みっか</span></td>' +
                '<td style="padding:6px;text-align:center;">8th</td><td style="padding:6px;"><span class="jp-medium">ようか</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">4th</td><td style="padding:6px;"><span class="jp-medium">よっか</span></td>' +
                '<td style="padding:6px;text-align:center;">9th</td><td style="padding:6px;"><span class="jp-medium">ここのか</span></td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:6px;text-align:center;">5th</td><td style="padding:6px;"><span class="jp-medium">いつか</span></td>' +
                '<td style="padding:6px;text-align:center;">10th</td><td style="padding:6px;"><span class="jp-medium">とおか</span></td></tr>' +
                '</table>' +
                '</div>' +
                '<p>After the 10th, most days are regular (number + にち), with a few exceptions:</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium"><strong>じゅうよっか</strong></span> (14th) — uses よっか, not じゅうしにち</p>' +
                '<p><span class="jp-medium"><strong>はつか</strong></span> (20th) — completely irregular!</p>' +
                '<p><span class="jp-medium"><strong>にじゅうよっか</strong></span> (24th) — uses よっか again</p>' +
                '</div>' +
                '<p><strong>Months</strong> are simpler: number + <span class="jp-medium">がつ</span> (月). But watch for 4月 = <span class="jp-medium"><strong>しがつ</strong></span> (not よんがつ) and 9月 = <span class="jp-medium"><strong>くがつ</strong></span> (not きゅうがつ).</p>'
        },

        // ── 10. Summary ───────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned Japanese counters, time, and dates:</p>' +
                '<ul>' +
                '<li><strong>General counter ～つ:</strong> ひとつ, ふたつ, みっつ... とお (native Japanese, 1-10)</li>' +
                '<li><strong>People ～人:</strong> ひとり, ふたり, さんにん, よにん, ごにん...</li>' +
                '<li><strong>Long objects ～本:</strong> いっぽん, にほん, さんぼん... (watch for っぽん/ぼん)</li>' +
                '<li><strong>Flat objects ～枚:</strong> いちまい, にまい... (completely regular)</li>' +
                '<li><strong>Hours ～じ:</strong> 4 = よじ, 9 = くじ (irregular)</li>' +
                '<li><strong>Minutes ～ふん/ぷん:</strong> 1, 3, 4, 6, 8, 10 are irregular (ぷん)</li>' +
                '<li><strong>Days of the month:</strong> 1st-10th are all irregular native readings</li>' +
                '</ul>' +
                '<p>The key is practice! Use the <strong>Numbers Trainer</strong> in "Counters" and "Time" modes to drill these.</p>',
            nextActivity: 'num-trainer'
        }
    ]
};
