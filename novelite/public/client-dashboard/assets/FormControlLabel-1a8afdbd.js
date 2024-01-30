import{aT as R,a2 as p,r as x,ac as _,a0 as w,j as m}from"./index-f22446e5.js";import{a as E,g as U,s as $,T as v,d as F,c as A}from"./Typography-493ceae3.js";import{f as D}from"./formControlState-02eb4045.js";import{u as W}from"./useFormControl-c5cffc22.js";import{S as z}from"./Stack-58acc4b3.js";function B(e){return U("MuiFormControlLabel",e)}const H=E("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),t=H,I=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],G=e=>{const{classes:o,disabled:l,labelPlacement:n,error:s,required:r}=e,d={root:["root",l&&"disabled",`labelPlacement${R(n)}`,s&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",s&&"error"]};return A(d,B,o)},J=$("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${R(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=$("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),O=x.forwardRef(function(o,l){var n,s;const r=_({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:k={},control:i,disabled:P,disableTypography:q,label:T,labelPlacement:j="end",required:h,slotProps:S={}}=r,N=w(r,I),b=W(),y=(n=P!=null?P:i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h!=null?h:i.props.required,L={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]=="undefined"&&typeof r[c]!="undefined"&&(L[c]=r[c])});const M=D({props:r,muiFormControl:b,states:["error"]}),f=p({},r,{disabled:y,labelPlacement:j,required:u,error:M.error}),C=G(f),g=(s=S.typography)!=null?s:k.typography;let a=T;return a!=null&&a.type!==v&&!q&&(a=m.jsx(v,p({component:"span"},g,{className:F(C.label,g==null?void 0:g.className),children:a}))),m.jsxs(J,p({className:F(C.root,d),ownerState:f,ref:l},N,{children:[x.cloneElement(i,L),u?m.jsxs(z,{display:"block",children:[a,m.jsxs(K,{ownerState:f,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):a]}))}),ee=O;export{ee as F};