const LESSON_KATAKANA_INTRO = {
    id: 'katakana-intro',
    title: 'Katakana Introduction',
    subtitle: 'Characters for foreign words',
    folder: 'writing',
    screens: [
        {
            type: 'concept',
            title: 'What is Katakana?',
            content: `
                <p><span class="jp-large">カタカナ</span> (katakana) is the second Japanese syllabary. It represents the <strong>exact same sounds</strong> as hiragana, but with different character shapes.</p>
                <p>Katakana is used for:</p>
                <ul>
                    <li><strong>Foreign loan words</strong> — words borrowed from English and other languages, e.g. <span class="jp-medium">コーヒー</span> (kōhī, "coffee")</li>
                    <li><strong>Onomatopoeia</strong> — sound effects like <span class="jp-medium">ドキドキ</span> (dokidoki, heartbeat) and <span class="jp-medium">ワンワン</span> (wanwan, "woof woof")</li>
                    <li><strong>Emphasis</strong> — similar to italics or bold in English</li>
                    <li><strong>Scientific names</strong> — animals, plants, and technical terms</li>
                    <li><strong>Foreign names</strong> — your name in Japanese would be written in katakana!</li>
                </ul>
                <p>If you already know hiragana, learning katakana is straightforward — you only need to learn new <strong>shapes</strong> for sounds you already know.</p>
            `
        },
        {
            type: 'concept',
            title: 'Hiragana vs Katakana',
            content: `
                <p>Hiragana and katakana represent the <strong>same sounds</strong> but look different. Hiragana tends to be <strong>curvy</strong>, while katakana is more <strong>angular and sharp</strong>.</p>
                <p>Compare these pairs:</p>
                <table class="jp-table">
                    <tr><th>Sound</th><th>Hiragana</th><th>Katakana</th></tr>
                    <tr><td>a</td><td><span class="jp-large">あ</span></td><td><span class="jp-large">ア</span></td></tr>
                    <tr><td>ka</td><td><span class="jp-large">か</span></td><td><span class="jp-large">カ</span></td></tr>
                    <tr><td>sa</td><td><span class="jp-large">さ</span></td><td><span class="jp-large">サ</span></td></tr>
                    <tr><td>ta</td><td><span class="jp-large">た</span></td><td><span class="jp-large">タ</span></td></tr>
                    <tr><td>na</td><td><span class="jp-large">な</span></td><td><span class="jp-large">ナ</span></td></tr>
                </table>
                <p><strong>Tip:</strong> Katakana characters were derived from <strong>parts of kanji</strong> and tend to have straighter, more angular strokes. Think of them as the "print" style versus hiragana's "cursive" style.</p>
                <p>Both syllabaries have the same <strong>46 basic characters</strong> arranged in the same gojūon order.</p>
            `
        },
        {
            type: 'concept',
            title: 'Vowels: ア イ ウ エ オ',
            content: `
                <p>Just like hiragana, we start with the <strong>five vowels</strong>:</p>
                <div class="char-showcase">
                    <div><span class="jp-large">ア</span><br><strong>a</strong> — looks like an arrow pointing down</div>
                    <div><span class="jp-large">イ</span><br><strong>i</strong> — like two chopsticks</div>
                    <div><span class="jp-large">ウ</span><br><strong>u</strong> — like a U-shape with a hat</div>
                    <div><span class="jp-large">エ</span><br><strong>e</strong> — like an I-beam (the "e"ngineering kind)</div>
                    <div><span class="jp-large">オ</span><br><strong>o</strong> — like a cross with a tail</div>
                </div>
                <p><strong>Loan word example:</strong> <span class="jp-large">アイス</span> = <strong>aisu</strong> = "ice (cream)" — uses three vowel-row characters!</p>
            `
        },
        {
            type: 'example',
            title: 'Ka Row + Loan Words',
            content: '<p>The <strong>ka row</strong> in katakana. Each character is paired with a common loan word that uses it.</p>',
            steps: [
                { label: 'カ (ka)', detail: '<span class="jp-large">カ</span> — angular, like a sharp "K" shape. Used in: <span class="jp-medium">カメラ</span> (kamera) = camera' },
                { label: 'キ (ki)', detail: '<span class="jp-large">キ</span> — like a key with angular strokes. Used in: <span class="jp-medium">キス</span> (kisu) = kiss' },
                { label: 'ク (ku)', detail: '<span class="jp-large">ク</span> — like the angle of a bent arm. Used in: <span class="jp-medium">クラス</span> (kurasu) = class' },
                { label: 'ケ (ke)', detail: '<span class="jp-large">ケ</span> — looks like a "K" with a horizontal line. Used in: <span class="jp-medium">ケーキ</span> (kēki) = cake' },
                { label: 'コ (ko)', detail: '<span class="jp-large">コ</span> — a simple open square shape. Used in: <span class="jp-medium">コーヒー</span> (kōhī) = coffee' }
            ]
        },
        {
            type: 'practice',
            title: 'Katakana to Romaji',
            instruction: 'Which romaji matches this katakana character?',
            generate() {
                const pool = KATAKANA_DATA.basic;
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
            title: 'Sa, Ta, Na Rows',
            content: `
                <p>More katakana rows, with common loan words to help you remember:</p>
                <h3>Sa row — サ シ ス セ ソ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">サ</span><br>sa</div>
                    <div><span class="jp-large">シ</span><br>shi</div>
                    <div><span class="jp-large">ス</span><br>su</div>
                    <div><span class="jp-large">セ</span><br>se</div>
                    <div><span class="jp-large">ソ</span><br>so</div>
                </div>
                <p>Loan word: <span class="jp-medium">サラダ</span> (sarada) = salad | <span class="jp-medium">システム</span> (shisutemu) = system</p>
                <h3>Ta row — タ チ ツ テ ト</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">タ</span><br>ta</div>
                    <div><span class="jp-large">チ</span><br>chi</div>
                    <div><span class="jp-large">ツ</span><br>tsu</div>
                    <div><span class="jp-large">テ</span><br>te</div>
                    <div><span class="jp-large">ト</span><br>to</div>
                </div>
                <p>Loan word: <span class="jp-medium">テレビ</span> (terebi) = television | <span class="jp-medium">チーズ</span> (chīzu) = cheese</p>
                <h3>Na row — ナ ニ ヌ ネ ノ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">ナ</span><br>na</div>
                    <div><span class="jp-large">ニ</span><br>ni</div>
                    <div><span class="jp-large">ヌ</span><br>nu</div>
                    <div><span class="jp-large">ネ</span><br>ne</div>
                    <div><span class="jp-large">ノ</span><br>no</div>
                </div>
                <p>Loan word: <span class="jp-medium">ノート</span> (nōto) = notebook | <span class="jp-medium">ニュース</span> (nyūsu) = news</p>
                <p><strong>Watch out:</strong> <span class="jp-medium">シ</span> (shi) and <span class="jp-medium">ツ</span> (tsu) look very similar! In シ the strokes angle from <em>left to right</em>; in ツ they angle from <em>top to bottom</em>.</p>
            `
        },
        {
            type: 'concept',
            title: 'The Remaining Rows + Long Vowels',
            content: `
                <p>Here are the remaining katakana rows:</p>
                <h3>Ha row — ハ ヒ フ ヘ ホ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">ハ</span> ha</div>
                    <div><span class="jp-large">ヒ</span> hi</div>
                    <div><span class="jp-large">フ</span> fu</div>
                    <div><span class="jp-large">ヘ</span> he</div>
                    <div><span class="jp-large">ホ</span> ho</div>
                </div>
                <h3>Ma row — マ ミ ム メ モ</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">マ</span> ma</div>
                    <div><span class="jp-large">ミ</span> mi</div>
                    <div><span class="jp-large">ム</span> mu</div>
                    <div><span class="jp-large">メ</span> me</div>
                    <div><span class="jp-large">モ</span> mo</div>
                </div>
                <h3>Ya, Ra, Wa rows + ン</h3>
                <div class="char-showcase">
                    <div><span class="jp-large">ヤ</span> ya</div>
                    <div><span class="jp-large">ユ</span> yu</div>
                    <div><span class="jp-large">ヨ</span> yo</div>
                    <div><span class="jp-large">ラ</span> ra</div>
                    <div><span class="jp-large">リ</span> ri</div>
                    <div><span class="jp-large">ル</span> ru</div>
                    <div><span class="jp-large">レ</span> re</div>
                    <div><span class="jp-large">ロ</span> ro</div>
                    <div><span class="jp-large">ワ</span> wa</div>
                    <div><span class="jp-large">ヲ</span> wo</div>
                    <div><span class="jp-large">ン</span> n</div>
                </div>
                <p><strong>Long vowel mark:</strong> Katakana uses <span class="jp-large">ー</span> (a horizontal dash) to extend a vowel. For example: <span class="jp-medium">コーヒー</span> (kōhī) — the ー stretches the "o" and "i" sounds.</p>
                <p>More loan words: <span class="jp-medium">ラーメン</span> (rāmen) = ramen | <span class="jp-medium">メール</span> (mēru) = email | <span class="jp-medium">ホテル</span> (hoteru) = hotel</p>
            `
        },
        {
            type: 'practice',
            title: 'Romaji to Katakana',
            instruction: 'Which katakana matches this romaji?',
            generate() {
                const pool = KATAKANA_DATA.basic;
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
            type: 'practice',
            title: 'Type the Romaji',
            instruction: 'Type the romaji reading for this katakana character.',
            generate() {
                const pool = KATAKANA_DATA.basic;
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
            title: 'Katakana Basics Complete!',
            content: `
                <p>Great work! You've covered the <strong>46 basic katakana</strong> characters. Here's what you learned:</p>
                <ul>
                    <li>Katakana is used for <strong>foreign loan words</strong>, onomatopoeia, and emphasis</li>
                    <li>Same sounds as hiragana but with <strong>angular, sharp</strong> character shapes</li>
                    <li>The <strong>long vowel mark</strong> <span class="jp-medium">ー</span> extends vowel sounds</li>
                    <li>Common confusing pairs: <span class="jp-medium">シ</span> (shi) vs <span class="jp-medium">ツ</span> (tsu), <span class="jp-medium">ソ</span> (so) vs <span class="jp-medium">ン</span> (n)</li>
                    <li>Loan words like <span class="jp-medium">コーヒー</span> (coffee), <span class="jp-medium">テレビ</span> (TV), <span class="jp-medium">ラーメン</span> (ramen)</li>
                </ul>
                <p>Ready to practise? Head to the <strong>Katakana Trainer</strong> to build speed and accuracy!</p>
            `,
            nextActivity: 'kata-trainer'
        }
    ]
};
