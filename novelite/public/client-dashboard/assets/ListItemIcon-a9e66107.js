import{a2 as a,r,ac as I,a0 as x,j as p}from"./index-f22446e5.js";import{s as f,d as u,c as L}from"./Typography-493ceae3.js";import{g as d}from"./listItemIconClasses-5a5c13b9.js";import{L as g}from"./ListContext-74b9cccd.js";const S=["className"],v=s=>{const{alignItems:t,classes:o}=s;return L({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},d,o)},C=f("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),R=r.forwardRef(function(t,o){const e=I({props:t,name:"MuiListItemIcon"}),{className:i}=e,c=x(e,S),l=r.useContext(g),n=a({},e,{alignItems:l.alignItems}),m=v(n);return p.jsx(C,a({className:u(m.root,i),ownerState:n,ref:o},c))}),N=R;export{N as L};