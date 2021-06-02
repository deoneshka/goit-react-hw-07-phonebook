(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={item:"ContactList_item__3Y_cN",list:"ContactList_list__3XAHC",button:"ContactList_button__1huwn"}},23:function(t,e,n){t.exports={label:"FilterContacts_label__1Fue6",input:"FilterContacts_input__23H2v"}},32:function(t,e,n){t.exports={container:"Container_container__3Ol6p"}},62:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),u=n(13),s=n(14),i=n(17),b=n(15),l=n(6),f=n(7),j=n.n(f),d=n(18),h=n(10),p=n.n(h),O=n(2),m=Object(O.b)("contacts/fetchContactsRequest"),v=Object(O.b)("contacts/fetchContactsSuccess"),C=Object(O.b)("contacts/fetchContactsError"),x=Object(O.b)("contacts/addContactRequest"),_=Object(O.b)("contacts/addContactSuccess"),g=Object(O.b)("contacts/addContactError"),y=Object(O.b)("contacts/deleteContactRequest"),N=Object(O.b)("contacts/deleteContactSuccess"),k=Object(O.b)("contacts/deleteContactError"),w=Object(O.b)("contacts/changeFilter");p.a.defaults.baseURL="http://localhost:4000";var S,F,A=function(t,e){return function(){var n=Object(d.a)(j.a.mark((function n(c){var a,r,o;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(x()),n.prev=2,n.next=5,p.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(_(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(g(n.t0));case 13:case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},L=function(t){return function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y()),e.prev=1,e.next=4,p.a.delete("/contacts/".concat(t));case 4:n(N(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(k(e.t0));case 10:case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},z=n(12),D=function(t){return t.contacts.loading},E=function(t){return t.contacts.filter},R=function(t){return t.contacts.items},T=Object(z.a)([R,E],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),J=n(32),M=n.n(J),Z=n(1),B=function(t){var e=t.children;return Object(Z.jsx)("div",{className:M.a.container,children:e})},H=n(8),X=n.n(H),I=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number,r=t.props,o=r.contacts,u=r.onSubmit;t.setState({name:"",number:""}),o.find((function(t){return t.name===c}))?alert("".concat(c," is already in contacts.")):u(c,a)},t.handleChangeName=function(e){t.setState({name:e.currentTarget.value})},t.handleChangeNumber=function(e){t.setState({number:e.currentTarget.value})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(Z.jsxs)("form",{className:X.a.form,onSubmit:this.handleSubmit,children:[Object(Z.jsx)("label",{className:X.a.field,children:"Name"}),Object(Z.jsx)("input",{className:X.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChangeName}),Object(Z.jsx)("label",{className:X.a.field,children:"Number"}),Object(Z.jsx)("input",{className:X.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChangeNumber}),Object(Z.jsx)("button",{className:X.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),K=Object(l.b)((function(t){return{contacts:R(t)}}),(function(t){return{onSubmit:function(e,n){return t(A(e,n))}}}))(I),P=n(19),U=n.n(P),Y=Object(l.b)((function(t){return{contacts:T(t)}}),(function(t){return{onDeleteContact:function(e){return t(L(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(Z.jsx)("ul",{className:U.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(Z.jsxs)("li",{className:U.a.item,children:[c,": ",a,Object(Z.jsx)("button",{className:U.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),$=n(23),G=n.n($),Q=Object(l.b)((function(t){return{value:E(t)}}),(function(t){return{onChange:function(e){return t(w(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(Z.jsxs)("label",{className:G.a.label,children:["Find contacts by name",Object(Z.jsx)("input",{className:G.a.input,type:"text",value:e,onChange:n})]})})),V=(n(62),function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(Z.jsxs)(B,{children:[Object(Z.jsx)("h1",{children:"Phonebook"}),Object(Z.jsx)(K,{}),Object(Z.jsx)("h2",{children:"Contacts"}),Object(Z.jsx)(Q,{}),this.props.isLoading&&Object(Z.jsx)("h3",{className:"loader",children:"loading..."}),Object(Z.jsx)(Y,{})]})}}]),n}(c.Component)),W=Object(l.b)((function(t){return{isLoading:D(t)}}),(function(t){return{fetchContacts:function(){return t(q())}}}))(V),tt=n(16),et=n(3),nt=n(33),ct=n.n(nt),at=n(9),rt=n(4),ot=Object(O.c)([],(S={},Object(rt.a)(S,v,(function(t,e){return e.payload})),Object(rt.a)(S,_,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(rt.a)(S,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),ut=Object(O.c)(!1,(F={},Object(rt.a)(F,m,(function(){return!0})),Object(rt.a)(F,v,(function(){return!1})),Object(rt.a)(F,C,(function(){return!1})),Object(rt.a)(F,x,(function(){return!0})),Object(rt.a)(F,_,(function(){return!1})),Object(rt.a)(F,g,(function(){return!1})),Object(rt.a)(F,y,(function(){return!0})),Object(rt.a)(F,N,(function(){return!1})),Object(rt.a)(F,k,(function(){return!1})),F)),st=Object(O.c)("",Object(rt.a)({},w,(function(t,e){return e.payload}))),it=Object(et.b)({items:ot,filter:st,loading:ut}),bt=Object(et.b)({contacts:it}),lt=[].concat(Object(tt.a)(Object(O.d)({serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}})),[ct.a]),ft=Object(O.a)({reducer:bt,middleware:lt,devTools:!1});o.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(l.a,{store:ft,children:Object(Z.jsx)(W,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__3Xr5u",field:"ContactForm_field__2pmwz",input:"ContactForm_input__TxhKq",button:"ContactForm_button__3F_3O"}}},[[64,1,2]]]);
//# sourceMappingURL=main.d0d967f6.chunk.js.map