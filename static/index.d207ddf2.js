import{a as s,r as a,b as e,e as t,f as l,h as n,w as o,i,t as u,u as r,j as c,v as d,k as p,F as v,l as m,m as h,o as b,p as g,q as x,s as y}from"./entry.b9628b33.js";import{E as f}from"./el-button.53b7dc95.js";const w={class:"msg"},_={class:"count"},k={class:"headtitle"},$={class:"input-area"},j={class:"progress"},C=(s=>(x("data-v-48fc9bec"),s=s(),y(),s))((()=>i("span",null,"Boxs wrapper max width is:",-1))),H={class:"progress-value"},I={class:"box"},M=s({__name:"index",setup(s){let x=a("Hello World!"),y=a(9),M=a(80),T=e((()=>`${x.value}~${y.value}`));const q=s=>{x.value=s.target.value},B=()=>{y.value++},E=()=>{y.value>1?y.value--:y.value};return t({title:T,meta:[{hid:"description",name:"description",content:"My custom description"}]}),(s,a)=>{const e=f;return b(),l(v,null,[n(e,{onClick:a[0]||(a[0]=a=>s.$router.push("three"))},{default:o((()=>[g("Switch To ThreeJs Playground")])),_:1}),i("div",w,"My message to the world is:"+u(r(x)),1),i("div",_,"Let's count:"+u(r(y)),1),i("div",k,"Headtitle is:"+u(r(T)),1),i("div",$,[i("input",{class:"inout",placeholder:"please input msg",type:"text",onInput:q},null,32),i("button",{class:"button",onClick:B},"increase"),i("button",{class:"button",onClick:E},"decrease")]),i("div",j,[C,c(i("input",{min:"0",max:"100",type:"range",name:"progress",id:"my-progress","onUpdate:modelValue":a[1]||(a[1]=s=>p(M)?M.value=s:M=s)},null,512),[[d,r(M)]]),i("div",H,u(r(M))+"%",1)]),i("div",{class:"dynamic-boxs",style:h({"--max-width":`${r(M)}%`})},[(b(!0),l(v,null,m(r(y),(s=>(b(),l("div",I,u(s),1)))),256))],4)],64)}}},[["__scopeId","data-v-48fc9bec"]]);export{M as default};
