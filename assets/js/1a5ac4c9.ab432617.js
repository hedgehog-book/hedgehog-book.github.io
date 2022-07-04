"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Functions",l={unversionedId:"Functions",id:"Functions",title:"Functions",description:"Functions are generally a JavaScript topic and more can be found through various tutorials on JavaScript and such.",source:"@site/Hedgehog-Script/Functions.mdx",sourceDirName:".",slug:"/Functions",permalink:"/Hedgehog-Script/Functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Mat Object",permalink:"/Hedgehog-Script/Mat"}},p={},s=[{value:"Create a Function",id:"create-a-function",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"functions"},"Functions"),(0,o.kt)("p",null,"Functions are generally a JavaScript topic and more can be found through various tutorials on JavaScript and such. "),(0,o.kt)("h2",{id:"create-a-function"},"Create a Function"),(0,o.kt)("p",null,"To create your own function in hlab.app, simple type ",(0,o.kt)("inlineCode",{parentName:"p"},"{function_name}({parameter1}, {parameter2}, ... ) { {code_text} }")),(0,o.kt)("p",null,"As an example, let's create a function that adds 2 and divides by 3. We need a precise name, and use lower case, preferably with underscore notation like this: my_name_is_this."),(0,o.kt)("p",null,"We'll go with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"oper1")," for operation1. Since this will help us remember it's an operation and we can reference it numerically if it grows large enough."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-oper1(input)",metastring:"{","{":!0},"    //code goes here..\n}\n")),(0,o.kt)("p",null,"Now let's write the logic of it, that is the add 2 divide by 3 part (and return the value):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-oper1(input)",metastring:"{","{":!0},"    let val = (input + 2)/3;\n    return val;\n}\n")),(0,o.kt)("p",null,"OR "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-oper1(input)",metastring:"{","{":!0},"    return ((input + 2)/3)\n}\n")),(0,o.kt)("p",null,"Functions are the main driver of code. You write functions so you can reuse code blocks, or use them with variations through parameters or input changes. They're very important, and if you need a grasp of them, we highly recommend reading the MDN documents: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions")))}f.isMDXComponent=!0}}]);