"use strict";(self.webpackChunkacat_code=self.webpackChunkacat_code||[]).push([[7299],{67299:function(r,n,t){function u(r,n){return r.skipToEnd(),n.cur=d,"error"}function e(r,n){return r.match(/^HTTP\/\d\.\d/)?(n.cur=c,"keyword"):r.match(/^[A-Z]+/)&&/[ \t]/.test(r.peek())?(n.cur=a,"keyword"):u(r,n)}function c(r,n){var t=r.match(/^\d+/);if(!t)return u(r,n);n.cur=o;var e=Number(t[0]);return e>=100&&e<400?"atom":"error"}function o(r,n){return r.skipToEnd(),n.cur=d,null}function a(r,n){return r.eatWhile(/\S/),n.cur=i,"string.special"}function i(r,n){return r.match(/^HTTP\/\d\.\d$/)?(n.cur=d,"keyword"):u(r,n)}function d(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function f(r){return r.skipToEnd(),null}t.r(n),t.d(n,{http:function(){return s}});var s={token:function(r,n){var t=n.cur;return t!=d&&t!=f&&r.eatSpace()?null:t(r,n)},blankLine:function(r){r.cur=f},startState:function(){return{cur:e}}}}}]);
//# sourceMappingURL=7299.f625a35b.chunk.js.map