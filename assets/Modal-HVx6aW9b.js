import{b as l,j as o,u,f as h,n as m,t as p}from"./index-jv6tn1HA.js";function f(e,s,t){return e==null?void 0:e.sort((a,r)=>t==="asc"?a[s]>r[s]?1:-1:r[s]>a[s]?1:-1)}function g({options:e,title:s}){const[t,a]=l();function r(n){console.log(n.target.value),t.set("sortBy",n.target.value),a(t)}return o.jsxs("div",{className:"transaction-table-title",children:[o.jsx("h3",{children:s}),o.jsx("select",{onChange:r,className:"form-input form-input-table",children:e.map(n=>o.jsx("option",{value:n.value,children:n.label},n.value))})]})}function x({children:e,modalId:s,handleCloseModal:t}){const a=u(),r=h(c=>m(c,s));function n(){a(p({modalId:s,open:!1}))}function i(c){c.stopPropagation()}return r?o.jsx("div",{className:"overlay",onClick:n,children:o.jsxs("div",{className:"modal",onClick:i,children:[o.jsx("button",{className:"modal-button",onClick:t||n,children:"X"}),e]})}):null}export{x as M,g as S,f as s};
