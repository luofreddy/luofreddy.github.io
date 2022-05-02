"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4039],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),m=p,d=y["".concat(l,".").concat(m)]||y[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8070:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(7462),p=r(3366),a=(r(7294),r(3905)),i=["components"],o={title:"[TS] Basic Type",tags:["typescript"]},l=void 0,c={unversionedId:"Typescript/ts-basic-type",id:"Typescript/ts-basic-type",isDocsHomePage:!1,title:"[TS] Basic Type",description:"\u4ecb\u7d39\u5e7e\u7a2e Typescript \u7684\u57fa\u672c\u578b\u5225",source:"@site/docs/Typescript/ts-basic-type.md",sourceDirName:"Typescript",slug:"/Typescript/ts-basic-type",permalink:"/docs/Typescript/ts-basic-type",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Typescript/ts-basic-type.md",tags:[{label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",frontMatter:{title:"[TS] Basic Type",tags:["typescript"]},sidebar:"tutorialSidebar",previous:{title:"[TS] Any Unknown As",permalink:"/docs/Typescript/ts-any-unknow-as"},next:{title:"[TS] Type Interface",permalink:"/docs/Typescript/ts-type-interface"}},u=[{value:"Boolean type",id:"boolean-type",children:[]},{value:"Number type",id:"number-type",children:[]},{value:"String type",id:"string-type",children:[]},{value:"Array type",id:"array-type",children:[]},{value:"Tuple type",id:"tuple-type",children:[]}],s={toc:u};function y(e){var t=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ecb\u7d39\u5e7e\u7a2e Typescript \u7684\u57fa\u672c\u578b\u5225"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Boolean"),(0,a.kt)("li",{parentName:"ul"},"Number"),(0,a.kt)("li",{parentName:"ul"},"String"),(0,a.kt)("li",{parentName:"ul"},"Array"),(0,a.kt)("li",{parentName:"ul"},"Tuple")),(0,a.kt)("h2",{id:"boolean-type"},"Boolean type"),(0,a.kt)("p",null,"\u7576\u8b8a\u6578\u5ba3\u544a\u70ba boolean \u6642\u6211\u5011\u5c31\u53ea\u80fd\u653e\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"\u9019\u908a\u8981\u6ce8\u610f\u7684\u662f new Boolean \u5728\u9019\u908a\u662f\u6703\u5831\u932f\u7684"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/boolean-has-type-error.png",alt:"boolean-has-type-error"})),(0,a.kt)("h2",{id:"number-type"},"Number type"),(0,a.kt)("p",null,"\u5728 number type \u4e2d\u7684 new Number \u4e5f\u662f\u6703\u5831\u932f\u7684\uff0c\u9664\u4e86\u57fa\u672c\u7684\u6574\u6578\u8ddf\u6d6e\u9ede\u6578\u4ee5\u5916\uff0c\u4e5f\u53ef\u4ee5\u653e\u5165\u5341\u516d\u9032\u4f4d\u3001\u516b\u9032\u4f4d\u3001\u4e8c\u9032\u4f4d\u7684\u683c\u5f0f\uff0c\u53e6\u5916\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," \u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity")," \u4e5f\u662f\u6c92\u554f\u984c\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/%E6%88%AA%E5%9C%96%202022-04-10%20%E4%B8%8B%E5%8D%8811.35.11.png",alt:"\u622a\u5716 2022-04-10 \u4e0b\u534811.35.11"})),(0,a.kt)("h2",{id:"string-type"},"String type"),(0,a.kt)("p",null,"string type \u9664\u4e86 new String \u4ee5\u5916\u5176\u4ed6\u8f49\u8b8a string \u65b9\u6cd5\u7684\u56de\u50b3\u503c\u90fd\u662f\u6c92\u554f\u984c\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/%E6%88%AA%E5%9C%96%202022-04-10%20%E4%B8%8B%E5%8D%8811.40.01.png",alt:"\u622a\u5716 2022-04-10 \u4e0b\u534811.40.01"})),(0,a.kt)("h2",{id:"array-type"},"Array type"),(0,a.kt)("p",null,"array type \u53ea\u9700\u8981\u5728\u539f\u5148\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \u4e4b\u5f8c\u52a0\u4e0a\u4e2d\u62ec\u865f ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," \u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/11/array-type-noBG.png",alt:"array-type-noBG"})),(0,a.kt)("h2",{id:"tuple-type"},"Tuple type"),(0,a.kt)("p",null,"tuple type \u8207 array \u985e\u4f3c\u4f46\u662f\u53ef\u4ee5\u6307\u5b9a\u591a\u500b type \uff0c\u4e14\u5fc5\u9808\u6309\u7167\u6307\u5b9a type \u9806\u5e8f\u653e\u5165\u3002"),(0,a.kt)("p",null,"\u9019\u908a\u53ef\u4ee5\u770b\u5230\u8981\u5b8c\u5168\u6309\u7167 type \u9806\u5e8f\u653e\u5165\uff0c\u4e26\u4e14\u5728\u6700\u5f8c\u4e5f\u88dc\u5145\u4e86 tuple \uff0b array \u7684\u7528\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/%E6%88%AA%E5%9C%96%202022-04-10%20%E4%B8%8B%E5%8D%8811.56.08.png",alt:"\u622a\u5716 2022-04-10 \u4e0b\u534811.56.08"})))}y.isMDXComponent=!0}}]);