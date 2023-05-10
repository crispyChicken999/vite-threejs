import{P as e,az as t,G as a,b as r,aA as o,r as l,Q as n,a2 as s,an as i,S as u,aB as d,aC as c,aD as f,aE as p,aF as v,a as h,e as m,o as g,f as b,i as x,t as y,h as w,w as C,p as S,q as k,s as q}from"./entry.b9628b33.js";const _=globalThis.requestIdleCallback||(e=>{const t=Date.now(),a={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout((()=>{e(a)}),1)}),P=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)});async function N(e,a=t()){const{path:r,matched:o}=a.resolve(e);if(!o.length)return;if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(r))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then((()=>N(e,a)));a._routePreloaded.add(r);const n=o.map((e=>{var t;return null==(t=e.components)?void 0:t.default})).filter((e=>"function"==typeof e));for(const t of n){const e=Promise.resolve(t()).catch((()=>{})).finally((()=>l.splice(l.indexOf(e))));l.push(e)}await Promise.all(l)}function z(h){const m=h.componentName||"NuxtLink";return a({name:m,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(a,{slots:m}){const g=t(),b=r((()=>((e,t)=>{if(!e||"append"!==h.trailingSlash&&"remove"!==h.trailingSlash)return e;const a="append"===h.trailingSlash?f:p;if("string"==typeof e)return a(e,!0);const r="path"in e?e.path:t(e).path;return{...e,name:void 0,path:a(r,!0)}})(a.to||a.href||"",g.resolve))),x=r((()=>!!a.external||(!(!a.target||"_self"===a.target)||"object"!=typeof b.value&&(""===b.value||o(b.value,{acceptRelative:!0}))))),y=l(!1),w=l(null),C=e=>{var t;w.value=a.custom?null==(t=null==e?void 0:e.$el)?void 0:t.nextElementSibling:null==e?void 0:e.$el};if(!1!==a.prefetch&&!0!==a.noPrefetch&&"_blank"!==a.target&&!function(){const e=navigator.connection;if(e&&(e.saveData||/2g/.test(e.effectiveType)))return!0;return!1}()){const t=e();let a,r=null;n((()=>{const o=function(){const t=e();if(t._observer)return t._observer;let a=null;const r=new Map,o=(e,t)=>(a||(a=new IntersectionObserver((e=>{for(const t of e){const e=r.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&e&&e()}}))),r.set(e,t),a.observe(e),()=>{r.delete(e),a.unobserve(e),0===r.size&&(a.disconnect(),a=null)}),l=t._observer={observe:o};return l}();(t=>{const a=e();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",(()=>{_(t)})):_(t)})((()=>{a=_((()=>{var e;(null==(e=null==w?void 0:w.value)?void 0:e.tagName)&&(r=o.observe(w.value,(async()=>{null==r||r(),r=null;const e="string"==typeof b.value?b.value:g.resolve(b.value).fullPath;await Promise.all([t.hooks.callHook("link:prefetch",e).catch((()=>{})),!x.value&&N(b.value,g).catch((()=>{}))]),y.value=!0})))}))}))})),s((()=>{a&&P(a),null==r||r(),r=null}))}return()=>{var e,t;if(!x.value){const e={ref:C,to:b.value,activeClass:a.activeClass||h.activeClass,exactActiveClass:a.exactActiveClass||h.exactActiveClass,replace:a.replace,ariaCurrentValue:a.ariaCurrentValue,custom:a.custom};return a.custom||(y.value&&(e.class=a.prefetchedClass||h.prefetchedClass),e.rel=a.rel),i(u("RouterLink"),e,m.default)}const r="object"==typeof b.value?(null==(e=g.resolve(b.value))?void 0:e.href)??null:b.value||null,o=a.target||null,l=a.noRel?null:((...e)=>e.find((e=>void 0!==e)))(a.rel,h.externalRelAttribute,r?"noopener noreferrer":"")||null,n=()=>v(r,{replace:a.replace});return a.custom?m.default?m.default({href:r,navigate:n,get route(){if(!r)return;const e=d(r);return{path:e.pathname,fullPath:e.pathname,get query(){return c(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:l,target:o,isExternal:x.value,isActive:!1,isExactActive:!1}):null:i("a",{ref:w,href:r,rel:l,target:o},null==(t=m.default)?void 0:t.call(m))}}})}const j=z({componentName:"NuxtLink"});const A={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},B=(e=>(k("data-v-30d2164e"),e=e(),q(),e))((()=>x("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1))),I={class:"max-w-520px text-center z-20"},R=["textContent"],E=["textContent"],T={class:"w-full flex items-center justify-center"},H=h({__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(e){const t=e;return m({title:`${t.statusCode} - ${t.statusMessage} | ${t.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(t,a)=>{const r=j;return g(),b("div",A,[B,x("div",I,[x("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:y(e.statusCode)},null,8,R),x("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:y(e.description)},null,8,E),x("div",T,[w(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:C((()=>[S(y(e.backHome),1)])),_:1})])])])}}},[["__scopeId","data-v-30d2164e"]]);export{H as default};
