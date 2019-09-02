<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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

</style>
