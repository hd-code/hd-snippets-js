"use strict";NodeList.prototype.forEach=NodeList.prototype.forEach||Array.prototype.forEach,NodeList.prototype.map=NodeList.prototype.map||Array.prototype.map,NodeList.prototype.reduce=NodeList.prototype.reduce||Array.prototype.reduce,Element.prototype.on=Element.prototype.on||Element.prototype.addEventListener,NodeList.prototype.on=NodeList.prototype.on||function(...t){this.forEach(o=>o.on(...t))},Element.prototype.off=Element.prototype.off||Element.prototype.removeEventListener,NodeList.prototype.off=NodeList.prototype.off||function(...t){this.forEach(o=>o.off(...t))},Element.prototype.one=Element.prototype.one||function(...t){var o=this,e=[...t];e.shift(),e.shift(),o.on(t[0],function e(...p){o.off(t[0],e),t[1](...p)},...e)},NodeList.prototype.one=NodeList.prototype.one||function(...t){this.forEach(o=>o.one(...t))},Element.prototype.hide=Element.prototype.hide||function(){this.style.display="none"},NodeList.prototype.hide=NodeList.prototype.hide||function(){this.forEach(t=>t.hide())},Element.prototype.show=Element.prototype.show||function(){this.style.display=""},NodeList.prototype.show=NodeList.prototype.show||function(){this.forEach(t=>t.show())},Element.prototype.toggle=Element.prototype.toggle||function(){this.style.display=this.style.display?"":"none"},NodeList.prototype.toggle=NodeList.prototype.toggle||function(){this.forEach(t=>t.toggle())},Element.prototype.addClass=Element.prototype.addClass||function(t){this.classList.add(t)},NodeList.prototype.addClass=NodeList.prototype.addClass||function(t){this.forEach(o=>o.addClass(t))},Element.prototype.removeClass=Element.prototype.removeClass||function(t){this.classList.remove(t)},NodeList.prototype.removeClass=NodeList.prototype.removeClass||function(t){this.forEach(o=>o.removeClass(t))},Element.prototype.toggleClass=Element.prototype.toggleClass||function(t){this.classList.toggle(t)},NodeList.prototype.toggleClass=NodeList.prototype.toggleClass||function(t){this.forEach(o=>o.toggleClass(t))};