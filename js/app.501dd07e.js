(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/treasurehunt/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("section",[e._v(" Treasure Public Key:"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pubKey,expression:"pubKey"}],attrs:{id:"taPubKey",name:"taPubKey",placeholder:"Targeted public key"},domProps:{value:e.pubKey},on:{input:function(t){t.target.composing||(e.pubKey=t.target.value)}}}),n("br")]),n("section",[e._v(" Clues:"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.hints,expression:"hints"}],attrs:{id:"taHints",name:"taHints",rows:"5",placeholder:"Each line represents part of the key (clue) extracted from the video - (order is important, should be in hex, repetition is fine, no spaces)"},domProps:{value:e.hints},on:{input:function(t){t.target.composing||(e.hints=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.find(!0)}}},[e._v("Find Key")])]),n("section",[e._v(" Private Keys/Guesses:"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.guesses,expression:"guesses"}],attrs:{id:"taGuesses",name:"taGuesses",rows:"5",placeholder:"Each line represents a key in hex format (e.g. 8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f)"},domProps:{value:e.guesses},on:{input:function(t){t.target.composing||(e.guesses=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.find(!1)}}},[e._v("Find Key")])]),n("section",[e._v(" Result:"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result,expression:"result"}],attrs:{id:"taResult",name:"taResult",rows:"5",readonly:""},domProps:{value:e.result},on:{input:function(t){t.target.composing||(e.result=t.target.value)}}})]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{attrs:{id:"logo"}},[r("img",{attrs:{src:n("cf05")}}),r("br"),r("strong",[e._v("UNVEST Treasure Hunt - Community Collaboration")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v(" This tool was made to help Unvest community to find the treasure key."),n("br"),n("br"),e._v(" If you found that this tool did help, do not hesitate to show some love here :)"),n("br"),n("br"),e._v(" 0xEa89908348D2D9E3A6e7BE531d5FaB8F360d235B "),n("br"),n("br")])])}],a=(n("ac1f"),n("1276"),n("7d05"),n("2909")),s=n("b85c"),u=(n("3ca3"),n("ddb0"),n("99af"),n("d81d"),n("4e82"),n("a15b"),n("498a"),n("96cf"),n("962c")),c={getPubKey:function(e){return console.log(e),u.publicKey.toAddress(u.publicKeyByPrivateKey(e))},range:regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t<=n)){e.next=6;break}return e.next=3,t;case 3:++t,e.next=0;break;case 6:case"end":return e.stop()}}),e)})),last:function(e){return e[e.length-1]},numericCombinations:regeneratorRuntime.mark((function e(t,n){var r,o,i,a,u,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=c.length>2&&void 0!==c[2]?c[2]:[],o=r.length,o!==n){e.next=6;break}return e.next=5,r;case 5:return e.abrupt("return");case 6:i=Object(s["a"])(this.range(o?this.last(r)+1:0,t-n+o)),e.prev=7,i.s();case 9:if((a=i.n()).done){e.next=14;break}return u=a.value,e.delegateYield(this.numericCombinations(t,n,r.concat(u)),"t0",12);case 12:e.next=9;break;case 14:e.next=19;break;case 16:e.prev=16,e.t1=e["catch"](7),i.e(e.t1);case 19:return e.prev=19,i.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[7,16,19,22]])})),combinations:regeneratorRuntime.mark((function e(t,n){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=Object(s["a"])(this.numericCombinations(t.length,n)),e.prev=1,r.s();case 3:if((o=r.n()).done){e.next=9;break}return i=o.value,e.next=7,i.map((function(e){return t[e]}));case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),r.e(e.t0);case 14:return e.prev=14,r.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])})),findFromHints:function(e,t){var n=64,r=Object(a["a"])(e).sort((function(e,t){return t.length-e.length})),o=Math.floor(n/r[0].length);o=o<1?1:o>e.length?e.length:o;var i=Math.ceil(n/r[e.length-1].length);i=i<o?o:i>e.length?e.length:i,console.log("Shortest hint: "+r[e.length-1]+", Longest hint: "+r[0]),console.log("Min combinations: "+o+", Max combinations: "+i);for(var u=!1,c=o;c<=i&&!u;c++){var l,f=Object(s["a"])(this.combinations(e,c));try{for(f.s();!(l=f.n()).done;){var d=l.value,p=d.join("");if(this.isMatch(p,t))return u=!0,p}}catch(h){f.e(h)}finally{f.f()}}},findFromKeys:function(e,t){var n,r=Object(s["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(this.isMatch(o,t))return o}}catch(i){r.e(i)}finally{r.f()}},isMatch:function(e,t){var n=64;if(!e)return!1;if(e=e.trim(),e.length!=n)return!1;var r=this.getPubKey(e);return r==t&&(console.log("Private key found:",e),!0)}},l=c,f={name:"App",components:{},data:function(){return{pubKey:"0xAB3a4e26A765D321f1Fc45c4E1A2B60391051097",hints:null,guesses:null,result:null}},methods:{find:function(e){this.result="Finding the correct match...";try{var t="";t=!0===e?l.findFromHints(this.hints.split(/\r?\n/),this.pubKey):l.findFromKeys(this.guesses.split(/\r?\n/),this.pubKey),this.result=t?"Key found: "+t:"No match found!",console.log(this.result)}catch(n){this.result="An error occured!\nMake sure your entries are valid hex values, each in a separate line"}}}},d=f,p=n("2877"),h=Object(p["a"])(d,o,i,!1,null,null,null),v=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"7d05":function(e,t,n){},8:function(e,t){},9:function(e,t){},cf05:function(e,t,n){e.exports=n.p+"img/logo.fb357004.png"}});
//# sourceMappingURL=app.501dd07e.js.map