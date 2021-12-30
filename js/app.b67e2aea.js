(()=>{"use strict";var e={5513:(e,t,o)=>{o(5363),o(71);var r=o(8880),n=o(2277),a=o(3673);function s(e,t,o,r,n,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}const i=(0,a.aZ)({name:"App",mounted(){this.$store.commit("example/START_LOADING"),this.$store.dispatch("example/initAllGasStations")}});var l=o(4260);const d=(0,l.Z)(i,[["render",s]]),c=d;var u=o(6071),p=o(7083),h=o(9582);const f=[{path:"/",component:()=>Promise.all([o.e(736),o.e(682)]).then(o.bind(o,4682)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(110)]).then(o.bind(o,4110))},{path:":stationId",component:()=>Promise.all([o.e(736),o.e(255)]).then(o.bind(o,255)),props:!0}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],g=f,v=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t}));async function m(e,t){const r="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:a}=await Promise.resolve().then(o.bind(o,6071)),s="function"===typeof v?await v({store:r}):v;r.$router=s;const i=e(c);return i.use(n.Z,t),{app:i,store:r,storeKey:a,router:s}}var S=o(242);const b={config:{},lang:S.Z},y="";async function w({app:e,router:t,store:o,storeKey:r},n){let a=!1;const s=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},i=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:l,publicPath:y})}catch(d){return d&&d.url?void i(d.url):void console.error("[Quasar] boot error:",d)}!0!==a&&(e.use(t),e.use(o,r),e.mount("#q-app"))}m(r.ri,b).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4112))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,o)}))))},4112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var r=o(7083),n=o(5948);const a={failed:"Action failed",success:"Action was successful"},s={"en-US":a},i=(0,r.xr)((({app:e})=>{const t=(0,n.o)({locale:"en-US",messages:s});e.use(t)}))},6071:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var r={};o.r(r),o.d(r,{gasStationById:()=>h,loading:()=>d,provider:()=>p,search:()=>u,selectedGasStations:()=>c});var n={};o.r(n),o.d(n,{ALL_GAS_STATIONS:()=>g,CHANGE_PROVIDER:()=>v,CHANGE_SEARCH:()=>S,START_LOADING:()=>m});var a={};o.r(a),o.d(a,{changeProvider:()=>A,initAllGasStations:()=>w});var s=o(7083),i=o(3617);function l(){return{allGasStations:[],selectedStations:[],loading:!0,provider:"paz",search:""}}function d(e){return e.loading}function c(e){return e.selectedStations}function u(e){return e.search}function p(e){return e.provider}function h(e){return t=>e.selectedStations.find((e=>e.attributes.oid_delek===parseInt(t)))}var f=o(9087);function g(e,t){e.allGasStations=t,e.selectedStations=t.paz,e.loading=!1,f.gbz.hide()}function v(e,t){"paz"===t?(e.provider="paz",e.selectedStations=null,e.selectedStations=e.allGasStations.paz,e.loading=!1,f.gbz.hide()):"sonol"===t?(e.provider="sonol",e.selectedStations=null,e.selectedStations=e.allGasStations.sonol,e.loading=!1,f.gbz.hide()):"delek"===t?(e.provider="delek",e.selectedStations=null,e.selectedStations=e.allGasStations.delek,e.loading=!1,f.gbz.hide()):"dor"===t?(e.provider="dor",e.selectedStations=null,e.selectedStations=e.allGasStations.dor,e.loading=!1,f.gbz.hide()):(e.provider="other",e.selectedStations=null,e.selectedStations=e.allGasStations.others,e.loading=!1,f.gbz.hide())}function m(e){e.loading=!0,f.gbz.show({message:"טוען תחנות דלק באיזור תל אביב, תחזיקו מעמד...",boxClass:"text-white"})}function S(e,t){e.search=t,e.search?e.selectedStations=e.selectedStations.filter((e=>e.attributes.shem_esek.toLowerCase().includes(t.toLowerCase()))):"paz"===e.provider?(e.provider="paz",e.selectedStations=null,e.selectedStations=e.allGasStations.paz,e.loading=!1,f.gbz.hide()):"sonol"===e.provider?(e.provider="sonol",e.selectedStations=null,e.selectedStations=e.allGasStations.sonol,e.loading=!1,f.gbz.hide()):"delek"===e.provider?(e.provider="delek",e.selectedStations=null,e.selectedStations=e.allGasStations.delek,e.loading=!1,f.gbz.hide()):"dor"===e.provider?(e.provider="dor",e.selectedStations=null,e.selectedStations=e.allGasStations.dor,e.loading=!1,f.gbz.hide()):(e.state.provider="other",e.selectedStations=null,e.selectedStations=e.allGasStations.others,e.loading=!1,f.gbz.hide())}var b=o(52),y=o.n(b);function w({commit:e}){try{y().get("https://gas-stations-api.herokuapp.com/").then((t=>{e("ALL_GAS_STATIONS",t.data)}))}catch(t){this.$q.notify({color:"red-5",progress:!0,textColor:"white",icon:"warning",position:"bottom-left",message:t.message})}}function A({commit:e},t){try{e("CHANGE_PROVIDER",t),e("START_LOADING")}catch(o){this.$q.notify({color:"red-5",progress:!0,textColor:"white",icon:"warning",position:"bottom-left",message:o.message})}}const k={namespaced:!0,getters:r,mutations:n,actions:a,state:l},C=(0,s.h)((function(){const e=(0,i.MT)({modules:{example:k},strict:!1});return e}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{110:"0586bec9",193:"edc3b938",255:"73b7190a",682:"7137f0a9"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{110:"ac000131",143:"31d6cfe0",255:"1ecc236b",736:"5beb3da8"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="gasstationsapp:";o.l=(r,n,a,s)=>{if(e[r])e[r].push(n);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var p=(t,o)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){n=s[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var s=o.miniCssF(r),i=o.p+s;if(t(s,i))return n();e(r,i,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={110:1,255:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var s=o.p+o.u(t),i=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[s,i,l]=r,d=0;if(s.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var c=l(o)}for(t&&t(r);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[s[d]]=0;return o.O(c)},r=self["webpackChunkgasstationsapp"]=self["webpackChunkgasstationsapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(5513)));r=o.O(r)})();