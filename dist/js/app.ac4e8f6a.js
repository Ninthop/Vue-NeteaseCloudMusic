(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],l=0,h=[];l<c.length;l++)s=c[l],i[s]&&h.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);f&&f(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},i={app:0},a=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0c6b8717":"1beabcf5","chunk-1646b51e":"d521573c","chunk-2752b242":"d822048d","chunk-2d0b30b7":"d1ade91d","chunk-4a0d5250":"18003c36","chunk-6c33cefa":"5e8a4142","chunk-70628958":"09b506de","chunk-70800614":"3d7d67af","chunk-79ba070f":"bffd2da9","chunk-80887628":"7a4c1941","chunk-a66b52d4":"5d22e305","chunk-f3e57e9c":"dcb05ab9"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-0c6b8717":1,"chunk-1646b51e":1,"chunk-2752b242":1,"chunk-4a0d5250":1,"chunk-6c33cefa":1,"chunk-70628958":1,"chunk-70800614":1,"chunk-79ba070f":1,"chunk-80887628":1,"chunk-a66b52d4":1,"chunk-f3e57e9c":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0c6b8717":"9d9a31e3","chunk-1646b51e":"077a975b","chunk-2752b242":"4c36fb09","chunk-2d0b30b7":"31d6cfe0","chunk-4a0d5250":"e4b91a9d","chunk-6c33cefa":"45af5266","chunk-70628958":"e4b91a9d","chunk-70800614":"c2f94a72","chunk-79ba070f":"84a89b2d","chunk-80887628":"19b67178","chunk-a66b52d4":"0f50cadd","chunk-f3e57e9c":"69cb6542"}[t]+".css",i=o.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[t],f.parentNode.removeChild(f),n(a)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){s[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t),u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}i[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c38":function(t,e,n){"use strict";var r=n("123d"),s=n.n(r);s.a},"123d":function(t,e,n){},"1e04":function(t,e,n){"use strict";n("a481");var r=n("bc3a"),s=n.n(r),i=n("f1ed"),a=n("5d8b"),c=n("4360"),o=n("a18c"),u=function(t){alert("连接错误，请重新连接或登陆"),console.log(t.response.data),"需要登录"==t.response.data.msg&&Object(a["b"])().then(function(){c["a"].dispatch("logout"),o["a"].replace("/")})},l=s.a.create({baseURL:"http://47.102.127.79:80",timeout:1e4,withCredentials:!0});l.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.interceptors.request.use(function(t){return i["c"](),t},function(t){i["a"](),u(),Promise.reject(t)}),l.interceptors.response.use(function(t){return i["a"](),t.data},function(t){i["a"](),u(t),Promise.reject(t)}),e["a"]=l},"2ce4":function(t,e,n){},"2f3e":function(t,e,n){},4360:function(t,e,n){"use strict";var r=n("2b0e"),s=n("2f62"),i=n("d441"),a={uid:localStorage.uid||{},userInfo:localStorage.userInfo||{},loginType:localStorage.loginType||0,playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:i["a"].sequence,currentIndex:-1,songUrl:"",show:!0,playlistIsShown:!1,recentPlay:[],searchAdvice:{},hotSearch:{},searchResult:{},searchType:1,resultShow:!1,keyWords:"",everydaySong:[]},c=a,o=n("5d8b"),u=n("a723"),l=n("8718"),h=n("b482"),f=n("bc3a"),d=n.n(f),p={changeUserInfo:function(t){var e=t.commit,n=t.rootState;Object(o["a"])({uid:n.uid}).then(function(t){e("changeUserInfo",t),console.log(t)})},getAdvice:function(t,e){var n=t.commit;d()({method:"get",url:"http://47.102.127.79:80/search/suggest",params:{keywords:e,type:"mobile",timestamp:(new Date).getTime()}}).then(function(t){var r={};r=t.data.msg||!t.data.result.allMatch?{keyword:'暂未搜索到与"'.concat(e,'"相关的内容')}:t.data.result.allMatch,n("setAdvice",r)}).catch(function(t){alert("连接错误，请重新连接或检查网络")})},getHotRearch:function(t){var e=t.commit;Object(h["a"])().then(function(t){e("setHotSearch",t.result.hots)})},login:function(t,e){var n=t.commit,r=t.dispatch;console.log(e),n("changeLoginStatus",e.loginType),n("changeUid",e.account.id),r("changeUserInfo")},logout:function(t){var e=t.commit,n=0;e("changeLoginStatus",n),e("changeUid",{}),e("changeUserInfo",{})},playMusic:function(t,e){var n=t.commit,r=e.song,s=e.index;n("setSequenceList",r),n("setPlaylist",r),n("setCurrentIndex",s),n("setFullScreen",!0),n("setPlayingStatus",!0)},getAlbumSong:function(t,e){var n=t.commit;Object(l["b"])({id:e}).then(function(t){n("setSequenceList",t.songs),n("setPlaylist",t.songs),n("setCurrentIndex",0),n("setFullScreen",!0),n("setPlayingStatus",!0),console.log(t.songs)})},playAllMusic:function(t,e){var n=t.commit;n("setSequenceList",e),n("setPlaylist",e),n("setCurrentIndex",0),n("setFullScreen",!0),n("setPlayingStatus",!0),n("setMode",i["a"].sequence)},getSearchResultType:function(t){var e=t.commit,n=t.rootState;Object(h["b"])({keywords:n.keyWords,type:n.searchType}).then(function(t){e("setSearchResult",t.result)})},playSingleMusic:function(t,e){var n=t.commit,r=t.rootState;Object(u["d"])({ids:e.id}).then(function(t){n("setSequenceList",e),n("addPlaylist",t.songs[0]),n("setCurrentIndex",r.playlist.length-1),n("setFullScreen",!0),n("setPlayingStatus",!0)})},getEverydaySong:function(t){var e=t.commit;Object(l["d"])().then(function(t){e("setEverydaySong",t.recommend)})}},g=p,m={playing:function(t){return t.playing},fullScreen:function(t){return t.fullScreen},playlist:function(t){return t.playlist},sequenceList:function(t){return t.sequenceList},mode:function(t){return t.mode},currentIndex:function(t){return t.currentIndex},songUrl:function(t){return t.songUrl},show:function(t){return t.show},playlistIsShown:function(t){return t.playlistIsShown},recentPlay:function(t){return t.recentPlay},searchAdvice:function(t){return t.searchAdvice},hotSearch:function(t){return t.hotSearch},searchResult:function(t){return t.searchResult},resultShow:function(t){return t.resultShow},searchType:function(t){return t.searchType},keyWords:function(t){return t.keyWords},everydaySong:function(t){return t.everydaySong},currentSong:function(t){return t.playlist[t.currentIndex]||{}}},y=m,v={changeLoginStatus:function(t,e){t.loginType=e;try{localStorage.loginType=e}catch(n){}},changeUid:function(t,e){t.uid=e;try{localStorage.uid=e}catch(n){}},changeUserInfo:function(t,e){t.userInfo=e;try{localStorage.userInfo=e}catch(n){}},setPlayingStatus:function(t,e){t.playing=e},setFullScreen:function(t,e){t.fullScreen=e},setPlaylist:function(t,e){t.playlist=e},addPlaylist:function(t,e){t.playlist.push(e)},addSequenceList:function(t,e){t.sequenceList.push(e)},setSequenceList:function(t,e){t.sequenceList=e},setMode:function(t,e){t.mode=e},setCurrentIndex:function(t,e){t.currentIndex=e},setSongUrl:function(t,e){t.songUrl=e},setShow:function(t,e){t.show=e},setplaylistIsShown:function(t,e){t.playlistIsShown=e},setAdvice:function(t,e){t.searchAdvice=e},setHotSearch:function(t,e){t.hotSearch=e},setSearchResult:function(t,e){t.searchResult=e},setResultShow:function(t,e){t.resultShow=e},setSearchType:function(t,e){t.searchType=e},setKeyWords:function(t,e){t.keyWords=e},addRecentPlay:function(t,e){t.recentPlay.unshift(e)},setEverydaySong:function(t,e){t.everydaySong=e}},b=v;r["default"].use(s["a"]);e["a"]=new s["a"].Store({state:c,mutations:b,actions:g,getters:y})},"46a1":function(t,e,n){},"4d71":function(t,e,n){"use strict";var r=n("cd48"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("075a"),n("450d");var r=n("72aa"),s=n.n(r),i=(n("be4f"),n("896a")),a=n.n(i),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"user, login"}},[n("router-view")],1),n("music-player")],1)},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0,expression:"playlist.length > 0"}],staticClass:"player",on:{touchmove:function(t){t.preventDefault()}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"full-player"},[t.currentSong.al?r("div",{staticClass:"bgimg-fa"},[r("div",{staticClass:"bgimg",style:{background:"linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .4), rgba(0, 0, 0, .8)), url('"+t.formatBigPic(t.currentSong.al.picUrl||t.currentSong.artist.img1v1Url)+"') no-repeat center center",filter:"blur(1rem)"}})]):t._e(),r("span",{staticClass:"header"},[r("img",{staticClass:"back",attrs:{src:n("ed13"),alt:"返回图标"},on:{click:t.routerBack}}),t.currentSong.al?r("span",{staticClass:"play-title"},[r("span",{staticClass:"song-name"},[t._v(t._s(t.currentSong.name))]),r("div",{staticClass:"all-ar"},t._l(t.currentSong.ar,function(e){return r("span",{key:e.id,staticClass:"song-ar"},[t._v("\n\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t")])}),0)]):t._e(),r("span",{staticClass:"share"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-fenxiang"}})])])]),r("div",{staticClass:"middle"},[r("fade",[t.currentSong.al?r("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"this.show"}],staticClass:"player-cover",on:{click:t.changeShow}},[r("img",{staticClass:"cover-img",attrs:{src:t._f("formatPic")(t.currentSong.al.picUrl),alt:""}})]):t._e()]),r("fade",[r("div",{directives:[{name:"show",rawName:"v-show",value:!this.show,expression:"!this.show"}],staticClass:"lyric-wrapper",on:{click:t.changeShow}},[r("div",{ref:"lyriclist",staticClass:"lyric-content"},[r("div",[null==this.currentLyric?r("p",{ref:"lyricLine",staticClass:"text-none"},[t._v("没有歌词。")]):t._l(t.currentLyricLines,function(e,n){return r("p",{key:n,ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum==n}},[t._v(t._s(e.txt))])})],2)])])])],1),r("div",{staticClass:"time-wrapper"},[r("span",{staticClass:"time time-start"},[t._v(t._s(t.formatTime(t.currentTime)))]),r("div",{staticClass:"progress-bar-wrapper"},[r("progress-bar",{attrs:{percent:t.percent},on:{setPercent:t.setPer}})],1),r("span",{staticClass:"time time-end"},[t._v(t._s(t.formatAlltime(t.currentSong.dt)))])]),r("div",{staticClass:"player-bottom"},[r("span",{staticClass:"collect"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-shoucangdaogedan"}})])]),r("span",{staticClass:"pre-song",on:{click:t.preSong}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-xiayishoubofang-copy"}})])]),r("span",{staticClass:"play-status",on:{click:t.playingSong}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.playIcon}})])]),r("span",{staticClass:"next-song",on:{click:t.nextSong}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-xiayishoubofang"}})])]),r("span",{staticClass:"play-mode",on:{click:t.setMode}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.modeIcon}})])])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.openFullScreen}},[t.currentSong.al?r("div",{staticClass:"mini-cover"},[r("img",{staticClass:"mini-cover-img",attrs:{src:t._f("formatPic")(t.currentSong.al.picUrl),alt:""}})]):t._e(),null==this.currentLyric&&this.playing?r("div",{staticClass:"playing-lyric mini-info"},[r("span",{staticClass:"mini-title"},[t._v(t._s(t.currentSong.name))]),r("span",{staticClass:"mini-ar"},t._l(t.currentSong.ar,function(e){return r("span",{key:e.id,staticClass:"song-ar"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}),0)]):this.playing?r("div",{staticClass:"playing-lyric mini-info"},[r("p",[t._v(t._s(this.playingLyric))])]):r("div",{staticClass:"mini-info"},[r("span",{staticClass:"mini-title"},[t._v(t._s(t.currentSong.name))]),r("span",{staticClass:"mini-ar"},t._l(t.currentSong.ar,function(e){return r("span",{key:e.id,staticClass:"song-ar"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}),0)]),r("div",{staticClass:"mini-play"},[r("svg",{staticClass:"icon play",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.playingSong(e)}}},[r("use",{attrs:{"xlink:href":t.miniPlayIcon}})]),r("svg",{staticClass:"icon list",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.playlistShow(e)}}},[r("use",{attrs:{"xlink:href":"#icon-bianjigedanxinxi"}})])])]),r("play-list"),r("audio",{ref:"audio",attrs:{src:t.songUrl},on:{canplay:t.ready,error:t.error,timeupdate:t.Time,ended:t.end}})],1)},h=[],f=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),d=(n("20d6"),n("6b54"),n("2f62")),p=n("a723"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bar",staticClass:"progress-bar",on:{click:t.setProgress}},[n("div",{staticClass:"bar-content"},[n("div",{ref:"progress",staticClass:"progress"},[n("div",{ref:"btn",staticClass:"btn-wrapper",on:{touchstart:function(e){return e.preventDefault(),t.btnTouchStart(e)},touchmove:function(e){return e.preventDefault(),t.btnTouchMove(e)},touchend:t.btnTouchEnd}},[n("div",{staticClass:"progress-btn"})])])])])},m=[],y=(n("c5f6"),{name:"ProgressBar",props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{btnTouchStart:function(t){this.touch.flag=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},btnTouchMove:function(t){if(this.touch.flag){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.bar.clientWidth,Math.max(0,this.touch.left+e));this.setWidth(n)}},btnTouchEnd:function(t){this.touch.flag=!1,this.setPercent()},setWidth:function(t){this.$refs.progress.style.width="".concat(t,"px"),this.$refs.btn.style.transform="translateX(".concat(t,"px)")},setPercent:function(){var t=this.$refs.bar.clientWidth,e=this.$refs.progress.clientWidth/t*1;this.$emit("setPercent",e)},setProgress:function(t){this.setWidth(t.offsetX),this.setPercent()}},watch:{percent:function(t){if(!this.touch.flag&&t>=0){var e=this.$refs.bar.clientWidth,n=t*e;this.setWidth(n)}}}}),v=y,b=(n("f4c5"),n("2877")),S=Object(b["a"])(v,g,m,!1,null,"da783bb0",null),C=S.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:this.playlistIsShown,expression:"this.playlistIsShown"}],staticClass:"play-list",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"mask"}),n("div",{staticClass:"playlist-body",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"content-head"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-yinzhi"}})]),n("div",{staticClass:"play-all",on:{click:function(e){return e.stopPropagation(),t.playAllSong(t.playlist)}}},[t._v("\n\t\t\t\t播放全部\n\t\t\t\t"),n("span",{staticClass:"song-num"},[t._v("(共"+t._s(t.playlist.length)+"首)")])])]),n("div",{ref:"playlistScroll",staticClass:"playlist-wrapper"},[n("div",{staticClass:"playlist-content"},t._l(t.playlist,function(e,r){return n("div",{key:r,staticClass:"song",on:{click:function(e){return e.stopPropagation(),t.listenMusic(t.playlist,r)}}},[n("div",{staticClass:"index"},[t._v(t._s(r+1))]),n("div",{staticClass:"song-body"},[n("span",{staticClass:"song-title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t"),e.rtUrl?n("span",{staticClass:"rtUrl"},[t._v(t._s(e.rtUrls))]):t._e()]),n("span",{staticClass:"author-and-cover"},[t._l(e.ar,function(e,r){return n("span",{key:r,staticClass:"ar"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")])}),n("span",{staticClass:"separator"},[t._v("-")]),n("span",{staticClass:"cover"},[t._v(t._s(e.al.name))])],2)])])}),0)])])])},w=[],I=n("f40f"),x=n("d441");function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach(function(e){Object(f["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var L={name:"PlayList",methods:{listenMusic:function(t,e){this.$store.dispatch("playMusic",{song:t,index:e}),this.$store.commit("setplaylistIsShown",!1)},playAllSong:function(t){this.$store.dispatch("playAllMusic",t),this.$store.commit("setplaylistIsShown",!1)},refresh:function(){this.scroll&&this.scroll.refresh()}},computed:O({},Object(d["b"])(["playlist","playlistIsShown","mode","sequenceList"])),mounted:function(){this.scroll=new I["a"](this.$refs.playlistScroll,{click:!0});var t=this;document.addEventListener("click",function(e){t.$store.commit("setplaylistIsShown",!1)})},destroyed:function(){document.removeEventListener("click",function(t){that.$store.commit("setplaylistIsShown",!1)})},watch:{playlistIsShown:function(){var t=this;setTimeout(function(){t.refresh()},20)}}},j=L,T=(n("4d71"),Object(b["a"])(j,k,w,!1,null,"eac62d06",null)),A=T.exports,_=n("f1ed"),R=n("3c75"),M=n.n(R),E=n("edb0");function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach(function(e){Object(f["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var W={name:"Player",data:function(){return{songReady:!1,currentTime:0,currentLineNum:0,currentLyric:null,currentLyricLines:null,playingLyric:""}},components:{ProgressBar:C,Fade:E["a"],PlayList:A},methods:{routerBack:function(){this.$store.commit("setFullScreen",!1),this.$store.commit("setShow",!0)},openFullScreen:function(){this.$store.commit("setFullScreen",!0)},toggleStatus:function(){this.songReady&&this.$store.commit("setPlayingStatus",!this.playing)},preSong:function(){if(this.songReady){if(1==this.playlist.length)this.loop();else{var t=this.currentIndex-1;-1==t&&(t=this.playlist.length-1),this.$store.commit("setCurrentIndex",t),this.playing||this.toggleStatus()}this.songReady=!1}},nextSong:function(){if(this.songReady){if(1==this.playlist.length)this.loop();else{var t=this.currentIndex+1;t==this.playlist.length&&(t=0),this.$store.commit("setCurrentIndex",t),this.playing||this.toggleStatus()}this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){this.songReady=!0},Time:function(t){this.currentTime=t.target.currentTime},end:function(){this.mode==x["a"].loop?this.loop():this.nextSong()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.currentLyric&&this.currentLyric.seek(0)},formatTime:function(t){t|=0;var e=t/60|0,n=this.completion(t%60,2);return"".concat(e,":").concat(n)},formatAlltime:function(t){t=t/1e3|0,t|=0;var e=t/60|0,n=this.completion(t%60,2);return"".concat(e,":").concat(n)},completion:function(t,e){var n=t.toString().length;while(n<e)t="0"+t,n++;return t},formatBigPic:function(t){return t?"".concat(t,"?param=200y200"):""},setPer:function(t){this.$refs.audio.currentTime=this.currentSong.dt/1e3*t,this.playing||this.playingSong(),this.currentLyric&&this.currentLyric.seek(1e3*this.$refs.audio.currentTime)},setMode:function(){var t=(this.mode+1)%3;this.$store.commit("setMode",t);var e=null;e=t==x["a"].random?Object(_["b"])(this.sequenceList):this.sequenceList,this.$store.commit("setPlaylist",e),this.formatCurrentIndex(e)},formatCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id===e.currentSong.id});this.$store.commit("setCurrentIndex",n)},playingSong:function(){if(this.songReady){var t=this.$refs.audio,e=!this.playing;return this.$store.commit("setPlayingStatus",e),this.currentLyric&&this.currentLyric.togglePlay(),e?t.play():t.pause()}},getCurrentLyric:function(){var t=this;Object(p["a"])({id:this.currentSong.id}).then(function(e){e.nolyric?(t.currentLyric=null,t.currentLineNum=0):(t.currentLyric=new M.a(e.lrc.lyric,t.handleLyric),t.currentLyricLines=t.currentLyric.lines,t.playing&&t.currentLyric.play())})},handleLyric:function(t){var e=t.lineNum,n=t.txt;if(this.currentLineNum=e,e>4){var r=this.$refs.lyricLine[e-4];this.scrollToElement(r,1e3)}else this.scrollTo(0,0,1e3);this.playingLyric=n},changeShow:function(){this.$store.commit("setShow",!this.show)},playlistShow:function(){this.$store.commit("setplaylistIsShown",!0)},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},mounted:function(){this.scroll=new I["a"](this.$refs.lyriclist,{click:!0})},computed:U({},Object(d["b"])(["playlist","fullScreen","currentSong","songUrl","playing","currentIndex","mode","sequenceList","show"]),{playIcon:function(){return this.playing?"#icon-bofang1":"#icon-bofang"},miniPlayIcon:function(){return this.playing?"#icon-bofang-zanting":"#icon-zanting"},modeIcon:function(){return this.mode==x["a"].sequence?"#icon-mayi-shunxubofang":this.mode==x["a"].loop?"#icon-danquxunhuan":"#icon-suijibofang"},percent:function(){return this.currentTime/(this.currentSong.dt/1e3)}}),watch:{songUrl:function(){var t=this;this.currentLyric&&this.currentLyric.stop(),setTimeout(function(){t.$refs.audio.play(),t.getCurrentLyric(),t.$store.commit("setPlayingStatus",!0)},200)},currentSong:function(t){var e=this;Object(p["c"])({id:t.id}).then(function(n){e.$store.commit("setSongUrl",n.data[0].url),e.$store.commit("addRecentPlay",t)})},show:function(){var t=this;setTimeout(function(){t.refresh()},20)}}},q=W,F=(n("ea38"),Object(b["a"])(q,l,h,!1,null,"aa84c33a",null)),H=F.exports,Z={name:"app",components:{MusicPlayer:H}},D=Z,K=(n("7faf"),Object(b["a"])(D,o,u,!1,null,null,null)),z=K.exports,V=n("a18c"),X=n("4360"),B=n("fe3c"),Y=n.n(B),$=n("7212"),G=n.n($);n("7371"),n("aa47"),n("b068"),n("2f3e"),n("62ce"),n("dfa4");c["default"].config.productionTip=!1,c["default"].use(G.a),c["default"].use(a.a),c["default"].use(s.a),new c["default"]({router:V["a"],store:X["a"],fastClick:Y.a,VueAwesomeSwiper:G.a,render:function(t){return t(z)}}).$mount("#app"),V["a"].beforeEach(function(t,e,n){t.meta.logined&&(1==X["a"].state.loginType?n():n({path:"/login"})),n()}),c["default"].filter("formatPic",function(t){return t?"".concat(t,"?param=200y200"):""}),c["default"].filter("formatDate",function(t){if(t<1e5)return t;var e="".concat(data/1e4,".").concat(t/1e3%100);return e})},"5d8b":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var r=n("1e04"),s=function(t){return Object(r["a"])({url:"/user/detail",method:"get",params:t})},i=function(){return Object(r["a"])({url:"/logout",method:"get"})}},"62ce":function(t,e,n){},7371:function(t,e,n){},"7faf":function(t,e,n){"use strict";var r=n("8fba"),s=n.n(r);s.a},8718:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"g",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return u}),n.d(e,"f",function(){return l});var r=n("1e04"),s=function(t){return Object(r["a"])({url:"/banner",method:"get",params:t})},i=function(t){return Object(r["a"])({url:"/personalized",method:"get",params:t})},a=function(t){return Object(r["a"])({url:"/album/newest",method:"get",params:t})},c=function(t){return Object(r["a"])({url:"/recommend/resource",method:"get",params:t})},o=function(t){return Object(r["a"])({url:"/album",method:"get",params:t})},u=function(t){return Object(r["a"])({url:"/recommend/songs",method:"get",params:t})},l=function(t){return Object(r["a"])({url:"/top/song",method:"get",params:t})}},"8fba":function(t,e,n){},"90ce":function(t,e,n){"use strict";var r=n("46a1"),s=n.n(r);s.a},a18c:function(t,e,n){"use strict";var r=n("2b0e"),s=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("home-header"),n("keep-alive",[n("router-view")],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"user-info",attrs:{to:"/user",tag:"span"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-geshou"}})])]),n("home-tab"),n("router-link",{staticClass:"search",attrs:{to:"/search",tag:"span"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-SanMiAppiconfill-copy"}})])])],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"tab"},[n("ul",[n("li",[n("router-link",{staticClass:"tab-item",attrs:{to:"/my",tag:"span"}},[t._v("我的")])],1),n("li",[n("router-link",{staticClass:"tab-item",attrs:{to:"/find",tag:"span"}},[t._v("发现")])],1),n("li",[n("router-link",{staticClass:"tab-item",attrs:{to:"/chart",tag:"span"}},[t._v("排行榜")])],1)])])},l=[],h={name:"HomeTab"},f=h,d=(n("e46d"),n("2877")),p=Object(d["a"])(f,u,l,!1,null,"5edb5911",null),g=p.exports,m={name:"HomeHeader",components:{HomeTab:g}},y=m,v=(n("90ce"),Object(d["a"])(y,c,o,!1,null,"e18fa5cc",null)),b=v.exports,S={name:"home",components:{HomeHeader:b}},C=S,k=Object(d["a"])(C,i,a,!1,null,"5bf2ecc2",null),w=k.exports,I=[{path:"/",name:"home",component:w,redirect:"/find",children:[{path:"my",meta:{logined:!0},component:function(){return n.e("chunk-80887628").then(n.bind(null,"011e"))}},{path:"find",component:function(){return n.e("chunk-79ba070f").then(n.bind(null,"7e0c"))}},{path:"chart",component:function(){return n.e("chunk-2752b242").then(n.bind(null,"38ca"))}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-f3e57e9c").then(n.bind(null,"a55b"))}},{path:"/user",name:"user",meta:{logined:!0},component:function(){return n.e("chunk-a66b52d4").then(n.bind(null,"1511"))}},{path:"/list/:id",name:"list",component:function(){return n.e("chunk-0c6b8717").then(n.bind(null,"4c86"))}},{path:"/search/",name:"search",component:function(){return n.e("chunk-70800614").then(n.bind(null,"2d3b"))}},{path:"/singer/:id",name:"singer",component:function(){return n.e("chunk-1646b51e").then(n.bind(null,"7f43"))}},{path:"/recentsong",name:"recentsong",component:function(){return n.e("chunk-70628958").then(n.bind(null,"1a09"))}},{path:"/everydaysong",name:"everydaysong",meta:{logined:!0},component:function(){return n.e("chunk-4a0d5250").then(n.bind(null,"d67b"))}},{path:"/newsong",name:"newsong",component:function(){return n.e("chunk-6c33cefa").then(n.bind(null,"52c8"))}},{path:"/test",name:"test",component:function(){return n.e("chunk-2d0b30b7").then(n.bind(null,"2762"))}}];r["default"].use(s["a"]);e["a"]=new s["a"]({routes:I,scrollBehavior:function(t,e,n){return{x:0,y:0}}})},a723:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"b",function(){return c});var r=n("1e04"),s=function(t){return Object(r["a"])({url:"/song/url",method:"get",params:t})},i=function(t){return Object(r["a"])({url:"/lyric",method:"get",params:t})},a=function(t){return Object(r["a"])({url:"/song/detail",method:"get",params:t})},c=function(t){return Object(r["a"])({url:"/artists",method:"get",params:t})}},aa47:function(t,e,n){},b068:function(t,e,n){},b482:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return i});var r=n("1e04"),s=function(t){return Object(r["a"])({url:"/search",method:"get",params:t})},i=function(t){return Object(r["a"])({url:"/search/hot",method:"get",params:t})}},cd48:function(t,e,n){},cf59:function(t,e,n){},d441:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={sequence:0,loop:1,random:2}},e46d:function(t,e,n){"use strict";var r=n("eb66"),s=n.n(r);s.a},ea38:function(t,e,n){"use strict";var r=n("cf59"),s=n.n(r);s.a},eb66:function(t,e,n){},ed13:function(t,e){t.exports="data:image/png;base64,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"},edb0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[t._t("default")],2)},s=[],i={name:"Fade"},a=i,c=(n("0c38"),n("2877")),o=Object(c["a"])(a,r,s,!1,null,"957265b4",null);e["a"]=o.exports},f1ed:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});n("be4f"),n("450d");var r,s=n("896a"),i=n.n(s),a=function(){r=i.a.service({lock:!0,text:"加载中……",background:"rgba(0, 0, 0, 0.7)"})},c=function(){r.close()};function o(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var u=function(t){for(var e=0;e<t.length;e++){var n=o(0,e),r=t[e];t[e]=t[n],t[n]=r}return t}},f4c5:function(t,e,n){"use strict";var r=n("2ce4"),s=n.n(r);s.a}});