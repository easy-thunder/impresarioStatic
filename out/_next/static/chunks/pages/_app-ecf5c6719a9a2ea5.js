(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5434)}])},3991:function(e,t){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let n="refresh",l="navigate",i="restore",s="server-patch",a="prefetch",c="fast-refresh",u="server-action";(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let o=r(8754),n=o._(r(7294)),l=r(4532),i=r(3353),s=r(1410),a=r(9064),c=r(370),u=r(9955),d=r(4224),f=r(508),h=r(1516),p=r(4266),_=r(3991),m=new Set;function v(e,t,r,o,n,l){if(!l&&!(0,i.isLocalURL)(t))return;if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(m.has(l))return;m.add(l)}let s=l?e.prefetch(t,n):e.prefetch(t,r,o);Promise.resolve(s).catch(e=>{})}function j(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let x=n.default.forwardRef(function(e,t){let r,o;let{href:s,as:m,children:x,prefetch:g=null,passHref:b,replace:y,shallow:C,scroll:E,locale:O,onClick:N,onMouseEnter:M,onTouchStart:A,legacyBehavior:P=!1,...k}=e;r=x,P&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let T=!1!==g,L=null===g?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,w=n.default.useContext(u.RouterContext),B=n.default.useContext(d.AppRouterContext),S=null!=w?w:B,R=!w,{href:I,as:F}=n.default.useMemo(()=>{if(!w){let e=j(s);return{href:e,as:m?j(m):e}}let[e,t]=(0,l.resolveHref)(w,s,!0);return{href:e,as:m?(0,l.resolveHref)(w,m):t||e}},[w,s,m]),z=n.default.useRef(I),H=n.default.useRef(F);P&&(o=n.default.Children.only(r));let U=P?o&&"object"==typeof o&&o.ref:t,[K,V,G]=(0,f.useIntersection)({rootMargin:"200px"}),J=n.default.useCallback(e=>{(H.current!==F||z.current!==I)&&(G(),H.current=F,z.current=I),K(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[F,U,I,G,K]);n.default.useEffect(()=>{S&&V&&T&&v(S,I,F,{locale:O},{kind:L},R)},[F,I,V,O,T,null==w?void 0:w.locale,S,R,L]);let W={ref:J,onClick(e){P||"function"!=typeof N||N(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,o,l,s,a,c,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](r,o,{shallow:s,locale:c,scroll:a}):t[l?"replace":"push"](o||r,{forceOptimisticNavigation:!d})};u?n.default.startTransition(p):p()}(e,S,I,F,y,C,E,O,R,T)},onMouseEnter(e){P||"function"!=typeof M||M(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(T||!R)&&v(S,I,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)},onTouchStart(e){P||"function"!=typeof A||A(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(T||!R)&&v(S,I,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)}};if((0,a.isAbsoluteUrl)(F))W.href=F;else if(!P||b||"a"===o.type&&!("href"in o.props)){let e=void 0!==O?O:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);W.href=t||(0,p.addBasePath)((0,c.addLocale)(F,e,null==w?void 0:w.defaultLocale))}return P?n.default.cloneElement(o,W):n.default.createElement("a",{...k,...W},r)}),g=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let o=r(7294),n=r(29),l="function"==typeof IntersectionObserver,i=new Map,s=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!l,[u,d]=(0,o.useState)(!1),f=(0,o.useRef)(null),h=(0,o.useCallback)(e=>{f.current=e},[]);(0,o.useEffect)(()=>{if(l){if(c||u)return;let e=f.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},s.push(r),i.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(o);let e=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!u){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,u,f.current]);let p=(0,o.useCallback)(()=>{d(!1)},[]);return[h,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5434:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var o=r(5893);r(4627);var n=r(7294),l=r(4179),i=r.n(l),s=r(1664),a=r.n(s);function c(){return(0,o.jsx)(n.Fragment,{children:(0,o.jsxs)("div",{className:"".concat(i().footer," whiteText"),children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:i().borderBottom2,children:"Contact"}),(0,o.jsx)(a(),{href:"/Contact/Employment",children:(0,o.jsx)("h4",{children:"Employment"})}),(0,o.jsx)("h4",{children:"(720) 773-1934"}),(0,o.jsx)("h4",{children:"jddiehl17@gmail.com"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:i().borderBottom3,children:"Services"}),(0,o.jsx)(a(),{href:"/Buy/SEO",children:(0,o.jsx)("h4",{children:"SEO"})}),(0,o.jsx)(a(),{href:"/Buy/BuildSite",children:(0,o.jsx)("h4",{children:"Build Site"})}),(0,o.jsx)(a(),{href:"/WebsiteEducation",children:(0,o.jsx)("h4",{children:"Educate"})}),(0,o.jsx)("h4",{children:"IOT- coming soon"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:i().borderBottom4,children:"Resources"}),(0,o.jsx)("h4",{children:"site map-coming soon"}),(0,o.jsx)(a(),{href:"/FAQ",children:(0,o.jsx)("h4",{children:"FAQ"})})]})]})})}var u=r(3286),d=r.n(u),f=r(5468),h=r.n(f);function p(){return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("div",{className:h().vertical,style:{color:"#243972"}}),(0,o.jsx)("div",{className:h().horizontalBottom,style:{color:"#243972"}}),(0,o.jsx)("div",{className:h().horizontalTop,style:{color:"#243972"}}),(0,o.jsx)("div",{className:h().horizontalMiddle,style:{color:"#243972"}}),(0,o.jsx)("div",{className:h().topCurve,style:{color:"#243972"}}),(0,o.jsx)("div",{className:h().bottomCurve,style:{color:"#243972"}})]})}),(0,o.jsxs)("div",{className:h().marginPastLogo,children:[(0,o.jsx)("h4",{className:"bold",children:"Impresario"}),(0,o.jsx)("h4",{children:"Entrepreneurial"}),(0,o.jsx)("h4",{children:"Solutions"})]})]}),(0,o.jsx)("div",{children:(0,o.jsx)(a(),{href:"/Buy/BuildSite",children:(0,o.jsxs)("h6",{className:"lighter transitionCenter",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"icon",children:[(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"}),(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.867 19.125h.008v.008h-.008v-.008z"})]}),(0,o.jsx)("div",{className:h().space,children:" "}),"Build"]})})}),(0,o.jsx)(a(),{href:"/WebsiteEducation",children:(0,o.jsxs)("h6",{className:"lighter transitionCenter",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"icon",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"})}),(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}),(0,o.jsx)("div",{className:h().space,children:" "}),"Educate"]})}),(0,o.jsx)(a(),{href:"/Buy/SEO",children:(0,o.jsxs)("h6",{className:"lighter transitionCenter",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"icon",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"})}),(0,o.jsx)("div",{className:h().space,children:" "}),"\xa0SEO"]})}),(0,o.jsx)("div",{className:""})]})}function _(){return(0,o.jsx)("header",{className:d().header,children:(0,o.jsx)(p,{})})}let m=(0,n.createContext)({blurOn:e=>{},blurOff:e=>{},blur:!1});function v(e){let[t,r]=(0,n.useState)(!1);return(0,o.jsx)(m.Provider,{value:{blur:t,blurOn:function(){return r(()=>!0)},blurOff:function(){return r(()=>!1)}},children:e.children})}let{Fragment:j}=r(7294);function x(e){let t=(0,n.useContext)(m),r=t.blur;return(0,o.jsx)(j,{children:(0,o.jsxs)("div",{className:r?"blur":null,children:[(0,o.jsx)(_,{}),(0,o.jsx)("main",{children:e.children}),(0,o.jsx)(c,{})]})})}function g(e){let{Component:t,pageProps:r}=e;return(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(v,{children:(0,o.jsx)(x,{children:(0,o.jsx)(t,{...r})})})})}},4627:function(){},4179:function(e){e.exports={footer:"Footer_footer__2MMdT",borderBottom2:"Footer_borderBottom2__26YAa",borderBottom3:"Footer_borderBottom3___G5yu",borderBottom4:"Footer_borderBottom4__cJdan"}},5468:function(e){e.exports={vertical:"logo_vertical___Y9Rj",horizontalBottom:"logo_horizontalBottom__OiLgx",horizontalTop:"logo_horizontalTop__gG5GJ",horizontalMiddle:"logo_horizontalMiddle__TLUUH",right1em:"logo_right1em__AqH9K",topCurve:"logo_topCurve__p9uMJ",bottomCurve:"logo_bottomCurve__B_89G",marginPastLogo:"logo_marginPastLogo___4Koa",marginPastLogoTitle:"logo_marginPastLogoTitle__n8bj_",services:"logo_services__FGck1",account:"logo_account__aM76E",marginPastServices:"logo_marginPastServices__ZJjvQ",marginPastLogoAccount:"logo_marginPastLogoAccount__kJoXe",space:"logo_space__BtY9F",iMove:"logo_iMove__ddx74"}},3286:function(e){e.exports={header:"mainHeader_header__AtYFG"}},1664:function(e,t,r){e.exports=r(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);