(function(t){function e(e){for(var s,o,i=e[0],l=e[1],u=e[2],c=0,d=[];c<i.length;c++)o=i[c],r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},a=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"aa2a0a86"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,s){n=r[t]=[e,s]});e.push(n[2]=s);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t),a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,n[1](o)}r[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/battleslides/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"13a6":function(t,e,n){},1771:function(t,e,n){var s={"./line-down.svg":"5aa1","./line-up.svg":"9fd1","./logo.png":"cf05"};function r(t){var e=a(t);return n(e)}function a(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id="1771"},"5aa1":function(t,e,n){t.exports=n.p+"img/line-down.658f55a3.svg"},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var s=n("5c48"),r=n.n(s);r.a},"9fd1":function(t,e,n){t.exports=n.p+"img/line-up.a34ef283.svg"},c2c6:function(t,e,n){"use strict";var s=n("13a6"),r=n.n(s);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("7c55"),n("2877")),i={},l=Object(o["a"])(i,r,a,!1,null,null,null),u=l.exports,c=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._v("\n  Made by Rob and Adam\n")])},d=[],f=n("d225"),p=n("308d"),v=n("6bb5"),m=n("4e2b"),_=n("9ab4"),g=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],j=function(t){function e(){return Object(f["a"])(this,e),Object(p["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);_["a"]([Object(g["b"])()],j.prototype,"msg",void 0),j=_["a"]([g["a"]],j);var y=j,S=y,O=(n("c2c6"),Object(o["a"])(S,b,C,!1,null,"68359123",null)),w=O.exports,M=function(t){function e(){return Object(f["a"])(this,e),Object(p["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);M=_["a"]([Object(g["a"])({components:{HelloWorld:w},mounted:function(){setTimeout(function(){Z.push("title-screen")},3e3)}})],M);var T=M,k=T,E=Object(o["a"])(k,h,d,!1,null,null,null),P=E.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  This is the intro screen\n\n  "),n("router-link",{attrs:{to:"turn-screen"}},[n("a",[t._v("Start")])])],1)},A=[],R=function(t){function e(){return Object(f["a"])(this,e),Object(p["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);R=_["a"]([Object(g["a"])({mounted:function(){}})],R);var $=R,L=$,D=Object(o["a"])(L,x,A,!1,null,null,null),G=D.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Team X's turn!\n")])},B=[],I=function(t){function e(){return Object(f["a"])(this,e),Object(p["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);I=_["a"]([Object(g["a"])({mounted:function(){setTimeout(function(){Z.push("slides-screen")},3e3)}})],I);var F=I,W=F,N=Object(o["a"])(W,H,B,!1,null,null,null),Y=N.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reveal"},[s("div",{staticClass:"slides"},[s("section",[s("h1",[t._v(t._s(t.Slide1Content))])]),s("section",[s("h2",[t._v(t._s(t.Slide2Content))])]),s("section",[s("h3",[t._v(t._s(t.MainSubject)+" and "+t._s(t.ChartMeasure))]),s("div",{staticClass:"columns is-vcentered"},[s("div",{staticClass:"column"},[t._v(t._s(t.MainSubject))]),s("div",{staticClass:"column is-three-quarters"},[s("img",{attrs:{src:n("1771")("./"+t.ChartType)}})])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),s("div",{staticClass:"column is-three-quarters"},[t._v(t._s(t.ChartMeasure))])])]),s("section",[s("h2",[t._v(t._s(t.MainSubject))]),t._m(0),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("ul",[s("li",{staticClass:"fragment"},[t._v(t._s(t.RandomPros[0]))]),s("li",{staticClass:"fragment"},[t._v(t._s(t.RandomPros[1]))]),s("li",{staticClass:"fragment"},[t._v(t._s(t.RandomPros[2]))])])]),s("div",{staticClass:"column"},[s("ul",[s("li",{staticClass:"fragment"},[t._v(t._s(t.RandomCons[0]))]),s("li",{staticClass:"fragment"},[t._v(t._s(t.RandomCons[1]))]),s("li",{staticClass:"fragment"},[t._v(t._s(t.RandomCons[2]))])])])])]),t._m(1),t._m(2),t._m(3),t._m(4)])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("h3",{staticClass:"column"},[t._v("Pros")]),n("h3",{staticClass:"column"},[t._v("Cons")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Demonstration / Story")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("3 Points")]),n("p",[t._v("Let's make some bullet points!")]),n("ul",[n("li",{staticClass:"fragment"},[t._v("Some info")]),n("li",{staticClass:"fragment"},[t._v("Some more info")]),n("li",{staticClass:"fragment"},[t._v("Some extra info")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Completely Random Slide")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Conclusion...")])])}],V=(n("55dd"),n("a481"),n("84f0")),z=n.n(V),J={name:"slides-screen",data:function(){var t={TitleActions:["Getting Started with ","Growing Your Business with ",", Listening and Learning","... Isn't It About Time?","Getting Down and Dirty With ","What Happens When you Try To Eat "," are for N00BS!",", Seeing is Believing",", let's DIVE IN!","... a 500 Foot View!","What My Parents Can Learn From "," Are as Overated as High Heels or Tupes",", and Getting Over Your Ex.","... Let's Get Effin Rich!",', or "What the Chinese Do."',", Nobody Loves 'Em More Than Me. - Donald Trump","Engaging in Dangerous Acts with ",", Get the Heck Out of My Vagina!",", Am I Right!?","How to Get More Out of Your ","... Don't They Have Puncahble Faces?","Stop All Be Crawlin' on Your Bellies,  ",", You Got Played!"," and Other Iffy Choices","Unconventional Methods of Childcare Using ","","","","","","","","",""],TitleSubjects:["Airlines","Airplanes","Automobiles","Ballerinas","Basketball players","Casinos","Cats","Computers","Cupcakes","Dogs","Fathers","Friends","Giraffes","Hotels","Mothers","Robots","Rock Bands","Sports","Tacos","Warrior princesses","Weddings","Elves","Bankers","Religions","Dolphins","Bakers","Hipsters","Fitness Instructors","Gamers","Hedgehogs and Plumbers","Children","Bush and Obama","Hemerhoids","Pencil Necks"],SlideStatements:["Now is the time for --- to ___.","If only --- would ___, we wouldn't be in this situation.","I think --- should ___.","Who agrees that --- should ___?","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],StatementActions:["jump up and down until all the marbles fall out","dance, dance, dance, and never stop","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],ChartTypes:["line-up.svg","line-down.svg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],ChartMeasures:["My angst","Happiness","Cholesterol","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],Pros:["Cost effective","Aid in digestion","Can be sexy","Aphrodesiac","Appetite suppressant","Earns trust","Attracts friends","Good flame retardent","Cuter than a kitten","Can help you be an influencer","Gotten me out of more than one tight spot","Libido alert!","","","","","","","","","","","","","","","","","","","","","",""],Cons:["Lead to addiction","Cause weight gain","Expensive","Lower your social standing","Can cause bloating","May lead to instant fame","Can test positive for diahrea","May cause the Lord to smite you","","","","","","","","","","","","","","","","","","","","","","","","","",""]};for(var e in t)t.hasOwnProperty(e)&&(t[e]=t[e].filter(function(t){return""!==t}));return{MainSubject:"",TitleActions:t.TitleActions,TitleSubjects:t.TitleSubjects,SlideStatements:t.SlideStatements,StatementActions:t.StatementActions,ChartTypes:t.ChartTypes,ChartMeasures:t.ChartMeasures,Pros:t.Pros,Cons:t.Cons,Slide1Content:"",Slide2Content:"",ChartMeasure:"",ChartType:"line-down.svg",RandomPros:[],RandomCons:[]}},components:{},mounted:function(){this.setupSlide1(),this.setupSlide2(),this.setupSlide3(),this.setupSlide4(),z.a.initialize({controls:!1})},methods:{setupSlide1:function(){var t=this.TitleActions[Math.floor(Math.random()*this.SlideStatements.length)],e=this.TitleSubjects[Math.floor(Math.random()*this.TitleSubjects.length)];this.MainSubject=e,this.Slide1Content=0===t.indexOf(" ")||0===t.indexOf(".")||0===t.indexOf(",")?e+t:t+e},setupSlide2:function(){var t=this.StatementActions[Math.floor(Math.random()*this.StatementActions.length)],e=this.SlideStatements[Math.floor(Math.random()*this.SlideStatements.length)];this.Slide2Content=e.replace(/---/g,this.MainSubject).replace(/___/g,t)},setupSlide3:function(){this.ChartMeasure=this.ChartMeasures[Math.floor(Math.random()*this.ChartMeasures.length)],this.ChartType=this.ChartTypes[Math.floor(Math.random()*this.ChartTypes.length)]},setupSlide4:function(){var t=this.Pros.sort(function(){return.5-Math.random()});this.RandomPros=t.slice(0,3),t=this.Cons.sort(function(){return.5-Math.random()}),this.RandomCons=t.slice(0,3)}}},X=J,K=Object(o["a"])(X,U,q,!1,null,null,null),Q=K.exports;s["a"].use(c["a"]);var Z=new c["a"]({mode:"history",base:"/battleslides/",routes:[{path:"/",name:"opening-credits",component:P},{path:"/title-screen",name:"title-screen",component:function(){return n.e("about").then(n.bind(null,"e6d0"))}},{path:"/intro-screen",name:"intro-screen",component:G},{path:"/turn-screen",name:"turn-screen",component:Y},{path:"/slides-screen",name:"slides-screen",component:Q}]}),tt=n("2f62");s["a"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:Z,store:et,render:function(t){return t(u)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.57b25726.js.map