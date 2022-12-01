import{d as U,u as X,p as dt,N as ft,O as K,A as vt,Q as yt,P as Q,a as E,R as tt,T as Et,r as P,S as B,U as bt,V as mt,_ as y,W as ht,X as Tt,Y as St,Z as Ct,f as w,$ as xt,w as At,a0 as Nt,c as wt,a1 as kt,a2 as _t,t as nt}from"./index.4b16c481.js";import{w as et,i as zt,u as Lt}from"./index.84db7f98.js";var G={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},H={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},M=[],O=[];function Bt(){var a=document.createElement("div"),t=a.style;"AnimationEvent"in window||(delete G.animationstart.animation,delete H.animationend.animation),"TransitionEvent"in window||(delete G.transitionstart.transition,delete H.transitionend.transition);function r(i,h){for(var v in i)if(i.hasOwnProperty(v)){var g=i[v];for(var m in g)if(m in t){h.push(g[m]);break}}}r(G,M),r(H,O)}typeof window<"u"&&typeof document<"u"&&Bt();function at(a,t,r){a.addEventListener(t,r,!1)}function it(a,t,r){a.removeEventListener(t,r,!1)}var It={startEvents:M,addStartEventListener:function(t,r){if(M.length===0){setTimeout(r,0);return}M.forEach(function(i){at(t,i,r)})},removeStartEventListener:function(t,r){M.length!==0&&M.forEach(function(i){it(t,i,r)})},endEvents:O,addEndEventListener:function(t,r){if(O.length===0){setTimeout(r,0);return}O.forEach(function(i){at(t,i,r)})},removeEndEventListener:function(t,r){O.length!==0&&O.forEach(function(i){it(t,i,r)})}};const R=It;var L;function rt(a){return!a||a.offsetParent===null}function Mt(a){var t=(a||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const Ot=U({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,r){var i=r.slots,h=r.expose,v=yt(),g=X("",t),m=g.csp,T=g.prefixCls;h({csp:m});var S=null,z=null,C=null,x=!1,p=null,b=!1,N=function(n){if(!b){var e=K(v);!n||n.target!==e||x||k(e)}},o=function(n){!n||n.animationName!=="fadeEffect"||k(n.target)},d=function(){var n=t.insertExtraNode;return n?"".concat(T.value,"-click-animating"):"".concat(T.value,"-click-animating-without-extra-node")},A=function(n,e){var s=t.insertExtraNode,l=t.disabled;if(!(l||!n||rt(n)||n.className.indexOf("-leave")>=0)){p=document.createElement("div"),p.className="".concat(T.value,"-click-animating-node");var u=d();if(n.removeAttribute(u),n.setAttribute(u,"true"),L=L||document.createElement("style"),e&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&Mt(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&e!=="transparent"){var _;(_=m.value)!==null&&_!==void 0&&_.nonce&&(L.nonce=m.value.nonce),p.style.borderColor=e,L.innerHTML=`
        [`.concat(T.value,"-click-animating-without-extra-node='true']::after, .").concat(T.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(e,`;
        }`),document.body.contains(L)||document.body.appendChild(L)}s&&n.appendChild(p),R.addStartEventListener(n,N),R.addEndEventListener(n,o)}},k=function(n){if(!(!n||n===p||!(n instanceof Element))){var e=t.insertExtraNode,s=d();n.setAttribute(s,"false"),L&&(L.innerHTML=""),e&&p&&n.contains(p)&&n.removeChild(p),R.removeStartEventListener(n,N),R.removeEndEventListener(n,o)}},W=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var e=function(l){if(!(l.target.tagName==="INPUT"||rt(l.target))){k(n);var u=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");z=setTimeout(function(){return A(n,u)},0),et.cancel(C),x=!0,C=et(function(){x=!1},10)}};return n.addEventListener("click",e,!0),{cancel:function(){n.removeEventListener("click",e,!0)}}}};return dt(function(){ft(function(){var f=K(v);f.nodeType===1&&(S=W(f))})}),vt(function(){S&&S.cancel(),clearTimeout(z),b=!0}),function(){var f;return(f=i.default)===null||f===void 0?void 0:f.call(i)[0]}}});var Pt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Q.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Wt=Pt;var ot=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},lt=function(t){ft(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},ut=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const $t=U({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var r=t.existIcon,i=t.prefixCls,h=t.loading;if(r)return E("span",{class:"".concat(i,"-loading-icon")},[E(tt,null,null)]);var v=!!h;return E(Et,{name:"".concat(i,"-loading-icon-motion"),onBeforeEnter:ot,onEnter:lt,onAfterEnter:ut,onBeforeLeave:lt,onLeave:function(m){setTimeout(function(){ot(m)})},onAfterLeave:ut},{default:function(){return[v?E("span",{class:"".concat(i,"-loading-icon")},[E(tt,null,null)]):null]}})}}});var st=/^[\u4e00-\u9fa5]{2}$/,ct=st.test.bind(st);function F(a){return a==="text"||a==="link"}const Gt=U({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:zt(Wt(),{type:"default"}),slots:["icon"],setup:function(t,r){var i=r.slots,h=r.attrs,v=r.emit,g=X("btn",t),m=g.prefixCls,T=g.autoInsertSpaceInButton,S=g.direction,z=g.size,C=P(null),x=P(void 0),p=!1,b=P(!1),N=P(!1),o=B(function(){return T.value!==!1}),d=B(function(){return bt(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});mt(d,function(n){clearTimeout(x.value),typeof d.value=="number"?x.value=setTimeout(function(){b.value=n},d.value):b.value=n},{immediate:!0});var A=B(function(){var n,e=t.type,s=t.shape,l=s===void 0?"default":s,u=t.ghost,_=t.block,I=t.danger,c=m.value,$={large:"lg",small:"sm",middle:void 0},D=z.value,j=D&&$[D]||"";return n={},y(n,"".concat(c),!0),y(n,"".concat(c,"-").concat(e),e),y(n,"".concat(c,"-").concat(l),l!=="default"&&l),y(n,"".concat(c,"-").concat(j),j),y(n,"".concat(c,"-loading"),b.value),y(n,"".concat(c,"-background-ghost"),u&&!F(e)),y(n,"".concat(c,"-two-chinese-chars"),N.value&&o.value),y(n,"".concat(c,"-block"),_),y(n,"".concat(c,"-dangerous"),!!I),y(n,"".concat(c,"-rtl"),S.value==="rtl"),n}),k=function(){var e=C.value;if(!(!e||T.value===!1)){var s=e.textContent;p&&ct(s)?N.value||(N.value=!0):N.value&&(N.value=!1)}},W=function(e){if(b.value||t.disabled){e.preventDefault();return}v("click",e)},f=function(e,s){var l=s?" ":"";if(e.type===xt){var u=e.children.trim();return ct(u)&&(u=u.split("").join(l)),E("span",null,[u])}return e};return ht(function(){Tt(!(t.ghost&&F(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),dt(k),St(k),vt(function(){x.value&&clearTimeout(x.value)}),function(){var n,e,s=t.icon,l=s===void 0?(n=i.icon)===null||n===void 0?void 0:n.call(i):s,u=Ct((e=i.default)===null||e===void 0?void 0:e.call(i));p=u.length===1&&!l&&!F(t.type);var _=t.type,I=t.htmlType,c=t.disabled,$=t.href,D=t.title,j=t.target,gt=t.onMousedown,pt=b.value?"loading":l,V=w(w({},h),{},{title:D,disabled:c,class:[A.value,h.class,y({},"".concat(m.value,"-icon-only"),u.length===0&&!!pt)],onClick:W,onMousedown:gt});c||delete V.disabled;var Y=l&&!b.value?l:E($t,{existIcon:!!l,prefixCls:m.value,loading:!!b.value},null),Z=u.map(function(J){return f(J,p&&o.value)});if($!==void 0)return E("a",w(w({},V),{},{href:$,target:j,ref:C}),[Y,Z]);var q=E("button",w(w({},V),{},{ref:C,type:I}),[Y,Z]);return F(_)?q:E(Ot,{ref:"wave",disabled:!!b.value},{default:function(){return[q]}})}}});var Dt={small:8,middle:16,large:24},jt=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:Q.oneOf(nt("horizontal","vertical")).def("horizontal"),align:Q.oneOf(nt("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function Rt(a){return typeof a=="string"?Dt[a]:a||0}var Ft=U({compatConfig:{MODE:3},name:"ASpace",props:jt(),slots:["split"],setup:function(t,r){var i=r.slots,h=X("space",t),v=h.prefixCls,g=h.space,m=h.direction,T=Lt(),S=B(function(){var o,d,A;return(o=(d=t.size)!==null&&d!==void 0?d:(A=g.value)===null||A===void 0?void 0:A.size)!==null&&o!==void 0?o:"small"}),z=P(),C=P();mt(S,function(){var o=(Array.isArray(S.value)?S.value:[S.value,S.value]).map(function(A){return Rt(A)}),d=Nt(o,2);z.value=d[0],C.value=d[1]},{immediate:!0});var x=B(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),p=B(function(){var o;return wt(v.value,"".concat(v.value,"-").concat(t.direction),(o={},y(o,"".concat(v.value,"-rtl"),m.value==="rtl"),y(o,"".concat(v.value,"-align-").concat(x.value),x.value),o))}),b=B(function(){return m.value==="rtl"?"marginLeft":"marginRight"}),N=B(function(){var o={};return T.value&&(o.columnGap="".concat(z.value,"px"),o.rowGap="".concat(C.value,"px")),w(w({},o),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-C.value,"px")})});return function(){var o,d,A=t.wrap,k=t.direction,W=k===void 0?"horizontal":k,f=kt((o=i.default)===null||o===void 0?void 0:o.call(i)),n=f.length;if(n===0)return null;var e=(d=i.split)===null||d===void 0?void 0:d.call(i),s="".concat(v.value,"-item"),l=z.value,u=n-1;return E("div",{class:p.value,style:N.value},[f.map(function(_,I){var c={};return T.value||(W==="vertical"?I<u&&(c={marginBottom:"".concat(l/(e?2:1),"px")}):c=w(w({},I<u&&y({},b.value,"".concat(l/(e?2:1),"px"))),A&&{paddingBottom:"".concat(C.value,"px")})),E(_t,null,[E("div",{class:s,style:c},[_]),I<u&&e&&E("span",{class:"".concat(s,"-split"),style:c},[e])])})])}}});const Ht=At(Ft);export{Gt as B,Ht as _};
