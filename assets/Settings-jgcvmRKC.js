import{d as h,e as x,w as j,_ as u,r as i,j as e,h as l}from"./index-gUZyhKWC.js";function y(){const s=h(),{mutate:n,isPending:t}=x({mutationFn:a=>j(a),onSuccess:()=>{u.success("User updated succesfully",{className:"toast"}),s.invalidateQueries({queryKey:["user"]})},onError:a=>u.error(a.message,{className:"toast"})});return{isPending:t,updateCurrentUser:n}}function g(){const[s,n]=i.useState(""),[t,a]=i.useState(null),{updateCurrentUser:c}=y(),d={username:s,profilePicture:t};function m(r){var o;const p=(o=r.target.files)==null?void 0:o[0];a(p||null)}async function f(r){r.preventDefault(),!s&&!t&&u.error("Please fill out atleast one field"),c(d)}return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"user-data-h2",children:"Update your account"}),e.jsx("div",{className:"user-data",children:e.jsxs("form",{onSubmit:f,className:"form-user",children:[e.jsx(l,{id:"username",type:"text",placeholder:"Enter your username",content:"Enter your username",value:s,onChange:r=>n(r.target.value)}),e.jsx(l,{id:"file",type:"file",placeholder:"Choose your profile picture",content:"Choose your profile picture",value:t,onChange:m}),e.jsx("div",{className:"form-btn",children:e.jsx("button",{className:"btn btn-form",children:"Submit"})})]})})]})}function C(){return e.jsx("div",{className:"main-page",children:e.jsx("div",{className:"grid-settings",children:e.jsx(g,{})})})}export{C as default};
