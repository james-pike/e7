import{_ as c}from"./q-CCVerxHA.js";import{d as g,R as u,q as D,o as C,E as z,a as X,w as V,g as R,M as Y,P as A,C as T,b as W,c as Z,X as Q,f as h,_hW as f}from"./q-Cf7NMI1Y.js";import{c as $,u as G}from"./q-C2Hl3XkQ.js";const N=(t,e)=>{const a=g();return u(()=>c(()=>import("./q-DJNyMWdV.js"),[]),"s_dNWPw1faXSM",[e,t,a])};function U(t){const e=g(),a=g({x:0,y:0,z:0}),o=g(null),n=g(!1),r=g(!1),i=g(!0),s=g();D(u(()=>c(()=>import("./q-D6Qrk259.js").then(v=>v.c),[]),"s_0rlL7wZNOGI",[t]));const d={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:_,scroll:p,client:S,size:b}=d[t.orientationSig.value],P=u(()=>c(()=>import("./q-D6Qrk259.js").then(v=>v.b),[]),"s_illqOa6d6lo",[t,_,a]),w=u(()=>c(()=>import("./q-D6Qrk259.js").then(v=>v.a),[]),"s_m0QIhwQxpSI",[o,S,t,p]),M=u(()=>c(()=>import("./q-D6Qrk259.js").then(v=>v.u),[]),"s_0JrO2T4q0RM",[t,s,i]);return{startPosSig:e,transformSig:a,boundariesSig:o,isMouseDownSig:n,isTouchDeviceSig:r,isInitialTransitionSig:i,setTransform:P,setBoundaries:w,setTransition:M,setInitialSlidePos:u(()=>c(()=>import("./q-D6Qrk259.js").then(v=>v.e),[]),"s_8RSWIfYFvNE",[t,P,M,a]),orientationProps:d,getSlidePosition:u(()=>c(()=>import("./q-D6Qrk259.js").then(v=>v.d),[]),"s_vYh0F8jRIm8",[S,t,p,b])}}const J=t=>{C(u(()=>c(()=>Promise.resolve().then(()=>pe),void 0),"s_uLNXQVayhP8"));const e=z($),a=X(t,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),o=g(!1),n=g(!0),r=g(!1),i=g(!0),s=g(!1),d=G(e),_=U(e),p=u(()=>c(()=>Promise.resolve().then(()=>te),void 0),"s_pkyP1rttKI4",[e,o,_]),S=u(()=>c(()=>Promise.resolve().then(()=>de),void 0),"s_7DCpkSyQItU",[e,p,o,n,r,_]),b=u(()=>c(()=>Promise.resolve().then(()=>ne),void 0),"s_3XAOiLVo1JY",[e,S,p,o,_]);D(u(()=>c(()=>Promise.resolve().then(()=>B),void 0),"s_ISa0TC0f0js",[e,p,o,n,_]));const P=u(()=>c(()=>Promise.resolve().then(()=>ve),void 0),"s_rQzzfo0jW0Y",[e,_]),w=u(()=>c(()=>Promise.resolve().then(()=>re),void 0),"s_X2qHtq5iZps",[e,n,r,_]),M=N(_.setTransform,1),x=u(()=>c(()=>Promise.resolve().then(()=>se),void 0),"s_mw0xp31ZbLM",[e,M,n,_]);V("resize",P),D(u(()=>c(()=>Promise.resolve().then(()=>K),void 0),"s_JtYZ0DkQwGY",[e,i,s]));const q=u(()=>c(()=>Promise.resolve().then(()=>ce),void 0),"s_EZCkGXjZ7sU",[d,e]);D(u(()=>c(()=>Promise.resolve().then(()=>Se),void 0),"s_0FVgrRqk3vE",[i]));let v=0,j=0,y=null,I=null;const k=R(l=>{const m=l.touches[0];!m||(y=l.target.closest("[data-qui-carousel-scroller]"),!y)||(I=y.getAttribute("data-orientation"),v=m.clientX,j=m.clientY)},'e=>{const touch=e.touches[0];if(!touch)return;const target=e.target;activeCarousel=target.closest("[data-qui-carousel-scroller]");if(!activeCarousel)return;carouselOrientation=activeCarousel.getAttribute("data-orientation");touchStartX=touch.clientX;touchStartY=touch.clientY;}'),L=R(l=>{if(!y||!I)return;const m=l.touches[0];if(!m)return;const O=Math.abs(m.clientX-v),E=Math.abs(m.clientY-j);(I==="horizontal"&&O>E&&O>5||I==="vertical"&&E>O&&E>5)&&l.preventDefault()},'e=>{if(!activeCarousel||!carouselOrientation)return;const touch=e.touches[0];if(!touch)return;const deltaX=Math.abs(touch.clientX-touchStartX);const deltaY=Math.abs(touch.clientY-touchStartY);if(carouselOrientation==="horizontal"&&deltaX>deltaY&&deltaX>5){e.preventDefault();}else if(carouselOrientation==="vertical"&&deltaY>deltaX&&deltaY>5){e.preventDefault();}}');return Y("div",{onMouseDown$:[b,t.onMouseDown$],onTouchStart$:[k,w,t.onTouchStart$],onTouchMove$:[L,x,t.onTouchMove$],onTouchEnd$:[S,t.onTouchEnd$],onQVisible$:s.value?_.setInitialSlidePos:void 0,onWheel$:q},{"data-qui-carousel-viewport":!0,"preventdefault:wheel":T(l=>l.isMouseWheelSig.value,[e])},A("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return r.value?"":void 0},get"data-initial"(){return s.value?"":void 0},get"data-orientation"(){return e.orientationSig.value},...a,children:Z(Q,null,3,"B0_0")},{"data-qui-carousel-scroller":W,"data-draggable":T(l=>l.isDraggableSig.value?"":void 0,[e]),"data-align":T(l=>l.alignSig.value,[e]),"data-initial-touch":T(l=>l.value?"":void 0,[r]),"data-initial":T(l=>l.value?"":void 0,[s]),"data-orientation":T(l=>l.orientationSig.value,[e])},0,null),0,"B0_1")},Te=Object.freeze(Object.defineProperty({__proto__:null,s_I05Gwfl92hI:J},Symbol.toStringTag,{value:"Module"})),H=async function({track:e}){const[a,o,n,r,i]=h();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(i.isTouchDeviceSig.value&&r.value||!a.scrollerRef.value||(a.scrollStartRef.value?.style.setProperty("--scroll-snap-align","none"),i.isMouseDownSig.value))return;const s=a.currentIndexSig.value,d=await i.getSlidePosition(s);await i.setTransition(!0),i.transformSig.value[i.orientationProps[a.orientationSig.value].direction]=-d,await i.setTransform(),window.removeEventListener("mousemove",o)},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_ISa0TC0f0js:H},Symbol.toStringTag,{value:"Module"})),F=()=>{const[t,e,a]=h();e.value&&(a.value=t.startIndexSig.value!==0&&t.startIndexSig.value!==void 0&&t.currentIndexSig.value!==0)},K=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_JtYZ0DkQwGY:F},Symbol.toStringTag,{value:"Module"})),ee=async t=>{const[e,a,o]=h();if(!o.isMouseDownSig.value||o.startPosSig.value===void 0||!e.scrollerRef.value||!o.boundariesSig.value)return;const n=t[o.orientationProps[e.orientationSig.value].pagePosition],r=e.sensitivitySig.value.mouse,i=(o.startPosSig.value-n)*r,s=o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]-i;s>=o.boundariesSig.value.min&&s<=o.boundariesSig.value.max&&(o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]=s,await o.setTransition(!1),await o.setTransform()),o.startPosSig.value=n,a.value=!0},te=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_pkyP1rttKI4:ee},Symbol.toStringTag,{value:"Module"})),oe=async t=>{const[e,a,o,n,r]=h();e.isDraggableSig.value&&e.scrollerRef.value&&(await r.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await r.setBoundaries(),r.isMouseDownSig.value=!0,r.startPosSig.value=t.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),n.value=!1)},ne=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_3XAOiLVo1JY:oe},Symbol.toStringTag,{value:"Module"})),ae=async t=>{const[e,a,o,n]=h();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],o.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},re=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_X2qHtq5iZps:ae},Symbol.toStringTag,{value:"Module"})),ie=async t=>{const[e,a,o,n]=h();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const r=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],i=e.sensitivitySig.value.touch,s=(n.startPosSig.value-r)*i,d=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-s;d>=n.boundariesSig.value.min&&d<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=d,await a()),n.startPosSig.value=r,o.value=!0},se=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_mw0xp31ZbLM:ie},Symbol.toStringTag,{value:"Module"})),le=async t=>{const[e,a]=h();if(!a.isDraggableSig.value||!a.scrollerRef.value||!a.isMouseWheelSig.value)return;const o=e.validIndexesSig.value,n=a.currentIndexSig.value,r=o.indexOf(n),i=t.deltaY>0?1:-1,s=Math.max(0,Math.min(r+i,o.length-1));a.currentIndexSig.value=o[s]},ce=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_EZCkGXjZ7sU:le},Symbol.toStringTag,{value:"Module"})),ue=async()=>{const[t,e,a,o,n,r]=h();if(!t.scrollerRef.value)return;const i=t.slideRefsArray.value,s=-r.transformSig.value[r.orientationProps[t.orientationSig.value].direction];let d=0,_=1/0;for(let S=0;S<i.length;S++){if(!i[S].value)continue;const P=await r.getSlidePosition(S),w=Math.abs(P-s);w<_&&(d=S,_=w)}const p=await r.getSlidePosition(d);await r.setTransition(!0),r.transformSig.value[r.orientationProps[t.orientationSig.value].direction]=-p,await r.setTransform(),t.currentIndexSig.value=d,r.isMouseDownSig.value=!1,a.value=!1,o.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},de=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_7DCpkSyQItU:ue},Symbol.toStringTag,{value:"Module"})),_e=async()=>{const[t,e]=h();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!t.scrollerRef.value))return;const o=await e.getSlidePosition(t.currentIndexSig.value);e.transformSig.value.x=-o,await e.setTransform(),t.scrollerRef.value.style.transition="none"},ve=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_rQzzfo0jW0Y:_e},Symbol.toStringTag,{value:"Module"})),ge=()=>{const[t]=h();t.value=!1},Se=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_0FVgrRqk3vE:ge},Symbol.toStringTag,{value:"Module"})),he=`@layer qwik-ui {
  [data-qui-carousel-viewport] {
    overflow: hidden;
  }

  [data-qui-carousel-scroller] {
    transform: var(--transform);
    will-change: transform;
    transition: 0.3s transform ease-out;

    display: flex;
    gap: var(--gap);
    flex-direction: var(--orientation);

    /* for initial slide position */
    scroll-snap-type: both mandatory;
    max-height: calc(var(--max-slide-height));
  }

  [data-qui-carousel-slide] {
    /* default, feel free to override */
    --total-gap-width: calc(var(--gap) * (var(--slides-per-view) - 1));
    --available-slide-width: calc(100% - var(--total-gap-width));
    --slide-width: calc(var(--available-slide-width) / var(--slides-per-view));

    flex-basis: var(--slide-width);
    flex-shrink: 0;
    position: relative;
  }

  [data-qui-carousel-scroller][data-initial] {
    overflow: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-qui-carousel-player] {
      display: none;
    }
  }

  /* workaround until scroll-snap-start is added to CSS */
  [data-qui-scroll-start] {
    --remove-flex-gap: calc(-1 * var(--gap) - 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    white-space: nowrap;
    visibility: hidden;
    display: none;
  }

  /* should not affect padding on non-scroller carousels */
  [data-qui-carousel-scroller] [data-qui-scroll-start] {
    display: revert;
  }

  /* Offsetting the scroll-start - Horizontal orientation */
  [data-qui-scroll-start][data-orientation='horizontal'][data-start] {
    margin-right: var(--remove-flex-gap);
  }

  [data-qui-scroll-start][data-orientation='horizontal'][data-end] {
    margin-left: var(--remove-flex-gap);
  }

  /* Vertical orientation (remove start gap) */
  [data-qui-scroll-start][data-orientation='vertical'][data-start] {
    margin-top: var(--remove-flex-gap);
  }

  [data-qui-scroll-start]::before {
    content: '';
    height: 1px;
    width: 1px;
    display: block;
    /* changes to none on first interaction */
    scroll-snap-align: var(--scroll-snap-align, start);
  }

  /* position the marker to the start */
  [data-qui-scroll-start][data-start]::before {
    margin-top: calc(var(--remove-flex-gap) * -1);
  }

  /* position the marker to the end */
  [data-qui-scroll-start][data-end]::before {
    margin-top: calc(var(--remove-flex-gap) * 1);
  }

  /* center verically */
  [data-qui-scroll-start][data-center]::before {
    position: absolute;
    margin-top: -0.5px;
    inset: 50%;
  }

  /* remove the marker's snap-align on hover */
  [data-qui-carousel-scroller]:hover [data-qui-scroll-start]::before {
    scroll-snap-align: unset;
  }

  [data-initial] [hidden] {
    display: none;
  }
}
`,fe=he,pe=Object.freeze(Object.defineProperty({__proto__:null,s_uLNXQVayhP8:fe},Symbol.toStringTag,{value:"Module"}));export{f as _hW,Te as s,ge as s_0FVgrRqk3vE,oe as s_3XAOiLVo1JY,ue as s_7DCpkSyQItU,le as s_EZCkGXjZ7sU,J as s_I05Gwfl92hI,H as s_ISa0TC0f0js,F as s_JtYZ0DkQwGY,ae as s_X2qHtq5iZps,ie as s_mw0xp31ZbLM,ee as s_pkyP1rttKI4,_e as s_rQzzfo0jW0Y,fe as s_uLNXQVayhP8,N as u};
