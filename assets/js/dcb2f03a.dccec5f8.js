"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9441],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=n,v=m["".concat(i,".").concat(f)]||m[f]||s[f]||l;return t?a.createElement(v,o(o({ref:r},u),{},{components:t})):a.createElement(v,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4823:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a=t(7462),n=t(3366),l=(t(7294),t(3905)),o=["components"],c={title:"[Laravel] mac setup",tags:["PHP","Laravel"]},i=void 0,p={unversionedId:"PHP/laravel-mac-setup",id:"PHP/laravel-mac-setup",isDocsHomePage:!1,title:"[Laravel] mac setup",description:"\u9019\u908a\u7b46\u8005\u9810\u8a2d\u662f\u5df2\u7d93\u5b89\u88dd\u597d PHP \u8ddf Composer \u53ea\u9700\u8981\u5b89\u88dd Laravel \uff0c\u5982\u679c\u5c1a\u672a\u88dd\u597d PHP \u8ddf Composer \u9700\u8981\u518d\u627e\u627e\u4ed6\u5011\u7684\u65b9\u5f0f\u5466\u3002",source:"@site/docs/PHP/laravel-mac-setup.md",sourceDirName:"PHP",slug:"/PHP/laravel-mac-setup",permalink:"/docs/PHP/laravel-mac-setup",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/PHP/laravel-mac-setup.md",tags:[{label:"PHP",permalink:"/docs/tags/php"},{label:"Laravel",permalink:"/docs/tags/laravel"}],version:"current",frontMatter:{title:"[Laravel] mac setup",tags:["PHP","Laravel"]},sidebar:"tutorialSidebar",previous:{title:"[GA] GA4",permalink:"/docs/Marketing/ga-ga4"}},u=[{value:"\u5b89\u88dd Laravel",id:"\u5b89\u88dd-laravel",children:[]},{value:"Ref",id:"ref",children:[]}],s={toc:u};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9019\u908a\u7b46\u8005\u9810\u8a2d\u662f\u5df2\u7d93\u5b89\u88dd\u597d PHP \u8ddf Composer \u53ea\u9700\u8981\u5b89\u88dd Laravel \uff0c\u5982\u679c\u5c1a\u672a\u88dd\u597d PHP \u8ddf Composer \u9700\u8981\u518d\u627e\u627e\u4ed6\u5011\u7684\u65b9\u5f0f\u5466\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88dd-laravel"},"\u5b89\u88dd Laravel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'composer global require "laravel/installer"\n')),(0,l.kt)("p",null,"\u63a5\u8457\u8a2d\u5b9a\u74b0\u5883\u8b8a\u6578\u8b93 command line \u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"laravel")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=\"$PATH:$HOME/.composer/vendor/bin\"' >> ~/.bashrc\n")),(0,l.kt)("p",null,"\u63a5\u8457\u57f7\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"laravel new [project name]\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/05/02/image-20220502171459995.png",alt:"laravel new project"})),(0,l.kt)("h2",{id:"ref"},"Ref"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10216204"}," Laravel \u74b0\u5883\u5efa\u7f6e\uff08MacOS\uff09"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://simonallen.coderbridge.io/2020/04/06/install-laravel/"},"Laravel \u5165\u9580\uff1a\u5728 Mac \u5b89\u88dd\u8207\u555f\u52d5 Laravel")))))}m.isMDXComponent=!0}}]);