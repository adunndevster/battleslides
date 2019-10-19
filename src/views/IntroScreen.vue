<template>
  <div class="main">
    <div v-show="IsBattleMode">
      <video id="vid1" src="@/assets/animations/intro_game_part1.mp4" preload="true" autoplay />
      <video id="vid2" preload="true" autoplay />
    </div>
    <div v-show="!IsBattleMode">
      Party Mode! Play the right intro video
    </div>

    <router-link to="turn-screen">
      <transition name="bounce">
        <a id="btnSkip"  v-if="showSkipButton">Skip</a>
      </transition>
    </router-link>
     
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import { GameMode, GAME_MODE_BATTLE, GameSettings } from '../common/GameSettings';
import TeamLogo from '../components/TeamLogo.vue';

export default {
  name: "intro-screen",
  components: {
		TeamLogo
	},
  data: () => {
    return {
      IsBattleMode: GameMode === GAME_MODE_BATTLE,
      Team1LogoLeft: GameSettings.Team1NameLeft,
      Team1LogoRight: GameSettings.Team1NameRight,
      Team2LogoLeft: GameSettings.Team2NameLeft,
      Team2LogoRight: GameSettings.Team2NameRight,
      Team1Name: GameSettings.Team1Name,
      Team2Name: GameSettings.Team2Name,
      showSkipButton: false
    }
  },
  mounted () {
    const vue = this;
    let playhead = 0;
    const vid1 = document.getElementById('vid1');
    const vid2 = document.getElementById('vid2');
    const quip = require("@/assets/animations/guy_up_close_kegels.mp4");
    const p2 = require("@/assets/animations/intro_game_part2.mp4");
    const where = require("@/assets/animations/bikerbar_1.mp4");
    const p3 = require("@/assets/animations/intro_game_part3.mp4");
    const loop = require("@/assets/animations/intro_game_team_loop.mp4");
    const p4 = require("@/assets/animations/intro_game_part4.mp4");
    let videoTrack = [quip, p2, where, p3, loop, p4];

    vid1.onended = vid2.onended = vidOnEnded;

    function vidOnEnded(event){
      if(playhead%2 === 0)
      {
        vid2.src = videoTrack[playhead++];
        window.setTimeout(() => vid2.setAttribute('style', 'display:block;'), 250);
      } else {
        vid1.src = videoTrack[playhead++];
        window.setTimeout(() => vid2.setAttribute('style', 'display:none;'), 250);
      }
    }

    window.setTimeout(() => vue.showSkipButton = true, 500);
  }
}
</script>

<style scoped>
  #btnSkip {
    z-index: 1000;
    position: absolute;
    bottom: 90px;
    right: 90px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 48px;
  }  

  .bounce-enter-active {
    transform: scale(0);
    animation: bounce-in .5s 3s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
</style>