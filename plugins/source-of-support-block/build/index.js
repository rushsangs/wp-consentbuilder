(()=>{"use strict";var e,o={259:()=>{const e=window.wp.blocks,o=window.wp.element,r=window.wp.i18n,t=window.wp.blockEditor,n=window.wp.components,s=JSON.parse('{"u2":"consent-form-block/source-of-support-block"}');(0,e.registerBlockType)(s.u2,{edit:function(e){let{attributes:s,setAttributes:l}=e;return(0,o.createElement)("div",(0,t.useBlockProps)(),(0,o.createElement)(n.TextControl,{label:(0,r.__)("Source of Support"),value:s.message,onChange:e=>l({message:e})}))},save:function(e){let{attributes:r}=e;const n=t.useBlockProps.save();return(0,o.createElement)("div",n,r.message)}})}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return o[e](s,s.exports,t),s.exports}t.m=o,e=[],t.O=(o,r,n,s)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,s]=e[u],i=!0,a=0;a<r.length;a++)(!1&s||l>=s)&&Object.keys(t.O).every((e=>t.O[e](r[a])))?r.splice(a--,1):(i=!1,s<l&&(l=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={826:0,431:0};t.O.j=o=>0===e[o];var o=(o,r)=>{var n,s,[l,i,a]=r,c=0;if(l.some((o=>0!==e[o]))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(a)var u=a(t)}for(o&&o(r);c<l.length;c++)s=l[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},r=globalThis.webpackChunksource_of_support_block=globalThis.webpackChunksource_of_support_block||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var n=t.O(void 0,[431],(()=>t(259)));n=t.O(n)})();