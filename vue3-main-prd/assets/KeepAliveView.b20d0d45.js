import{d as a,r as t,p as n,q as o,A as l,B as s,aF as p}from"./index.4b16c481.js";const u={id:"keep-alive"},r={name:"KeepAliveView"},d=a({...r,setup(i){const e=t(null);return n(()=>{e.value=o({name:"vue2App",entry:"http://localhost:8091",container:"#keep-alive",props:{path:"/tab-view"}},{sandbox:{experimentalStyleIsolation:!0},singular:!1})}),l(async()=>{e.value&&e.value.getStatus()==="MOUNTED"&&await e.value.unmount(),e.value=null}),(c,_)=>(s(),p("div",u))}});export{d as default};
