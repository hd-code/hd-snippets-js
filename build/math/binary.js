"use strict";
/*! binary v0.0.1 | MIT | © Hannes Dröse https://github.com/hd-code/js-snippets */function toBinary(t,r=0){const n=(t>>>0).toString(2);let o="";for(let t=0,n=r;t<n;t++)o+="0";return r?(o+n).slice(-r):n}function toBinaryString(t,r){const n=toBinary(t,r),o=[];for(let t=0,r=n.length;t<r;t++)o.push(parseInt(n[t]));return o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toBinaryString=exports.toBinary=void 0,exports.toBinary=toBinary,exports.toBinaryString=toBinaryString;