"use strict";function $(e){return document.querySelectorAll(e)}function createElement(e,t,n){if(!e)return null;var r=document.createElement(e);for(var i in t)r.setAttribute(i,t[i]);return r.innerHTML=n||"",r}function insertBefore(e,t){t.parentElement.insertBefore(e,t)}function insertAfter(e,t){t.parentElement.insertBefore(e,t.nextElementSibling)}