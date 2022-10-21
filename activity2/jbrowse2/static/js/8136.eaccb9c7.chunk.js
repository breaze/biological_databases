"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8136],{78136:function(e,t,a){a.d(t,{ZP:function(){return w}});var n=a(56666),o=a(31461),i=a(7896),r=a(30969),s=a(81856),d=a(26540),c=a(23273),l=a(74262),u=a(62221),p=a(2441),v=a(15556),m=a(70590),b=a(71141),g=a(63970),f=a(14047),Z=a(83221);var y=(0,a(62746).Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),h=a(37102),C=a(37574),x=["className"],S=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],I=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,o=e.ownerState;return(0,i.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,i.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,n.Z)({},"& > .".concat(y.root),{paddingRight:48}),(t={},(0,n.Z)(t,"&.".concat(Z.Z.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(t,"&.".concat(Z.Z.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(Z.Z.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(Z.Z.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},o.button&&(0,n.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Z.Z.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),A=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),w=r.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,l=void 0===n?"center":n,u=a.autoFocus,y=void 0!==u&&u,w=a.button,P=void 0!==w&&w,G=a.children,N=a.className,k=a.component,L=a.components,O=void 0===L?{}:L,R=a.componentsProps,F=void 0===R?{}:R,j=a.ContainerComponent,M=void 0===j?"li":j,V=a.ContainerProps,q=(V=void 0===V?{}:V).className,B=a.dense,_=void 0!==B&&B,D=a.disabled,T=void 0!==D&&D,z=a.disableGutters,Y=void 0!==z&&z,E=a.disablePadding,H=void 0!==E&&E,J=a.divider,K=void 0!==J&&J,Q=a.focusVisibleClassName,U=a.secondaryAction,W=a.selected,X=void 0!==W&&W,$=(0,o.Z)(a.ContainerProps,x),ee=(0,o.Z)(a,S),te=r.useContext(f.Z),ae={dense:_||te.dense||!1,alignItems:l,disableGutters:Y},ne=r.useRef(null);(0,b.Z)((function(){y&&ne.current&&ne.current.focus()}),[y]);var oe=r.Children.toArray(G),ie=oe.length&&(0,m.Z)(oe[oe.length-1],["ListItemSecondaryAction"]),re=(0,i.Z)({},a,{alignItems:l,autoFocus:y,button:P,dense:ae.dense,disabled:T,disableGutters:Y,disablePadding:H,divider:K,hasSecondaryAction:ie,selected:X}),se=function(e){var t=e.alignItems,a=e.button,n=e.classes,o=e.dense,i=e.disabled,r={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,d.Z)(r,Z.o,n)}(re),de=(0,g.Z)(ne,t),ce=O.Root||I,le=F.root||{},ue=(0,i.Z)({className:(0,s.default)(se.root,le.className,N),disabled:T},ee),pe=k||"li";return P&&(ue.component=k||"div",ue.focusVisibleClassName=(0,s.default)(Z.Z.focusVisible,Q),pe=v.Z),ie?(pe=ue.component||k?pe:"div","li"===M&&("li"===pe?pe="div":"li"===ue.component&&(ue.component="div")),(0,C.jsx)(f.Z.Provider,{value:ae,children:(0,C.jsxs)(A,(0,i.Z)({as:M,className:(0,s.default)(se.container,q),ref:de,ownerState:re},$,{children:[(0,C.jsx)(ce,(0,i.Z)({},le,!(0,c.Z)(ce)&&{as:pe,ownerState:(0,i.Z)({},re,le.ownerState)},ue,{children:oe})),oe.pop()]}))})):(0,C.jsx)(f.Z.Provider,{value:ae,children:(0,C.jsxs)(ce,(0,i.Z)({},le,{as:pe,ref:de,ownerState:re},!(0,c.Z)(ce)&&{ownerState:(0,i.Z)({},re,le.ownerState)},ue,{children:[oe,U&&(0,C.jsx)(h.Z,{children:U})]}))})}))},83221:function(e,t,a){a.d(t,{o:function(){return o}});var n=a(2975);function o(e){return(0,n.Z)("MuiListItem",e)}var i=(0,a(62746).Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);t.Z=i},37102:function(e,t,a){var n=a(31461),o=a(7896),i=a(30969),r=a(81856),s=a(26540),d=a(62221),c=a(2441),l=a(14047),u=a(62682),p=a(37574),v=["className"],m=(0,d.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,o.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),b=i.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiListItemSecondaryAction"}),d=a.className,b=(0,n.Z)(a,v),g=i.useContext(l.Z),f=(0,o.Z)({},a,{disableGutters:g.disableGutters}),Z=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,s.Z)(n,u.A,a)}(f);return(0,p.jsx)(m,(0,o.Z)({className:(0,r.default)(Z.root,d),ownerState:f,ref:t},b))}));b.muiName="ListItemSecondaryAction",t.Z=b},62682:function(e,t,a){a.d(t,{A:function(){return o}});var n=a(2975);function o(e){return(0,n.Z)("MuiListItemSecondaryAction",e)}var i=(0,a(62746).Z)("MuiListItemSecondaryAction",["root","disableGutters"]);t.Z=i}}]);
//# sourceMappingURL=8136.eaccb9c7.chunk.js.map