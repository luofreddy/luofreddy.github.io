"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[964],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4353:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"[React] React.memo",tags:["react"]},l=void 0,p={unversionedId:"React/react-react-memo",id:"React/react-react-memo",isDocsHomePage:!1,title:"[React] React.memo",description:"React.memo \u662f\u4e00\u500b HOC\uff0c\u662f\u70ba\u4e86\u907f\u514d\u5728 props \u4e0d\u8b8a\u7684\u72c0\u6cc1\u4e0b\u56e0\u70ba\u7236\u5c64\u66f4\u65b0\u800c\u5c0e\u81f4\u5b50\u5c64\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u3002",source:"@site/docs/React/react-react-memo.md",sourceDirName:"React",slug:"/React/react-react-memo",permalink:"/docs/React/react-react-memo",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/React/react-react-memo.md",tags:[{label:"react",permalink:"/docs/tags/react"}],version:"current",frontMatter:{title:"[React] React.memo",tags:["react"]},sidebar:"tutorialSidebar",previous:{title:"[Hook] useEffect",permalink:"/docs/React/hook-useeffect"},next:{title:"[Yarn] workspaces",permalink:"/docs/NPM/yarn-workspaces"}},u=[{value:"shallow compare",id:"shallow-compare",children:[{value:"areEqual",id:"areequal",children:[]}]},{value:"state \u66f4\u65b0",id:"state-\u66f4\u65b0",children:[]},{value:"Ref",id:"ref",children:[]}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," \u662f\u4e00\u500b HOC\uff0c\u662f\u70ba\u4e86\u907f\u514d\u5728 props \u4e0d\u8b8a\u7684\u72c0\u6cc1\u4e0b\u56e0\u70ba\u7236\u5c64\u66f4\u65b0\u800c\u5c0e\u81f4\u5b50\u5c64\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"React document"),(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u7684 function component \u6bcf\u6b21\u5f97\u5230\u76f8\u540c prop \u7684\u6642\u5019\u90fd\u6703 render \u76f8\u540c\u7d50\u679c\uff0c\u4f60\u53ef\u4ee5\u5c07\u5176\u5305\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e4b\u4e2d\uff0c\u900f\u904e\u5feb\u53d6 render \u7d50\u679c\u4f86\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u52a0\u901f\u3002\u9019\u8868\u793a React \u6703\u8df3\u904e render \u9019\u500b component\uff0c\u4e26\u76f4\u63a5\u91cd\u7528\u4e0a\u6b21\u7684 render \u7d50\u679c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const UseReactMemo = React.memo(({description}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{description} {renderTimes.current}</h2>\n  )\n})\n\nconst NoReactMemo = ({description}) => {\n  const renderTimes = React.useRef(0);\n  renderTimes.current += 1;\n  return(\n    <h2>{description} {renderTimes.current}</h2>\n  )\n}\n\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1)\n  }\n  \n  const testProps = true;\n  return(\n    <div> \n      <h1>{count}</h1>\n      <button onClick={handleClick}>Click!</button>\n      <NoReactMemo description='unuse React.memo'/>\n      <UseReactMemo description='use React.memo'/>\n    </div>\n  )\n}\n")),(0,o.kt)("h2",{id:"shallow-compare"},"shallow compare"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e2d\u6bd4\u8f03 props \u662f\u4f7f\u7528 shallow compare \uff0c\u76f8\u4fe1\u6709\u4e00\u9ede\u4e86\u89e3 JS \u7684\u90fd\u6703\u77e5\u9053\u95dc\u65bc JS \u7684 call by value \u8ddf call by reference \uff0c\u4e5f\u5c31\u662f\u5728\u6bd4\u8f03 string \u6216\u662f number \u9019\u985e\u7684 type \u7684\u6642\u5019 \u4e0d\u6703\u6709\u4ec0\u9ebc\u592a\u5927\u7684\u554f\u984c\uff0c\u4f46\u662f\u6bd4\u8f03\u50cf\u662f object \u9019\u7a2e\u7684 call by reference \u7684\u6642\u5019\u56e0\u70ba props \u56de\u50b3\u5165\u65b0\u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u5c31\u9020\u6210\u6bcf\u6b21\u6bd4\u8f03\u90fd\u6703\u4e0d\u4e00\u6a23\u800c\u9020\u6210\u91cd\u8907 render\u3002"),(0,o.kt)("h3",{id:"areequal"},"areEqual"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"areEqual")," function \u7576 prop \u76f8\u7b49\u7684\u6642\u5019\u56de\u50b3 ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4e0d\u76f8\u7b49\u7684\u6642\u5019\u56de\u50b3 ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,o.kt)("h2",{id:"state-\u66f4\u65b0"},"state \u66f4\u65b0"),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10240296?sc=iThomeR"},"\u95dc\u65bcReact\uff0c\u90a3\u4e9b\u6211\u4e0d\u77e5\u9053\u7684")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-optimize-performance-using-memo-usecallback-usememo-a76b6b272df3"},"React \u6027\u80fd\u512a\u5316\u90a3\u4ef6\u5927\u4e8b\uff0c\u4f7f\u7528 memo\u3001useCallback\u3001useMemo")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/docs/react-api.html"},"React \u9802\u5c64 API"))))}s.isMDXComponent=!0}}]);