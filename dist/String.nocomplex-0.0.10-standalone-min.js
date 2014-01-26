/**
 * almond 0.2.7 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

//  Underscore.string
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
//  Underscore.string is freely distributable under the terms of the MIT license.
//  Documentation: https://github.com/epeli/underscore.string
//  Some code is borrowed from MooTools and Alexandru Marasteanu.
//  Version '2.3.2'

// Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>

/**
 * String.nocomplex version: "0.0.10" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/String.nocomplex for details
 */

var requirejs,require,define;!function(e){function n(e,n){return w.call(e,n)}function r(e,n){var r,t,i,o,s,u,l,c,a,f,p=n&&n.split("/"),h=d.map,g=h&&h["*"]||{};if(e&&"."===e.charAt(0))if(n){for(p=p.slice(0,p.length-1),e=p.concat(e.split("/")),c=0;c<e.length;c+=1)if(f=e[c],"."===f)e.splice(c,1),c-=1;else if(".."===f){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||g)&&h){for(r=e.split("/"),c=r.length;c>0;c-=1){if(t=r.slice(0,c).join("/"),p)for(a=p.length;a>0;a-=1)if(i=h[p.slice(0,a).join("/")],i&&(i=i[t])){o=i,s=c;break}if(o)break;!u&&g&&g[t]&&(u=g[t],l=c)}!o&&u&&(o=u,s=l),o&&(r.splice(0,s,o),e=r.join("/"))}return e}function t(n,r){return function(){return a.apply(e,x.call(arguments,0).concat([n,r]))}}function i(e){return function(n){return r(n,e)}}function o(e){return function(n){h[e]=n}}function s(r){if(n(g,r)){var t=g[r];delete g[r],m[r]=!0,c.apply(e,t)}if(!n(h,r)&&!n(m,r))throw new Error("No "+r);return h[r]}function u(e){var n,r=e?e.indexOf("!"):-1;return r>-1&&(n=e.substring(0,r),e=e.substring(r+1,e.length)),[n,e]}function l(e){return function(){return d&&d.config&&d.config[e]||{}}}var c,a,f,p,h={},g={},d={},m={},w=Object.prototype.hasOwnProperty,x=[].slice;f=function(e,n){var t,o=u(e),l=o[0];return e=o[1],l&&(l=r(l,n),t=s(l)),l?e=t&&t.normalize?t.normalize(e,i(n)):r(e,n):(e=r(e,n),o=u(e),l=o[0],e=o[1],l&&(t=s(l))),{f:l?l+"!"+e:e,n:e,pr:l,p:t}},p={require:function(e){return t(e)},exports:function(e){var n=h[e];return"undefined"!=typeof n?n:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:l(e)}}},c=function(r,i,u,l){var c,a,d,w,x,b,_=[],v=typeof u;if(l=l||r,"undefined"===v||"function"===v){for(i=!i.length&&u.length?["require","exports","module"]:i,x=0;x<i.length;x+=1)if(w=f(i[x],l),a=w.f,"require"===a)_[x]=p.require(r);else if("exports"===a)_[x]=p.exports(r),b=!0;else if("module"===a)c=_[x]=p.module(r);else if(n(h,a)||n(g,a)||n(m,a))_[x]=s(a);else{if(!w.p)throw new Error(r+" missing "+a);w.p.load(w.n,t(l,!0),o(a),{}),_[x]=h[a]}d=u?u.apply(h[r],_):void 0,r&&(c&&c.exports!==e&&c.exports!==h[r]?h[r]=c.exports:d===e&&b||(h[r]=d))}else r&&(h[r]=u)},requirejs=require=a=function(n,r,t,i,o){return"string"==typeof n?p[n]?p[n](r):s(f(n,r).f):(n.splice||(d=n,r.splice?(n=r,r=t,t=null):n=e),r=r||function(){},"function"==typeof t&&(t=i,i=o),i?c(e,n,r,t):setTimeout(function(){c(e,n,r,t)},4),a)},a.config=function(e){return d=e,d.deps&&a(d.deps,d.callback),a},requirejs._defined=h,define=function(e,r,t){r.splice||(t=r,r=[]),n(h,e)||n(g,e)||(g[e]=[e,r,t])},define.amd={jQuery:!0}}(),define("bower_components/almond/almond",function(){}),!function(e,n){function r(e,n){var r,t,i=e.toLowerCase();for(n=[].concat(n),r=0;r<n.length;r+=1)if(t=n[r]){if(t.test&&t.test(e))return!0;if(t.toLowerCase()===i)return!0}}var t=n.prototype.trim,i=n.prototype.trimRight,o=n.prototype.trimLeft,s=function(e){return 1*e||0},u=function(e,n){if(1>n)return"";for(var r="";n>0;)1&n&&(r+=e),n>>=1,e+=e;return r},l=[].slice,c=function(e){return null==e?"\\s":e.source?e.source:"["+g.escapeRegExp(e)+"]"},a={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"},f={};for(var p in a)f[a[p]]=p;f["'"]="#39";var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var r=u,t=function(){return t.cache.hasOwnProperty(arguments[0])||(t.cache[arguments[0]]=t.parse(arguments[0])),t.format.call(null,t.cache[arguments[0]],arguments)};return t.format=function(t,i){var o,s,u,l,c,a,f,p=1,g=t.length,d="",m=[];for(s=0;g>s;s++)if(d=e(t[s]),"string"===d)m.push(t[s]);else if("array"===d){if(l=t[s],l[2])for(o=i[p],u=0;u<l[2].length;u++){if(!o.hasOwnProperty(l[2][u]))throw new Error(h('[_.sprintf] property "%s" does not exist',l[2][u]));o=o[l[2][u]]}else o=l[1]?i[l[1]]:i[p++];if(/[^s]/.test(l[8])&&"number"!=e(o))throw new Error(h("[_.sprintf] expecting number but found %s",e(o)));switch(l[8]){case"b":o=o.toString(2);break;case"c":o=n.fromCharCode(o);break;case"d":o=parseInt(o,10);break;case"e":o=l[7]?o.toExponential(l[7]):o.toExponential();break;case"f":o=l[7]?parseFloat(o).toFixed(l[7]):parseFloat(o);break;case"o":o=o.toString(8);break;case"s":o=(o=n(o))&&l[7]?o.substring(0,l[7]):o;break;case"u":o=Math.abs(o);break;case"x":o=o.toString(16);break;case"X":o=o.toString(16).toUpperCase()}o=/[def]/.test(l[8])&&l[3]&&o>=0?"+"+o:o,a=l[4]?"0"==l[4]?"0":l[4].charAt(1):" ",f=l[6]-n(o).length,c=l[6]?r(a,f):"",m.push(l[5]?o+c:c+o)}return m.join("")},t.cache={},t.parse=function(e){for(var n=e,r=[],t=[],i=0;n;){if(null!==(r=/^[^\x25]+/.exec(n)))t.push(r[0]);else if(null!==(r=/^\x25{2}/.exec(n)))t.push("%");else{if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)))throw new Error("[_.sprintf] huh?");if(r[2]){i|=1;var o=[],s=r[2],u=[];if(null===(u=/^([a-z_][a-z_\d]*)/i.exec(s)))throw new Error("[_.sprintf] huh?");for(o.push(u[1]);""!==(s=s.substring(u[0].length));)if(null!==(u=/^\.([a-z_][a-z_\d]*)/i.exec(s)))o.push(u[1]);else{if(null===(u=/^\[(\d+)\]/.exec(s)))throw new Error("[_.sprintf] huh?");o.push(u[1])}r[2]=o}else i|=2;if(3===i)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");t.push(r)}n=n.substring(r[0].length)}return t},t}(),g={VERSION:"2.3.0",isBlank:function(e){return null==e&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return null==e?"":n(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=null==e?"":n(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,r){return null==e?[]:(e=n(e),r=~~r,r>0?e.match(new RegExp(".{1,"+r+"}","g")):[e])},clean:function(e){return g.strip(e).replace(/\s+/g," ")},count:function(e,r){if(null==e||null==r)return 0;e=n(e),r=n(r);for(var t=0,i=0,o=r.length;;){if(i=e.indexOf(r,i),-1===i)break;t++,i+=o}return t},chars:function(e){return null==e?[]:n(e).split("")},swapCase:function(e){return null==e?"":n(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return null==e?"":n(e).replace(/[&<>"']/g,function(e){return"&"+f[e]+";"})},unescapeHTML:function(e){return null==e?"":n(e).replace(/\&([^;]+);/g,function(e,r){var t;return r in a?a[r]:(t=r.match(/^#x([\da-fA-F]+)$/))?n.fromCharCode(parseInt(t[1],16)):(t=r.match(/^#(\d+)$/))?n.fromCharCode(~~t[1]):e})},escapeRegExp:function(e){return null==e?"":n(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,n,r,t){var i=g.chars(e);return i.splice(~~n,~~r,t),i.join("")},insert:function(e,n,r){return g.splice(e,n,0,r)},include:function(e,r){return""===r?!0:null==e?!1:-1!==n(e).indexOf(r)},join:function(){var e=l.call(arguments),n=e.shift();return null==n&&(n=""),e.join(n)},lines:function(e){return null==e?[]:n(e).split("\n")},reverse:function(e){return g.chars(e).reverse().join("")},startsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(0,r.length)===r)},endsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(e.length-r.length)===r)},succ:function(e){return null==e?"":(e=n(e),e.slice(0,-1)+n.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":(e=n(e).toLowerCase(),e.replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()}))},camelize:function(e){return g.trim(e).replace(/[-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""})},underscored:function(e){return g.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return g.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return g.titleize(n(e).replace(/[\W_]/g," ")).replace(/\s/g,"")},humanize:function(e){return g.capitalize(g.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,r){return null==e?"":!r&&t?t.call(e):(r=c(r),n(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))},ltrim:function(e,r){return null==e?"":!r&&o?o.call(e):(r=c(r),n(e).replace(new RegExp("^"+r+"+"),""))},rtrim:function(e,r){return null==e?"":!r&&i?i.call(e):(r=c(r),n(e).replace(new RegExp(r+"+$"),""))},truncate:function(e,r,t){return null==e?"":(e=n(e),t=t||"...",r=~~r,e.length>r?e.slice(0,r)+t:e)},prune:function(e,r,t){if(null==e)return"";if(e=n(e),r=~~r,t=null!=t?n(t):"...",e.length<=r)return e;var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},o=e.slice(0,r+1).replace(/.(?=\W*\w*$)/g,i);return o=o.slice(o.length-2).match(/\w\w/)?o.replace(/\s*\S+$/,""):g.rtrim(o.slice(0,o.length-1)),(o+t).length>e.length?e:e.slice(0,o.length)+t},words:function(e,n){return g.isBlank(e)?[]:g.trim(e,n).split(n||/\s+/)},pad:function(e,r,t,i){e=null==e?"":n(e),r=~~r;var o=0;switch(t?t.length>1&&(t=t.charAt(0)):t=" ",i){case"right":return o=r-e.length,e+u(t,o);case"both":return o=r-e.length,u(t,Math.ceil(o/2))+e+u(t,Math.floor(o/2));default:return o=r-e.length,u(t,o)+e}},lpad:function(e,n,r){return g.pad(e,n,r)},rpad:function(e,n,r){return g.pad(e,n,r,"right")},lrpad:function(e,n,r){return g.pad(e,n,r,"both")},sprintf:h,vsprintf:function(e,n){return n.unshift(e),h.apply(null,n)},toNumber:function(e,n){return e?(e=g.trim(e),e.match(/^-?\d+(?:\.\d+)?$/)?s(s(e).toFixed(~~n)):0/0):0},numberFormat:function(e,n,r,t){if(isNaN(e)||null==e)return"";e=e.toFixed(~~n),t="string"==typeof t?t:",";var i=e.split("."),o=i[0],s=i[1]?(r||".")+i[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+t)+s},strRight:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.indexOf(r):-1;return~t?e.slice(t+r.length,e.length):e},strRightBack:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.lastIndexOf(r):-1;return~t?e.slice(t+r.length,e.length):e},strLeft:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.indexOf(r):-1;return~t?e.slice(0,t):e},strLeftBack:function(e,n){if(null==e)return"";e+="",n=null!=n?""+n:n;var r=e.lastIndexOf(n);return~r?e.slice(0,r):e},toSentence:function(e,n,r,t){n=n||", ",r=r||" and ";var i=e.slice(),o=i.pop();return e.length>2&&t&&(r=g.rtrim(n)+r),i.length?i.join(n)+r+o:o},toSentenceSerial:function(){var e=l.call(arguments);return e[3]=!0,g.toSentence.apply(g,e)},slugify:function(e){if(null==e)return"";var r="ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",t="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",i=new RegExp(c(r),"g");return e=n(e).toLowerCase().replace(i,function(e){var n=r.indexOf(e);return t.charAt(n)||"-"}),g.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,n){return[n,e,n].join("")},quote:function(e,n){return g.surround(e,n||'"')},unquote:function(e,n){return n=n||'"',e[0]===n&&e[e.length-1]===n?e.slice(1,e.length-1):e},exports:function(){var e={};for(var n in this)this.hasOwnProperty(n)&&!n.match(/^(?:include|contains|reverse)$/)&&(e[n]=this[n]);return e},repeat:function(e,r,t){if(null==e)return"";if(r=~~r,null==t)return u(n(e),r);for(var i=[];r>0;i[--r]=e);return i.join(t)},naturalCmp:function(e,r){if(e==r)return 0;if(!e)return-1;if(!r)return 1;for(var t=/(\.\d+)|(\d+)|(\D+)/g,i=n(e).toLowerCase().match(t),o=n(r).toLowerCase().match(t),s=Math.min(i.length,o.length),u=0;s>u;u++){var l=i[u],c=o[u];if(l!==c){var a=parseInt(l,10);if(!isNaN(a)){var f=parseInt(c,10);if(!isNaN(f)&&a-f)return a-f}return c>l?-1:1}}return i.length===o.length?i.length-o.length:r>e?-1:1},levenshtein:function(e,r){if(null==e&&null==r)return 0;if(null==e)return n(r).length;if(null==r)return n(e).length;e=n(e),r=n(r);for(var t,i,o=[],s=0;s<=r.length;s++)for(var u=0;u<=e.length;u++)i=s&&u?e.charAt(u-1)===r.charAt(s-1)?t:Math.min(o[u],o[u-1],t)+1:s+u,t=o[u],o[u]=i;return o.pop()},toBoolean:function(e,n,t){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=g.trim(e),r(e,n||["true","1"])?!0:r(e,t||["false","0"])?!1:void 0)}};g.strip=g.trim,g.lstrip=g.ltrim,g.rstrip=g.rtrim,g.center=g.lrpad,g.rjust=g.lpad,g.ljust=g.rpad,g.contains=g.include,g.q=g.quote,g.toBool=g.toBoolean,"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(module.exports=g),exports._s=g),"function"==typeof define&&define.amd&&define("underscore.string",[],function(){return g}),e._=e._||{},e._.string=e._.str=g}(this,String),define("String.nocomplex/uncapitalize",[],function(){String.prototype.uncapitalize=function(){return this[0].toLowerCase()+this.substr(1,this.length-1)}}),define("String.nocomplex/String.nocomplex",["underscore.string","./uncapitalize"],function(e){var n=Array.prototype.slice,r=function(r){String.prototype[r]=function(){var t=n.call(arguments);return t.unshift(this),e[r].apply(this,t)}};for(var t in e)e.hasOwnProperty(t)&&r(t);return String.prototype});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[e]=n)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{"String.nocomplex":".",almond:"bower_components/almond/almond",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon","underscore.string":"bower_components/underscore.string/lib/underscore.string"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var StringNocomplex=requirejs("String.nocomplex/String.nocomplex");engine.exports("StringNocomplex",StringNocomplex)}else requirejs(["String.nocomplex/String.nocomplex"],function(e){engine.exports("StringNocomplex",e)});define("String.nocomplex/main",function(){});