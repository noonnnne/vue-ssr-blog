webpackJsonp([0],{106:function(e,n,t){var r=t(108);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=t(110).default;s("4584399a",r,!0,{})},107:function(e,n,t){"use strict";var r=t(106),s=t.n(r);s.a},108:function(e,n,t){n=e.exports=t(109)(!0),n.push([e.i,".my-ssr{color:#666;font-size:16px}","",{version:3,sources:["/Users/yangming/Documents/github/vue-ssr-blog/src/views/Index.vue"],names:[],mappings:"AAyCA,QACI,WAAW,AACX,cAAe,CAClB",file:"Index.vue?vue&type=style&index=0&lang=scss",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.my-ssr {\n    color: #666;\n    font-size: 16px;\n}\n"],sourceRoot:""}])},109:function(e,n){function t(e,n){var t=e[1]||"",s=e[3];if(!s)return t;if(n&&"function"==typeof btoa){var o=r(s);return[t].concat(s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"})).concat([o]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(r[o]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},110:function(e,n,t){"use strict";function r(e,n){for(var t=[],r={},s=0;s<n.length;s++){var o=n[s],a=o[0],i=o[1],u=o[2],c=o[3],l={id:e+":"+s,css:i,media:u,sourceMap:c};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function s(e,n,t,s){h=t,g=s||{};var a=r(e,n);return o(a),function(n){for(var t=[],s=0;s<a.length;s++){var i=a[s],u=f[i.id];u.refs--,t.push(u)}n?(a=r(e,n),o(a)):a=[];for(var s=0;s<t.length;s++){var u=t[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}}function o(e){for(var n=0;n<e.length;n++){var t=e[n],r=f[t.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](t.parts[s]);for(;s<t.parts.length;s++)r.parts.push(i(t.parts[s]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var o=[],s=0;s<t.parts.length;s++)o.push(i(t.parts[s]));f[t.id]={id:t.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var n,t,r=document.querySelector("style["+y+'~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(b){var s=v++;r=p||(p=a()),n=u.bind(null,r,s,!1),t=u.bind(null,r,s,!0)}else r=a(),n=c.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function u(e,n,t,r){var s=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=C(n,s);else{var o=document.createTextNode(s),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function c(e,n){var t=n.css,r=n.media,s=n.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(y,n.id),s&&(t+="\n/*# sourceURL="+s.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,v=0,h=!1,m=function(){},g=null,y="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),C=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},111:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"my-ssr"},[t("p",[e._v("this is from client "+e._s(e.clientName))]),t("p",[e._v("this is index.vue")]),t("div",[e._v("my name is "+e._s(e.syncName))]),t("user")],1)},s=[],o=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v(e._s(e.$store.state.user))])},a=[],i={asyncData:function(e){var n=e.store,t=e.route;return n.dispatch("fetchUser",t.params.id)}},u=i,c=t(46),l=Object(c.a)(u,o,a,!1,null,null,null),f=l.exports,d={data:function(){return{clientName:"Mac"}},components:{User:f},asyncData:function(e){var n=e.store,t=e.route;return n.dispatch("fetchItem",t.params.id)},created:function(){},computed:{syncName:function(){return this.$store.state.items[this.$route.params.id]}}},p=d,v=(t(107),Object(c.a)(p,r,s,!1,null,null,null));n.default=v.exports}});