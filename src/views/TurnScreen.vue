<template>
<div>
  <h2>
    Round {{Round}}
  </h2>
  <div v-show="Round < 3">
    {{TeamName}}'s turn!

    <TeamLogo :team-logo-left="TeamLogoLeft" :team-logo-right="TeamLogoRight" :team-name="TeamName" />
  </div>
  <div v-show="Round === 3">
    Final Round! Funky video by Guy intervening, and talking about a debate!
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
    setTimeout(() => {
      router.push("slides-screen");
    }, 3000)
  },
})
export default class TurnScreen extends Vue {}
</script>
