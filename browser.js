// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=a):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&i&&i.call(t,e,c.set),t};function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var f=Math.floor;function p(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,f(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function y(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!p(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}function b(t){return"number"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString,d=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",g=_()?function(t){var e,r,n,o,i;if(null==t)return m.call(t);r=t[v],i=v,e=null!=(o=t)&&d.call(o,i);try{t[v]=void 0}catch(e){return m.call(t)}return n=m.call(t),e?t[v]=r:delete t[v],n}:function(t){return m.call(t)},j=Number,h=j.prototype.toString,S=_();function w(t){return"object"==typeof t&&(t instanceof j||(S?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function O(t){return b(t)||w(t)}function P(t){return t!=t}function T(t){return b(t)&&P(t)}function E(t){return w(t)&&P(t.valueOf())}function N(t){return T(t)||E(t)}a(O,"isPrimitive",b),a(O,"isObject",w),a(N,"isPrimitive",T),a(N,"isObject",E);var x=y(N.isPrimitive),A=y(N.isObject),V=y(N);return a(V,"primitives",x),a(V,"objects",A),V},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isNaNArray=e();
//# sourceMappingURL=browser.js.map
