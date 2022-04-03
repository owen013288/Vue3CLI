(function(){"use strict";var e={3817:function(e,t,n){var o=n(9963),r=n(6252);const i={class:"container mt-3"},a={class:"row"},u={class:"col-2"},c={class:"list-group"},s=(0,r.Uk)(" home "),l=(0,r.Uk)(" About "),d={class:"col-6"},f={class:"card"},p={class:"card-body"};function m(e,t,n,o,m,v){const h=(0,r.up)("Banner"),b=(0,r.up)("router-link"),g=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(h),(0,r._)("div",a,[(0,r._)("div",u,[(0,r._)("div",c,[(0,r.Wm)(b,{replace:!0,class:"list-group-item","active-class":"active",to:"../components/路由/pages/home"},{default:(0,r.w5)((()=>[s])),_:1}),(0,r.Wm)(b,{replace:"",class:"list-group-item","active-class":"active",to:{path:"/about"}},{default:(0,r.w5)((()=>[l])),_:1})])]),(0,r._)("div",d,[(0,r._)("div",f,[(0,r._)("div",p,[(0,r.Wm)(g)])])])])])}var v=n(3577);const h={class:"row"},b={class:"col-offset-2 col-8"},g={class:"mt-4 p-5"};function w(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",b,[(0,r._)("div",g,[(0,r._)("h2",null,(0,v.zw)(i.showInfo),1)])])])}var y={name:"Banner",data(){return{showInfo:"Vue Router 學習"}}},O=n(3744);const _=(0,O.Z)(y,[["render",w]]);var k=_,A={name:"App",components:{Banner:k}};const D=(0,O.Z)(A,[["render",m]]);var P=D,j=n(9391),E=n(6825),S=n(629),T={namespaced:!0,actions:{addOdd(e,t){e.state.sum%2&&e.commit("ADD",t)},addWait(e,t){setTimeout((()=>{e.commit("ADD",t)}),500)}},mutations:{ADD(e,t){e.sum+=t},REDUCE(e,t){e.sum-=t}},state:{sum:0,school:"owen",subject:"Vue"},getters:{bigSum(e){return 10*e.sum}}},x=n(3416),C=n(9669),M=n.n(C),N={namespaced:!0,actions:{addPersonServer(e){M().get("https://www.travel.taipei/open-api/swagger/docs/V1").then((t=>{e.commit("ADD_PERSON",{id:x.x0,name:t.data.tags[Math.floor(6*Math.random())].description})}),(e=>{alert(e.message)}))}},mutations:{ADD_PERSON(e,t){console.log(t),e.personList.unshift(t)}},state:{personList:[{id:(0,x.x0)(),name:"owen"}]},getters:{}},B=new S.ZP.Store({modules:{countOptions:T,PersonOptions:N}}),W=n(2119);const Z=(0,W.p7)({history:(0,W.PO)(),routes:[{path:"/",component:()=>n.e(376).then(n.bind(n,376)),meta:{title:"首頁"}},{path:"/Home",component:()=>n.e(376).then(n.bind(n,376)),meta:{title:"首頁"},children:[{path:"News",component:()=>n.e(362).then(n.bind(n,5362)),meta:{isAuth:!0,title:"最新消息"}},{path:"Message",component:()=>n.e(816).then(n.bind(n,1816)),meta:{isAuth:!0,title:"訊息"},children:[{path:"Detail",component:()=>n.e(297).then(n.bind(n,1297)),props({query:{id:e,title:t}}){return{id:e,title:t}},meta:{title:"詳情"}}]}]},{path:"/about",component:()=>n.e(148).then(n.bind(n,6148)),meta:{title:"關於"}}]});Z.beforeEach(((e,t,n)=>{e.meta.isAuth?"owen"===localStorage.getItem("name")?n():alert("您並無權限查看！"):n()})),Z.afterEach(((e,t)=>{document.title=e.meta.title}));var L=Z;const R=(0,j.Z)(),I=(0,o.ri)(P);I.use(E.ZP),I.use(B),I.use(L),I.config.globalProperties.eventBus=R,I.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{148:"716d3c81",297:"11854e89",362:"26f6e733",376:"ca544a1a",816:"e8b1adc4"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue3cli:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var l=c(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkvue3cli"]=self["webpackChunkvue3cli"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3817)}));o=n.O(o)})();
//# sourceMappingURL=app.a3441cec.js.map