<template>
  <div>
    <h1>This is the title screen</h1>

    <a @click="startBattleMode">Battle Mode</a>
    <br>
    <a @click="startPartyMode">Party Mode</a>
  </div>
</template>

<script lang="ts">
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings";
import router from '../router';
//import {io} from "socket.io";

export default {
  name: "title-screen",
  mounted() {
    //const io = require('socket.io');
    const RTCMultiConnection = require('rtcmulticonnection');
    
    var connection = new RTCMultiConnection();
    // this line is VERY_important
    connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
    // if you want audio+video conferencing
    connection.session = {
        audio: true,
        video: true
    };

    connection.openOrJoin('your-room-id');
  },
  methods: {
    startBattleMode()
    {
      GameSettings.SetupBattleModeGame();
      router.push("intro-screen");
    },
    startPartyMode()
    {
      GameSettings.SetupPartyModeGame();
      router.push("intro-screen");
    }
  }
}
</script>