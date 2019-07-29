<template>
  <div class="home">
    Made by Rob and Adam
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import router from '../router';

@Component({
  components: {
    HelloWorld,
  },
  mounted () {
    setTimeout(() => {
      router.push("title-screen");
    }, 3000)
  }
})
export default class OpeningCredits extends Vue {}
</script>
