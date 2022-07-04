"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7990],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=i,y=l["".concat(s,".").concat(f)]||l[f]||u[f]||o;return r?n.createElement(y,a(a({ref:t},m),{},{components:r})):n.createElement(y,a({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},2601:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},s=void 0,p={unversionedId:"Properties/Check for Symmetricity",id:"Properties/Check for Symmetricity",title:"Check for Symmetricity",description:"is_symmetric(input boolean",source:"@site/math/Properties/Check for Symmetricity.mdx",sourceDirName:"Properties",slug:"/Properties/Check for Symmetricity",permalink:"/math/Properties/Check for Symmetricity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check for Lower Triangular",permalink:"/math/Properties/Check for Lower Triangular"},next:{title:"Check for Upper Triangular",permalink:"/math/Properties/Check for Upper Triangular"}},m={},u=[{value:"<code>is_symmetric(input: any[] | Mat) : boolean</code>",id:"is_symmetricinput-any--mat--boolean",level:4}],l={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"is_symmetricinput-any--mat--boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"is_symmetric(input: any[] | Mat) : boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," - Any matrix, two-dimensional and square, to test if it's symmetric or not"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns:")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," - True if it is symmetric (recall symmetric means the rows and columns being interchanged doesn't affect the matrix), false otherwise"),(0,o.kt)("p",null,"This function tests if a square 2d matrix is symmetric or not. One way to visually check is look at the diagonal - if the elements are symmetric across that, it is symmetric. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/is_symmetric_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);