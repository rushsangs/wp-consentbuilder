(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components;wp.element.createElement;const r=window.wp.element,a=JSON.parse('{"u2":"create-block/participation-of-patient-block"}');(0,e.registerBlockType)(a.u2,{edit:function(e){var r=(0,o.useBlockProps)(),a=wp.element.createElement(o.RichText,Object.assign(r,{tagName:"p",value:e.attributes.content,allowedFormats:["core/bold","core/italic"],onChange:function(t){e.setAttributes({content:t})},placeholder:(0,t.__)("Participants of patients...")}));return wp.element.createElement(n.TextareaControl,Object.assign(r,{label:"Participation",contenteditable:!0,value:e.attributes.content}),a)},save:function(e){let{attributes:t}=e;const n=o.useBlockProps.save();return(0,r.createElement)("div",n,t.message)}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){for(var[o,r,a]=e[p],c=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(p--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,r,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,c,l]=o,s=0;if(i.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var p=l(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},o=globalThis.webpackChunkparticipation_of_patient_block=globalThis.webpackChunkparticipation_of_patient_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[431],(()=>n(259)));r=n.O(r)})();