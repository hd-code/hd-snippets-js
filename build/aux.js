"use strict";function deepClone(e){return JSON.parse(JSON.stringify(e))}function flattenArray(e){return e.reduce(function(e,r){return e.concat(r)},[])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.deepClone=deepClone,exports.flattenArray=flattenArray;