(()=>{var n={756:(n,t,e)=>{"use strict";e.d(t,{Z:()=>A});var r=e(537),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n\nmain {\n  padding-bottom: 30px;\n}\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #FF8400;\n  padding: 10px;\n  width: 100%;\n  min-height: 50px;\n  max-height: 60px;\n  position: absolute;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  margin-left: 2vh;\n}\n\n#logo {\n  min-width: 25px;\n  max-width: 50px;\n  margin-right: 1em;\n}\n\n#brand {\n  color: #4F200D;\n  font-weight: bold;\n  font-size: 2em;\n}\n\nnav ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnav ul > li {\n  list-style-type: none;\n  padding: 15px;\n  font-size: 1.5em;\n}\n\nnav ul > li > a {\n  color: #F6F1E9;\n  text-decoration: none;\n}\n\nnav ul > li > a:hover {\n  color: #4F200D;\n  transition: all .4s ease-in-out;\n}\n\n.menu a {\n  padding: 15px;\n  min-width: 44px;\n}\n\n.menu {\n  min-width: 44px;\n}\n\n\n.hamburger-menu {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n}\n\n.bar {\n  display: block;\n  width: 44px;\n  height: 5px;\n  background-color: #F6F1E9;\n  margin: 4px 0;\n  border-radius: 2px;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  margin-right: 2vh ;\n}\n\n.hero {\n  width: 100%;\n  overflow: hidden;\n  max-height:100vh;\n  \n}\n\n.hero img {\n  width: 100%;\n  display: block;\n}\n\n.hero img {\n  width: 100%;\n  display: block;\n}\n\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2vh;\n}\n\n.header {\n  text-align: center;\n}\n\n.restaurants-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.restaurant-item {\n  width: calc(33.33% - 10px); \n  padding: 10px;\n  border: 1px solid #ccc;\n  background-color: #f9f9f9;\n  margin-bottom: 20px; \n  box-sizing: border-box; \n  min-width: 44px; \n  min-height: 44px; \n}\n\n.restaurant-name {\n  margin-top: 10px;\n  font-size: 1.5em;\n}\n\n.description-container {\n  display: flex;\n  flex-direction: column;\n}\n.description {\n  margin-bottom: 10px;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n\n.read-more-text {\n  display: none;\n}\n\n.read-more-button {\n  color: blue;\n  cursor: pointer;\n}\n\n.read-more-text--show {\n  display: inline;\n}\n\n.icon {\n  font-size: px;\n  color: gold;\n}\n\n.info {\n  margin-bottom: 5px;\n  font-size: 15px;\n  \n}\n\n.review-count {\n  font-size: 10px; \n  color: rgba(0, 0, 0, 0.5); \n  font-weight: lighter;\n}\n\n\n.restaurant-image {\n  width: 100%;\n  max-height: 150px;\n  display: block;\n  margin: 0 auto;\n  padding-bottom: 5px;\n}\n\n\nfooter {\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  background-color: #FF8400;\n  padding: 10px;\n  width: 100%;\n  min-height: 45px;\n  max-height: 60px;\n}\n.skip-link {\n  position: absolute;\n  top: -100px;\n  left: 0;\n  background-color: red;\n  color: #F6F1E9;\n  padding: 3px;\n  z-index: 100;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n@media (min-width: 1200px) {\n  .hero img {\n    min-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .hamburger-menu {\n    display: block;\n  }\n  \n\n  .hamburger-menu.active .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n  \n  .hamburger-menu.active .bar:nth-child(2) {\n    opacity: 0;\n  }\n  \n  .hamburger-menu.active .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n  \n  .menu {\n    position: fixed;\n    margin-top: 13px;\n    right: -200%;\n    gap: 0;\n    flex-direction: column;\n    background-color: #FF8400;\n    width: 100%;\n    text-align: center;\n    transition: all 0.2s ease-in-out;\n  }\n\n  .menu.active{\n    right: 0;\n    transform: translateX(0%);\n  }\n\n  .restaurant-item {\n    width: calc(50% - 10px);\n    min-width: auto; \n    min-height: auto;\n  }\n\n}\n\n\n@media screen and (max-width: 576px) {\n\n  .restaurant-item {\n    width: calc(100% - 10px);\n  }\n}\n\n.restaurant-image {\n  max-height: 300px;\n}\n\n@media screen and (max-width: 400px) {\n  #brand {\n    display: none;\n  }\n\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n\nmain {\n  padding-bottom: 30px;\n}\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #FF8400;\n  padding: 10px;\n  width: 100%;\n  min-height: 50px;\n  max-height: 60px;\n  position: absolute;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  margin-left: 2vh;\n}\n\n#logo {\n  min-width: 25px;\n  max-width: 50px;\n  margin-right: 1em;\n}\n\n#brand {\n  color: #4F200D;\n  font-weight: bold;\n  font-size: 2em;\n}\n\nnav ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnav ul > li {\n  list-style-type: none;\n  padding: 15px;\n  font-size: 1.5em;\n}\n\nnav ul > li > a {\n  color: #F6F1E9;\n  text-decoration: none;\n}\n\nnav ul > li > a:hover {\n  color: #4F200D;\n  transition: all .4s ease-in-out;\n}\n\n.menu a {\n  padding: 15px;\n  min-width: 44px;\n}\n\n.menu {\n  min-width: 44px;\n}\n\n\n.hamburger-menu {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n}\n\n.bar {\n  display: block;\n  width: 44px;\n  height: 5px;\n  background-color: #F6F1E9;\n  margin: 4px 0;\n  border-radius: 2px;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  margin-right: 2vh ;\n}\n\n.hero {\n  width: 100%;\n  overflow: hidden;\n  max-height:100vh;\n  \n}\n\n.hero img {\n  width: 100%;\n  display: block;\n}\n\n.hero img {\n  width: 100%;\n  display: block;\n}\n\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2vh;\n}\n\n.header {\n  text-align: center;\n}\n\n.restaurants-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.restaurant-item {\n  width: calc(33.33% - 10px); \n  padding: 10px;\n  border: 1px solid #ccc;\n  background-color: #f9f9f9;\n  margin-bottom: 20px; \n  box-sizing: border-box; \n  min-width: 44px; \n  min-height: 44px; \n}\n\n.restaurant-name {\n  margin-top: 10px;\n  font-size: 1.5em;\n}\n\n.description-container {\n  display: flex;\n  flex-direction: column;\n}\n.description {\n  margin-bottom: 10px;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n\n.read-more-text {\n  display: none;\n}\n\n.read-more-button {\n  color: blue;\n  cursor: pointer;\n}\n\n.read-more-text--show {\n  display: inline;\n}\n\n.icon {\n  font-size: px;\n  color: gold;\n}\n\n.info {\n  margin-bottom: 5px;\n  font-size: 15px;\n  \n}\n\n.review-count {\n  font-size: 10px; \n  color: rgba(0, 0, 0, 0.5); \n  font-weight: lighter;\n}\n\n\n.restaurant-image {\n  width: 100%;\n  max-height: 150px;\n  display: block;\n  margin: 0 auto;\n  padding-bottom: 5px;\n}\n\n\nfooter {\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  background-color: #FF8400;\n  padding: 10px;\n  width: 100%;\n  min-height: 45px;\n  max-height: 60px;\n}\n.skip-link {\n  position: absolute;\n  top: -100px;\n  left: 0;\n  background-color: red;\n  color: #F6F1E9;\n  padding: 3px;\n  z-index: 100;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n@media (min-width: 1200px) {\n  .hero img {\n    min-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .hamburger-menu {\n    display: block;\n  }\n  \n\n  .hamburger-menu.active .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n  \n  .hamburger-menu.active .bar:nth-child(2) {\n    opacity: 0;\n  }\n  \n  .hamburger-menu.active .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n  \n  .menu {\n    position: fixed;\n    margin-top: 13px;\n    right: -200%;\n    gap: 0;\n    flex-direction: column;\n    background-color: #FF8400;\n    width: 100%;\n    text-align: center;\n    transition: all 0.2s ease-in-out;\n  }\n\n  .menu.active{\n    right: 0;\n    transform: translateX(0%);\n  }\n\n  .restaurant-item {\n    width: calc(50% - 10px);\n    min-width: auto; \n    min-height: auto;\n  }\n\n}\n\n\n@media screen and (max-width: 576px) {\n\n  .restaurant-item {\n    width: calc(100% - 10px);\n  }\n}\n\n.restaurant-image {\n  max-height: 300px;\n}\n\n@media screen and (max-width: 400px) {\n  #brand {\n    display: none;\n  }\n\n}"],sourceRoot:""}]);const A=a},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},666:n=>{var t=function(n){"use strict";var t,e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",A=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function l(n,t,e,r){var i=t&&t.prototype instanceof E?t:E,a=Object.create(i.prototype),A=new I(r||[]);return o(a,"_invoke",{value:k(n,e,A)}),a}function u(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",m={};function E(){}function g(){}function C(){}var x={};s(x,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(z([])));v&&v!==e&&r.call(v,a)&&(x=v);var B=C.prototype=E.prototype=Object.create(x);function b(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function w(n,t){function e(o,i,a,A){var c=u(n[o],n,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(n){e("next",n,a,A)}),(function(n){e("throw",n,a,A)})):t.resolve(l).then((function(n){s.value=n,a(s)}),(function(n){return e("throw",n,a,A)}))}A(c.arg)}var i;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return i=i?i.then(o,o):o()}})}function k(n,t,e){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var A=L(a,e);if(A){if(A===m)continue;return A}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===d)throw r=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=u(n,t,e);if("normal"===c.type){if(r=e.done?f:p,c.arg===m)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=f,e.method="throw",e.arg=c.arg)}}}function L(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,L(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=u(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function F(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function j(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function I(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(F,this),this.reset(!0)}function z(n){if(n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return g.prototype=C,o(B,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:g,configurable:!0}),g.displayName=s(C,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,C):(n.__proto__=C,s(n,c,"GeneratorFunction")),n.prototype=Object.create(B),n},n.awrap=function(n){return{__await:n}},b(w.prototype),s(w.prototype,A,(function(){return this})),n.AsyncIterator=w,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new w(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(B),s(B,c,"Generator"),s(B,a,(function(){return this})),s(B,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=z,I.prototype={constructor:I,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return A.type="throw",A.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],A=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),m},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),j(e),m}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:z(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}(n.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var c=n[A],s=r.base?c[0]+r.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var d=e(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=A,t.splice(A,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=e(i[a]);t[A].references--}for(var c=r(n,o),s=0;s<i.length;s++){var l=e(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";e(666);var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),A=e(565),c=e.n(A),s=e(216),l=e.n(s),u=e(589),d=e.n(u),p=e(756),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu"),e=document.querySelectorAll(".menu li a"),r=document.querySelectorAll(".restaurant-item"),o=-1,i=-1,a=!1,A=function(){t.classList.toggle("active"),n.classList.toggle("active"),(a=!a)&&e.length>0&&e[o=0].focus()},c=function(){A()},s=function(){a&&(t.classList.remove("active"),n.classList.remove("active"),a=!1)},l=function(n){a&&(n.preventDefault(),"ArrowUp"===n.key&&o>0?(e[o-1].focus(),o-=1):"ArrowDown"===n.key&&o<e.length-1?(e[o+1].focus(),o+=1):"Tab"===n.key&&(n.shiftKey?o>0&&(e[o-1].focus(),o-=1):o<e.length-1&&(e[o+1].focus(),o+=1)))},u=function(n){a&&(n.preventDefault(),"ArrowUp"===n.key&&i>0?(r[i-1].focus(),i-=1):"ArrowDown"===n.key&&i<r.length-1&&(r[i+1].focus(),i+=1))};function d(n){var t=n.closest(".description").querySelector(".read-more-text");t.classList.toggle("read-more-text--show"),t.classList.contains("read-more-text--show")?n.textContent="Read Less...":n.textContent="Read More..."}n.addEventListener("click",c),n.addEventListener("keydown",(function(n){"Enter"!==n.key&&" "!==n.key||(c(),n.preventDefault())})),e.forEach((function(n,t){n.addEventListener("click",s),n.addEventListener("click",(function(){s()})),n.addEventListener("keydown",l)})),r.forEach((function(n,t){n.addEventListener("keydown",u),n.addEventListener("click",(function(){i=t}))})),document.addEventListener("keydown",(function(n){a&&"Escape"===n.key&&A()})),document.querySelectorAll(".description-container").forEach((function(n){n.addEventListener("click",(function(n){var t=n.target;t.classList.contains("read-more-button")&&d(t)})),n.addEventListener("keydown",(function(n){var t=n.target;!t.classList.contains("read-more-button")||"Enter"!==n.key&&" "!==n.key||(d(t),n.preventDefault())}))}))}))})()})();
//# sourceMappingURL=app.bundle.js.map