(this["webpackJsonpvezdekod-hf-web"]=this["webpackJsonpvezdekod-hf-web"]||[]).push([[0],{168:function(e,a,t){},173:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);t(92),t(118),t(120),t(121),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(132),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(143),t(144),t(145),t(146),t(147),t(148),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160);var r=t(0),c=t.n(r),n=t(83),o=t.n(n),i=t(24),s=t(23),l=t(7),m=t(6),d=t(22),u=t.n(d),f=(t(168),function(e){var a=e.foodAreas,t=e.order;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"Home"},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("div",{className:"Home__fixed-content"},c.a.createElement("header",{className:"Home__header"},c.a.createElement("h1",{className:"Home__head"},c.a.createElement(l.b,{to:"/",className:"Home__logo"},e.name)),c.a.createElement(l.b,{to:"/",className:"Home__change-tz"},c.a.createElement("img",{className:"Home__edit",alt:"change-profile",src:u.a}))),c.a.createElement("ul",{className:"Home__tabs"},c.a.createElement("li",{className:"Home__tab Home__tab_active"},"\u0415\u0434\u0430"))),c.a.createElement("ul",{className:"Home__items"},e.items.map((function(e){return c.a.createElement("li",{className:"Home__item",key:e.id},c.a.createElement(l.b,{className:"Home__food-link",to:e.link},c.a.createElement("img",{alt:e.name,className:"Home__image",src:e.image}),c.a.createElement("h3",{className:"Home__food-name"},e.name),c.a.createElement("p",{className:"Home__food-type"},e.description)))}))))}))),0!==Object.keys(t).length&&c.a.createElement("footer",{className:"Footer"},c.a.createElement(l.b,{to:"/orders",className:"Footer__orders"},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))});f.defaultProps={foodAreas:[]};var _=f,p=t(35),E=t.n(p),g=(t(51),function(e){var a=e.item,t=e.order,n=e.onIncrementPosition,o=e.onDecrementPosition,i=e.area,s=Object(r.useMemo)((function(){var e=new Set((a.foods||[]).map((function(e){return e.id}))),r=Object.values(t).filter((function(a){var t=a.item.id;return e.has(t)})).reduce((function(e,a){var t=a.count,r=a.item.price;return e+parseInt(r)*parseInt(t)}),0);return E.a.formatNumber(r,0," ")}),[t,a]);return c.a.createElement("div",{className:"Place"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(l.b,{to:"/",className:"Place__logo"},i.name)),c.a.createElement(l.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:u.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:a.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},a.name),c.a.createElement("p",{className:"Place__restoraunt-type"},a.description)),c.a.createElement("ul",{className:"Place__foods"},a.foods.map((function(e){return c.a.createElement("li",{className:"Place__food",key:e.id},c.a.createElement("div",{className:"Place__food-logo-wrapper"},c.a.createElement("img",{alt:"food logo",className:"Place__food-logo",src:e.image})),c.a.createElement("h3",{className:"Place__food-name"},e.name),c.a.createElement("p",{className:"Place__food-composition"},e.composition),c.a.createElement("div",{className:"Place__food-price"},c.a.createElement("span",{className:".Place__food-price-price"},"\u0426\u0435\u043d\u0430: ",e.price,"\xa0\xa0"),c.a.createElement("button",{className:"Place__food-button",onClick:function(){o({id:e.id,itemId:a.id,areaId:i.id})}},"-"),c.a.createElement("span",null,"\xa0",e.id in t?t[e.id].count:0,"\xa0"),c.a.createElement("button",{className:"Place__food-button",onClick:function(){n({id:e.id,itemId:a.id,areaId:i.id})}},"+")))}))),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement(l.b,{to:"/basket/".concat(i.id,"/").concat(a.id),className:"Place__order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",s,")")))});g.defaultProps={item:{},onIncrementPosition:function(){},onDecrementPosition:function(){}};var h=g,N=(t(173),t(85)),v=t.n(N),b=function(e){var a=e.checked,t=e.onToggle;return c.a.createElement("div",{className:"Checkbox"},c.a.createElement("input",{checked:a,onChange:t,type:"checkbox"}),c.a.createElement("img",{alt:"custom checkbox logo",src:v.a}))};b.defaultProps={onToggle:function(){}};var O=b,P=Object(m.f)((function(e){var a=e.match.params,t=a.areaId,n=a.itemId,o=e.foodAreas,i=e.order,m=Object(r.useState)(!0),d=Object(s.a)(m,2),f=d[0],_=d[1],p=Object(r.useState)(""),g=Object(s.a)(p,2),h=g[0],N=g[1],v=Object(r.useState)(!1),b=Object(s.a)(v,2),P=b[0],k=b[1],I=o.filter((function(e){return e.id===t}))[0],y=I.items.filter((function(e){return e.id===n}))[0],w=Object(r.useMemo)((function(){var e=new Set((y.foods||[]).map((function(e){return e.id}))),a=Object.values(i).filter((function(a){var t=a.item.id;return e.has(t)})),t=a.reduce((function(e,a){var t=a.count,r=a.item;return e+parseInt(r.price)*parseInt(t)}),0);return[E.a.formatNumber(t,0," "),a]}),[i,y]),S=Object(s.a)(w,2),j=S[0],A=S[1];return c.a.createElement("div",{className:"Place"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(l.b,{to:"/",className:"Place__logo"},I.name)),c.a.createElement(l.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:u.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:y.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},y.name),c.a.createElement("p",{className:"Place__restoraunt-type"},y.description)),c.a.createElement("div",{className:"Place__products-wrapper"},c.a.createElement("ul",{className:"Place__products"},A.map((function(e){var a=e.item,t=e.count;return c.a.createElement("li",{className:"Place__product",key:a.id},c.a.createElement("img",{className:"Place__product-logo",alt:"Ordered product logo",src:a.image}),c.a.createElement("h3",{className:"Place__product-name"},a.name),c.a.createElement("p",{className:"Place__product-price"},"\u0426\u0435\u043d\u0430: ",a.price),c.a.createElement("p",{className:"Place__product-count"},"x",t))}))),c.a.createElement(l.b,{className:"Place__change-product",to:"/place/".concat(t,"/").concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),c.a.createElement("div",{className:"Place__choice"},c.a.createElement("h3",null,"\u0412\u0440\u0435\u043c\u044f:"),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("span",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435"),c.a.createElement(O,{checked:f,onToggle:function(){f?_(!1):(N(""),_(!0))}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("span",null,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c"),c.a.createElement("input",{type:"time",value:h,onFocus:function(){_(!1)},onChange:function(e){_(!1),N(e.target.value)},onBlur:function(){h&&_(!1)}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("h3",null,"\u0421 \u0441\u043e\u0431\u043e\u0439"),c.a.createElement(O,{checked:P,onToggle:function(){return k(!P)}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("h3",null,"\u041d\u0430 \u043c\u0435\u0441\u0442\u0435"),c.a.createElement(O,{checked:!P,onToggle:function(){return k(!k)}}))),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement(l.b,{to:"/order/".concat(I.id,"/").concat(y.id),className:"Place__order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",j)))})),k=function(e){var a=e.match.params,t=a.areaId,r=a.itemId,n=e.history,o=e.foodAreas,i=e.setActiveOrder,s=o.filter((function(e){return e.id===t}))[0],m=s.items.filter((function(e){return e.id===r}))[0];return c.a.createElement("div",{className:"Place Place_order"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(l.b,{to:"/",className:"Place__logo"},s.name)),c.a.createElement(l.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:u.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:m.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},m.name),c.a.createElement("p",{className:"Place__restoraunt-type"},m.description)),c.a.createElement("div",{className:"Place__order-body"},c.a.createElement("h3",{className:"Place__order-number-header"},"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430"),c.a.createElement("main",{className:"Place__order-number"},"7"),c.a.createElement("p",{className:"Place__order-number-header"},"\u0417\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437"),c.a.createElement("h3",{className:"Place__order-time"},"~ 15 \u043c\u0438\u043d\u0443\u0442")),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement("div",{to:"/orders",className:"Place__order",onClick:function(){i({itemId:r}),setTimeout((function(){n.push("/orders")}),0)}},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))};k.defaultProps={setActiveOrder:function(){}};var I=Object(m.f)(k),y=t(86),w=t.n(y),S=(t(174),function(e){var a=e.order,t=e.orderStatuses,n=e.foodAreas,o=e.setFinishedOrder,i=e.setActiveOrder,s=Object(r.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"===t[e]})).map((function(e){return e})),r=[],c=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(c.has(t.id)){var n={placeId:e.id,placeName:e.name,shopId:t.id,shopName:t.name,price:t.foods.reduce((function(e,t){if(t.id in a){var r=a[t.id],c=r.item.price,n=r.count;return e+parseInt(c)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};r.push(n)}}))})),r}),[a,t,n]),m=Object(r.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"!==t[e]})).map((function(e){return e})),r=[],c=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(c.has(t.id)){var n={placeName:e.name,shopName:t.name,shopId:t.id,price:t.foods.reduce((function(e,t){if(t.id in a){var r=a[t.id],c=r.item.price,n=r.count;return e+parseInt(c)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};r.push(n)}}))})),r}),[a,t,n]);return c.a.createElement("div",{className:"Orders"},c.a.createElement("ul",{className:"Orders__active-orders"},s.map((function(e){return c.a.createElement("li",{className:"Orders__active-order",key:e.link},c.a.createElement("div",{className:"Orders__left"},c.a.createElement("h3",{className:"Orders__header"},e.placeName),c.a.createElement("p",{className:"Orders__shop-name"},e.shopName),c.a.createElement("p",{className:"Orders__price"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),c.a.createElement("div",{className:"Orders__time"},"~ 15 \u041c"),c.a.createElement(l.b,{className:"Orders__change",to:"/place/".concat(e.placeId,"/").concat(e.shopId)},"\u0418\u0437\u043c"),c.a.createElement("button",{className:"Orders__cancel",onClick:function(){o({itemId:e.shopId})}},"\u041e\u0442\u043c."))}))),c.a.createElement("ul",{className:"Orders__finished-orders"},m.map((function(e){return c.a.createElement("li",{className:"Orders__finished-order",key:e.link},c.a.createElement("div",{className:"Orders__left"},c.a.createElement("h3",{className:"Orders__header Orders__dark"},e.placeName),c.a.createElement("p",{className:"Orders__shop-name Orders__pink"},e.shopName),c.a.createElement("p",{className:"Orders__price Orders__pink"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),c.a.createElement("button",{className:"Orders__repeat",onClick:function(){i({itemId:e.shopId})}},c.a.createElement("img",{className:"Orders__refresh",alt:"repeat order",src:w.a})))}))))});S.defaultProps={setFinishedOrder:function(){},setActiveOrder:function(){}};var j=S,A=(t(175),t(87)),x=t.n(A),T=t(88),C=t.n(T),z=t(89),H=t.n(z),F=t(90),J=t.n(F),D=t(36),V=t.n(D),W=t(54),M=t.n(W),B=t(37),L=t.n(B),K=t(55),Q=t.n(K),R=[{id:"pizikiva-gallery",name:'\u0422\u0420\u0426 "\u0418\u043c.\u041f\u044b\u0436\u0438\u043a\u043e\u0432\u0430"',items:[{id:"kfc",name:"KFC",link:"/place/pizikiva-gallery/kfc",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:x.a,foods:[{id:"classic",image:Q.a,name:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",price:150},{id:"kartofel_fri",image:V.a,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438",price:50}]},{id:"burger-king",name:"Burger King",link:"/place/pizikiva-gallery/burger-king",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:C.a,foods:[{id:"OneTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 1",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:630,image:V.a},{id:"TwoTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 2",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:450,image:M.a},{id:"ThreeTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 3",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:800,image:L.a},{id:"FourthTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 4",composition:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:600,image:Q.a}]},{id:"macdac",name:"McDonal's",link:"/place/pizikiva-gallery/macdac",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:H.a,foods:[{id:"hamburger",image:M.a,name:"\u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",price:50},{id:"bigmac",image:L.a,name:"\u0411\u0438\u0433 \u043c\u0430\u043a",price:200}]},{id:"subway",name:"SubWay",link:"/place/pizikiva-gallery/subway",image:J.a,description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",foods:[{id:"melt-sub",image:L.a,name:"\u0421\u0430\u0431\u0432\u0435\u0439 \u043c\u0435\u043b\u0442",price:300},{id:"day-sub",image:V.a,name:"\u0421\u0430\u0431 \u0434\u043d\u044f",price:200}]}]}],U=R.reduce((function(e,a){return a.items.forEach((function(a){e[a.link]=a})),e}),{}),$=R.reduce((function(e,a){return a.items.forEach((function(a){a.foods.forEach((function(a){e[a.id]=a}))})),e}),{}),q=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("orderStatuses")||"null")||{}),a=Object(s.a)(e,2),t=a[0],n=a[1],o=Object(r.useState)(JSON.parse(localStorage.getItem("orders")||"null")||{}),d=Object(s.a)(o,2),u=d[0],f=d[1];return c.a.createElement(l.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0},c.a.createElement(_,{foodAreas:R,order:u})),c.a.createElement(m.a,{path:"/order/:areaId/:itemId",exact:!0},c.a.createElement(I,{foodAreas:R,order:u,setActiveOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="ACTIVE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))}})),c.a.createElement(m.a,{path:"/basket/:areaId/:itemId",exact:!0},c.a.createElement(P,{foodAreas:R,order:u})),c.a.createElement(m.a,{path:"/orders",exact:!0},c.a.createElement(j,{order:u,orderStatuses:t,foodAreas:R,setFinishedOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="CANCELED",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))},setActiveOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="ACTIVE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))}})),c.a.createElement(m.a,{path:"/place/:area/:place",render:function(e){return c.a.createElement(h,Object.assign({},e,{item:U[e.location.pathname],area:R[0],order:u,onIncrementPosition:function(e){var a=e.id,r=e.itemId,c=(e.areaId,Object(i.a)({},u));a in c?c[a].count++:c[a]={item:$[a],count:1};var o=Object(i.a)({},t);0===Object.keys(o).length&&R.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in u){var t=e.id===r?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var s=JSON.stringify(c);localStorage.setItem("orders",s),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(c),n(o)},onDecrementPosition:function(e){var a=e.id,r=e.itemId,c=(e.areaId,Object(i.a)({},u));a in c&&(1===c[a].count?delete c[a]:c[a].count--);var o=Object(i.a)({},t);0===Object.keys(o).length&&R.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in u){var t=e.id===r?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var s=JSON.stringify(c);localStorage.setItem("orders",s),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(c),n(o)}}))}})))};function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){if("serviceWorker"in navigator){if(new URL("/vezdekod-hf-web",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/vezdekod-hf-web","/service-worker.js");X?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):G(e)}))}}(),o.a.render(c.a.createElement(q,null),document.getElementById("root"))},22:function(e,a,t){e.exports=t.p+"static/media/edit.751f84c2.svg"},36:function(e,a,t){e.exports=t.p+"static/media/1.dfc54362.png"},37:function(e,a,t){e.exports=t.p+"static/media/3.dbf82c38.png"},51:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/2.20489759.png"},55:function(e,a,t){e.exports=t.p+"static/media/4.e671d539.png"},85:function(e,a,t){e.exports=t.p+"static/media/check-symbol.06277842.svg"},86:function(e,a,t){e.exports=t.p+"static/media/refresh-button.1198ed41.svg"},87:function(e,a,t){e.exports=t.p+"static/media/kfc.4fd2ba47.png"},88:function(e,a,t){e.exports=t.p+"static/media/burger.35bcd067.png"},89:function(e,a,t){e.exports=t.p+"static/media/mcdac.60464810.png"},90:function(e,a,t){e.exports=t.p+"static/media/sub.4eb05fdd.png"},91:function(e,a,t){e.exports=t(176)}},[[91,1,2]]]);
//# sourceMappingURL=main.0e53168b.chunk.js.map