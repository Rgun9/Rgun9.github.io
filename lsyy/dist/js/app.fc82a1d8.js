(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},i={app:0},a={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1053e238"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"aa3c8878"}[t]+".css",a=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[t]=0})));var s=a[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("85ec"),i=n.n(s);i.a},"076e":function(t,e,n){"use strict";var s=n("113e"),i=n.n(s);i.a},"113e":function(t,e,n){},"16a2":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"song",on:{click:function(e){return t.setCurrentSongId(t.songItem.id)}}},[void 0!==t.index?n("div",{staticClass:"left"},[t._v(t._s(t.index+1))]):t._e(),n("dl",{staticClass:"center"},[n("dt",[t._v(t._s(t.songItem.name))]),t.songItem.song?n("dd",[t.songItem.song.hMusic&&t.isShowQuality?n("span",[t._v("SQ")]):t._e(),t._v(" "+t._s(t.songItem.song.artists[0].name)+"-"+t._s(t.songItem.song.album.name)+" ")]):t.songItem.h?n("dd",[t._v(" "+t._s(t.songItem.ar[0].name)+"-"+t._s(t.songItem.al.name)+" ")]):t.songItem.artists?n("dd",[t._v(t._s(t.songItem.artists[0].name)+"-"+t._s(t.songItem.album.name))]):n("dd",[t._v(" "+t._s(t.songItem.ar[0].name)+"-"+t._s(t.songItem.al.name)+" ")])]),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("span",{staticClass:"fa fa-play-circle-o"})])}],a=(n("ac1f"),n("466d"),{props:["songItem","isShowQuality","index"],data:function(){return{iflove:!1}},methods:{setCurrentSongId:function(t){window.console.log(t),this.$emit("translate-currentid",{songId:t,showFull:!!window.location.hash.match("search")})}}}),r=a,o=(n("a462"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},"1a0c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=(n("d3b7"),n("bc3a")),a=n.n(i),r={},o=a.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},s["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view",{on:{"translate-currentid":function(e){t.curentSongId=e.songId,t.showFull=e.showFull}}})],1),t.curentSongId?n("PlayView",{attrs:{"curentsong-id":t.curentSongId,"show-full":t.showFull},on:{nextPlay:function(e){t.curentSongId=e.songID},prvePlay:function(e){t.curentSongId=e.songID},"translate-currentid":function(e){t.curentSongId=e.songId}}}):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"palyview"},[s("audio",{attrs:{src:t.curentSongUrl,autoplay:"",loop:""}}),t.curentBar?[s("div",{staticClass:"play-bar"},[s("div",{on:{click:function(e){t.isShowFull=!0}}},[s("img",{class:{paused:t.isPaused},attrs:{src:t.curentBar.al.picUrl}}),s("span",{staticClass:"bb fa fa-expand"})]),s("h3",[t._v(t._s(t.curentBar.name))]),s("span",{staticClass:"progress fa fa-play",class:{"fa-pause":!t.isPaused},on:{click:function(e){return e.stopPropagation(),t.pauseAudio(e)}}},[s("canvas",{attrs:{width:"40px",height:"40px"}})])]),t.isShowFull?[s("div",{staticClass:"play-full"},[s("div",{staticClass:"fubg",style:{"background-image":"url("+t.curentBar.al.picUrl}}),s("span",{staticClass:"proo fa fa-compress",on:{click:function(e){t.isShowFull=!1,t.ifgeci=!1}}}),t.ifgeci?t._e():s("div",{staticClass:"fu-bar"},[s("img",{staticClass:"toppic",class:{issticon:t.isPaused},attrs:{src:n("dd42"),alt:""}}),s("img",{staticClass:"t",class:{paused:t.isPaused},attrs:{src:t.curentBar.al.picUrl},on:{click:function(e){t.ifgeci=!t.ifgeci}}}),s("h3",[t._v(t._s(t.curentBar.name)+" - "+t._s(t.curentBar.ar[0].name))])]),t.ifgeci?[s("div",{staticClass:"geci",class:{scrolling:t.iftouch},on:{click:function(e){e.stopPropagation(),t.ifgeci=!t.ifgeci}}},[s("h2",[t._v(t._s(t.curentBar.name))]),s("h3",{staticClass:"geli"},[t._v(t._s(t.curentBar.ar[0].name))]),s("ul",{on:{scroll:t.scroll,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},t._l(t.geci,(function(e,n){return s("li",{key:n},[t._v(t._s(e.text))])})),0)])]:t._e(),s("div",{staticClass:"kongzhiqi"},[s("span",{staticClass:"loopMod"},[s("svg",{staticClass:"icon",attrs:{t:"1592563988263",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1535",width:"32",height:"32"}},[s("path",{attrs:{d:"M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z","p-id":"1536",fill:"#ffffff"}}),s("path",{attrs:{d:"M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z","p-id":"1537",fill:"#ffffff"}})])]),s("span",{staticClass:"fa fa-step-backward",class:{hasSong:0==t.overList},on:{click:t.prvePlay}}),t.isPaused?s("span",{staticClass:"fa fa-play",on:{click:t.pauseAudio}}):s("span",{staticClass:"fa fa-stop",on:{click:t.pauseAudio}}),s("span",{staticClass:"fa fa-step-forward",on:{click:t.nextPlay}}),s("span",{staticClass:"sound",on:{click:t.showsd,mouseenter:t.soundCL}},[0!=t.sound?s("svg",{staticClass:"icon",attrs:{t:"1592554092329",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2057",width:"32",height:"32"}},[s("path",{attrs:{d:"M64 334.9v392l227.7-12.6 366.7 215V94.7L279 334.9zM738.5 324.4c-12.6-8.4-29.9-5.1-38.3 7.6-8.4 12.6-5.1 29.9 7.6 38.3 0.5 0.4 178.9 116.2 1.3 290.6-11 10.7-11.1 28.2-0.4 39.1 10.7 11 28.2 11.1 39.1 0.4 226.6-222.7-8.6-375.5-9.3-376z","p-id":"2058",fill:"#ffffff"}}),s("path",{attrs:{d:"M960 497.4l-0.1-1.9c-17.4-179.3-158.6-258.7-159-258.9-13.2-7.6-30.2-3.1-37.8 10.1-7.6 13.2-3.1 30.2 10.1 37.8 0.3 0.1 116.6 65.6 131.7 215.4 0.2 15.4 0.7 192.5-127.5 251.4-13.9 6.3-20 22.7-13.7 36.6s22.7 20 36.6 13.7C967.7 724.7 960 498 960 497.4z","p-id":"2059",fill:"#ffffff"}})]):s("svg",{staticClass:"icon",attrs:{t:"1592558295953",viewBox:"0 0 1412 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2984",width:"32",height:"32"}},[s("path",{attrs:{d:"M1139.903986 627.775992C1147.519986 593.087993 1151.999986 554.559993 1151.999986 511.999994c0-278.399997-191.999998-383.999995-191.999998-383.999995l0 78.335999c0 0 127.999998 83.263999 127.999998 305.663996 0 28.48-2.112 54.591999-5.76 78.527999L1139.903986 627.775992z","p-id":"2985",fill:"#ffffff"}}),s("path",{attrs:{d:"M959.999988 511.487994 959.999988 511.487994C959.743988 271.487997 767.999991 191.999998 767.999991 191.999998l0 71.103999c0 0 108.671999 46.079999 125.759998 205.567998L959.999988 511.487994z","p-id":"2986",fill:"#ffffff"}}),s("path",{attrs:{d:"M1311.871984 738.943991C1331.071984 679.103992 1343.999984 604.415993 1343.999984 511.999994c0-355.903996-191.999998-447.999995-191.999998-447.999995l0 83.071999c0 0 127.999998 70.655999 127.999998 364.927996 0 79.103999-9.28 142.015998-22.784 191.615998L1311.871984 738.943991z","p-id":"2987",fill:"#ffffff"}}),s("path",{attrs:{d:"M125.567998 115.327999 1376.895983 939.263989 1411.839983 885.631989 160.511998 61.695999Z","p-id":"2988",fill:"#ffffff"}}),s("path",{attrs:{d:"M428.479995 167.935998 703.999991 346.047996 703.999991 0Z","p-id":"2989",fill:"#ffffff"}}),s("path",{attrs:{d:"M1151.999986 959.999988c0 0 29.76-14.272 65.791999-53.247999l-57.215999-36.992C1155.199986 873.791989 1151.999986 875.519989 1151.999986 875.519989L1151.999986 959.999988z","p-id":"2990",fill:"#ffffff"}}),s("path",{attrs:{d:"M0 375.487995l0 273.087997c0 0 0 68.287999 66.687999 68.287999l133.311998 0L703.999991 1023.999988 703.999991 574.655993 246.399997 278.911997 199.999998 307.199996 66.687999 307.199996C0 307.199996 0 375.487995 0 375.487995z","p-id":"2991",fill:"#ffffff"}}),s("path",{attrs:{d:"M767.999991 760.895991 767.999991 831.99999c0 0 82.687999-34.304 139.519998-125.759998l-50.495999-32.64C819.39199 739.071991 767.999991 760.895991 767.999991 760.895991z","p-id":"2992",fill:"#ffffff"}}),s("path",{attrs:{d:"M959.999988 814.97599 959.999988 895.999989c0 0 50.175999-27.584 99.199999-91.775999l-52.479999-33.92C981.439988 801.47199 959.999988 814.97599 959.999988 814.97599z","p-id":"2993",fill:"#ffffff"}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sound,expression:"sound"}],staticClass:"sdbar",class:{issd:t.issdshow},attrs:{type:"range",name:"",id:""},domProps:{value:t.sound},on:{touchend:t.barEnd,__r:function(e){t.sound=e.target.value}}})])])],2)]:t._e()]:t._e()],2)},d=[],f=(n("4160"),n("fb6a"),n("a9e3"),n("ac1f"),n("1276"),n("498a"),n("159b"),{props:["curentsongId","showFull"],data:function(){return{curentBar:null,isPaused:!1,currentTime:0,geci:null,isShowFull:this.showFull||!1,ifgeci:!1,timer:!0,currentIndex:0,loading:!1,iftouch:!1,sound:10,issdshow:!1,simiList:[],simiListIndex:0,overList:[],simiOverListIndex:0}},computed:{curentSongUrl:function(){return"https://music.163.com/song/media/outer/url?id="+this.curentsongId+".mp3"},SimiOverListIndex:function(){return this.simiOverListIndex+this.overList.length-1}},watch:{curentsongId:function(){this.getCurentBar(),this.isShowFull=this.showFull,this.getGeCi()},isPaused:function(){this.isPaused?window.clearInterval(window.animateId):(window.clearInterval(this.animateId),window.animateId=this.drawCircle())},curentBar:function(){this.$nextTick((function(){window.clearInterval(this.animateId),window.animateId=this.drawCircle()}))},currentTime:function(){this.ifgeci&&this.timer&&this.geciscroll()},sound:function(){this.soundCL()}},methods:{getCurentBar:function(){var t=this;this.loading=!0,this.axios.get("http://music.kele8.cn/song/detail",{params:{ids:this.curentsongId}}).then((function(e){t.curentBar=e.data.songs[0]})).finally((function(){t.loading=!1}))},getGeCi:function(){var t=this;this.axios.get("http://music.kele8.cn/lyric",{params:{id:this.curentsongId}}).then((function(e){t.geci=e.data.lrc.lyric;var n=[];t.geci.split("\n").forEach((function(t,e){var s=t.slice(1,10);n[e]={time:60*Number(s.slice(0,2))+Number(s.slice(3)),text:t.slice(11).trim()}})),n.pop(),t.geci=n}))},pauseAudio:function(){var t=this.$el.querySelector("audio");this.isPaused?t.play():t.pause(),this.isPaused=t.paused},drawCircle:function(){var t=this,e=this.$el.querySelector("audio"),n=this.$el.querySelector("canvas"),s=n.getContext("2d"),i=window.setInterval((function(){t.currentTime=1e3*e.currentTime,s.clearRect(0,0,40,40),s.beginPath(),s.arc(20,20,19,0,2*Math.PI),s.closePath(),s.strokeStyle="#ccc",s.stroke(),s.beginPath(),s.arc(20,20,19,-.5*Math.PI,2*Math.PI*(t.currentTime/t.curentBar.dt)-.5*Math.PI),s.strokeStyle="red",s.stroke()}),500);return i},geciscroll:function(){for(var t=this,e=document.querySelector(".geci ul"),n=this.geci,s=document.querySelectorAll(".geci ul li"),i=this.currentTime/1e3,a=0;a<n.length;a++)if(n[a].time>=i){this.currentIndex=a;break}s.forEach((function(e,i){i==t.currentIndex?i<1?s[0].classList.add("active"):i==n.length-1?s[i].classList.add("active"):s[i-1].classList.add("active"):s[i].classList.remove("active")}));var r=s[this.currentIndex].offsetTop,o=e.offsetTop;r-o>220&&e.scrollTo({top:r-o-220,behavior:"smooth"})},soundCL:function(){var t=this.$el.querySelector("audio");t.volume=this.sound/100},showsd:function(){this.issdshow?this.sound=0:this.issdshow=!0},barEnd:function(){this.issdshow=!1},scroll:function(t){t.preventDefault()},touchStart:function(){this.timer=!1},touchMove:function(){var t=document.querySelector(".geci ul");this.currentIndex=Math.round(t.scrollTop/20+1),this.iftouch=!0},touchEnd:function(){var t=this.$el.querySelector("audio");this.timer=!0,t.currentTime=this.geci[this.currentIndex-1].time,this.geci,this.iftouch=!1},startPlayList:function(){var t=this;this.curentsongId&&this.axios.get("http://music.kele8.cn/simi/song",{params:{id:this.curentsongId}}).then((function(e){e.data.songs.forEach((function(e){t.simiList.push(e.id)}))})).catch((function(t){window.console.error(t)}))},nextPlay:function(){var t=this;this.simiList&&(this.simiList.forEach((function(e,n,s){t.simiListIndex==n&&(t.overList.push(t.curentsongId),t.$emit("nextPlay",{songID:e}),t.simiListIndex==s.length-1&&(t.simiList=[],t.simiListIndex=-1,t.startPlayList()))})),this.simiListIndex++)},prvePlay:function(){var t=this;this.overList&&(this.overList.forEach((function(e,n){t.SimiOverListIndex==n&&t.$emit("prvePlay",{songID:e})})),this.simiListIndex--)}},created:function(){this.getCurentBar(),this.getGeCi()},mounted:function(){this.soundCL(),this.startPlayList()},updated:function(){}}),h=f,m=(n("076e"),n("2877")),p=Object(m["a"])(h,u,d,!1,null,null,null),g=p.exports,v={components:{PlayView:g},data:function(){return{curentSongId:null,showFull:!1}}},_=v,w=(n("034f"),Object(m["a"])(_,c,l,!1,null,null,null)),y=w.exports,C=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("ul",{staticClass:"err"},[n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)]),t._m(1),n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)]),n("keep-alive",[n("router-view",{on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})],1)],1)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo er"},[n("h1")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("h1")])}],x={name:"home",components:{}},I=x,k=(n("de16"),Object(m["a"])(I,b,S,!1,null,null,null)),P=k.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("HomeTitle",[t._v("推荐歌单")]),n("ul",{staticClass:"list"},t._l(t.personalized,(function(t){return n("SongListCard",{key:t.id,attrs:{item:t}})})),1),n("HomeTitle",[t._v("最新音乐")]),n("ol",t._l(t.newsong,(function(e,s){return n("SongListItem",{key:e.id,attrs:{songItem:e,"is-show-quality":!0,index:s},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1)],1)},M=[],O=n("9598"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item.picUrl?n("li",{staticClass:"card",on:{click:function(e){return t.handlerCardClick(t.item.id)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.item.picUrl,alt:""}}),n("span",{staticClass:"aa"},[t._v(t._s(t.translatePlayCount(t.item.playCount)))])]),n("div",{staticClass:"name"},[t._v(t._s(t.item.name))])]):n("li",{staticClass:"card bang",on:{click:function(e){return t.handlerCardClick(t.item.id)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.item.coverImgUrl,alt:""}}),n("span",[t._v(t._s(t.item.updateFrequency))])]),n("div",{staticClass:"name"},[t._v(t._s(t.item.name))])])},$=[],z=(n("b680"),{props:{item:Object},methods:{translatePlayCount:function(t){return t>99999999?Number(t/1e8).toFixed(2)+"亿":t>9999?Number(t/1e4).toFixed(1)+"万":void 0},handlerCardClick:function(t){this.$router.push({path:"playlist",query:{id:t}})}}}),T=z,j=(n("ac5a"),Object(m["a"])(T,E,$,!1,null,null,null)),H=j.exports,N=n("16a2"),B={name:"HomeRecommend",components:{HomeTitle:O["a"],SongListCard:H,SongListItem:N["a"]},data:function(){return{personalized:[],newsong:[]}},methods:{getPersonalized:function(){var t=this,e=JSON.parse(window.localStorage.getItem("personalized"));e&&e.time>Date.now()?this.personalized=e.data:this.axios.get("http://musicapi.leanapp.cn/personalized?limit=6").then((function(e){window.console.log(e),t.personalized=e.data.result,window.localStorage.setItem("personalized",JSON.stringify({time:Date.now()+6e5,data:t.personalized}))}))},getNewsong:function(){var t=this,e=JSON.parse(window.localStorage.getItem("newsong"));e&&e.time>Date.now()?this.newsong=e.data:this.axios.get("http://musicapi.leanapp.cn/personalized/newsong").then((function(e){window.console.log(e),t.newsong=e.data.result,window.localStorage.setItem("newsong",JSON.stringify({time:Date.now()+6e5,data:t.newsong}))}))}},created:function(){this.getPersonalized(),this.getNewsong()}},F=B,q=(n("cfa8"),Object(m["a"])(F,L,M,!1,null,null,null)),D=q.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hotsong?s("div",{staticClass:"hot"},[s("HotPic",{attrs:{"song-updatetime":t.hotsong}}),s("HomeTitle",[t._v("最热音乐")]),t.hotsong.tracks?s("ol",t._l(t.hotsong.tracks,(function(e,n){return s("SongListItem",{key:e.id,attrs:{"song-item":e,"is-show-quality":!0,index:n},on:{"translate-currentid":function(e){t.$emit("translate-currentid",e)}}})})),1):t._e(),t.loading?s("img",{attrs:{src:n("6a61"),alt:""}}):t._e()],1):t._e()},A=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hotop"},[n("div",{staticClass:"hoticon"}),n("div",{staticClass:"hottime"},[t._v("更新日期："+t._s(t.nTime))])])},V=[],G={props:["songUpdatetime"],data:function(){return{time:this.songUpdatetime.updateTime}},computed:{nTime:function(){var t=new Date(this.time),e=t.getMonth()+1,n=t.getDate();return 0+e+"月"+n+"日"}}},Q=G,R=(n("6559"),Object(m["a"])(Q,J,V,!1,null,null,null)),Z=R.exports,K={name:"HomeHot",components:{SongListItem:N["a"],HotPic:Z,HomeTitle:O["a"]},data:function(){return{loading:!1,hotsong:null,bangSome:null}},methods:{getBangSome:function(){var t=this;this.axios.get("http://music.kele8.cn/toplist").then((function(e){window.console.log(e,"xxx"),t.bangSome=e.data.list}))},getHotsong:function(){var t=this;this.loading=!0;var e=JSON.parse(window.localStorage.getItem("hotsong"));e&&e.time>Date.now()?(this.hotsong=e.data,this.loading=!1):this.axios.get("http://musicapi.leanapp.cn/top/list?idx=1").then((function(e){t.hotsong=e.data.playlist,window.localStorage.setItem("hotsong",JSON.stringify({time:Date.now()+6e5,data:t.hotsong}))})).finally((function(){t.loading=!1}))}},created:function(){this.getHotsong()}},W=K,X=(n("c0bb"),Object(m["a"])(W,U,A,!1,null,null,null)),Y=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchtext,expression:"searchtext",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.searchtext},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getSearchMultimatch(),t.getSomeSongs()},input:function(e){e.target.composing||(t.searchtext=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("span",{staticClass:"fa fa-search"}),s("span",{staticClass:"fa fa-close",on:{click:function(e){t.searchtext=null,t.searchMultimatch=null,t.someSongs=null}}})]),t.searchtext?t._e():[s("h5",[t._v("热门搜索")]),s("ul",{staticClass:"searchhot"},t._l(t.searchHot,(function(e,n){return s("li",{key:n,on:{click:function(n){t.searchtext=e.first,t.getSearchMultimatch(),t.getSomeSongs()}}},[t._v(t._s(e.first))])})),0)],t.searchtext&&!t.searchMultimatch?[s("div",{staticClass:"suggest"},[s("h5",[t._v('搜索"'+t._s(t.searchtext)+'"')]),s("ul",t._l(t.someSuggest,(function(e){return s("li",{key:e.keyword,on:{click:function(n){t.searchtext=e.keyword,t.getSearchMultimatch(),t.getSomeSongs()}}},[s("span",{staticClass:"fa fa-search"}),t._v(" "+t._s(e.keyword)+" ")])})),0)])]:t._e(),t.searchMultimatch?s("div",{staticClass:"multimatch"},[t.searchMultimatch.artist?t._l(t.searchMultimatch.artist,(function(e){return s("div",{key:e.id,staticClass:"artist",on:{click:function(n){return t.artistClick(e.id)}}},[s("img",{attrs:{src:e.picUrl,alt:""}}),s("h5",[s("p",[t._v(" 歌手："+t._s(e.name)+" "),t._l(e.alias,(function(e,n){return s("span",{key:n},[t._v("("+t._s(e)+")")])}))],2),s("p",[s("span",[t._v("粉丝："+t._s(t.translatePlayCount(e.fansSize)))]),s("span",[t._v("歌曲："+t._s(e.musicSize))]),s("span",[t._v("专辑："+t._s(e.albumSize))])])]),s("span",{staticClass:"fa fa-chevron-right"})])})):t._e(),t.searchMultimatch.mv?t._l(t.searchMultimatch.mv,(function(e){return s("div",{key:e.id,staticClass:"mv"},[s("img",{attrs:{src:e.cover,alt:""}}),s("h5",[s("p",[t._v(" MV: "),s("span",[t._v(t._s(e.name))])]),s("p",[t._v(t._s(e.artistName))])]),s("span",{staticClass:"fa fa-chevron-right"})])})):t._e(),t.searchMultimatch.album?t._l(t.searchMultimatch.album,(function(e){return s("div",{key:e.id,staticClass:"album",on:{click:function(n){return t.albumClick(e.id)}}},[s("img",{attrs:{src:e.blurPicUrl,alt:""}}),s("h5",[s("p",[t._v(" 专辑："+t._s(e.name)+" "),t._l(e.alias,(function(e,n){return s("span",{key:n},[t._v("("+t._s(e)+")")])}))],2),s("p",[t._v(t._s(e.artist.name))])]),s("span",{staticClass:"fa fa-chevron-right"})])})):t._e()],2):t._e(),t.someSongs?s("ul",{staticClass:"song"},t._l(t.someSongs,(function(e,n){return s("SongListItem",{key:e.id,attrs:{"song-item":e,index:n},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1):t._e(),t.loading?s("img",{attrs:{src:n("6a61"),alt:""}}):t._e()],2)},et=[],nt={name:"HomeSearch",components:{SongListItem:N["a"]},data:function(){return{searchtext:null,searchHot:null,someSuggest:null,loading:!1,searchMultimatch:null,someSongs:null}},methods:{getSearchHot:function(){var t=this,e=JSON.parse(window.localStorage.getItem("searchHot"));e&&e.time>Date.now()?this.searchHot=e.data:this.axios.get("http://musicapi.leanapp.cn/search/hot/detail").then((function(e){t.searchHot=e.data.result.hots,window.localStorage.setItem("searchHot",JSON.stringify({time:Date.now()+6e5,data:t.searchHot}))}))},getSomeSuggest:function(t){var e=this;this.loading=!0,this.axios.get("http://music.kele8.cn/search/suggest?keywords= "+t+"&type=mobile").then((function(t){e.someSuggest=t.data.result.allMatch})).finally((function(){e.loading=!1}))},getSearchMultimatch:function(){var t=this;this.loading=!0,this.axios.get("http://music.kele8.cn/search/multimatch",{params:{keywords:this.searchtext}}).then((function(e){t.searchMultimatch=e.data.result})).finally((function(){t.loading=!1}))},getSomeSongs:function(){var t=this;this.loading=!0,this.axios.get("http://music.kele8.cn/search",{params:{keywords:this.searchtext,limit:10,offset:0}}).then((function(e){t.someSongs=e.data.result.songs})).finally((function(){t.loading=!1}))},translatePlayCount:function(t){return t>99999999?Number(t/1e8).toFixed(2)+"亿":t>9999?Number(t/1e4).toFixed(1)+"万":void 0},artistClick:function(t){this.$router.push({path:"artist",query:{id:t}})},albumClick:function(t){this.$router.push({path:"album",query:{id:t}})}},created:function(){this.getSearchHot()},watch:{searchtext:function(t){t&&this.getSomeSuggest(t)}}},st=nt,it=(n("e6d6"),Object(m["a"])(st,tt,et,!1,null,"04b85a24",null)),at=it.exports;s["a"].use(C["a"]);var rt=[{path:"/",name:"home",component:P,redirect:"/recommend",children:[{path:"recommend",component:D},{path:"hot",component:Y},{path:"search",component:at}]},{path:"/playlist",name:"playlist",component:function(){return n.e("about").then(n.bind(null,"fddd"))}},{path:"/artist",name:"artist",component:function(){return n.e("about").then(n.bind(null,"6b01"))}},{path:"/album",name:"album",component:function(){return n.e("about").then(n.bind(null,"ee18"))}}],ot=new C["a"]({routes:rt}),ct=ot,lt=n("2f62");s["a"].use(lt["a"]);var ut=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:ct,store:ut,render:function(t){return t(y)}}).$mount("#app")},6559:function(t,e,n){"use strict";var s=n("1a0c"),i=n.n(s);i.a},"6a61":function(t,e,n){t.exports=n.p+"img/timg.3f559f23.gif"},8580:function(t,e,n){},"85ec":function(t,e,n){},"8d91":function(t,e,n){},9598:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._t("default")],2)},i=[],a={},r=a,o=(n("d377"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},"977f":function(t,e,n){},"9e4d":function(t,e,n){},a462:function(t,e,n){"use strict";var s=n("8580"),i=n.n(s);i.a},ac5a:function(t,e,n){"use strict";var s=n("e271"),i=n.n(s);i.a},c0bb:function(t,e,n){"use strict";var s=n("9e4d"),i=n.n(s);i.a},c616:function(t,e,n){},cfa8:function(t,e,n){"use strict";var s=n("977f"),i=n.n(s);i.a},d377:function(t,e,n){"use strict";var s=n("e245"),i=n.n(s);i.a},dd42:function(t,e,n){t.exports=n.p+"img/needle-ip6.be4ebbeb.png"},de16:function(t,e,n){"use strict";var s=n("8d91"),i=n.n(s);i.a},e245:function(t,e,n){},e271:function(t,e,n){},e6d6:function(t,e,n){"use strict";var s=n("c616"),i=n.n(s);i.a}});
//# sourceMappingURL=app.fc82a1d8.js.map