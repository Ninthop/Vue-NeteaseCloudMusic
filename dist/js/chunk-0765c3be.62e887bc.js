(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0765c3be"],{"0fa4":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"song-content"},[i("div",{staticClass:"content-head"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-yinzhi"}})]),i("div",{staticClass:"play-all",on:{click:function(e){return t.playAllSong(t.playList)}}},[t._v("\n\t\t\t播放全部\n\t\t\t"),i("span",{staticClass:"song-num"},[t._v("(共"+t._s(t.trackCount)+"首)")])])]),i("virtual-list",{staticClass:"songWrapper",attrs:{size:40,remain:20}},[t._l(t.playList,function(t,e){return i("div",{key:e,staticClass:"song"},[i("song",{attrs:{songDetial:t,songRtUrl:t.rtUrls,index:e,artists:t.ar,album:t.al}})],1)}),i("div",{style:{width:"100%",height:"5vh"}})],2)],1)},n=[],a=(i("c5f6"),i("d213")),r=i("89c1"),o=i.n(r),l={name:"SongContent",props:{playList:Array,trackCount:Number},components:{Song:a["a"],virtualList:o.a},methods:{playAllSong:function(t){this.$emit("playAll",t)}}},c=l,h=(i("2528"),i("2877")),d=Object(h["a"])(c,s,n,!1,null,"3b2df419",null);e["a"]=d.exports},2528:function(t,e,i){"use strict";var s=i("9fc0"),n=i.n(s);n.a},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},7329:function(t,e,i){"use strict";var s=i("b22b"),n=i.n(s);n.a},"89c1":function(t,e,i){(function(t){var s,n,a;function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}(function(o,l){var c="VirtualList";"object"===r(e)&&"object"===r(t)?t.exports=l(c,i("2b0e")):(n=[i("2b0e")],s=l.bind(o,c),a="function"===typeof s?s.apply(e,n):s,void 0===a||(t.exports=a))})(this,function(t,e){"object"===r(e)&&"function"===typeof e["default"]&&(e=e["default"]);var i=function(t,e,i){var s;return function(){var n=this,a=arguments,r=function(){s=null,i||t.apply(n,a)},o=i&&!s;clearTimeout(s),s=setTimeout(r,e),o&&t.apply(n,a)}};return e.component(t,{props:{size:{type:Number,required:!0},remain:{type:Number,required:!0},rtag:{type:String,default:"div"},wtag:{type:String,default:"div"},wclass:{type:String,default:""},pagemode:{type:Boolean,default:!1},scrollelement:{type:"undefined"===typeof window?Object:HTMLElement,default:null},start:{type:Number,default:0},offset:{type:Number,default:0},variable:{type:[Function,Boolean],default:!1},bench:{type:Number,default:0},debounce:{type:Number,default:0},totop:{type:[Function,Boolean],default:!1},tobottom:{type:[Function,Boolean],default:!1},onscroll:{type:[Function,Boolean],default:!1},istable:{type:Boolean,default:!1},item:{type:[Function,Object],default:null},itemcount:{type:Number,default:0},itemprops:{type:Function,default:function(){}}},watch:{size:function(){this.changeProp="size"},remain:function(){this.changeProp="remain"},bench:function(){this.changeProp="bench",this.itemModeForceRender()},start:function(){this.changeProp="start",this.itemModeForceRender()},offset:function(){this.changeProp="offset",this.itemModeForceRender()},itemcount:function(){this.changeProp="itemcount",this.itemModeForceRender()},scrollelement:function(t,e){this.pagemode||(e&&this.removeScrollListener(e),t&&this.addScrollListener(t))}},created:function(){var t=this.start>=this.remain?this.start:0,e=this.remain+(this.bench||this.remain),i=Object.create(null);i.direction="",i.scrollTop=0,i.start=t,i.end=t+e-1,i.keeps=e,i.total=0,i.offsetAll=0,i.paddingTop=0,i.paddingBottom=0,i.varCache={},i.varAverSize=0,i.varLastCalcIndex=0,this.delta=i},mounted:function(){if(this.pagemode?this.addScrollListener(window):this.scrollelement&&this.addScrollListener(this.scrollelement),this.start){var t=this.getZone(this.start).start;this.setScrollTop(this.variable?this.getVarOffset(t):t*this.size)}else this.offset&&this.setScrollTop(this.offset)},beforeDestroy:function(){this.pagemode?this.removeScrollListener(window):this.scrollelement&&this.removeScrollListener(this.scrollelement)},beforeUpdate:function(){var t=this.delta;t.keeps=this.remain+(this.bench||this.remain);var e="start"===this.changeProp?this.start:t.start,i=this.getZone(e);if(this.changeProp&&["start","size","offset"].includes(this.changeProp)){var s="offset"===this.changeProp?this.offset:this.variable?this.getVarOffset(i.isLast?t.total:i.start):i.isLast&&t.total-e<=this.remain?t.total*this.size:e*this.size;this.$nextTick(this.setScrollTop.bind(this,s))}(this.changeProp||t.end!==i.end||e!==i.start)&&(this.changeProp="",t.end=i.end,t.start=i.start,this.forceRender())},methods:{addScrollListener:function(t){this.scrollHandler=this.debounce?i(this.onScroll.bind(this),this.debounce):this.onScroll,t.addEventListener("scroll",this.scrollHandler,!1)},removeScrollListener:function(t){t.removeEventListener("scroll",this.scrollHandler,!1)},onScroll:function(t){var e,i=this.delta,s=this.$refs.vsl;if(this.pagemode){var n=this.$el.getBoundingClientRect();e=-n.top}else if(this.scrollelement){var a=this.scrollelement.getBoundingClientRect(),r=this.$el.getBoundingClientRect();e=a.top-r.top}else e=(s.$el||s).scrollTop||0;i.direction=e>i.scrollTop?"D":"U",i.scrollTop=e,i.total>i.keeps?this.updateZone(e):i.end=i.total-1;var o=i.offsetAll;if(this.onscroll){var l=Object.create(null);l.offset=e,l.offsetAll=o,l.start=i.start,l.end=i.end,this.onscroll(t,l)}!e&&i.total&&this.fireEvent("totop"),e>=o&&this.fireEvent("tobottom")},updateZone:function(t){var e=this.delta,i=this.variable?this.getVarOvers(t):Math.floor(t/this.size);"U"===e.direction&&(i=i-this.remain+1);var s=this.getZone(i),n=this.bench||this.remain,a=1===Math.abs(i-e.start-n);!a&&i-e.start<=n&&!s.isLast&&i>e.start||(a||s.start!==e.start||s.end!==e.end)&&(e.end=s.end,e.start=s.start,this.forceRender())},getZone:function(t){var e,i=this.delta;t=parseInt(t,10),t=Math.max(0,t);var s=i.total-i.keeps,n=t<=i.total&&t>=s||t>i.total;return e=n?Math.max(0,s):t,{end:e+i.keeps-1,start:e,isLast:n}},forceRender:function(){var t=this;window.requestAnimationFrame(function(){t.$forceUpdate()})},itemModeForceRender:function(){this.item&&this.forceRender()},getVarOvers:function(t){var e=0,i=0,s=0,n=this.delta,a=n.total;while(e<=a){if(i=e+Math.floor((a-e)/2),s=this.getVarOffset(i),n.varAverSize||(n.varAverSize=Math.floor(s/i)),s===t)return i;s<t?e=i+1:s>t&&(a=i-1)}return e>0?--e:0},getVarOffset:function(t,e){var i=this.delta,s=i.varCache[t];if(!e&&s)return s.offset;for(var n=0,a=0;a<t;a++){var r=this.getVarSize(a,e);i.varCache[a]={size:r,offset:n},n+=r}return i.varLastCalcIndex=Math.max(i.varLastCalcIndex,t-1),i.varLastCalcIndex=Math.min(i.varLastCalcIndex,i.total-1),n},getVarSize:function(t,e){var i=this.delta.varCache[t];if(!e&&i)return i.size;if("function"===typeof this.variable)return this.variable(t)||0;var s=this.item?this.$children[t]?this.$children[t].$vnode:null:this.$slots["default"][t],n=s&&s.data&&s.data.style;if(n&&n.height){var a=n.height.match(/^(.*)px$/);return a&&+a[1]||0}return 0},getVarPaddingTop:function(){return this.getVarOffset(this.delta.start)},getVarPaddingBottom:function(){var t=this.delta,e=t.total-1;return t.total-t.end<=t.keeps||t.varLastCalcIndex===e?this.getVarOffset(e)-this.getVarOffset(t.end):(t.total-t.end)*(t.varAverSize||this.size)},getVarAllHeight:function(){var t=this.delta;return t.total-t.end<=t.keeps||t.varLastCalcIndex===t.total-1?this.getVarOffset(t.total):this.getVarOffset(t.start)+(t.total-t.end)*(t.varAverSize||this.size)},updateVariable:function(t){this.getVarOffset(t,!0)},fireEvent:function(t){this[t]&&this[t]()},setScrollTop:function(t){if(this.pagemode)window.scrollTo(0,t);else if(this.scrollelement)this.scrollelement.scrollTo(0,t);else{var e=this.$refs.vsl;e&&((e.$el||e).scrollTop=t)}},filter:function(t){var e,i,s,n=this.delta,a=this.$slots["default"]||[];this.item||this.$scopedSlots.item?(n.total=this.itemcount,n.keeps>n.total&&(n.end=n.total-1)):(a.length||(n.start=0),n.total=a.length);var r=n.total>n.keeps;this.variable?(s=this.getVarAllHeight(),e=r?this.getVarPaddingTop():0,i=r?this.getVarPaddingBottom():0):(s=this.size*n.total,e=this.size*(r?n.start:0),i=this.size*(r?n.total-n.keeps:0)-e),i<this.size&&(i=0),n.paddingTop=e,n.paddingBottom=i,n.offsetAll=s-this.size*this.remain;for(var o=[],l=n.start;l<n.total&&l<=Math.ceil(n.end);l++){var c=null;c=this.$scopedSlots.item?this.$scopedSlots.item(l):this.item?t(this.item,this.itemprops(l)):a[l],o.push(c)}return o}},render:function(t){var e=this.debounce,s=this.filter(t),n=this.delta,a=n.paddingTop,r=n.paddingBottom,o=this.istable,l=o?"div":this.wtag,c=o?"div":this.rtag;o&&(s=[t("table",[t("tbody",s)])]);var h=t(l,{style:{display:"block","padding-top":a+"px","padding-bottom":r+"px"},class:this.wclass,attrs:{role:"group"}},s);return this.pagemode||this.scrollelement?h:t(c,{ref:"vsl",style:{display:"block","overflow-y":this.size>=this.remain?"auto":"inital",height:this.size*this.remain+"px"},on:{"&scroll":e?i(this.onScroll.bind(this),e):this.onScroll}},[h])}})})}).call(this,i("62e4")(t))},"9fc0":function(t,e,i){},b22b:function(t,e,i){},d213:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"singleSong",on:{click:function(e){return t.listenMusic(t.songDetial,t.songDetial.id)}}},[i("div",{staticClass:"index"},[t._v(t._s(t.index+1))]),i("div",{staticClass:"song-body"},[i("span",{staticClass:"song-title"},[t._v("\n\t\t\t"+t._s(t.songDetial.name)+"\n\t\t\t"),t.songRtUrl&&0!=t.songRtUrl.length?i("span",{staticClass:"rtUrl"},[t._v(t._s(t.songRtUrl))]):t._e()]),i("span",{staticClass:"author-and-cover"},[t._l(t.artists,function(e,s){return i("span",{key:s,staticClass:"ar"},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")])}),i("span",{staticClass:"separator"},[t._v("-")]),i("span",{staticClass:"cover"},[t._v(t._s(t.album.name))])],2)]),i("div",{staticClass:"vipAndAlbum"},[1==t.songDetial.fee||16==t.songDetial.fee?i("span",{staticClass:"vip"},[t._v("VIP")]):t._e(),4==t.songDetial.fee?i("span",{staticClass:"vip"},[t._v("需购专辑")]):t._e()])])},n=[],a=(i("c5f6"),i("a723")),r={name:"SongList",props:{index:{type:Number},songDetial:{type:Object},songRtUrl:{type:Array},artists:{type:Array,default:[]},album:{type:Object,default:{}}},methods:{listenMusic:function(t,e){var i=this;Object(a["e"])({ids:e}).then(function(e){0==e.privileges[0].st&&1!=e.privileges[0].fee&&4!=e.privileges[0].fee&&16!=e.privileges[0].fee?i.$store.dispatch("playSingleMusic",t):0!=e.privileges[0].st||1!=e.privileges[0].fee&&16!=e.privileges[0].fee||1!=e.privileges[0].payed?0!=e.privileges[0].st||1!=e.privileges[0].fee&&16!=e.privileges[0].fee||0!=e.privileges[0].payed?4==e.privileges[0].fee?alert("需要购买专辑"):alert("没有版权"):alert("需要Vip"):i.$store.dispatch("playSingleMusic",t)})}}},o=r,l=(i("7329"),i("2877")),c=Object(l["a"])(o,s,n,!1,null,"43cf6cd6",null);e["a"]=c.exports}}]);