(this["webpackJsonpreact-spacex"]=this["webpackJsonpreact-spacex"]||[]).push([[0],{32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},56:function(e,c,t){},64:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),s=t(25),l=t.n(s),r=(t(32),t(66)),i=t(7),o=(t(33),t(34),t(35),t.p+"static/media/spaceship_placeholder.434d7782.png"),u=t(1),j=function(e){var c=e.imageUrl,t=e.missionId,a=e.launchYear,n=e.launch,s=e.landing,l=e.flightNumber,r=e.missionName;return Object(u.jsxs)("article",{className:"space-card",children:[Object(u.jsx)("div",{className:"img-box",children:Object(u.jsx)("img",{src:c||o,alt:"".concat(r," Spaceship"),loading:"lazy"})}),Object(u.jsxs)("div",{className:"space-card-container",children:[Object(u.jsxs)("div",{className:"space-card-details",children:[Object(u.jsx)("span",{className:"missionName",children:r}),Object(u.jsxs)("span",{className:"flightNumber",children:[" #",l]})]}),Object(u.jsxs)("div",{className:"space-card-details",children:[Object(u.jsx)("span",{children:"Mission Ids:"}),Object(u.jsx)("p",{children:t})]}),Object(u.jsxs)("div",{className:"space-card-details",children:[Object(u.jsx)("span",{children:"Launch Year:"}),Object(u.jsx)("p",{children:a})]}),Object(u.jsxs)("div",{className:"space-card-details",children:[Object(u.jsx)("span",{children:"Successful Launch:"}),Object(u.jsx)("p",{children:"".concat(n)})]}),Object(u.jsxs)("div",{className:"space-card-details",children:[Object(u.jsx)("span",{children:"Successful Landing:"}),Object(u.jsx)("p",{children:null===s||!1===s?"false":"true"})]})]})]})},b=t(12),d=t.n(b),h=t(26),m=t(4),O=t(11),f=t.n(O);f.a.defaults.baseURL="https://api.spacexdata.com/v3/";var p=t(8),x=t.n(p),g=Object(a.createContext)(),v=function(e){var c=e.children,t=Object(a.useState)([]),n=Object(m.a)(t,2),s=n[0],l=n[1],r=Object(a.useState)(!0),i=Object(m.a)(r,2),o=i[0],j=i[1],b=Object(a.useState)(x.a.innerWidth),O=Object(m.a)(b,2),p=O[0],v=O[1],S=Object(a.useState)(""),_=Object(m.a)(S,2),N=_[0],y=_[1],I=Object(a.useCallback)(Object(h.a)(d.a.mark((function e(){var c,t,a,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:"launches?limit=100",e.prev=1,j(!0),e.next=5,f.a.get(c);case 5:t=e.sent,(a=t.data)&&(j(!1),l(a)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),j(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),[]);Object(a.useEffect)((function(){if(N){I(N);try{x.a.history.replaceState(null,"SpaceX Launch Program",N)}catch(e){console.log("window not present")}}}),[N,I]);var L=Object(a.useMemo)((function(){return{getAllSpaceShips:I,setScreenWidth:v,setUrl:y,allSpaceShips:s,loading:o,screenWidth:p}}),[s,o,p]);return Object(u.jsx)(g.Provider,{value:L,children:c})},S=function(){return Object(a.useContext)(g)},_=(t(56),function(){return Object(u.jsx)("div",{className:"loader",children:"Loading..."})}),N=function(e){var c=e.label,t=S().setUrl,n=Object(a.useState)(!1),s=Object(m.a)(n,2),l=s[0],r=s[1],i=Object(a.useCallback)((function(){l?localStorage.removeItem("land_success"):localStorage.setItem("land_success",JSON.stringify(c));var e=localStorage.getItem("yearFilter"),a=localStorage.getItem("launch_success"),n=localStorage.getItem("land_success"),s=n?"launches?land_success=".concat(n):"launches?limit=100";t(e&&a?"".concat(s,"&launch_success=").concat(a,"&launch_year=").concat(e):e?"".concat(s,"&launch_year=").concat(e):a?"".concat(s,"&launch_year=").concat(a):s)}),[c,t,l]);return Object(u.jsx)("button",{className:"filter-button ".concat(l&&"active-filter"),onClick:function(){r((function(e){return!e})),i()},children:!0===c?"true":"false"})},y=function(e){var c=e.label,t=S().setUrl,n=Object(a.useState)(!1),s=Object(m.a)(n,2),l=s[0],r=s[1],i=Object(a.useCallback)((function(){l?localStorage.removeItem("launch_success"):localStorage.setItem("launch_success",JSON.stringify(c));var e=localStorage.getItem("yearFilter"),a=localStorage.getItem("launch_success"),n=localStorage.getItem("land_success"),s=a?"launches?launch_success=".concat(a):"launches?limit=100";t(e&&n?"".concat(s,"&land_success=").concat(n,"&launch_year=").concat(e):e?"".concat(s,"&launch_year=").concat(e):n?"".concat(s,"&launch_success=").concat(a,"&launch_year=").concat(e):s)}),[c,t,l]);return Object(u.jsx)("button",{className:"filter-button ".concat(l&&"active-filter"),onClick:function(){r((function(e){return!e})),i()},children:!0===c?"true":"false"})},I=function(e){var c=e.label,t=S().setUrl,n=Object(a.useState)(!1),s=Object(m.a)(n,2),l=s[0],r=s[1],i=Object(a.useCallback)((function(){l?localStorage.removeItem("yearFilter"):localStorage.setItem("yearFilter",JSON.stringify(c));var e=localStorage.getItem("yearFilter"),a=localStorage.getItem("launch_success"),n=localStorage.getItem("land_success"),s=e?"launches?launch_year=".concat(e):"launches?limit=100";t(a&&n?"".concat(s,"&launch_success=").concat(a,"&land_success=").concat(n):a?"".concat(s,"&launch_year=").concat(a):n?"".concat(s,"&launch_success=").concat(a,"&launch_year=").concat(e):s)}),[c,t,l]);return Object(u.jsx)("button",{className:"filter-button ".concat(l&&"active-filter"),onClick:function(){r((function(e){return!e})),i()},children:c})},L=Object(a.memo)(I),k=function(){var e=S().screenWidth,c=Object(a.useMemo)((function(){return[{label:2006},{label:2007},{label:2008},{label:2009},{label:2010},{label:2011},{label:2012},{label:2013},{label:2014},{label:2015},{label:2016},{label:2017},{label:2018},{label:2019},{label:2020}].map((function(e,c){var t=e.label;return Object(u.jsx)(L,{label:t},"".concat(c," ").concat(t))}))}),[]),t=Object(a.useMemo)((function(){return[!0,!1].map((function(e,c){return Object(u.jsx)(y,{label:e},"".concat(c," ").concat(e))}))}),[]),n=Object(a.useMemo)((function(){return[!0,!1].map((function(e,c){return Object(u.jsx)(N,{label:e},"".concat(c," ").concat(e))}))}),[]);return Object(u.jsxs)("section",{className:"filters",style:{position:e<=700?"relative":"fixed",marginLeft:e<=700?"0":"1.5rem"},children:[Object(u.jsx)("h4",{children:"Filters"}),Object(u.jsx)("p",{children:"Launch Year "}),Object(u.jsx)("div",{className:"filter-container",children:c}),Object(u.jsx)("p",{children:"Successful Launch "}),Object(u.jsx)("div",{className:"filter-container",children:t}),Object(u.jsx)("p",{children:"Successful Landing "}),Object(u.jsx)("div",{className:"filter-container",children:n})]})},C=function(){var e=S(),c=e.getAllSpaceShips,t=e.allSpaceShips,n=e.loading,s=e.screenWidth,l=e.setScreenWidth;Object(a.useEffect)((function(){if(x.a)return x.a.addEventListener("resize",(function(){return l(x.a.innerWidth)})),c(),function(){return x.a.removeEventListener("resize",(function(){}))}}),[c,l]);var r=Object(a.useMemo)((function(){return t.map((function(e,c){var t,a,n,s;return Object(u.jsx)(j,{imageUrl:null===(t=e.links)||void 0===t?void 0:t.mission_patch,launchYear:e.launch_year,missionId:e.mission_id,launch:e.launch_success,flightNumber:e.flight_number,missionName:e.mission_name,landing:null===(a=e.rocket)||void 0===a||null===(n=a.first_stage)||void 0===n||null===(s=n.cores[0])||void 0===s?void 0:s.land_success},"".concat(c,"_").concat(e.mission_name))}))}),[t]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"heading",children:"SpaceX Launch Programs"}),Object(u.jsxs)("main",{children:[Object(u.jsx)(k,{}),Object(u.jsx)("section",{className:function(){var e="space";return s>=700&&s<=1024&&(e="space display-tab"),s>=1024&&(e="space display-laptop"),e}(),style:{marginLeft:s<=700?"0":"23.5rem"},children:n?Object(u.jsx)(_,{}):0===r.length?Object(u.jsx)("h1",{className:"",children:"No Results found For Your Filter!"}):r})]})]})},F=function(){return Object(u.jsx)(v,{children:Object(u.jsx)(r.b,{history:Object(i.b)(),children:Object(u.jsx)(r.c,{children:Object(u.jsx)(r.a,{path:"/",children:Object(u.jsx)(C,{})})})})})};l.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.687be186.chunk.js.map