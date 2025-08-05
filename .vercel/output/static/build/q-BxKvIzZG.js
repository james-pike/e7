import{u as d,q as p,D as g,a as P,A as y,o as c,C as S,j as h,k as j,m as f,S as O,_hW as v}from"./q-Dx8tRpk-.js";import{_ as s}from"./q-CSnWScGr.js";import{p as b,E as T}from"./q-BBZFiYbT.js";import{u as E}from"./q-B4mUf6N_.js";const w=e=>{var o,n;for(;e!=null&&e.parentElement;){if(((o=e.parentElement)==null?void 0:o.tagName)==="DIALOG"||(n=e.parentElement)!=null&&n.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_ggVMqu8lUQ8:w},Symbol.toStringTag,{value:"Module"})),R=async({track:e,cleanup:o})=>{var _;const[n,t,a,r]=d();e(()=>r.value),a.value=!0;const i=p(()=>s(()=>Promise.resolve().then(()=>I),void 0),"s_ggVMqu8lUQ8");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(_=n.panelRef)!=null&&_.value&&(await i(n.panelRef.value)===null?l.appendChild(n.panelRef.value):t.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>{var u;return(u=n.panelRef)==null?void 0:u.value}))},k=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_eHfh0450YBk:R},Symbol.toStringTag,{value:"Module"})),H=e=>{g();const o=P(b),n=`${o.compId}-panel`,t={context:o,givenContextRef:o.panelRef},a=E(e.ref,t);y(p(()=>s(()=>Promise.resolve().then(()=>L),void 0),"s_0tHABB6BXZ4"));const r=c(!1),i=c(2),l=c(!1),_=c(!1);return i.value===1&&setTimeout(()=>{l.value=!0},0),S(p(()=>s(()=>Promise.resolve().then(()=>k),void 0),"s_eHfh0450YBk",[o,_,r,l])),h("div",{...e,id:n,ref:a,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[i.value===1&&f(T,null,3,"Wt_0"),f(O,null,3,"Wt_1")],onBeforeToggle$:[p(()=>s(()=>Promise.resolve().then(()=>B),void 0),"s_lV2aOOldxq8",[o]),e.onBeforeToggle$],onToggle$:[p(()=>s(()=>Promise.resolve().then(()=>D),void 0),"s_00QHj9170do",[o,_]),e.onToggle$],"document:onPopPolyLoad$":p(()=>s(()=>Promise.resolve().then(()=>V),void 0),"s_WEa7jw1HPtk",[i])},{popover:j((m,u)=>m.manual||u.popover==="manual"?"manual":"auto",[o,e])},0,"Wt_2")},G=Object.freeze(Object.defineProperty({__proto__:null,s_H5GV92crtCM:H},Symbol.toStringTag,{value:"Module"})),A=`/* This only applies when popover isn't supported */
@supports not selector(:popover-open) {
  /* The polyfill adds this class when popped out */
  [popover]:not(.\\:popover-open) {
    display: none;
  }
}

.popover-closing {
  display: block !important;
}

/* Strips the user agent styles from the popover when in floating mode */
@layer qwik-ui {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }
}

/** override the polyfill's layer, which gets dynamically imported later on. */
@layer popover-polyfill {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }
}
`,q=A,L=Object.freeze(Object.defineProperty({__proto__:null,s_0tHABB6BXZ4:q},Symbol.toStringTag,{value:"Module"})),x=async e=>{var t;const[o]=d();if(!((t=o.panelRef)!=null&&t.value))return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_lV2aOOldxq8:x},Symbol.toStringTag,{value:"Module"})),C=()=>{const[e]=d();if(e.value===0){e.value=1;return}},V=Object.freeze(Object.defineProperty({__proto__:null,s_WEa7jw1HPtk:C},Symbol.toStringTag,{value:"Module"})),M=e=>{var t,a,r;const[o,n]=d();o.isOpenSig.value=e.newState==="open",(t=o.panelRef)!=null&&t.value&&(a=o.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(r=o.panelRef)!=null&&r.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},D=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_00QHj9170do:M},Symbol.toStringTag,{value:"Module"}));export{v as _hW,G as p,M as s_00QHj9170do,q as s_0tHABB6BXZ4,H as s_H5GV92crtCM,C as s_WEa7jw1HPtk,R as s_eHfh0450YBk,w as s_ggVMqu8lUQ8,x as s_lV2aOOldxq8};
