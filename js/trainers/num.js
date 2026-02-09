/* ================================================================
   NUM — Numbers & Counting Trainer
   Question types: numberToJp, jpToNumber, counterMC, timeMC,
                   daysMC, moneyType
   ================================================================ */
const NUM = {
    score: 0, total: 0, streak: 0, hintIdx: 0,
    currentQ: null, level: 'basic', // 'basic', 'counters', 'time', 'all'

    init() {
        loadTrainerStats('NUM', this);
        this.updateUI();
    },

    /* ── Convert any 1-9999 to its Japanese hiragana reading ────
       Handles ALL irregular hundreds and thousands:
         300=さんびゃく  600=ろっぴゃく  800=はっぴゃく
         3000=さんぜん   8000=はっせん
       ────────────────────────────────────────────────────────── */
    _numberToReading(n) {
        if (n === 0) return 'ゼロ';

        const ones   = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
        const tensPfx = ['', '', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
        // Hundreds: irregular 3=さんびゃく, 6=ろっぴゃく, 8=はっぴゃく
        const hundredsMap = {
            1: 'ひゃく', 2: 'にひゃく', 3: 'さんびゃく', 4: 'よんひゃく',
            5: 'ごひゃく', 6: 'ろっぴゃく', 7: 'ななひゃく', 8: 'はっぴゃく', 9: 'きゅうひゃく'
        };
        // Thousands: irregular 3=さんぜん, 8=はっせん
        const thousandsMap = {
            1: 'せん', 2: 'にせん', 3: 'さんぜん', 4: 'よんせん',
            5: 'ごせん', 6: 'ろくせん', 7: 'ななせん', 8: 'はっせん', 9: 'きゅうせん'
        };

        let result = '';
        const th = Math.floor(n / 1000);
        const hu = Math.floor((n % 1000) / 100);
        const te = Math.floor((n % 100) / 10);
        const on = n % 10;

        if (th > 0) result += thousandsMap[th];
        if (hu > 0) result += hundredsMap[hu];
        if (te > 0) result += (te === 1 ? '' : tensPfx[te]) + 'じゅう';
        if (on > 0) result += ones[on];

        return result;
    },

    load() {
        resetHint('num-hint', 'num-hint-btn');
        this.hintIdx = 0;
        const fb = document.getElementById('num-fb');
        fb.classList.remove('show', 'correct', 'incorrect');
        document.getElementById('num-next').classList.remove('show');

        // Try wrong-answer review pool 25% of the time
        if (Math.random() < 0.25) {
            const wrong = getWrongAnswer('NUM');
            if (wrong && wrong._retry) {
                this.currentQ = wrong;
                this._renderQ();
                return;
            }
        }

        if (this.level === 'basic') this._loadBasic();
        else if (this.level === 'counters') this._loadCounters();
        else if (this.level === 'time') this._loadTime();
        else this._loadAll();
    },

    _loadBasic() {
        const type = pick(['numberToJp', 'jpToNumber', 'moneyType']);
        if (type === 'numberToJp') this._qNumberToJp(1, 100);
        else if (type === 'jpToNumber') this._qJpToNumber(1, 100);
        else this._qMoneyType();
    },

    _loadCounters() {
        this._qCounterMC();
    },

    _loadTime() {
        const type = pick(['timeMC', 'daysMC', 'daysMC']);
        if (type === 'timeMC') this._qTimeMC();
        else this._qDaysMC();
    },

    _loadAll() {
        const type = pick(['numberToJp', 'jpToNumber', 'counterMC', 'timeMC', 'daysMC', 'moneyType']);
        if (type === 'numberToJp') this._qNumberToJp(1, 9999);
        else if (type === 'jpToNumber') this._qJpToNumber(1, 9999);
        else if (type === 'counterMC') this._qCounterMC();
        else if (type === 'timeMC') this._qTimeMC();
        else if (type === 'daysMC') this._qDaysMC();
        else this._qMoneyType();
    },

    /* ── Question type 1: Number → Japanese reading (typed) ── */
    _qNumberToJp(min, max) {
        const n = randInt(min, max);
        const reading = this._numberToReading(n);

        this.currentQ = {
            type: 'typed', answer: reading, number: n,
            hints: [
                n >= 100 ? 'Break it down: thousands, hundreds, tens, ones' : 'Remember: tens digit + じゅう + ones digit',
                'The reading starts with: ' + reading.slice(0, 3) + '...'
            ],
            _retry: true
        };

        let h = '<span class="rule-tag">Number → Reading</span>' +
            '<div class="question-prompt" style="font-size:3rem;font-weight:700;">' + n.toLocaleString() + '</div>' +
            '<p class="question-text">Type the Japanese reading in hiragana</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="num-input" lang="ja" placeholder="ひらがな..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="NUM.checkTyped()">Check</button></div>';
        document.getElementById('num-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('num-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') NUM.checkTyped(); }); }
        }, 100);
    },

    /* ── Question type 2: Japanese reading → Number (typed) ── */
    _qJpToNumber(min, max) {
        const n = randInt(min, max);
        const reading = this._numberToReading(n);

        this.currentQ = {
            type: 'typedNumber', answer: String(n), reading: reading,
            hints: [
                'Work backwards: identify thousands (せん), hundreds (ひゃく), tens (じゅう)',
                'The answer is between ' + Math.floor(n / 10) * 10 + ' and ' + (Math.floor(n / 10) * 10 + 9)
            ],
            _retry: true
        };

        let h = '<span class="rule-tag">Reading → Number</span>' +
            '<div class="question-prompt jp-large">' + reading + '</div>' +
            '<p class="question-text">What number is this?</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="num-input" inputmode="numeric" placeholder="Enter the number..." autocomplete="off" style="font-family:inherit;">' +
            '<button class="btn btn-primary" onclick="NUM.checkTyped()">Check</button></div>';
        document.getElementById('num-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('num-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') NUM.checkTyped(); }); }
        }, 100);
    },

    /* ── Question type 3: Counter word MC ──────────────────── */
    _qCounterMC() {
        const counter = pick(NUMBERS_DATA.counters);
        const item = pick(counter.items);
        const correct = item.reading.split('/')[0]; // take first reading if multiple

        // Build distractor pool from same counter
        const pool = counter.items.filter(it => it.count !== item.count).map(it => it.reading.split('/')[0]);
        const options = generateDistractors(correct, pool, 4);

        const exampleItems = {
            'つ': 'things',
            '人': 'people',
            '本': 'pencils',
            '枚': 'sheets of paper',
            '匹': 'cats',
            '台': 'cars'
        };
        const itemLabel = exampleItems[counter.counter] || 'items';

        this.currentQ = {
            type: 'mc', answer: correct,
            counter: counter.counter, count: item.count,
            hints: [
                counter.name + ' (' + counter.counter + ')',
                item.irregular ? 'This one is irregular!' : 'This follows the regular pattern'
            ],
            _retry: true
        };

        let h = '<span class="rule-tag">Counter: ' + counter.counter + ' (' + counter.name + ')</span>' +
            '<div class="question-prompt" style="font-size:1.8rem;font-weight:600;">' +
            item.count + ' ' + itemLabel + '</div>' +
            '<p class="question-text">How do you say this with the <span class="jp-medium">' +
            counter.counter + '</span> counter?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="NUM.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.3rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('num-question').innerHTML = h;
    },

    /* ── Question type 4: Time MC ──────────────────────────── */
    _qTimeMC() {
        const hourEntry = pick(NUMBERS_DATA.hours);
        const commonMinutes = [0, 5, 10, 15, 20, 30, 45];
        const min = pick(commonMinutes);

        let correctReading = hourEntry.reading;
        let timeLabel = hourEntry.hour + ':' + String(min).padStart(2, '0');

        if (min > 0) {
            const minEntry = NUMBERS_DATA.minutes.find(m => m.minute === min);
            if (minEntry) {
                correctReading += minEntry.reading.split('/')[0];
            } else {
                correctReading += this._minuteReading(min);
            }
        }

        // Build distractors: other hours or slight variations
        const pool = [];
        NUMBERS_DATA.hours.forEach(he => {
            if (he.hour !== hourEntry.hour) {
                let r = he.reading;
                if (min > 0) {
                    const me = NUMBERS_DATA.minutes.find(m => m.minute === min);
                    r += me ? me.reading.split('/')[0] : this._minuteReading(min);
                }
                pool.push(r);
            }
        });
        const options = generateDistractors(correctReading, pool, 4);

        this.currentQ = {
            type: 'mc', answer: correctReading,
            time: timeLabel,
            hints: [
                hourEntry.irregular ? hourEntry.hour + ' o\'clock is irregular: ' + hourEntry.reading : 'Hours use じ',
                min > 0 ? 'Minutes use ふん or ぷん (watch for irregulars)' : 'This is just the hour'
            ],
            _retry: true
        };

        let h = '<span class="rule-tag">Time</span>' +
            '<div class="question-prompt" style="font-size:2.5rem;font-weight:700;">' + timeLabel + '</div>' +
            '<p class="question-text">How do you say this time in Japanese?</p>' +
            '<div class="options-grid">';
        options.forEach((o, i) => {
            h += '<button class="option-btn jp" data-i="' + i + '" onclick="NUM.checkMC(this,\'' +
                o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.15rem;">' + o + '</button>';
        });
        h += '</div>';
        document.getElementById('num-question').innerHTML = h;
    },

    _minuteReading(min) {
        // Fallback for minute values not in the data
        const entry = NUMBERS_DATA.minutes.find(m => m.minute === min);
        if (entry) return entry.reading.split('/')[0];
        return this._numberToReading(min) + 'ふん';
    },

    /* ── Question type 5: Day of month / Month MC ──────────── */
    _qDaysMC() {
        const useMonth = Math.random() < 0.4;

        if (useMonth) {
            const entry = pick(NUMBERS_DATA.months);
            const correct = entry.reading;
            const pool = NUMBERS_DATA.months.filter(m => m.month !== entry.month).map(m => m.reading);
            const options = generateDistractors(correct, pool, 4);

            this.currentQ = {
                type: 'mc', answer: correct,
                month: entry.month, monthName: entry.name,
                hints: [
                    'Months use がつ after the number',
                    entry.irregular ? 'This month is irregular!' : 'This follows the regular pattern'
                ],
                _retry: true
            };

            let h = '<span class="rule-tag">Months</span>' +
                '<div class="question-prompt" style="font-size:2rem;font-weight:600;">' + entry.name + '</div>' +
                '<p class="question-text">How do you say this month in Japanese?</p>' +
                '<div class="options-grid">';
            options.forEach((o, i) => {
                h += '<button class="option-btn jp" data-i="' + i + '" onclick="NUM.checkMC(this,\'' +
                    o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.2rem;">' + o + '</button>';
            });
            h += '</div>';
            document.getElementById('num-question').innerHTML = h;
        } else {
            const entry = pick(NUMBERS_DATA.days);
            const correct = entry.reading;
            const pool = NUMBERS_DATA.days.filter(d => d.day !== entry.day).map(d => d.reading);
            const options = generateDistractors(correct, pool, 4);

            const suffix = entry.day === 1 ? 'st' : entry.day === 2 ? 'nd' : entry.day === 3 ? 'rd' : 'th';

            this.currentQ = {
                type: 'mc', answer: correct,
                day: entry.day,
                hints: [
                    'Days 1-10 use special native Japanese readings',
                    'Think of the つ counter: the day readings are related'
                ],
                _retry: true
            };

            let h = '<span class="rule-tag">Days of the Month</span>' +
                '<div class="question-prompt" style="font-size:2rem;font-weight:600;">' +
                entry.day + suffix + ' of the month</div>' +
                '<p class="question-text">How do you say this date in Japanese?</p>' +
                '<div class="options-grid">';
            options.forEach((o, i) => {
                h += '<button class="option-btn jp" data-i="' + i + '" onclick="NUM.checkMC(this,\'' +
                    o.replace(/'/g, "\\'") + '\')" style="font-family:var(--jp-font);font-size:1.2rem;">' + o + '</button>';
            });
            h += '</div>';
            document.getElementById('num-question').innerHTML = h;
        }
    },

    /* ── Question type 6: Money → typed reading ────────────── */
    _qMoneyType() {
        const entry = pick(NUMBERS_DATA.money);
        const correct = entry.reading;

        this.currentQ = {
            type: 'typed', answer: correct,
            amount: entry.amount,
            hints: [
                'Japanese currency is えん (yen)',
                'Remember irregular hundreds (300, 600, 800) and thousands (3000, 8000)'
            ],
            _retry: true
        };

        let h = '<span class="rule-tag">Money</span>' +
            '<div class="question-prompt" style="font-size:2.5rem;font-weight:700;">' +
            '¥' + entry.amount.toLocaleString() + '</div>' +
            '<p class="question-text">Type this price in hiragana</p>' +
            '<div class="input-area">' +
            '<input type="text" class="jp-input" id="num-input" lang="ja" placeholder="ひらがな..." autocomplete="off">' +
            '<button class="btn btn-primary" onclick="NUM.checkTyped()">Check</button></div>';
        document.getElementById('num-question').innerHTML = h;

        setTimeout(() => {
            const inp = document.getElementById('num-input');
            if (inp) { inp.focus(); inp.addEventListener('keydown', e => { if (e.key === 'Enter') NUM.checkTyped(); }); }
        }, 100);
    },

    _renderQ() {
        // Re-render a retry question from wrong-answer pool
        const q = this.currentQ;
        if (q.type === 'mc') {
            // Regenerate the MC question from stored data
            if (q.counter) this._qCounterMC();
            else if (q.time) this._qTimeMC();
            else if (q.day || q.month) this._qDaysMC();
            else this.load();
        } else if (q.type === 'typed') {
            if (q.number) this._qNumberToJp(q.number, q.number);
            else if (q.amount) this._qMoneyType();
            else this.load();
        } else if (q.type === 'typedNumber') {
            if (q.reading) {
                const n = parseInt(q.answer);
                this._qJpToNumber(n, n);
            } else this.load();
        }
    },

    /* ── Answer checking ───────────────────────────────────── */
    checkTyped() {
        const inp = document.getElementById('num-input');
        if (!inp || !inp.value.trim()) return;
        const val = inp.value.trim();
        this.total++;
        const q = this.currentQ;

        let correct = false;
        if (q.type === 'typedNumber') {
            // Numeric answer — strip commas and spaces
            correct = val.replace(/[,\s]/g, '') === q.answer;
        } else {
            // Japanese reading — check against answer, also accept alternate readings
            const answers = q.answer.split('/').map(a => a.trim());
            correct = answers.includes(val);
        }

        if (correct) { this.score++; this.streak++; }
        else this.streak = 0;

        const srsKey = 'num-' + (q.number || q.amount || q.answer);
        SRS.review(srsKey, correct ? 5 : 1);

        inp.disabled = true;
        this.updateUI();
        saveTrainerStats('NUM', this, correct);

        let expl = '';
        if (q.type === 'typedNumber') {
            expl = '<span class="jp-medium">' + q.reading + '</span> = <strong>' + q.answer + '</strong>';
        } else if (q.number !== undefined) {
            expl = '<strong>' + q.number.toLocaleString() + '</strong> = <span class="jp-medium">' + q.answer + '</span>';
        } else if (q.amount !== undefined) {
            expl = '<strong>¥' + q.amount.toLocaleString() + '</strong> = <span class="jp-medium">' + q.answer + '</span>';
        } else {
            expl = 'Answer: <span class="jp-medium">' + q.answer + '</span>';
        }
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    checkMC(btn, chosen) {
        if (btn.disabled) return;
        this.total++;
        const q = this.currentQ;
        const correct = (chosen === q.answer);

        document.querySelectorAll('#num-question .option-btn').forEach(b => {
            const val = b.textContent.trim();
            if (val === q.answer) b.classList.add('correct');
            else if (b === btn && !correct) b.classList.add('incorrect');
            b.disabled = true;
        });

        if (correct) { this.score++; this.streak++; }
        else this.streak = 0;

        const srsKey = 'num-' + (q.counter ? q.counter + q.count : q.time || q.day || q.month || q.answer);
        SRS.review(srsKey, correct ? 4 : 1);

        this.updateUI();
        saveTrainerStats('NUM', this, correct);

        let expl = '';
        if (q.counter) {
            expl = q.count + ' (' + q.counter + ') = <span class="jp-medium">' + q.answer + '</span>';
        } else if (q.time) {
            expl = '<strong>' + q.time + '</strong> = <span class="jp-medium">' + q.answer + '</span>';
        } else if (q.day) {
            expl = 'Day ' + q.day + ' = <span class="jp-medium">' + q.answer + '</span>';
        } else if (q.monthName) {
            expl = q.monthName + ' = <span class="jp-medium">' + q.answer + '</span>';
        } else {
            expl = 'Answer: <span class="jp-medium">' + q.answer + '</span>';
        }
        this.showFeedback(correct, correct ? 'Correct!' : 'Not quite', expl);
    },

    showFeedback(correct, title, explanation) {
        const fb = document.getElementById('num-fb');
        fb.classList.remove('correct', 'incorrect');
        fb.classList.add('show', correct ? 'correct' : 'incorrect');
        document.getElementById('num-fb-title').textContent = title;
        document.getElementById('num-fb-expl').innerHTML = explanation;
        document.getElementById('num-next').classList.add('show');
        setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    },

    updateUI() {
        document.getElementById('num-score').textContent = this.score;
        document.getElementById('num-acc').textContent =
            this.total > 0 ? Math.round(this.score / this.total * 100) + '%' : '0%';
        document.getElementById('num-streak').textContent = this.streak;
    }
};
