!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};!function(){var t=window.wp.domReady,r=e.n(t);function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var i=function e(t,r){function i(e,i,o){if("undefined"!=typeof document){"number"==typeof(o=n({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var d="";for(var a in o)o[a]&&(d+="; "+a,!0!==o[a]&&(d+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+d}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},i=0;i<r.length;i++){var o=r[i].split("="),d=o.slice(1).join("=");try{var a=decodeURIComponent(o[0]);if(n[a]=t.read(d,a),e===a)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){i(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),o=i;function d(e,t,r){if(r){const t=null===(n=function(){const e=o.get("_parsely_visitor");if(!e)return;const t=unescape(e);try{return JSON.parse(t)}catch(e){return}}())||void 0===n?void 0:n.id;if(t)return`${e}&uuid=${encodeURIComponent(t)}`}var n;return`${e}&url=${encodeURIComponent(t)}`}function a(e){const t=e.getAttribute("data-parsely-widget-api-url"),r=e.getAttribute("data-parsely-widget-permalink"),n="true"===e.getAttribute("data-parsely-widget-personalized");return{outerDiv:e,url:d(t,r,n),displayAuthor:"true"===e.getAttribute("data-parsely-widget-display-author"),displayDirection:e.getAttribute("data-parsely-widget-display-direction"),imgDisplay:e.getAttribute("data-parsely-widget-img-display"),widgetId:e.getAttribute("data-parsely-widget-id")}}r()((()=>{const e=document.querySelectorAll(".parsely-recommended-widget"),t=Array.from(e).map(a).reduce(((e,t)=>(e[t.url]||(e[t.url]=[]),e[t.url].push(t),e)),{});Object.entries(t).forEach((e=>{let[t,r]=e;fetch(t).then((e=>e.json())).then((e=>{r.forEach((t=>{!function(e,t){let{outerDiv:r,displayAuthor:n,displayDirection:i,imgDisplay:o,widgetId:d}=t;"none"!==o&&r.classList.add("display-thumbnail"),i&&r.classList.add("list-"+i);const a=document.createElement("ul");a.className="parsely-recommended-widget",r.appendChild(a);for(const[t,r]of Object.entries(e.data)){const e=document.createElement("li");e.className="parsely-recommended-widget-entry",e.setAttribute("id","parsely-recommended-widget-item"+t);const i=document.createElement("div");i.className="parsely-text-wrapper";const c=document.createElement("img");"parsely_thumb"===o?c.setAttribute("src",r.thumb_url_medium):"original"===o&&c.setAttribute("src",r.image_url),e.appendChild(c);const u=`?itm_campaign=${d}`,s="&itmMedium=site_widget",l="&itmSource=parsely_recommended_widget",p="&itm_content=widget_item-"+t,m=r.url+u+s+l+p,f=document.createElement("div");f.className="parsely-recommended-widget-title";const g=document.createElement("a");if(g.setAttribute("href",m),g.textContent=r.title,f.appendChild(g),i.appendChild(f),n){const e=document.createElement("div");e.className="parsely-recommended-widget-author",e.textContent=r.author,i.appendChild(e)}e.appendChild(i),a.appendChild(e)}r.appendChild(a),r.closest(".widget.Recommended_Widget").classList.remove("parsely-recommended-widget-hidden")}(e,t)}))}))}))}))}()}();