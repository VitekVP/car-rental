"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[332],{1567:function(e,a,r){r.d(a,{Z:function(){return T}});var n=r(3433),s=r(9439),t=r(2791),i=r(8820),c="CardCars_card__pqIqH",l="CardCars_foto__oMRdV",o="CardCars_iconAdd__qQRjp",d="CardCars_iconRemove__cMQdp",u="CardCars_info__Ab4CK",p="CardCars_infoItem__cg0EF",_="CardCars_location__QgWmL",m="CardCars_description__pslfE",h="CardCars_locationItem__1JV0Q",f="CardCars_descriptionItem__SAWyN",x="CardCars_btn__akSuD",j=r(184),v=function(e){var a=e.car,r=e.addToFavorites,n=e.removeFromFavorites,s=e.isFavorite,t=e.toggleModal,v=a.id,C=a.make,N=a.model,g=a.img,k=a.year,M=a.rentalPrice,w=a.address,S=a.rentalCompany,F=a.type,b=a.mileage,Z=a.functionalities;return(0,j.jsxs)("li",{className:c,children:[(0,j.jsx)("img",{src:g,alt:C,className:l}),s?(0,j.jsx)(i.M_L,{className:d,onClick:function(){return n(v)}}):(0,j.jsx)(i.lo,{className:o,onClick:function(){return r(a)}}),(0,j.jsxs)("ul",{className:u,children:[(0,j.jsx)("li",{className:p,children:(0,j.jsxs)("p",{children:[C.slice(0,9)," ",(0,j.jsx)("span",{children:N.slice(0,9)}),", ",k]})}),(0,j.jsx)("li",{className:p,children:(0,j.jsx)("p",{children:M})})]}),(0,j.jsxs)("ul",{className:_,children:[(0,j.jsx)("li",{className:h,children:(0,j.jsx)("p",{children:w.split(" ")[3].replace(",","")})}),(0,j.jsx)("li",{className:h,children:(0,j.jsx)("p",{children:w.split(" ").slice(-1)})}),(0,j.jsx)("li",{className:h,children:(0,j.jsx)("p",{children:S})})]}),(0,j.jsxs)("ul",{className:m,children:[(0,j.jsx)("li",{className:f,children:(0,j.jsx)("p",{children:F})}),(0,j.jsx)("li",{className:f,children:(0,j.jsx)("p",{children:N})}),(0,j.jsx)("li",{className:f,children:(0,j.jsx)("p",{children:b})}),(0,j.jsx)("li",{className:f,children:(0,j.jsx)("p",{children:Z[0].slice(0,21)})})]}),(0,j.jsx)("button",{type:"button",className:x,onClick:function(){return t(a)},children:"Learn more"})]})},C=r(4164),N="Modal_backdrop__QksgQ",g="Modal_modal__IrIPm",k=document.querySelector("#modal-root"),M=function(e){var a=e.children,r=e.toggleModal,n=function(e){var a;((null===(a=e.target.dataset)||void 0===a?void 0:a.backdrop)||"Escape"===e.code)&&r()};return(0,t.useEffect)((function(){return window.addEventListener("keydown",n),window.addEventListener("click",n),function(){window.removeEventListener("keydown",n),window.removeEventListener("click",n)}})),(0,C.createPortal)((0,j.jsx)("div",{className:N,"data-backdrop":!0,children:(0,j.jsx)("div",{className:g,children:a})}),k)},w="CarModal_wrapper__LitVT",S="CarModal_iconClose__9oiIy",F="CarModal_foto__o-FSh",b="CarModal_info__AGzFY",Z="CarModal_location__e3vSL",y="CarModal_locationItem__omx6y",L="CarModal_feature__V-pZ5",I="CarModal_featureItem__0f4x+",E="CarModal_subtitle__q54IG",A="CarModal_description__s-aP+",B="CarModal_accessories__tyOm9",P="CarModal_accessoriesItem__cIRFK",R="CarModal_functionalities__UUUYz",q="CarModal_functionalitiesItem__G1RJQ",Q="CarModal_conditionList__ntpE2",z="CarModal_condition__Gj14c",J="CarModal_link__wXaX3",V=function(e){var a=e.car,r=e.toggleModal,n=a.id,s=a.make,t=a.model,c=a.img,l=a.year,o=a.rentalPrice,d=a.address,u=a.type,p=a.mileage,_=a.functionalities,m=a.fuelConsumption,h=a.engineSize,f=a.description,x=a.accessories,v=a.rentalConditions;return(0,j.jsxs)("div",{className:w,children:[(0,j.jsx)(i.oHP,{className:S,onClick:r}),(0,j.jsx)("img",{src:c,alt:s,className:F}),(0,j.jsxs)("h3",{className:b,children:[s," ",(0,j.jsx)("span",{children:t}),", ",l]}),(0,j.jsxs)("ul",{className:Z,children:[(0,j.jsx)("li",{className:y,children:(0,j.jsx)("p",{children:d.split(" ")[3].replace(",","")})}),(0,j.jsx)("li",{className:y,children:(0,j.jsx)("p",{children:d.split(" ").slice(-1)})}),(0,j.jsx)("li",{className:y,children:(0,j.jsxs)("p",{children:["Id:",n]})}),(0,j.jsx)("li",{className:y,children:(0,j.jsxs)("p",{children:["Year:",l]})}),(0,j.jsxs)("li",{className:y,children:[" ",(0,j.jsxs)("p",{children:["Tipe:",u]})]})]}),(0,j.jsxs)("ul",{className:L,children:[(0,j.jsx)("li",{className:I,children:(0,j.jsxs)("p",{children:["FuelConsumption:",m]})}),(0,j.jsx)("li",{className:I,children:(0,j.jsxs)("p",{children:["EngineSize:",h]})})]}),(0,j.jsx)("p",{className:A,children:f}),(0,j.jsx)("h4",{className:E,children:"Accessories and functionalities:"}),(0,j.jsx)("ul",{className:B,children:x.map((function(e){return(0,j.jsx)("li",{className:P,children:(0,j.jsx)("p",{children:e.slice(0,25)})},e)}))}),(0,j.jsx)("ul",{className:R,children:_.map((function(e){return(0,j.jsx)("li",{className:q,children:(0,j.jsx)("p",{children:e.slice(0,25)})},e)}))}),(0,j.jsx)("h4",{className:E,children:"Rental Conditions: "}),(0,j.jsxs)("div",{className:Q,children:[(0,j.jsxs)("p",{className:z,children:[v.split("\n")[0].split(" ").slice(0,2).join(" "),(0,j.jsx)("span",{children:v.split("\n")[0].split(" ").slice(-1).join("")})]}),(0,j.jsx)("p",{className:z,children:v.split("\n")[1]}),(0,j.jsx)("p",{className:z,children:v.split("\n")[2]}),(0,j.jsxs)("p",{className:z,children:["Mileage: ",(0,j.jsx)("span",{children:p.toLocaleString("en-US")})]}),(0,j.jsxs)("p",{className:z,children:["Price: ",(0,j.jsx)("span",{children:o})]})]}),(0,j.jsx)("a",{href:"tel:+380730000000",className:J,children:"Rental car"})]})},K="CarsList_list__9i4lB",T=function(e){var a,r=e.data,i=e.changeFavorit,c=(0,t.useState)(null!==(a=JSON.parse(window.localStorage.getItem("favorites")))&&void 0!==a?a:[]),l=(0,s.Z)(c,2),o=l[0],d=l[1],u=(0,t.useState)(!1),p=(0,s.Z)(u,2),_=p[0],m=p[1],h=(0,t.useState)(""),f=(0,s.Z)(h,2),x=f[0],C=f[1];(0,t.useEffect)((function(){window.localStorage.setItem("favorites",JSON.stringify(o))}),[o]);var N=function(e){d((function(a){return[].concat((0,n.Z)(a),[e])}))},g=function(e){d((function(a){return a.filter((function(a){return a.id!==e}))}));var a=o.filter((function(a){return a.id!==e}));i(a)},k=function(e){m(!_),C(e)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("ul",{className:K,children:r.map((function(e){return(0,j.jsx)(v,{car:e,addToFavorites:N,removeFromFavorites:g,isFavorite:(a=e.id,o.some((function(e){return e.id===a}))),toggleModal:k},e.id);var a}))}),_&&(0,j.jsx)(M,{toggleModal:k,children:(0,j.jsx)(V,{toggleModal:k,car:x})})]})}},9332:function(e,a,r){r.r(a),r.d(a,{default:function(){return w}});var n=r(3433),s=r(5861),t=r(9439),i=r(4687),c=r.n(i),l=r(2791),o=r(7596),d=r(3461),u="SideBar_wrapper__oZJJ3",p="SideBar_boxFilter__eLV2l",_="SideBar_nameFilter__5VzkF",m="SideBar_fieldFilter__0uKN9",h="SideBar_fieldFilterFocused__iMqTp",f=r(184),x=function(e){var a=e.filter,r=e.changeFilter;return(0,f.jsx)("div",{className:u,children:(0,f.jsx)("form",{children:(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("input",{type:"text",id:"inputFilter",name:"filter",value:a,onChange:r,className:a?h:m}),(0,f.jsx)("label",{htmlFor:"inputFilter",className:_,children:"Search for a car by make"})]})})})},j=r(1567),v="LoadMore_btn__KaaAq",C=function(e){var a=e.clickBtn;return(0,f.jsx)("button",{type:"button",className:v,onClick:a,children:"Load More"})},N=r(2715),g=r(1243).Z.create({baseURL:"https://648dc0c62de8d0ea11e82d21.mockapi.io"}),k=function(){var e=(0,s.Z)(c().mark((function e(a){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/adverts",{params:{page:a,limit:8}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),M="CatalogPage_wrapper__ShKzl",w=function(){var e=(0,l.useState)([]),a=(0,t.Z)(e,2),r=a[0],i=a[1],u=(0,l.useState)(0),p=(0,t.Z)(u,2),_=p[0],m=p[1],h=(0,l.useState)(!1),v=(0,t.Z)(h,2),g=v[0],w=v[1],S=(0,l.useState)(null),F=(0,t.Z)(S,2),b=F[0],Z=F[1],y=(0,l.useState)(1),L=(0,t.Z)(y,2),I=L[0],E=L[1],A=(0,l.useState)(""),B=(0,t.Z)(A,2),P=B[0],R=B[1];(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:a=e.sent,m(a.length),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Z(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){1!==I?Q(I):q(I)}),[I]);var q=function(){var e=(0,s.Z)(c().mark((function e(a){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),Z(null),e.prev=2,e.next=5,k(a);case 5:if(0!==(r=e.sent).length){e.next=9;break}return o.Am.info("sorry, nothing found :("),e.abrupt("return");case 9:i(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),Z(e.t0.message);case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(a){return e.apply(this,arguments)}}(),Q=function(){var e=(0,s.Z)(c().mark((function e(a){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),Z(null),e.prev=2,e.next=5,k(a);case 5:if(0!==(r=e.sent).length){e.next=9;break}return o.Am.info("these are all cars"),e.abrupt("return");case 9:i((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r))})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),Z(e.t0.message);case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(a){return e.apply(this,arguments)}}();if(!b){var z=Math.ceil(_/8)-I,J=function(){var e=P.toLowerCase().trim();return r.filter((function(a){return a.make.toLowerCase().includes(e)}))}();return(0,f.jsx)("section",{className:M,children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(x,{changeFilter:function(e){R(e.target.value)},filter:P}),g?(0,f.jsx)(N.Z,{}):(0,f.jsx)(j.Z,{data:J}),z&&(0,f.jsx)(C,{clickBtn:function(){E((function(e){return e+1}))}})]})})}o.Am.error(b)}}}]);
//# sourceMappingURL=332.7a3f6d7a.chunk.js.map