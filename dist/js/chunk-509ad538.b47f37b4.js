(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-509ad538"],{"2ad2":function(t,s,i){"use strict";var e=i("b863"),a=i.n(e);a.a},"7f43":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"singer"},[e("div",{staticClass:"header"},[e("img",{staticClass:"login-back",attrs:{src:i("ed13"),alt:"返回图标"},on:{click:t.routerBack}}),e("img",{staticClass:"singer-img",attrs:{src:this.singerPic,alt:"歌手头像"}})]),e("div",{staticClass:"singer-body"},[e("singer-content",{attrs:{playList:t.playList},on:{listen:t.playMusic,playAll:t.playAll}})],1)])},a=[],n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"singer-content"},[i("div",{staticClass:"content-head"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-yinzhi"}})]),i("div",{staticClass:"play-all",on:{click:function(s){return t.playAllSong(t.playList)}}},[t._v("\n\t\t\t播放全部\n\t\t\t"),i("span",{staticClass:"song-num"},[t._v("(共"+t._s(t.playList.length)+"首)")])])]),t._l(t.playList,function(s,e){return i("div",{key:e,staticClass:"song",on:{click:function(s){return t.listenMusic(t.playList,e)}}},[i("div",{staticClass:"index"},[t._v(t._s(e+1))]),i("div",{staticClass:"song-body"},[i("span",{staticClass:"song-title"},[t._v("\n\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t"),s.rtUrl?i("span",{staticClass:"rtUrl"},[t._v(t._s(s.rtUrls))]):t._e()]),i("span",{staticClass:"author-and-cover"},[t._l(s.ar,function(s,e){return i("span",{key:e,staticClass:"ar"},[t._v("\n\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t")])}),i("span",{staticClass:"separator"},[t._v("-")]),i("span",{staticClass:"cover"},[t._v(t._s(s.al.name))]),1==s.fee||16==s.fee?i("span",{staticClass:"vip"},[t._v("Vip")]):t._e(),4==s.fee?i("span",{staticClass:"vip"},[t._v("需购专辑")]):t._e()],2)])])})],2)},l=[],r={name:"SongContent",props:{playList:Array},methods:{listenMusic:function(t,s){0==t[s].privilege.st&&1!=t[s].privilege.fee&&4!=t[s].privilege.fee&&16!=t[s].privilege.fee?this.$emit("listen",{song:t,index:s}):0!=t[s].privilege.st||1!=t[s].privilege.fee&&16!=t[s].privilege.fee||1!=t[s].privilege.payed?0!=t[s].privilege.st||1!=t[s].privilege.fee&&16!=t[s].privilege.fee||0!=t[s].privilege.payed?4==t[s].fee?alert("需要购买专辑"):alert("没有版权"):alert("需要Vip"):this.$emit("listen",{song:t,index:s})},playAllSong:function(t){this.$emit("playAll",t)}}},c=r,o=(i("8ca3"),i("2877")),p=Object(o["a"])(c,n,l,!1,null,"429ab697",null),u=p.exports,v=i("a723"),g={name:"Singer",data:function(){return{singerPic:"",playList:[]}},components:{SingerContent:u},methods:{routerBack:function(){this.$router.go(-1)},playMusic:function(t){var s=t.song,i=t.index;this.$store.dispatch("playMusic",{song:s,index:i})},playAll:function(t){this.$store.dispatch("playAllMusic",t)}},activated:function(){var t=this;Object(v["b"])({id:this.$route.params.id}).then(function(s){t.singerPic=s.artist.picUrl,t.playList=s.hotSongs})}},d=g,f=(i("2ad2"),Object(o["a"])(d,e,a,!1,null,"e2041c72",null));s["default"]=f.exports},"8ca3":function(t,s,i){"use strict";var e=i("a1e2"),a=i.n(e);a.a},a1e2:function(t,s,i){},b863:function(t,s,i){}}]);