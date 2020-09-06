/*
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*/
(function () {
    function addEvent(el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else {
            el.attachEvent('on' + type, fn);
        }
    }

    function extend(obj, ext) {
        for (let key in ext) {
            if (ext.hasOwnProperty(key)) {
                obj[key] = ext[key];
            }
        }

        return obj;
    }

    window.fitText = function (el, compressor, options) {
        let settings = extend({
            minFontSize: -1 / 0,
            maxFontSize: 1 / 0
        }, options);

        let compress = compressor || 10;
        let maxFontSize = settings.maxFontSize;
        let minFontSize = settings.minFontSize;

        function fit(el) {
            function resize() {
                el.style.fontSize = Math.max(Math.min(el.clientWidth / compress, maxFontSize), minFontSize) + 'px';
            }

            function tryResize() {
                if (el.clientWidth > 0) {
                    resize()
                } else {
                    // Wait until client size is properly computed
                    setTimeout(tryResize, 10);
                }
            }

            tryResize();

            // Bind events
            // If you have any js library which support Events, replace this part
            // and remove addEvent function (or use original jQuery version)
            addEvent(window, 'resize', resize);
            addEvent(window, 'orientationchange', resize);
        }

        if (el.length) {
            for (let i = 0; i < el.length; i++) {
                fit(el[i]);
            }
        } else {
            fit(el);
        }

        // return set of elements
        return el;
    };
})();
