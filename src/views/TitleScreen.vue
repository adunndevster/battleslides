<template>
  <div>
    <h1>This is the title screen</h1>

    <a @click="startBattleMode">Battle Mode</a>
    <br>
    <a @click="startPartyMode">Party Mode</a>
  </div>
</template>

<script lang="ts">
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings"
import router from '../router';
export default {
  name: "title-screen",
  methods: {
    startBattleMode()
    {
      setGameMode(GAME_MODE_BATTLE);
      GameSettings.SetupBattleModeGame();
      router.push("intro-screen");
    },
    startPartyMode()
    {
      setGameMode(GAME_MODE_PARTY);
      router.push("intro-screen");
    }
  }
}
</script>