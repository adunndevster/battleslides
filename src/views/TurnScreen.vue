<template>
  <div>
    Team X's turn!
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component({
  mounted () {
    setTimeout(() => {
      router.push("slides-screen");
    }, 3000)
  },
})
export default class TurnScreen extends Vue {}
</script>
