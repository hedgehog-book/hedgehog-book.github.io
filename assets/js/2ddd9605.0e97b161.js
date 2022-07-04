"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4059],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),c=p(n),f=o,h=c["".concat(u,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(h,i(i({ref:e},l),{},{components:n})):r.createElement(h,i({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1941:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},u=void 0,p={unversionedId:"Data/Smooth Data",id:"Data/Smooth Data",title:"Smooth Data",description:"smooth(input Number) : any[] | Mat | Tensor",source:"@site/math/Data/Smooth Data.mdx",sourceDirName:"Data",slug:"/Data/Smooth Data",permalink:"/math/Data/Smooth Data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Remove Missing Data",permalink:"/math/Data/Remove Missing Data"},next:{title:"LU Decomposition",permalink:"/math/Decompositions/LU Decomposition"}},l={},m=[{value:"<code>smooth(input: any[] | Mat | Tensor, dim: Number) : any[] | Mat | Tensor</code>",id:"smoothinput-any--mat--tensor-dim-number--any--mat--tensor",level:4}],c={toc:m};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"smoothinput-any--mat--tensor-dim-number--any--mat--tensor"},(0,a.kt)("inlineCode",{parentName:"h4"},"smooth(input: any[] | Mat | Tensor, dim: Number) : any[] | Mat | Tensor")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"param")," ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," - a matrix, or Mat only supporting 2d. This is the input to smooth the data of. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"param")," ",(0,a.kt)("inlineCode",{parentName:"p"},"dim")," EITHER '0' or '1', 0 for rows, 1 for columns. Default is rows, or 0.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"any[] | Mat | Tensor")," - the input with the elements smoothed"),(0,a.kt)("p",null,"This function smooths the data by the following method: a","[i]"," -> (a","[i - 2]"," + a","[i - 1]"," + a","[i]"," + a","[i + 1]"," + a","[i + 2]",") / 5"),(0,a.kt)("p",null,"An example to make it clearer is shown below. Its useful for cases where the data is very noisy in large data sets, or where there are many outliers. "),(0,a.kt)("p",null,'Overall it tries to make the data all "closer" together. '),(0,a.kt)("iframe",{src:"https://hlab.app/s/docs/smooth_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);