"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2964],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||c;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4353:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],s={title:"[React] React.memo",tags:["react"]},l=void 0,i={unversionedId:"React/react-react-memo",id:"React/react-react-memo",isDocsHomePage:!1,title:"[React] React.memo",description:"React.memo \u662f\u4e00\u500b HOC\uff0c\u662f\u70ba\u4e86\u907f\u514d\u5728 props \u4e0d\u8b8a\u7684\u72c0\u6cc1\u4e0b\u56e0\u70ba\u7236\u5c64\u66f4\u65b0\u800c\u5c0e\u81f4\u5b50\u5c64\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u3002",source:"@site/docs/React/react-react-memo.md",sourceDirName:"React",slug:"/React/react-react-memo",permalink:"/docs/React/react-react-memo",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/React/react-react-memo.md",tags:[{label:"react",permalink:"/docs/tags/react"}],version:"current",frontMatter:{title:"[React] React.memo",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"[Hook] useEffect",permalink:"/docs/React/hook-useeffect"},next:{title:"[Yarn] workspaces",permalink:"/docs/NPM/yarn-workspaces"}},p=[{value:"shallow compare",id:"shallow-compare",children:[{value:"areEqual",id:"areequal",children:[]}]},{value:"state \u66f4\u65b0",id:"state-\u66f4\u65b0",children:[]},{value:"Ref",id:"ref",children:[]}],m={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"React.memo")," \u662f\u4e00\u500b HOC\uff0c\u662f\u70ba\u4e86\u907f\u514d\u5728 props \u4e0d\u8b8a\u7684\u72c0\u6cc1\u4e0b\u56e0\u70ba\u7236\u5c64\u66f4\u65b0\u800c\u5c0e\u81f4\u5b50\u5c64\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u3002"),(0,c.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"React document"),(0,c.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u7684 function component \u6bcf\u6b21\u5f97\u5230\u76f8\u540c prop \u7684\u6642\u5019\u90fd\u6703 render \u76f8\u540c\u7d50\u679c\uff0c\u4f60\u53ef\u4ee5\u5c07\u5176\u5305\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e4b\u4e2d\uff0c\u900f\u904e\u5feb\u53d6 render \u7d50\u679c\u4f86\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u52a0\u901f\u3002\u9019\u8868\u793a React \u6703\u8df3\u904e render \u9019\u500b component\uff0c\u4e26\u76f4\u63a5\u91cd\u7528\u4e0a\u6b21\u7684 render \u7d50\u679c\u3002 ")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const UseReactMemo = React.memo(({description}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{description} {renderTimes.current}</h2>\n  )\n})\n\nconst NoReactMemo = ({description}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{description} {renderTimes.current}</h2>\n  )\n}\n\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1)\n  }\n  \n  const testProps = true;\n  return(\n    <div> \n      <h1>{count}</h1>\n      <button onClick={handleClick}>Click!</button>\n      <NoReactMemo description='unuse React.memo'/>\n      <UseReactMemo description='use React.memo'/>\n    </div>\n  )\n}\n")),(0,c.kt)("iframe",{height:"400",width:"100%",scrolling:"no",title:"Untitled",src:"https://codepen.io/nqzfklpk-the-looper/embed/preview/GRyBbyR?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper/pen/GRyBbyR"},"Untitled")," by \u7f85\u570b\u8c50 (",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper"},"@nqzfklpk-the-looper"),") on ",(0,c.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,c.kt)("h2",{id:"shallow-compare"},"shallow compare"),(0,c.kt)("p",null,"\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e2d\u6bd4\u8f03 props \u662f\u4f7f\u7528 shallow compare \uff0c\u76f8\u4fe1\u6709\u4e00\u9ede\u4e86\u89e3 JS \u7684\u90fd\u6703\u77e5\u9053\u95dc\u65bc JS \u7684 call by value \u8ddf call by reference \uff0c\u4e5f\u5c31\u662f\u5728\u6bd4\u8f03 string \u6216\u662f number \u9019\u985e\u7684 type \u7684\u6642\u5019 \u4e0d\u6703\u6709\u4ec0\u9ebc\u592a\u5927\u7684\u554f\u984c\uff0c\u4f46\u662f\u6bd4\u8f03\u50cf\u662f object \u9019\u7a2e\u7684 call by reference \u7684\u6642\u5019\u56e0\u70ba props \u56de\u50b3\u5165\u65b0\u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u5c31\u9020\u6210\u6bcf\u6b21\u6bd4\u8f03\u90fd\u6703\u4e0d\u4e00\u6a23\u800c\u9020\u6210\u91cd\u8907 render\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const UseReactMemo = React.memo(({useReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{useReactMemo.description} {renderTimes.current}</h2>\n  )\n})\n\nconst NoReactMemo = ({noReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{noReactMemo.description} {renderTimes.current}</h2>\n  )\n}\n\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1)\n  }\n  \n  const noReactMemo = {\n    description: 'unuse React.memo',\n    isUsingReactMemo: false\n  }\n  \n  const useReactMemo = {\n    description: 'use React.memo',\n    isUsingReactMemo: true\n  }\n  const testProps = true;\n  return(\n    <div> \n      <h1>{count}</h1>\n      <button onClick={handleClick}>Click!</button>\n      <NoReactMemo noReactMemo={noReactMemo}/>\n      <UseReactMemo useReactMemo={useReactMemo}/>\n    </div>\n  )\n}\n\n\nReactDOM.render(<App/>,document.getElementById(\"root\"));\n")),(0,c.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u50b3\u5165 object \u4e4b\u5f8c\u5c31\u8b8a\u6210\u90fd\u6703\u91cd\u8907 render"),(0,c.kt)("iframe",{height:"400",width:"100%",scrolling:"no",title:"React.memo basic",src:"https://codepen.io/nqzfklpk-the-looper/embed/preview/eYyLOOY?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper/pen/eYyLOOY"},"React.memo basic")," by \u7f85\u570b\u8c50 (",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper"},"@nqzfklpk-the-looper"),") on ",(0,c.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,c.kt)("h3",{id:"areequal"},"areEqual"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("inlineCode",{parentName:"p"},"areEqual")," function \u7576 prop \u76f8\u7b49\u7684\u6642\u5019\u56de\u50b3 ",(0,c.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4e0d\u76f8\u7b49\u7684\u6642\u5019\u56de\u50b3 ",(0,c.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const UseReactMemo = React.memo(({useReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{useReactMemo.description} {renderTimes.current}</h2>\n  )\n}, function(prev, next){console.log({prev, next})})\n\n")),(0,c.kt)("p",null,"\u6211\u5011\u4f86\u770b\u4e00\u4e0b\u50b3\u5165\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"arguments")," \u4f86\u770b\u8981\u600e\u9ebc\u5be6\u4f5c compare function"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/12/%E6%88%AA%E5%9C%96%202022-04-12%20%E4%B8%8B%E5%8D%8811.37.24.png",alt:"\u622a\u5716 2022-04-12 \u4e0b\u534811.37.24"})),(0,c.kt)("p",null,"\u9019\u908a\u53ef\u4ee5\u770b\u5230\u50b3\u5165\u4e86\u5169\u500b\u4e00\u6a23\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"useReactMemo")," \u90a3\u6211\u5011\u5c31\u53ef\u4ee5\u5229\u7528\u9019\u500b\u4f86\u5efa\u7acb compare function"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const compareProps = (prev, next) => {\n  for(const key in prev.useReactMemo){\n    if(prev.useReactMemo[key] !== next.useReactMemo[key]){\n      return false;\n    }\n  }\n  \n  return true;\n}\n\nconst UseReactMemo = React.memo(({useReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{useReactMemo.description} {renderTimes.current}</h2>\n  )\n}, compareProps)\n\nconst NoReactMemo = ({noReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{noReactMemo.description} {renderTimes.current}</h2>\n  )\n}\n\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1)\n  }\n  \n  const noReactMemo = {\n    description: 'unuse React.memo',\n    isUsingReactMemo: false\n  }\n  \n  const useReactMemo = {\n    description: 'use React.memo',\n    isUsingReactMemo: true\n  }\n  const testProps = true;\n  return(\n    <div> \n      <h1>{count}</h1>\n      <button onClick={handleClick}>Click!</button>\n      <NoReactMemo noReactMemo={noReactMemo}/>\n      <UseReactMemo useReactMemo={useReactMemo}/>\n    </div>\n  )\n}\n\n\nReactDOM.render(<App/>,document.getElementById(\"root\"));\n")),(0,c.kt)("iframe",{height:"400",width:"100%",scrolling:"no",title:"React.memo call reference error",src:"https://codepen.io/nqzfklpk-the-looper/embed/preview/xxpaKVR?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper/pen/xxpaKVR"},"React.memo call reference error")," by \u7f85\u570b\u8c50 (",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper"},"@nqzfklpk-the-looper"),") on ",(0,c.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,c.kt)("h2",{id:"state-\u66f4\u65b0"},"state \u66f4\u65b0"),(0,c.kt)("p",null,"\u53e6\u5916\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e5f\u53ef\u4ee5\u8a18\u9304\u8005\u81ea\u5df1\u7684 state"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const compareProps = (prev, next) => {\n  for(const key in prev.useReactMemo){\n    if(prev.useReactMemo[key] !== next.useReactMemo[key]){\n      return false;\n    }\n  }\n  \n  return true;\n}\n\nconst UseReactMemo = React.memo(({useReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  const [switchBoolean, setSwitchBoolean] = React.useState(true);\n  renderTimes.current += 1;\n  return(\n    <>\n      <h2>{useReactMemo.description} {renderTimes.current}</h2>\n      <button onClick={()=>{\n          setSwitchBoolean(prev => !prev)\n        }}>\n        {switchBoolean ? 'On' : 'Off'}\n      </button>\n    </>\n  )\n}, compareProps)\n\nconst NoReactMemo = ({noReactMemo}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{noReactMemo.description} {renderTimes.current}</h2>\n  )\n}\n\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1)\n  }\n  \n  const noReactMemo = {\n    description: 'unuse React.memo',\n    isUsingReactMemo: false\n  }\n  \n  const useReactMemo = {\n    description: 'use React.memo',\n    isUsingReactMemo: true\n  }\n  const testProps = true;\n  return(\n    <div> \n      <h1>{count}</h1>\n      <button onClick={handleClick}>Click!</button>\n      <NoReactMemo noReactMemo={noReactMemo}/>\n      <UseReactMemo useReactMemo={useReactMemo}/>\n    </div>\n  )\n}\n\n\nReactDOM.render(<App/>,document.getElementById(\"root\"));\n")),(0,c.kt)("iframe",{height:"400",width:"100%",scrolling:"no",title:"React.memo call reference error  areEqual",src:"https://codepen.io/nqzfklpk-the-looper/embed/preview/MWrqgPe?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper/pen/MWrqgPe"},"React.memo call reference error  areEqual")," by \u7f85\u570b\u8c50 (",(0,c.kt)("a",{href:"https://codepen.io/nqzfklpk-the-looper"},"@nqzfklpk-the-looper"),") on ",(0,c.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,c.kt)("h2",{id:"ref"},"Ref"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10240296?sc=iThomeR"},"\u95dc\u65bcReact\uff0c\u90a3\u4e9b\u6211\u4e0d\u77e5\u9053\u7684")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-optimize-performance-using-memo-usecallback-usememo-a76b6b272df3"},"React \u6027\u80fd\u512a\u5316\u90a3\u4ef6\u5927\u4e8b\uff0c\u4f7f\u7528 memo\u3001useCallback\u3001useMemo")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/docs/react-api.html"},"React \u9802\u5c64 API"))))}u.isMDXComponent=!0}}]);