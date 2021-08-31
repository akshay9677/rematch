(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[2178],{6056:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=a(9603),n=a(120),o=(a(7378),a(5318)),i=["components"],s={id:"index",title:"Rematch API Reference",sidebar_label:"Introduction",slug:"/api-reference/"},p=void 0,l={unversionedId:"api-reference/index",id:"api-reference/index",isDocsHomePage:!1,title:"Rematch API Reference",description:"The API exposed by Rematch is very simple and it is based around the init method. It creates and returns a Rematch store, which is essentially a Redux store with a few additional properties and extra features.",source:"@site/../docs/api-reference/index.md",sourceDirName:"api-reference",slug:"/api-reference/",permalink:"/docs/api-reference/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Rematch API Reference",sidebar_label:"Introduction",slug:"/api-reference/"},sidebar:"docs",previous:{title:"TypeScript",permalink:"/docs/getting-started/typescript"},next:{title:"Models",permalink:"/docs/api-reference/models"}},c=[{value:"init(config)",id:"initconfig",children:[]}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The API exposed by Rematch is very simple and it is based around the ",(0,o.kt)("a",{parentName:"p",href:"#initconfig"},"init")," method. It creates and returns a ",(0,o.kt)("a",{parentName:"p",href:"store"},"Rematch store"),", which is essentially a ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"Redux store")," with a few additional properties and extra features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To use Rematch in your project, you need to understand how to define ",(0,o.kt)("a",{parentName:"li",href:"models"},"models")," that are passed to the init configuration."),(0,o.kt)("li",{parentName:"ul"},"If you are planning to migrate from the plain Redux setup or you want to make some changes to the Redux configuration,\ncheck out ",(0,o.kt)("a",{parentName:"li",href:"redux"},"init's Redux configuration"),"."),(0,o.kt)("li",{parentName:"ul"},"If you would like to develop a new plugin, see the ",(0,o.kt)("a",{parentName:"li",href:"plugins"},"Plugin API")," reference.")),(0,o.kt)("h2",{id:"initconfig"},"init(","[config]",")"),(0,o.kt)("p",null,"The function called to setup Rematch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("p",null,"Init accepts one argument - ",(0,o.kt)("strong",{parentName:"p"},"config"),", which is an object with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"]"," (",(0,o.kt)("em",{parentName:"p"},"string"),"): a name for your store. It might be useful when creating multiple stores. Default value is: ",(0,o.kt)("em",{parentName:"p"},'"Rematch Store {counter}"'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"models"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Object"),"): each model describes its part of the state, reducers and effects. This parameter is a mapping from models' names to their configuration. See ",(0,o.kt)("a",{parentName:"p",href:"models"},"Model API")," for details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Array"),"): plugins are special sets of configuration that can extend the functionality of your store. You can pass an array of plugins that you want to use in your store. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugins/"},"plugins")," developed by the Rematch team or the ",(0,o.kt)("a",{parentName:"p",href:"plugins"},"API for creating plugins"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"redux"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Object"),"): there are situations where you might want to access Redux configuration directly, e.g. to migrate existing redux project or add middlewares. See ",(0,o.kt)("a",{parentName:"p",href:"redux"},"Redux API")," for details."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,"(",(0,o.kt)("em",{parentName:"p"},"Object"),") Fully configured Redux store with extra properties and methods supplied by Rematch. See ",(0,o.kt)("a",{parentName:"p",href:"store"},"Store API")," for details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { init } "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@rematch/core"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"init"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"({")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  name: "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"my custom store name"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  models: { example1, example2 },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  plugins: [plugin1, plugin2],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  redux: customReduxConfig,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"});"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { init } "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"@rematch/core"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"init"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"({")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  name: "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"my custom store name"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  models: { example1, example2 },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  plugins: [plugin1, plugin2],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  redux: customReduxConfig,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"});")))))),(0,o.kt)("p",null,"For more comprehensive examples, visit ",(0,o.kt)("a",{parentName:"p",href:"/examples/"},"examples"),"."))}d.isMDXComponent=!0},5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);