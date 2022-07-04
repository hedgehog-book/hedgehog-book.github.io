"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8648],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(n),f=a,y=l["".concat(s,".").concat(f)]||l[f]||m[f]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={},s=void 0,c={unversionedId:"Basic Operations/sum",id:"Basic Operations/sum",title:"sum",description:"sum(input any[] | Mat | Tensor | Number",source:"@site/math/Basic Operations/sum.mdx",sourceDirName:"Basic Operations",slug:"/Basic Operations/sum",permalink:"/math/Basic Operations/sum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"floor",permalink:"/math/Basic Operations/floor"},next:{title:"Any Missing Data",permalink:"/math/Data/Any Missing Data"}},p={},m=[{value:"<code>sum(input: any[] | Mat | Tensor | Number) : any[] | Mat | Tensor | Number</code>",id:"suminput-any--mat--tensor--number--any--mat--tensor--number",level:4}],l={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"suminput-any--mat--tensor--number--any--mat--tensor--number"},(0,o.kt)("inlineCode",{parentName:"h4"},"sum(input: any[] | Mat | Tensor | Number) : any[] | Mat | Tensor | Number")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," the list, vector, matrix, javascript array, or tensor, or even number to sum up the elements of"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," - A number which is the sum of all the elements of each entry in the structure ",(0,o.kt)("inlineCode",{parentName:"p"},"input")),(0,o.kt)("p",null,"This function simply adds up, or sums all elements of a given structure and returns that sum: "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/sum_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);