<template>
<div>
  <h2>
    Round {{Round}}
  </h2>
  <div>
    Team X's turn!
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import { GameSettings } from '../common/GameSettings';

@Component({
  data: () => {
    return {
      Round: GameSettings.GetRound()
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
