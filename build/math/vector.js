"use strict";
/*! vector v0.0.1 | MIT | © Hannes Dröse https://github.com/hd-code/js-snippets */function isVector(t){if(!(t instanceof Array))return!1;for(let e=0,r=t.length;e<r;e++)if("number"!=typeof t[e])return!1;return!0}function sum(t){let e=0;for(let r=0,n=t.length;r<n;r++)e+=t[r];return e}function avg(t){return 0===t.length?0:sum(t)/t.length}function median(t){if(0===t.length)return 0;const e=[...t];e.sort();const r=Math.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2}function mag(t){return Math.sqrt(dot(t,t))}function add(t,e){if(t.length!==e.length)return[];const r=[];for(let n=0,o=t.length;n<o;n++)r.push(t[n]+e[n]);return r}function sub(t,e){if(t.length!==e.length)return[];const r=[];for(let n=0,o=t.length;n<o;n++)r.push(t[n]-e[n]);return r}function mul(t,e){if(t.length!==e.length)return[];const r=[];for(let n=0,o=t.length;n<o;n++)r.push(t[n]*e[n]);return r}function dot(t,e){if(t.length!==e.length)return NaN;let r=0;for(let n=0,o=t.length;n<o;n++)r+=t[n]*e[n];return r}function scale(t,e){const r=[];for(let n=0,o=e.length;n<o;n++)r.push(e[n]*t);return r}function mulMatrix(t,e){if(t.length!==e.length)return[];const r=[];for(let n=0,o=e[0].length;n<o;n++)for(let o=0,s=t.length;o<s;o++){if(void 0===e[o][n])return[];r.push(t[o]*e[o][n])}return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mulMatrix=exports.scale=exports.dot=exports.mul=exports.sub=exports.add=exports.mag=exports.median=exports.avg=exports.sum=exports.isVector=void 0,exports.isVector=isVector,exports.sum=sum,exports.avg=avg,exports.median=median,exports.mag=mag,exports.add=add,exports.sub=sub,exports.mul=mul,exports.dot=dot,exports.scale=scale,exports.mulMatrix=mulMatrix;