<template>
  <div class="team-logo-container">
    <img class="team-logo" :src="require(`@/assets/logos/${TeamLogoRight}.svg`)" />
    <img class="team-logo-mod" :src="require(`@/assets/logos/L_${TeamLogoLeft}.svg`)" />
    <div class="team-logo-title">{{TeamName}}</div>
  </div>
</template>

<script>

export default {
  name: 'team-logo',
  props: {
    TeamName: String,
    TeamLogoLeft: String,
    TeamLogoRight: String
  },
  methods: {
    
  }
}
</script>

<style scoped>
.team-logo-container{
  position: relative;
  max-width: 200px;
  max-height: 200px;
  z-index: 9999;
}

.team-logo {
  position:absolute;
  top: 50px;
}

.team-logo-mod {
  position: absolute;
  /* width: 30px; */
  left: 100px;
}

.team-logo-title {
  position: absolute;
  top: 200px;
  margin: 50%;
  min-width: 200px;
  font-size: 32px;
}
</style>
