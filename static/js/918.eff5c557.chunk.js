"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[918],{1567:function(e,s,a){a.d(s,{Z:function(){return V}});var l=a(3433),i=a(9439),r=a(2791),n=a(8820),c="CardCars_card__pqIqH",t="CardCars_foto__oMRdV",o="CardCars_iconAdd__qQRjp",d="CardCars_iconRemove__cMQdp",_="CardCars_info__Ab4CK",m="CardCars_infoItem__cg0EF",u="CardCars_location__QgWmL",h="CardCars_description__pslfE",j="CardCars_locationItem__1JV0Q",x="CardCars_descriptionItem__SAWyN",p="CardCars_btn__akSuD",f=a(184),N=function(e){var s=e.car,a=e.addToFavorites,l=e.removeFromFavorites,i=e.isFavorite,r=e.toggleModal,N=s.id,C=s.make,v=s.model,g=s.img,M=s.year,w=s.rentalPrice,k=s.address,S=s.rentalCompany,I=s.type,y=s.mileage,F=s.functionalities;return(0,f.jsxs)("li",{className:c,children:[(0,f.jsx)("img",{src:g,alt:C,className:t}),i?(0,f.jsx)(n.M_L,{className:d,onClick:function(){return l(N)}}):(0,f.jsx)(n.lo,{className:o,onClick:function(){return a(s)}}),(0,f.jsxs)("ul",{className:_,children:[(0,f.jsx)("li",{className:m,children:(0,f.jsxs)("p",{children:[C.slice(0,9)," ",(0,f.jsx)("span",{children:v.slice(0,9)}),", ",M]})}),(0,f.jsx)("li",{className:m,children:(0,f.jsx)("p",{children:w})})]}),(0,f.jsxs)("ul",{className:u,children:[(0,f.jsx)("li",{className:j,children:(0,f.jsx)("p",{children:k.split(" ")[3].replace(",","")})}),(0,f.jsx)("li",{className:j,children:(0,f.jsx)("p",{children:k.split(" ").slice(-1)})}),(0,f.jsx)("li",{className:j,children:(0,f.jsx)("p",{children:S})})]}),(0,f.jsxs)("ul",{className:h,children:[(0,f.jsx)("li",{className:x,children:(0,f.jsx)("p",{children:I})}),(0,f.jsx)("li",{className:x,children:(0,f.jsx)("p",{children:v})}),(0,f.jsx)("li",{className:x,children:(0,f.jsx)("p",{children:y})}),(0,f.jsx)("li",{className:x,children:(0,f.jsx)("p",{children:F[0].slice(0,21)})})]}),(0,f.jsx)("button",{type:"button",className:p,onClick:function(){return r(s)},children:"Learn more"})]})},C=a(4164),v="Modal_backdrop__QksgQ",g="Modal_modal__IrIPm",M=document.querySelector("#modal-root"),w=function(e){var s=e.children,a=e.toggleModal,l=function(e){var s;((null===(s=e.target.dataset)||void 0===s?void 0:s.backdrop)||"Escape"===e.code)&&a()};return(0,r.useEffect)((function(){return window.addEventListener("keydown",l),window.addEventListener("click",l),function(){window.removeEventListener("keydown",l),window.removeEventListener("click",l)}})),(0,C.createPortal)((0,f.jsx)("div",{className:v,"data-backdrop":!0,children:(0,f.jsx)("div",{className:g,children:s})}),M)},k="CarModal_wrapper__LitVT",S="CarModal_iconClose__9oiIy",I="CarModal_foto__o-FSh",y="CarModal_info__AGzFY",F="CarModal_location__e3vSL",E="CarModal_locationItem__omx6y",L="CarModal_feature__V-pZ5",b="CarModal_featureItem__0f4x+",P="CarModal_subtitle__q54IG",Z="CarModal_description__s-aP+",Q="CarModal_accessories__tyOm9",R="CarModal_accessoriesItem__cIRFK",J="CarModal_functionalities__UUUYz",T="CarModal_functionalitiesItem__G1RJQ",q="CarModal_conditionList__ntpE2",z="CarModal_condition__Gj14c",A="CarModal_link__wXaX3",O=function(e){var s=e.car,a=e.toggleModal,l=s.id,i=s.make,r=s.model,c=s.img,t=s.year,o=s.rentalPrice,d=s.address,_=s.type,m=s.mileage,u=s.functionalities,h=s.fuelConsumption,j=s.engineSize,x=s.description,p=s.accessories,N=s.rentalConditions;return(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)(n.oHP,{className:S,onClick:a}),(0,f.jsx)("img",{src:c,alt:i,className:I}),(0,f.jsxs)("h3",{className:y,children:[i," ",(0,f.jsx)("span",{children:r}),", ",t]}),(0,f.jsxs)("ul",{className:F,children:[(0,f.jsx)("li",{className:E,children:(0,f.jsx)("p",{children:d.split(" ")[3].replace(",","")})}),(0,f.jsx)("li",{className:E,children:(0,f.jsx)("p",{children:d.split(" ").slice(-1)})}),(0,f.jsx)("li",{className:E,children:(0,f.jsxs)("p",{children:["Id:",l]})}),(0,f.jsx)("li",{className:E,children:(0,f.jsxs)("p",{children:["Year:",t]})}),(0,f.jsxs)("li",{className:E,children:[" ",(0,f.jsxs)("p",{children:["Tipe:",_]})]})]}),(0,f.jsxs)("ul",{className:L,children:[(0,f.jsx)("li",{className:b,children:(0,f.jsxs)("p",{children:["FuelConsumption:",h]})}),(0,f.jsx)("li",{className:b,children:(0,f.jsxs)("p",{children:["EngineSize:",j]})})]}),(0,f.jsx)("p",{className:Z,children:x}),(0,f.jsx)("h4",{className:P,children:"Accessories and functionalities:"}),(0,f.jsx)("ul",{className:Q,children:p.map((function(e){return(0,f.jsx)("li",{className:R,children:(0,f.jsx)("p",{children:e.slice(0,25)})},e)}))}),(0,f.jsx)("ul",{className:J,children:u.map((function(e){return(0,f.jsx)("li",{className:T,children:(0,f.jsx)("p",{children:e.slice(0,25)})},e)}))}),(0,f.jsx)("h4",{className:P,children:"Rental Conditions: "}),(0,f.jsxs)("div",{className:q,children:[(0,f.jsxs)("p",{className:z,children:[N.split("\n")[0].split(" ").slice(0,2).join(" "),(0,f.jsx)("span",{children:N.split("\n")[0].split(" ").slice(-1).join("")})]}),(0,f.jsx)("p",{className:z,children:N.split("\n")[1]}),(0,f.jsx)("p",{className:z,children:N.split("\n")[2]}),(0,f.jsxs)("p",{className:z,children:["Mileage: ",(0,f.jsx)("span",{children:m.toLocaleString("en-US")})]}),(0,f.jsxs)("p",{className:z,children:["Price: ",(0,f.jsx)("span",{children:o})]})]}),(0,f.jsx)("a",{href:"tel:+380730000000",className:A,children:"Rental car"})]})},U="CarsList_list__9i4lB",V=function(e){var s,a=e.data,n=e.changeFavorit,c=(0,r.useState)(null!==(s=JSON.parse(window.localStorage.getItem("favorites")))&&void 0!==s?s:[]),t=(0,i.Z)(c,2),o=t[0],d=t[1],_=(0,r.useState)(!1),m=(0,i.Z)(_,2),u=m[0],h=m[1],j=(0,r.useState)(""),x=(0,i.Z)(j,2),p=x[0],C=x[1];(0,r.useEffect)((function(){window.localStorage.setItem("favorites",JSON.stringify(o))}),[o]);var v=function(e){d((function(s){return[].concat((0,l.Z)(s),[e])}))},g=function(e){d((function(s){return s.filter((function(s){return s.id!==e}))}));var s=o.filter((function(s){return s.id!==e}));n(s)},M=function(e){h(!u),C(e)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("ul",{className:U,children:a.map((function(e){return(0,f.jsx)(N,{car:e,addToFavorites:v,removeFromFavorites:g,isFavorite:(s=e.id,o.some((function(e){return e.id===s}))),toggleModal:M},e.id);var s}))}),u&&(0,f.jsx)(w,{toggleModal:M,children:(0,f.jsx)(O,{toggleModal:M,car:p})})]})}},9682:function(e,s,a){a.d(s,{Z:function(){return n}});var l=a(1087),i="LinkToCatalog_link__VR4b8",r=a(184),n=function(){return(0,r.jsx)(l.rU,{to:"/catalog",className:i,children:"Select car!!!"})}},7918:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var l=a(9439),i=a(2791),r=a(3461),n="FavoritesPage_wrapper__Qv8d4",c=a(1567),t=a(9682),o=a(6338),d="Pla\u0441eholder_wrapper__sohdr",_="Pla\u0441eholder_box__Mu72z",m="Pla\u0441eholder_text__raoyg",u="Pla\u0441eholder_content__cEHTl",h=a(184),j=function(){return(0,h.jsx)("section",{className:d,children:(0,h.jsxs)(r.Z,{children:[(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("p",{className:m,children:"Your favorite cars list is empty"}),(0,h.jsx)(t.Z,{})]}),(0,h.jsx)("img",{src:o,alt:"placeholder",className:u})]})})},x=function(){var e,s=(0,i.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorites")))&&void 0!==e?e:[]),a=(0,l.Z)(s,2),t=a[0],o=a[1];(0,i.useEffect)((function(){window.localStorage.setItem("favorites",JSON.stringify(t))}),[t]);return 0!==t.length?(0,h.jsx)("section",{className:n,children:(0,h.jsx)(r.Z,{children:(0,h.jsx)(c.Z,{data:t,changeFavorit:function(e){o(e)}})})}):(0,h.jsx)(j,{})}}}]);
//# sourceMappingURL=918.eff5c557.chunk.js.map