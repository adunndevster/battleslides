<template>
  <div class="home">
    <video id="vidIntro" src="@/assets/animations/outside.mp4" preload="true" autoplay />
  </div>
</template>

<script >
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component({
  mounted () {
    // setTimeout(() => {
    //   router.push("title-screen");
    // }, 1000)
    
    let video = document.getElementById('vidIntro');
    video.play();
    video.onended = (event) => {
      router.push("title-screen");
    }

  }
})
export default class OpeningCredits extends Vue {}
</script>

<style scoped>
.home {

}

.home video
{
  width: 100vw;
  position: absolute;
  left: 0px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>