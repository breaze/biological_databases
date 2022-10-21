"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6524],{6524:function(e,n,t){t.r(n);var r=t(96234),a=t(33028),o=t(30969),i=t(20098),c=t(78742),s=t(21268),l=t(70054),u=t(77491),d=t(65629),p=t(2374),f=t(90550),m=t(81073),h=t(34760),g=t.n(h),v=t(6400),j=t(99703),x=t(37574),S=(0,p.ZL)()((function(){return{compact:{paddingRight:0,paddingTop:0,paddingBottom:0}}})),w=["clipPos","flags"];function Z(e){var n=S().classes,t=e.feature.flags;return(0,x.jsxs)(v.BaseCard,(0,a.Z)((0,a.Z)({},e),{},{title:"Flags",children:[(0,x.jsx)(v.SimpleValue,{name:"Flag",value:t}),(0,x.jsx)(i.Z,{children:["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"].map((function(e,r){var a=t&1<<r,o="".concat(e,"_").concat(a);return(0,x.jsx)(c.Z,{control:(0,x.jsx)(s.Z,{className:n.compact,checked:Boolean(a),name:e,readOnly:!0}),label:e},o)}))})]}))}function y(e){var n=e.value,t=(0,o.useState)(!1),a=(0,r.Z)(t,2),i=a[0],c=a[1],s=(0,o.useState)(!1),l=(0,r.Z)(s,2),u=l[0],d=l[1],p=String(n);return p.length>100?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{type:"button",onClick:function(){g()(p),d(!0),setTimeout((function(){d(!1)}),700)},children:u?"Copied to clipboard":"Copy"}),(0,x.jsx)("button",{type:"button",onClick:function(){return c((function(e){return!e}))},children:i?"Show less":"Show more"}),(0,x.jsx)("div",{children:i?p:"".concat(p.slice(0,100),"...")})]}):(0,x.jsx)("div",{children:p})}function b(e){var n=e.tag,t=e.model,o=(0,m.getSession)(t);return(0,x.jsxs)(v.BaseCard,(0,a.Z)((0,a.Z)({},e),{},{title:"Supplementary alignments",children:[(0,x.jsx)(l.Z,{children:"List of supplementary alignment locations"}),(0,x.jsx)("ul",{children:n.split(";").filter((function(e){return!!e})).map((function(e,n){var a=e.split(","),i=(0,r.Z)(a,4),c=i[0],s=i[1],l=i[2],d=function(e){for(var n=(0,j.parseCigar)(e),t=0,r=0;r<n.length;r+=2){var a=+n[r],o=n[r+1];"H"!==o&&"S"!==o&&"I"!==o&&(t+=a)}return t}(i[3]),p=Math.floor(d/5),f=+s,m=+s+d,h="".concat(c,":").concat(Math.max(1,f-p),"-").concat(m+p),g=f.toLocaleString("en-US"),v=m.toLocaleString("en-US"),S="".concat(c,":").concat(g,"-").concat(v," (").concat(l,")");return(0,x.jsx)("li",{children:(0,x.jsx)(u.Z,{onClick:function(e){e.preventDefault();var n=t.view;try{if(!n)throw new Error("No view associated with this view anymore");n.navToLocString(h)}catch(r){console.error(r),o.notify("".concat(r))}},href:"#",children:S})},"".concat(h,"-").concat(n))}))})]}))}function C(e){var n=e.locString,t=e.model,r=(0,m.getSession)(t);return(0,x.jsx)(u.Z,{onClick:function(){var e=t.view;try{e?e.navToLocString(n):r.notify("No view associated with this feature detail panel anymore","warning")}catch(a){console.error(a),r.notify("".concat(a))}},href:"#",children:n})}n.default=(0,f.observer)((function(e){var n=e.model,t=JSON.parse(JSON.stringify(n.featureData)),r=t.tags&&t.tags.SA||t.SA;return(0,x.jsxs)(d.Z,{"data-testid":"alignment-side-drawer",children:[(0,x.jsx)(v.FeatureDetails,(0,a.Z)((0,a.Z)({},e),{},{omit:w,feature:t,formatter:function(e,t){return"next_segment_position"===t?(0,x.jsx)(C,{model:n,locString:e}):(0,x.jsx)(y,{value:e})}})),r?(0,x.jsx)(b,{model:n,tag:r}):null,(0,x.jsx)(Z,(0,a.Z)({feature:t},e))]})}))}}]);
//# sourceMappingURL=6524.d5f5b88c.chunk.js.map