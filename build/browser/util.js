"use strict";function $(e,t,o){const s="string"!=typeof e?e:document,n="string"==typeof e?e:t,l="string"==typeof t?o:t,i=s.querySelectorAll(n);if(l)for(let e=0,t=i.length;e<t;e++)l(i[e],e);return i}function hide(e){e.style.display="none"}function show(e){e.style.display=""}function toggle(e){"none"===e.style.display?e.style.display="":e.style.display="none"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toggle=exports.show=exports.hide=exports.$=void 0,exports.$=$,exports.hide=hide,exports.show=show,exports.toggle=toggle;