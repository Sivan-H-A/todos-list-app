(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(10),i=c.n(a),s=(c(25),c(8)),r=(c(26),c(34)),l=(c(27),c(37)),u=c(35),d=c(38),j=c(36),f=c(2);function b(e){var t=e.todoItem,c=e.onCheckedItem,o=e.onDeleteItem,a=Object(n.useState)(""),i=Object(s.a)(a,2),r=i[0],l=i[1],u=Object(n.useState)(!1),b=Object(s.a)(u,2),h=b[0],O=b[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),x=p[0],g=p[1];return Object(n.useEffect)((function(){O(!!t.completed),l(t.completed?"c-todo-item-checked":"")}),[t]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{type:"checkbox",className:"c-checkbox text-center col-2",checked:h,onChange:function(e){return function(e){l(e.target.checked?"c-todo-item-checked":""),O(!!e.target.checked),c(t.id,e.target.checked)}(e)}}),Object(f.jsx)("label",{className:"".concat(r," c-label col-8"),children:t.title}),Object(f.jsx)(d.a,{className:"todo-cancel-item btn-danger",onClick:function(){t.completed?o(t):g(!0)},children:"x"}),Object(f.jsxs)(j.a,{show:x,onHide:function(){return g(!1)},children:[Object(f.jsx)(j.a.Header,{closeButton:!0,children:Object(f.jsx)(j.a.Title,{children:"Delete Todo"})}),Object(f.jsxs)(j.a.Body,{children:["Are you sure you want to delete todo: ",t.title]}),Object(f.jsxs)(j.a.Footer,{children:[Object(f.jsx)(d.a,{variant:"secondary",onClick:function(){return g(!1)},children:"Close"}),Object(f.jsx)(d.a,{variant:"primary",onClick:function(){g(!1),o(t)},children:"OK"})]})]})]})}c(31);function h(e){var t=e.todosList,c=e.onDeleteItem,o=e.onCheckedTodo,a=Object(n.useState)(t.length),i=Object(s.a)(a,2),j=i[0],h=i[1],O=Object(n.useState)(!0),m=Object(s.a)(O,2),p=m[0],x=m[1],g=Object(n.useState)(!1),k=Object(s.a)(g,2),v=k[0],I=k[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),N=S[0],y=S[1],w=Object(n.useState)(t.filter((function(e){return e.completed})).length),D=Object(s.a)(w,2),E=D[0],T=D[1],F=Object(n.useState)([]),M=Object(s.a)(F,2),A=M[0],B=M[1],J=[];function L(){if(N&&B(t.filter((function(e){return e.completed}))),v&&B(t.filter((function(e){return!e.completed}))),p){B([].concat(t))}}function H(e,t){T(t?E+1:E-1),o(e,t)}function K(e){e.completed&&T(E-1),c(e)}return Object(n.useEffect)((function(){h(t.length-E),L()}),[t,E]),Object(n.useEffect)((function(){L()}),[p,v,N]),A.map((function(e){J.push(Object(f.jsx)(l.a.Item,{className:"c-todo-item row",children:Object(f.jsx)(b,{todoItem:e,onCheckedItem:H,onDeleteItem:function(e){return K(e)}})},e.id))})),Object(f.jsxs)(r.a,{children:[Object(f.jsx)(l.a,{variant:"flush",children:J}),Object(f.jsxs)("div",{className:"c-todos-list-info",children:[Object(f.jsxs)("h6",{className:"text-center c-todo-info-title",children:[j," Items left"]}),Object(f.jsxs)(u.a,{className:"c-info-listgroup",children:[Object(f.jsx)(d.a,{variant:"outline-primary",className:p?"c-btn-marked":"",onClick:function(e){x(!0),I(!1),y(!1)},children:"All"}),Object(f.jsx)(d.a,{variant:"outline-primary",className:v?"c-btn-marked":"",onClick:function(e){I(!0),x(!1),y(!1)},children:"Active"}),Object(f.jsx)(d.a,{variant:"outline-primary",className:N?"c-btn-marked":"",onClick:function(e){y(!0),x(!1),I(!1)},children:"Completed"})]})]})]})}var O=c(19),m=c(20),p=function(){function e(t){Object(O.a)(this,e),this.title=t,this.id=this.getRandomIntInclusive(1,100),this.completed=!1}return Object(m.a)(e,[{key:"getRandomIntInclusive",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}}]),e}();var x=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos"));e&&o(e)}),[]),Object(n.useEffect)((function(){c&&localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(f.jsxs)(r.a,{className:"App",children:[Object(f.jsx)("h1",{className:"text-center row todos-header",children:"Todos"}),Object(f.jsx)("input",{className:"row todos-input",placeholder:"What's next?",onKeyDown:function(e){return function(e){"Enter"===e.key&&e.target.value&&(o(c.concat(new p(e.target.value))),e.target.value="")}(e)}}),c&&c.length>0?Object(f.jsx)(h,{todosList:c,onDeleteItem:function(e){var t=[];c.splice(c.findIndex((function(t){return t.id===e.id})),1),t=t.concat(c),console.log(t),o(t)},onCheckedTodo:function(e,t){var n=c.find((function(t){return t.id===e})),a=new p(n.title);a.completed=t;var i=[];(i=i.concat(c)).splice(i.indexOf(n),1,a),o(i)}}):""]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.dc0fe47e.chunk.js.map