(function(e){function t(t){for(var n,c,s=t[0],i=t[1],a=t[2],f=0,p=[];f<s.length;f++)c=s[f],o[c]&&p.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var l=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2856:function(e,t,r){},"291c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[e._v("\n  "+e._s(e.burgers)+"\n")])},s=[],i={name:"HelloWorld",computed:{burgers:function(){return this.$store.state.burgers}},mounted:function(){0===this.$store.state.burgers.length&&this.$store.dispatch("getBurgers")}},a=i,l=(r("a512"),r("2877")),f=Object(l["a"])(a,c,s,!1,null,"c98bbc34",null);f.options.__file="HelloWorld.vue";var p=f.exports,d={name:"app",components:{HelloWorld:p}},g=d,b=(r("5c0b"),Object(l["a"])(g,o,u,!1,null,null,null));b.options.__file="App.vue";var v=b.exports,h=(r("96cf"),r("3040")),m=r("2f62"),w=r("bc3a"),y=r.n(w),_=y()({baseURL:"//locahost:5000/api/",timeout:3e3});n["a"].use(m["a"]);var j=new m["a"].Store({state:{burgers:[]},mutations:{setBurgers:function(e,t){e.burgers=t}},actions:{getBurgers:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,_.get("burgers");case 4:n=e.sent,o=n.data,r("setBurgers",o),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log("[ERROR]",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()}}),O=r("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({store:j,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("2856"),o=r.n(n);o.a},a512:function(e,t,r){"use strict";var n=r("291c"),o=r.n(n);o.a}});
//# sourceMappingURL=app-legacy.939b1a8b.js.map