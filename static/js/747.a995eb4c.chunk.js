"use strict";(self.webpackChunkcampers_test=self.webpackChunkcampers_test||[]).push([[747],{426:(e,s,a)=>{a.r(s),a.d(s,{default:()=>F});var i=a(43),r=a(761),t=a(550),l=a(510),c=a(462),_=a(379),o=a(901),n=a(68),d=a(998),m=a(353),p=a(724),v=a(920),h=a(192),x=a(786),j=a(156),N=a(185);const f={Error:"Favorites_Error__yKant",favorites_container:"Favorites_favorites_container__i41PC",cards_wrapper:"Favorites_cards_wrapper__x+Omu",card_list_wrapper:"Favorites_card_list_wrapper__4saZT",card_info:"Favorites_card_info__Of3b4",description:"Favorites_description__FRA0j",card_img_wrapper:"Favorites_card_img_wrapper__vBQbP",card_img:"Favorites_card_img__L1ooO",info:"Favorites_info__Q9VVk",left_info:"Favorites_left_info__0pX1U",secondary_info:"Favorites_secondary_info__o6Ubu",like_btn:"Favorites_like_btn__DgObc",icons:"Favorites_icons__Qz+JY",show_btn:"Favorites_show_btn__pS2hu",item_details:"Favorites_item_details__ylNsG",header_detail:"Favorites_header_detail__YpDBK",list_details:"Favorites_list_details__NKCe9",load_more_btn:"Favorites_load_more_btn__wIMvW",empty_template:"Favorites_empty_template__osDdW",star_icon:"Favorites_star_icon__c6WZN",flex_box:"Favorites_flex_box__-3tKe",rating_wrapper:"Favorites_rating_wrapper__vnsi7",empty_template_title:"Favorites_empty_template_title__Eii2T"};var g=a(579);const F=(0,r.Ng)((e=>({loading:e.favorite.loading,error:e.favorite.error,favoriteCards:e.favorite.favoriteCards})))((e=>{let{loading:s,error:a,favoriteCards:F}=e;const u=(0,r.wA)(),[w,b]=(0,i.useState)({});(0,i.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("favoriteCards"));e&&u((0,l.ep)(e))}),[u]);const C=e=>{const s=e._id;u((0,l.V1)(s)),t.oR.info("Camper removed from your favorites!");const a=(JSON.parse(localStorage.getItem("favoriteCards"))||[]).filter((e=>e._id!==s));localStorage.setItem("favoriteCards",JSON.stringify(a))};return(0,g.jsxs)("div",{children:[(0,g.jsx)(c.A,{}),0===F.length?(0,g.jsxs)("div",{className:f.empty_template,children:[(0,g.jsx)("h2",{className:f.empty_template_title,children:"There are currently no favorite campers selected"}),(0,g.jsx)(t.N9,{autoClose:3e3})]}):(0,g.jsxs)("div",{className:f.favorites_container,children:[s&&(0,g.jsx)(_.A,{size:80,color:"#00BFFF"}),a&&(0,g.jsxs)("div",{className:f.Error,children:["An error occurred: ",a.message]}),!s&&!a&&(0,g.jsx)("div",{className:f.cards_wrapper,children:F.map(((e,s)=>e&&(0,g.jsx)("div",{className:f.FavoriteCard,children:(0,g.jsx)("ul",{className:f.card_list_wrapper,children:(0,g.jsxs)("li",{className:f.card_info,children:[(0,g.jsx)("div",{className:f.card_img_wrapper,children:(0,g.jsx)("img",{className:f.card_img,src:e.gallery[0],alt:e.name,width:290,height:310})}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:f.info,children:[(0,g.jsx)("h2",{children:e.name}),(0,g.jsxs)("div",{className:f.left_info,children:[(0,g.jsxs)("h2",{children:["\u20ac",e.price.toFixed(2)]}),(0,g.jsx)("button",{className:f.like_btn,onClick:()=>C(e),children:(0,g.jsx)("img",{src:n.A,alt:"favorite icon"})})]})]}),(0,g.jsxs)("div",{className:f.secondary_info,children:[(0,g.jsxs)("div",{className:f.rating_wrapper,children:[(0,g.jsx)("img",{className:f.star_icon,src:j.A,alt:"star icon"}),e.rating,"(",e.reviews.length," Reviews)"]}),(0,g.jsxs)("div",{className:f.flex_box,children:[(0,g.jsx)("img",{className:f.star_icon,src:N.A,alt:"star icon"}),(0,g.jsx)("span",{children:e.location})]})]}),(0,g.jsxs)("p",{className:f.description,children:[e.description,"..."]}),(0,g.jsxs)("ul",{className:f.list_details,children:[(0,g.jsxs)("li",{className:f.item_details,children:[(0,g.jsx)("img",{className:f.icons,src:x.A,alt:"persons icon"}),(0,g.jsxs)("p",{className:f.header_detail,children:[e.adults," adults"]})]}),(0,g.jsxs)("li",{className:f.item_details,children:[(0,g.jsx)("img",{className:f.icons,src:h.A,alt:"persons icon"}),(0,g.jsx)("p",{className:f.header_detail,children:e.transmission})]}),(0,g.jsxs)("li",{className:f.item_details,children:[(0,g.jsx)("img",{className:f.icons,src:v.A,alt:"persons icon"}),(0,g.jsx)("p",{className:f.header_detail,children:e.engine})]}),(0,g.jsxs)("li",{className:f.item_details,children:[(0,g.jsx)("img",{className:f.icons,src:p.A,alt:"persons icon"}),(0,g.jsx)("p",{className:f.header_detail,children:e.details.kitchen&&"Kitchen"})]}),(0,g.jsxs)("li",{className:f.item_details,children:[(0,g.jsx)("img",{className:f.icons,src:m.A,alt:"persons icon"}),(0,g.jsx)("p",{className:f.header_detail,children:e.details.beds+" beds"})]}),(0,g.jsxs)("li",{className:f.item_details,children:[(0,g.jsx)("img",{className:f.icons,src:d.A,alt:"persons icon"}),(0,g.jsx)("p",{className:f.header_detail,children:e.details.airConditioner>0&&"AC"})]})]}),(0,g.jsx)("button",{className:f.show_btn,onClick:()=>{return s=e._id,void b((e=>({...e,[s]:!0})));var s},children:"Show more"})]}),w[e._id]&&(0,g.jsx)(o.a,{camper:e,closeModal:()=>{return s=e._id,void b((e=>({...e,[s]:!1})));var s}})]})},e._id)},s)))}),(0,g.jsx)(t.N9,{autoClose:3e3})]})]})}))}}]);
//# sourceMappingURL=747.a995eb4c.chunk.js.map