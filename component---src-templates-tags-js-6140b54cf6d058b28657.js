"use strict";(self.webpackChunkmicropasts_blog_gatsby=self.webpackChunkmicropasts_blog_gatsby||[]).push([[942],{2526:function(e,t,a){a.d(t,{Z:function(){return U}});var r=a(7294),s=a(4184),c=a.n(s),n=a(6792),l=/-(.)/g;var d=a(5893);const m=e=>{return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function i(e,{displayName:t=m(e),Component:a,defaultProps:s}={}){const l=r.forwardRef((({className:t,bsPrefix:r,as:s=a||"div",...l},m)=>{const i=(0,n.vE)(r,e);return(0,d.jsx)(s,{ref:m,className:c()(t,i),...l})}));return l.defaultProps=s,l.displayName=t,l}var o=e=>r.forwardRef(((t,a)=>(0,d.jsx)("div",{...t,ref:a,className:c()(t.className,e)})));const b=r.forwardRef((({bsPrefix:e,className:t,variant:a,as:r="img",...s},l)=>{const m=(0,n.vE)(e,"card-img");return(0,d.jsx)(r,{ref:l,className:c()(a?`${m}-${a}`:m,t),...s})}));b.displayName="CardImg";var f=b;const g=r.createContext(null);g.displayName="CardHeaderContext";var p=g;const u=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...s},l)=>{const m=(0,n.vE)(e,"card-header"),i=(0,r.useMemo)((()=>({cardHeaderBsPrefix:m})),[m]);return(0,d.jsx)(p.Provider,{value:i,children:(0,d.jsx)(a,{ref:l,...s,className:c()(t,m)})})}));u.displayName="CardHeader";var w=u;const A=o("h5"),v=o("h6"),E=i("card-body"),h=i("card-title",{Component:A}),x=i("card-subtitle",{Component:v}),y=i("card-link",{Component:"a"}),N=i("card-text",{Component:"p"}),k=i("card-footer"),C=i("card-img-overlay"),I=r.forwardRef((({bsPrefix:e,className:t,bg:a,text:r,border:s,body:l,children:m,as:i="div",...o},b)=>{const f=(0,n.vE)(e,"card");return(0,d.jsx)(i,{ref:b,...o,className:c()(t,f,a&&`bg-${a}`,r&&`text-${r}`,s&&`border-${s}`),children:l?(0,d.jsx)(E,{children:m}):m})}));I.displayName="Card",I.defaultProps={body:!1};var P=Object.assign(I,{Img:f,Title:h,Subtitle:x,Body:E,Link:y,Text:N,Header:w,Footer:k,ImgOverlay:C}),R=a(4051),Z=a(1555),B=a(1883),S=a(3723);var U=e=>{let{post:t}=e;return r.createElement(P,{className:"border-0 my-3"},r.createElement(R.Z,{className:"row g-0"},r.createElement(Z.Z,{md:4},null!==t.frontmatter.featuredImage?r.createElement(S.G,{image:(0,S.c)(t.frontmatter.featuredImage),alt:t.frontmatter.title,className:"img-fluid rounded-start"}):r.createElement(S.S,{src:"../../images/img.png",alt:"A stand in image",width:400,height:250,placeholder:"BLURRED",className:"img-fluid rounded-start",__imageData:a(2342)})),r.createElement(Z.Z,{md:8},r.createElement(P.Body,{className:"bg-white"},r.createElement(B.Link,{to:t.frontmatter.permalink,className:"stretched-link stretched-link__blog_post"},r.createElement("h1",{className:"lead text-black fw-bold mb-3 mt-0"},t.frontmatter.title),r.createElement("h2",{className:"text-primary small"},t.frontmatter.date," Authors: ",t.frontmatter.author&&t.frontmatter.author.map((e=>e+" "))),r.createElement("p",{className:"text-dark"},t.excerpt))))))}},6602:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f}});var r=a(8029),s=a.n(r),c=a(7294),n=a(1985),l=a(1883),d=a(2526),m=a(682),i=a(4051),o=a(1555),b=a(2765);t.default=e=>{let{pageContext:t,data:a}=e;const{tag:r}=t,{edges:b,totalCount:f}=a.allMarkdownRemark,g=f+" post"+(1===f?"":"s")+' tagged with "'+s()(r)+'"';return c.createElement(n.Z,null,c.createElement(m.Z,null,c.createElement(i.Z,null,c.createElement("h1",{className:"ml-4 mt-4"},g),c.createElement(i.Z,null,b.map((e=>{let{node:t}=e;return c.createElement(d.Z,{key:t.id,post:t})}))),c.createElement(o.Z,{md:4},c.createElement(l.Link,{className:"my-3 btn-dark btn",to:"/tags"},"All tags")))))};function f(e){let{pageContext:t}=e;return c.createElement(b.Z,{title:"Pages tagged with "+t.tag})}},2342:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4ElEQVR42hXC23LSaAAA4LyRM174Cl6uzuyoF86uW1Grtdu63Z3a7moPo1SgtKFHaEqgEAI5kUBOTf78IflzIIRAgbYz6o2v4uw3H5ZvTbYIb7cRsaqvWYEKB3pvYKBEBgHwRir0gTdU7cBwo67hyCZSLV9QQVsDbc3A0hUvRw93qHin1hfBIIgnMBiZXuLG16Y7cKOJFSTOYGq40aUTatBTLUcGPdmEvKxheTrO1IJMPfxcC3E2FuypFU6j0RQNxv7wuheOvGTW64/tILGD2PKiy56nQ6RDR9JMDGeTAj85EG9w8TrLTdLcTV68rcNv4fWP8e334eyrn0xRPEZRgqIh6sem49l+X7ds1YTYx+PuSrry9j98cS27tJ5Z/jez9CG/uHm08oU8qYsA+cnsZvr1e3w18Qcx6kfQRU7YBw4y7B62ub2fTWdP93YbRFGkqU6L7rI0WyPIIl7Yz+1m0wf7ueoFaSN0dXMbj0coDFAY2J5nWAAr4bjEyUCxNJ7PbfyZ33qX2fxL4lsIAqCJstjstpvNWukY3yHPTz3fG88m/bjv+q7tWNja66cqr5kds3V+MvfL3YVH9x7fvyMytAuBIvGri08+raeIw7R92eEbpdJRVtU6k9mVPwgc38Gos7LMSiovlvc2lp4//rK+TBb2ja4EdUUSuFe/P3z24N7f87/q3TaQGKVZps8PdYHWxYbYJDGuSolUQ25Sux+X38z94fHN2zDS2ixUOnqn/f79amr++Yd/XssMpTMXBle7ZC406kyrF+VaEWOJklSr0ie5uScPU89SG++W+PIZ6PBAFhSh9WJ+4beXL1dXXhkCrTFVi7+w2Cpk/m+wJMaXDgXylCUK+NZa9aiQ2d6migeww5kSpwrs1s7eyvrG24WUQpMaXYZsBfJVyFQgS1osgXElXKqcajRpt2lbbHgKY4u0wVOGQJvtZk8WdIGpE8cceaw0CLN1BtkyZMqgRYBW6SdCvAId3qIkUQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/4bc87957d60d6f42c5b183318ba7b1b0/20850/img.png","srcSet":"/static/4bc87957d60d6f42c5b183318ba7b1b0/994f0/img.png 100w,\\n/static/4bc87957d60d6f42c5b183318ba7b1b0/4bbad/img.png 200w,\\n/static/4bc87957d60d6f42c5b183318ba7b1b0/20850/img.png 400w,\\n/static/4bc87957d60d6f42c5b183318ba7b1b0/ddb6f/img.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/4bc87957d60d6f42c5b183318ba7b1b0/90ebf/img.webp 100w,\\n/static/4bc87957d60d6f42c5b183318ba7b1b0/59b5d/img.webp 200w,\\n/static/4bc87957d60d6f42c5b183318ba7b1b0/697e6/img.webp 400w,\\n/static/4bc87957d60d6f42c5b183318ba7b1b0/96b3c/img.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":250}')}}]);
//# sourceMappingURL=component---src-templates-tags-js-6140b54cf6d058b28657.js.map