import{_ as u}from"./q-CSnWScGr.js";import{o as g,q as c,C as O,A as C,a as z,i as V,L as Y,r as R,d as X,j as A,k as T,l as Q,m as Z,S as W,u as f,_hW as h}from"./q-B9fC_Bzj.js";import{c as $,u as U}from"./q-XRwIn3Et.js";const G=(t,e)=>{const a=g();return c(()=>u(()=>import("./q-DTjcNr1Q.js"),[]),"s_dNWPw1faXSM",[e,t,a])};function N(t){const e=g(),a=g({x:0,y:0,z:0}),o=g(null),n=g(!1),i=g(!1),r=g(!0),s=g();O(c(()=>u(()=>import("./q-BTSQchfh.js").then(_=>_.c),[]),"s_0rlL7wZNOGI",[t]));const v={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:d,scroll:p,client:S,size:b}=v[t.orientationSig.value],P=c(()=>u(()=>import("./q-BTSQchfh.js").then(_=>_.b),[]),"s_illqOa6d6lo",[t,d,a]),w=c(()=>u(()=>import("./q-BTSQchfh.js").then(_=>_.a),[]),"s_m0QIhwQxpSI",[o,S,t,p]),M=c(()=>u(()=>import("./q-BTSQchfh.js").then(_=>_.u),[]),"s_0JrO2T4q0RM",[t,s,r]);return{startPosSig:e,transformSig:a,boundariesSig:o,isMouseDownSig:n,isTouchDeviceSig:i,isInitialTransitionSig:r,setTransform:P,setBoundaries:w,setTransition:M,setInitialSlidePos:c(()=>u(()=>import("./q-BTSQchfh.js").then(_=>_.e),[]),"s_8RSWIfYFvNE",[t,P,M,a]),orientationProps:v,getSlidePosition:c(()=>u(()=>import("./q-BTSQchfh.js").then(_=>_.d),[]),"s_vYh0F8jRIm8",[S,t,p,b])}}const we=t=>{C(c(()=>u(()=>Promise.resolve().then(()=>he),void 0),"s_uLNXQVayhP8"));const e=z($),a=V(t,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),o=g(!1),n=g(!0),i=g(!1),r=g(!0),s=g(!1),v=U(e),d=N(e),p=c(()=>u(()=>Promise.resolve().then(()=>ee),void 0),"s_pkyP1rttKI4",[e,o,d]),S=c(()=>u(()=>Promise.resolve().then(()=>ce),void 0),"s_7DCpkSyQItU",[e,p,o,n,i,d]),b=c(()=>u(()=>Promise.resolve().then(()=>oe),void 0),"s_3XAOiLVo1JY",[e,S,p,o,d]);O(c(()=>u(()=>Promise.resolve().then(()=>B),void 0),"s_ISa0TC0f0js",[e,p,o,n,d]));const P=c(()=>u(()=>Promise.resolve().then(()=>ve),void 0),"s_rQzzfo0jW0Y",[e,d]),w=c(()=>u(()=>Promise.resolve().then(()=>ae),void 0),"s_X2qHtq5iZps",[e,n,i,d]),M=G(d.setTransform,1),E=c(()=>u(()=>Promise.resolve().then(()=>re),void 0),"s_mw0xp31ZbLM",[e,M,n,d]);Y("resize",P),O(c(()=>u(()=>Promise.resolve().then(()=>F),void 0),"s_JtYZ0DkQwGY",[e,r,s]));const q=c(()=>u(()=>Promise.resolve().then(()=>le),void 0),"s_EZCkGXjZ7sU",[v,e]);O(c(()=>u(()=>Promise.resolve().then(()=>ge),void 0),"s_0FVgrRqk3vE",[r]));let _=0,j=0,y=null,I=null;const k=R(l=>{const m=l.touches[0];!m||(y=l.target.closest("[data-qui-carousel-scroller]"),!y)||(I=y.getAttribute("data-orientation"),_=m.clientX,j=m.clientY)},'e=>{const touch=e.touches[0];if(!touch)return;const target=e.target;activeCarousel=target.closest("[data-qui-carousel-scroller]");if(!activeCarousel)return;carouselOrientation=activeCarousel.getAttribute("data-orientation");touchStartX=touch.clientX;touchStartY=touch.clientY;}'),L=R(l=>{if(!y||!I)return;const m=l.touches[0];if(!m)return;const x=Math.abs(m.clientX-_),D=Math.abs(m.clientY-j);(I==="horizontal"&&x>D&&x>5||I==="vertical"&&D>x&&D>5)&&l.preventDefault()},'e=>{if(!activeCarousel||!carouselOrientation)return;const touch=e.touches[0];if(!touch)return;const deltaX=Math.abs(touch.clientX-touchStartX);const deltaY=Math.abs(touch.clientY-touchStartY);if(carouselOrientation==="horizontal"&&deltaX>deltaY&&deltaX>5){e.preventDefault();}else if(carouselOrientation==="vertical"&&deltaY>deltaX&&deltaY>5){e.preventDefault();}}');return X("div",{onMouseDown$:[b,t.onMouseDown$],onTouchStart$:[k,w,t.onTouchStart$],onTouchMove$:[L,E,t.onTouchMove$],onTouchEnd$:[S,t.onTouchEnd$],onQVisible$:s.value?d.setInitialSlidePos:void 0,onWheel$:q},{"data-qui-carousel-viewport":!0,"preventdefault:wheel":T(l=>l.isMouseWheelSig.value,[e])},A("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return i.value?"":void 0},get"data-initial"(){return s.value?"":void 0},get"data-orientation"(){return e.orientationSig.value},...a,children:Z(W,null,3,"B0_0")},{"data-qui-carousel-scroller":Q,"data-draggable":T(l=>l.isDraggableSig.value?"":void 0,[e]),"data-align":T(l=>l.alignSig.value,[e]),"data-initial-touch":T(l=>l.value?"":void 0,[i]),"data-initial":T(l=>l.value?"":void 0,[s]),"data-orientation":T(l=>l.orientationSig.value,[e])},0,null),0,"B0_1")},J=async function({track:e}){var d;const[a,o,n,i,r]=f();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(r.isTouchDeviceSig.value&&i.value||!a.scrollerRef.value||((d=a.scrollStartRef.value)==null||d.style.setProperty("--scroll-snap-align","none"),r.isMouseDownSig.value))return;const s=a.currentIndexSig.value,v=await r.getSlidePosition(s);await r.setTransition(!0),r.transformSig.value[r.orientationProps[a.orientationSig.value].direction]=-v,await r.setTransform(),window.removeEventListener("mousemove",o)},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_ISa0TC0f0js:J},Symbol.toStringTag,{value:"Module"})),H=()=>{const[t,e,a]=f();e.value&&(a.value=t.startIndexSig.value!==0&&t.startIndexSig.value!==void 0&&t.currentIndexSig.value!==0)},F=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_JtYZ0DkQwGY:H},Symbol.toStringTag,{value:"Module"})),K=async t=>{const[e,a,o]=f();if(!o.isMouseDownSig.value||o.startPosSig.value===void 0||!e.scrollerRef.value||!o.boundariesSig.value)return;const n=t[o.orientationProps[e.orientationSig.value].pagePosition],i=e.sensitivitySig.value.mouse,r=(o.startPosSig.value-n)*i,s=o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]-r;s>=o.boundariesSig.value.min&&s<=o.boundariesSig.value.max&&(o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]=s,await o.setTransition(!1),await o.setTransform()),o.startPosSig.value=n,a.value=!0},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_pkyP1rttKI4:K},Symbol.toStringTag,{value:"Module"})),te=async t=>{const[e,a,o,n,i]=f();e.isDraggableSig.value&&e.scrollerRef.value&&(await i.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await i.setBoundaries(),i.isMouseDownSig.value=!0,i.startPosSig.value=t.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),n.value=!1)},oe=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_3XAOiLVo1JY:te},Symbol.toStringTag,{value:"Module"})),ne=async t=>{const[e,a,o,n]=f();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],o.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},ae=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_X2qHtq5iZps:ne},Symbol.toStringTag,{value:"Module"})),ie=async t=>{const[e,a,o,n]=f();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const i=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],r=e.sensitivitySig.value.touch,s=(n.startPosSig.value-i)*r,v=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-s;v>=n.boundariesSig.value.min&&v<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=v,await a()),n.startPosSig.value=i,o.value=!0},re=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_mw0xp31ZbLM:ie},Symbol.toStringTag,{value:"Module"})),se=async t=>{const[e,a]=f();if(!a.isDraggableSig.value||!a.scrollerRef.value||!a.isMouseWheelSig.value)return;const o=e.validIndexesSig.value,n=a.currentIndexSig.value,i=o.indexOf(n),r=t.deltaY>0?1:-1,s=Math.max(0,Math.min(i+r,o.length-1));a.currentIndexSig.value=o[s]},le=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_EZCkGXjZ7sU:se},Symbol.toStringTag,{value:"Module"})),ue=async()=>{const[t,e,a,o,n,i]=f();if(!t.scrollerRef.value)return;const r=t.slideRefsArray.value,s=-i.transformSig.value[i.orientationProps[t.orientationSig.value].direction];let v=0,d=1/0;for(let S=0;S<r.length;S++){if(!r[S].value)continue;const P=await i.getSlidePosition(S),w=Math.abs(P-s);w<d&&(v=S,d=w)}const p=await i.getSlidePosition(v);await i.setTransition(!0),i.transformSig.value[i.orientationProps[t.orientationSig.value].direction]=-p,await i.setTransform(),t.currentIndexSig.value=v,i.isMouseDownSig.value=!1,a.value=!1,o.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},ce=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_7DCpkSyQItU:ue},Symbol.toStringTag,{value:"Module"})),de=async()=>{const[t,e]=f();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!t.scrollerRef.value))return;const o=await e.getSlidePosition(t.currentIndexSig.value);e.transformSig.value.x=-o,await e.setTransform(),t.scrollerRef.value.style.transition="none"},ve=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_rQzzfo0jW0Y:de},Symbol.toStringTag,{value:"Module"})),_e=()=>{const[t]=f();t.value=!1},ge=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_0FVgrRqk3vE:_e},Symbol.toStringTag,{value:"Module"})),Se=`@layer qwik-ui {
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
`,fe=Se,he=Object.freeze(Object.defineProperty({__proto__:null,s_uLNXQVayhP8:fe},Symbol.toStringTag,{value:"Module"}));export{h as _hW,_e as s_0FVgrRqk3vE,te as s_3XAOiLVo1JY,ue as s_7DCpkSyQItU,se as s_EZCkGXjZ7sU,we as s_I05Gwfl92hI,J as s_ISa0TC0f0js,H as s_JtYZ0DkQwGY,ne as s_X2qHtq5iZps,ie as s_mw0xp31ZbLM,K as s_pkyP1rttKI4,de as s_rQzzfo0jW0Y,fe as s_uLNXQVayhP8,G as u};
