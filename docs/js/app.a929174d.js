(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1bc6":function(t,e,o){},"3f60":function(t,e,o){"use strict";var i=o("1bc6"),a=o.n(i);a.a},"56a0":function(t,e,o){"use strict";var i=o("769b"),a=o.n(i);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{to:"/"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-notebook-edit")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Todo Tasks")])],1)],1),o("v-list-item",{attrs:{to:"/done"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-notebook-check")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Done Tasks")])],1)],1),o("v-list-item",{attrs:{to:"/settings"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-cog")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Todo")])],1),o("v-main",[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",[o("router-view")],1)],1)],1)],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},n=[],s={name:"App",data:function(){return{main:null,donePage:null,settings:null,drawer:null}},mounted:function(){this.$store.commit("startLocal")},created:function(){this.$vuetify.theme.dark=!0}},r=s,c=o("2877"),l=o("6544"),d=o.n(l),u=o("7496"),m=o("40dc"),v=o("5bc1"),f=o("62ad"),p=o("a523"),k=o("553a"),h=o("132d"),b=o("8860"),_=o("da13"),g=o("1800"),T=o("5d23"),x=o("f6c4"),y=o("f774"),w=o("0fd9"),V=o("2a7f"),S=Object(c["a"])(r,a,n,!1,null,null,null),C=S.exports;d()(S,{VApp:u["a"],VAppBar:m["a"],VAppBarNavIcon:v["a"],VCol:f["a"],VContainer:p["a"],VFooter:k["a"],VIcon:h["a"],VList:b["a"],VListItem:_["a"],VListItemAction:g["a"],VListItemContent:T["a"],VListItemTitle:T["b"],VMain:x["a"],VNavigationDrawer:y["a"],VRow:w["a"],VToolbarTitle:V["a"]});o("5363");var P=o("f309");i["a"].use(P["a"]);var O=new P["a"]({icons:{iconfont:"mdi"}}),$=(o("a434"),o("2f62"));i["a"].use($["a"]);var I=new $["a"].Store({state:{todos:[],doneTasks:[]},getters:{},mutations:{startLocal:function(t){if(localStorage.getItem("todos")||localStorage.getItem("doneTasks"))try{t.todos=JSON.parse(localStorage.getItem("todos")),t.doneTasks=JSON.parse(localStorage.getItem("doneTasks"))}catch(e){localStorage.removeItem("todos"),localStorage.removeItem("doneTasks")}},addTodo:function(t,e){t.todos.unshift({id:new Date,textTodo:e.task,date:e.date,time:e.time}),localStorage.setItem("todos",JSON.stringify(t.todos))},doneTodo:function(t,e){t.doneTasks.push(t.todos[e]),t.todos.splice(e,1),localStorage.setItem("doneTasks",JSON.stringify(t.doneTasks)),localStorage.setItem("todos",JSON.stringify(t.todos))},delTodo:function(t,e){t.doneTasks.splice(e,1),localStorage.setItem("doneTasks",JSON.stringify(t.doneTasks))},editTodo:function(t,e){t.todos.splice(e.i,1,{id:e.id,textTodo:e.task,date:e.date,time:e.time}),localStorage.setItem("todos",JSON.stringify(t.todos))},saveTodo:function(t,e){t.todos=e,localStorage.setItem("todos",JSON.stringify(t.todos))}},actions:{}}),L=o("8c4f"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-row",[o("v-col",{staticClass:"d-flex"},[o("v-text-field",{attrs:{label:"New Task","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddNewTodo(e)}},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}}),o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({staticClass:"pickers",attrs:{label:"Pick date","prepend-icon":"event",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",a,!1),i))]}}]),model:{value:t.datePick,callback:function(e){t.datePick=e},expression:"datePick"}},[o("v-date-picker",{on:{input:function(e){t.datePick=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({staticClass:"pickers",attrs:{label:"Pick time","prepend-icon":"access_time",readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",a,!1),i))]}}]),model:{value:t.timePicker,callback:function(e){t.timePicker=e},expression:"timePicker"}},[t.timePicker?o("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(e){return t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):t._e()],1),o("v-btn",{attrs:{large:""},on:{click:function(e){return t.AddNewTodo(t.task)}}},[t._v("Add")])],1)],1),o("v-row",[o("v-col")],1),o("v-row",[o("v-col",[o("v-list",{attrs:{dense:""}},[o("v-subheader",[t._v("Todo Tasks")]),o("v-list-item-group",{staticClass:"d-flex flex-column justify-space-between",attrs:{color:"primary"}},[o("draggable",{attrs:{options:{delay:200,animation:300}},model:{value:t.sourceTodos,callback:function(e){t.sourceTodos=e},expression:"sourceTodos"}},t._l(t.sourceTodos,(function(e,i){return o("v-list-item",{key:i},[o("v-btn",{attrs:{icon:"",color:"green"},on:{click:function(o){t.DoneTodo(t.sourceTodos.indexOf(e))}}},[o("v-icon",[t._v("mdi-check-circle")])],1),o("v-card-text",{staticClass:"d-flex flex-row justify-space-between"},[o("div",{staticClass:"task d-flex flex-row "},[o("v-list-item-action",{staticClass:"handle"},[o("v-icon",[t._v("mdi-card-text")])],1),o("v-list-item-content",[o("v-list-item-title",[o("h3",[t._v(t._s(e.textTodo))])])],1)],1),o("div",{staticClass:"d-flex flex-row"},[""!==e.date?o("div",[o("p",{staticClass:"dateList"},[o("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(e.date))],1)]):t._e(),""!==e.time?o("div",[o("p",[o("v-icon",[t._v("mdi-clock-time-eight")]),t._v(" "+t._s(e.time))],1)]):t._e()])]),o("v-btn",{attrs:{icon:"",to:{name:"Edit",params:{id:t.sourceTodos.indexOf(e)}}}},[o("v-icon",[t._v("mdi-pencil")])],1)],1)})),1)],1)],1)],1)],1)],1)],1)},D=[],N=o("310e"),A=o.n(N),E={name:"Todo",components:{draggable:A.a},data:function(){return{task:"",date:"",time:"",checkbox1:!1,timePicker:!1,datePick:!1}},methods:{AddNewTodo:function(){""!==this.task&&null!==this.task&&(this.$store.commit("addTodo",{task:this.task,date:this.date,time:this.time}),this.task=this.date=this.time="")},DoneTodo:function(t){this.$store.commit("doneTodo",t)}},computed:{sourceTodos:{get:function(){return this.$store.state.todos},set:function(t){this.$store.commit("saveTodo",t)}}}},J=E,M=(o("3f60"),o("8336")),B=o("99d9"),F=o("2e4b"),R=o("1baa"),G=o("e449"),H=o("e0c7"),Y=o("8654"),q=o("c964"),z=Object(c["a"])(J,j,D,!1,null,"242dd3e0",null),K=z.exports;d()(z,{VBtn:M["a"],VCardText:B["a"],VCol:f["a"],VContainer:p["a"],VDatePicker:F["a"],VIcon:h["a"],VList:b["a"],VListItem:_["a"],VListItemAction:g["a"],VListItemContent:T["a"],VListItemGroup:R["a"],VListItemTitle:T["b"],VMenu:G["a"],VRow:w["a"],VSubheader:H["a"],VTextField:Y["a"],VTimePicker:q["a"]});var Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-row",[o("v-col",[o("v-list",{attrs:{dense:""}},[o("v-subheader",[t._v("Done Tasks")]),o("v-list-item-group",{attrs:{color:"red accent-1"}},t._l(t.sourceDoneTodos,(function(e,i){return o("v-list-item",{key:i},[o("v-card-text",[t._v(t._s(e.textTodo))]),o("div",{staticClass:"d-flex flex-row"},[""!==e.date?o("div",[o("p",{staticClass:"dateList"},[o("v-icon",[t._v("mdi-calendar")]),t._v(" "+t._s(e.date))],1)]):t._e(),""!==e.time?o("div",[o("p",{staticClass:"timeList"},[o("v-icon",[t._v("mdi-clock-time-eight")]),t._v(" "+t._s(e.time))],1)]):t._e()]),o("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(o){t.delTasks(t.sourceDoneTodos.indexOf(e))}}},[o("v-icon",[t._v("mdi-delete")])],1)],1)})),1)],1)],1)],1)],1)],1)},U=[],W={name:"Done",data:function(){return{}},methods:{delTasks:function(t){this.$store.commit("delTodo",t)}},computed:{sourceDoneTodos:function(){return this.$store.state.doneTasks}}},X=W,Z=(o("56a0"),Object(c["a"])(X,Q,U,!1,null,"6e119604",null)),tt=Z.exports;d()(Z,{VBtn:M["a"],VCardText:B["a"],VCol:f["a"],VContainer:p["a"],VIcon:h["a"],VList:b["a"],VListItem:_["a"],VListItemGroup:R["a"],VRow:w["a"],VSubheader:H["a"]});var et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-row",[o("v-col",[o("h3",[t._v("Change Task")]),o("v-text-field",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editTodo(e)}},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}})],1)],1),o("v-row",[o("v-col",[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({staticClass:"pickers",attrs:{label:"Change or pick date","prepend-icon":"event",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",a,!1),i))]}}]),model:{value:t.datePick,callback:function(e){t.datePick=e},expression:"datePick"}},[o("v-date-picker",{on:{input:function(e){t.datePick=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1),o("v-row",[o("v-col",[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({staticClass:"pickers",attrs:{label:"Change or pick time","prepend-icon":"access_time",readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",a,!1),i))]}}]),model:{value:t.timePicker,callback:function(e){t.timePicker=e},expression:"timePicker"}},[t.timePicker?o("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(e){return t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):t._e()],1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"2"}},[o("v-btn",{on:{click:t.editTodo}},[t._v("Save")])],1),o("v-col",{attrs:{cols:"2"}},[o("v-btn",{attrs:{to:"/"}},[t._v("Cancel")])],1)],1)],1)],1)},ot=[],it={name:"Done",data:function(){return{task:"",date:"",time:"",datePick:!1,timePicker:!1}},mounted:function(){this.task=this.sourceTodos[this.$route.params.id].textTodo,this.date=this.sourceTodos[this.$route.params.id].date,this.time=this.sourceTodos[this.$route.params.id].time},methods:{editTodo:function(){this.$store.commit("editTodo",{i:this.$route.params.id,id:this.sourceTodos[this.$route.params.id].id,task:this.task,date:this.date,time:this.time}),this.$router.push("/")}},computed:{sourceTodos:function(){return this.$store.state.todos}}},at=it,nt=Object(c["a"])(at,et,ot,!1,null,null,null),st=nt.exports;d()(nt,{VBtn:M["a"],VCol:f["a"],VContainer:p["a"],VDatePicker:F["a"],VMenu:G["a"],VRow:w["a"],VTextField:Y["a"],VTimePicker:q["a"]});var rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",{staticClass:"d-flex justify-center align-center"},[o("h4",{staticClass:"mx-2"},[t._v("Light")]),o("v-switch",{model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}}),o("h4",{staticClass:"mx-2"},[t._v("Dark")])],1)])},ct=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex justify-center align-center"},[o("h3",[t._v("Theme")])])}],lt={name:"Settings"},dt=lt,ut=o("b73d"),mt=Object(c["a"])(dt,rt,ct,!1,null,null,null),vt=mt.exports;d()(mt,{VSwitch:ut["a"]}),i["a"].use(L["a"]);var ft=[{path:"/",name:"Home",component:K},{path:"/done",name:"Done",component:tt},{path:"/settings",name:"Settings",component:vt},{path:"/edit:id",name:"Edit",component:st}],pt=new L["a"]({mode:"history",base:"/",routes:ft}),kt=pt;o("d1e78");i["a"].config.productionTip=!1,new i["a"]({vuetify:O,router:kt,store:I,render:function(t){return t(C)}}).$mount("#app")},"769b":function(t,e,o){}});
//# sourceMappingURL=app.a929174d.js.map