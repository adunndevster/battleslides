<template>
  <div>
    <div v-show="IsBattleMode">
      Battle Mode! Play the right intro video
    </div>
    <div v-show="!IsBattleMode">
      Party Mode! Play the right intro video
    </div>

    <div class="columns">
      <div class="column"><TeamLogo :team-logo-left="Team1LogoLeft" :team-logo-right="Team1LogoRight" :team-name="Team1Name" /></div>
      <div class="column">vs</div>
      <div class="column"><TeamLogo :team-logo-left="Team2LogoLeft" :team-logo-right="Team2LogoRight" :team-name="Team2Name" /></div> 
    </div>

    <router-link to="turn-screen">
      <a>Start</a>
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
      Team2Name: GameSettings.Team2Name
    }
  },
  mounted () {

  }
}
</script>
