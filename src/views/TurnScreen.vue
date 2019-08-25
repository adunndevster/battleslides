<template>
<div>
  <h2>
    Round {{Round}}
  </h2>
  <div>
    {{TeamName}}'s turn!
  </div>
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import { GameSettings } from '../common/GameSettings';

@Component({
  data: () => {
    return {
      Round: GameSettings.GetRound(),
      TeamName: GameSettings.Team1Turn ? GameSettings.Team1Name : GameSettings.Team2Name
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
