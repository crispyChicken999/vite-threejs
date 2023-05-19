import{W as e,r as a,Q as t,z as l,b as n,B as o,G as s,o as r,f as u,i,I as c,u as h,m as d,x as p,X as v,y as m,R as f,F as g,l as b,V as k,A as w,N as M,c as y,w as _,j as C,h as $,L as x,Y as S,p as V,t as E,Z as F,$ as A,a0 as N,a as L,P as H,e as B,q as W,s as j}from"./entry.ff4acb8a.js";import{n as O,h as z,j as D,g as I,o as T,_ as K,u as P,d as R,e as U,c as q,f as X,E as Y,l as G,w as J}from"./el-button.a9350780.js";import{m as Q,n as Z,u as ee,o as ae,p as te,q as le,E as ne}from"./el-popper.c0fe52a3.js";import{U as oe,C as se,d as re,O as ue}from"./OrbitControls.5c775503.js";const ie=e=>{let a,t;return"touchend"===e.type?(t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX):e.type.startsWith("touch")?(t=e.touches[0].clientY,a=e.touches[0].clientX):(t=e.clientY,a=e.clientX),{clientX:a,clientY:t}},ce=new Map;let he;function de(e,a){let t=[];return Array.isArray(a.arg)?t=a.arg:O(a.arg)&&t.push(a.arg),function(l,n){const o=a.instance.popperRef,s=l.target,r=null==n?void 0:n.target,u=!a||!a.instance,i=!s||!r,c=e.contains(s)||e.contains(r),h=e===s,d=t.length&&t.some((e=>null==e?void 0:e.contains(s)))||t.length&&t.includes(r),p=o&&(o.contains(s)||o.contains(r));u||i||c||h||d||p||a.value(l,n)}}Q&&(document.addEventListener("mousedown",(e=>he=e)),document.addEventListener("mouseup",(e=>{for(const a of ce.values())for(const{documentHandler:t}of a)t(e,he)})));const pe={beforeMount(e,a){ce.has(e)||ce.set(e,[]),ce.get(e).push({documentHandler:de(e,a),bindingFn:a.value})},updated(e,a){ce.has(e)||ce.set(e,[]);const t=ce.get(e),l=t.findIndex((e=>e.bindingFn===a.oldValue)),n={documentHandler:de(e,a),bindingFn:a.value};l>=0?t.splice(l,1,n):t.push(n)},unmounted(e){ce.delete(e)}},ve=z({color:{type:D(Object),required:!0},vertical:{type:Boolean,default:!1}});let me=!1;function fe(e,a){if(!Q)return;const t=function(e){var t;null==(t=a.drag)||t.call(a,e)},l=function(e){var n;document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",l),document.onselectstart=null,document.ondragstart=null,me=!1,null==(n=a.end)||n.call(a,e)},n=function(e){var n;me||(e.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",t),document.addEventListener("mouseup",l),document.addEventListener("touchmove",t),document.addEventListener("touchend",l),me=!0,null==(n=a.start)||n.call(a,e))};e.addEventListener("mousedown",n),e.addEventListener("touchstart",n)}const ge=(e,{bar:s,thumb:r,handleDrag:u})=>{const i=o(),c=I("color-alpha-slider"),h=a(0),d=a(0),p=a();function v(){h.value=function(){if(!r.value)return 0;if(e.vertical)return 0;const a=i.vnode.el,t=e.color.get("alpha");return a?Math.round(t*(a.offsetWidth-r.value.offsetWidth/2)/100):0}(),d.value=function(){if(!r.value)return 0;const a=i.vnode.el;if(!e.vertical)return 0;const t=e.color.get("alpha");return a?Math.round(t*(a.offsetHeight-r.value.offsetHeight/2)/100):0}(),p.value=function(){if(e.color&&e.color.value){const{r:a,g:t,b:l}=e.color.toRgb();return`linear-gradient(to right, rgba(${a}, ${t}, ${l}, 0) 0%, rgba(${a}, ${t}, ${l}, 1) 100%)`}return""}()}t((()=>{if(!s.value||!r.value)return;const e={drag:e=>{u(e)},end:e=>{u(e)}};fe(s.value,e),fe(r.value,e),v()})),l((()=>e.color.get("alpha")),(()=>v())),l((()=>e.color.value),(()=>v()));const m=n((()=>[c.b(),c.is("vertical",e.vertical)])),f=n((()=>c.e("bar"))),g=n((()=>c.e("thumb")));return{rootKls:m,barKls:f,barStyle:n((()=>({background:p.value}))),thumbKls:g,thumbStyle:n((()=>({left:T(h.value),top:T(d.value)}))),update:v}};var be=K(s({...s({name:"ElColorAlphaSlider"}),props:ve,setup(a,{expose:t}){const l=a,{bar:n,thumb:s,handleDrag:p,handleClick:v}=(a=>{const t=o(),l=e(),n=e();function s(e){if(!n.value||!l.value)return;const o=t.vnode.el.getBoundingClientRect(),{clientX:s,clientY:r}=ie(e);if(a.vertical){let e=r-o.top;e=Math.max(l.value.offsetHeight/2,e),e=Math.min(e,o.height-l.value.offsetHeight/2),a.color.set("alpha",Math.round((e-l.value.offsetHeight/2)/(o.height-l.value.offsetHeight)*100))}else{let e=s-o.left;e=Math.max(l.value.offsetWidth/2,e),e=Math.min(e,o.width-l.value.offsetWidth/2),a.color.set("alpha",Math.round((e-l.value.offsetWidth/2)/(o.width-l.value.offsetWidth)*100))}}return{thumb:l,bar:n,handleDrag:s,handleClick:function(e){e.target!==l.value&&s(e)}}})(l),{rootKls:m,barKls:f,barStyle:g,thumbKls:b,thumbStyle:k,update:w}=ge(l,{bar:n,thumb:s,handleDrag:p});return t({update:w,bar:n,thumb:s}),(e,a)=>(r(),u("div",{class:c(h(m))},[i("div",{ref_key:"bar",ref:n,class:c(h(f)),style:d(h(g)),onClick:a[0]||(a[0]=(...e)=>h(v)&&h(v)(...e))},null,6),i("div",{ref_key:"thumb",ref:s,class:c(h(b)),style:d(h(k))},null,6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);var ke=K(s({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const s=I("color-hue-slider"),r=o(),u=a(),i=a(),c=a(0),h=a(0),d=n((()=>e.color.get("hue")));function p(a){if(!i.value||!u.value)return;const t=r.vnode.el.getBoundingClientRect(),{clientX:l,clientY:n}=ie(a);let o;if(e.vertical){let e=n-t.top;e=Math.min(e,t.height-u.value.offsetHeight/2),e=Math.max(u.value.offsetHeight/2,e),o=Math.round((e-u.value.offsetHeight/2)/(t.height-u.value.offsetHeight)*360)}else{let e=l-t.left;e=Math.min(e,t.width-u.value.offsetWidth/2),e=Math.max(u.value.offsetWidth/2,e),o=Math.round((e-u.value.offsetWidth/2)/(t.width-u.value.offsetWidth)*360)}e.color.set("hue",o)}function v(){c.value=function(){if(!u.value)return 0;const a=r.vnode.el;if(e.vertical)return 0;const t=e.color.get("hue");return a?Math.round(t*(a.offsetWidth-u.value.offsetWidth/2)/360):0}(),h.value=function(){if(!u.value)return 0;const a=r.vnode.el;if(!e.vertical)return 0;const t=e.color.get("hue");return a?Math.round(t*(a.offsetHeight-u.value.offsetHeight/2)/360):0}()}return l((()=>d.value),(()=>{v()})),t((()=>{if(!i.value||!u.value)return;const e={drag:e=>{p(e)},end:e=>{p(e)}};fe(i.value,e),fe(u.value,e),v()})),{bar:i,thumb:u,thumbLeft:c,thumbTop:h,hueValue:d,handleClick:function(e){e.target!==u.value&&p(e)},update:v,ns:s}}}),[["render",function(e,a,t,l,n,o){return r(),u("div",{class:c([e.ns.b(),e.ns.is("vertical",e.vertical)])},[i("div",{ref:"bar",class:c(e.ns.e("bar")),onClick:a[0]||(a[0]=(...a)=>e.handleClick&&e.handleClick(...a))},null,2),i("div",{ref:"thumb",class:c(e.ns.e("thumb")),style:d({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const we=z({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:P,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:{type:D(Array)},validateEvent:{type:Boolean,default:!0}}),Me={[oe]:e=>p(e)||Z(e),[se]:e=>p(e)||Z(e),activeChange:e=>p(e)||Z(e)},ye=Symbol("colorPickerContextKey"),_e=function(e,a,t){return[e,a*t/((e=(2-a)*t)<1?e:2-e)||0,e/2]},Ce=function(e,a){var t;"string"==typeof(t=e)&&t.includes(".")&&1===Number.parseFloat(t)&&(e="100%");const l=function(e){return"string"==typeof e&&e.includes("%")}(e);return e=Math.min(a,Math.max(0,Number.parseFloat(`${e}`))),l&&(e=Number.parseInt(""+e*a,10)/100),Math.abs(e-a)<1e-6?1:e%a/Number.parseFloat(a)},$e={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},xe=e=>{e=Math.min(Math.round(e),255);const a=Math.floor(e/16),t=e%16;return`${$e[a]||a}${$e[t]||t}`},Se=function({r:e,g:a,b:t}){return Number.isNaN(+e)||Number.isNaN(+a)||Number.isNaN(+t)?"":`#${xe(e)}${xe(a)}${xe(t)}`},Ve={A:10,B:11,C:12,D:13,E:14,F:15},Ee=function(e){return 2===e.length?16*(Ve[e[0].toUpperCase()]||+e[0])+(Ve[e[1].toUpperCase()]||+e[1]):Ve[e[1].toUpperCase()]||+e[1]},Fe=(e,a,t)=>{e=Ce(e,255),a=Ce(a,255),t=Ce(t,255);const l=Math.max(e,a,t),n=Math.min(e,a,t);let o;const s=l,r=l-n,u=0===l?0:r/l;if(l===n)o=0;else{switch(l){case e:o=(a-t)/r+(a<t?6:0);break;case a:o=(t-e)/r+2;break;case t:o=(e-a)/r+4}o/=6}return{h:360*o,s:100*u,v:100*s}},Ae=function(e,a,t){e=6*Ce(e,360),a=Ce(a,100),t=Ce(t,100);const l=Math.floor(e),n=e-l,o=t*(1-a),s=t*(1-n*a),r=t*(1-(1-n)*a),u=l%6,i=[t,s,o,o,r,t][u],c=[r,t,t,s,o,o][u],h=[o,o,r,t,t,s][u];return{r:Math.round(255*i),g:Math.round(255*c),b:Math.round(255*h)}};class Ne{constructor(e={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const a in e)v(e,a)&&(this[a]=e[a]);e.value?this.fromString(e.value):this.doOnChange()}set(e,a){if(1!==arguments.length||"object"!=typeof e)this[`_${e}`]=a,this.doOnChange();else for(const t in e)v(e,t)&&this.set(t,e[t])}get(e){return"alpha"===e?Math.floor(this[`_${e}`]):this[`_${e}`]}toRgb(){return Ae(this._hue,this._saturation,this._value)}fromString(e){if(!e)return this._hue=0,this._saturation=100,this._value=100,void this.doOnChange();const a=(e,a,t)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,a)),this._value=Math.max(0,Math.min(100,t)),this.doOnChange()};if(e.includes("hsl")){const t=e.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,a)=>a>2?Number.parseFloat(e):Number.parseInt(e,10)));if(4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3){const{h:e,s:l,v:n}=function(e,a,t){t/=100;let l=a/=100;const n=Math.max(t,.01);return a*=(t*=2)<=1?t:2-t,l*=n<=1?n:2-n,{h:e,s:100*(0===t?2*l/(n+l):2*a/(t+a)),v:(t+a)/2*100}}(t[0],t[1],t[2]);a(e,l,n)}}else if(e.includes("hsv")){const t=e.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,a)=>a>2?Number.parseFloat(e):Number.parseInt(e,10)));4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3&&a(t[0],t[1],t[2])}else if(e.includes("rgb")){const t=e.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,a)=>a>2?Number.parseFloat(e):Number.parseInt(e,10)));if(4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3){const{h:e,s:l,v:n}=Fe(t[0],t[1],t[2]);a(e,l,n)}}else if(e.includes("#")){const t=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(t))return;let l,n,o;3===t.length?(l=Ee(t[0]+t[0]),n=Ee(t[1]+t[1]),o=Ee(t[2]+t[2])):6!==t.length&&8!==t.length||(l=Ee(t.slice(0,2)),n=Ee(t.slice(2,4)),o=Ee(t.slice(4,6))),8===t.length?this._alpha=Ee(t.slice(6))/255*100:3!==t.length&&6!==t.length||(this._alpha=100);const{h:s,s:r,v:u}=Fe(l,n,o);a(s,r,u)}}compare(e){return Math.abs(e._hue-this._hue)<2&&Math.abs(e._saturation-this._saturation)<1&&Math.abs(e._value-this._value)<1&&Math.abs(e._alpha-this._alpha)<1}doOnChange(){const{_hue:e,_saturation:a,_value:t,_alpha:l,format:n}=this;if(this.enableAlpha)switch(n){case"hsl":{const l=_e(e,a/100,t/100);this.value=`hsla(${e}, ${Math.round(100*l[1])}%, ${Math.round(100*l[2])}%, ${this.get("alpha")/100})`;break}case"hsv":this.value=`hsva(${e}, ${Math.round(a)}%, ${Math.round(t)}%, ${this.get("alpha")/100})`;break;case"hex":this.value=`${Se(Ae(e,a,t))}${xe(255*l/100)}`;break;default:{const{r:l,g:n,b:o}=Ae(e,a,t);this.value=`rgba(${l}, ${n}, ${o}, ${this.get("alpha")/100})`}}else switch(n){case"hsl":{const l=_e(e,a/100,t/100);this.value=`hsl(${e}, ${Math.round(100*l[1])}%, ${Math.round(100*l[2])}%)`;break}case"hsv":this.value=`hsv(${e}, ${Math.round(a)}%, ${Math.round(t)}%)`;break;case"rgb":{const{r:l,g:n,b:o}=Ae(e,a,t);this.value=`rgb(${l}, ${n}, ${o})`;break}default:this.value=Se(Ae(e,a,t))}}}const Le=["onClick"];var He=K(s({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(e){const t=I("color-predefine"),{currentColor:n}=m(ye),o=a(s(e.colors,e.color));function s(e,a){return e.map((e=>{const t=new Ne;return t.enableAlpha=!0,t.format="rgba",t.fromString(e),t.selected=t.value===a.value,t}))}return l((()=>n.value),(e=>{const a=new Ne;a.fromString(e),o.value.forEach((e=>{e.selected=a.compare(e)}))})),f((()=>{o.value=s(e.colors,e.color)})),{rgbaColors:o,handleSelect:function(a){e.color.fromString(e.colors[a])},ns:t}}}),[["render",function(e,a,t,l,n,o){return r(),u("div",{class:c(e.ns.b())},[i("div",{class:c(e.ns.e("colors"))},[(r(!0),u(g,null,b(e.rgbaColors,((a,t)=>(r(),u("div",{key:e.colors[t],class:c([e.ns.e("color-selector"),e.ns.is("alpha",a._alpha<100),{selected:a.selected}]),onClick:a=>e.handleSelect(t)},[i("div",{style:d({backgroundColor:a.value})},null,4)],10,Le)))),128))],2)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const Be=s({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const s=I("color-svpanel"),r=o(),u=a(0),i=a(0),c=a("hsl(0, 100%, 50%)"),h=n((()=>({hue:e.color.get("hue"),value:e.color.get("value")})));function d(){const a=e.color.get("saturation"),t=e.color.get("value"),l=r.vnode.el,{clientWidth:n,clientHeight:o}=l;i.value=a*n/100,u.value=(100-t)*o/100,c.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function p(a){const t=r.vnode.el.getBoundingClientRect(),{clientX:l,clientY:n}=ie(a);let o=l-t.left,s=n-t.top;o=Math.max(0,o),o=Math.min(o,t.width),s=Math.max(0,s),s=Math.min(s,t.height),i.value=o,u.value=s,e.color.set({saturation:o/t.width*100,value:100-s/t.height*100})}return l((()=>h.value),(()=>{d()})),t((()=>{fe(r.vnode.el,{drag:e=>{p(e)},end:e=>{p(e)}}),d()})),{cursorTop:u,cursorLeft:i,background:c,colorValue:h,handleDrag:p,update:d,ns:s}}}),We=[i("div",null,null,-1)];var je=K(Be,[["render",function(e,a,t,l,n,o){return r(),u("div",{class:c(e.ns.b()),style:d({backgroundColor:e.background})},[i("div",{class:c(e.ns.e("white"))},null,2),i("div",{class:c(e.ns.e("black"))},null,2),i("div",{class:c(e.ns.e("cursor")),style:d({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},We,6)],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);const Oe=["id","aria-label","aria-labelledby","aria-description","tabindex","onKeydown"];const ze=J(K(s({...s({name:"ElColorPicker"}),props:we,emits:Me,setup(e,{expose:o,emit:s}){const p=e,{t:v}=ee(),m=I("color"),{formItem:f}=R(),g=U(),b=q(),{inputId:L,isLabeledByFormItem:H}=X(p,{formItemContext:f}),B=a(),W=a(),j=a(),O=a();let z=!0;const D=k(new Ne({enableAlpha:p.showAlpha,format:p.colorFormat||"",value:p.modelValue})),T=a(!1),K=a(!1),P=a(""),J=n((()=>p.modelValue||K.value?function(e,a){if(!(e instanceof Ne))throw new TypeError("color should be instance of _color Class");const{r:t,g:l,b:n}=e.toRgb();return a?`rgba(${t}, ${l}, ${n}, ${e.get("alpha")/100})`:`rgb(${t}, ${l}, ${n})`}(D,p.showAlpha):"transparent")),Q=n((()=>p.modelValue||K.value?D.value:"")),Z=n((()=>H.value?void 0:p.label||v("el.colorpicker.defaultLabel"))),ne=n((()=>H.value?null==f?void 0:f.labelId:void 0)),se=n((()=>[m.b("picker"),m.is("disabled",b.value),m.bm("picker",g.value)]));function ue(e){T.value=e}const ie=ae(ue,100);function ce(){ie(!1),he()}function he(){w((()=>{p.modelValue?D.fromString(p.modelValue):(D.value="",w((()=>{K.value=!1})))}))}function de(){b.value||ie(!T.value)}function ve(){D.fromString(P.value)}function me(){const e=D.value;s(oe,e),s("change",e),p.validateEvent&&(null==f||f.validate("change").catch((e=>re()))),ie(!1),w((()=>{const e=new Ne({enableAlpha:p.showAlpha,format:p.colorFormat||"",value:p.modelValue});D.compare(e)||he()}))}function fe(){ie(!1),s(oe,null),s("change",null),null!==p.modelValue&&p.validateEvent&&(null==f||f.validate("change").catch((e=>re()))),he()}return t((()=>{p.modelValue&&(P.value=Q.value)})),l((()=>p.modelValue),(e=>{e?e&&e!==D.value&&(z=!1,D.fromString(e)):K.value=!1})),l((()=>Q.value),(e=>{P.value=e,z&&s("activeChange",e),z=!0})),l((()=>D.value),(()=>{p.modelValue||K.value||(K.value=!0)})),l((()=>T.value),(()=>{w((()=>{var e,a,t;null==(e=B.value)||e.update(),null==(a=W.value)||a.update(),null==(t=j.value)||t.update()}))})),M(ye,{currentColor:Q}),o({color:D,show:function(){b.value||ue(!0)},hide:ce}),(e,a)=>(r(),y(h(le),{ref_key:"popper",ref:O,visible:T.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[h(m).be("picker","panel"),h(m).b("dropdown"),e.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${h(m).namespace.value}-zoom-in-top`,persistent:""},{content:_((()=>[C((r(),u("div",null,[i("div",{class:c(h(m).be("dropdown","main-wrapper"))},[$(ke,{ref_key:"hue",ref:B,class:"hue-slider",color:h(D),vertical:""},null,8,["color"]),$(je,{ref:"svPanel",color:h(D)},null,8,["color"])],2),e.showAlpha?(r(),y(be,{key:0,ref_key:"alpha",ref:j,color:h(D)},null,8,["color"])):x("v-if",!0),e.predefine?(r(),y(He,{key:1,ref:"predefine",color:h(D),colors:e.predefine},null,8,["color","colors"])):x("v-if",!0),i("div",{class:c(h(m).be("dropdown","btns"))},[i("span",{class:c(h(m).be("dropdown","value"))},[$(h(te),{modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=e=>P.value=e),"validate-event":!1,size:"small",onKeyup:S(ve,["enter"]),onBlur:ve},null,8,["modelValue","onKeyup"])],2),$(h(Y),{class:c(h(m).be("dropdown","link-btn")),text:"",size:"small",onClick:fe},{default:_((()=>[V(E(h(v)("el.colorpicker.clear")),1)])),_:1},8,["class"]),$(h(Y),{plain:"",size:"small",class:c(h(m).be("dropdown","btn")),onClick:me},{default:_((()=>[V(E(h(v)("el.colorpicker.confirm")),1)])),_:1},8,["class"])],2)])),[[h(pe),ce]])])),default:_((()=>[i("div",{id:h(L),class:c(h(se)),role:"button","aria-label":h(Z),"aria-labelledby":h(ne),"aria-description":h(v)("el.colorpicker.description",{color:e.modelValue||""}),tabindex:e.tabindex,onKeydown:S(de,["enter"])},[h(b)?(r(),u("div",{key:0,class:c(h(m).be("picker","mask"))},null,2)):x("v-if",!0),i("div",{class:c(h(m).be("picker","trigger")),onClick:de},[i("span",{class:c([h(m).be("picker","color"),h(m).is("alpha",e.showAlpha)])},[i("span",{class:c(h(m).be("picker","color-inner")),style:d({backgroundColor:h(J)})},[C($(h(G),{class:c([h(m).be("picker","icon"),h(m).is("icon-arrow-down")])},{default:_((()=>[$(h(F))])),_:1},8,["class"]),[[A,e.modelValue||K.value]]),e.modelValue||K.value?x("v-if",!0):(r(),y(h(G),{key:0,class:c([h(m).be("picker","empty"),h(m).is("icon-close")])},{default:_((()=>[$(h(N))])),_:1},8,["class"]))],6)],2)],2)],42,Oe)])),_:1},8,["visible","popper-class","transition"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]])),De=e=>(W("data-v-6f8cf565"),e=e(),j(),e),Ie={class:"controllers"},Te=De((()=>i("span",null,"Camera's x",-1))),Ke=De((()=>i("span",null,"Camera's y",-1))),Pe=De((()=>i("span",null,"Camera's z",-1))),Re={class:"color-pickers"},Ue={class:"picker"},qe=De((()=>i("span",null,"Canvas backgroundColor is:",-1))),Xe={class:"picker"},Ye=De((()=>i("span",null,"Sun emissive color is:",-1))),Ge=De((()=>i("div",{class:"solar-system"},[i("canvas",{id:"solar-canvas"})],-1))),Je=L({__name:"solarSystem",setup(e){const{$THREE:l}=H(),n=a({camera:{x:0,y:50,z:0}}),o=a("#3b3a39"),s=a("#FFFF00");return B({title:"Solar System",meta:[{hid:"description",name:"description",content:"Solar System"}]}),t((()=>{!function(){const e=new l.Scene;f((()=>{e.background=new l.Color(o.value)}));const a=new l.PerspectiveCamera(75,2,.1,1e3);f((()=>{a.position.set(n.value.camera.x,n.value.camera.y,n.value.camera.z),a.lookAt(0,0,0),a.up.set(0,0,1)}));const t=new l.WebGLRenderer({canvas:document.getElementById("solar-canvas"),antialias:!0,alpha:!0});t.setSize(1e3,500);const r=new ue(a,t.domElement),u=new l.PointLight(16777215,3);e.add(u);const i=[],c=new l.SphereGeometry(2,36,36),h=new l.Object3D;e.add(h),i.push(h);const d=new l.Object3D;h.add(d),i.push(d);const p=new l.Object3D;d.add(p),i.push(p);const v=new l.MeshPhongMaterial({emissive:s.value});f((()=>{v.emissive=new l.Color(s.value)}));const m=new l.Mesh(c,v);m.scale.set(5,5,5),h.add(m),h.add(d),i.push(m);const g=new l.MeshPhongMaterial({color:2241535,emissive:1122884}),b=new l.Mesh(c,g);d.position.x=20,d.add(b),i.push(b);const k=new l.MeshPhongMaterial({color:8947848,emissive:2236962}),w=new l.Mesh(c,k);w.scale.set(.5,.5,.5),p.position.x=4,p.add(w),i.push(w);const M=new l.TorusGeometry(20,.1,64,128),y=new l.MeshBasicMaterial({color:"#fff",side:l.DoubleSide}),_=new l.Mesh(M,y);h.add(_);const C=new l.TorusGeometry(4.4,.1,64,128),$=new l.MeshBasicMaterial({color:"#fff",side:l.DoubleSide}),x=new l.Mesh(C,$);b.add(x),requestAnimationFrame((function l(n){n*=.001,i.forEach((e=>{e.rotation.z=n})),t.render(e,a),requestAnimationFrame(l),r.update()}))}()})),(e,a)=>{const t=Y,l=ne,c=ze;return r(),u(g,null,[$(t,{onClick:a[0]||(a[0]=a=>e.$router.push("/three"))},{default:_((()=>[V("Back To ThreeJS Playground")])),_:1}),i("div",Ie,[i("div",null,[Te,$(l,{max:100,min:-100,step:.001,modelValue:n.value.camera.x,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value.camera.x=e)},null,8,["step","modelValue"])]),i("div",null,[Ke,$(l,{max:100,min:-100,step:.001,modelValue:n.value.camera.y,"onUpdate:modelValue":a[2]||(a[2]=e=>n.value.camera.y=e)},null,8,["step","modelValue"])]),i("div",null,[Pe,$(l,{max:100,min:-100,step:.001,modelValue:n.value.camera.z,"onUpdate:modelValue":a[3]||(a[3]=e=>n.value.camera.z=e)},null,8,["step","modelValue"])])]),i("div",Re,[i("div",Ue,[qe,$(c,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value=e)},null,8,["modelValue"])]),i("div",Xe,[Ye,$(c,{modelValue:s.value,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value=e)},null,8,["modelValue"])])]),Ge],64)}}},[["__scopeId","data-v-6f8cf565"]]);export{Je as default};
