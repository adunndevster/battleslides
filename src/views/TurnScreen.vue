<template>
<div class="main">
  <div class="intro-presentation-screen">
    <video id="vid" preload="true" autoplay />

    <TeamLogo :team-logo-left="TeamLogoLeft" :team-logo-right="TeamLogoRight" :team-name="TeamName" v-show="Round < 3"/>

    <h2 class="round-title" v-show="Round < 3">
      Round {{Round}}
    </h2>
  </div>
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import { GameSettings } from '../common/GameSettings';
import TeamLogo from '../components/TeamLogo';

@Component({
  components:
  {
    TeamLogo
  },
  data: () => {
    return {
      Round: GameSettings.GetRound(),
      TeamName: GameSettings.Team1Turn ? GameSettings.Team1Name : GameSettings.Team2Name,
      TeamLogoLeft: GameSettings.Team1Turn ? GameSettings.Team1NameLeft : GameSettings.Team2NameLeft,
      TeamLogoRight: GameSettings.Team1Turn ? GameSettings.Team1NameRight : GameSettings.Team2NameRight
    }
  },
  mounted () {
    this.playVideo();
  },
  methods: {
    playVideo()
    {
      if(this.Round < 3)
      {
        setTimeout(() => {
          router.push("slides-screen");
        }, 6000)
        const vid = document.getElementById('vid');
        vid.src = require("@/assets/animations/turn_" + Math.ceil(Math.random() * 3) + ".mp4");
      } else {
        const vid = document.getElementById('vid');
        vid.src = require("@/assets/animations/debate_game_part1.mp4");
        vid.onended = function() {
          router.push("slides-screen");
        };
      }
      
    }
  }
})
export default class TurnScreen extends Vue {}
</script>

<style scoped>
.round-title
{
  position: absolute;
  left: 50%;
  top: 8%;
  transform: translate(-50%, -0%);
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  font-size: 60px;
}

.team-logo-container{
  left: 50%;
  top: 42%;
  transform: translate(-50%, -100%);
  width: 300px;
  height: 300px;
  font-size: 40px;
}
</style>