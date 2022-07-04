"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9481],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3929:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},u=void 0,c={unversionedId:"Properties/Check for Lower Triangular",id:"Properties/Check for Lower Triangular",title:"Check for Lower Triangular",description:"is_tril(input boolean",source:"@site/math/Properties/Check for Lower Triangular.mdx",sourceDirName:"Properties",slug:"/Properties/Check for Lower Triangular",permalink:"/math/Properties/Check for Lower Triangular",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check for Diagonability",permalink:"/math/Properties/Check for Diagonability"},next:{title:"Check for Symmetricity",permalink:"/math/Properties/Check for Symmetricity"}},p={},s=[{value:"<code>is_tril(input: any[] | Mat) : boolean</code>",id:"is_trilinput-any--mat--boolean",level:4}],f={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"is_trilinput-any--mat--boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"is_tril(input: any[] | Mat) : boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"param")," ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," - Any matrix, two-dimensional and square, to test if it's lower triangular or not"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," - True if it is lower triangular (recall lower triangular means everything ",(0,i.kt)("strong",{parentName:"p"},"above")," the diagonal is zero), false otherwise."),(0,i.kt)("p",null,"This function tests if a square 2d matrix is lower triangular or not. Simply look at the diagonal and see if theres any entry above the diagonal that is non zero. If there is, it is not lower triangular. "),(0,i.kt)("iframe",{src:"https://hlab.app/s/docs/is_tril_hbook",width:"100%",height:"500px"}))}m.isMDXComponent=!0}}]);