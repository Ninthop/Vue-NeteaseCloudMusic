(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbdf8fae"],{"0960":function(t,e,s){},"1f29":function(t,e,s){},"2d3b":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-head"},[r("span",{staticClass:"back"},[r("img",{staticClass:"search-back",attrs:{src:s("ed13"),alt:"返回图标"},on:{click:t.routerBack}})]),r("span",{staticClass:"search-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWords,expression:"keyWords"}],attrs:{type:"text",placeholder:"请输入关键词..."},domProps:{value:t.keyWords},on:{focus:t.adviceAppear,blur:t.adviceDisappear,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postKeywords(e)},input:function(e){e.target.composing||(t.keyWords=e.target.value)}}}),r("fade",[r("div",{directives:[{name:"show",rawName:"v-show",value:this.keyWords&&t.show,expression:"this.keyWords && show"}],staticClass:"search-advice"},[this.searchAdvice.keyword?r("span",{staticClass:"default-search none"},[t._v(t._s(this.searchAdvice.keyword))]):r("span",{staticClass:"default-search",on:{click:function(e){return t.adviceClick(t.keyWords)}}},[t._v("搜索“"+t._s(t.keyWords)+"”")]),t._l(this.searchAdvice,function(e,s){return r("span",{key:s,on:{click:function(s){return t.adviceClick(e.keyword)}}},[t._v(t._s(e.keyword))])})],2)])],1),r("span",{staticClass:"post-keyword"},[r("button",{on:{click:t.postKeywords}},[t._v("搜索")])])]),r("rec-search",{staticClass:"hot-search",on:{setKey:t.changeKey}}),this.resultShow?r("div",{staticClass:"result"},[r("list-tab"),r("list",{on:{listen:t.playMusic}})],1):t._e()],1)},i=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),c=(s("b482"),s("bc3a"),s("edb0")),n=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommand-search"},[s("div",{staticClass:"title"},[t._v("热门搜索")]),s("div",{staticClass:"hots"},t._l(this.hotSearch,function(e,r){return s("span",{key:r,on:{click:function(s){return t.changeKeywords(e.first)}}},[t._v("\n\t\t\t"+t._s(e.first)+"\n\t\t")])}),0)])},l=[];function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,r)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var d={name:"RecSearch",computed:p({},Object(n["b"])(["hotSearch"])),methods:{changeKeywords:function(t){this.$emit("setKey",t)}},mounted:function(){this.$store.dispatch("getHotRearch")}},f=d,h=(s("8fc6"),s("2877")),y=Object(h["a"])(f,o,l,!1,null,"71699702",null),v=y.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-tab"},[s("ul",{staticClass:"tab"},t._l(t.tab,function(e){return s("li",{key:e.id,staticClass:"every-tab",class:{current:t.searchType==e.id},on:{click:function(s){return t.setId(e.id)}}},[t._v(t._s(e.name))])}),0)])},m=[];function O(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,r)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?O(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):O(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var _={name:"SearchTab",data:function(){return{tab:[{name:"单曲",id:1},{name:"歌手",id:100},{name:"歌单",id:1e3}]}},methods:{setId:function(t){this.$store.commit("setSearchType",t),this.$store.dispatch("getSearchResultType",t)}},computed:g({},Object(n["b"])(["searchType"]))},k=_,w=(s("58c7"),Object(h["a"])(k,b,m,!1,null,"3402a6da",null)),j=w.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"base-list"},[1==t.searchType?s("div",t._l(t.searchResult.songs,function(e,r){return s("div",{key:e.id,staticClass:"song",on:{click:function(s){return t.listenMusic(t.searchResult.songs[r],e.id)}}},[s("div",{staticClass:"index"},[t._v(t._s(r+1))]),s("div",{staticClass:"song-body"},[s("span",{staticClass:"song-title"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]),s("span",{staticClass:"author-and-cover"},[t._l(e.artists,function(r,i){return s("span",{key:i,staticClass:"ar"},[t._v("\n\t\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t\t"),e.rtUrl?s("span",{staticClass:"rtUrl"},[t._v(t._s(e.rtUrls))]):t._e()])}),s("span",{staticClass:"separator"},[t._v("-")]),s("span",{staticClass:"cover"},[t._v(t._s(e.album.name))]),1==e.fee||16==e.fee?s("span",{staticClass:"vip"},[t._v("Vip")]):t._e(),4==e.fee?s("span",{staticClass:"vip"},[t._v("需购专辑")]):t._e()],2)])])}),0):t._e(),100==t.searchType?s("div",t._l(t.searchResult.artists,function(e,r){return s("router-link",{key:r,staticClass:"artist",attrs:{to:"/singer/"+e.id,tag:"div"}},[s("div",{staticClass:"artist-body"},[s("img",{staticClass:"cover-img",attrs:{src:t._f("formatPic")(e.img1v1Url),alt:"歌单封面"}}),s("span",{staticClass:"artist-name"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])])])}),1):t._e(),1e3==t.searchType?s("div",t._l(t.searchResult.playlists,function(e,r){return s("router-link",{key:r,staticClass:"playlist",attrs:{to:"/list/"+e.id,tag:"div"}},[s("div",{staticClass:"playlist-body"},[s("div",[s("img",{staticClass:"cover-img",attrs:{src:t._f("formatPic")(e.coverImgUrl),alt:"歌单封面"}})]),s("div",{staticClass:"playlist-title"},[s("span",{staticClass:"playlist-name"},[t._v("\n\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t")]),e.creator?s("span",{staticClass:"playlist-ar"},[s("span",[t._v(t._s(e.trackCount)+"首")]),s("span",{staticClass:"ar"},[t._v("\n\t\t\t\t\t\t\tBy "+t._s(e.creator.nickname)+"\n\t\t\t\t\t\t")])]):t._e()])])])}),1):t._e()])},P=[],S=s("a723");function $(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,r)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?$(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):$(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var W={name:"List",methods:{listenMusic:function(t,e){var s=this;Object(S["d"])({ids:e}).then(function(e){0==e.privileges[0].st&&1!=e.privileges[0].fee&&4!=e.privileges[0].fee&&16!=e.privileges[0].fee?s.$emit("listen",t):0!=e.privileges[0].st||1!=e.privileges[0].fee&&16!=e.privileges[0].fee||1!=e.privileges[0].payed?0!=e.privileges[0].st||1!=e.privileges[0].fee&&16!=e.privileges[0].fee||0!=e.privileges[0].payed?4==e.privileges[0].fee?alert("需要购买专辑"):alert("没有版权"):alert("需要Vip"):s.$emit("listen",t)})}},computed:D({},Object(n["c"])(["searchResult","searchType"]))},K=W,E=(s("8c04"),Object(h["a"])(K,C,P,!1,null,"679af82a",null)),R=E.exports;function T(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,r)}return s}function x(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?T(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):T(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var A={name:"Search",data:function(){return{show:!1}},components:{Fade:c["a"],RecSearch:v,List:R,ListTab:j},methods:{routerBack:function(){this.$router.go(-1),this.$store.commit("setKeyWords",""),this.$store.commit("setResultShow",!1)},postKeywords:function(){this.keyWords&&(this.$store.dispatch("getSearchResultType",this.keyWords),this.$store.commit("setResultShow",!0),this.adviceDisappear())},changeKey:function(t){this.$store.commit("setKeyWords",t),this.postKeywords()},adviceAppear:function(){this.show=!0},adviceDisappear:function(){this.show=!1},playMusic:function(t){this.$store.dispatch("playSingleMusic",t)},adviceClick:function(t){this.$store.commit("setKeyWords",t),this.postKeywords()}},computed:x({},Object(n["b"])(["searchAdvice","resultShow","keyWords","searchType"]),{keyWords:{get:function(){return this.$store.state.keyWords},set:function(t){this.$store.commit("setKeyWords",t)}}}),watch:{keyWords:function(t){t&&this.$store.dispatch("getAdvice",t)}}},M=A,U=(s("ffc4"),Object(h["a"])(M,r,i,!1,null,"b6f7f890",null));e["default"]=U.exports},"52e0":function(t,e,s){},"58c7":function(t,e,s){"use strict";var r=s("0960"),i=s.n(r);i.a},"8c04":function(t,e,s){"use strict";var r=s("1f29"),i=s.n(r);i.a},"8fc6":function(t,e,s){"use strict";var r=s("d6b7"),i=s.n(r);i.a},d6b7:function(t,e,s){},ffc4:function(t,e,s){"use strict";var r=s("52e0"),i=s.n(r);i.a}}]);