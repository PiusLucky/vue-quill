import{d as e,u as t,c as a,p as s,o,a as l,b as i,q as c,s as n,t as r,_ as d,x as u,y as v,F as f,r as m,g as p,z as k}from"./app.d24aec02.js";u("data-v-0cb9fda2");const h={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},x={key:2,class:"description"};v();var _=e({setup(e){const{site:u,frontmatter:v}=t(),f=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:o}=v.value;return e||t||a||s&&o})),m=a((()=>v.value.heroText||u.value.title));return(e,t)=>s(f)?(o(),l("header",h,[s(v).heroImage?(o(),l("figure",y,[i("img",{class:"image",src:s(c)(s(v).heroImage),alt:s(v).heroAlt},null,8,["src","alt"])])):n("",!0),s(m)?(o(),l("h1",g,r(s(m)),1)):n("",!0),s(v).tagline?(o(),l("p",x,r(s(v).tagline),1)):n("",!0),s(v).actionLink&&s(v).actionText?(o(),l(d,{key:3,item:{link:s(v).actionLink,text:s(v).actionText},class:"action"},null,8,["item"])):n("",!0),s(v).altActionLink&&s(v).altActionText?(o(),l(d,{key:4,item:{link:s(v).altActionLink,text:s(v).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});_.__scopeId="data-v-0cb9fda2",u("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};v();var j=e({setup(e){const{frontmatter:c}=t(),d=a((()=>c.value.features&&c.value.features.length>0)),u=a((()=>c.value.features?c.value.features:[]));return(e,t)=>s(d)?(o(),l("div",I,[i("div",T,[i("div",b,[i("div",A,[(o(!0),l(f,null,m(s(u),((e,t)=>(o(),l("section",{key:t,class:"feature"},[e.title?(o(),l("h2",L,r(e.title),1)):n("",!0),e.details?(o(),l("p",$,r(e.details),1)):n("",!0)])))),128))])])])])):n("",!0)}});j.__scopeId="data-v-e39c13e0",u("data-v-30918238");const q={key:0,class:"footer"},w={class:"container"},z={class:"text"};v();var C=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(o(),l("footer",q,[i("div",w,[i("p",z,r(s(a).footer),1)])])):n("",!0)}});C.__scopeId="data-v-30918238",u("data-v-32eddf2f");const F={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};v();var D=e({setup:e=>(e,t)=>{const a=p("Content");return o(),l("main",F,[i(_),k(e.$slots,"hero",{},void 0,!0),i(j),i("div",B,[i(a)]),k(e.$slots,"features",{},void 0,!0),i(C),k(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-32eddf2f";export default D;
