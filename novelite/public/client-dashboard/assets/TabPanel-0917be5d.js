import{r as o,j as d,a0 as p,a2 as u,ac as C}from"./index-f22446e5.js";import{T as g}from"./Tabs-fb2c1fbf.js";import{c as w}from"./clsx.m-1229b3e0.js";import{g as y,a as $,s as E,c as M}from"./Typography-493ceae3.js";const x=o.createContext(null);function j(){const[e,t]=o.useState(null);return o.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function z(e){const{children:t,value:n}=e,s=j(),i=o.useMemo(()=>({idPrefix:s,value:n}),[s,n]);return d.jsx(x.Provider,{value:i,children:t})}function b(){return o.useContext(x)}function T(e,t){const{idPrefix:n}=e;return n===null?null:`${e.idPrefix}-P-${t}`}function m(e,t){const{idPrefix:n}=e;return n===null?null:`${e.idPrefix}-T-${t}`}const R=["children"],N=o.forwardRef(function(t,n){const{children:s}=t,i=p(t,R),r=b();if(r===null)throw new TypeError("No TabContext provided");const a=o.Children.map(s,l=>o.isValidElement(l)?o.cloneElement(l,{"aria-controls":T(r,l.props.value),id:m(r,l.props.value)}):null);return d.jsx(g,u({},i,{ref:n,value:r.value,children:a}))}),A=N;function U(e){return y("MuiTabPanel",e)}$("MuiTabPanel",["root"]);const I=["children","className","value"],L=e=>{const{classes:t}=e;return M({root:["root"]},U,t)},_=E("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(3)})),S=o.forwardRef(function(t,n){const s=C({props:t,name:"MuiTabPanel"}),{children:i,className:r,value:a}=s,l=p(s,I),f=u({},s),P=L(f),c=b();if(c===null)throw new TypeError("No TabContext provided");const h=T(c,a),v=m(c,a);return d.jsx(_,u({"aria-labelledby":v,className:w(P.root,r),hidden:a!==c.value,id:h,ref:n,role:"tabpanel",ownerState:f},l,{children:a===c.value&&i}))}),B=S;export{z as T,A as a,B as b};