function ajax(e,t,n,o){e="string"==typeof e?e:"",t="function"==typeof t?t:function(e,t){console.log(e,"–",t)},n=/^GET|POST|UPDATE|DELETE$/.test(n)?n:"GET";var s,a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(a.open(n,e),a.onreadystatechange=function(){t&&3<a.readyState&&t(a.status,a.responseText)},o&&"object"==typeof o)for(var r in a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s="",o)s+=r+"="+o[r]+"\n";return a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.send(s),a}