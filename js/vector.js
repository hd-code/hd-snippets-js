/*! vector v0.3.0 | MIT | https://github.com/hd-code/web-snippets */
export function isVector(t){if(!(t instanceof Array))return!1;for(let e=0,n=t.length;e<n;e++)if("number"!=typeof t[e])return!1;return!0};export function add(t,e){if(t.length!==e.length)return[];const n=[];for(let r=0,u=t.length;r<u;r++)n.push(t[r]+e[r]);return n};export function sub(t,e){if(t.length!==e.length)return[];const n=[];for(let r=0,u=t.length;r<u;r++)n.push(t[r]-e[r]);return n};export function mul(t,e){return t.length!==e.length?[]:t.map((n,r)=>t[r]*e[r])};export function div(t,e){return t.length!==e.length?[]:t.map((n,r)=>t[r]/e[r])};export function scale(t,e){return e.map(e=>t*e)};export function dot(t,e){if(t.length!==e.length||0===t.length||0===e.length)return NaN;let n=0;for(let r=0,u=t.length;r<u;r++)n+=t[r]*e[r];return n};export function mulMatrix(t,e){if(t.length!==e.length)return[];return transpose(e).map(e=>dot(t,e))};export function avg(t){return 0===t.length?0:sum(t)/t.length};export function mag(t){return Math.sqrt(dot(t,t))};export function median(t){switch(t.length){case 0:return 0;case 1:return t[0]}const e=t.length;return e%2==1?quickselect(t,e/2):(quickselect(t,e/2-1)+quickselect(t,e/2))/2};export function quickselect(t,e){switch(t.length){case 0:return 0;case 1:return t[0]}const n=Math.min(Math.max(0,Math.floor(e)),t.length-1),r=t[Math.floor(Math.random()*t.length)],{numOfLower:u,numOfPivs:o}=countValues(t,r);if(n<u){return quickselect(t.filter(t=>t<r),n)}return n<u+o?r:quickselect(t.filter(t=>t>r),n-u-o)};export function sum(t){return t.reduce(plus,0)};function countValues(t,e){let n=0,r=0,u=0;for(let o=0,l=t.length;o<l;o++)t[o]<e?n++:t[o]===e?r++:u++;return{numOfLower:n,numOfPivs:r,numOfUpper:u}}function plus(t,e){return t+e}function transpose(t){var e,n;return null!==(n=null===(e=t[0])||void 0===e?void 0:e.map((e,n)=>t.map(t=>t[n])))&&void 0!==n?n:[]}