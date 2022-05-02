"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[912],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),c=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,l=p(n,["components","mdxType","originalType","parentName"]),y=c(t),m=a,d=y["".concat(u,".").concat(m)]||y[m]||s[m]||i;return t?r.createElement(d,o(o({ref:e},l),{},{components:t})):r.createElement(d,o({ref:e},l))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=y;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p.mdxType="string"==typeof n?n:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6219:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],p={title:"[TS] Any Unknown As",tags:["typescript"]},u=void 0,c={unversionedId:"Typescript/ts-any-unknow-as",id:"Typescript/ts-any-unknow-as",isDocsHomePage:!1,title:"[TS] Any Unknown As",description:"Any",source:"@site/docs/Typescript/ts-any-unknow-as.md",sourceDirName:"Typescript",slug:"/Typescript/ts-any-unknow-as",permalink:"/docs/Typescript/ts-any-unknow-as",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Typescript/ts-any-unknow-as.md",tags:[{label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",frontMatter:{title:"[TS] Any Unknown As",tags:["typescript"]},sidebar:"tutorialSidebar",previous:{title:"[Git] reflog",permalink:"/docs/Git/git-reflog"},next:{title:"[TS] Basic Type",permalink:"/docs/Typescript/ts-basic-type"}},l=[{value:"Any",id:"any",children:[]},{value:"Unknown",id:"unknown",children:[]},{value:"As",id:"as",children:[]}],s={toc:l};function y(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"any"},"Any"),(0,i.kt)("p",null,"\u5728 typescript \u4e2d any \u6709\u8457\u7279\u6b8a\u7684\u5730\u4f4d\uff0c TS \u7684\u578b\u5225\u6aa2\u67e5\u53ea\u8981\u9047\u5230 any \u5c31\u6703\u88ab\u8df3\u904e\uff0c\u6240\u4ee5 any \u53ef\u4ee5\u88ab\u4efb\u4f55\u578b\u5225\u9644\u503c\u4e5f\u53ef\u4ee5\u8ce6\u503c\u7d66\u4efb\u4f55\u578b\u5225\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/any.png",alt:"any"})),(0,i.kt)("p",null,"\u800c\u6211\u5011\u5ba3\u544a\u8b8a\u6578\u6642\u6c92\u6709\u9644\u503c\u4e5f\u6c92\u6709\u7d66\u5b9a\u578b\u5225\u6642\uff0c\u578b\u5225\u63a8\u8ad6 ( Type inference ) \u5c31\u6703\u63a8\u65b7\u9019\u500b\u8b8a\u6578\u70ba any type\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/any-inference.png",alt:"any-inference"})," "),(0,i.kt)("p",null,"\u6240\u4ee5\u7576\u5ba3\u544a\u8b8a\u6578\u7684\u6642\u5019\u6211\u5011\u6700\u597d\u7d66\u4e88\u578b\u5225\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/any-.png",alt:"any-"})),(0,i.kt)("p",null,"\u53c8\u6216\u662f\u76f4\u63a5\u9644\u503c\u8b93\u8070\u660e\u7684 TS \u5e6b\u4f60\u505a\u578b\u5225\u63a8\u65b7"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/%E6%88%AA%E5%9C%96%202022-04-14%20%E4%B8%8A%E5%8D%8812.10.47.png",alt:null})),(0,i.kt)("p",null,"\u4e0d\u904e\u5728\u4e00\u822c\u4f86\u8aaa\u6211\u5011\u9084\u662f\u8981\u76e1\u91cf\u907f\u514d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," \u7562\u7adf\u4f7f\u7528\u4e86 any \u5c31\u4e0d\u6703\u9032\u884c\u578b\u5225\u6aa2\u67e5\uff0c\u90a3\u9ebc\u5c31\u8207\u5beb JS \u4e00\u6a23\uff0c\u5931\u53bb\u4e86\u5beb TS \u7684\u610f\u7fa9\u3002"),(0,i.kt)("h2",{id:"unknown"},"Unknown"),(0,i.kt)("p",null,"\u4f46\u662f\u5728\u67d0\u4e9b\u72c0\u6cc1\u4e0b\uff0c\u6211\u5011\u9084\u662f\u53ef\u80fd\u9700\u8981\u7528\u5230 any \u4f86\u8a3b\u8a18\u6211\u5011\u4e0d\u77e5\u9053\u7684\u578b\u5225\uff0c\u90a3\u500b\u9019\u662f\u5f8c\u6211\u5011\u5c31\u53ef\u4ee5\u9078\u64c7 ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")," \uff0c\u53ef\u4ee5\u7406\u89e3\u70ba\u6bd4\u8f03\u5b89\u5168\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," \u3002"),(0,i.kt)("h2",{id:"as"},"As"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"as")," \u53c8\u53eb\u65b7\u8a00\uff0c\u610f\u601d\u662f\u4f60\u8aaa\u4ec0\u9ebc\u5c31\u662f\u4ec0\u9ebc\uff0c\u901a\u5e38\u6211\u5011\u53ef\u4ee5\u7528\u5728\u8207\u5f8c\u7aef\u62ff\u56de\u7684\u8cc7\u6599\uff0c\u544a\u8a34 TS \u9019\u500b API \u7684 response \u662f\u4ec0\u9ebc\u6a23\u7684\u8cc7\u6599\u578b\u614b\uff0c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%889.47.00.png",alt:"as"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%889.51.28.png",alt:null})),(0,i.kt)("p",null,"\u9019\u908a\u56e0\u70ba ",(0,i.kt)("inlineCode",{parentName:"p"},"resp")," \u662f Response type \u6240\u4ee5\u5148\u8f49\u6210 unknown \u518d\u8f49\u6210\u8a72\u6709\u7684\u683c\u5f0f"),(0,i.kt)("p",null,"Any \u8ddf Unknown"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%8810.04.33.png",alt:"\u622a\u5716 2022-04-17 \u4e0b\u534810.04.33"})),(0,i.kt)("p",null,"\u5728\u9019\u500b\u7bc4\u4f8b\u4f7f\u7528 any \uff0c\u4f46\u662f\u56de\u50b3\u7684\u6709\u53ef\u80fd\u6703\u662f null \uff0c\u9019\u6642\u5019\u4f7f\u7528 split \u5c31\u6703\u6709\u554f\u984c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%8810.06.14.png",alt:null})),(0,i.kt)("p",null,"\u4f46\u662f\u5982\u679c\u662f\u4e00\u6a23\u7684\u7bc4\u4f8b\u537b\u6539\u7528 unknown \uff0c\u9019\u6642 TS \u5c31\u6703\u63d0\u9192\u4f60\u9019\u908a\u6709\u554f\u984c\uff0c\u56e0\u6b64\u6211\u5011\u5c31\u53ef\u4ee5\u63d0\u524d\u907f\u514d\u932f\u8aa4\uff0c\u5728\u7a0b\u5f0f\u78bc\u52a0\u4e0a\u578b\u5225\u7684\u5224\u65b7"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/unknow.png",alt:"unknow"})))}y.isMDXComponent=!0}}]);