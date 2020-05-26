<template>
  <div class="main">
    
    <div>
      <video id="vid1" src="@/assets/animations/ending_game_part1.mp4" preload="true" autoplay />
      <video id="vid2" preload="true" autoplay />
    </div>

    <transition name="slide">
    <div class="logos" v-if="ShowLogoLeft">
      <TeamLogo class="team1" :team-logo-left="Team1LogoLeft" :team-logo-right="Team1LogoRight" :team-name="Team1Name" />
    </div>
    </transition>

    <transition name="slide">
    <div class="logos" v-if="ShowLogoRight">
      <TeamLogo class="team2" :team-logo-left="Team2LogoLeft" :team-logo-right="Team2LogoRight" :team-name="Team2Name" />
    </div>
    </transition>
    
    <router-link to="title-screen">
      <a>Again!</a>
    </router-link>
  </div>
</template>

<script>
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings"
import router from '../router';
import TeamLogo from '../components/TeamLogo.vue';
let vue;
export default {
  name: "game-finale",
  components: {
		TeamLogo
	},
  mounted () {
    vue = this;
    this.playVideo();
  },
  data: () => {
    return {
      Team1LogoLeft: GameSettings.Team1NameLeft,
      Team1LogoRight: GameSettings.Team1NameRight,
      Team2LogoLeft: GameSettings.Team2NameLeft,
      Team2LogoRight: GameSettings.Team2NameRight,
      Team1Name: GameSettings.Team1Name,
      Team2Name: GameSettings.Team2Name,
      ShowLogoLeft: false,
      ShowLogoRight: false
    }
  },
  methods: {
    playVideo()
    {
      var randWinner = Math.round(Math.random());  
      const vid1 = document.getElementById('vid1');
      const vid2 = document.getElementById('vid2');

      vid1.ontimeupdate = vid2.ontimeupdate = vidOnTimeUpdate;

      function vidOnTimeUpdate(event)
      {
        const vid = event.target;
        
        if(vid === vid1 && vid.currentTime >= 1 && vid.currentTime <= 2)
        {
          vue.ShowLogoLeft = true;
          vue.ShowLogoRight = true;
        }

        if(vid === vid1 && vid.currentTime >= 11 && vid.currentTime <= 13)
        {
          vue.ShowLogoLeft = randWinner;
          vue.ShowLogoRight = !randWinner;
        }

        if(vid === vid1 && vid.currentTime >= 23 && vid.currentTime <= 25)
        {
          vue.ShowLogoLeft = false;
          vue.ShowLogoRight = false;
        }
      }

      vid1.onended = function() {
        vid2.src = require("@/assets/animations/end_alt_grandma.mp4");
        window.setTimeout(() => vid1.setAttribute('style', 'display:none;'), 250);
      }; 
    }
  }
}
</script>
<style scoped>
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
    z-index: 9000;
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