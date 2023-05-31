(function(){"use strict";var t={6719:function(t,e,a){var r=a(144),s=a(998),n=a(3059),l=function(){var t=this,e=t._self._c;return e(s.Z,[e("nav-bar"),e(n.Z,[e("router-view")],1)],1)},c=[],o=a(6072),i=a(8762),u=a(4324),d=a(1713),p=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{app:"",color:"light-blue darken-3",dark:""}},[e(d.Z,{staticClass:"justify-center"},[e(i.Z,{attrs:{icon:"",to:{name:"lectures"}}},[e(u.Z,[t._v("mdi-human-male-board")])],1),e(i.Z,{attrs:{icon:"",to:{name:"schedule"}}},[e(u.Z,[t._v("mdi-calendar")])],1)],1)],1)},h=[],f=a(1001),m={},Z=(0,f.Z)(m,p,h,!1,null,null,null),v=Z.exports,g={name:"App",components:{NavBar:v},data:()=>({})},_=g,b=(0,f.Z)(_,l,c,!1,null,null,null),y=b.exports,C=a(8345),x=a(9582),k=a(266),w=a(2118),L=a(9223),P=a(9258),O=a(2033),j=function(){var t=this,e=t._self._c;return e(w.Z,[e(d.Z,{staticClass:"align-center"},[e(k.Z,{attrs:{cols:"4"}},[e("h1",[t._v("Gerenciar Palestras")])]),e(k.Z,{attrs:{COLS:"8"}},[e(d.Z,{staticClass:"align-center ma-0"},[e(O.Z,{staticClass:"mr-3 rounded-lg",attrs:{outlined:"","hide-details":"true","prepend-inner-icon":"mdi-plus",color:"rgb(118, 118, 118)",label:"Título da Palestra"},model:{value:t.newLectureName,callback:function(e){t.newLectureName=e},expression:"newLectureName"}}),e(i.Z,{staticClass:"mr-3 rounded-lg",attrs:{outlined:"",color:"rgb(118, 118, 118)"},on:{click:function(e){return e.stopPropagation(),t.addLecture()}}},[t._v(" Adicionar ")]),e(i.Z,{staticClass:"mr-3 rounded-lg",attrs:{outlined:"",color:"rgb(118, 118, 118)"},on:{click:function(e){return e.stopPropagation(),t.$refs.input1.click()}}},[e(u.Z,[t._v("mdi-paperclip")]),e("input",{ref:"input1",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){return t.uploadFile(e)}}})],1)],1)],1)],1),e(L.Z,{staticClass:"my-4"}),e(k.Z,[e(d.Z,t._l(t.lectures,(function(a){return e(x.Z,{key:a.id,staticClass:"mx-1 mb-2",attrs:{outlined:"",width:"224",height:"124"}},[e(k.Z,{staticClass:"pa-0 align-end"},[e(d.Z,{staticClass:"ma-0",attrs:{"min-height":"200"}},[e(k.Z,{staticClass:"pa-2 pb-0"},[e("div",{staticStyle:{"min-height":"80px"}},[a.name.length<70?e("span",{staticClass:"text-subtitle-2"},[t._v(t._s(a.name))]):e("span",{staticClass:"text-subtitle-2"},[t._v(t._s(a.name.substring(0,70)+"..."))])])])],1),e(L.Z,{staticClass:"my-1"}),e(k.Z,{staticClass:"ma-0"},[e(d.Z,{},[e(k.Z,[e(d.Z,{staticClass:"justify-start"},[e(i.Z,{staticClass:"ml-2",attrs:{depressed:"","x-small":""},on:{click:function(e){return e.stopPropagation(),t.editLecture(a)}}},[t._v(" Editar "),e(u.Z,{staticClass:"ml-1",attrs:{small:"",color:"green"}},[t._v("mdi-pencil")])],1)],1)],1),e(k.Z,[e(d.Z,{staticClass:"justify-end"},[e(i.Z,{staticClass:"mr-2",attrs:{depressed:"","x-small":""},on:{click:function(e){return e.stopPropagation(),t.deleteLecture(a.id)}}},[t._v(" Excluir "),e(u.Z,{staticClass:"ml-1",attrs:{small:"",color:"red"}},[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)],1)})),1)],1),e("edit-dialog",{attrs:{show:t.dialog,lecture:t.selectedLecture},on:{"update:show":function(e){t.dialog=e},"update:lecture":function(e){t.selectedLecture=e},updated:function(e){return t.getLectures()},error:t.setAlert}}),e(P.Z,{attrs:{top:"",color:t.alert.type,timeout:4e3},scopedSlots:t._u([{key:"action",fn:function({attrs:a}){return[e(i.Z,t._b({attrs:{text:"",small:""},on:{click:function(e){t.alert.enabled=!1}}},"v-btn",a,!1),[t._v(" Fechar ")])]}}]),model:{value:t.alert.enabled,callback:function(e){t.$set(t.alert,"enabled",e)},expression:"alert.enabled"}},[t._v(" "+t._s(t.alert.text)+" ")])],1)},$=[],S=a(9669),T=a.n(S),D=a(4886),E=a(9202),A=a(3687),F=function(){var t=this,e=t._self._c;return e(E.Z,{attrs:{value:t.show,persistent:"","max-width":"600px"}},[e(x.Z,[e(D.EB,[e("span",{staticClass:"text-h5"},[t._v("Editar Palestra")])]),e(D.ZB,[e(w.Z,[e(d.Z,[e(k.Z,{staticClass:"pa-0",attrs:{cols:"12"}},[e(O.Z,{attrs:{label:"Título da palestra",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)],1),e("small",[t._v("*indique a duração da palestra ao final do nome (ex: Palestra 10min)")])],1),e(D.h7,[e(i.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.saveLecture()}}},[t._v(" Salvar ")]),e(A.Z),e(i.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" Fechar ")])],1)],1)],1)},N=[],B={name:"EditDialog",data:()=>({}),props:["show","lecture"],computed:{name:{get(){return this.lecture.name},set(t){this.$emit("update:lecture",{...this.lecture,name:t})}}},methods:{saveLecture(){T().put(`http://localhost:3000/lectures/${this.lecture.id}`,{lecture:{name:this.name}}).then((()=>{this.$emit("updated"),this.closeDialog()})).catch((t=>{this.$emit("error",t.response.data,"error")}))},closeDialog(){this.$emit("update:show",!1)}}},M=B,q=(0,f.Z)(M,F,N,!1,null,null,null),V=q.exports,G={name:"CRUDView",components:{EditDialog:V},data:()=>({lectures:[],newLectureName:"",dialog:!1,selectedLecture:{},alert:{text:"Alert!",type:"error",enabled:!1},info:{}}),created(){this.getLectures()},methods:{getLectures(){T().get("http://localhost:3000/lectures").then((t=>{this.lectures=t.data}))},editLecture(t){this.selectedLecture=t,this.dialog=!0},setAlert(t,e){const a=Object.keys(t);this.alert={text:`${a[0]} ${t[a[0]][0]}`,type:e,enabled:!0}},deleteLecture(t){T()["delete"](`http://localhost:3000/lectures/${t}`).then((()=>{this.getLectures()})).catch((t=>{console.log(t)}))},addLecture(){T().post("http://localhost:3000/lectures",{lecture:{name:this.newLectureName}}).then((()=>{this.getLectures()})).catch((t=>{this.setAlert(t.response.data,"error")}))},uploadFile(t){const e=new FormData;e.append("lecture[file]",t.target.files[0]),T().post("http://localhost:3000/lectures/batch",e).then((t=>{console.log(t),201==t.status&&this.$router.push({name:"schedule"})})).catch((t=>{console.log(t)}))}}},R=G,U=(0,f.Z)(R,j,$,!1,null,"59041438",null),z=U.exports,H=function(){var t=this,e=t._self._c;return e(w.Z,[e("div",{staticClass:"d-flex justify-center"},[e("h1",[t._v("Cronograma")])]),t._l(t.tracks,(function(a,r){return e(k.Z,{key:a.id},[e(w.Z,{staticClass:"custom-card pa-4"},[e(d.Z,[e("h3",{staticClass:"ml-2"},[t._v("Track "+t._s(r+1))])]),t._l(a.lectures,(function(a){return e(d.Z,{key:a.id},[e(k.Z,{staticClass:"py-1",attrs:{cols:"1"}},[e("span",{staticClass:"text-subtitle-2"},[t._v(t._s(a.start_time))])]),e(k.Z,{staticClass:"py-1",attrs:{cols:"11"}},[e("span",{staticClass:"text-subtitle-2 mx-2"},[t._v(t._s(a.name))])])],1)}))],2)],1)}))],2)},I=[],J={name:"ScheduleView",data:()=>({tracks:[]}),created(){this.getLectures()},methods:{getLectures(){T().get("http://localhost:3000/tracks").then((({data:t})=>{this.tracks=t}))}}},K=J,Q=(0,f.Z)(K,H,I,!1,null,null,null),W=Q.exports;r.ZP.use(C.ZP);const X=[{path:"",redirect:{name:"lectures"}},{path:"/lectures",name:"lectures",component:z},{path:"/schedule",name:"schedule",component:W}],Y=new C.ZP({mode:"history",routes:X});var tt=Y,et=a(8864);r.ZP.use(et.Z);var at=new et.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:tt,vuetify:at,render:t=>t(y)}).$mount("#app")}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,n){if(!r){var l=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],n=t[u][2];for(var c=!0,o=0;o<r.length;o++)(!1&n||l>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[o])}))?r.splice(o--,1):(c=!1,n<l&&(l=n));if(c){t.splice(u--,1);var i=s();void 0!==i&&(e=i)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,l=r[0],c=r[1],o=r[2],i=0;if(l.some((function(e){return 0!==t[e]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(o)var u=o(a)}for(e&&e(r);i<l.length;i++)n=l[i],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},r=self["webpackChunkweb_challenge_frontend"]=self["webpackChunkweb_challenge_frontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6719)}));r=a.O(r)})();
//# sourceMappingURL=app.7a0a4d7c.js.map