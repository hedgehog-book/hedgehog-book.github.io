"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7209],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},u=void 0,l={unversionedId:"Data/Remove Missing Data",id:"Data/Remove Missing Data",title:"Remove Missing Data",description:"rm_missing(input Number) : any[] | Mat | Tensor",source:"@site/math/Data/Remove Missing Data.mdx",sourceDirName:"Data",slug:"/Data/Remove Missing Data",permalink:"/math/Data/Remove Missing Data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Normalize Data",permalink:"/math/Data/Normalize Data"},next:{title:"Smooth Data",permalink:"/math/Data/Smooth Data"}},p={},m=[{value:"<code>rm_missing(input: any[] | Mat | Tensor, dim: Number) : any[] | Mat | Tensor</code>",id:"rm_missinginput-any--mat--tensor-dim-number--any--mat--tensor",level:4}],c={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"rm_missinginput-any--mat--tensor-dim-number--any--mat--tensor"},(0,i.kt)("inlineCode",{parentName:"h4"},"rm_missing(input: any[] | Mat | Tensor, dim: Number) : any[] | Mat | Tensor")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"param")," ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," - the input to remove the missing values of "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"param")," ",(0,i.kt)("inlineCode",{parentName:"p"},"dim")," '0' or '1' : 0 means delete the whole column, '1' means delete the whole row. Default is '0'."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"any[] | Mat | Tensor")," - input without the missing values."),(0,i.kt)("p",null,"This function simply takes the input, and deletes the columns (default) or rows (if you set the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"dim=1"),") that have missing values. This evidently deletes non-missing values in most cases."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"''"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," are defined to be missing values. [] and {} are not. "),(0,i.kt)("p",null,"This is useful when you simply want to remove missing data values and not handle it. This can perhaps be appropriate for very large arrays where the missing values are sparse and you dont want to fill it with false values."),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/rm_missing_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);