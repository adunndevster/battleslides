<template>
  <div>
    <h1>Congratulations!!!</h1>

    <div>I 'spose we will have a randomly selected video that says something funny, and then overlay who the winner is, and why they won?</div>

    <router-link to="title-screen">
      <a>Again!</a>
    </router-link>
  </div>
</template>

<script>
import setGameMode, { GAME_MODE_BATTLE, GAME_MODE_PARTY, GameSettings } from "../common/GameSettings"
import router from '../router';
export default {
  name: "game-finale",
  methods: {
    
  }
}
</script>