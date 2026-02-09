const LESSON_HIRAGANA_INTRO = {
    id: 'hiragana-intro',
    title: 'Hiragana Introduction',
    subtitle: 'The basic Japanese syllabary',
    folder: 'writing',
    screens: [
        {
            type: 'concept',
            title: 'What is Hiragana?',
            content: `
                <p><span class="jp-large">ひらがな</span> (hiragana) is the most fundamental Japanese writing system. It is a <strong>syllabary</strong> — each character represents a syllable, not a single letter.</p>
                <p>Hiragana is used for:</p>
                <ul>
                    <li><strong>Native Japanese words</strong> — words that originated in Japanese</li>
                    <li><strong>Particles</strong> — small grammatical words like <span class="jp-medium">は</span> (wa), <span class="jp-medium">を</span> (wo), <span class="jp-medium">に</span> (ni)</li>
                    <li><strong>Verb and adjective endings</strong> — e.g. <span class="jp-medium">たべます</span> (tabemasu, "to eat")</li>
                    <li><strong>Furigana</strong> — small readings written above kanji to show pronunciation</li>
                </ul>
                <p>Learning hiragana is the <strong>first step</strong> in reading Japanese. There are <strong>46 basic characters</strong> to master.</p>
            `
        },
        {
            type: 'concept',
            title: 'The Gojūon Table',
            content: `
                <p>Hiragana is organised into the <span class="jp-medium">五十音</span> (gojūon) — literally "fifty sounds" — a table of characters arranged by consonant and vowel.</p>
                <p>The table has <strong>5 vowel columns</strong>: <span class="jp-large">あ い う え お</span> (a i u e o)</p>
                <p>And <strong>10 consonant rows</strong>:</p>
                <table class="jp-table">
                    <tr><td>∅</td><td><span class="jp-medium">あ</span> a</td><td><span class="jp-medium">い</span> i</td><td><span class="jp-medium">う</span> u</td><td><span class="jp-medium">え</span> e</td><td><span class="jp-medium">お</span> o</td></tr>
                    <tr><td>k</td><td><span class="jp-medium">か</span></td><td><span class="jp-medium">き</span></td><td><span class="jp-medium">く</span></td><td><span class="jp-medium">け</span></td><td><span class="jp-medium">こ</span></td></tr>
                    <tr><td>s</td><td><span class="jp-medium">さ</span></td><td><span class="jp-medium">し</span></td><td><span class="jp-medium">す</span></td><td><span class="jp-medium">せ</span></td><td><span class="jp-medium">そ</span></td></tr>
                    <tr><td>t</td><td><span class="jp-medium">た</span></td><td><span class="jp-medium">ち</span></td><td><span class="jp-medium">つ</span></td><td><span class="jp-medium">て</span></td><td><span class="jp-medium">と</span></td></tr>
                    <tr><td>n</td><td><span class="jp-medium">な</span></td><td><span class="jp-medium">に</span></td><td><span class="jp-medium">ぬ</span></td><td><span class="jp-medium">ね</span></td><td><span class="jp-medium">の</span></td></tr>
                    <tr><td>h</td><td><span class="jp-medium">は</span></td><td><span class="jp-medium">ひ</span></td><td><span class="jp-medium">ふ</span></td><td><span class="jp-medium">へ</span></td><td><span class="jp-medium">ほ</span></td></tr>
                    <tr><td>m</td><td><span class="jp-medium">ま</span></td><td><span class="jp-medium">み</span></td><td><span class="jp-medium">む</span></td><td><span class="jp-medium">め</span></td><td><span class="jp-medium">も</span></td></tr>
                    <tr><td>y</td><td><span class="jp-medium">や</span></td><td></td><td><span class="jp-medium">ゆ</span></td><td></td><td><span class="jp-medium">よ</span></td></tr>
                    <tr><td>r</td><td><span class="jp-medium">ら</span></td><td><span class="jp-medium">り</span></td><td><span class="jp-medium">る</span></td><td><span class="jp-medium">れ</span></td><td><span class="jp-medium">ろ</span></td></tr>
                    <tr><td>w</td><td><span class="jp-medium">わ</span></td><td></td><td></td><td></td><td><span class="jp-medium">を</span></td></tr>
                </table>
                <p>Plus the special character <span class="jp-large">ん</span> (n) — the only consonant that stands alone.</p>
            `
        },
        {
            type: 'concept',
            title: 'The Vowel Row: あ い う え お',
            content: `
                <p>Every hiragana character contains a vowel sound. Let's start with the five pure vowels:</p>
                <div class="char-showcase">
                    <div><span class="jp-large">あ</span><br><strong>a</strong> — like "ah" in "father"</div>
                    <div><span class="jp-large">い</span><br><strong>i</strong> — like "ee" in "see"</div>
                    <div><span class="jp-large">う</span><br><strong>u</strong> — like "oo" in "food" (but with unrounded lips)</div>
                    <div><span class="jp-large">え</span><br><strong>e</strong> — like "e" in "bed"</div>
                    <div><span class="jp-large">お</span><br><strong>o</strong> — like "o" in "go"</div>
                </div>
                <p><strong>Pronunciation tips:</strong></p>
                <ul>
                    <li>Japanese vowels are <strong>pure</strong> — they don't glide like English vowels</li>
                    <li><span class="jp-medium">う</span> (u) is softer than English "oo" — keep your lips relaxed, not rounded</li>
                    <li>Each vowel is always pronounced the same way — no silent vowels!</li>
                    <li>Try saying them in order: <strong>a - i - u - e - o</strong> — this order is fundamental in Japanese</li>
                </ul>
            `
        },
        {
            type: 'example',
            title: 'The Ka Row: か き く け こ',
            content: '<p>The <strong>ka row</strong> adds the "k" consonant to each vowel. Here are some mnemonic tips to help you remember each character:</p>',
            steps: [
                { label: 'か (ka)', detail: '<span class="jp-large">か</span> — looks like a person <strong>cutting</strong> something with a knife. Think "ka" for "cut".' },
                { label: 'き (ki)', detail: '<span class="jp-large">き</span> — looks like a <strong>key</strong>. The two horizontal strokes are the teeth of the key.' },
                { label: 'く (ku)', detail: '<span class="jp-large">く</span> — looks like a bird\'s beak going "<strong>coo</strong>". It\'s one of the simplest characters — just an angle.' },
                { label: 'け (ke)', detail: '<span class="jp-large">け</span> — looks like a <strong>ke</strong>g on its side. The vertical line is the tap.' },
                { label: 'こ (ko)', detail: '<span class="jp-large">こ</span> — two horizontal lines, like a pair of <strong>co</strong>ins stacked. Simple and clean.' }
            ]
        },
        {
            type: 'practice',
            title: 'Hiragana to Romaji',
            instruction: 'Which romaji matches this hiragana character?',
            generate() {
                const pool = HIRAGANA_DATA.basic;
                const char = pool[Math.floor(Math.random() * pool.length)];
                const options = [char.romaji];
                while (options.length < 4) {
                    const d = pool[Math.floor(Math.random() * pool.length)].romaji;
                    if (!options.includes(d)) options.push(d);
                }
                for (let i = options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [options[i], options[j]] = [options[j], options[i]];
                }
                return { type: 'mc', prompt: '<span class="jp-large">' + char.kana + '</span>', options, answer: char.romaji, explain: char.kana + ' = ' + char.romaji };
            }
        },
        {
            type: 'concept',
            title: 'The Sa, Ta, and Na Rows',
            content: `
                <p>Let's learn three more consonant rows. Watch out for some irregular readings!</p>
                <h3>Sa row — さ し す せ そ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">さ</span><br>sa</div>
                    <div><span class="jp-large">し</span><br><strong>shi</strong> (not "si"!)</div>
                    <div><span class="jp-large">す</span><br>su</div>
                    <div><span class="jp-large">せ</span><br>se</div>
                    <div><span class="jp-large">そ</span><br>so</div>
                </div>
                <h3>Ta row — た ち つ て と</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">た</span><br>ta</div>
                    <div><span class="jp-large">ち</span><br><strong>chi</strong> (not "ti"!)</div>
                    <div><span class="jp-large">つ</span><br><strong>tsu</strong> (not "tu"!)</div>
                    <div><span class="jp-large">て</span><br>te</div>
                    <div><span class="jp-large">と</span><br>to</div>
                </div>
                <h3>Na row — な に ぬ ね の</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">な</span><br>na</div>
                    <div><span class="jp-large">に</span><br>ni</div>
                    <div><span class="jp-large">ぬ</span><br>nu</div>
                    <div><span class="jp-large">ね</span><br>ne</div>
                    <div><span class="jp-large">の</span><br>no</div>
                </div>
                <p><strong>Key irregulars to remember:</strong> <span class="jp-medium">し</span> = <strong>shi</strong>, <span class="jp-medium">ち</span> = <strong>chi</strong>, <span class="jp-medium">つ</span> = <strong>tsu</strong>. These don't follow the simple consonant + vowel pattern!</p>
            `
        },
        {
            type: 'practice',
            title: 'Romaji to Hiragana',
            instruction: 'Which hiragana matches this romaji?',
            generate() {
                const pool = HIRAGANA_DATA.basic;
                const char = pool[Math.floor(Math.random() * pool.length)];
                const options = [char.kana];
                while (options.length < 4) {
                    const d = pool[Math.floor(Math.random() * pool.length)].kana;
                    if (!options.includes(d)) options.push(d);
                }
                for (let i = options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [options[i], options[j]] = [options[j], options[i]];
                }
                return { type: 'mc', prompt: '<strong style="font-size:1.5em">' + char.romaji + '</strong>', options, answer: char.kana, explain: char.romaji + ' = ' + char.kana };
            }
        },
        {
            type: 'concept',
            title: 'The Ha, Ma, Ya, Ra, Wa Rows + ん',
            content: `
                <p>Here are the remaining rows to complete the basic 46 hiragana:</p>
                <h3>Ha row — は ひ ふ へ ほ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">は</span><br>ha</div>
                    <div><span class="jp-large">ひ</span><br>hi</div>
                    <div><span class="jp-large">ふ</span><br><strong>fu</strong> (not "hu" — blown with both lips)</div>
                    <div><span class="jp-large">へ</span><br>he</div>
                    <div><span class="jp-large">ほ</span><br>ho</div>
                </div>
                <h3>Ma row — ま み む め も</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">ま</span> ma</div>
                    <div><span class="jp-large">み</span> mi</div>
                    <div><span class="jp-large">む</span> mu</div>
                    <div><span class="jp-large">め</span> me</div>
                    <div><span class="jp-large">も</span> mo</div>
                </div>
                <h3>Ya row — や ゆ よ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">や</span> ya</div>
                    <div><span class="jp-large">ゆ</span> yu</div>
                    <div><span class="jp-large">よ</span> yo</div>
                </div>
                <h3>Ra row — ら り る れ ろ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">ら</span> ra</div>
                    <div><span class="jp-large">り</span> ri</div>
                    <div><span class="jp-large">る</span> ru</div>
                    <div><span class="jp-large">れ</span> re</div>
                    <div><span class="jp-large">ろ</span> ro</div>
                </div>
                <h3>Wa row + ん</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">わ</span> wa</div>
                    <div><span class="jp-large">を</span> wo (particle)</div>
                    <div><span class="jp-large">ん</span> n (standalone)</div>
                </div>
                <p><strong>Notes:</strong> The Japanese "r" sound is a light tap — between an English "r" and "l". <span class="jp-medium">ふ</span> (fu) is made by blowing air through both lips, not with teeth on lip like English "f".</p>
            `
        },
        {
            type: 'practice',
            title: 'Type the Romaji',
            instruction: 'Type the romaji reading for this hiragana character.',
            generate() {
                const pool = HIRAGANA_DATA.basic;
                const char = pool[Math.floor(Math.random() * pool.length)];
                return {
                    type: 'free',
                    lang: 'en',
                    prompt: '<span class="jp-large">' + char.kana + '</span>',
                    placeholder: 'Type the romaji...',
                    answer: char.romaji,
                    explain: char.kana + ' is read as "' + char.romaji + '"'
                };
            }
        },
        {
            type: 'summary',
            title: 'Hiragana Basics Complete!',
            content: `
                <p>You've learned the <strong>basic 46 hiragana</strong> characters! Here's what you covered:</p>
                <ul>
                    <li>The <strong>5 vowels</strong>: あ い う え お</li>
                    <li>The <strong>gojūon table</strong> — 10 consonant rows (k, s, t, n, h, m, y, r, w) + ん</li>
                    <li><strong>Irregular readings</strong>: し (shi), ち (chi), つ (tsu), ふ (fu)</li>
                    <li>How hiragana is used for native words, particles, and verb endings</li>
                </ul>
                <p>Next steps: practice reading and recognising hiragana quickly with the <strong>Hiragana Trainer</strong>!</p>
            `,
            nextActivity: 'hira-trainer'
        }
    ]
};
