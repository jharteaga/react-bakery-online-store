(this["webpackJsonpreact-bakery-online-store"]=this["webpackJsonpreact-bakery-online-store"]||[]).push([[0],{59:function(e,a,t){e.exports=t.p+"static/media/carousel-img1.0be2083a.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/carousel-img2.6691f172.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/carousel-img3.66479b57.jpg"},66:function(e,a,t){e.exports=t(91)},90:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),m=t(13),o=t(35),s=t(51),i=t(109),u=t(14),p=t(110),E=t(57),b=t.n(E),d=Object(u.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(i.a);function k(){return r.a.createElement(p.a,{"aria-label":"cart"},r.a.createElement(d,{badgeContent:0,color:"primary"},r.a.createElement(b.a,{fontSize:"large",className:"mx-0 my-0",style:{color:"#fff"}})))}var f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"mb-5"},r.a.createElement(o.a.Brand,null,r.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Bakery Online Store")),r.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto ml-auto"},r.a.createElement(m.c,{className:"nav-link mr-5",to:"/home"},"Home"),r.a.createElement(m.c,{className:"nav-link mr-5",to:"/bakery"},"Bakery"),r.a.createElement(m.c,{className:"nav-link mr-5",to:"/drinks"},"Drinks"),r.a.createElement(m.c,{className:"nav-link mr-5",to:"/contact-us"},"Contact Us")),r.a.createElement(s.a,null,r.a.createElement(m.c,{className:"nav-link mt-3",to:"/login"},"Login"),r.a.createElement(m.c,{className:"nav-link",to:"/shopping-cart"},r.a.createElement(k,null))))))},g=t(7);var v=function(e){return r.a.createElement("h1",null,"Login")},y=t(44),h=t(42),N=t(49),_=t.n(N);t(82);_.a.initializeApp({apiKey:"AIzaSyCeBWG8d9vyy8hpvhlDOAecTjdfZ02S1CY",authDomain:"bakery-online-store.firebaseapp.com",databaseURL:"https://bakery-online-store.firebaseio.com",projectId:"bakery-online-store",storageBucket:"bakery-online-store.appspot.com",messagingSenderId:"668149766002",appId:"1:668149766002:web:6f416db0557e91278befeb",measurementId:"G-6170QTEVE4"});var j=_.a,O=t(40),S=t(41);var x=function(e){var a=Object(n.useState)([]),t=Object(h.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){j.firestore().collection("bakery").onSnapshot((function(e){var a=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));l(a)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Bakery"),r.a.createElement("div",{className:"bakery"},c.map((function(e){return r.a.createElement("div",{key:e.id,className:"bakery__box"},r.a.createElement("img",{src:e.image,alt:"Dessert",className:"bakery__img"}),r.a.createElement("h4",{className:"bakery__name"},e.name),r.a.createElement("p",{className:"bakery__description"},e.description),r.a.createElement("div",{className:"bakery__row"},r.a.createElement("span",{className:"bakery__price"},"$",e.price),r.a.createElement("span",{className:"bakery__cart"},r.a.createElement(O.a,{icon:S.a}))))}))))};var w=function(e){var a=Object(n.useState)([]),t=Object(h.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){j.firestore().collection("drinks").onSnapshot((function(e){var a=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));l(a)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Drinks"),r.a.createElement("div",{className:"drinks"},c.map((function(e){return r.a.createElement("div",{key:e.id,className:"bakery__box"},r.a.createElement("img",{src:e.image,alt:"Dessert",className:"bakery__img"}),r.a.createElement("h4",{className:"bakery__name"},e.name),r.a.createElement("p",{className:"bakery__description"},e.description),r.a.createElement("div",{className:"bakery__row"},r.a.createElement("span",{className:"bakery__price"},"$",e.price),r.a.createElement("span",{className:"bakery__cart"},r.a.createElement(O.a,{icon:S.a}))))}))))};var I=function(e){return r.a.createElement("h1",null,"Contact Us")},B=t(34),C=t(59),F=t.n(C),D=t(60),T=t.n(D),A=t(61),z=t.n(A);var L=function(e){return r.a.createElement(B.a,{className:"home__carousel"},r.a.createElement(B.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:F.a,alt:"First slide"})),r.a.createElement(B.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:T.a,alt:"Third slide"})),r.a.createElement(B.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:z.a,alt:"Third slide"})))},U=t(63),G=t.n(U),J=t(64),$=t.n(J),H=t(62),K=t.n(H);var P=function(e){return r.a.createElement("div",{className:"social-media"},r.a.createElement(K.a,{className:"icon"}),r.a.createElement(G.a,{className:"icon"}),r.a.createElement($.a,{className:"icon"}))};var Q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"The Sweetest Place in America!"),r.a.createElement(L,null),r.a.createElement(P,null))};var R=function(e){return r.a.createElement("h1",null,"Not Found")};var V=function(e){return r.a.createElement("h1",null,"Shopping Cart")};t(89),t(90);var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",{className:"container"},r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/login",component:v}),r.a.createElement(g.b,{path:"/shopping-cart",component:V}),r.a.createElement(g.b,{path:"/bakery",component:x}),r.a.createElement(g.b,{path:"/drinks",component:w}),r.a.createElement(g.b,{path:"/contact-us",component:I}),r.a.createElement(g.b,{path:"/home",component:Q}),r.a.createElement(g.b,{path:"/not-found",component:R}),r.a.createElement(g.a,{from:"/",exact:!0,to:"/home"}),r.a.createElement(g.a,{to:"/not-found"}))))};l.a.render(r.a.createElement(m.a,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.9fd1d679.chunk.js.map