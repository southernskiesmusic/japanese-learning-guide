/* ================================================================
   LESSON: Particles Introduction
   Essential Japanese grammar markers
   ================================================================ */
var LESSON_PARTICLES_INTRO = {
    id: 'particles-intro',
    title: 'Particles Introduction',
    subtitle: 'Essential Japanese grammar markers',
    folder: 'grammar-folder',
    screens: [

        // ── 1. What are particles? ──────────────────────────────
        {
            type: 'concept',
            title: 'What Are Particles?',
            html: '<p>In Japanese, <strong>particles</strong> (助詞 / じょし) are small words that come after nouns, verbs, or phrases to show their <strong>grammatical role</strong> in a sentence.</p>' +
                '<p>Think of them like signposts that tell you:</p>' +
                '<ul>' +
                '<li>What is the <strong>topic</strong> of the sentence?</li>' +
                '<li>What is the <strong>object</strong> being acted on?</li>' +
                '<li><strong>Where</strong> or <strong>when</strong> something happens?</li>' +
                '</ul>' +
                '<p>English uses word order to show meaning. Japanese uses <strong>particles</strong> instead, so word order is much more flexible.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-large">私<span style="color:var(--accent)">は</span>学生です。</span></p>' +
                '<p>watashi <strong>wa</strong> gakusei desu = "I <strong>(topic)</strong> am a student."</p>' +
                '</div>'
        },

        // ── 2. は (wa) — topic marker ───────────────────────────
        {
            type: 'concept',
            title: 'は (wa) — Topic Marker',
            html: '<p>The particle <span class="jp-large">は</span> marks the <strong>topic</strong> of the sentence — what you are talking about.</p>' +
                '<p>It is written with the hiragana は but pronounced <strong>"wa"</strong> when used as a particle.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">私<span style="color:var(--accent)">は</span>学生です。</span><br>I <strong>(topic)</strong> am a student.</p>' +
                '<p><span class="jp-medium">これ<span style="color:var(--accent)">は</span>ペンです。</span><br>This <strong>(topic)</strong> is a pen.</p>' +
                '<p><span class="jp-medium">東京<span style="color:var(--accent)">は</span>大きいです。</span><br>Tokyo <strong>(topic)</strong> is big.</p>' +
                '</div>' +
                '<p>The topic is the thing you set up as the <em>frame</em> for your sentence. Everything that follows is a comment about it.</p>'
        },

        // ── 3. が (ga) — subject marker ─────────────────────────
        {
            type: 'concept',
            title: 'が (ga) — Subject Marker',
            html: '<p>The particle <span class="jp-large">が</span> marks the <strong>grammatical subject</strong> — who or what performs the action or exists.</p>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">猫<span style="color:var(--accent)">が</span>います。</span><br>There is a cat. (The cat exists.)</p>' +
                '<p><span class="jp-medium">雨<span style="color:var(--accent)">が</span>降っています。</span><br>It is raining. (Rain is falling.)</p>' +
                '<p><span class="jp-medium">日本語<span style="color:var(--accent)">が</span>好きです。</span><br>I like Japanese. (Japanese is liked.)</p>' +
                '</div>' +
                '<h4>When to use が vs は?</h4>' +
                '<ul>' +
                '<li><strong>が</strong> — introduces <em>new</em> information, answers "who/what" questions, and is used with いる/ある and feelings (好き, ほしい).</li>' +
                '<li><strong>は</strong> — marks something already known or established as the topic.</li>' +
                '</ul>' +
                '<p>Compare: <span class="jp-medium">誰<strong>が</strong>来ましたか。</span> = "Who came?" (が marks new info)</p>'
        },

        // ── 4. を (wo) — object marker (example) ────────────────
        {
            type: 'example',
            title: 'を (wo) — Object Marker',
            problem: '<p>The particle <span class="jp-large">を</span> marks the <strong>direct object</strong> — the thing receiving the action of the verb.</p>' +
                '<p>It is pronounced <strong>"o"</strong> in modern Japanese.</p>' +
                '<p>Let\'s look at some examples:</p>',
            steps: [
                { text: '<span class="jp-medium">本<span style="color:var(--accent)">を</span>読みます。</span><br>I read a <strong>book</strong>. (book = object being read)' },
                { text: '<span class="jp-medium">コーヒー<span style="color:var(--accent)">を</span>飲みます。</span><br>I drink <strong>coffee</strong>. (coffee = object being drunk)' },
                { text: '<span class="jp-medium">テレビ<span style="color:var(--accent)">を</span>見ます。</span><br>I watch <strong>TV</strong>. (TV = object being watched)' },
                { text: '<span class="jp-medium">手紙<span style="color:var(--accent)">を</span>書きます。</span><br>I write a <strong>letter</strong>. (letter = object being written)' }
            ]
        },

        // ── 5. Practice: particle fill-in MC ────────────────────
        {
            type: 'practice',
            intro: 'Fill in the blank with the correct particle.',
            generate: function () {
                var pool = PARTICLES_DATA.sentences.filter(function (s) {
                    return ['は', 'が', 'を'].indexOf(s.answer) !== -1;
                });
                var q = pick(pool);
                var display = q.sentence.replace('___', ' <span class="jp-large" style="color:var(--accent)">___</span> ');
                var opts = shuffle(['は', 'が', 'を', 'に']);
                if (opts.indexOf(q.answer) === -1) opts[3] = q.answer;
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-medium">' + display + '</span>',
                    text: q.english + ' (Hint: ' + q.hint + ')',
                    options: opts,
                    answer: q.answer,
                    explain: '<span class="jp-medium">' + q.sentence.replace('___', '<strong>' + q.answer + '</strong>') + '</span><br>' + q.english
                };
            }
        },

        // ── 6. に (ni) — direction/time/location ────────────────
        {
            type: 'concept',
            title: 'に (ni) — Direction, Time & Location',
            html: '<p>The particle <span class="jp-large">に</span> is one of the most versatile particles. It marks:</p>' +
                '<h4>1. Direction / Destination</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">学校<span style="color:var(--accent)">に</span>行きます。</span><br>I go <strong>to</strong> school.</p>' +
                '</div>' +
                '<h4>2. Specific Time</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">三時<span style="color:var(--accent)">に</span>起きます。</span><br>I wake up <strong>at</strong> 3 o\'clock.</p>' +
                '</div>' +
                '<h4>3. Location of Existence (with いる / ある)</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">椅子<span style="color:var(--accent)">に</span>座ります。</span><br>I sit <strong>on</strong> the chair.</p>' +
                '</div>'
        },

        // ── 7. で (de) — location of action / means ─────────────
        {
            type: 'concept',
            title: 'で (de) — Location of Action & Means',
            html: '<p>The particle <span class="jp-large">で</span> has two main uses:</p>' +
                '<h4>1. Where an action takes place</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">図書館<span style="color:var(--accent)">で</span>勉強します。</span><br>I study <strong>at</strong> the library.</p>' +
                '<p><span class="jp-medium">公園<span style="color:var(--accent)">で</span>走ります。</span><br>I run <strong>in</strong> the park.</p>' +
                '</div>' +
                '<h4>2. Means / Method / Tool</h4>' +
                '<div class="example-box">' +
                '<p><span class="jp-medium">バス<span style="color:var(--accent)">で</span>行きます。</span><br>I go <strong>by</strong> bus.</p>' +
                '<p><span class="jp-medium">箸<span style="color:var(--accent)">で</span>食べます。</span><br>I eat <strong>with</strong> chopsticks.</p>' +
                '</div>' +
                '<p><strong>Tip:</strong> Use に for where something <em>exists</em>, but で for where an <em>action happens</em>.</p>'
        },

        // ── 8. Practice: particle fill-in (all particles) ───────
        {
            type: 'practice',
            intro: 'Choose the correct particle for this sentence.',
            generate: function () {
                var pool = PARTICLES_DATA.sentences.filter(function (s) {
                    return ['に', 'で', 'へ', 'と', 'も', 'の'].indexOf(s.answer) !== -1;
                });
                var q = pick(pool);
                var display = q.sentence.replace('___', ' <span class="jp-large" style="color:var(--accent)">___</span> ');
                var distractors = ['に', 'で', 'へ', 'と', 'も', 'の'];
                var opts = [q.answer];
                distractors = shuffle(distractors.filter(function (p) { return p !== q.answer; }));
                for (var i = 0; i < 3; i++) opts.push(distractors[i]);
                opts = shuffle(opts);
                return {
                    type: 'mc',
                    prompt: '<span class="jp-medium">' + display + '</span>',
                    text: q.english + ' (Hint: ' + q.hint + ')',
                    options: opts,
                    answer: q.answer,
                    explain: '<span class="jp-medium">' + q.sentence.replace('___', '<strong>' + q.answer + '</strong>') + '</span><br>' + q.english
                };
            }
        },

        // ── 9. Other particles overview ─────────────────────────
        {
            type: 'concept',
            title: 'Other Essential Particles',
            html: '<p>Here is a quick overview of more particles you will encounter:</p>' +
                '<table style="width:100%;border-collapse:collapse;margin:12px 0;">' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">へ</span></td>' +
                '<td style="padding:8px;">Direction (toward)</td>' +
                '<td style="padding:8px;"><span class="jp-medium">日本<strong>へ</strong>行きます。</span> I go to Japan.</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">と</span></td>' +
                '<td style="padding:8px;">And / With</td>' +
                '<td style="padding:8px;"><span class="jp-medium">友達<strong>と</strong>遊びます。</span> I play with friends.</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">も</span></td>' +
                '<td style="padding:8px;">Also / Too</td>' +
                '<td style="padding:8px;"><span class="jp-medium">私<strong>も</strong>学生です。</span> I am also a student.</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">の</span></td>' +
                '<td style="padding:8px;">Possessive</td>' +
                '<td style="padding:8px;"><span class="jp-medium">私<strong>の</strong>本</span> my book</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">から</span></td>' +
                '<td style="padding:8px;">From / Because</td>' +
                '<td style="padding:8px;"><span class="jp-medium">九時<strong>から</strong>始まります。</span> It starts from 9.</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">まで</span></td>' +
                '<td style="padding:8px;">Until / Up to</td>' +
                '<td style="padding:8px;"><span class="jp-medium">五時<strong>まで</strong>勉強します。</span> I study until 5.</td></tr>' +
                '<tr style="border-bottom:1px solid var(--border);">' +
                '<td style="padding:8px;"><span class="jp-large">よ</span></td>' +
                '<td style="padding:8px;">Emphasis</td>' +
                '<td style="padding:8px;"><span class="jp-medium">美味しいです<strong>よ</strong>。</span> It\'s delicious!</td></tr>' +
                '<tr>' +
                '<td style="padding:8px;"><span class="jp-large">ね</span></td>' +
                '<td style="padding:8px;">Isn\'t it?</td>' +
                '<td style="padding:8px;"><span class="jp-medium">いい天気です<strong>ね</strong>。</span> Nice weather, right?</td></tr>' +
                '</table>'
        },

        // ── 10. Summary ─────────────────────────────────────────
        {
            type: 'summary',
            title: 'Lesson Complete!',
            html: '<p>You have learned the essential Japanese particles:</p>' +
                '<ul>' +
                '<li><strong>は</strong> (wa) — topic marker</li>' +
                '<li><strong>が</strong> (ga) — subject marker</li>' +
                '<li><strong>を</strong> (wo/o) — object marker</li>' +
                '<li><strong>に</strong> (ni) — direction, time, location</li>' +
                '<li><strong>で</strong> (de) — location of action, means</li>' +
                '<li><strong>へ, と, も, の, から, まで, よ, ね</strong> — and more!</li>' +
                '</ul>' +
                '<p>Now practise using these particles in context with the Grammar Trainer.</p>',
            nextActivity: 'gram-trainer'
        }
    ]
};
