<template>
  <div>
    This is the intro screen

    <router-link to="turn-screen">
      <a>Start</a>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component({
  mounted () {
  }
})
export default class IntroScreen extends Vue {}
</script>
