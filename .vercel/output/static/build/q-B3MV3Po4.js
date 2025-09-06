import{h as s,N as l,p as g,_ as P,n as y,g as p,o as h,I as O,E as S,f as v,r as b,_hW as _}from"./q-6LYnCcEd.js";import{_ as a}from"./q-fFn9hMSC.js";import{p as E,E as T}from"./q-DX7tWX0L.js";import{u as j}from"./q-zaXe3r0-.js";const w=e=>{for(;e?.parentElement;){if(e.parentElement?.tagName==="DIALOG"||e.parentElement?.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},I=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_ggVMqu8lUQ8:w},Symbol.toStringTag,{value:"Module"})),R=async({track:e,cleanup:o})=>{const[n,i,u,d]=s();e(()=>d.value),u.value=!0;const r=l(()=>a(()=>Promise.resolve().then(()=>I),void 0),"s_ggVMqu8lUQ8");let t=document.querySelector("div[data-qwik-ui-popover-polyfill]");t||(t=document.createElement("div"),t.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(t)),n.panelRef?.value&&(await r(n.panelRef.value)===null?t.appendChild(n.panelRef.value):i.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>n.panelRef?.value))},H=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_eHfh0450YBk:R},Symbol.toStringTag,{value:"Module"})),A=e=>{g();const o=P(E),n=`${o.compId}-panel`,i={context:o,givenContextRef:o.panelRef},u=j(e.ref,i);y(l(()=>a(()=>Promise.resolve().then(()=>L),void 0),"s_0tHABB6BXZ4"));const d=p(!1),r=p(2),t=p(!1),c=p(!1);return r.value===1&&setTimeout(()=>{t.value=!0},0),h(l(()=>a(()=>Promise.resolve().then(()=>H),void 0),"s_eHfh0450YBk",[o,c,d,t])),O("div",{...e,id:n,ref:u,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[r.value===1&&v(T,null,3,"Wt_0"),v(b,null,3,"Wt_1")],onBeforeToggle$:[l(()=>a(()=>Promise.resolve().then(()=>V),void 0),"s_lV2aOOldxq8",[o]),e.onBeforeToggle$],onToggle$:[l(()=>a(()=>Promise.resolve().then(()=>W),void 0),"s_00QHj9170do",[o,c]),e.onToggle$],"document:onPopPolyLoad$":l(()=>a(()=>Promise.resolve().then(()=>x),void 0),"s_WEa7jw1HPtk",[r])},{popover:S((m,f)=>m.manual||f.popover==="manual"?"manual":"auto",[o,e])},0,"Wt_2")},N=Object.freeze(Object.defineProperty({__proto__:null,s_H5GV92crtCM:A},Symbol.toStringTag,{value:"Module"})),k=`/* This only applies when popover isn't supported */
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
`,q=k,L=Object.freeze(Object.defineProperty({__proto__:null,s_0tHABB6BXZ4:q},Symbol.toStringTag,{value:"Module"})),B=async e=>{const[o]=s();if(!o.panelRef?.value)return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_lV2aOOldxq8:B},Symbol.toStringTag,{value:"Module"})),C=()=>{const[e]=s();if(e.value===0){e.value=1;return}},x=Object.freeze(Object.defineProperty({__proto__:null,s_WEa7jw1HPtk:C},Symbol.toStringTag,{value:"Module"})),M=e=>{const[o,n]=s();o.isOpenSig.value=e.newState==="open",o.panelRef?.value&&o.panelRef?.value.classList.contains(":popover-open")&&o.panelRef?.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_00QHj9170do:M},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,N as p,M as s_00QHj9170do,q as s_0tHABB6BXZ4,A as s_H5GV92crtCM,C as s_WEa7jw1HPtk,R as s_eHfh0450YBk,w as s_ggVMqu8lUQ8,B as s_lV2aOOldxq8};
