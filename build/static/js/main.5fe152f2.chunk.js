(this["webpackJsonpreact-spacex"]=this["webpackJsonpreact-spacex"]||[]).push([[0],{34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},58:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),s=t(26),l=t.n(s),r=(t(34),t(68)),i=t(7),o=(t(35),t(27)),u=(t(36),t(37),t.p+"static/media/spaceship_placeholder.434d7782.png"),j=t(1),b=function(e){var c=e.imageUrl,t=e.missionId,a=e.launchYear,n=e.launch,s=e.landing,l=e.flightNumber,r=e.missionName,i=t.map((function(e,c){return Object(j.jsx)("p",{children:e},"".concat(c," ").concat(e))}));return Object(j.jsxs)("article",{className:"space-card",children:[Object(j.jsx)("div",{className:"img-box",children:Object(j.jsx)("img",{src:c||u,alt:"".concat(r," Spaceship"),loading:"lazy",width:"auto",height:"auto"})}),Object(j.jsxs)("div",{className:"space-card-container",children:[Object(j.jsxs)("div",{className:"space-card-details",children:[Object(j.jsx)("span",{className:"missionName",children:r}),Object(j.jsxs)("span",{className:"flightNumber",children:[" #",l]})]}),Object(j.jsxs)("div",{className:"space-card-details",children:[Object(j.jsx)("span",{children:"Mission Ids:"}),Object(j.jsx)("p",{children:t.length?i:"No Id"})]}),Object(j.jsxs)("div",{className:"space-card-details",children:[Object(j.jsx)("span",{children:"Launch Year:"}),Object(j.jsx)("p",{children:a})]}),Object(j.jsxs)("div",{className:"space-card-details",children:[Object(j.jsx)("span",{children:"Successful Launch:"}),Object(j.jsx)("p",{children:"".concat(n)})]}),Object(j.jsxs)("div",{className:"space-card-details",children:[Object(j.jsx)("span",{children:"Successful Landing:"}),Object(j.jsx)("p",{children:null===s?"No Record":!1===s?"false":"true"})]})]})]})},d=Object(a.memo)(b),h=t(13),m=t.n(h),O=t(28),f=t(4),p=t(12),v=t.n(p);v.a.defaults.baseURL="https://api.spacexdata.com/v3/";var g=t(8),x=t.n(g),S=Object(a.createContext)(),_=function(e){var c=e.children,t=Object(a.useState)([]),n=Object(f.a)(t,2),s=n[0],l=n[1],r=Object(a.useState)(!0),i=Object(f.a)(r,2),o=i[0],u=i[1],b=Object(a.useState)(x.a.innerWidth),d=Object(f.a)(b,2),h=d[0],p=d[1],g=Object(a.useState)(""),_=Object(f.a)(g,2),N=_[0],y=_[1],I=Object(a.useCallback)(Object(O.a)(m.a.mark((function e(){var c,t,a,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:"launches?limit=100",e.prev=1,u(!0),e.next=5,v.a.get(c);case 5:t=e.sent,(a=t.data)&&(u(!1),l(a)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),u(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),[]);Object(a.useEffect)((function(){N&&(I(N),x.a.history.replaceState(null,"SpaceX Launch Program",N))}),[N,I]);var L=Object(a.useMemo)((function(){return{getAllSpaceShips:I,setScreenWidth:p,setUrl:y,allSpaceShips:s,loading:o,screenWidth:h}}),[s,o,h]);return Object(j.jsx)(S.Provider,{value:L,children:c})},N=function(){return Object(a.useContext)(S)},y=(t(58),function(){return Object(j.jsx)("div",{className:"loader",children:"Loading..."})}),I=function(e){var c=e.label,t=e.active,n=e.setActiveFilter,s=N().setUrl,l=Object(a.useState)(!1),r=Object(f.a)(l,2),i=r[0],o=r[1],u=Object(a.useCallback)((function(){i?localStorage.removeItem("land_success"):localStorage.setItem("land_success",JSON.stringify(c));var e=localStorage.getItem("yearFilter"),t=localStorage.getItem("launch_success"),a=localStorage.getItem("land_success"),n=a?"launches?land_success=".concat(a):"launches?limit=100";s(e&&t?"".concat(n,"&launch_success=").concat(t,"&launch_year=").concat(e):e?"".concat(n,"&launch_year=").concat(e):t?"".concat(n,"&launch_year=").concat(t):n)}),[c,s,i]);return Object(j.jsx)("button",{className:"filter-button ".concat(i&&t),onClick:function(){n(),o((function(e){return!e})),u()},children:!0===c?"true":"false"})},L=function(e){var c=e.label,t=e.active,n=e.setActiveFilter,s=N().setUrl,l=Object(a.useState)(!1),r=Object(f.a)(l,2),i=r[0],o=r[1],u=Object(a.useCallback)((function(){i?localStorage.removeItem("launch_success"):localStorage.setItem("launch_success",JSON.stringify(c));var e=localStorage.getItem("yearFilter"),t=localStorage.getItem("launch_success"),a=localStorage.getItem("land_success"),n=t?"launches?launch_success=".concat(t):"launches?limit=100";s(e&&a?"".concat(n,"&land_success=").concat(a,"&launch_year=").concat(e):e?"".concat(n,"&launch_year=").concat(e):a?"".concat(n,"&launch_success=").concat(t,"&launch_year=").concat(e):n)}),[c,s,i]);return Object(j.jsx)("button",{className:"filter-button ".concat(i&&t),onClick:function(){n(),o((function(e){return!e})),u()},children:!0===c?"true":"false"})},k=function(e){var c=e.label,t=e.active,n=e.setActiveFilter,s=N().setUrl,l=Object(a.useCallback)((function(){localStorage.setItem("yearFilter",JSON.stringify(c));var e=localStorage.getItem("yearFilter"),t=localStorage.getItem("launch_success"),a=localStorage.getItem("land_success"),n=e?"launches?launch_year=".concat(e):"launches?limit=100";s(t&&a?"".concat(n,"&launch_success=").concat(t,"&land_success=").concat(a):t?"".concat(n,"&launch_success=").concat(t):a?"".concat(n,"&launch_success=").concat(t,"&launch_year=").concat(e):n)}),[c,s]);return Object(j.jsx)("button",{className:"filter-button ".concat(t),onClick:function(){n(),l()},children:c})},F=Object(a.memo)(k),A=function(){var e=Object(a.useState)(0),c=Object(f.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(null),l=Object(f.a)(s,2),r=l[0],i=l[1],o=Object(a.useState)(null),u=Object(f.a)(o,2),b=u[0],d=u[1],h=N().screenWidth,m=Object(a.useMemo)((function(){return[{label:2006},{label:2007},{label:2008},{label:2009},{label:2010},{label:2011},{label:2012},{label:2013},{label:2014},{label:2015},{label:2016},{label:2017},{label:2018},{label:2019},{label:2020}].map((function(e,c){var a=e.label,s="";return t===a&&(s="active-filter"),Object(j.jsx)(F,{setActiveFilter:function(){return n(a)},label:a,active:s},"".concat(c," ").concat(a))}))}),[t]),O=Object(a.useMemo)((function(){return[!0,!1].map((function(e,c){var t="";return r===e&&(t="active-filter"),Object(j.jsx)(L,{label:e,active:t,setActiveFilter:function(){return i(e)}},"".concat(c," ").concat(e))}))}),[r]),p=Object(a.useMemo)((function(){return[!0,!1].map((function(e,c){var t="";return b===e&&(t="active-filter"),Object(j.jsx)(I,{label:e,active:t,setActiveFilter:function(){return d(e)}},"".concat(c," ").concat(e))}))}),[b]);return Object(j.jsxs)("section",{className:"filters",style:{position:h<=700?"relative":"fixed",marginLeft:h<=700?"0":"1.5rem"},children:[Object(j.jsx)("h4",{children:"Filters"}),Object(j.jsx)("p",{children:"Launch Year "}),Object(j.jsx)("div",{className:"filter-container",children:m}),Object(j.jsx)("p",{children:"Successful Launch "}),Object(j.jsx)("div",{className:"filter-container",children:O}),Object(j.jsx)("p",{children:"Successful Landing "}),Object(j.jsx)("div",{className:"filter-container",children:p})]})},C=function(){var e=N(),c=e.getAllSpaceShips,t=e.allSpaceShips,n=e.loading,s=e.screenWidth,l=e.setScreenWidth;Object(a.useEffect)((function(){var e=Object.keys(localStorage);if(e.length){var c,t=Object(o.a)(e);try{for(t.s();!(c=t.n()).done;){var a=c.value;localStorage.removeItem(a)}}catch(n){t.e(n)}finally{t.f()}x.a.history.replaceState(null,"SpaceX Launch Program","/")}}),[]),Object(a.useEffect)((function(){if(x.a)return x.a.addEventListener("resize",(function(){return l(x.a.innerWidth)})),c(),function(){return x.a.removeEventListener("resize",(function(){}))}}),[c,l]);var r=Object(a.useMemo)((function(){return t.map((function(e,c){var t,a,n,s;return Object(j.jsx)(d,{imageUrl:null===(t=e.links)||void 0===t?void 0:t.mission_patch,launchYear:e.launch_year,missionId:e.mission_id,launch:e.launch_success,flightNumber:e.flight_number,missionName:e.mission_name,landing:null===(a=e.rocket)||void 0===a||null===(n=a.first_stage)||void 0===n||null===(s=n.cores[0])||void 0===s?void 0:s.land_success},"".concat(c,"_").concat(e.mission_name))}))}),[t]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"heading",children:"SpaceX Launch Programs"}),Object(j.jsxs)("main",{children:[Object(j.jsx)(A,{}),Object(j.jsx)("section",{className:function(){var e="space";return s>=700&&s<=1024&&(e="space display-tab"),s>=1024&&(e="space display-laptop"),e}(),style:{marginLeft:s<=700?"0":"23.5rem"},children:n?Object(j.jsx)(y,{}):0===r.length?Object(j.jsx)("h1",{style:{marginTop:"1rem"},children:"No Results found For Your Filter!"}):r})]})]})},M=function(){return Object(j.jsx)(_,{children:Object(j.jsx)(r.b,{history:Object(i.b)(),children:Object(j.jsx)(r.c,{children:Object(j.jsx)(r.a,{path:"/",children:Object(j.jsx)(C,{})})})})})};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5fe152f2.chunk.js.map