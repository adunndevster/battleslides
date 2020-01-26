<template>
  <div class="main">
    <div v-show="IsBattleMode">
      <video id="vid1" src="@/assets/animations/intro_game_part1.mp4" preload="true" autoplay />
      <video id="vid2" preload="true" autoplay />
    </div>
    <div v-show="!IsBattleMode">
      Party Mode! Play the right intro video
    </div>

    <transition name="slide">
      <div class="logos" v-if="ShowLogos">
        <TeamLogo class="team1" :team-logo-left="Team1LogoLeft" :team-logo-right="Team1LogoRight" :team-name="Team1Name" />
        <TeamLogo class="team2" :team-logo-left="Team2LogoLeft" :team-logo-right="Team2LogoRight" :team-name="Team2Name" />
      </div>
    </transition>

    <transition name="bounce">
      <a id="btnSkip" @click="doSkip"  v-if="showSkipButton">Skip</a>
      <a id="btnReady" @click="doReady"  v-if="showReadyButton">We're Ready!</a>
    </transition>
     
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import { GameMode, GAME_MODE_BATTLE, GameSettings } from '../common/GameSettings';
import TeamLogo from '../components/TeamLogo.vue';

let vue;
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
      ShowLogos: false,
      showSkipButton: false,
      showReadyButton: false,
      playhead: 0,
      videoTrack: []
    }
  },
  mounted () {
    vue = this;
    this.$emit('toggleScreenFade');
    const vid1 = document.getElementById('vid1');
    const vid2 = document.getElementById('vid2');
    const quip = require("@/assets/animations/guy_up_close_kegels.mp4");
    const p2 = require("@/assets/animations/intro_game_part2.mp4");
    const where = require("@/assets/animations/bikerbar_1.mp4");
    const p3 = require("@/assets/animations/intro_game_part3.mp4");
    const loop = require("@/assets/animations/intro_game_team_loop.mp4");
    const p4 = require("@/assets/animations/intro_game_part4.mp4");
    const p5 = require("@/assets/animations/intro_game_part5.mp4");
    vue.videoTrack = [quip, p2, where, p3, loop, p4, p5];

    vid1.onended = vid2.onended = vidOnEnded;

    vid1.ontimeupdate = vid2.ontimeupdate = vidOnTimeUpdate;

    function vidOnEnded(event){

      if(vue.playhead%2 === 0)
      {
        vid2.src = vue.videoTrack[vue.playhead++];
        window.setTimeout(() => vid2.setAttribute('style', 'display:block;'), 250);
        handleLoop(vid2);
      } else {
        vid1.src = vue.videoTrack[vue.playhead++];
        window.setTimeout(() => vid2.setAttribute('style', 'display:none;'), 250);
        handleLoop(vid1);
      }
      
      const currentVid = event.target;
      if(currentVid.src.indexOf('rodeo') > -1)
      {
        vid1.autoplay = true;
        vid2.autoplay = true;
      }

      if(vue.playhead === vue.videoTrack.length)
      {
        vue.showSkipButton = false;
      }
      if(vue.playhead === vue.videoTrack.length + 1)
      {
        router.push("turn-screen");
      }
    }

    function handleLoop(vid)
    {
      if(vue.videoTrack[vue.playhead] == p4)
      {
        vid.loop = true;
        vue.showReadyButton = true;
        vue.showSkipButton = false;
      } else {
        vid1.loop = vid2.loop = false;
        vue.showReadyButton = false;
        vue.showSkipButton = true;
      }
    }

    function vidOnTimeUpdate(event)
    {
      const vid = event.target;
      if(vid.src.indexOf(p3) != -1 && vid.currentTime >= 35 && vid.currentTime <= 36)
      {
        vue.ShowLogos = true;
      }

      if(vid.src.indexOf(p4) != -1 && vid.currentTime >= 2 && vid.currentTime <= 3)
      {
        vue.ShowLogos = false;
      }
    }

    window.setTimeout(() => vue.showSkipButton = true, 500);
  },
  methods: {
    doSkip()
    {
      vue.ShowLogos = false; 
      vue.showSkipButton = false;
      const rodeo = require("@/assets/animations/guy_rodeo.mp4");
      if(vue.playhead%2 === 0)
      {
        vid2.src = rodeo;
        window.setTimeout(() => {
          vid1.autoplay = false;
          vid1.src = vue.videoTrack[vue.videoTrack.length - 1];
          vid2.setAttribute('style', 'display:block;')
        }, 250);
      } else {
        vid1.src = rodeo;
        window.setTimeout(() => {
          vid2.autoplay = false;
          vid2.src = vue.videoTrack[vue.videoTrack.length - 1];
          vid2.setAttribute('style', 'display:none;')
        }, 250);
      }

      vue.playhead = vue.videoTrack.length - 1;

    },
    doReady()
    {
      vue.showSkipButton = true;
      vue.showReadyButton = false;
      vid1.loop = vid2.loop = false;
      vid1.autoplay = vid2.autoplay = true;
      if(vue.playhead%2 === 0)
      {
        vid1.pause();
        vid2.src = vue.videoTrack[vue.playhead++];
        window.setTimeout(() => vid2.setAttribute('style', 'display:block;'), 250);
      } else {
        vid2.pause();
        vid1.src = vue.videoTrack[vue.playhead++];
        window.setTimeout(() => vid2.setAttribute('style', 'display:none;'), 250);
      }

    }
  },
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

  #btnReady {
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

  .slide-enter-active {
    transform: translateX(5%);
    opacity: 0;
    animation: slide-in .5s .6s;
  }
  .slide-leave-active {
    animation: slide-in .5s reverse;
  }
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  .logos{
    position: absolute;
    left:3%;
    margin-top:3vh;
    width: 93vw;
    height: 25.5vw;
  }

  .logos .team1
  {
    /* width: 10vw; */
    position: absolute;
    left: 13%;
    top: 22vh;
    transform: translateY(-50%) scale(.8);
  }

  .logos .team2
  {
    /* width: 10vw; */
    position: absolute;
    right: 13%;
    top: 22vh;
    transform: translateY(-50%) scale(.8);
  }
  
</style>