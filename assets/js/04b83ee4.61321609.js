"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9133],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:7},s="The Mat Object",p={unversionedId:"Mat",id:"Mat",title:"The Mat Object",description:"The Mat Object is unique to Hedgehog Lab and represents a matrice. It can be 1 dimensional, 2d, 3d and so on.",source:"@site/Hedgehog-Script/Mat.mdx",sourceDirName:".",slug:"/Mat",permalink:"/Hedgehog-Script/Mat",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/Hedgehog-Script/Variables"},next:{title:"Classes",permalink:"/Hedgehog-Script/Classes"}},l={},u=[{value:"We support many functions for matrices ...",id:"we-support-many-functions-for-matrices-",level:3}],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-mat-object"},"The Mat Object"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Mat")," Object is unique to Hedgehog Lab and represents a matrice. It can be 1 dimensional, 2d, 3d and so on. "),(0,o.kt)("p",null,"To declare one, it's like declaring an instance of a JavaScript object (by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," keyword): "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/mat1_hbook",width:"100%",height:"500px"}),(0,o.kt)("p",null,"Don't forget to use ",(0,o.kt)("inlineCode",{parentName:"p"},"( )")," to construct it!"),(0,o.kt)("h3",{id:"we-support-many-functions-for-matrices-"},"We support many functions for matrices ..."),(0,o.kt)("p",null,"from basic summation, multiplication, cross products, decomposition, filtering for preprocessing data and more. All built in, easy to use. We will cover some\nover the course of this book and in the back there will be a reference for all current stable functions. "),(0,o.kt)("p",null,"The fundamental properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mat")," object are these:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"row"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cols"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"val"),". And from ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," stems ",(0,o.kt)("inlineCode",{parentName:"p"},"val.length"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"val[0].length"),". These are vital for matrices. ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is especially important as it allows one to transform a Mat\nobject into a JavaScript array whenever necessary. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/mat2_hbook",width:"100%",height:"500px"}),(0,o.kt)("p",null,"All built in functions for Hedgehog lab work for both JavaScript arrays, ",(0,o.kt)("inlineCode",{parentName:"p"},"Tensor")," objects and ",(0,o.kt)("inlineCode",{parentName:"p"},"Mat")," objects. However, if you only have a JavaScript array you are limited to JavaScript's libraries. Here are some examples of using ",(0,o.kt)("inlineCode",{parentName:"p"},"Mat")," or its counterpart in a function:"),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/mat3_hbook",width:"100%",height:"500px"}))}m.isMDXComponent=!0}}]);