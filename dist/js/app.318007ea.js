(function(e){function t(t){for(var a,i,r=t[0],l=t[1],c=t[2],p=0,g=[];p<r.length;p++)i=r[p],o[i]&&g.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(g.length)g.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aa2a0a86"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}o[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/battleslides/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0151":function(e,t,n){e.exports=n.p+"img/Friends.8d349bbb.png"},"0322":function(e,t,n){},"0644":function(e,t,n){e.exports=n.p+"img/Tacos.7e6a8e25.png"},"0b96":function(e,t,n){e.exports=n.p+"img/Dolphins.a791abce.png"},"10d5":function(e,t,n){e.exports=n.p+"img/Automobiles.a01ea6f8.png"},"13a6":function(e,t,n){},1771:function(e,t,n){var a={"./line-down.svg":"5aa1","./line-up.svg":"9fd1","./logo.png":"cf05","./pie.svg":"1e78","./pie2.svg":"9a31","./random-images/Airlines.png":"3735","./random-images/Airplanes.png":"f780","./random-images/Automobiles.png":"10d5","./random-images/Bakers.png":"dd6c","./random-images/Ballerinas.png":"71b0","./random-images/Bankers.png":"a474","./random-images/Basketball players.png":"73b9","./random-images/Bush and Obama.png":"4746","./random-images/Casinos.png":"8165","./random-images/Cats.png":"22aa","./random-images/Children.png":"4f6a","./random-images/Computers.png":"f37a","./random-images/Cupcakes.png":"41aa","./random-images/Dogs.png":"a3b7","./random-images/Dolphins.png":"0b96","./random-images/Elves.png":"382f","./random-images/Fathers.png":"6629","./random-images/Fitness Instructors.png":"f52f","./random-images/Friends.png":"0151","./random-images/Gamers.png":"5aa2","./random-images/Giraffes.png":"f77e","./random-images/Hedgehogs and Plumbers.png":"9bc6","./random-images/Hemorrhoids.png":"8365","./random-images/Hipsters.png":"2576","./random-images/Hotels.png":"936f","./random-images/Mothers.png":"9a86","./random-images/Pencil necks.png":"f299","./random-images/Religions.png":"5f8b","./random-images/Robots.png":"9ad6","./random-images/Rock Bands.png":"c68f","./random-images/Sports.png":"47ea","./random-images/Tacos.png":"0644","./random-images/Warrior Princesses.png":"85fc","./random-images/Weddings.png":"45f7","./random-images/bg1.jpg":"ff70","./random-images/bg2.jpg":"e476","./random-images/bg3.jpg":"3cf8","./random-images/bg4.jpg":"8743","./random-images/bg5.jpg":"3de2","./random-images/bg6.jpg":"be40","./random-images/bg7.jpg":"6954","./random-images/laser-cat.jpg":"b40c","./themes":"1a5b","./themes.json":"1a5b"};function o(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="1771"},"1a5b":function(e){e.exports={styles:[{name:"pink-on-black",bg:"#000000","bg-video":"",font:'"Comic Sans MS", cursive, sans-serif',"header-color":"#ff3399","font-color":"#ff3399"},{name:"black-on-white",bg:"#FFFFFF","bg-video":"",font:'"Palatino Linotype", "Book Antiqua", Palatino, serif',"header-color":"#000000","font-color":"#000000"},{name:"classy",bg:"#f8f9ec","bg-video":"",font:'"Palatino Linotype", "Book Antiqua", Palatino, serif',"header-color":"#222222","font-color":"#111111"}]}},"1e78":function(e,t,n){e.exports=n.p+"img/pie.7a6f6f95.svg"},"22aa":function(e,t,n){e.exports=n.p+"img/Cats.d62d60dd.png"},2576:function(e,t,n){e.exports=n.p+"img/Hipsters.0372039f.png"},"35a5":function(e,t,n){var a={"./Airlines.png":"3735","./Airplanes.png":"f780","./Automobiles.png":"10d5","./Bakers.png":"dd6c","./Ballerinas.png":"71b0","./Bankers.png":"a474","./Basketball players.png":"73b9","./Bush and Obama.png":"4746","./Casinos.png":"8165","./Cats.png":"22aa","./Children.png":"4f6a","./Computers.png":"f37a","./Cupcakes.png":"41aa","./Dogs.png":"a3b7","./Dolphins.png":"0b96","./Elves.png":"382f","./Fathers.png":"6629","./Fitness Instructors.png":"f52f","./Friends.png":"0151","./Gamers.png":"5aa2","./Giraffes.png":"f77e","./Hedgehogs and Plumbers.png":"9bc6","./Hemorrhoids.png":"8365","./Hipsters.png":"2576","./Hotels.png":"936f","./Mothers.png":"9a86","./Pencil necks.png":"f299","./Religions.png":"5f8b","./Robots.png":"9ad6","./Rock Bands.png":"c68f","./Sports.png":"47ea","./Tacos.png":"0644","./Warrior Princesses.png":"85fc","./Weddings.png":"45f7"};function o(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="35a5"},3735:function(e,t,n){e.exports=n.p+"img/Airlines.e0ad365a.png"},"382f":function(e,t,n){e.exports=n.p+"img/Elves.fe4b7d54.png"},"3cf8":function(e,t,n){e.exports=n.p+"img/bg3.18c5cf73.jpg"},"3de2":function(e,t,n){e.exports=n.p+"img/bg5.b0d83a69.jpg"},"41aa":function(e,t,n){e.exports=n.p+"img/Cupcakes.896d8167.png"},"43fa":function(e,t,n){"use strict";var a=n("0322"),o=n.n(a);o.a},"45f7":function(e,t,n){e.exports=n.p+"img/Weddings.e48969bc.png"},4746:function(e,t,n){e.exports=n.p+"img/Bush and Obama.b11e36f0.png"},"47ea":function(e,t,n){e.exports=n.p+"img/Sports.b7578969.png"},"4f6a":function(e,t,n){e.exports=n.p+"img/Children.1694b776.png"},"5aa1":function(e,t,n){e.exports=n.p+"img/line-down.658f55a3.svg"},"5aa2":function(e,t,n){e.exports=n.p+"img/Gamers.e8349dfd.png"},"5c48":function(e,t,n){},"5c99":function(e,t,n){var a={"./Airlines.png":"3735","./Airplanes.png":"f780","./Automobiles.png":"10d5","./Bakers.png":"dd6c","./Ballerinas.png":"71b0","./Bankers.png":"a474","./Basketball players.png":"73b9","./Bush and Obama.png":"4746","./Casinos.png":"8165","./Cats.png":"22aa","./Children.png":"4f6a","./Computers.png":"f37a","./Cupcakes.png":"41aa","./Dogs.png":"a3b7","./Dolphins.png":"0b96","./Elves.png":"382f","./Fathers.png":"6629","./Fitness Instructors.png":"f52f","./Friends.png":"0151","./Gamers.png":"5aa2","./Giraffes.png":"f77e","./Hedgehogs and Plumbers.png":"9bc6","./Hemorrhoids.png":"8365","./Hipsters.png":"2576","./Hotels.png":"936f","./Mothers.png":"9a86","./Pencil necks.png":"f299","./Religions.png":"5f8b","./Robots.png":"9ad6","./Rock Bands.png":"c68f","./Sports.png":"47ea","./Tacos.png":"0644","./Warrior Princesses.png":"85fc","./Weddings.png":"45f7","./bg1.jpg":"ff70","./bg2.jpg":"e476","./bg3.jpg":"3cf8","./bg4.jpg":"8743","./bg5.jpg":"3de2","./bg6.jpg":"be40","./bg7.jpg":"6954","./laser-cat.jpg":"b40c"};function o(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="5c99"},"5f8b":function(e,t,n){e.exports=n.p+"img/Religions.c751e199.png"},6629:function(e,t,n){e.exports=n.p+"img/Fathers.fc34ba3d.png"},6954:function(e,t,n){e.exports=n.p+"img/bg7.a221202c.jpg"},"71b0":function(e,t,n){e.exports=n.p+"img/Ballerinas.8513a45c.png"},"73b9":function(e,t,n){e.exports=n.p+"img/Basketball players.d0a9284c.png"},"7c55":function(e,t,n){"use strict";var a=n("5c48"),o=n.n(a);o.a},8165:function(e,t,n){e.exports=n.p+"img/Casinos.3fc56730.png"},8365:function(e,t,n){e.exports=n.p+"img/Hemorrhoids.7a562d44.png"},"85fc":function(e,t,n){e.exports=n.p+"img/Warrior Princesses.78feac1a.png"},8743:function(e,t,n){e.exports=n.p+"img/bg4.2101b7bd.jpg"},"936f":function(e,t,n){e.exports=n.p+"img/Hotels.f8163b3d.png"},"9a31":function(e,t,n){e.exports=n.p+"img/pie2.75f7069a.svg"},"9a86":function(e,t,n){e.exports=n.p+"img/Mothers.872135e2.png"},"9ad6":function(e,t,n){e.exports=n.p+"img/Robots.dc74dd1c.png"},"9bc6":function(e,t,n){e.exports=n.p+"img/Hedgehogs and Plumbers.30c4e2e6.png"},"9fd1":function(e,t,n){e.exports=n.p+"img/line-up.a34ef283.svg"},a3b7:function(e,t,n){e.exports=n.p+"img/Dogs.06e1f355.png"},a474:function(e,t,n){e.exports=n.p+"img/Bankers.ff3eaa1f.png"},b40c:function(e,t,n){e.exports=n.p+"img/laser-cat.cb73d4d5.jpg"},be40:function(e,t,n){e.exports=n.p+"img/bg6.7df943ec.jpg"},c2c6:function(e,t,n){"use strict";var a=n("13a6"),o=n.n(a);o.a},c68f:function(e,t,n){e.exports=n.p+"img/Rock Bands.edcd559c.png"},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("7c55"),n("2877")),r={},l=Object(i["a"])(r,o,s,!1,null,null,null),c=l.exports,p=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v("\n  Made by Rob and Adam\n")])},g=[],d=n("d225"),h=n("308d"),m=n("6bb5"),f=n("4e2b"),b=n("9ab4"),v=n("60a3"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],C=function(e){function t(){return Object(d["a"])(this,t),Object(h["a"])(this,Object(m["a"])(t).apply(this,arguments))}return Object(f["a"])(t,e),t}(v["c"]);b["a"]([Object(v["b"])()],C.prototype,"msg",void 0),C=b["a"]([v["a"]],C);var j=C,k=j,w=(n("c2c6"),Object(i["a"])(k,_,y,!1,null,"68359123",null)),S=w.exports,M=function(e){function t(){return Object(d["a"])(this,t),Object(h["a"])(this,Object(m["a"])(t).apply(this,arguments))}return Object(f["a"])(t,e),t}(v["c"]);M=b["a"]([Object(v["a"])({components:{HelloWorld:S},mounted:function(){setTimeout(function(){Z.push("title-screen")},3e3)}})],M);var x=M,O=x,P=Object(i["a"])(O,u,g,!1,null,null,null),T=P.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  This is the intro screen\n\n  "),n("router-link",{attrs:{to:"turn-screen"}},[n("a",[e._v("Start")])])],1)},B=[],E=function(e){function t(){return Object(d["a"])(this,t),Object(h["a"])(this,Object(m["a"])(t).apply(this,arguments))}return Object(f["a"])(t,e),t}(v["c"]);E=b["a"]([Object(v["a"])({mounted:function(){}})],E);var R=E,H=R,D=Object(i["a"])(H,A,B,!1,null,null,null),I=D.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Team X's turn!\n")])},L=[],W=function(e){function t(){return Object(d["a"])(this,t),Object(h["a"])(this,Object(m["a"])(t).apply(this,arguments))}return Object(f["a"])(t,e),t}(v["c"]);W=b["a"]([Object(v["a"])({mounted:function(){setTimeout(function(){Z.push("slides-screen")},3e3)}})],W);var G=W,N=G,$=Object(i["a"])(N,F,L,!1,null,null,null),q=$.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reveal",staticStyle:{background:"red"}},[a("div",{staticClass:"slides"},[a("section",[a("h2",[e._v(e._s(e.Slide1Content))])]),a("section",[a("h2",[e._v(e._s(e.Slide2Content))])]),a("section",[a("h3",[e._v(e._s(e.MainSubject)+" and "+e._s(e.ChartMeasure))]),a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column"},[e._v(e._s(e.MainSubject))]),a("div",{staticClass:"column is-three-quarters"},[a("img",{attrs:{src:n("1771")("./"+e.ChartType)}})])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column is-three-quarters"},[e._v(e._s(e.ChartMeasure))])])]),a("section",[a("h2",[e._v(e._s(e.MainSubject))]),e._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("ul",[a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomPros[0]))]),a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomPros[1]))]),a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomPros[2]))])])]),a("div",{staticClass:"column"},[a("ul",[a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomCons[0]))]),a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomCons[1]))]),a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomCons[2]))])])])])]),a("section",[a("h2",[e._v(e._s(e.Demonstration))])]),a("section",[a("h3",[e._v(e._s(e.PointHeader))]),a("ul",[a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomPoints[0]))]),a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomPoints[1]))]),a("li",{staticClass:"fragment"},[e._v(e._s(e.RandomPoints[2]))])])]),a("section",[a("div",{staticClass:"random-image-div"}),a("img",{staticClass:"random-image",attrs:{src:n("35a5")("./"+e.MainSubject+".png")}}),a("img",{attrs:{src:n("5c99")("./"+e.RandomBG)}})]),a("section",[a("h2",[e._v(e._s(e.Conclusion))])])])])},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("h3",{staticClass:"column"},[e._v("Pros")]),n("h3",{staticClass:"column"},[e._v("Cons")])])}],V=(n("ac4d"),n("8a81"),n("ac6a"),n("55dd"),n("a481"),n("84f0")),Y=n.n(V),J={name:"slides-screen",data:function(){var e={TitleActions:["Getting Started with ","Growing Your Business with ",", Listening and Learning","... Isn't It About Time?","Getting Down and Dirty With ","What Happens When you Try To Eat "," are for N00BS!",", Seeing is Believing",", let's DIVE IN!","... a 500 Foot View!","What My Parents Can Learn From "," Are as Overated as High Heels or Tupes",", and Getting Over Your Ex.","... Let's Get Effin Rich!",', or "What the Chinese Do."',", Nobody Loves 'Em More Than Me. - Donald Trump","Engaging in Dangerous Acts with ",", Get the Heck Out of My Vagina!",", Am I Right!?","How to Get More Out of Your ","... Don't They Have Puncahble Faces?","Stop All Be Crawlin' on Your Bellies,  ",", You Got Played!"," and Other Iffy Choices","Unconventional Methods of Childcare Using ","","","","","","","","",""],TitleSubjects:["Airlines","Airplanes","Automobiles","Ballerinas","Basketball players","Casinos","Cats","Computers","Cupcakes","Dogs","Fathers","Friends","Giraffes","Hotels","Mothers","Robots","Rock Bands","Sports","Tacos","Warrior princesses","Weddings","Elves","Bankers","Religions","Dolphins","Bakers","Hipsters","Fitness Instructors","Gamers","Hedgehogs and Plumbers","Children","Bush and Obama","Hemorrhoids","Pencil Necks"],SlideStatements:["Now is the time for --- to ___.","If only --- would ___, we wouldn't be in this situation.","I think --- should ___.","Who agrees that --- should ___?","All the kids want --- to ___.","Can --- ___?","Women like --- when they ___.","My daddy wants --- to ___","Based on legal precendence, --- must now ___.","","","","","","","","","","","","","","","","","","","","","","","","",""],StatementActions:["jump up and down until all the marbles fall out","dance, dance, dance, and never stop","put their money where their mouth is","flip the script","be more careful with dad's bank account","wave their hands in the air like the just don't care","hurry and rush to the bathroom","just please go get a job","get off my lawn","pair up, and really make some thing special","jump in a blender and make a soup","","","","","","","","","","","","","","","","","","","","","","",""],ChartTypes:["line-up.svg","line-down.svg","pie.svg","pie2.svg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],ChartMeasures:["My Angst","Happiness","Cholesterol","Freed Refugees","Morning Woods","Mucus","Old Ladies Helped","Whales Slaughtered","My Waistline","Jobs for Millenials","","","","","","","","","","","","","","","","","","","","","","","",""],Pros:["Cost effective","Aid in digestion","Can be sexy","Aphrodesiac","Appetite suppressant","Earns trust","Attracts friends","Good flame retardent","Cuter than a kitten","Can help you be an instagram influencer","Gotten me out of more than one tight spot","Libido alert!","Lead to spiritual epiphanies","Can give you street cred","Valid form of birth control","","","","","","","","","","","","","","","","","","",""],Cons:["Lead to addiction","Cause weight gain","Expensive","Lower your social standing","Can cause bloating","May lead to instant fame","Can test positive for diahrea","May cause the Lord to smite you","Crypts are not cool with them, yo","Bloods are not cool with them, yo","Millenials are allergic to them","Instant babby!","Make the Mormons show up","","","","","","","","","","","","","","","","","","","","",""],PointHeaders:["Some reasons to think about ___","I'll tell you what I think about ___","I happen to have a lot in common with ___","We need to address the problem of ___","Why you should invest in ___","Anyone here single? Why it might be good to date ___...","Things mom said about ___","","","","","","","","","","","","","","","","","","","","","","","","","","",""],Points:["I once found a them in my bathroom","I like to present them to my grandma","They make for delicious appetizers","We should organize a trip to take some to the zoo!","It would be fun to get matching tattoos","Don't get me STARTED","Imagine being stuck in a closet with them and Tom Cruise","They are my guilty pleasure","Throw in the crockpot, add a dash of salt and... muah!","Kim Jong Un is a huge fan, too","I think they are planning a coup d'état","There goes the neighborhood","","","","","","","","","","","","","","","","","","","","","",""],DemonstrationsLeft:["Now let that sink in. I'm hopping on one leg","I'm going to try some giraffe calls now","I'll lead us in a moment of silence","Time to feign incontinence","Lemme tell you how my grandpop got me interested in this","Here's the traumatic event that lead me to talk about this","Look at me! I'm dancing","Allow me to imitate a baseball player","Break time! Everyone dance","Now I will sing a song about this","Here's me walking on hot coals","Let me cavort across the room like a distinguished gentleman","Volunteer please! I'm going to show you all a karate move","","","","","","","","","","","","","","","","","","","","",""],DemonstrationsRight:[", and have a serious face.",", while power queefing.",", and close my eyes really tight.",", while I look on the ground for my keys.",", while doing squats.",", while I make intense eye contact.","! Why don't you join me?",", while faking an injury.",", while chest/fist bumping everyone!",", while someone physically tries to stop me!",", while shreiking like a donkey.",", while holding this sh#$-faced grin.",", while doing my best at the jump splits.","","","","","","","","","","","","","","","","","","","","",""],Conclusions:["So, are you all on board or what!?","Who's with me!!!?","And that's what I think about ___.","I hope you all have a better understanding of ___.","Now who's going to give me all their money?","And that's why ___ are going to lead us to the promised land.","And that's why we should enlist ___ to help us stop the next genocide.","","","","","","","","","","","","","","","","","","","","","","","","","","",""]};for(var t in e)e.hasOwnProperty(t)&&(e[t]=e[t].filter(function(e){return""!==e}));return{MainSubject:"Tacos",TitleActions:e.TitleActions,TitleSubjects:e.TitleSubjects,SlideStatements:e.SlideStatements,StatementActions:e.StatementActions,ChartTypes:e.ChartTypes,ChartMeasures:e.ChartMeasures,Pros:e.Pros,Cons:e.Cons,PointHeaders:e.PointHeaders,Points:e.Points,DemonstrationsLeft:e.DemonstrationsLeft,DemonstrationsRight:e.DemonstrationsRight,Conclusions:e.Conclusions,Slide1Content:"",Slide2Content:"",ChartMeasure:"",ChartType:"line-down.svg",RandomPros:[],RandomCons:[],Demonstration:"",PointHeader:"",RandomPoints:[],Conclusion:"",RandomBG:"bg1.jpg",styleEl:null}},components:{},mounted:function(){this.loadSlideStyle(),this.shuffleSlides(),this.setupSlide1(),this.setupSlide2(),this.setupSlide3(),this.setupSlide4(),this.setupSlide5(),this.setupSlide6(),this.setupSlide7(),this.setupSlide8(),Y.a.initialize({controls:!1})},methods:{shuffleSlides:function(){var e=document.querySelector(".slides"),t=e.children[e.children.length-1];e.appendChild(e.children[0]);for(var n=e.children.length-1;n>=1;n--)e.appendChild(e.children[Math.random()*n|0]);e.appendChild(t)},setupSlide1:function(){var e=this.TitleActions[Math.floor(Math.random()*this.TitleActions.length)],t=this.TitleSubjects[Math.floor(Math.random()*this.TitleSubjects.length)];this.MainSubject=t,this.Slide1Content=0===e.indexOf(" ")||0===e.indexOf(".")||0===e.indexOf(",")?t+e:e+t},setupSlide2:function(){var e=this.StatementActions[Math.floor(Math.random()*this.StatementActions.length)],t=this.SlideStatements[Math.floor(Math.random()*this.SlideStatements.length)];this.Slide2Content=t.replace(/---/g,this.MainSubject).replace(/___/g,e)},setupSlide3:function(){this.ChartMeasure=this.ChartMeasures[Math.floor(Math.random()*this.ChartMeasures.length)],this.ChartType=this.ChartTypes[Math.floor(Math.random()*this.ChartTypes.length)]},setupSlide4:function(){var e=this.Pros.sort(function(){return.5-Math.random()});this.RandomPros=e.slice(0,3),e=this.Cons.sort(function(){return.5-Math.random()}),this.RandomCons=e.slice(0,3)},setupSlide5:function(){var e=this.DemonstrationsLeft[Math.floor(Math.random()*this.DemonstrationsLeft.length)],t=this.DemonstrationsRight[Math.floor(Math.random()*this.DemonstrationsRight.length)];this.Demonstration=e+t},setupSlide6:function(){this.PointHeader=this.PointHeaders[Math.floor(Math.random()*this.PointHeaders.length)],this.PointHeader=this.PointHeader.replace(/___/g,this.MainSubject);var e=this.Points.sort(function(){return.5-Math.random()});this.RandomPoints=e.slice(0,3)},setupSlide7:function(){this.RandomBG="bg"+(Math.floor(7*Math.random())+1)+".jpg"},setupSlide8:function(){this.Conclusion=this.Conclusions[Math.floor(Math.random()*this.Conclusions.length)].replace(/___/g,this.MainSubject)},loadSlideStyle:function(){var e=document.querySelector("head"),t=document.createElement("link");e.appendChild(t),t.type="text/css",t.rel="stylesheet",t.href=n("bf23");var a=n("1a5b").styles,o=a[Math.floor(Math.random()*a.length)],s=document.querySelector(".reveal"),i=document.querySelector(".slides");s.style.background=o["bg"];var r=!0,l=!1,c=void 0;try{for(var p,u=i.children[Symbol.iterator]();!(r=(p=u.next()).done);r=!0){p.value;i.style.color=o["font-color"]}}catch(d){l=!0,c=d}finally{try{r||null==u.return||u.return()}finally{if(l)throw c}}var g="\n      .reveal{\n        font-family: ".concat(o["font"]," !important;\n      }\n      .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {\n        color: ").concat(o["header-color"]," !important;\n        font-family: ").concat(o["font"]," !important;\n      }\n      ");this.styleEl=document.createElement("style"),document.head.appendChild(this.styleEl),this.styleEl.type="text/css",this.styleEl.appendChild(document.createTextNode(g))}}},K=J,X=(n("43fa"),Object(i["a"])(K,U,z,!1,null,null,null)),Q=X.exports;a["a"].use(p["a"]);var Z=new p["a"]({mode:"history",base:"/battleslides/",routes:[{path:"/",name:"opening-credits",component:T},{path:"/title-screen",name:"title-screen",component:function(){return n.e("about").then(n.bind(null,"e6d0"))}},{path:"/intro-screen",name:"intro-screen",component:I},{path:"/turn-screen",name:"turn-screen",component:q},{path:"/slides-screen",name:"slides-screen",component:Q}]}),ee=n("2f62");a["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:Z,store:te,render:function(e){return e(c)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dd6c:function(e,t,n){e.exports=n.p+"img/Bakers.097ea1b9.png"},e476:function(e,t,n){e.exports=n.p+"img/bg2.a849d307.jpg"},f299:function(e,t,n){e.exports=n.p+"img/Pencil necks.67887cb6.png"},f37a:function(e,t,n){e.exports=n.p+"img/Computers.c18cb35e.png"},f52f:function(e,t,n){e.exports=n.p+"img/Fitness Instructors.81d76b92.png"},f77e:function(e,t,n){e.exports=n.p+"img/Giraffes.f122fb87.png"},f780:function(e,t,n){e.exports=n.p+"img/Airplanes.e0ad365a.png"},ff70:function(e,t,n){e.exports=n.p+"img/bg1.972c6d26.jpg"}});
//# sourceMappingURL=app.318007ea.js.map