(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[5382],{6156:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(9603),r=a(120),o=(a(7378),a(5318)),i=["components"],s={id:"redux",title:"Redux",sidebar_label:"Redux",slug:"/api-reference/redux"},l=void 0,p={unversionedId:"api-reference/redux",id:"api-reference/redux",isDocsHomePage:!1,title:"Redux",description:"It is possible to customize Redux configuration provided by Rematch. To do that, provide your own configuration to the Rematch init method as config.redux property.",source:"@site/../docs/api-reference/redux.md",sourceDirName:"api-reference",slug:"/api-reference/redux",permalink:"/docs/api-reference/redux",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/redux.md",tags:[],version:"current",frontMatter:{id:"redux",title:"Redux",sidebar_label:"Redux",slug:"/api-reference/redux"},sidebar:"docs",previous:{title:"Models",permalink:"/docs/api-reference/models"},next:{title:"Store",permalink:"/docs/api-reference/store"}},c=[{value:"Configuration",id:"configuration",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is possible to customize Redux configuration provided by Rematch. To do that, provide your own configuration to the Rematch ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference#initconfig"},"init")," method as ",(0,o.kt)("inlineCode",{parentName:"p"},"config.redux")," property."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section is likely not helpful for you unless you are migrating from plain Redux, building your own plugin or adding middleware."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you just need to include a redux library in your store, see the recipe for ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/redux-plugins"},"redux plugins"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuration for Redux can be build using the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"initialState"),"]"," (",(0,o.kt)("em",{parentName:"p"},"any"),"): the initialState of your app. This is likely not necessary, as the state of your models will overwrite the initial state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"reducers"),"]"," (",(0,o.kt)("em",{parentName:"p"},"{ ","[string]",": (state, payload) => any }"),"): allows passing in reducer functions which are not part of a model. While not recommended, this can be used for migrating a Redux codebase or configuring different Redux extensions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"enhancers"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Redux.StoreEnhancer"),"): add enhancers to your store.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"middlewares"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Redux.Middleware"),"): add middleware to your store.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"rootReducers"),"]"," (",(0,o.kt)("em",{parentName:"p"},"{ ","[string]",": (state, payload) => any }"),"): a way to setup middleware hooks at the base of your root reducer. Unlike middleware, the return value is the next state. If ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", the state will fallback to the initial state of reducers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"combineReducers"),"]"," (",(0,o.kt)("em",{parentName:"p"},"reducers => reducer"),"): allows to overwrite Redux's ",(0,o.kt)("inlineCode",{parentName:"p"},"combineReducers")," method.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"createStore"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Redux.StoreCreator"),"): allows to overwrite Redux's ",(0,o.kt)("inlineCode",{parentName:"p"},"createStore")," method.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"devtoolOptions"),"]"," (",(0,o.kt)("em",{parentName:"p"},"Redux.DevtoolOptions"),"): provides access to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/master/packages/react-devtools"},"React Devtools")," options."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { init } "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@rematch/core"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"init"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"({")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  redux: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    initialState: { example: "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"12"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    reducers: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"someReducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"state"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"action"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"switch"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," (action.type) {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"          "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"default"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},":")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," state;")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        }")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    enhancers: ["),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"customEnhancer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"()],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    middlewares: ["),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"customMiddleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"()],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    rootReducers: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"RESET"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"state"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"action"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {},")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    combineReducers: customCombineReducers,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    createStore: customCreateStore,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    devtoolOptions: customDevtoolOptions,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"});"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { init } "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"@rematch/core"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"init"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"({")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  redux: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    initialState: { example: "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"12"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    reducers: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"someReducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"state"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"action"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"switch"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," (action.type) {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"          "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"default"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},":")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," state;")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        }")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    enhancers: ["),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"customEnhancer"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"()],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    middlewares: ["),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"customMiddleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"()],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    rootReducers: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"RESET"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},": ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"state"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"action"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {},")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    combineReducers: customCombineReducers,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    createStore: customCreateStore,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    devtoolOptions: customDevtoolOptions,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"});")))))))}m.isMDXComponent=!0},5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),N=r,k=m["".concat(l,".").concat(N)]||m[N]||d[N]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);