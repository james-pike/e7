import{f as s,R as l,r as g,E as P,o as y,d as p,q as h,P as O,C as S,c as v,X as b,_hW as _}from"./q-D42ibeys.js";import{_ as a}from"./q-CF2Nn7YE.js";import{p as T,E}from"./q-DmwniWCa.js";import{u as j}from"./q-DybI-T2f.js";const R=e=>{for(;e?.parentElement;){if(e.parentElement?.tagName==="DIALOG"||e.parentElement?.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_ggVMqu8lUQ8:R},Symbol.toStringTag,{value:"Module"})),I=async({track:e,cleanup:o})=>{const[n,i,u,d]=s();e(()=>d.value),u.value=!0;const r=l(()=>a(()=>Promise.resolve().then(()=>w),void 0),"s_ggVMqu8lUQ8");let t=document.querySelector("div[data-qwik-ui-popover-polyfill]");t||(t=document.createElement("div"),t.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(t)),n.panelRef?.value&&(await r(n.panelRef.value)===null?t.appendChild(n.panelRef.value):i.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>n.panelRef?.value))},H=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_eHfh0450YBk:I},Symbol.toStringTag,{value:"Module"})),k=e=>{g();const o=P(T),n=`${o.compId}-panel`,i={context:o,givenContextRef:o.panelRef},u=j(e.ref,i);y(l(()=>a(()=>Promise.resolve().then(()=>L),void 0),"s_0tHABB6BXZ4"));const d=p(!1),r=p(2),t=p(!1),c=p(!1);return r.value===1&&setTimeout(()=>{t.value=!0},0),h(l(()=>a(()=>Promise.resolve().then(()=>H),void 0),"s_eHfh0450YBk",[o,c,d,t])),O("div",{...e,id:n,ref:u,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[r.value===1&&v(E,null,3,"Wt_0"),v(b,null,3,"Wt_1")],onBeforeToggle$:[l(()=>a(()=>Promise.resolve().then(()=>C),void 0),"s_lV2aOOldxq8",[o]),e.onBeforeToggle$],onToggle$:[l(()=>a(()=>Promise.resolve().then(()=>W),void 0),"s_00QHj9170do",[o,c]),e.onToggle$],"document:onPopPolyLoad$":l(()=>a(()=>Promise.resolve().then(()=>x),void 0),"s_WEa7jw1HPtk",[r])},{popover:S((m,f)=>m.manual||f.popover==="manual"?"manual":"auto",[o,e])},0,"Wt_2")},X=Object.freeze(Object.defineProperty({__proto__:null,s_H5GV92crtCM:k},Symbol.toStringTag,{value:"Module"})),A=`/* This only applies when popover isn't supported */
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
`,q=A,L=Object.freeze(Object.defineProperty({__proto__:null,s_0tHABB6BXZ4:q},Symbol.toStringTag,{value:"Module"})),B=async e=>{const[o]=s();if(!o.panelRef?.value)return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_lV2aOOldxq8:B},Symbol.toStringTag,{value:"Module"})),V=()=>{const[e]=s();if(e.value===0){e.value=1;return}},x=Object.freeze(Object.defineProperty({__proto__:null,s_WEa7jw1HPtk:V},Symbol.toStringTag,{value:"Module"})),M=e=>{const[o,n]=s();o.isOpenSig.value=e.newState==="open",o.panelRef?.value&&o.panelRef?.value.classList.contains(":popover-open")&&o.panelRef?.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_00QHj9170do:M},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,X as p,M as s_00QHj9170do,q as s_0tHABB6BXZ4,k as s_H5GV92crtCM,V as s_WEa7jw1HPtk,I as s_eHfh0450YBk,R as s_ggVMqu8lUQ8,B as s_lV2aOOldxq8};
