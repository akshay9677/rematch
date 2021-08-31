(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[1218],{5805:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7378),o=n(1542);e.default=function(t){var e=i.useRef(null),n=i.useRef(null),r=i.useState(!1),s=r[0],l=r[1];i.useLayoutEffect((function(){if(n.current){var t=n.current.ownerDocument;return t&&(e.current=t.createElement("div"),t.body.appendChild(e.current),l(!0)),function(){e.current&&t&&t.body.removeChild(e.current)}}}),[]);var u=t.onReady;return i.useEffect((function(){s&&u&&u()}),[s,u]),e.current?o.createPortal(t.children,e.current):i.createElement("span",{ref:n})}},7373:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7378),o={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:80,display:"block",cursor:"default",background:"transparent"};e.default=function(){return i.createElement("div",{style:o})}},4649:function(t,e,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(7378),r=n(5805),s=n(7373),l={isMounting:!1,isIdle:!1,isVisible:!1,isFocused:!1,isLeaving:!1,isDismissed:!1,isTransitioningOut:!1};function u(t,e){switch(e.type){case"CANCEL_TRANSITIONING_OUT":return i(i({},t),{isTransitioningOut:!1});case"TRIGGER_SHOW":return{isMounting:!0,isIdle:!1,isFocused:!1,isLeaving:!1,isDismissed:!1,isVisible:!1,isTransitioningOut:!1};case"PORTAL_MOUNTED":return{isMounting:!1,isIdle:!1,isFocused:!1,isLeaving:!1,isDismissed:!1,isVisible:!0,isTransitioningOut:!1};case"TRANSITION_OUT_START":return i(i({},t),{isTransitioningOut:!0});case"TRANSITION_OUT_COMPLETE":return i(i({},t),{isTransitioningOut:!1});case"TRIGGER_HIDE":return{isMounting:!1,isIdle:!1,isFocused:!1,isLeaving:!1,isDismissed:!0,isVisible:!1,isTransitioningOut:!1};default:return t}}e.default=function(t){var e=o.useRef(null),n=o.useRef(void 0),d=o.useRef(void 0),f=o.useRef(void 0),v=o.useReducer(u,l),h=v[0],p=v[1],m=o.useState({})[1];o.useEffect((function(){function t(){m({})}return window.addEventListener("wheel",t),function(){window.removeEventListener("wheel",t)}}),[h.isVisible]);var g=t.trigger||"hover",T=t.triggerDelay||0,w=t.hideTrigger||"mouseleave",O=t.hideDelay||0,E=t.transitionOutMs||0,b=o.useCallback((function(t,n){void 0===n&&(n=0),clearTimeout(e.current),n?(p({type:"TRANSITION_OUT_START"}),e.current=setTimeout((function(){clearTimeout(e.current),p({type:"TRANSITION_OUT_COMPLETE"}),t()}),n)):t()}),[]),y=o.useCallback((function(t,n){void 0===n&&(n=0),clearTimeout(e.current),n?e.current=setTimeout((function(){clearTimeout(e.current),t()}),n):t()}),[]),R=o.useCallback((function(t,n){void 0===n&&(n=0),clearTimeout(e.current),h.isVisible&&!h.isTransitioningOut||y(t,n)}),[h.isVisible,h.isTransitioningOut,y]),I=o.useCallback((function(){y((function(){b((function(){p({type:"TRIGGER_HIDE"})}),E)}),O)}),[y,b,E,O]),_=o.useCallback((function(){b((function(){p({type:"TRIGGER_HIDE"})}),E)}),[E,b]);o.useEffect((function(){var t,i,o,r,s,l,u={count:0,tolerance:150},c=n.current,a=d.current;function v(){R((function(){h.isTransitioningOut?(clearTimeout(e.current),p({type:"CANCEL_TRANSITIONING_OUT"})):(u.count+=1,p({type:"TRIGGER_SHOW"}))}),T)}function m(t){t.preventDefault(),t.stopPropagation(),R((function(){h.isTransitioningOut?(clearTimeout(e.current),p({type:"CANCEL_TRANSITIONING_OUT"})):p({type:"TRIGGER_SHOW"})}),T)}function O(){u.count--,setTimeout((function(){u.count&&I()}),u.tolerance)}function E(){u.count+=1}function b(t){var e,i,o,r=t.target,s=d.current,l=n.current,u=f.current;(null===(e=s)||void 0===e?void 0:e.contains(r))||(null===(i=l)||void 0===i?void 0:i.contains(r))||(null===(o=u)||void 0===o?void 0:o.contains(r))||I()}return"hover"===g&&(null===(t=a)||void 0===t||t.addEventListener("mouseenter",E),null===(i=c)||void 0===i||i.addEventListener("mouseenter",v)),"click"===g&&(null===(o=c)||void 0===o||o.addEventListener("click",m)),"mousedown"===g&&(null===(r=c)||void 0===r||r.addEventListener("mousedown",m)),"mouseleave"===w&&(null===(s=a)||void 0===s||s.addEventListener("mouseleave",O),null===(l=c)||void 0===l||l.addEventListener("mouseleave",O)),"click"===w&&window.addEventListener("click",b),function(){var t,e,n,i,o,r;null===(t=a)||void 0===t||t.removeEventListener("mouseleave",O),null===(e=a)||void 0===e||e.removeEventListener("mouseenter",E),null===(n=c)||void 0===n||n.removeEventListener("mouseenter",v),null===(i=c)||void 0===i||i.removeEventListener("mouseleave",O),null===(o=c)||void 0===o||o.removeEventListener("click",m),null===(r=c)||void 0===r||r.removeEventListener("mousedown",m),window.removeEventListener("click",b)}}),[h.isVisible,h.isTransitioningOut,g,T,w,E,b,R,y,I]);var L=o.useCallback((function(){p({type:"PORTAL_MOUNTED"})}),[]);function N(t,e,o,r,s,l){void 0===s&&(s=0),void 0===l&&(l=0);var u={position:"absolute",top:0,left:0,transform:"translate3d(0px, 0px, 0px)",zIndex:81},v=d.current,h=n.current,p=f.current;if(!t||!v){if("content"===e)return{style:i(i({},u),{visibility:"hidden"})};if("caret"===e)return{style:i(i({},u),{visibility:"hidden",transform:"translate3d(0px, 0px, 0px) rotate(45deg)"})}}if(v&&h){var m=function(t,e,n,i,o,r,s){void 0===i&&(i="auto");void 0===r&&(r=0);void 0===s&&(s=0);var l=a(t),u=a(e),d=n?a(n):c,f=a(document.documentElement),v=u.top-l.height-.5*d.height+r,h=u.top+u.height+.5*d.height-r,p=u.left,m=u.left+u.width-l.width,g=u.left+.5*u.width-.5*l.width,T=u.top+.5*u.height-.5*l.height,w=u.left-l.width-.5*d.width+1+s,O=u.left+u.width+.5*d.width-1-s,E=i;if("auto"===i){if(E=o||"top",v<f.scrollY&&E&&("top-start"===E&&(E="bottom-start"),"bottom-start"===E&&(E="top-start"),"top"===E&&(E="bottom")),h+l.height-f.scrollY>window.innerHeight&&("bottom-start"===E&&(E="top-start"),"bottom-end"===E&&(E="top-end"),"bottom"===E&&(E="top")),(E.includes("start")||E.includes("end"))&&(u.left+l.width>f.width+f.scrollX||u.left<f.scrollX)&&(E=E.split("-")[0]),"top"===E||"bottom"===E){var b=g-f.scrollX;b<f.left&&b+l.width<=f.width?E=E.concat("-start"):b+l.width>f.width&&b>=f.left&&(E=E.concat("-end"))}"left"===E&&u.left-d.width-l.width<f.scrollX&&u.left+u.width+d.width+l.width<f.width+f.scrollX&&(E="right"),"right"===E&&u.left+u.width+d.width+l.width>f.width+f.scrollX&&w-l.width+d.width>u.scrollX&&(E="left")}var y=u.left+.5*u.width,R={top:u.top-d.height+r,left:y,transform:{origin:"0 0",rotate:"45deg"}},I={top:u.top+u.height-r,left:y,transform:{origin:"30% 70%",rotate:"-135deg"}};return{top:{content:{top:v,left:g},caret:R},bottom:{content:{top:h,left:g},caret:I},left:{content:{top:T,left:w},caret:{top:u.top+.5*u.height,left:u.left-d.width+s,transform:{origin:"0 0",rotate:"-45deg"}}},right:{content:{top:T,left:O},caret:{top:u.top+.5*u.height,left:u.left+u.width-s,transform:{origin:"70% 30%",rotate:"135deg"}}},"top-start":{content:{top:v,left:p},caret:R},"top-end":{content:{top:v,left:m},caret:R},"bottom-start":{content:{top:h,left:p},caret:I},"bottom-end":{content:{top:h,left:m},caret:I}}[E]}(v,h,p,o,r,s,l);if("content"===e)return{style:i(i({},u),{transform:"translate3d("+m.content.left+"px, "+m.content.top+"px, 0px)"})};if("caret"===e)return{style:i(i({},u),{transformOrigin:m.caret.transform.origin,transform:"translate3d("+m.caret.left+"px, "+m.caret.top+"px, 0px) rotate("+m.caret.transform.rotate+")"})}}}function C(t,e,n){return o.cloneElement(t,i({ref:e},n))}var k=t.placement||"auto",A={isTransitioningOut:h.isTransitioningOut,onRequestClose:_};return o.createElement(o.Fragment,null,C(t.children,n),(h.isVisible||h.isMounting)&&t.content&&o.createElement(r.default,{onReady:L},h.isVisible&&!h.isTransitioningOut&&t.showTransparentUnderlay&&o.createElement(s.default,null),o.createElement("div",i({},N(h.isVisible,"content",k,t.preferredAutoPlacement,t.verticalOffset,t.horizontalOffset)),C("function"==typeof t.content?t.content(A):t.content,d)),t.caret&&o.createElement("div",i({},N(h.isVisible,"caret",k,t.preferredAutoPlacement,t.verticalOffset,t.horizontalOffset)),C("function"==typeof t.caret?t.caret(A):t.caret,f))))};var c={top:0,left:0,height:0,width:0,scrollY:0,scrollX:0};function a(t){var e=t.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+i,left:e.left+n,height:e.height,width:e.width,scrollY:window.scrollY,scrollX:window.scrollX}}},1218:function(t,e,n){"use strict";var i=n(4649);e.Z=i.default}}]);