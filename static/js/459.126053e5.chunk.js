"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[459],{691:function(e,a,r){r.d(a,{Z:function(){return p}});var s=r(433),i=r(439),n=r(791),t=r(134),c="CardCars_btn__akSuD",l="CardCars_card__pqIqH",o="CardCars_thumb__BRe49",d="CardCars_iconAdd__qQRjp",u="CardCars_iconRemove__cMQdp",m="CardCars_info__Ab4CK",_="CardCars_infoItem__cg0EF",f="CardCars_location__QgWmL",C="CardCars_description__pslfE",v="CardCars_locationItem__1JV0Q",h="CardCars_descriptionItem__SAWyN",j=r(184),x=function(e){var a=e.car,r=e.addToFavorites,s=e.removeFromFavorites,i=e.isFavorite,n=a.id,x=a.make,N=a.model,p=a.img,g=a.year,F=a.rentalPrice,S=a.address,w=a.rentalCompany,k=a.type,I=a.mileage,b=a.functionalities;return console.log(i),(0,j.jsxs)("li",{className:l,children:[(0,j.jsx)("div",{className:o,children:(0,j.jsx)("img",{src:p,alt:x})}),i?(0,j.jsx)(t.M_L,{className:u,onClick:function(){return s(n)}}):(0,j.jsx)(t.lo,{className:d,onClick:function(){return r(a)}}),(0,j.jsxs)("ul",{className:m,children:[(0,j.jsxs)("li",{className:_,children:[x.slice(0,9)," ",(0,j.jsx)("span",{children:N.slice(0,9)}),", ",g]}),(0,j.jsx)("li",{className:_,children:F})]}),(0,j.jsxs)("ul",{className:f,children:[(0,j.jsx)("li",{className:v,children:S.split(" ")[3].replace(",","")}),(0,j.jsx)("li",{className:v,children:S.split(" ").slice(-1)}),(0,j.jsx)("li",{className:v,children:w})]}),(0,j.jsxs)("ul",{className:C,children:[(0,j.jsx)("li",{className:h,children:k}),(0,j.jsx)("li",{className:h,children:N}),(0,j.jsx)("li",{className:h,children:I}),(0,j.jsx)("li",{className:h,children:b[0].slice(0,21)})]}),(0,j.jsx)("button",{type:"button",className:c,children:"Learn more"})]})},N="CarsList_list__9i4lB",p=function(e){var a,r=e.data,t=e.changeFavorit,c=(0,n.useState)(null!==(a=JSON.parse(window.localStorage.getItem("favorites")))&&void 0!==a?a:[]),l=(0,i.Z)(c,2),o=l[0],d=l[1];(0,n.useEffect)((function(){window.localStorage.setItem("favorites",JSON.stringify(o))}),[o]);var u=function(e){d((function(a){return[].concat((0,s.Z)(a),[e])}))},m=function(e){d((function(a){return a.filter((function(a){return a.id!==e}))}));var a=o.filter((function(a){return a.id!==e}));t(a)};return console.log(o),(0,j.jsx)("ul",{className:N,children:r.map((function(e){return(0,j.jsx)(x,{car:e,addToFavorites:u,removeFromFavorites:m,isFavorite:(a=e.id,o.some((function(e){return e.id===a})))},e.id);var a}))})}},459:function(e,a,r){r.r(a),r.d(a,{default:function(){return o}});var s=r(439),i=r(791),n=r(461),t="FavoritesPage_wrapper__Qv8d4",c=r(691),l=r(184),o=function(){var e,a=(0,i.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorites")))&&void 0!==e?e:[]),r=(0,s.Z)(a,2),o=r[0],d=r[1];(0,i.useEffect)((function(){window.localStorage.setItem("favorites",JSON.stringify(o))}),[o]);return(0,l.jsx)("section",{className:t,children:(0,l.jsx)(n.Z,{children:(0,l.jsx)(c.Z,{data:o,changeFavorit:function(e){d(e)}})})})}}}]);
//# sourceMappingURL=459.126053e5.chunk.js.map