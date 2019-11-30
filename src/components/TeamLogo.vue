<template>
  <div class="team-logo-container">
    <img class="team-logo-mod" :src="require(`@/assets/logos/L_${TeamLogoLeft}.svg`)" />
    <img class="team-logo" :src="require(`@/assets/logos/${TeamLogoRight}.svg`)" />
    <div id="team-logo-title" class="team-logo-title">{{TeamName}}</div>
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
  mounted()
  {
    const fonts = ["EarwigFactory", "\"Comic Sans MS\", cursive, sans-serif", 
                    "ComicAndy", "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif"]
                    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    const teamLogoTitle = document.getElementById('team-logo-title');
    const randFont = Math.floor((this.TeamLogoLeft + this.TeamLogoRight).length % fonts.length);
    teamLogoTitle.setAttribute('style', `font-family:${fonts[randFont]}`);
  },
  methods: {
    
  }
}
</script>

<style scoped>
.team-logo-container{
  position: absolute;
  width: 200px;
  /* height: 200px; */
  z-index: 9999;
  font-size: 32px;
}

</style>
