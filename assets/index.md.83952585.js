import{d as e,r as l,o as t,a,b as o,c as n,e as s,f as r,w as i,F as d,g as c,u,s as m}from"./app.5100c776.js";var p=e({setup:()=>{const e=l();t((()=>{}));const a=l([{insert:"Hello "},{insert:"World!",attributes:{bold:!0}},{insert:"\n"}]),o=l("");let n=null;return{selectedTheme:l("snow"),selectedToolbar:l("essential"),myEditor:e,clickMe:()=>{o.value=null==n?void 0:n.root.innerHTML,console.log(null==n?void 0:n.root.innerHTML)},myContent:a,myHTML:o,handleReady:e=>{n=e},handleTextChange:(e,l,t)=>{o.value=null==n?void 0:n.root.innerHTML}}}});const b={class:"flex flex-col md:flex-row gap-3"},f={class:"flex flex-col w-28"},h=r("div",{class:"text-sm text-gray-400 font-bold mb-2"},"THEME",-1),x={class:"flex md:flex-col gap-2 mb-4"},v=r("div",{class:"text-sm text-gray-400 font-bold mb-2"},"TOOLBAR",-1),y={class:"flex md:flex-col gap-2 mb-4"},g={class:"initial flex-1 flex flex-col"};p.render=function(e,l,t,i,d,c){const u=a("VOptions"),m=a("QuillEditor");return o(),n("div",b,[s(" Theme and Toolbar menu "),r("div",f,[h,r("div",x,[r(u,{name:"theme",selected:e.selectedTheme,"onUpdate:selected":l[1]||(l[1]=l=>e.selectedTheme=l),options:[{value:"snow",label:"Snow"},{value:"bubble",label:"Bubble"},{value:"",label:"None"}]},null,8,["selected"])]),v,r("div",y,[r(u,{name:"toolbar",selected:e.selectedToolbar,"onUpdate:selected":l[2]||(l[2]=l=>e.selectedToolbar=l),options:[{value:"essential",label:"Essential"},{value:"minimal",label:"Minimal"},{value:"full",label:"Full"},{value:"",label:"None"}]},null,8,["selected"])])]),r("div",g,[r(m,{ref:"myEditor",class:"h-80 flex-1",content:e.myContent,"onUpdate:content":l[3]||(l[3]=l=>e.myContent=l),onReady:e.handleReady,onTextChange:e.handleTextChange,theme:e.selectedTheme,toolbar:e.selectedToolbar},null,8,["content","onReady","onTextChange","theme","toolbar"])])])};const T={class:"border-t border-gray-200 block py-4"},w=r("header",{class:"text-center pb-5"},[r("h2",{class:"font-semibold border-none mb-2"},"Interactive Demo"),r("p",{class:"mx-auto max-w-lg my-2"}," What you see is what you get. Try out our interactive demo and discover all the features packed into VueUpQuill. ")],-1),M={class:"frontpage sponsors"},C=r("h2",null,"Sponsors",-1),L=r("br",null,null,-1),k=r("a",{href:"https://paypal.me/bledex",target:"_blank",rel:"noopener"},"Buy me a cup of coffee",-1),U='{"title":"Home","description":"","frontmatter":{"home":true,"heroImage":"/quill.svg","actionText":"Get Started","actionLink":"/guide/","altActionText":"Learn More","altActionLink":"/guide/why","features":[{"title":"💚 Built With Vue 3","details":"More powerful and performant framework than ever before."},{"title":"🧙‍♂️ Fully Typescript","details":"VueUpQuill source code is written entirely in TypeScript."},{"title":"🛠️ Easy To Use","details":"Straightforward implementation through a simple API."}],"footer":"MIT Licensed | Copyright © 2020-present Luthfi Masruri & VueUpQuill Contributors"},"relativePath":"index.md","lastUpdated":1615901655716}',E={};const H=Object.assign(E,{expose:[],setup:function(e){return(e,l)=>{const t=a("ClientOnly");return o(),n("div",null,[r("div",T,[w,r(t,null,{default:i((()=>[r(p)])),_:1})]),r("div",M,[C,(o(!0),n(d,null,c(u(m),(({href:l,src:t,name:a})=>(o(),n("a",{href:l,target:"_blank",rel:"noopener","aria-label":"sponsor-img"},[r("img",{src:e.$withBase(t),alt:a},null,8,["src","alt"])],8,["href"])))),256)),L,k])])}}});export default H;export{U as __pageData};
