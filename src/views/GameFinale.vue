<template>
  <div class="intro-presentation-screen">
    <video id="vid1" src="@/assets/animations/ending_game_part1.mp4" preload="true" autoplay />
    <video id="vid2" preload="true" autoplay />
    <router-link to="title-screen">
      <a>Again!</a>
    </router-link>
  </div>
</template>

<script>
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings"
import router from '../router';
export default {
  name: "game-finale",
  mounted () {
    this.playVideo();
  },
  methods: {
    playVideo()
    {
      const vid1 = document.getElementById('vid1');
      const vid2 = document.getElementById('vid2');
      vid1.onended = function() {
        vid2.src = require("@/assets/animations/end_alt_grandma.mp4");
        window.setTimeout(() => vid1.setAttribute('style', 'display:none;'), 250);
      }; 
    }
  }
}
</script>