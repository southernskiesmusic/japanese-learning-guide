const LESSON_KANJI_BASICS = {
    id: 'kanji-basics',
    title: 'Kanji Basics',
    subtitle: 'Understanding Chinese characters',
    folder: 'kanji-folder',
    screens: [
        {
            type: 'concept',
            title: 'What are Kanji?',
            content: `
                <p><span class="jp-large">漢字</span> (kanji) literally means "Chinese characters". These are logographic characters where <strong>each character carries meaning</strong>, unlike hiragana and katakana which only represent sounds.</p>
                <p>Key facts about kanji:</p>
                <ul>
                    <li>Originally borrowed from <strong>Chinese writing</strong> over 1,500 years ago</li>
                    <li>Each kanji represents a <strong>concept or meaning</strong> — e.g. <span class="jp-large">水</span> means "water"</li>
                    <li>There are over 50,000 kanji in total, but you only need about <strong>2,136</strong> (the jōyō kanji) for everyday Japanese</li>
                    <li>For JLPT N5 (beginner level), you need roughly <strong>80-100 kanji</strong></li>
                    <li>Kanji can be combined to form compound words: <span class="jp-medium">火山</span> (fire + mountain = volcano)</li>
                </ul>
                <p>Don't be intimidated! Kanji follow <strong>patterns and rules</strong> that make them learnable once you understand the system.</p>
            `
        },
        {
            type: 'concept',
            title: "On'yomi vs Kun'yomi",
            content: `
                <p>Most kanji have <strong>two types of readings</strong> — this is one of the trickiest parts of Japanese:</p>
                <h3><span class="jp-medium">音読み</span> — On'yomi (Chinese reading)</h3>
                <ul>
                    <li>Based on the <strong>original Chinese pronunciation</strong> (adapted to Japanese sounds)</li>
                    <li>Usually written in <strong>katakana</strong> in dictionaries</li>
                    <li>Typically used in <strong>compound words</strong> (two or more kanji together)</li>
                    <li>Example: <span class="jp-medium">山</span> on'yomi = <strong>サン</strong> (san), as in <span class="jp-medium">富士山</span> (ふじさん, Mt. Fuji)</li>
                </ul>
                <h3><span class="jp-medium">訓読み</span> — Kun'yomi (Japanese reading)</h3>
                <ul>
                    <li>The <strong>native Japanese word</strong> for that meaning</li>
                    <li>Usually written in <strong>hiragana</strong> in dictionaries</li>
                    <li>Typically used when a kanji <strong>stands alone</strong> or has hiragana attached (okurigana)</li>
                    <li>Example: <span class="jp-medium">山</span> kun'yomi = <strong>やま</strong> (yama, "mountain")</li>
                </ul>
                <p><strong>Rule of thumb:</strong> Kanji alone or with hiragana endings → kun'yomi. Kanji paired with other kanji → on'yomi. There are exceptions, but this covers most cases!</p>
            `
        },
        {
            type: 'example',
            title: 'Kanji in Action: 山 (Mountain)',
            content: '<p>Let\'s look at how one kanji works with both readings in real words:</p>',
            steps: [
                { label: 'The character', detail: '<span class="jp-large">山</span> — a pictograph of three mountain peaks. This kanji literally <strong>looks like</strong> what it means!' },
                { label: "Kun'yomi: やま", detail: 'When used alone: <span class="jp-large">山</span> = <strong>やま</strong> (yama) = mountain<br>Example sentence: <span class="jp-medium">山がきれいです</span> (yama ga kirei desu) = "The mountain is beautiful"' },
                { label: "On'yomi: サン", detail: "In compound words: <span class=\"jp-large\">富士山</span> = <strong>ふじさん</strong> (Fujisan) = Mt. Fuji<br><span class=\"jp-large\">火山</span> = <strong>かざん</strong> (kazan) = volcano (fire + mountain)" },
                { label: 'More compounds', detail: '<span class="jp-medium">山道</span> (やまみち, yamamichi) = mountain path — uses kun\'yomi<br><span class="jp-medium">登山</span> (とざん, tozan) = mountain climbing — uses on\'yomi<br>Notice how the reading changes depending on context!' }
            ]
        },
        {
            type: 'concept',
            title: 'Radicals: Building Blocks of Kanji',
            content: `
                <p>Kanji are not random squiggles — they are built from <strong>radicals</strong> (<span class="jp-medium">部首</span>, bushu), smaller components that give clues about meaning or pronunciation.</p>
                <p>Here are some common radicals:</p>
                <div class="char-showcase">
                    <div><span class="jp-large">水</span> / <span class="jp-large">氵</span><br>water</div>
                    <div><span class="jp-large">木</span><br>tree / wood</div>
                    <div><span class="jp-large">日</span><br>sun / day</div>
                    <div><span class="jp-large">月</span><br>moon / month</div>
                    <div><span class="jp-large">人</span> / <span class="jp-large">亻</span><br>person</div>
                    <div><span class="jp-large">口</span><br>mouth</div>
                    <div><span class="jp-large">火</span> / <span class="jp-large">灬</span><br>fire</div>
                    <div><span class="jp-large">土</span><br>earth / soil</div>
                </div>
                <p><strong>How radicals help:</strong></p>
                <ul>
                    <li><span class="jp-medium">林</span> (hayashi, grove) = two trees <span class="jp-medium">木木</span></li>
                    <li><span class="jp-medium">森</span> (mori, forest) = three trees <span class="jp-medium">木木木</span></li>
                    <li><span class="jp-medium">明</span> (bright) = sun <span class="jp-medium">日</span> + moon <span class="jp-medium">月</span></li>
                </ul>
                <p>Learning radicals lets you <strong>decode unfamiliar kanji</strong> and makes them much easier to remember!</p>
            `
        },
        {
            type: 'practice',
            title: 'Kanji to Meaning',
            instruction: 'What does this kanji mean?',
            generate() {
                const pool = KANJI_N5;
                const kanji = pool[Math.floor(Math.random() * pool.length)];
                const options = [kanji.meaning];
                while (options.length < 4) {
                    const d = pool[Math.floor(Math.random() * pool.length)].meaning;
                    if (!options.includes(d)) options.push(d);
                }
                for (let i = options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [options[i], options[j]] = [options[j], options[i]];
                }
                return { type: 'mc', prompt: '<span class="jp-large">' + kanji.char + '</span>', options, answer: kanji.meaning, explain: kanji.char + ' = ' + kanji.meaning + ' (' + kanji.readings.join(', ') + ')' };
            }
        },
        {
            type: 'concept',
            title: 'How to Study Kanji Effectively',
            content: `
                <p>Kanji can seem overwhelming, but these proven strategies make learning manageable:</p>
                <h3>1. Write Them Out</h3>
                <p>Writing kanji by hand builds <strong>muscle memory</strong>. Pay attention to <strong>stroke order</strong> — it's consistent and helps you write neatly and quickly. Most strokes go left-to-right and top-to-bottom.</p>
                <h3>2. Learn in Context</h3>
                <p>Don't just memorise isolated kanji. Learn them as part of <strong>words and sentences</strong>. Knowing that <span class="jp-medium">食</span> means "eat" is useful, but knowing <span class="jp-medium">食べる</span> (taberu, to eat) and <span class="jp-medium">食堂</span> (shokudō, cafeteria) is much more practical.</p>
                <h3>3. Use Spaced Repetition (SRS)</h3>
                <p>Review kanji at <strong>increasing intervals</strong> — see a new kanji today, then tomorrow, then in 3 days, then a week, etc. This is the most efficient way to move kanji into long-term memory.</p>
                <h3>4. Learn Radicals First</h3>
                <p>Understanding the ~214 radicals makes every new kanji easier. You'll start seeing patterns: "That has the water radical, so it probably relates to liquids."</p>
                <h3>5. Make Stories and Mnemonics</h3>
                <p><span class="jp-medium">休</span> (rest) = person <span class="jp-medium">亻</span> leaning against a tree <span class="jp-medium">木</span>. Create vivid, memorable stories for each kanji!</p>
            `
        },
        {
            type: 'example',
            title: 'Number Kanji: 一 二 三 四 五',
            content: '<p>The number kanji are some of the first you should learn. The first three are beautifully simple:</p>',
            steps: [
                { label: '一 (one)', detail: '<span class="jp-large">一</span> — just one horizontal stroke!<br>On: <strong>イチ</strong> (ichi) | Kun: <strong>ひと(つ)</strong> (hito(tsu))<br>Example: <span class="jp-medium">一月</span> (いちがつ, ichigatsu) = January (month one)' },
                { label: '二 (two)', detail: '<span class="jp-large">二</span> — two horizontal strokes.<br>On: <strong>ニ</strong> (ni) | Kun: <strong>ふた(つ)</strong> (futa(tsu))<br>Example: <span class="jp-medium">二人</span> (ふたり, futari) = two people' },
                { label: '三 (three)', detail: '<span class="jp-large">三</span> — three horizontal strokes. See the pattern?<br>On: <strong>サン</strong> (san) | Kun: <strong>みっ(つ)</strong> (mi(ttsu))<br>Example: <span class="jp-medium">三月</span> (さんがつ, sangatsu) = March' },
                { label: '四 (four)', detail: '<span class="jp-large">四</span> — the pattern breaks here (four strokes would be hard to read!).<br>On: <strong>シ</strong> (shi) | Kun: <strong>よん / よっ(つ)</strong> (yon / yo(ttsu))<br>Example: <span class="jp-medium">四時</span> (よじ, yoji) = 4 o\'clock' },
                { label: '五 (five)', detail: '<span class="jp-large">五</span> — a balanced, symmetrical character.<br>On: <strong>ゴ</strong> (go) | Kun: <strong>いつ(つ)</strong> (itsu(tsu))<br>Example: <span class="jp-medium">五月</span> (ごがつ, gogatsu) = May' }
            ]
        },
        {
            type: 'practice',
            title: 'Meaning to Kanji',
            instruction: 'Which kanji matches this meaning?',
            generate() {
                const pool = KANJI_N5;
                const kanji = pool[Math.floor(Math.random() * pool.length)];
                const options = [kanji.char];
                while (options.length < 4) {
                    const d = pool[Math.floor(Math.random() * pool.length)].char;
                    if (!options.includes(d)) options.push(d);
                }
                for (let i = options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [options[i], options[j]] = [options[j], options[i]];
                }
                return { type: 'mc', prompt: '<strong style="font-size:1.5em">' + kanji.meaning + '</strong>', options, answer: kanji.char, explain: kanji.meaning + ' = ' + kanji.char + ' (' + kanji.readings.join(', ') + ')' };
            }
        },
        {
            type: 'practice',
            title: 'Type the Reading',
            instruction: 'Type a reading (in romaji) for this kanji.',
            generate() {
                const pool = KANJI_N5;
                const kanji = pool[Math.floor(Math.random() * pool.length)];
                const primaryReading = kanji.readings[0];
                return {
                    type: 'free',
                    lang: 'ja',
                    prompt: '<span class="jp-large">' + kanji.char + '</span><br><span style="font-size:0.9em;color:#888">(' + kanji.meaning + ')</span>',
                    placeholder: 'Type a reading in romaji...',
                    answer: primaryReading,
                    accept: kanji.readings,
                    explain: kanji.char + ' (' + kanji.meaning + ') can be read as: ' + kanji.readings.join(', ')
                };
            }
        },
        {
            type: 'summary',
            title: 'Kanji Basics Complete!',
            content: `
                <p>Well done! You now understand the <strong>fundamentals of kanji</strong>. Here's what you learned:</p>
                <ul>
                    <li>Kanji are <strong>meaning-bearing characters</strong> borrowed from Chinese</li>
                    <li>Each kanji has <strong>on'yomi</strong> (Chinese reading) and <strong>kun'yomi</strong> (Japanese reading)</li>
                    <li><strong>Radicals</strong> are building blocks that hint at meaning — learn them to decode new kanji</li>
                    <li>The number kanji: <span class="jp-medium">一 二 三 四 五</span> (1-5)</li>
                    <li>Effective study strategies: write, learn in context, use SRS, make mnemonics</li>
                </ul>
                <p>You're ready to start learning N5 kanji! Head to the <strong>Kanji Activity</strong> to practise recognition and readings.</p>
            `,
            nextActivity: 'kanji-activity'
        }
    ]
};
