<template>
  <div id="app">
    <transition
        :name="transitionName"
        mode="out-in"
      >
    <router-view v-on:toggleScreenFade="toggleScreenFade"/>
    </transition>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  
  data: () => {
    return {
      transitionName: "fade",
    }
  },
  methods: {
    toggleScreenFade() {
      this.transitionName = (this.transitionName == "fade") ? "none" : "fade";
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
@import url('../node_modules/reveal.js/css/reveal.css');
@import url('../node_modules/bulma/css/bulma.css');
  
@font-face {
  font-family: EarwigFactory;
  src: url("/fonts/earwig factory rg.ttf");
}
@font-face {
  font-family: Misty;
  src: url("/fonts/MISTV___.TTF");
}
@font-face {
  font-family: Adler;
  src: url("/fonts/Adler.ttf");
}
@font-face {
  font-family: BurnstownDam;
  src: url("/fonts/burnstown dam.ttf");
}
@font-face {
  font-family: ComicAndy;
  src: url("/fonts/comic_andy.ttf");
}
@font-face {
  font-family: Jo;
  src: url("/fonts/Jo_wrote_a_lovesong.ttf");
}

body, html {
  background-color: white;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
