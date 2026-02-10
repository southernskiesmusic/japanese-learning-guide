/* ================================================================
   Touch Utilities — shared touch device detection + swipe navigation
   ================================================================ */

// Add touch-device class on touch-capable devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('touch-device');
}

var SwipeNav = {
    /**
     * Bind swipe left/right detection to a target element.
     * @param {string|Element} target - CSS selector or DOM element
     * @param {Object} opts
     * @param {Function} opts.onSwipeLeft
     * @param {Function} opts.onSwipeRight
     * @param {string}   opts.excludeSelector - skip swipe on these elements
     */
    bind: function(target, opts) {
        var el = typeof target === 'string' ? document.querySelector(target) : target;
        if (!el) return;

        var startX, startY, startTime;
        var threshold = 50;      // min horizontal distance
        var restraint = 100;     // max vertical distance
        var timeLimit = 500;     // ms

        el.addEventListener('touchstart', function(e) {
            var t = e.changedTouches[0];
            startX = t.pageX;
            startY = t.pageY;
            startTime = Date.now();
        }, { passive: true });

        el.addEventListener('touchend', function(e) {
            if (!startX) return;

            // Skip if touch originated on excluded element
            if (opts.excludeSelector && e.target.closest(opts.excludeSelector)) return;

            var t = e.changedTouches[0];
            var dx = t.pageX - startX;
            var dy = t.pageY - startY;
            var dt = Date.now() - startTime;

            if (dt <= timeLimit && Math.abs(dx) >= threshold && Math.abs(dy) <= restraint) {
                if (dx < 0 && opts.onSwipeLeft) opts.onSwipeLeft();
                else if (dx > 0 && opts.onSwipeRight) opts.onSwipeRight();
            }
            startX = null;
        }, { passive: true });
    }
};
