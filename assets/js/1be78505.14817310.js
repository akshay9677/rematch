(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[9514,2695],{1316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(7378),a=n(5318),o=n(6130),c=n(5663),l=n(8944),i=n(1517),u=n(5006),s=n(653),d=n(2889),m=n(9603),p=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(3128),h=n(120),b=n(3298),v=n(4715),E=n(1312),g="menuLinkText_qtXE",y=["items"],C=["item"],Z=["item","onItemClick","activePath"],k=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,r.memo)((function(e){var t=e.items,n=(0,h.Z)(e,y);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(N,(0,m.Z)({key:t,item:e},n))})))}));function N(e){var t=e.item,n=(0,h.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:r.createElement(S,(0,m.Z)({item:t},n));case"link":default:return r.createElement(O,(0,m.Z)({item:t},n))}}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,c=(0,h.Z)(e,Z),u=n.items,s=n.label,d=n.collapsible,p=_(n,o),f=(0,i.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),b=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n])}({isActive:p,collapsed:b,setCollapsed:v}),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},r.createElement("a",(0,m.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[g]=!d,t)),onClick:d?function(e){e.preventDefault(),E()}:void 0,href:d?"#":void 0},c),s),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},r.createElement(T,{items:u,tabIndex:b?-1:0,onItemClick:a,activePath:o})))}function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(0,h.Z)(e,k),c=t.href,i=t.label,u=_(t,a);return r.createElement("li",{className:"menu__list-item",key:i},r.createElement(b.Z,(0,m.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},(0,v.Z)(c)&&{onClick:n},o),(0,v.Z)(c)?i:r.createElement("span",null,i,r.createElement(E.Z,null))))}var w="sidebar_2j-V",x="sidebarWithHideableNavbar_2fMR",I="sidebarHidden_1sUd",P="sidebarLogo_1OGv",j="menu_1Xkn",A="menuWithAnnouncementBar_1DU9",M="collapseSidebarButton_2Hma",B="collapseSidebarButtonIcon_1Kc0";function D(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",M),onClick:t},r.createElement(p,{className:B}))}function L(e){var t,n,a=e.path,o=e.sidebar,c=e.onCollapse,u=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,s.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),p=(0,i.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,i.nT)().isClosed;return r.createElement("div",{className:(0,l.Z)(w,(t={},t[x]=f,t[I]=u,t))},f&&r.createElement(d.Z,{tabIndex:-1,className:P}),r.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",j,(n={},n[A]=!b&&m,n))},r.createElement("ul",{className:"menu__list"},r.createElement(T,{items:o,activePath:a}))),h&&r.createElement(D,{onClick:c}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:"menu__list"},r.createElement(T,{items:n,activePath:a,onItemClick:function(){return t()}}))};function R(e){return r.createElement(i.Cv,{component:F,props:e})}var H=r.memo(L),W=r.memo(R);function z(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(H,e),a&&r.createElement(W,e))}var U=n(5151),V=n(2695),q=n(9635),X="backToTopButton_2PbN",Y="backToTopButtonShow_7uc0";function K(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,q.TH)(),n=K(),a=n.smoothScrollTop,o=n.cancelScrollToTop,c=(0,r.useState)(!1),i=c[0],u=c[1];return(0,s.Z)((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||o(),n<300)u(!1);else if(r){var a=document.documentElement.scrollHeight;n+window.innerHeight<a&&u(!0)}else u(!1)}}),[t]),r.createElement("button",{className:(0,l.Z)("clean-btn",X,(e={},e[Y]=i,e)),type:"button",onClick:function(){return a()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Q={docPage:"docPage_3jyA",docMainContainer:"docMainContainer_28SP",docSidebarContainer:"docSidebarContainer_3jRz",docMainContainerEnhanced:"docMainContainerEnhanced_YA74",docSidebarContainerHidden:"docSidebarContainerHidden_2b_F",collapsedDocSidebar:"collapsedDocSidebar_KeEu",expandSidebarButtonIcon:"expandSidebarButtonIcon_1pq6",docItemWrapperEnhanced:"docItemWrapperEnhanced_2IZb"};function J(e){var t,n,o,u=e.currentDocRoute,s=e.versionMetadata,d=e.children,m=s.pluginId,h=s.version,b=u.sidebar,v=b?s.docsSidebars[b]:void 0,E=(0,r.useState)(!1),g=E[0],y=E[1],C=(0,r.useState)(!1),Z=C[0],k=C[1],_=(0,r.useCallback)((function(){Z&&k(!1),y(!g)}),[Z]);return r.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(m,h)}},r.createElement("div",{className:Q.docPage},r.createElement(G,null),v&&r.createElement("aside",{className:(0,l.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&k(!0)}},r.createElement(z,{key:b,sidebar:v,path:u.path,onCollapse:_,isHidden:Z}),Z&&r.createElement("div",{className:Q.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},r.createElement(p,{className:Q.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,l.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!v,n))},r.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=g,o))},r.createElement(a.Zo,{components:U.Z},d)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,c=t.find((function(e){return(0,q.LX)(a.pathname,e)}));return c?r.createElement(J,{currentDocRoute:c,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n})):r.createElement(V.default,e)}},2312:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(120),a=n(9603),o=n(7378),c=n(8944),l=n(3128),i=n(1517),u="anchorWithStickyNavbar_23Bc",s="anchorWithHideOnScrollNavbar_3Dj-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,a=e.id,m=(0,r.Z)(e,d),p=(0,i.LU)().navbar.hideOnScroll;return a?o.createElement(t,m,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor","anchor__"+t,(n={},n[s]=p,n[u]=!p,n)),id:a}),m.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,m)});var t}},2695:function(e,t,n){"use strict";n.r(t);var r=n(7378),a=n(5663),o=n(3128);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},5151:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(7378),a=n(9603),o=n(120);var c=n(3128),l=["children"],i=function(e){var t=e.children,n=(0,o.Z)(e,l),i=(0,r.useRef)(null),u=(0,r.useState)(!1),s=u[0],d=u[1];return r.createElement("pre",(0,a.Z)({},n,{ref:i}),t,r.createElement("button",{type:"button","aria-label":(0,c.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){i.current&&function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(u){}a.remove(),l&&(c.removeAllRanges(),c.addRange(l)),o&&o.focus()}(Array.from(i.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),d(!0),setTimeout((function(){return d(!1)}),2e3)}},s?r.createElement(c.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(c.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))},u=n(5684),s=n(3298),d=n(2312),m=n(8944),p=n(1517),f="details_SL1Q";function h(e){var t=Object.assign({},e);return r.createElement(p.PO,(0,a.Z)({},t,{className:(0,m.Z)("alert alert--info",f,t.className)}))}var b=["mdxType","originalType"];var v={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,c=(a.mdxType,a.originalType,(0,o.Z)(a,b));return r.createElement(e.props.originalType,c)}return e}(e)}));return r.createElement(u.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(i,e):r.createElement("code",e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(i,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(h,(0,a.Z)({},e,{summary:n}),o)},h1:(0,d.Z)("h1"),h2:(0,d.Z)("h2"),h3:(0,d.Z)("h3"),h4:(0,d.Z)("h4"),h5:(0,d.Z)("h5"),h6:(0,d.Z)("h6")},E=Object.assign({},v,{div:function(e){return"shiki-twoslash-fragment"===e.className?r.createElement(r.Fragment,null,e.children):r.createElement("div",e)},pre:function(e){return r.createElement(i,e)},code:function(e){return r.createElement("code",e)}})},5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);