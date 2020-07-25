"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LocalStorage=exports.CacheStorage=void 0;const fs=__importStar(require("fs")),path=__importStar(require("path"));function CacheStorage(){return BaseStorage({})}function LocalStorage(e){const t=e?path.resolve(e):path.resolve(__dirname,defaultFileName);const r=BaseStorage(initLocalStorage(t)),n=()=>{const e=r.getAll();saveToFile(t,e)};return{clear:()=>{const e=r.clear();return n(),e},delete:e=>{const t=r.delete(e);return n(),t},filter:r.filter,get:r.get,getAll:r.getAll,save:e=>{const t=r.save(e);return n(),t},set:(e,t)=>{const o=r.set(e,t);return n(),o}}}function BaseStorage(e){return{clear:()=>{const t=e;return e={},t},delete:t=>{const r=e[t];return delete e[t],r},filter:t=>{const r={};for(const n in e)try{t(e[n])&&(r[n]=e[n])}catch(e){}return r},get:t=>e[t],getAll:()=>e,save:t=>{let r="";for(;r=generateKey(),void 0!==e[r];);return e[r]=t,r},set:(t,r)=>{const n=e[t];return e[t]=r,n}}}exports.CacheStorage=CacheStorage,exports.LocalStorage=LocalStorage;const hexBase=16,autoKeyLength=16;function generateKey(){const e=[];for(let t=0;t<autoKeyLength;t++)e.push(generateHexDigit());return e.join("")}function generateHexDigit(){return Math.floor(Math.random()*hexBase).toString(hexBase)[0]}const defaultFileName="localstorage.json";function initLocalStorage(e){try{const t=fs.readFileSync(e),r=JSON.parse(t);if("object"!=typeof r||!r)throw new Error("Invalid file content");return r}catch(t){return saveToFile(e,{}),{}}}function saveToFile(e,t){const r=JSON.stringify(t);fs.writeFileSync(e,r)}