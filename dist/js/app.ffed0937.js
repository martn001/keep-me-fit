(function(t){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,u=1;u<o.length;u++){var c=o[u];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/keep-me-fit/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1401:function(t,e,o){"use strict";o("2a7d")},"2a7d":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),o("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),o("v-spacer"),o("span",[t._v("Keep me fit!")])],1),o("v-main",{staticClass:"background-layout"},[o("router-view")],1)],1)},n=[],i={name:"App",data:function(){return{}}},u=i,c=(o("1401"),o("2877")),s=o("6544"),l=o.n(s),f=o("7496"),p=o("40dc"),d=o("adda"),m=o("f6c4"),v=o("2fa4"),g=Object(c["a"])(u,a,n,!1,null,"93ae4d38",null),h=g.exports;l()(g,{VApp:f["a"],VAppBar:p["a"],VImg:d["a"],VMain:m["a"],VSpacer:v["a"]});o("15f5");var k=o("f309");r["a"].use(k["a"]);var b=new k["a"]({icons:{iconfont:"fa"},theme:{themes:{light:{accent:"#97ce2d"}}}}),w=o("8c4f");r["a"].use(w["a"]);var y=new w["a"]({mode:"history",routes:[{path:"",name:"home",component:o("bb51").default}]}),S=o("2f62"),O=o("0e44"),j=(o("4de4"),"workouts"),W={namespaced:!0,state:{workouts:null},mutations:{setWorkouts:function(t,e){t.workouts=e},addWorkout:function(t,e){t.workouts.push(e)},removeWorkout:function(t,e){t.workouts=t.workouts.filter((function(t){return t.id!==e}))},updateLocalStorage:function(t){localStorage.setItem(j,JSON.stringify(t.workouts))},clearLocalStorage:function(){localStorage.removeItem(j)}},getters:{getWorkouts:function(t){return t.workouts?t.workouts:[]},getLocalStorage:function(){return JSON.parse(localStorage.getItem(j))}},actions:{fetchWorkouts:function(t){var e=this.getLocalStorage();null==e?(t.commit("setWorkouts",[]),t.commit("updateLocalStorage")):t.commit("setWorkouts",e)},createWorkout:function(t,e){null==t.state.workouts&&this.fetchWorkouts(t),t.commit("addWorkout",e),t.commit("updateLocalStorage")},deleteWorkouts:function(t){t.commit("setWorkouts",[]),t.commit("clearLocalStorage")},removeWorkout:function(t,e){t.commit("removeWorkout",e),t.commit("updateLocalStorage")}}};r["a"].use(S["a"]);var _=new S["a"].Store({plugins:[Object(O["a"])()],modules:{Workout:W}});r["a"].config.productionTip=!1,new r["a"]({vuetify:b,router:y,store:_,render:function(t){return t(h)}}).$mount("#app")},bb51:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"fill-height"},[o("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[o("v-col",[o("v-btn",{staticClass:"ma-4",attrs:{large:"",outlined:"",color:"primary"}},[t._v(" Training van vandaag ")]),o("v-btn",{staticClass:"ma-4",attrs:{large:"",outlined:"",color:"primary"}},[t._v(" Extra training ")]),o("v-btn",{staticClass:"ma-4",attrs:{large:"",outlined:"",color:"primary"}},[t._v(" Maak een nieuwe oefening ")])],1)],1)],1)},a=[],n={name:"Home"},i=n,u=o("2877"),c=o("6544"),s=o.n(c),l=o("8336"),f=o("62ad"),p=o("a523"),d=o("0fd9"),m=Object(u["a"])(i,r,a,!1,null,"fb883d76",null);e["default"]=m.exports;s()(m,{VBtn:l["a"],VCol:f["a"],VContainer:p["a"],VRow:d["a"]})}});
//# sourceMappingURL=app.ffed0937.js.map