(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function S(){}function oe(t){return t()}function X(){return Object.create(null)}function B(t){t.forEach(oe)}function se(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ae(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function L(){return k(" ")}function ue(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function de(t){return Array.from(t.childNodes)}function I(t,e){e=""+e,t.data!==e&&(t.data=e)}let W;function T(t){W=t}const C=[],Y=[];let j=[];const Z=[],ge=Promise.resolve();let U=!1;function he(){U||(U=!0,ge.then(ce))}function V(t){j.push(t)}const Q=new Set;let H=0;function ce(){if(H!==0)return;const t=W;do{try{for(;H<C.length;){const e=C[H];H++,T(e),pe(e.$$)}}catch(e){throw C.length=0,H=0,e}for(T(null),C.length=0,H=0;Y.length;)Y.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];Q.has(n)||(Q.add(n),n())}j.length=0}while(C.length);for(;Z.length;)Z.pop()();U=!1,Q.clear(),T(t)}function pe(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function me(t){const e=[],n=[];j.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),j=e}const q=new Set;let O;function R(){O={r:0,c:[],p:O}}function z(){O.r||B(O.c),O=O.p}function b(t,e){t&&t.i&&(q.delete(t),t.i(e))}function A(t,e,n,l){if(t&&t.o){if(q.has(t))return;q.add(t),O.c.push(()=>{q.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function M(t){t&&t.c()}function F(t,e,n,l){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),l||V(()=>{const i=t.$$.on_mount.map(oe).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...i):B(i),t.$$.on_mount=[]}),o.forEach(V)}function G(t,e){const n=t.$$;n.fragment!==null&&(me(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(t,e){t.$$.dirty[0]===-1&&(C.push(t),he(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,l,r,o,i,s=[-1]){const c=W;T(t);const u=t.$$={fragment:null,ctx:[],props:o,update:S,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let v=!1;if(u.ctx=n?n(t,e.props||{},(a,g,...d)=>{const _=d.length?d[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),v&&_e(t,a)),g}):[],u.update(),v=!0,B(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const a=de(e.target);u.fragment&&u.fragment.l(a),a.forEach(E)}else u.fragment&&u.fragment.c();e.intro&&b(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),ce()}T(c)}class J{$destroy(){G(this,1),this.$destroy=S}$on(e,n){if(!se(n))return S;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function be(t){let e,n,l,r,o;return{c(){e=p("a"),n=k(t[0]),l=k(", "),r=k(t[1]),m(e,"href",o="https://www.google.com/maps/place/"+t[0]+","+t[1]),m(e,"target","_blank")},m(i,s){N(i,e,s),f(e,n),f(e,l),f(e,r)},p(i,[s]){s&1&&I(n,i[0]),s&2&&I(r,i[1]),s&3&&o!==(o="https://www.google.com/maps/place/"+i[0]+","+i[1])&&m(e,"href",o)},i:S,o:S,d(i){i&&E(e)}}}function ve(t,e,n){let{latitude:l}=e,{longitude:r}=e;return t.$$set=o=>{"latitude"in o&&n(0,l=o.latitude),"longitude"in o&&n(1,r=o.longitude)},[l,r]}class fe extends J{constructor(e){super(),D(this,e,ve,be,K,{latitude:0,longitude:1})}}function x(t){let e,n,l,r,o,i=t[3]&&ee(t);return{c(){e=p("div"),n=p("span"),l=k(t[0]),r=L(),i&&i.c(),m(e,"class","result svelte-6rhl1m")},m(s,c){N(s,e,c),f(e,n),f(n,l),f(e,r),i&&i.m(e,null),o=!0},p(s,c){(!o||c&1)&&I(l,s[0]),s[3]?i?(i.p(s,c),c&8&&b(i,1)):(i=ee(s),i.c(),b(i,1),i.m(e,null)):i&&(R(),A(i,1,1,()=>{i=null}),z())},i(s){o||(b(i),o=!0)},o(s){A(i),o=!1},d(s){s&&E(e),i&&i.d()}}}function ee(t){let e,n;return e=new fe({props:{latitude:t[3].latitude,longitude:t[3].longitude}}),{c(){M(e.$$.fragment)},m(l,r){F(e,l,r),n=!0},p(l,r){const o={};r&8&&(o.latitude=l[3].latitude),r&8&&(o.longitude=l[3].longitude),e.$set(o)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function te(t){let e,n;return{c(){e=p("div"),n=k(t[1]),m(e,"class","error svelte-6rhl1m")},m(l,r){N(l,e,r),f(e,n)},p(l,r){r&2&&I(n,l[1])},d(l){l&&E(e)}}}function ye(t){let e,n,l,r,o,i,s,c,u,v,a=t[0]&&x(t),g=t[1]&&te(t);return{c(){e=p("div"),n=p("ul"),n.innerHTML=`<li>API <a href="https://ipinfo.io/loc" target="_blank" rel="noopener noreferrer">https://ipinfo.io/loc</a> is rate limited</li> 
    <li>Ad blockers may prevent this call</li>`,l=L(),r=p("button"),o=k("Get IP location"),i=L(),a&&a.c(),s=L(),g&&g.c(),m(n,"class","warning svelte-6rhl1m"),r.disabled=t[2],m(r,"class","ip-button svelte-6rhl1m"),m(e,"class","ip-location svelte-6rhl1m")},m(d,_){N(d,e,_),f(e,n),f(e,l),f(e,r),f(r,o),f(e,i),a&&a.m(e,null),f(e,s),g&&g.m(e,null),c=!0,u||(v=ue(r,"click",t[4]),u=!0)},p(d,[_]){(!c||_&4)&&(r.disabled=d[2]),d[0]?a?(a.p(d,_),_&1&&b(a,1)):(a=x(d),a.c(),b(a,1),a.m(e,s)):a&&(R(),A(a,1,1,()=>{a=null}),z()),d[1]?g?g.p(d,_):(g=te(d),g.c(),g.m(e,null)):g&&(g.d(1),g=null)},i(d){c||(b(a),c=!0)},o(d){A(a),c=!1},d(d){d&&E(e),a&&a.d(),g&&g.d(),u=!1,v()}}}function we(t,e,n){let l=null,r=null,o=!1,i=null;const s=()=>{n(0,l=null),n(1,r=null),n(3,i=null),n(2,o=!0),fetch("https://ipinfo.io/loc",{method:"GET"}).then(u=>{c(u)}).catch(u=>{u="IP location failed: "+u.message,console.error(u)}).finally(()=>{n(2,o=!1)})},c=async u=>{if(u.ok){n(0,l="IP location successfuly retrieved"),console.log(l,u);const v=await u.text(),[a,g]=v.split(",");n(3,i={latitude:parseFloat(a),longitude:parseFloat(g)})}else n(1,r="Fetch IP location failed"),console.error(r,u)};return[l,r,o,i,s]}class $e extends J{constructor(e){super(),D(this,e,we,ye,K,{})}}function ne(t){let e,n,l,r,o,i=t[4]&&le(t);return{c(){e=p("div"),n=p("span"),l=k(t[1]),r=L(),i&&i.c(),m(e,"class","result svelte-1ickd2s")},m(s,c){N(s,e,c),f(e,n),f(n,l),f(e,r),i&&i.m(e,null),o=!0},p(s,c){(!o||c&2)&&I(l,s[1]),s[4]?i?(i.p(s,c),c&16&&b(i,1)):(i=le(s),i.c(),b(i,1),i.m(e,null)):i&&(R(),A(i,1,1,()=>{i=null}),z())},i(s){o||(b(i),o=!0)},o(s){A(i),o=!1},d(s){s&&E(e),i&&i.d()}}}function le(t){let e,n;return e=new fe({props:{latitude:t[4].latitude,longitude:t[4].longitude}}),{c(){M(e.$$.fragment)},m(l,r){F(e,l,r),n=!0},p(l,r){const o={};r&16&&(o.latitude=l[4].latitude),r&16&&(o.longitude=l[4].longitude),e.$set(o)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function re(t){let e,n;return{c(){e=p("div"),n=k(t[2]),m(e,"class","error svelte-1ickd2s")},m(l,r){N(l,e,r),f(e,n)},p(l,r){r&4&&I(n,l[2])},d(l){l&&E(e)}}}function ke(t){let e,n,l,r,o,i,s,c=t[0]?"with high accuracy":"without high accuracy",u,v,a,g,d,_,y,h=t[1]&&ne(t),w=t[2]&&re(t);return{c(){e=p("div"),n=p("p"),l=L(),r=p("button"),o=k("Get navigator geolocation "),i=p("br"),s=k(" ("),u=k(c),v=k(")"),a=L(),h&&h.c(),g=L(),w&&w.c(),m(n,"class","warning svelte-1ickd2s"),r.disabled=t[3],m(r,"class","navigator-button svelte-1ickd2s"),m(e,"class","navigator-location svelte-1ickd2s")},m($,P){N($,e,P),f(e,n),f(e,l),f(e,r),f(r,o),f(r,i),f(r,s),f(r,u),f(r,v),f(e,a),h&&h.m(e,null),f(e,g),w&&w.m(e,null),d=!0,_||(y=ue(r,"click",t[5]),_=!0)},p($,[P]){(!d||P&1)&&c!==(c=$[0]?"with high accuracy":"without high accuracy")&&I(u,c),(!d||P&8)&&(r.disabled=$[3]),$[1]?h?(h.p($,P),P&2&&b(h,1)):(h=ne($),h.c(),b(h,1),h.m(e,g)):h&&(R(),A(h,1,1,()=>{h=null}),z()),$[2]?w?w.p($,P):(w=re($),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i($){d||(b(h),d=!0)},o($){A(h),d=!1},d($){$&&E(e),h&&h.d(),w&&w.d(),_=!1,y()}}}function Ae(t,e,n){let{enableHighAccuracy:l=!1}=e,r=null,o=null,i=!1,s=null;const c=()=>{n(1,r=null),n(2,o=null),n(4,s=null),n(3,i=!0),navigator.geolocation?navigator.geolocation.getCurrentPosition(u=>{n(4,s={latitude:u.coords.latitude,longitude:u.coords.longitude}),n(1,r="Navigator geolocation successfuly retrieved, with enableHighAccuracy="+l),console.log(r,u),n(3,i=!1)},u=>{n(2,o="Navigator geolocation failed: "+u.message),console.error(o),n(3,i=!1)},{enableHighAccuracy:l,maximumAge:0}):(n(2,o="Geolocation is not supported by this browser."),console.error(o),n(3,i=!1))};return t.$$set=u=>{"enableHighAccuracy"in u&&n(0,l=u.enableHighAccuracy)},[l,r,o,i,s,c]}class ie extends J{constructor(e){super(),D(this,e,Ae,ke,K,{enableHighAccuracy:0})}}function Le(t){let e,n,l,r,o,i,s,c,u,v,a,g,d,_;return l=new ie({props:{enableHighAccuracy:!0}}),c=new ie({props:{enableHighAccuracy:!1}}),d=new $e({}),{c(){e=p("main"),n=p("div"),M(l.$$.fragment),r=L(),o=p("hr"),i=L(),s=p("div"),M(c.$$.fragment),u=L(),v=p("hr"),a=L(),g=p("div"),M(d.$$.fragment),m(n,"class","section svelte-ow71ha"),m(o,"class","divider svelte-ow71ha"),m(s,"class","section svelte-ow71ha"),m(v,"class","divider svelte-ow71ha"),m(g,"class","section svelte-ow71ha"),m(e,"class","svelte-ow71ha")},m(y,h){N(y,e,h),f(e,n),F(l,n,null),f(e,r),f(e,o),f(e,i),f(e,s),F(c,s,null),f(e,u),f(e,v),f(e,a),f(e,g),F(d,g,null),_=!0},p:S,i(y){_||(b(l.$$.fragment,y),b(c.$$.fragment,y),b(d.$$.fragment,y),_=!0)},o(y){A(l.$$.fragment,y),A(c.$$.fragment,y),A(d.$$.fragment,y),_=!1},d(y){y&&E(e),G(l),G(c),G(d)}}}class Ee extends J{constructor(e){super(),D(this,e,null,Le,K,{})}}new Ee({target:document.getElementById("app")});