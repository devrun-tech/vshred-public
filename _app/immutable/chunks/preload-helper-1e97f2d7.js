import{s as h,E as a}from"./index-f472546d.js";const c=[];function _(i,u=a){let s;const e=new Set;function o(n){if(h(i,n)&&(i=n,s)){const l=!c.length;for(const t of e)t[1](),c.push(t,i);if(l){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}function f(n){o(n(i))}function r(n,l=a){const t=[n,l];return e.add(t),e.size===1&&(s=u(o)||a),n(i),()=>{e.delete(t),e.size===0&&(s(),s=null)}}return{set:o,update:f,subscribe:r}}const m="modulepreload",b={},d="/_app/immutable/",g=function(u,s){return!s||s.length===0?u():Promise.all(s.map(e=>{if(e=`${d}${e}`,e in b)return;b[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${f}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":m,o||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),o)return new Promise((n,l)=>{r.addEventListener("load",n),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>u())};export{g as _,_ as w};
