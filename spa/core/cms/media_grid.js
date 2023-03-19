import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert,is_function,listen,noop,safe_not_equal,set_data,space,svg_element,text}from"../../web_modules/svelte/internal/index.mjs";import{onMount}from"../../web_modules/svelte/index.mjs";import{isImage,isDoc}from"./media_checker.js";function get_each_context(e,t,n){const s=e.slice();return s[5]=t[n],s}function create_if_block_2(e){let t,n;return{c(){t=element("img"),this.h()},l(e){t=claim_element(e,"IMG",{src:!0,class:!0}),this.h()},h(){t.src!==(n=e[5])&&attr(t,"src",n),attr(t,"class","svelte-l4dsqj")},m(e,n){insert(e,t,n)},p(e,s){s&2&&t.src!==(n=e[5])&&attr(t,"src",n)},d(e){e&&detach(t)}}}function create_if_block_1(e){let t,n;return{c(){t=element("embed"),this.h()},l(e){t=claim_element(e,"EMBED",{src:!0,type:!0,class:!0}),this.h()},h(){t.src!==(n=e[5])&&attr(t,"src",n),attr(t,"type","application/pdf"),attr(t,"class","svelte-l4dsqj")},m(e,n){insert(e,t,n)},p(e,s){s&2&&t.src!==(n=e[5])&&attr(t,"src",n)},d(e){e&&detach(t)}}}function create_if_block(){let t,n,s;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("path"),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var o=children(t);n=claim_element(o,"path",{stroke:!0,d:!0,fill:!0},1),children(n).forEach(detach),s=claim_element(o,"path",{d:!0},1),children(s).forEach(detach),o.forEach(detach),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"d","M5 12l5 5l10 -10"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-check svelte-l4dsqj"),attr(t,"width","65"),attr(t,"height","65"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2.5"),attr(t,"stroke","#1c7fc7"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,o){insert(e,t,o),append(t,n),append(t,s)},d(e){e&&detach(t)}}}function create_each_block(e){let t,f,u,d,o,a=e[5].split("/").pop()+"",c,m,p=e[0].includes(e[5]),r,l,h,g;function v(e,t){if((f==null||t&2)&&(f=!!isDoc(e[5])),f)return create_if_block_1;if((u==null||t&2)&&(u=!!isImage(e[5])),u)return create_if_block_2}let i=v(e,-1),n=i&&i(e),s=p&&create_if_block(e);return{c(){t=element("div"),n&&n.c(),d=space(),o=element("div"),c=text(a),m=space(),s&&s.c(),r=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var l,i=children(t);n&&n.l(i),d=claim_space(i),o=claim_element(i,"DIV",{class:!0}),l=children(o),c=claim_text(l,a),l.forEach(detach),m=claim_space(i),s&&s.l(i),r=claim_space(i),i.forEach(detach),this.h()},h(){attr(o,"class","filename svelte-l4dsqj"),attr(t,"class",l="media"+(e[0].includes(e[5])?" selected":"")+" svelte-l4dsqj")},m(i,a){insert(i,t,a),n&&n.m(t,null),append(t,d),append(t,o),append(o,c),append(t,m),s&&s.m(t,null),append(t,r),h||(g=listen(t,"click",function(){is_function(e[2](e[5]))&&e[2](e[5]).apply(this,arguments)}),h=!0)},p(o,u){e=o,i===(i=v(e,u))&&n?n.p(e,u):(n&&n.d(1),n=i&&i(e),n&&(n.c(),n.m(t,d))),u&2&&a!==(a=e[5].split("/").pop()+"")&&set_data(c,a),u&3&&(p=e[0].includes(e[5])),p?s||(s=create_if_block(e),s.c(),s.m(t,r)):s&&(s.d(1),s=null),u&3&&l!==(l="media"+(e[0].includes(e[5])?" selected":"")+" svelte-l4dsqj")&&attr(t,"class",l)},d(e){e&&detach(t),n&&n.d(),s&&s.d(),h=!1,g()}}}function create_fragment(e){let n,s=e[1],t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block(get_each_context(e,s,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"class","media-grid svelte-l4dsqj")},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,[o]){if(o&7){s=e[1];let i;for(i=0;i<s.length;i+=1){const a=get_each_context(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},i:noop,o:noop,d(e){e&&detach(n),destroy_each(t,e)}}}function instance(e,t,n){let{files:a}=t,{changingMedia:o}=t,{showMediaModal:i}=t,{selectedMedia:s=[]}=t;onMount(async()=>{focus(),window.addEventListener("blur",()=>{let e=document.querySelectorAll("embed");e.forEach(e=>{document.activeElement===e&&r(e.attributes.src.nodeValue)}),window.parent.focus()})});const r=e=>{o!==""&&(n(3,o=e),n(4,i=!1)),s.includes(e)?n(0,s=s.filter(t=>t!==e)):n(0,s=[...s,e])};return e.$$set=e=>{"files"in e&&n(1,a=e.files),"changingMedia"in e&&n(3,o=e.changingMedia),"showMediaModal"in e&&n(4,i=e.showMediaModal),"selectedMedia"in e&&n(0,s=e.selectedMedia)},[s,a,r,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{files:1,changingMedia:3,showMediaModal:4,selectedMedia:0})}}export default Component