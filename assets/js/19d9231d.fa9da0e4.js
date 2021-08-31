(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[38],{3667:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var r=t(9603),n=t(120),o=(t(7378),t(5318)),s=["components"],l={id:"redux-plugins",title:"Redux Plugins",sidebar_label:"Redux Plugins",slug:"/recipes/redux-plugins/"},p=void 0,i={unversionedId:"recipes/redux-plugins",id:"recipes/redux-plugins",isDocsHomePage:!1,title:"Redux Plugins",description:"Adding existing Redux Libraries to your Store",source:"@site/../docs/recipes/redux-plugins.md",sourceDirName:"recipes",slug:"/recipes/redux-plugins/",permalink:"/docs/recipes/redux-plugins/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/recipes/redux-plugins.md",tags:[],version:"current",frontMatter:{id:"redux-plugins",title:"Redux Plugins",sidebar_label:"Redux Plugins",slug:"/recipes/redux-plugins/"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/recipes/testing/"},next:{title:"From Redux to Rematch",permalink:"/docs/migrating-from-redux-to-rematch"}},c=[{value:"Adding existing Redux Libraries to your Store",id:"adding-existing-redux-libraries-to-your-store",children:[]},{value:"Including middleware",id:"including-middleware",children:[]}],d={toc:c};function m(e){var a=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"adding-existing-redux-libraries-to-your-store"},"Adding existing Redux Libraries to your Store"),(0,o.kt)("p",null,"Most reducers from libraries operate on a private store slice. The easiest way to build functionality on top of these reducers is to create a model for that store slice."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"baseReducer")," option on a store model allows you to introduce a standard redux reducer that will compute the base state of that model. By combining this with ",(0,o.kt)("inlineCode",{parentName:"p"},"effects"),", you can create a public API over the original redux reducer. These effects can be listened for and tracked."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { bindActionCreators } "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"redux"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  routerReducer,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  push,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  replace,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  go,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  goBack,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  goForward,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"react-router-redux"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"reactRouterModel"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  baseReducer: routerReducer,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"effects"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"dispatch"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"bindActionCreators"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        push,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        replace,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        go,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        goBack,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        goForward,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      dispatch")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    ),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"};"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { bindActionCreators } "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"redux"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  routerReducer,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  push,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  replace,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  go,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  goBack,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  goForward,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"react-router-redux"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"reactRouterModel"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  baseReducer: routerReducer,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"effects"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},": ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"dispatch"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"bindActionCreators"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        push,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        replace,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        go,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        goBack,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        goForward,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      dispatch")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    ),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"};")))))),(0,o.kt)("h3",{id:"including-middleware"},"Including middleware"),(0,o.kt)("p",null,"Libraries like ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router")," also need middleware to work. Since we need both the model and the middleware configured with our store, the best place to do so would be a simple plugin."),(0,o.kt)("p",null,"This is as easy as returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," object that is merged into our store."),(0,o.kt)("p",null,"In our example, ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router")," uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," object that we'll need to be able to pass to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectedRouter"),". We can expose this value for use by attaching it to our store with ",(0,o.kt)("inlineCode",{parentName:"p"},"onInit()"),":"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { createBrowserHistory } "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"history"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { routerMiddleware } "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"react-router-redux"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," reactRouterModel "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"./model"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"default"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"function"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"createReactRouterPlugin"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"() {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"browserHistory"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"createBrowserHistory"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"middleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"routerMiddleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(browserHistory);")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    middleware,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    config: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      models: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        [storeKey]: reactRouterModel,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onStoreCreated"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        browserHistory,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      };")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  };")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { createBrowserHistory } "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"history"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { routerMiddleware } "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"react-router-redux"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," reactRouterModel "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"./model"'),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"default"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"function"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"createReactRouterPlugin"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"() {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"browserHistory"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"createBrowserHistory"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"();")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"middleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"routerMiddleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(browserHistory);")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    middleware,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    config: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      models: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        [storeKey]: reactRouterModel,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"onStoreCreated"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        browserHistory,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      };")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  };")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}")))))),(0,o.kt)("p",null,"Later, we can use our ",(0,o.kt)("inlineCode",{parentName:"p"},"history")),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"jsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"App"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  <"),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"Provider"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{store}>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"ConnectedRouter"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"history"),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{store.browserHistory} "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"children"),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{<"),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"Routes"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," />} />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  </"),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"Provider"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},");"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"jsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"App"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," () "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  <"),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"Provider"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{store}>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    <"),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"ConnectedRouter"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"history"),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{store.browserHistory} "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"children"),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{<"),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"Routes"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," />} />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  </"),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"Provider"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},");")))))))}m.isMDXComponent=!0},5318:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return N}});var r=t(7378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),i=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),N=n,k=m["".concat(p,".").concat(N)]||m[N]||d[N]||o;return t?r.createElement(k,s(s({ref:a},c),{},{components:t})):r.createElement(k,s({ref:a},c))}));function N(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);