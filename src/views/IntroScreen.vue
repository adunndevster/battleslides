<template>
  <div>
    <div v-show="IsBattleMode">
      Battle Mode! Play the right intro video
    </div>
    <div v-show="!IsBattleMode">
      Party Mode! Play the right intro video
    </div>

    <router-link to="turn-screen">
      <a>Start</a>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import { GameMode, GAME_MODE_BATTLE } from '../common/GameSettings';

export default {
  name: "intro-screen",
  data: () => {
    return {
      IsBattleMode: GameMode === GAME_MODE_BATTLE
    }
  }
}
</script>
