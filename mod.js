// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||a.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var f=Math.floor;function p(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,f(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function y(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!p(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}function b(t){return"number"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(t){var e,r,n,o,i;if(null==t)return _.call(t);r=t[g],i=g,e=null!=(o=t)&&m.call(o,i);try{t[g]=void 0}catch(e){return _.call(t)}return n=_.call(t),e?t[g]=r:delete t[g],n}:function(t){return _.call(t)},d=Number,h=d.prototype.toString;var S=s();function w(t){return"object"==typeof t&&(t instanceof d||(S?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function O(t){return b(t)||w(t)}function P(t){return t!=t}function T(t){return b(t)&&P(t)}function E(t){return w(t)&&P(t.valueOf())}function V(t){return T(t)||E(t)}c(O,"isPrimitive",b),c(O,"isObject",w),c(V,"isPrimitive",T),c(V,"isObject",E);var k=y(V.isPrimitive),x=y(V.isObject),A=y(V);c(A,"primitives",k),c(A,"objects",x);export{A as default,x as objects,k as primitives};
//# sourceMappingURL=mod.js.map