"use strict";function ajax(e,t,n,o){e="string"==typeof e?e:"",t="function"==typeof t?t:function(e,t){console.log(e,"–",t)},n=/^GET|POST|UPDATE|DELETE$/.test(n)?n:"GET";var s,r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(r.open(n,e),r.onreadystatechange=function(){t&&r.readyState>3&&t(r.status,r.responseText)},o&&"object"==typeof o)for(var a in r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s="",o)s+=a+"="+o[a]+"\n";return r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.send(s),r}