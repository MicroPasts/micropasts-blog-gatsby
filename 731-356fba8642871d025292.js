"use strict";(self.webpackChunkmicropasts_blog_gatsby=self.webpackChunkmicropasts_blog_gatsby||[]).push([[731],{6731:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(8032),a=n(7294),i=n(7762);n(2369);let r;const c=new WeakMap,s=navigator.connection||navigator.mozConnection||navigator.webkitConnection,l=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,n,o,a,i){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function l(e){this.removeEventListener("load",l);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==a||a({wasCached:s})})).catch((e=>{u(this,c),null==i||i(e)})):(u(this,c),null==a||a({wasCached:s}))}return r.addEventListener("load",l),null==o||o({wasCached:s}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&l.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",l)}}function g(e,t,a,i,l,u,g){if(!(0,o.h)()){let o;const f=(h=()=>{o=d(e,t,a,l,u,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==s?void 0:s.effectiveType)||null!=s&&s.saveData?"2500px":"1250px"})),function(e){return c.set(e,h),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return h(),function(){}}),v=f(e);var b,m;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=i.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(m=i.objectPosition)?m:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(843).then(n.t.bind(n,4843,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),v()}}var h;return d(e,t,a,l,u,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:s,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=e,m=(0,o._)(e,l);const{width:h,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=t;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,i.uS)(a.createElement(o.L,{layout:v,width:h,height:f},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,h,f,p,b,d))),a.createElement(o.M,(0,o.a)({},m,{width:h,height:f,className:s},(0,o.b)(r,c,w,n,u)))))}}}]);
//# sourceMappingURL=731-356fba8642871d025292.js.map