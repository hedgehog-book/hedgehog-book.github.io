"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8564],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"Data/Normalize Data",id:"Data/Normalize Data",title:"Normalize Data",description:"normalize(input Mat | Tensor",source:"@site/math/Data/Normalize Data.mdx",sourceDirName:"Data",slug:"/Data/Normalize Data",permalink:"/math/Data/Normalize Data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Location of Missing Data",permalink:"/math/Data/Location of Missing Data"},next:{title:"Remove Missing Data",permalink:"/math/Data/Remove Missing Data"}},c={},p=[{value:"<code>normalize(input: any[] | Mat | Tensor) : Mat | Tensor</code>",id:"normalizeinput-any--mat--tensor--mat--tensor",level:4}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"normalizeinput-any--mat--tensor--mat--tensor"},(0,o.kt)("inlineCode",{parentName:"h4"},"normalize(input: any[] | Mat | Tensor) : Mat | Tensor")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input"),"- a JS array, matrix or tensor, or a series of number, the construct of data to be normalized"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"Mat | Tensor")," - a matrix or tensor with all the values in the interval ","[0, 1]",", normalized"),(0,o.kt)("p",null,"This function simply normalizes the data. It performs normalization on the data whether its in a matrix structure or in a series of numbers. This basically means it takes the values and reduces them to various values in the interval ","[0,1]",". For example, '1,2,3' may be normalized as '0,0.5,1'."),(0,o.kt)("iframe",{src:"https://hlab.app/s/LinJianan/normalize_book",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);