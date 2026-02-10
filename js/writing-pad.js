/* ================================================================
   Writing Pad — HTML5 Canvas component for character writing
   Supports mouse, pen/tablet (Pointer Events), and touch
   ================================================================ */
const WritingPad = {
    pads: {},  // canvasId -> pad state

    init(canvasId, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const pad = {
            canvas, ctx,
            strokes: [],      // array of stroke arrays (each stroke = array of {x,y})
            currentStroke: null,
            drawing: false,
            mode: options.mode || 'freehand', // 'freehand' or 'trace'
            traceChar: null,
            lineWidth: options.lineWidth || 4,
            color: options.color || '#2b2d42',
            guideColor: 'rgba(200,200,200,0.4)',
            onComplete: options.onComplete || null
        };

        this.pads[canvasId] = pad;

        // Pointer events for universal input
        canvas.addEventListener('pointerdown', e => this._down(canvasId, e));
        canvas.addEventListener('pointermove', e => this._move(canvasId, e));
        canvas.addEventListener('pointerup', e => this._up(canvasId, e));
        canvas.addEventListener('pointerleave', e => this._up(canvasId, e));

        // Prevent scrolling on touch
        canvas.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
        canvas.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

        this._drawGuides(pad);
    },

    _getPos(canvas, e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    },

    _down(canvasId, e) {
        const pad = this.pads[canvasId];
        if (!pad) return;
        e.preventDefault();
        pad.drawing = true;
        const pos = this._getPos(pad.canvas, e);
        pad.currentStroke = [pos];

        pad.ctx.beginPath();
        pad.ctx.moveTo(pos.x, pos.y);
        pad.ctx.strokeStyle = pad.color;
        pad.ctx.lineWidth = pad.lineWidth;
        pad.ctx.lineCap = 'round';
        pad.ctx.lineJoin = 'round';

        // Use pressure if available (pen tablet / touch)
        if (e.pressure && e.pressure > 0) {
            var w = Math.max(2, pad.lineWidth * e.pressure * 2);
            pad._lastWidth = w;
            pad.ctx.lineWidth = w;
        }
    },

    _move(canvasId, e) {
        const pad = this.pads[canvasId];
        if (!pad || !pad.drawing) return;
        e.preventDefault();
        const pos = this._getPos(pad.canvas, e);
        pad.currentStroke.push(pos);

        // Smooth pressure transitions (70% previous, 30% new)
        if (e.pressure && e.pressure > 0) {
            var target = Math.max(2, pad.lineWidth * e.pressure * 2);
            var prev = pad._lastWidth || target;
            var smoothed = prev * 0.7 + target * 0.3;
            pad._lastWidth = smoothed;
            pad.ctx.lineWidth = smoothed;
        }

        pad.ctx.lineTo(pos.x, pos.y);
        pad.ctx.stroke();
        pad.ctx.beginPath();
        pad.ctx.moveTo(pos.x, pos.y);
    },

    _up(canvasId, e) {
        const pad = this.pads[canvasId];
        if (!pad || !pad.drawing) return;
        pad.drawing = false;
        if (pad.currentStroke && pad.currentStroke.length > 1) {
            pad.strokes.push(pad.currentStroke);
        }
        pad.currentStroke = null;
    },

    _drawGuides(pad) {
        const w = pad.canvas.width;
        const h = pad.canvas.height;
        pad.ctx.clearRect(0, 0, w, h);

        // Cross guidelines
        pad.ctx.strokeStyle = pad.guideColor;
        pad.ctx.lineWidth = 1;
        pad.ctx.setLineDash([8, 8]);

        // Vertical center
        pad.ctx.beginPath();
        pad.ctx.moveTo(w / 2, 0);
        pad.ctx.lineTo(w / 2, h);
        pad.ctx.stroke();

        // Horizontal center
        pad.ctx.beginPath();
        pad.ctx.moveTo(0, h / 2);
        pad.ctx.lineTo(w, h / 2);
        pad.ctx.stroke();

        pad.ctx.setLineDash([]);

        // Draw trace overlay if in trace mode
        if (pad.mode === 'trace' && pad.traceChar) {
            pad.ctx.font = 'bold ' + (w * 0.7) + 'px "Noto Sans JP", sans-serif';
            pad.ctx.textAlign = 'center';
            pad.ctx.textBaseline = 'middle';
            pad.ctx.fillStyle = 'rgba(200, 200, 200, 0.25)';
            pad.ctx.fillText(pad.traceChar, w / 2, h / 2);
        }
    },

    clear(canvasId) {
        const pad = this.pads[canvasId];
        if (!pad) return;
        pad.strokes = [];
        pad.currentStroke = null;
        this._drawGuides(pad);
    },

    undo(canvasId) {
        const pad = this.pads[canvasId];
        if (!pad || pad.strokes.length === 0) return;
        pad.strokes.pop();
        this._redraw(pad);
    },

    _redraw(pad) {
        this._drawGuides(pad);
        pad.ctx.strokeStyle = pad.color;
        pad.ctx.lineWidth = pad.lineWidth;
        pad.ctx.lineCap = 'round';
        pad.ctx.lineJoin = 'round';

        pad.strokes.forEach(stroke => {
            if (stroke.length < 2) return;
            pad.ctx.beginPath();
            pad.ctx.moveTo(stroke[0].x, stroke[0].y);
            for (let i = 1; i < stroke.length; i++) {
                pad.ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            pad.ctx.stroke();
        });
    },

    setTrace(canvasId, char) {
        const pad = this.pads[canvasId];
        if (!pad) return;
        pad.mode = 'trace';
        pad.traceChar = char;
        this.clear(canvasId);
    },

    setFreehand(canvasId) {
        const pad = this.pads[canvasId];
        if (!pad) return;
        pad.mode = 'freehand';
        pad.traceChar = null;
        this.clear(canvasId);
    },

    showAnswer(canvasId, char) {
        const pad = this.pads[canvasId];
        if (!pad) return;
        const w = pad.canvas.width;
        const h = pad.canvas.height;
        pad.ctx.font = 'bold ' + (w * 0.6) + 'px "Noto Sans JP", sans-serif';
        pad.ctx.textAlign = 'center';
        pad.ctx.textBaseline = 'middle';
        pad.ctx.fillStyle = 'rgba(230, 57, 70, 0.3)';
        pad.ctx.fillText(char, w / 2, h / 2);
    },

    hasStrokes(canvasId) {
        const pad = this.pads[canvasId];
        return pad && pad.strokes.length > 0;
    },

    // Dark mode support
    setDarkMode(canvasId, dark) {
        const pad = this.pads[canvasId];
        if (!pad) return;
        pad.color = dark ? '#e0e0e0' : '#2b2d42';
        pad.guideColor = dark ? 'rgba(100,100,140,0.4)' : 'rgba(200,200,200,0.4)';
    }
};
