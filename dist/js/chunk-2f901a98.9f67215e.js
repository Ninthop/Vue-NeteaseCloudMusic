(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f901a98"],{1926:function(t,i,s){"use strict";var a=s("1a15"),n=s.n(a);n.a},"1a15":function(t,i,s){},"2faa":function(t,i,s){},"7e0c":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home-find"},[s("find-banner",{attrs:{bannerList:t.list}}),s("find-icon"),s("find-rec",{staticClass:"findRec",attrs:{recList:t.recList}}),s("find-album",{attrs:{albumList:t.albumList}})],1)},n=[],e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"wrapper"},[t.bannerList.length>1?s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.bannerList,function(t){return s("swiper-slide",{key:t.bannerId},[s("img",{staticClass:"banner-image",attrs:{src:t.pic,alt:"轮播图"}})])}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},r=[],c={name:"FindBanner",props:{bannerList:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:!0,observer:!0,observeParents:!0}}}},l=c,u=(s("a967"),s("2877")),o=Object(u["a"])(l,e,r,!1,null,"33b1ae6c",null),d=o.exports,m=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"find-icon"},[s("router-link",{staticClass:"everyday-rec",attrs:{to:"/everydaysong",tag:"span"}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-bianjigedanxinxi"}})]),s("div",{staticClass:"icon-text"},[t._v("每日推荐")])]),s("span",{staticClass:"private-fM"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-xiangsituijian"}})]),s("div",{staticClass:"icon-text"},[t._v("私人FM")])]),s("router-link",{staticClass:"radios",attrs:{to:"/newsong",tag:"span"}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-zhuanji"}})]),s("div",{staticClass:"icon-text"},[t._v("新歌速递")])])],1)},f=[],p={},v=p,h=(s("1926"),Object(u["a"])(v,m,f,!1,null,"7874d296",null)),g=h.exports,C=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"find-rec"},[s("div",{staticClass:"title"},[s("span",{staticClass:"rec"},[t._v("推荐歌单")]),s("span",{staticClass:"list-square",on:{click:t.changeNum}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-SanMiAppiconfill"}})]),t._v("\n\t\t\t换一换\n\t\t")])]),t.recList[0]?s("div",{staticClass:"content"},[s("router-link",{staticClass:"item",attrs:{to:"/list/"+t.recList[0].id,tag:"span"}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t._f("formatPic")(t.recList[0].picUrl),alt:"歌单封面"}})]),s("div",{staticClass:"item-title"},[t._v(t._s(t.recList[0].name))])]),t._l(t.sixRecList,function(i){return s("router-link",{key:i.id,staticClass:"item",attrs:{tag:"span",to:"/list/"+i.id}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t._f("formatPic")(i.picUrl),alt:"歌单封面"}})]),s("div",{staticClass:"item-title"},[t._v(t._s(i.name))])])})],2):t._e()])},b=[],_={name:"FindRecommand",props:{recList:{type:Array}},data:function(){return{startNum:1,endNum:6}},computed:{sixRecList:function(){return this.recList.slice(this.startNum,this.endNum)}},methods:{changeNum:function(){if(this.startNum<11)return this.startNum+=5,void(this.endNum+=5);this.startNum=1,this.endNum=6}}},L=_,N=(s("8677"),Object(u["a"])(L,C,b,!1,null,"380a5947",null)),x=N.exports,k=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"find-album"},[s("div",{staticClass:"title"},[s("span",{staticClass:"new-album"},[t._v("新碟")]),s("span",{staticClass:"more-album",on:{click:t.changeNum}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-SanMiAppiconfill"}})]),t._v("\n\t\t\t换一换\n\t\t")])]),s("div",{staticClass:"content"},t._l(t.sixRecList,function(i,a){return s("span",{key:i.id,staticClass:"item",on:{click:function(i){return t.play(t.sixRecList[a])}}},[s("img",{attrs:{src:t._f("formatPic")(i.picUrl),alt:"歌单封面"}}),s("div",{staticClass:"item-title"},[t._v(t._s(i.name))]),s("div",{staticClass:"author"},[t._v(t._s(i.artist.name))])])}),0)])},w=[],y={name:"FindAlbum",props:{albumList:Array},data:function(){return{startNum:0,endNum:6}},computed:{sixRecList:function(){return this.albumList.slice(this.startNum,this.endNum)}},methods:{play:function(t){this.$store.dispatch("getAlbumSong",t.id)},changeNum:function(){if(this.startNum<6)return this.startNum+=6,void(this.endNum+=6);this.startNum=0,this.endNum=6}}},R=y,F=(s("ec2e"),Object(u["a"])(R,k,w,!1,null,"72e83418",null)),j=F.exports,A=s("8718"),O=new Date,$={name:"HomeFind",data:function(){return{list:[],recList:[],albumList:[]}},components:{FindBanner:d,FindIcon:g,FindAlbum:j,FindRec:x},methods:{getRec:function(){var t=this,i=this.$store.state.loginType;1==i?(console.log("已登陆"),A["e"]({timestamp:O.getTime()}).then(function(i){t.recList=i.recommend})):(console.log("未登陆"),A["g"]({limit:16}).then(function(i){t.recList=i.result}))}},mounted:function(){var t=this;A["c"]({type:1}).then(function(i){t.list=i.banners}),A["a"]().then(function(i){t.albumList=i.albums})},activated:function(){this.getRec()}},E=$,M=(s("e8f9"),Object(u["a"])(E,a,n,!1,null,"71c630a9",null));i["default"]=M.exports},8677:function(t,i,s){"use strict";var a=s("e6ea"),n=s.n(a);n.a},a967:function(t,i,s){"use strict";var a=s("dadd"),n=s.n(a);n.a},c2f7:function(t,i,s){},dadd:function(t,i,s){},e6ea:function(t,i,s){},e8f9:function(t,i,s){"use strict";var a=s("c2f7"),n=s.n(a);n.a},ec2e:function(t,i,s){"use strict";var a=s("2faa"),n=s.n(a);n.a}}]);