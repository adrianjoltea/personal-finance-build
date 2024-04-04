import{R as y,r as Z,n as z,o as U,d as ot,e as st,_ as M,m as et,j as s,f as ct,g as lt,u as ut,h as bt,t as H}from"./index-gUZyhKWC.js";import{M as xt}from"./Modal-ufjzQkCm.js";import{u as At,a as dt}from"./Card-udBio0e8.js";import{k as jt,e as St,r as nt,D as Pt,F as kt,L as Q,j as W,l as wt,A as Nt,n as $,q as Ot,o as X,s as _t,t as Dt,G as Ct,v as ht,x as rt,H as Et,y as It,X as pt,Y as Lt,z as Tt,R as Ft,T as $t}from"./generateCategoricalChart-F_bchgOm.js";var Bt=["type","layout","connectNulls","ref"];function D(t){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}function Mt(t,e){if(t==null)return{};var r=Kt(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Kt(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},B.apply(this,arguments)}function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?at(Object(r),!0).forEach(function(n){A(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function _(t){return qt(t)||Wt(t)||Vt(t)||Rt()}function Rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vt(t,e){if(t){if(typeof t=="string")return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(t,e)}}function Wt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qt(t){if(Array.isArray(t))return Y(t)}function Y(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function zt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,mt(n.key),n)}}function Ut(t,e,r){return e&&it(t.prototype,e),r&&it(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Gt(t,e,r){return e=q(e),Qt(t,ft()?Reflect.construct(e,r||[],q(t).constructor):e.apply(t,r))}function Qt(t,e){if(e&&(D(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}function ft(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ft=function(){return!!t})()}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},q(t)}function k(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ht(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},J(t,e)}function A(t,e,r){return e=mt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function mt(t){var e=Xt(t,"string");return D(e)=="symbol"?e:String(e)}function Xt(t,e){if(D(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(D(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var K=function(t){Ht(e,t);function e(){var r;zt(this,e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=Gt(this,e,[].concat(a)),A(k(r),"state",{isAnimationFinished:!0,totalLength:0}),A(k(r),"generateSimpleStrokeDasharray",function(o,c){return"".concat(c,"px ").concat(o-c,"px")}),A(k(r),"getStrokeDasharray",function(o,c,u){var p=u.reduce(function(j,P){return j+P});if(!p)return r.generateSimpleStrokeDasharray(c,o);for(var l=Math.floor(o/p),h=o%p,f=c-o,m=[],d=0,v=0;d<u.length;v+=u[d],++d)if(v+u[d]>h){m=[].concat(_(u.slice(0,d)),[h-v]);break}var x=m.length%2===0?[0,f]:[f];return[].concat(_(e.repeat(u,l)),_(m),x).map(function(j){return"".concat(j,"px")}).join(", ")}),A(k(r),"id",jt("recharts-line-")),A(k(r),"pathRef",function(o){r.mainCurve=o}),A(k(r),"handleAnimationEnd",function(){r.setState({isAnimationFinished:!0}),r.props.onAnimationEnd&&r.props.onAnimationEnd()}),A(k(r),"handleAnimationStart",function(){r.setState({isAnimationFinished:!1}),r.props.onAnimationStart&&r.props.onAnimationStart()}),r}return Ut(e,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var n=this.getTotalLength();this.setState({totalLength:n})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var n=this.getTotalLength();n!==this.state.totalLength&&this.setState({totalLength:n})}}},{key:"getTotalLength",value:function(){var n=this.mainCurve;try{return n&&n.getTotalLength&&n.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(n,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,o=i.points,c=i.xAxis,u=i.yAxis,p=i.layout,l=i.children,h=kt(l,Et);if(!h)return null;var f=function(v,x){return{x:v.x,y:v.y,value:v.value,errorVal:ht(v.payload,x)}},m={clipPath:n?"url(#clipPath-".concat(a,")"):null};return y.createElement(Q,m,h.map(function(d){return y.cloneElement(d,{key:"bar-".concat(d.props.dataKey),data:o,xAxis:c,yAxis:u,layout:p,dataPointFormatter:f})}))}},{key:"renderDots",value:function(n,a,i){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var c=this.props,u=c.dot,p=c.points,l=c.dataKey,h=W(this.props,!1),f=W(u,!0),m=p.map(function(v,x){var j=b(b(b({key:"dot-".concat(x),r:3},h),f),{},{value:v.value,dataKey:l,cx:v.x,cy:v.y,index:x,payload:v.payload});return e.renderDotItem(u,j)}),d={clipPath:n?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return y.createElement(Q,B({className:"recharts-line-dots",key:"dots"},d),m)}},{key:"renderCurveStatically",value:function(n,a,i,o){var c=this.props,u=c.type,p=c.layout,l=c.connectNulls;c.ref;var h=Mt(c,Bt),f=b(b(b({},W(h,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:n},o),{},{type:u,layout:p,connectNulls:l});return y.createElement(wt,B({},f,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(n,a){var i=this,o=this.props,c=o.points,u=o.strokeDasharray,p=o.isAnimationActive,l=o.animationBegin,h=o.animationDuration,f=o.animationEasing,m=o.animationId,d=o.animateNewValues,v=o.width,x=o.height,j=this.state,P=j.prevPoints,C=j.totalLength;return y.createElement(Nt,{begin:l,duration:h,isActive:p,easing:f,from:{t:0},to:{t:1},key:"line-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(N){var S=N.t;if(P){var E=P.length/c.length,w=c.map(function(g,G){var T=Math.floor(G*E);if(P[T]){var F=P[T],O=$(F.x,g.x),vt=$(F.y,g.y);return b(b({},g),{},{x:O(S),y:vt(S)})}if(d){var yt=$(v*2,g.x),gt=$(x/2,g.y);return b(b({},g),{},{x:yt(S),y:gt(S)})}return b(b({},g),{},{x:g.x,y:g.y})});return i.renderCurveStatically(w,n,a)}var R=$(0,C),I=R(S),L;if(u){var V="".concat(u).split(/[,\s]+/gim).map(function(g){return parseFloat(g)});L=i.getStrokeDasharray(I,C,V)}else L=i.generateSimpleStrokeDasharray(C,I);return i.renderCurveStatically(c,n,a,{strokeDasharray:L})})}},{key:"renderCurve",value:function(n,a){var i=this.props,o=i.points,c=i.isAnimationActive,u=this.state,p=u.prevPoints,l=u.totalLength;return c&&o&&o.length&&(!p&&l>0||!Ot(p,o))?this.renderCurveWithAnimation(n,a):this.renderCurveStatically(o,n,a)}},{key:"render",value:function(){var n,a=this.props,i=a.hide,o=a.dot,c=a.points,u=a.className,p=a.xAxis,l=a.yAxis,h=a.top,f=a.left,m=a.width,d=a.height,v=a.isAnimationActive,x=a.id;if(i||!c||!c.length)return null;var j=this.state.isAnimationFinished,P=c.length===1,C=nt("recharts-line",u),N=p&&p.allowDataOverflow,S=l&&l.allowDataOverflow,E=N||S,w=X(x)?this.id:x,R=(n=W(o,!1))!==null&&n!==void 0?n:{r:3,strokeWidth:2},I=R.r,L=I===void 0?3:I,V=R.strokeWidth,g=V===void 0?2:V,G=_t(o)?o:{},T=G.clipDot,F=T===void 0?!0:T,O=L*2+g;return y.createElement(Q,{className:C},N||S?y.createElement("defs",null,y.createElement("clipPath",{id:"clipPath-".concat(w)},y.createElement("rect",{x:N?f:f-m/2,y:S?h:h-d/2,width:N?m:m*2,height:S?d:d*2})),!F&&y.createElement("clipPath",{id:"clipPath-dots-".concat(w)},y.createElement("rect",{x:f-O/2,y:h-O/2,width:m+O,height:d+O}))):null,!P&&this.renderCurve(E,w),this.renderErrorBar(E,w),(P||o)&&this.renderDots(E,F,w),(!v||j)&&Dt.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(n,a){return n.animationId!==a.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,prevPoints:a.curPoints}:n.points!==a.curPoints?{curPoints:n.points}:null}},{key:"repeat",value:function(n,a){for(var i=n.length%2!==0?[].concat(_(n),[0]):n,o=[],c=0;c<a;++c)o=[].concat(_(o),_(i));return o}},{key:"renderDotItem",value:function(n,a){var i;if(y.isValidElement(n))i=y.cloneElement(n,a);else if(St(n))i=n(a);else{var o=nt("recharts-line-dot",n?n.className:"");i=y.createElement(Pt,B({},a,{className:o}))}return i}}]),e}(Z.PureComponent);A(K,"displayName","Line");A(K,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Ct.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});A(K,"getComposedData",function(t){var e=t.props,r=t.xAxis,n=t.yAxis,a=t.xAxisTicks,i=t.yAxisTicks,o=t.dataKey,c=t.bandSize,u=t.displayedData,p=t.offset,l=e.layout,h=u.map(function(f,m){var d=ht(f,o);return l==="horizontal"?{x:rt({axis:r,ticks:a,bandSize:c,entry:f,index:m}),y:X(d)?null:n.scale(d),value:d,payload:f}:{x:X(d)?null:r.scale(d),y:rt({axis:n,ticks:i,bandSize:c,entry:f,index:m}),value:d,payload:f}});return b({points:h,layout:l},p)});var Yt=It({chartName:"LineChart",GraphicalChild:K,axisComponents:[{axisType:"xAxis",AxisComp:pt},{axisType:"yAxis",AxisComp:Lt}],formatAxisMap:Tt});async function Jt(t){try{return{data:await z(`${U}/invest/add-stock`,"POST",t)}}catch(e){throw console.log(e),e}}async function Zt(){try{return{data:await z(`${U}/invest/see-stocks`,"GET")}}catch(t){throw console.log(t),t}}async function te(){try{return{data:await z(`${U}/invest/`,"GET")}}catch(t){throw console.log(t),t}}async function ee(t){try{return{data:await z(`${U}/invest/sell-stock`,"PATCH",t)}}catch(e){throw console.log(e),e}}function ne(){const t=ot(),{isPending:e,mutate:r}=st({mutationFn:n=>ee(n),onSuccess:()=>{M.success("Stocks sold successfully",{className:"toast"}),t.invalidateQueries({queryKey:["stocks"]})},onError:n=>M.error(n.message,{className:"toast"})});return{isSelling:e,sellStock:r}}function tt(){const{data:t,isLoading:e,refetch:r}=et({queryKey:["stocks"],queryFn:Zt}),{data:n,isLoading:a}=et({queryKey:["availableStocks"],queryFn:te}),i=t==null?void 0:t.data,o=n==null?void 0:n.data;return{stocks:i,loading:e||a,availableStocks:o,refetchStocks:r}}function re({amount:t,boughtPrice:e,i:r,stockId:n,cardId:a,sellPriceId:i,name:o}){const{availableStocks:c}=tt(),{isSelling:u,sellStock:p}=ne(),l=c==null?void 0:c.find(v=>v._id===i),h={amount:t,_id:n,sellPrice:l==null?void 0:l.currentValue,cardId:a};function f(){p(h)}const m=l?t*l.currentValue>t*e:!1,d=l&&t*l.currentValue;return s.jsxs("div",{className:"transaction-table-row",children:[s.jsx("p",{className:"transaction-table-row-item",children:o}),s.jsx("p",{className:`transaction-table-row-item ${m?"text-green":"text-red"}`,children:t}),s.jsx("p",{className:"transaction-table-row-item",children:e}),s.jsx("p",{className:"transaction-table-row-item",children:l==null?void 0:l.currentValue}),s.jsx("div",{className:"transaction-table-row-item",children:s.jsxs("button",{className:"btn",onClick:f,disabled:u,children:["Sell for ",l?d==null?void 0:d.toFixed(2):"N/A"]})})]},r)}function ae(){const{stocks:t}=tt(),e=ct(lt);return console.log("ciava"),s.jsxs("div",{className:"transaction-table transaction-table-invest",children:[s.jsxs("div",{className:"transaction-table-row",children:[s.jsx("div",{className:"transaction-table-row-item",children:"Name"}),s.jsx("div",{className:"transaction-table-row-item",children:"Amount"}),s.jsx("div",{className:"transaction-table-row-item",children:"Bought Price"}),s.jsx("div",{className:"transaction-table-row-item",children:"Sell Price"}),s.jsx("div",{className:"transaction-table-row-item",children:"Sell"})]}),(t==null?void 0:t.length)===0&&s.jsx("div",{className:"empty-page",children:"Please buy a stock"}),t==null?void 0:t.map((r,n)=>s.jsx(re,{amount:r.amount,i:n,boughtPrice:r.boughtPrice,stockId:r._id,cardId:e._id,sellPriceId:r.stockId,name:r.name},n))]})}function ie({data:t}){const r=t.previousValue.slice(-30).map((i,o)=>({previousValue:i,index:o+1})),a=At(1800);return s.jsx("div",{className:"stock-line-chart",children:s.jsx(Ft,{width:a?350:"100%",height:a?200:"100%",children:s.jsxs(Yt,{data:r,children:[s.jsx(pt,{dataKey:"index"}),s.jsx($t,{}),s.jsx(K,{type:"monotone",dataKey:"previousValue",stroke:"#8884d8"})]})})})}function oe(){const t=ot(),{isPending:e,mutate:r}=st({mutationFn:n=>Jt(n),onSuccess:()=>{M.success("Use them wisely",{className:"toast"}),t.invalidateQueries({queryKey:["stocks"]})},onError:n=>M.error(n.message,{className:"toast"})});return{isAdding:e,buyStock:r}}function se({_id:t,name:e,currentValue:r}){const[n,a]=Z.useState(1),i=ct(lt),o=ut(),{isAdding:c,buyStock:u}=oe(),p={_id:t,name:e,boughtPrice:r,amount:n,cardId:i._id};async function l(h){if(h.preventDefault(),n*r>i.balance){M.error("Insufficent funds",{className:"toast"});return}u(p),o(H({modalId:"stock",open:!1}))}return s.jsxs("div",{children:[s.jsx("div",{className:"card-transactions-container",children:s.jsx(dt,{})}),s.jsxs("form",{className:"form-transactions",onSubmit:h=>l(h),children:[s.jsx(bt,{type:"number",id:"amount",name:"amount",placeholder:"Enter your amount",content:"Amount",value:n,onChange:h=>a(+h.target.value)}),s.jsx("div",{className:"form-stocks",children:s.jsx("span",{className:n*r>i.balance?"form-error":void 0,children:n>0&&`Invest ${(n*r).toFixed(2)}$ in ${e}`})}),s.jsx("div",{className:"form-btn",children:s.jsx("button",{className:"btn btn-form",disabled:!i._id||c,children:"Invest"})})]})]})}function ce({currentValue:t,name:e,previousValue:r,_id:n}){const a=ut(),[i,o]=Z.useState(!1);function c(){o(!0),a(H({modalId:"stock",open:!0}))}function u(){o(!1),a(H({modalId:"stock",open:!1}))}return s.jsxs("div",{className:"invest-card",children:[s.jsx(ie,{data:{previousValue:r}}),s.jsxs("div",{className:"invest-data",children:[s.jsx("div",{className:"invest-card-description",children:s.jsx("h3",{children:e})}),s.jsx("div",{className:"invest-card-amount",children:s.jsxs("span",{children:["Current value ",t]})}),s.jsx("button",{className:"btn btn-login",onClick:c,children:"Invest"})]}),i&&s.jsx(xt,{modalId:"stock",handleCloseModal:u,children:s.jsx(se,{_id:n,name:e,currentValue:t})})]})}function le(){const{availableStocks:t}=tt();return s.jsx("div",{className:"stocks-container",children:t==null?void 0:t.map(e=>s.jsx(ce,{currentValue:e.currentValue,previousValue:e.previousValue,changePercent:e.changePercent,name:e.name,_id:e._id},e.name))})}function fe(){return s.jsxs("div",{className:"main-page",children:[s.jsx(dt,{}),s.jsx(ae,{}),s.jsx(le,{})]})}export{fe as default};
