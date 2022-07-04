"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[583],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,b=f["".concat(p,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={},p=void 0,c={unversionedId:"Properties/Checking for Numbers",id:"Properties/Checking for Numbers",title:"Checking for Numbers",description:"is_number(input boolean",source:"@site/math/Properties/Checking for Numbers.mdx",sourceDirName:"Properties",slug:"/Properties/Checking for Numbers",permalink:"/math/Properties/Checking for Numbers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check for Upper Triangular",permalink:"/math/Properties/Check for Upper Triangular"},next:{title:"Determinant",permalink:"/math/Properties/Determinant"}},s={},l=[{value:"<code>is_number(input: any): boolean</code>",id:"is_numberinput-any-boolean",level:4}],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"is_numberinput-any-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"is_number(input: any): boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"param")," ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," - Anything to test if it is a number or not"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"returns:")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," - True if it is a 'number' false otherwise. Infinity and NaN are defined to ",(0,i.kt)("strong",{parentName:"p"},"not")," be numbers in Hedgehog Lab. You can use hex and binary inputs as numbers - 0xfff0 etc. "),(0,i.kt)("p",null,"This function tests if the input is a number or not. It does not allow strings, infinity, NaN. It checks type too. "),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/isNumber_hbook",width:"100%",height:"500px"}))}m.isMDXComponent=!0}}]);