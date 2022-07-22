import{SvelteComponent,add_render_callback,append,assign,attr,check_outros,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,get_spread_object,get_spread_update,group_outros,init,insert,listen,mount_component,safe_not_equal,space,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Footer from"./footer.js";import Head from"./head.js";import Nav from"./nav.js";function create_fragment(e){let v=!1,E=()=>{v=!1},p,n,o,w,u,_,d,y,s,a,m,f,j,l,r,b,t,g,c,h,O,C;add_render_callback(e[4]),o=new Head({props:{title:e[0].filename}}),r=new Nav({});const x=[e[0].fields,{allLayouts:e[2]},{content:e[0]}];var i=e[1];function k(){let t={};for(let e=0;e<x.length;e+=1)t=assign(t,x[e]);return{props:t}}return i&&(t=new i(k(e))),c=new Footer({}),{c(){n=element("html"),create_component(o.$$.fragment),w=space(),u=element("link"),_=space(),d=element("link"),y=space(),s=element("body"),a=element("div"),m=element("i"),j=space(),l=element("header"),create_component(r.$$.fragment),b=space(),t&&create_component(t.$$.fragment),g=space(),create_component(c.$$.fragment),this.h()},l(e){n=claim_element(e,"HTML",{lang:!0});var i,f,p,h=children(n);claim_component(o.$$.fragment,h),w=claim_space(h),u=claim_element(h,"LINK",{rel:!0,href:!0}),_=claim_space(h),d=claim_element(h,"LINK",{rel:!0,href:!0}),y=claim_space(h),s=claim_element(h,"BODY",{}),i=children(s),a=claim_element(i,"DIV",{class:!0}),f=children(a),m=claim_element(f,"I",{class:!0}),children(m).forEach(detach),f.forEach(detach),j=claim_space(i),l=claim_element(i,"HEADER",{class:!0}),p=children(l),claim_component(r.$$.fragment,p),p.forEach(detach),b=claim_space(i),t&&claim_component(t.$$.fragment,i),g=claim_space(i),claim_component(c.$$.fragment,i),i.forEach(detach),h.forEach(detach),this.h()},h(){attr(u,"rel","stylesheet"),attr(u,"href","https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"),attr(d,"rel","stylesheet"),attr(d,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),attr(m,"class","fas fa-angle-up"),attr(a,"class",f="scroll-up-btn "+(e[3]>500?" show":"")),attr(l,"class","navigation"),attr(n,"lang","en")},m(i,f){insert(i,n,f),mount_component(o,n,null),append(n,w),append(n,u),append(n,_),append(n,d),append(n,y),append(n,s),append(s,a),append(a,m),append(s,j),append(s,l),mount_component(r,l,null),append(s,b),t&&mount_component(t,s,null),append(s,g),mount_component(c,s,null),h=!0,O||(C=listen(window,"scroll",()=>{v=!0,clearTimeout(p),p=setTimeout(E,100),e[4]()}),O=!0)},p(e,[n]){n&8&&!v&&(v=!0,clearTimeout(p),scrollTo(window.pageXOffset,e[3]),p=setTimeout(E,100));const r={};n&1&&(r.title=e[0].filename),o.$set(r),(!h||n&8&&f!==(f="scroll-up-btn "+(e[3]>500?" show":"")))&&attr(a,"class",f);const c=n&5?get_spread_update(x,[n&1&&get_spread_object(e[0].fields),n&4&&{allLayouts:e[2]},n&1&&{content:e[0]}]):{};if(i!==(i=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}i?(t=new i(k(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s,g)):t=null}else i&&t.$set(c)},i(e){if(h)return;transition_in(o.$$.fragment,e),transition_in(r.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(c.$$.fragment,e),h=!0},o(e){transition_out(o.$$.fragment,e),transition_out(r.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(c.$$.fragment,e),h=!1},d(e){e&&detach(n),destroy_component(o),destroy_component(r),t&&destroy_component(t),destroy_component(c),O=!1,C()}}}function instance(e,t,n){let{content:s}=t,{layout:o}=t,{allLayouts:i}=t,a;function r(){n(3,a=window.pageYOffset)}return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,o=e.layout),"allLayouts"in e&&n(2,i=e.allLayouts)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,allLayouts:2})}}export default Component