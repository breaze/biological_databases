"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6400],{6400:function(e,n,t){t.r(n),t.d(n,{Attributes:function(){return we},BaseAttributes:function(){return ye},BaseCard:function(){return de},BaseCoreDetails:function(){return je},BasicValue:function(){return pe},FeatureDetails:function(){return Ne},FieldName:function(){return fe},SimpleValue:function(){return he},UriLink:function(){return ve},default:function(){return Se},useStyles:function(){return le}});var r=t(59740),i=t(33028),a=t(68079),s=t(96234),o=t(30969),c=t(51921),u=t(1108),l=t(94927),d=t(70054),f=t(28744),p=t(21777),h=t(74466),m=t(2374),x=t(23038),g=t(7456),j=t(90550),v=t(38184),Z=t.n(v),b=t(81073),w=t(53557),y=t(32723),C=t(34795),N=t(69852),S=t(3562),k=t(66581),q=t(89003),_=t(28712),F=t(34760),B=t.n(F),D=t(92256),T=t(48651),E=t(17984),L=t(35436),I=t(52907),O=t(88581),G=t(37574),M=(0,m.ZL)()((function(e){return{formElt:{margin:e.spacing(3),width:400},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogContent:{width:"80em"}}}));function U(e){var n=e.handleClose,t=e.intronBp,r=e.upDownBp,i=M().classes,a=(0,o.useState)("".concat(t)),c=(0,s.Z)(a,2),u=c[0],l=c[1],d=(0,o.useState)("".concat(r)),f=(0,s.Z)(d,2),p=f[0],m=f[1],x=!Number.isNaN(+u),g=!Number.isNaN(+p);return(0,G.jsxs)(D.Z,{maxWidth:"xl",open:!0,onClose:function(){return n()},children:[(0,G.jsxs)(T.Z,{children:["Feature sequence settings",n?(0,G.jsx)(k.Z,{className:i.closeButton,onClick:function(){return n()},children:(0,G.jsx)(O.Z,{})}):null]}),(0,G.jsx)(h.Z,{}),(0,G.jsxs)(E.Z,{className:i.dialogContent,children:[(0,G.jsx)(L.Z,{label:"Number of intronic bases around splice site to display",className:i.formElt,value:u,helperText:x?"":"Not a number",error:!x,onChange:function(e){return l(e.target.value)}}),(0,G.jsx)(L.Z,{label:"Number of bases up/down stream of feature to display",className:i.formElt,value:p,helperText:g?"":"Not a number",error:!g,onChange:function(e){return m(e.target.value)}})]}),(0,G.jsxs)(I.Z,{children:[(0,G.jsx)(N.Z,{onClick:function(){return n({upDownBp:+p,intronBp:+u})},disabled:!x||!g,color:"primary",variant:"contained",children:"Submit"}),(0,G.jsx)(N.Z,{onClick:function(){return n()},color:"secondary",autoFocus:!0,variant:"contained",children:"Cancel"})]})]})}var R=t(14079),A=(0,m.ZL)()((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogContent:{}}}));function H(e){var n=e.handleClose,t=A().classes;return(0,G.jsxs)(D.Z,{maxWidth:"xl",open:!0,onClose:function(){return n()},children:[(0,G.jsxs)(T.Z,{children:["Feature sequence panel",n?(0,G.jsx)(k.Z,{className:t.closeButton,onClick:function(){return n()},children:(0,G.jsx)(O.Z,{})}):null]}),(0,G.jsx)(h.Z,{}),(0,G.jsxs)(E.Z,{className:t.dialogContent,children:[(0,G.jsx)(d.Z,{paragraph:!0,children:'The "Feature sequence" panel shows the underlying genomic sequence for a given feature, fetched from the reference genome.'}),(0,G.jsx)(d.Z,{children:"For gene features, this panel does special calculations to e.g. stitch together the coding sequence, the options are:"}),(0,G.jsxs)("ul",{children:[(0,G.jsx)("li",{children:"CDS - shows the stitched together CDS sequences"}),(0,G.jsx)("li",{children:'Protein - the translated coding sequence, with the "standard" genetic code'}),(0,G.jsx)("li",{children:"cDNA - shows the UTRs and stitched together CDS sequences"}),(0,G.jsx)("li",{children:"Gene w/ introns - the sequence underlying the entire gene including including introns, with UTR and CDS highlighted"}),(0,G.jsx)("li",{children:'Gene w/ Nbp introns - same "Gene w/ introns", but limiting to a subset of the intron sequence displayed'}),(0,G.jsx)("li",{children:'Gene +/- Nbp up+down stream - same as "Gene w/ introns" but with up and downstream sequence displayed'}),(0,G.jsx)("li",{children:'Gene +/- Nbp up+down stream, Nbp introns - same as "Gene w/ introns", but with limited intron sequence displayed and up and downstream sequence'})]}),(0,G.jsx)(d.Z,{paragraph:!0,children:"For other feature types, the options are:"}),(0,G.jsxs)("ul",{children:[(0,G.jsx)("li",{children:"Feature sequence - the reference genome sequence underlying the feature"}),(0,G.jsx)("li",{children:"Feature sequence +/- Nbp up+down stream - the reference genome sequence underlying the feature, with the up and downstream sequence"})]}),(0,G.jsxs)(d.Z,{children:['Note: you can use the "gear icon" ',(0,G.jsx)(R.Z,{})," to edit the number of bp displayed up/downstream and in the intron region"]})]}),(0,G.jsx)(I.Z,{children:(0,G.jsx)(N.Z,{onClick:function(){return n()},autoFocus:!0,variant:"contained",children:"Close"})})]})}function P(e,n){return e.map((function(e){return n.slice(e.start,e.end)})).join("")}function z(e){return"".concat(e.start,"-").concat(e.end)}function J(e){return e.filter((function(e,n,t){return!n||z(e)!==z(t[n-1])}))}function W(e,n){return e.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:n-e.end,end:n-e.start})})).sort((function(e,n){return e.start-n.start}))}var V="rgb(220,220,180)",K="rgba(250,200,200)";function Q(e){var n=e.cds,t=e.sequence;return(0,G.jsx)("span",{style:{background:V},children:P(n,t)})}function X(e){for(var n=e.cds,t=e.sequence,r=e.codonTable,i=P(n,t),a="",s=0;s<i.length;s+=3)a+=r[i.slice(s,s+3)]||"&";return(0,G.jsx)("span",{style:{background:"rgb(220,160,220)"},children:a})}function Y(e){var n=e.utr,t=e.cds,r=e.exons,i=e.sequence,s=e.upstream,c=e.downstream,u=e.includeIntrons,l=e.collapseIntron,d=e.intronBp,f=t.length?[].concat((0,a.Z)(t),(0,a.Z)(n)).sort((function(e,n){return e.start-n.start})):r;return(0,G.jsxs)(G.Fragment,{children:[s?(0,G.jsx)("span",{style:{background:K},children:s}):null,f.filter((function(e){return e.start!==e.end})).map((function(e,n){var t,r=i.slice(e.end,null===(t=f[n+1])||void 0===t?void 0:t.start);return(0,G.jsxs)(o.Fragment,{children:[(0,G.jsx)("span",{style:{background:"CDS"===e.type?V:"rgb(200,240,240)"},children:i.slice(e.start,e.end)}),u&&n<f.length-1?(0,G.jsx)("span",{style:{background:undefined},children:l&&r.length>2*d?"".concat(r.slice(0,d),"...").concat(r.slice(-d)):r}):null]},JSON.stringify(e))})),c?(0,G.jsx)("span",{style:{background:K},children:c}):null]})}function $(e){var n=e.sequence,t=e.upstream,r=e.downstream;return(0,G.jsxs)(G.Fragment,{children:[t?(0,G.jsx)("span",{style:{background:K},children:t}):null,(0,G.jsx)("span",{style:{background:"rgb(200,280,200)"},children:n}),r?(0,G.jsx)("span",{style:{background:K},children:r}):null]})}var ee=o.forwardRef((function(e,n){var t=e.feature,r=e.mode,s=e.intronBp,o=void 0===s?10:s,c=e.sequence,u=c.seq,l=c.upstream,d=void 0===l?"":l,f=c.downstream,p=void 0===f?"":f,h=t.subfeatures,m=(void 0===h?[]:h).sort((function(e,n){return e.start-n.start})).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:e.start-t.start,end:e.end-t.start})})),x=J(m.filter((function(e){return"CDS"===e.type}))),g=J(m.filter((function(e){return e.type.match(/utr/i)}))),j=J(m.filter((function(e){return"exon"===e.type})));if(!g.length&&x.length&&j.length&&(g=function(e,n){var t=e[0],r=e[e.length-1],s=n.findIndex((function(e){return e.end>=t.start&&e.start<=t.start})),o=n.findIndex((function(e){return e.end>=r.end&&e.start<=r.end})),c=n[o],u=n[s],l=[].concat((0,a.Z)(n.slice(0,s)),[{start:u.start,end:t.start}]).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),d=[{start:r.end,end:c.end}].concat((0,a.Z)(n.slice(o+1))).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,a.Z)(l),(0,a.Z)(d))}(x,j)),g.length||!x.length||j.length||(g=function(e,n){var t=e[0],r=e[e.length-1],s=[{start:n.start,end:t.start}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),o=[{start:r.end,end:n.end}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,a.Z)(s),(0,a.Z)(o))}(x,{start:0,end:t.end-t.start,type:"gene"})),-1===t.strand){var v=[(0,b.revcom)(u),(0,b.revcom)(p),(0,b.revcom)(d)];d=v[1],p=v[2],x=W(x,(u=v[0]).length),j=W(j,u.length),g=W(g,u.length)}var Z=(0,b.generateCodonTable)(b.defaultCodonTable);return(0,G.jsx)("div",{ref:n,"data-testid":"sequence_panel",children:(0,G.jsxs)("div",{style:{fontFamily:"monospace",wordWrap:"break-word",overflow:"auto",fontSize:12,maxWidth:600,maxHeight:500},children:[">".concat(t.name||t.id||t.refName+":"+(t.start+1)+"-"+t.end,"-").concat(r,"\n"),(0,G.jsx)("br",{}),"genomic"===r?(0,G.jsx)($,{sequence:u}):"genomic_sequence_updown"===r?(0,G.jsx)($,{sequence:u,upstream:d,downstream:p}):"cds"===r?(0,G.jsx)(Q,{cds:x,sequence:u}):"cdna"===r?(0,G.jsx)(Y,{exons:j,cds:x,utr:g,sequence:u,intronBp:o}):"protein"===r?(0,G.jsx)(X,{cds:x,codonTable:Z,sequence:u}):"gene"===r?(0,G.jsx)(Y,{exons:j,cds:x,utr:g,sequence:u,includeIntrons:!0,intronBp:o}):"gene_collapsed_intron"===r?(0,G.jsx)(Y,{exons:j,cds:x,sequence:u,utr:g,includeIntrons:!0,collapseIntron:!0,intronBp:o}):"gene_updownstream"===r?(0,G.jsx)(Y,{exons:j,cds:x,sequence:u,utr:g,upstream:d,downstream:p,includeIntrons:!0,intronBp:o}):"gene_updownstream_collapsed_intron"===r?(0,G.jsx)(Y,{exons:j,cds:x,sequence:u,utr:g,upstream:d,downstream:p,includeIntrons:!0,collapseIntron:!0,intronBp:o}):(0,G.jsx)("div",{children:"Unknown type"})]})})})),ne=t(9077),te=t(21165),re=(0,m.ZL)()((function(e){return{button:{margin:e.spacing(1)},formControl:{margin:0},container:{margin:e.spacing(1)},container2:{marginTop:e.spacing(1)}}})),ie=5e5;function ae(e){var n,t=e.model,r=e.feature,a=re().classes,c=r,u=!(null===(n=c.subfeatures)||void 0===n||!n.find((function(e){return"CDS"===e.type}))),l="gene"===r.type,f=(0,o.useRef)(null),h=(0,o.useState)(!1),m=(0,s.Z)(h,2),x=m[0],g=m[1],j=(0,o.useState)(!1),v=(0,s.Z)(j,2),Z=v[0],w=v[1],F=(0,o.useState)(!1),D=(0,s.Z)(F,2),T=D[0],E=D[1],L=(0,o.useState)(),I=(0,s.Z)(L,2),O=I[0],M=I[1],A=(0,o.useState)(),P=(0,s.Z)(A,2),z=P[0],J=P[1],W=(0,o.useState)(!1),V=(0,s.Z)(W,2),K=V[0],Q=V[1],X=(0,o.useState)(!1),Y=(0,s.Z)(X,2),$=Y[0],ae=Y[1],se=(0,b.useLocalStorage)("intronBp",10),oe=(0,s.Z)(se,2),ce=oe[0],ue=oe[1],le=(0,b.useLocalStorage)("upDownBp",500),de=(0,s.Z)(le,2),fe=de[0],pe=de[1],he=(0,o.useState)({id:r.uniqueId,force:!1}),me=(0,s.Z)(he,2),xe=me[0],ge=me[1];(0,o.useEffect)((function(){ge({id:r.uniqueId,force:!1})}),[r]),(0,o.useEffect)((function(){var e,n=!1;if(!t||!Z)return function(){};var i=(0,b.getSession)(t),a=i.assemblyManager,o=i.rpcManager,c=(null===(e=t.view)||void 0===e?void 0:e.assemblyNames)||[],u=(0,s.Z)(c,1)[0];function l(e,n,t){return d.apply(this,arguments)}function d(){return(d=(0,C.Z)((0,y.Z)().mark((function e(n,t,r){var i,c,l,d,f,p;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.waitForAssembly(u);case 2:if(i=e.sent){e.next=5;break}throw new Error("assembly not found");case 5:return c="getSequence",e.next=8,o.call(c,"CoreGetFeatures",{adapterConfig:(0,ne.getConf)(i,["sequence","adapter"]),sessionId:c,regions:[{start:n,end:t,refName:i.getCanonicalRefName(r)}]});case 8:return l=e.sent,d=l,f=(0,s.Z)(d,1),p=f[0],e.abrupt("return",(null===p||void 0===p?void 0:p.get("seq"))||"");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,C.Z)((0,y.Z)().mark((function e(){var t,i,a,s,o,c,u;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,J(void 0),i=(t=r).start,a=t.end,s=t.refName,xe.force||!(a-i>ie)){e.next=7;break}M({error:"Genomic sequence larger than ".concat(ie,'bp, use "force load" button to display')}),e.next=17;break;case 7:return e.next=9,l(i,a,s);case 9:return o=e.sent,e.next=12,l(Math.max(0,i-fe),i,s);case 12:return c=e.sent,e.next=15,l(a,a+fe,s);case 15:u=e.sent,n||M({seq:o,upstream:c,downstream:u});case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0),J(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))(),function(){n=!0}}),[r,Z,t,fe,xe]);var je=!O,ve=(0,b.getSession)(t),Ze=(0,ne.getConf)(ve,["featureDetails","sequenceTypes"])||["mRNA","transcript","gene"],be="CDS"===r.type?Ze.includes("CDS")&&!r.parentId:Ze.includes(r.type),we=be?u?"cds":"cdna":"genomic";(0,o.useEffect)((function(){Se(we)}),[be,we]);var ye=(0,o.useState)(be?u?"cds":"cdna":"genomic"),Ce=(0,s.Z)(ye,2),Ne=Ce[0],Se=Ce[1],ke={gene:"Gene w/ introns",gene_collapsed_intron:"Gene w/ ".concat(ce,"bp of intron"),gene_updownstream:"Gene w/ ".concat(fe,"bp up+down stream"),gene_updownstream_collapsed_intron:"Gene w/ ".concat(fe,"bp up+down stream w/ ").concat(ce,"bp intron"),cdna:"cDNA"},qe=be?u?(0,i.Z)({cds:"CDS",protein:"Protein"},ke):ke:{genomic:"Genomic seq",genomic_sequence_updown:"Genomic seq w/ ".concat(fe,"bp up+down stream")};return l&&!u||!t?null:(0,G.jsxs)("div",{className:a.container2,children:[(0,G.jsx)(N.Z,{variant:"contained",onClick:function(){return w(!Z)},children:Z?"Hide feature sequence":"Show feature sequence"}),(0,G.jsx)(S.Z,{className:a.formControl,children:(0,G.jsx)(k.Z,{onClick:function(){return E(!0)},children:(0,G.jsx)(te.Z,{})})}),(0,G.jsx)("br",{}),Z?(0,G.jsxs)("div",{className:a.container2,children:[(0,G.jsx)(S.Z,{className:a.formControl,children:(0,G.jsx)(q.Z,{value:Ne,onChange:function(e){return Se(e.target.value)},children:Object.entries(qe).map((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];return(0,G.jsx)(_.Z,{value:t,children:r},t)}))})}),(0,G.jsx)(S.Z,{className:a.formControl,children:(0,G.jsx)(N.Z,{className:a.button,variant:"contained",color:"inherit",onClick:function(){var e=f.current;e&&(B()(e.textContent||"",{format:"text/plain"}),Q(!0),setTimeout((function(){return Q(!1)}),1e3))},children:K?"Copied to clipboard!":"Copy plaintext"})}),(0,G.jsx)(S.Z,{className:a.formControl,children:(0,G.jsx)(p.Z,{title:"The 'Copy HTML' function retains the colors from the sequence panel but cannot be pasted into some programs like notepad that only expect plain text",children:(0,G.jsx)(N.Z,{className:a.button,variant:"contained",color:"inherit",onClick:function(){var e=f.current;e&&(B()(e.innerHTML,{format:"text/html"}),ae(!0),setTimeout((function(){return ae(!1)}),1e3))},children:$?"Copied to clipboard!":"Copy HTML"})})}),(0,G.jsx)(S.Z,{className:a.formControl,children:(0,G.jsx)(k.Z,{onClick:function(){return g(!0)},children:(0,G.jsx)(R.Z,{})})}),(0,G.jsx)("br",{}),(0,G.jsx)(G.Fragment,{children:z?(0,G.jsx)(d.Z,{color:"error",children:"".concat(z)}):je?(0,G.jsx)(d.Z,{children:"Loading gene sequence..."}):O?"error"in O?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(d.Z,{color:"error",children:O.error}),(0,G.jsx)(N.Z,{variant:"contained",color:"inherit",onClick:function(){return ge((0,i.Z)((0,i.Z)({},xe),{},{force:!0}))},children:"Force load"})]}):(0,G.jsx)(ee,{ref:f,feature:c,mode:Ne,sequence:O,intronBp:ce}):(0,G.jsx)(d.Z,{children:"No sequence found"})})]}):null,x?(0,G.jsx)(U,{handleClose:function(e){if(e){var n=e.upDownBp,t=e.intronBp;ue(t),pe(n)}g(!1)},upDownBp:fe,intronBp:ce}):null,T?(0,G.jsx)(H,{handleClose:function(){return E(!1)}}):null]})}var se=["id"],oe=["__jbrowsefmt"],ce=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"],ue=["name","start","end","strand","refName","description","type"],le=(0,m.ZL)()((function(e){return{expansionPanelDetails:{display:"block",padding:e.spacing(1)},expandIcon:{color:"#FFFFFF"},field:{display:"flex",flexWrap:"wrap"},fieldDescription:{"&:hover":{background:"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.grey[200],marginRight:e.spacing(1),padding:e.spacing(.5)},fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),background:e.palette.grey[100],border:"1px solid ".concat(e.palette.grey[300]),boxSizing:"border-box",overflow:"auto"}}}));function de(e){var n=e.children,t=e.title,r=e.defaultExpanded,i=void 0===r||r,a=le().classes,c=(0,o.useState)(i),p=(0,s.Z)(c,2),h=p[0],m=p[1];return(0,G.jsxs)(u.Z,{expanded:h,onChange:function(){return m((function(e){return!e}))},TransitionProps:{unmountOnExit:!0},children:[(0,G.jsx)(l.Z,{expandIcon:(0,G.jsx)(x.Z,{className:a.expandIcon}),children:(0,G.jsxs)(d.Z,{variant:"button",children:[" ",t]})}),(0,G.jsx)(f.Z,{className:a.expansionPanelDetails,children:n})]})}var fe=function(e){var n=e.description,t=e.name,r=e.width,i=e.prefix,s=void 0===i?[]:i,o=le(),c=o.classes,u=o.cx,l=[].concat((0,a.Z)(s),[t]).join(".");return n?(0,G.jsx)(p.Z,{title:n,placement:"left",children:(0,G.jsx)("div",{className:u(c.fieldDescription,c.fieldName),children:l})}):(0,G.jsx)("div",{className:c.fieldName,style:{width:r},children:l})},pe=function(e){var n=e.value,t=le().classes,r="".concat(n).match(/^https?:\/\//);return(0,G.jsx)("div",{className:t.fieldValue,children:o.isValidElement(n)?n:r?(0,G.jsx)(w.SanitizedHTML,{html:'<a href="'.concat(n,'">').concat(n,"</a>")}):(0,G.jsx)(w.SanitizedHTML,{html:Z()(n)?JSON.stringify(n):String(n)})})},he=function(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,a=e.width,s=le().classes;return null!==t&&void 0!==t?(0,G.jsxs)("div",{className:s.field,children:[(0,G.jsx)(fe,{prefix:i,description:r,name:n,width:a}),(0,G.jsx)(pe,{value:t})]}):null},me=function(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,s=void 0===i?[]:i,o=le().classes;return 1===t.length?Z()(t[0])?(0,G.jsx)(we,{attributes:t[0],prefix:[].concat((0,a.Z)(s),[n])}):(0,G.jsxs)("div",{className:o.field,children:[(0,G.jsx)(fe,{prefix:s,description:r,name:n}),(0,G.jsx)(pe,{value:t[0]})]}):t.every((function(e){return Z()(e)}))?(0,G.jsx)(G.Fragment,{children:t.map((function(e,t){return(0,G.jsx)(we,{attributes:e,prefix:[].concat((0,a.Z)(s),[n+"-"+t])},JSON.stringify(e)+"-"+t)}))}):(0,G.jsxs)("div",{className:o.field,children:[(0,G.jsx)(fe,{prefix:s,description:r,name:n}),t.map((function(e,n){return(0,G.jsx)("div",{className:o.fieldSubvalue,children:(0,G.jsx)(pe,{value:e})},JSON.stringify(e)+"-"+n)}))]})},xe=function(e){return e.toLocaleString("en-US")};function ge(e){var n=e.feature,t=(0,i.Z)((0,i.Z)({},n),n.__jbrowsefmt),r=t.start,a=t.strand,o=t.end,c=t.refName,u={"-1":"-",0:"",1:"+"},l=u[a]?"(".concat(u[a],")"):"",d=(0,i.Z)((0,i.Z)({},t),{},{length:xe(o-r),position:"".concat(c,":").concat(xe(r+1),"..").concat(xe(o)," ").concat(l)});return(0,G.jsx)(G.Fragment,{children:Object.entries({position:"Position",description:"Description",name:"Name",length:"Length",type:"Type",assemblyName:"Assembly name"}).map((function(e){var n=(0,s.Z)(e,2),t=n[0];return[n[1],d[t]]})).filter((function(e){var n=(0,s.Z)(e,2)[1];return null!==n&&void 0!==n})).map((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];return(0,G.jsx)(he,{name:t,value:r},t)}))})}var je=function(e){return(0,G.jsx)(de,(0,i.Z)((0,i.Z)({},e),{},{title:"Primary data",children:(0,G.jsx)(ge,(0,i.Z)({},e))}))};function ve(e){var n=e.value,t=(0,b.getUriLink)(n);return(0,G.jsx)(w.SanitizedHTML,{html:'<a href="'.concat(t,'">').concat(t,"</a>")})}var Ze=function(e){var n=e.value,t=e.prefix,o=e.name,c=Object.keys(n[0]).sort(),u=new Set(c);if(n.forEach((function(e){return Object.keys(e).forEach((function(e){return u.add(e)}))})),u.size<c.length+5){var l,d=Object.entries(n).map((function(e){var n=(0,s.Z)(e,2),t=n[0],a=n[1],o=a.id,c=(0,r.Z)(a,se);return(0,i.Z)({id:t,identifier:o},c)}));u.has("id")?(u.delete("id"),l=["identifier"].concat((0,a.Z)(u))):l=(0,a.Z)(u);var f=l.map((function(e){return{field:e,renderCell:function(e){var n=e.value;return(0,b.isUriLocation)(n)?(0,G.jsx)(ve,{value:n}):(0,b.getStr)(n)},width:(0,b.measureGridWidth)(d.map((function(n){return n[e]})))}})),p=d.length<100;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(fe,{prefix:t,name:o}),(0,G.jsx)("div",{style:{height:25*Math.min(d.length,100)+80+(p?0:50),width:"100%"},children:(0,G.jsx)(g._,{disableSelectionOnClick:!0,rowHeight:25,rows:d,rowsPerPageOptions:[],hideFooterSelectedRowCount:!0,columns:f,hideFooter:p})})]})}return null};function be(e){var n,t=e.value,r=e.prefix,i=e.name,a=le().classes,s=t.uri,o=t.baseUri,c=void 0===o?"":o;try{n=new URL(s,c).href}catch(u){n=s}return(0,G.jsxs)("div",{className:a.field,children:[(0,G.jsx)(fe,{prefix:r,name:i}),(0,G.jsx)(pe,{value:n})]})}function we(e){var n=e.attributes,t=e.omit,c=void 0===t?[]:t,u=e.descriptions,l=e.formatter,d=void 0===l?function(e){return e}:l,f=e.hideUris,p=e.prefix,h=void 0===p?[]:p,m=[].concat((0,a.Z)(c),ce),x=n.__jbrowsefmt,g=(0,r.Z)(n,oe),j=(0,i.Z)((0,i.Z)({},g),x),v=function(e,n){var t=[];return e.forEach((function(e,r){var i=[].concat((0,a.Z)(n),[e[0]]).join(".");t.push((0,b.measureText)(i,12))})),Math.ceil(Math.max.apply(Math,t))+10}(Object.entries(j).filter((function(e){var n=(0,s.Z)(e,2),t=n[0];return void 0!==n[1]&&!m.includes(t)})),h);return(0,G.jsx)(G.Fragment,{children:Object.entries(j).filter((function(e){var n=(0,s.Z)(e,2),t=n[0];return void 0!==n[1]&&!m.includes(t)})).map((function(n){var t=(0,s.Z)(n,2),r=t[0],c=t[1],l=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((function(e){t&&(t=t[e])})),"string"===typeof t?t:"string"===typeof(null===(n=t)||void 0===n?void 0:n.Description)?t.Description:void 0}([].concat((0,a.Z)(h),[r]),u);return Array.isArray(c)?c.length>1&&c.every((function(e){return Z()(e)}))?(0,G.jsx)(Ze,{name:r,prefix:h,value:c},r):(0,G.jsx)(me,{name:r,value:c,description:l,prefix:h},r):Z()(c)?(0,b.isUriLocation)(c)?f?null:(0,G.jsx)(be,{name:r,prefix:h,value:c},r):(0,o.createElement)(we,(0,i.Z)((0,i.Z)({},e),{},{omit:m,key:r,attributes:c,descriptions:u,prefix:[].concat((0,a.Z)(h),[r])})):(0,G.jsx)(he,{name:r,value:d(c,r),description:l,prefix:h,width:Math.min(v,170)},r)}))})}var ye=function(e){var n=e.feature;return(0,G.jsx)(de,(0,i.Z)((0,i.Z)({},e),{},{title:"Attributes",children:(0,G.jsx)(we,(0,i.Z)((0,i.Z)({},e),{},{attributes:n}))}))};function Ce(e,n,t){return[(r="".concat(e)||"".concat(n),r.length>20?"".concat(r.slice(0,20),"..."):r),"".concat(t)].filter((function(e){return!!e})).join(" - ");var r}var Ne=function e(n){var t=n.omit,r=void 0===t?[]:t,s=n.model,o=n.feature,u=n.depth,l=void 0===u?0:u,f=o.name,p=void 0===f?"":f,m=o.id,x=void 0===m?"":m,g=o.type,j=void 0===g?"":g,v=o.subfeatures,Z=(0,b.getEnv)(s).pluginManager,y=(0,b.getSession)(s),C=null===Z||void 0===Z?void 0:Z.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:y,feature:o,model:s});return(0,G.jsxs)(de,{title:Ce(p,x,j),children:[(0,G.jsx)(d.Z,{children:"Core details"}),(0,G.jsx)(ge,(0,i.Z)({},n)),(0,G.jsx)(h.Z,{}),(0,G.jsx)(d.Z,{children:"Attributes"}),(0,G.jsx)(we,(0,i.Z)((0,i.Z)({attributes:o},n),{},{omit:[].concat((0,a.Z)(r),ue)})),(0,G.jsx)(c.ErrorBoundary,{FallbackComponent:function(e){var n=e.error;return(0,G.jsx)(w.ErrorMessage,{error:n})},children:(0,G.jsx)(ae,(0,i.Z)({},n))}),C?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h.Z,{}),(0,G.jsx)(de,{title:C.name,children:(0,G.jsx)(C.Component,(0,i.Z)({},n))})]}):null,null!==v&&void 0!==v&&v.length?(0,G.jsx)(de,{title:"Subfeatures",defaultExpanded:l<1,children:v.map((function(n){return(0,G.jsx)(e,{feature:n,model:s,depth:l+1},JSON.stringify(n))}))}):null]})},Se=(0,j.observer)((function(e){var n=e.model,t=n.featureData;if(!t)return null;var r,i=JSON.parse(JSON.stringify(t,(function(e,n){return"undefined"===typeof n?null:n})));return r=i,0===Object.keys(r).length?null:(0,G.jsx)(Ne,{model:n,feature:i})}))}}]);
//# sourceMappingURL=6400.5a80a3bd.chunk.js.map