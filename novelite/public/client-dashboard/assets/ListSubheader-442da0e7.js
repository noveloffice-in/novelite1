import{aT as c,a2 as l,r as f,ac as S,a0 as h,j as m}from"./index-f22446e5.js";import{g as x,a as L,s as k,d as R,c as C}from"./Typography-493ceae3.js";function v(t){return x("MuiListSubheader",t)}L("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const G=["className","color","component","disableGutters","disableSticky","inset"],M=t=>{const{classes:s,color:o,disableGutters:e,inset:r,disableSticky:a}=t,i={root:["root",o!=="default"&&`color${c(o)}`,!e&&"gutters",r&&"inset",!a&&"sticky"]};return C(i,v,s)},j=k("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,o.color!=="default"&&s[`color${c(o.color)}`],!o.disableGutters&&s.gutters,o.inset&&s.inset,!o.disableSticky&&s.sticky]}})(({theme:t,ownerState:s})=>l({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(t.vars||t).palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},s.color==="primary"&&{color:(t.vars||t).palette.primary.main},s.color==="inherit"&&{color:"inherit"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.inset&&{paddingLeft:72},!s.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(t.vars||t).palette.background.paper})),d=f.forwardRef(function(s,o){const e=S({props:s,name:"MuiListSubheader"}),{className:r,color:a="default",component:i="li",disableGutters:u=!1,disableSticky:p=!1,inset:b=!1}=e,y=h(e,G),n=l({},e,{color:a,component:i,disableGutters:u,disableSticky:p,inset:b}),g=M(n);return m.jsx(j,l({as:i,className:R(g.root,r),ref:o,ownerState:n},y))});d.muiSkipListHighlight=!0;const N=d;export{N as L};