(function(t){function e(e){for(var o,a,r=e[0],u=e[1],s=e[2],d=0,l=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);b&&b(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},i={app:0},c=[];function r(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a4b80166"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"27688936"}[t]+".css",i=u.p+o,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var s=c[r],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===i))return e()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){s=l[r],d=s.getAttribute("data-href");if(d===o||d===i)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var o=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[t],b.parentNode.removeChild(b),n(c)},b.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=r(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(b);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}i[t]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/F2E-Week3-Bus-Site/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var b=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"198a":function(t,e,n){},"1a5f":function(t,e,n){t.exports=n.p+"img/icon_HRW.19e7bf62.svg"},"1ae4":function(t,e,n){t.exports=n.p+"img/logo.cb986286.svg"},"1f18":function(t,e,n){t.exports=n.p+"img/icon_train.d67ea916.svg"},"28f3":function(t,e,n){"use strict";n("8e69")},"2a48":function(t,e,n){"use strict";n("fdbcf")},"30ca":function(t,e,n){},"31ac":function(t,e,n){},3559:function(t,e,n){},"3b6a":function(t,e,n){},"427f":function(t,e,n){},4352:function(t,e,n){"use strict";n("f6d2")},"47d9":function(t,e,n){"use strict";n("31ac")},"4fb9":function(t,e,n){"use strict";var o=n("5530"),a=(n("99af"),n("bc3a")),i=n.n(a),c=n("6c2d"),r=i.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bus/",withCredentials:!1});function u(){var t="00889de6156c405baaaa9c20918d88a3",e="i8WOUOLfmnnAoctsSdU4yp2dEpI",n=(new Date).toGMTString(),o=new c["a"]("SHA-1","TEXT");o.setHMACKey(e,"TEXT"),o.update("x-date: "+n);var a=o.getHMAC("B64"),i='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+a+'"';return{Authorization:i,"X-Date":n}}r.interceptors.request.use((function(t){return t.headers=Object(o["a"])({Accept:"application/json","Content-Type":"application/json"},u()),t})),e["a"]={getCityBusStation:function(t){return console.log("發station"),r.get("/Station/City/".concat(t,"/?&$format=JSON"))},getCityBusRoute:function(t){return console.log("發route"),r.get("/Route/City/".concat(t,"/?&$format=JSON"))},getOneCityBusRoute:function(t,e,n){return r.get("/Route/City/".concat(t,"/").concat(e),{params:{$filter:"RouteUID eq '".concat(n,"'"),$format:"JSON"}})},getRouteDestination:function(t,e,n){return r.get("/Route/City/".concat(t,"/").concat(e),{params:{$select:"DestinationStopNameZh, DepartureStopNameZh",$filter:"RouteUID eq '".concat(n,"'"),$format:"JSON"}})},getStopOfRoute:function(t,e,n){return console.log("發公車路線"),r.get("/StopOfRoute/City/".concat(t,"/").concat(e),{params:{$filter:"RouteUID eq '".concat(n,"'"),$format:"JSON"}})},getETARoute:function(t,e,n){return console.log("發到站時間",t,e,n),r.get("/EstimatedTimeOfArrival/City/".concat(t,"/").concat(e),{params:{$filter:"RouteUID eq '".concat(n,"'"),$format:"JSON"}})},getNearbyStation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:23.4751824,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120.4614314,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;return r.get("/Station/NearBy",{params:{$spatialFilter:"nearby(".concat(t,", ").concat(e,", ").concat(n,")"),$format:"JSON"}})}}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(t,e,n,a,i,c){var r=Object(o["B"])("Nav"),u=Object(o["B"])("router-view");return Object(o["u"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(r),Object(o["k"])(u)],64)}n("ab8b"),n("7b17");var i=n("1ae4"),c=n.n(i),r=n("a9bd"),u=n.n(r),s=function(t){return Object(o["x"])("data-v-7c589587"),t=t(),Object(o["v"])(),t},d=s((function(){return Object(o["h"])("img",{src:c.a,alt:"logo"},null,-1)})),l={class:"links_group"},b=Object(o["j"])("找公車"),f=Object(o["j"])("附近站牌"),y=Object(o["j"])("轉乘規劃");function h(t,e,n,a,i,c){var r=Object(o["B"])("router-link");return Object(o["u"])(),Object(o["g"])("nav",null,[Object(o["k"])(r,{class:"logo_icon",to:"/"},{default:Object(o["I"])((function(){return[d]})),_:1}),Object(o["h"])("img",{onClick:e[0]||(e[0]=function(){return c.toggleMenu&&c.toggleMenu.apply(c,arguments)}),class:"toggle_button",src:u.a,alt:"menu icon"}),Object(o["h"])("div",l,[Object(o["k"])(r,{to:"/"},{default:Object(o["I"])((function(){return[b]})),_:1}),Object(o["k"])(r,{to:"/nearby"},{default:Object(o["I"])((function(){return[f]})),_:1}),Object(o["k"])(r,{to:"/navigation"},{default:Object(o["I"])((function(){return[y]})),_:1})])])}var p={methods:{toggleMenu:function(t){t.target.nextElementSibling.classList.toggle("response")}}},g=(n("28f3"),n("6b0d")),m=n.n(g);const O=m()(p,[["render",h],["__scopeId","data-v-7c589587"]]);var j=O,C={components:{Nav:j}};n("47d9");const v=m()(C,[["render",a]]);var S=v,k=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),D=function(t){return Object(o["x"])("data-v-bfcb663c"),t=t(),Object(o["v"])(),t},_=D((function(){return Object(o["h"])("h2",null,"找公車",-1)})),L={key:1,class:"cards_group"};function I(t,e,n,a,i,c){var r=Object(o["B"])("Search_Bar"),u=Object(o["B"])("Loading");return Object(o["u"])(),Object(o["g"])("main",{class:"home",onScroll:e[0]||(e[0]=function(){return t.loadApi&&t.loadApi.apply(t,arguments)})},[_,Object(o["k"])(r,{onEmitSearchMode:c.emitsearchMode,onEmitChosedCity:c.emitchosedCity,onEmitUserKeyin:c.emitUserKeyin},null,8,["onEmitSearchMode","onEmitChosedCity","onEmitUserKeyin"]),i.isLoading?(Object(o["u"])(),Object(o["e"])(u,{key:0})):Object(o["f"])("",!0),i.displayedCards?(Object(o["u"])(),Object(o["g"])("section",L,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(i.displayedCards,(function(t){return Object(o["u"])(),Object(o["e"])(Object(o["C"])("card_".concat(i.searchMode)),{key:t,cardData:t,searchMode:i.searchMode,chosedCityLink:i.chosedCityLink,onClick:function(e){return c.storeSession(t)}},null,8,["cardData","searchMode","chosedCityLink","onClick"])})),128))])):Object(o["f"])("",!0)],32)}var N=n("1da1"),M=(n("96cf"),n("e9c4"),n("fb6a"),n("4de4"),n("caad"),n("2532"),function(t){return Object(o["x"])("data-v-65dc9fce"),t=t(),Object(o["v"])(),t}),w={class:"searchBar"},E={class:"radio_group"},R={for:"route_radio"},T=M((function(){return Object(o["h"])("span",null,null,-1)})),x=Object(o["j"])(" 查路線 "),A={for:"stop_radio"},K=M((function(){return Object(o["h"])("span",null,null,-1)})),U=Object(o["j"])(" 查站牌 "),B={class:"btn-group search_window"},P=M((function(){return Object(o["h"])("button",{class:"btn btn-secondary",type:"button"},"縣市",-1)})),$=M((function(){return Object(o["h"])("span",{class:"visually-hidden"},"Toggle Dropdown",-1)})),H={class:"dropdown-menu","aria-labelledby":"dropdownMenu2"},J=["onClick"],Z={class:"search_window"},q=M((function(){return Object(o["h"])("div",{class:"search_title"},"搜尋",-1)}));function F(t,e,n,a,i,c){return Object(o["u"])(),Object(o["g"])("div",w,[Object(o["h"])("div",E,[Object(o["h"])("label",R,[Object(o["h"])("input",{onInput:e[0]||(e[0]=function(t){return c.emitSearchMode("Route")}),id:"route_radio",type:"radio",name:"bus",value:"Route",checked:""},null,32),T,x]),Object(o["h"])("label",A,[Object(o["h"])("input",{onInput:e[1]||(e[1]=function(t){return c.emitSearchMode("Station")}),id:"stop_radio",type:"radio",name:"bus",value:"Station"},null,32),K,U])]),Object(o["h"])("div",B,[P,Object(o["h"])("button",{onClick:e[2]||(e[2]=function(){return t.selectCity&&t.selectCity.apply(t,arguments)}),type:"button",class:"btn btn-secondary dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(o["j"])(Object(o["E"])(i.chosedCity)+" ",1),$]),Object(o["h"])("ul",H,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(c.cities,(function(t){return Object(o["u"])(),Object(o["g"])("li",{key:t,onClick:function(e){return c.emitChosedCity(t.city)},class:"dropdown-item",type:"button"},Object(o["E"])(t.city),9,J)})),128))])]),Object(o["h"])("div",Z,[q,Object(o["J"])(Object(o["h"])("input",{type:"text",class:"search_keyin",placeholder:"公車路線 ex.藍15",onKeyup:e[3]||(e[3]=function(){return c.emitUserKeyin&&c.emitUserKeyin.apply(c,arguments)}),"onUpdate:modelValue":e[4]||(e[4]=function(t){return i.userKeyIn=t})},null,544),[[o["G"],i.userKeyIn]])])])}var W=n("2909"),Y=(n("99af"),n("7b09")),X={name:"SearchBar",props:{},data:function(){return{chosedCity:"請選擇",isDrop:!1,userKeyIn:"",searchMode:"Route"}},computed:{cities:function(){return console.log(this.searchMode),"Route"===this.searchMode?Y:Y.filter((function(t){return t.StationData}))}},methods:{showDropdown:function(){this.isDrop=!this.isDrop,console.log(this.isDrop)},emitSearchMode:function(t){this.$emit("emitSearchMode",t),this.chosedCity="請選擇",this.userKeyIn="",this.searchMode=t},emitUserKeyin:function(){var t=this;setTimeout((function(){t.$emit("emitUserKeyin",t.userKeyIn)}),1e3)},emitChosedCity:function(t){var e=this;this.chosedCity=t,this.userKeyIn="";var n=Y.filter((function(t){return t.city===e.chosedCity}));this.$emit.apply(this,["emitChosedCity"].concat(Object(W["a"])(n)))}}};n("2a48");const G=m()(X,[["render",F],["__scopeId","data-v-65dc9fce"]]);var Q=G,z=n("d103"),V=n.n(z),tt=n("1f18"),et=n.n(tt),nt=n("6111"),ot=n.n(nt),at=n("1a5f"),it=n.n(at),ct=function(t){return Object(o["x"])("data-v-75d667b1"),t=t(),Object(o["v"])(),t},rt={class:"card_head"},ut={key:0},st={key:1},dt={key:2,class:"tag"},lt={key:3,class:"tag"},bt={key:0,class:"card_body"},ft=ct((function(){return Object(o["h"])("span",null,"-",-1)})),yt={key:1,class:"card_body"},ht=ct((function(){return Object(o["h"])("img",{src:V.a,alt:"腳踏車icon"},null,-1)})),pt=ct((function(){return Object(o["h"])("img",{src:et.a,alt:"火車icon"},null,-1)})),gt=ct((function(){return Object(o["h"])("img",{src:ot.a,alt:"捷運icon"},null,-1)})),mt=ct((function(){return Object(o["h"])("img",{src:it.a,alt:"高鐵icon"},null,-1)})),Ot=[ht,pt,gt,mt];function jt(t,e,n,a,i,c){var r=Object(o["B"])("router-link");return Object(o["u"])(),Object(o["e"])(r,{to:{name:"Detail",params:{mode:n.searchMode,UID:i.UID,city:n.chosedCityLink,displayName:c.routeName}}},{default:Object(o["I"])((function(){return[Object(o["h"])("div",{class:"card_purple_route",onClick:e[0]||(e[0]=function(){return c.sendClickedCard&&c.sendClickedCard.apply(c,arguments)})},[Object(o["h"])("div",rt,["Route"===n.searchMode?(Object(o["u"])(),Object(o["g"])("p",ut,Object(o["E"])(n.cardData.RouteName.Zh_tw),1)):(Object(o["u"])(),Object(o["g"])("p",st,Object(o["E"])(n.cardData.StationName.Zh_tw),1)),n.cardData.CityCode?(Object(o["u"])(),Object(o["g"])("div",dt,Object(o["E"])(c.cityTag),1)):(Object(o["u"])(),Object(o["g"])("div",lt,Object(o["E"])(n.cardData.LocationCityCode),1))]),"Route"===n.searchMode?(Object(o["u"])(),Object(o["g"])("div",bt,[Object(o["h"])("p",null,Object(o["E"])(n.cardData.DepartureStopNameZh),1),ft,Object(o["h"])("p",null,Object(o["E"])(n.cardData.DestinationStopNameZh),1)])):(Object(o["u"])(),Object(o["g"])("div",yt,Ot))])]})),_:1},8,["to"])}var Ct={props:["cardData","searchMode","chosedCityLink"],data:function(){return{UID:this.cardData.RouteUID}},methods:{sendClickedCard:function(){this.$emit("clickedCard",this.route)}},computed:{routeName:function(){return this.cardData.RouteName.Zh_tw},cityTag:function(){var t=this,e=Y.filter((function(e){return e.cityCode===t.cardData.CityCode}));return e[0].city}}};n("b9c9");const vt=m()(Ct,[["render",jt],["__scopeId","data-v-75d667b1"]]);var St=vt,kt=function(t){return Object(o["x"])("data-v-7da79004"),t=t(),Object(o["v"])(),t},Dt={class:"card_head"},_t={class:"tag"},Lt={key:0,class:"card_body"},It=kt((function(){return Object(o["h"])("img",{src:V.a,alt:"腳踏車icon"},null,-1)})),Nt=kt((function(){return Object(o["h"])("img",{src:et.a,alt:"火車icon"},null,-1)})),Mt=kt((function(){return Object(o["h"])("img",{src:ot.a,alt:"捷運icon"},null,-1)})),wt=kt((function(){return Object(o["h"])("img",{src:it.a,alt:"高鐵icon"},null,-1)})),Et=[It,Nt,Mt,wt],Rt={key:1,class:"card_body"};function Tt(t,e,n,a,i,c){var r=Object(o["B"])("router-link");return Object(o["u"])(),Object(o["e"])(r,{to:{name:"Detail",params:{mode:n.searchMode,UID:n.cardData.StationUID,city:c.city,displayName:n.cardData.StationName.Zh_tw}}},{default:Object(o["I"])((function(){return[Object(o["h"])("div",{class:"card_purple_route",onClick:e[0]||(e[0]=function(){return c.sendClickedCard&&c.sendClickedCard.apply(c,arguments)})},[Object(o["h"])("div",Dt,[Object(o["h"])("p",null,Object(o["E"])(n.cardData.StationName.Zh_tw),1),Object(o["h"])("div",_t,Object(o["E"])(c.cityTag),1)]),"Home"===t.$route.name?(Object(o["u"])(),Object(o["g"])("div",Lt,Et)):(Object(o["u"])(),Object(o["g"])("div",Rt,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(c.stationStops,(function(t){return Object(o["u"])(),Object(o["g"])("div",{key:t.StopID},Object(o["E"])(t.RouteName.Zh_tw)+"、 ",1)})),128))]))])]})),_:1},8,["to"])}var xt={Name:"Card_Station",props:["cardData","searchMode","chosedCityLink"],data:function(){return{UID:this.cardData.StationUID}},methods:{sendClickedCard:function(){this.$emit("clickedCard",this.route)}},computed:{city:function(){var t=this;if("Home"===this.$route.name)return this.chosedCityLink;var e=Y.filter((function(e){return e.cityCode===t.chosedCityLink}));return e[0].cityLink},cityTag:function(){var t=this;return Y.filter((function(e){return e.cityCode===t.cardData.LocationCityCode}))[0].city},stationStops:function(){return this.cardData.Stops}}};n("810f");const At=m()(xt,[["render",Tt],["__scopeId","data-v-7da79004"]]);var Kt=At,Ut=function(t){return Object(o["x"])("data-v-f6ffcd78"),t=t(),Object(o["v"])(),t},Bt={class:"spinner-border",style:{width:"2rem",height:"2rem"},role:"status"},Pt=Ut((function(){return Object(o["h"])("span",{class:"visually-hidden"},"Loading...",-1)})),$t=[Pt];function Ht(t,e){return Object(o["u"])(),Object(o["g"])("div",Bt,$t)}n("c53b");const Jt={},Zt=m()(Jt,[["render",Ht],["__scopeId","data-v-f6ffcd78"]]);var qt=Zt,Ft=n("4fb9"),Wt={name:"Home",components:{Search_Bar:Q,card_Route:St,card_Station:Kt,Loading:qt},data:function(){return{allRouteData:[],chosedCityLink:"",userKeyIn:"",searchMode:"Route",displayCount:20,displayedCards:[],isLoading:!1}},methods:{storeSession:function(t){sessionStorage.setItem("".concat(this.searchMode,"Data"),JSON.stringify(t))},emitsearchMode:function(t){console.log("確認 emit 的search mode ->  ",t),this.searchMode=t,this.userKeyIn="",this.displayedCards=[]},emitUserKeyin:function(t){console.log("確認 emit input -> ",t),this.userKeyIn=t,this.getCardsData(this.allRouteData,this.displayCount)},emitchosedCity:function(t){console.log("確認 emit city -> ",t),this.chosedCityLink=t.cityLink,this.userKeyIn="",this.displayedCards=[],this.getApi()},getCityStationApi:function(t){var e=this;return Ft["a"].getCityBusStation(t).then((function(t){return e.allRouteData=t.data}))},getCityRouteApi:function(t){var e=this;return Ft["a"].getCityBusRoute(t).then((function(t){return e.allRouteData=t.data}))},getApi:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoading=!0,"Route"!==t.searchMode){e.next=7;break}return e.next=4,t.getCityRouteApi(t.chosedCityLink);case 4:t.isLoading=!1,e.next=10;break;case 7:return e.next=9,t.getCityStationApi(t.chosedCityLink);case 9:t.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},loadMoreData:function(){console.log("scroll event")},getCardsData:function(t){var e=this;this.allRouteData!==[]&&("*"===this.userKeyIn?this.displayedCards=t:"Route"===this.searchMode?this.displayedCards=t.filter((function(t){return t.RouteName.Zh_tw.includes(e.userKeyIn)})).slice(0,this.displayCount):this.displayedCards=t.filter((function(t){return t.StationName["Zh_tw"].includes(e.userKeyIn)})).slice(0,this.displayCount))}},mounted:function(){document.addEventListener("scroll",this.loadMoreData)},unmounted:function(){document.removeEventListener("scroll",this.loadMoreData)}};n("4352");const Yt=m()(Wt,[["render",I],["__scopeId","data-v-bfcb663c"]]);var Xt=Yt,Gt=function(t){return Object(o["x"])("data-v-397a09bb"),t=t(),Object(o["v"])(),t},Qt={class:"nearBy"},zt=Gt((function(){return Object(o["h"])("h2",null,"附近站牌",-1)})),Vt={class:"cards_group"};function te(t,e,n,a,i,c){var r=Object(o["B"])("Alert"),u=Object(o["B"])("Card_Station");return Object(o["u"])(),Object(o["g"])("main",Qt,[zt,Object(o["k"])(r),Object(o["h"])("section",Vt,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(i.nearStationsData,(function(t){return Object(o["u"])(),Object(o["e"])(u,{key:t.StationUID,searchMode:i.searchMode,cardData:t,chosedCityLink:t.LocationCityCode,onClick:function(e){return c.storeSession(t)}},null,8,["searchMode","cardData","chosedCityLink","onClick"])})),128))])])}var ee={class:"modal",tabindex:"-1"},ne=Object(o["i"])('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Modal title</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p>Modal body text goes here.</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button><button type="button" class="btn btn-primary">Save changes</button></div></div></div>',1),oe=[ne];function ae(t,e){return Object(o["u"])(),Object(o["g"])("div",ee,oe)}const ie={},ce=m()(ie,[["render",ae]]);var re=ce,ue={name:"Nearby",components:{Card_Station:Kt,Alert:re},data:function(){return{show:!1,currentPosition:[],nearStationsData:[],searchMode:"Station",city:"Chiayi"}},computed:{},methods:{getCurrentPosition:function(t){function e(e){var n=e.coords.latitude,o=e.coords.longitude;t.currentPosition=[n,o],t.getNearStation(22.9996475,120.2106908)}function n(t){console.log(t),alert("咦 不想玩看看定位功能嗎")}console.log("getPosition"),navigator.geolocation&&navigator.geolocation.getCurrentPosition(e,n)},getNearStation:function(t,e){var n=this;console.log("取附近站點資訊",t,e),Ft["a"].getNearbyStation(t,e,300).then((function(t){return n.nearStationsData=t.data}))},storeSession:function(t){sessionStorage.setItem("StationData",JSON.stringify(t))},getCityFromCityCode:function(){}},created:function(){this.getCurrentPosition(this)}};n("c37e");const se=m()(ue,[["render",te],["__scopeId","data-v-397a09bb"]]);var de=se,le=function(t){return Object(o["x"])("data-v-9a985176"),t=t(),Object(o["v"])(),t},be=le((function(){return Object(o["h"])("h2",null,"轉乘規劃",-1)})),fe=[be];function ye(t,e,n,a,i,c){return Object(o["u"])(),Object(o["g"])("main",null,fe)}var he={};n("e7ce");const pe=m()(he,[["render",ye],["__scopeId","data-v-9a985176"]]);var ge=pe,me=void 0,Oe=[{path:"/",name:"Home",component:Xt},{path:"/nearby",name:"Nearby",props:!0,component:de},{path:"/:mode/:city/:displayName",name:"Detail",props:!0,beforeEnter:function(t,e){if(console.log(t,e),"Nearby"===e.name)return console.log(me.params.city),!0},component:function(){return n.e("about").then(n.bind(null,"c84b"))}},{path:"/navigation",name:"Navigation",component:ge}],je=Object(k["a"])({history:Object(k["b"])("/F2E-Week3-Bus-Site/"),routes:Oe}),Ce=je,ve=n("5502"),Se=Object(ve["a"])({state:{route:{}},mutations:{route:function(t,e){t.route=e}},actions:{showRouteInfo:function(t,e){console.log(t,e),t.commit("route",e)}},modules:{}});n("3559");Object(o["d"])(S).use(Se).use(Ce).mount("#app")},6111:function(t,e,n){t.exports=n.p+"img/icon_MRT.81c67791.svg"},"7b09":function(t){t.exports=JSON.parse('[{"city":"基隆市","cityLink":"Keelung","cityCode":"KEE","StationData":false},{"city":"臺北市","cityLink":"Taipei","cityCode":"TPE","StationData":true},{"city":"新北市","cityLink":"NewTaipei","cityCode":"NWT","StationData":true},{"city":"桃園市","cityLink":"Taoyuan","cityCode":"TAO","StationData":true},{"city":"新竹市","cityLink":"Hsinchu","cityCode":"HSZ","StationData":true},{"city":"新竹縣","cityLink":"HsinchuCounty","cityCode":"HSQ","StationData":true},{"city":"苗栗縣","cityLink":"MiaoliCounty","cityCode":"MIA","StationData":true},{"city":"臺中市","cityLink":"Taichung","cityCode":"TXG","StationData":true},{"city":"彰化縣","cityLink":"ChanghuaCounty","cityCode":"CHA","StationData":true},{"city":"南投縣","cityLink":"NantouCounty","cityCode":"NAN","StationData":true},{"city":"雲林縣","cityLink":"YunlinCounty","cityCode":"YUN","StationData":true},{"city":"嘉義縣","cityLink":"ChiayiCounty","cityCode":"CYQ","StationData":true},{"city":"嘉義市","cityLink":"Chiayi","cityCode":"CYI","StationData":true},{"city":"臺南市","cityLink":"Tainan","cityCode":"TNN","StationData":true},{"city":"高雄市","cityLink":"Kaohsiung","cityCode":"KHH","StationData":true},{"city":"屏東縣","cityLink":"PingtungCounty","cityCode":"PIF","StationData":true},{"city":"臺東縣","cityLink":"TaitungCounty","cityCode":"TTT","StationData":true},{"city":"花蓮縣","cityLink":"HualienCounty","cityCode":"HUA","StationData":true},{"city":"宜蘭縣","cityLink":"YilanCounty","cityCode":"ILA","StationData":true},{"city":"金門縣","cityLink":"KinmenCounty","cityCode":"KIN","StationData":true},{"city":"澎湖縣","cityLink":"PenghuCounty","cityCode":"PEN","StationData":true},{"city":"連江縣","cityLink":"LienchiangCounty","cityCode":"LIE","StationData":false}]')},"810f":function(t,e,n){"use strict";n("30ca")},"8e69":function(t,e,n){},a9bd:function(t,e,n){t.exports=n.p+"img/icon_menu.e65f0489.svg"},b9c9:function(t,e,n){"use strict";n("198a")},c37e:function(t,e,n){"use strict";n("427f")},c3cf:function(t,e,n){},c53b:function(t,e,n){"use strict";n("3b6a")},d103:function(t,e,n){t.exports=n.p+"img/icon_bike.9885472c.svg"},e7ce:function(t,e,n){"use strict";n("c3cf")},f6d2:function(t,e,n){},fdbcf:function(t,e,n){}});
//# sourceMappingURL=app.bb2b5014.js.map