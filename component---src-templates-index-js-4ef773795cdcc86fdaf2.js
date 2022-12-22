"use strict";(self.webpackChunkmicropasts_blog_gatsby=self.webpackChunkmicropasts_blog_gatsby||[]).push([[332],{2765:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(1883);var o=e=>{let{title:t,description:a,pathname:o,children:l,featured:c}=e;const{title:m,description:s,image:i,siteUrl:d,twitterHandle:p}=(0,n.useStaticQuery)("1547238275").site.siteMetadata,u=function(e,t){return e?null==e?void 0:e.childImageSharp.gatsbyImageData.images.fallback.src:t}(c,i),g={title:t||m,description:a||s,image:""+d+u,url:""+d+(o||""),twitterHandle:p};return r.createElement(r.Fragment,null,r.createElement("title",null,g.title),r.createElement("meta",{name:"description",content:g.description}),r.createElement("meta",{name:"image",content:g.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:g.title}),r.createElement("meta",{name:"twitter:url",content:g.url}),r.createElement("meta",{name:"twitter:description",content:g.description}),r.createElement("meta",{name:"twitter:image",content:g.image}),r.createElement("meta",{name:"twitter:creator",content:g.twitterHandle}),r.createElement("meta",{property:"og:url",content:g.url.toString()}),r.createElement("meta",{property:"og:title",content:g.title}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:site_name",content:"Museologi.st"}),r.createElement("meta",{property:"og:description",content:g.description}),r.createElement("meta",{property:"og:locale",content:"en-gb"}),r.createElement("meta",{property:"og:image",content:g.image.toString()}),r.createElement("meta",{property:"og:image:alt",content:"An image representing this post"}),r.createElement("meta",{property:"og:image:width",content:"600"}),r.createElement("meta",{property:"og:image:width",content:"600"}),r.createElement("meta",{property:"og:image:type",content:"image/jpeg"}),l)}},1101:function(e,t,a){a.r(t),a.d(t,{Head:function(){return O},default:function(){return A}});var r=a(7294),n=a(2798),o=a(4184),l=a.n(o),c=a(6792),m=/-(.)/g;var s=a(5893);const i=e=>{return e[0].toUpperCase()+(t=e,t.replace(m,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,{displayName:t=i(e),Component:a,defaultProps:n}={}){const o=r.forwardRef((({className:t,bsPrefix:r,as:n=a||"div",...o},m)=>{const i=(0,c.vE)(r,e);return(0,s.jsx)(n,{ref:m,className:l()(t,i),...o})}));return o.defaultProps=n,o.displayName=t,o}var p=e=>r.forwardRef(((t,a)=>(0,s.jsx)("div",{...t,ref:a,className:l()(t.className,e)})));const u=r.forwardRef((({bsPrefix:e,className:t,variant:a,as:r="img",...n},o)=>{const m=(0,c.vE)(e,"card-img");return(0,s.jsx)(r,{ref:o,className:l()(a?`${m}-${a}`:m,t),...n})}));u.displayName="CardImg";var g=u;const f=r.createContext(null);f.displayName="CardHeaderContext";var E=f;const b=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},o)=>{const m=(0,c.vE)(e,"card-header"),i=(0,r.useMemo)((()=>({cardHeaderBsPrefix:m})),[m]);return(0,s.jsx)(E.Provider,{value:i,children:(0,s.jsx)(a,{ref:o,...n,className:l()(t,m)})})}));b.displayName="CardHeader";var y=b;const v=p("h5"),h=p("h6"),x=d("card-body"),N=d("card-title",{Component:v}),w=d("card-subtitle",{Component:h}),C=d("card-link",{Component:"a"}),k=d("card-text",{Component:"p"}),P=d("card-footer"),j=d("card-img-overlay"),_=r.forwardRef((({bsPrefix:e,className:t,bg:a,text:r,border:n,body:o,children:m,as:i="div",...d},p)=>{const u=(0,c.vE)(e,"card");return(0,s.jsx)(i,{ref:p,...d,className:l()(t,u,a&&`bg-${a}`,r&&`text-${r}`,n&&`border-${n}`),children:o?(0,s.jsx)(x,{children:m}):m})}));_.displayName="Card",_.defaultProps={body:!1};var H=Object.assign(_,{Img:g,Title:N,Subtitle:w,Body:x,Link:C,Text:k,Header:y,Footer:P,ImgOverlay:j}),Z=a(1883);var R=e=>{let{post:t}=e;return r.createElement(H,{className:"border-0"},r.createElement(H.Body,{className:"bg-white border-0 rounded-0"},r.createElement("div",{className:"h-100"},r.createElement(Z.Link,{to:t.frontmatter.permalink,className:"stretched-link stretched-link__blog_post"},r.createElement("h1",{className:"lead text-black fw-bold mb-1"},t.frontmatter.title),r.createElement("h2",{className:"text-primary small"},t.frontmatter.date," Authors: ",t.frontmatter.author&&t.frontmatter.author.map((e=>e+" "))),r.createElement("p",{className:"text-dark"},t.excerpt)))))},I=a(682),S=a(4051),$=a(5697),B=a.n($);function L(e){const{pageContext:t}=e,{pageNumber:a,numberOfPages:n,humanPageNumber:o,previousPagePath:l,nextPagePath:c}=t;return r.createElement(I.Z,null,r.createElement("nav",{className:"pagination py-2"},o>1?r.createElement(Z.Link,{title:"Go to previous page",to:l},"← Previous"):r.createElement("span",null),r.createElement("strong",null,"Page ",a+1," of ",n),o<n?r.createElement(Z.Link,{title:"Go to next page",to:c},"Next →"):r.createElement("span",null)))}L.propType={pageContext:B().object.isRequired};var M=a(2765);var A=e=>{const t=e.data.allMarkdownRemark.edges.filter((e=>!!e.node.frontmatter.date)).map((e=>r.createElement(R,{key:e.node.id,post:e.node})));return r.createElement(n.Z,null,r.createElement(I.Z,null,r.createElement(S.Z,null,r.createElement("h1",{className:"ml-4 mt-4"},"Posts, stories and more"),r.createElement(S.Z,null,t))),r.createElement(I.Z,{fluid:!0,className:"mx-auto text-center bg-white"},r.createElement(L,{pageContext:e.pageContext})))};const O=()=>r.createElement(M.Z,{title:"Blog and news",description:"A sporadically populated blog; news, stories, tips"})}}]);
//# sourceMappingURL=component---src-templates-index-js-4ef773795cdcc86fdaf2.js.map