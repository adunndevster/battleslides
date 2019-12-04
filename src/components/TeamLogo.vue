<template>
  <div class="team-logo-container">
    <img class="team-logo-mod" :src="require(`@/assets/logos/L_${TeamLogoLeft}.svg`)" />
    <img class="team-logo" :src="require(`@/assets/logos/${TeamLogoRight}.svg`)" />
    <div id="team-logo-title" class="team-logo-title" :style="{fontFamily:FontFamily}">{{TeamName}}</div>
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
  data: () => {
    return {
      FontFamily: "Segoe UI"
    }
  },
  mounted()
  {
    const fonts = ["EarwigFactory", "\"Comic Sans MS\", cursive, sans-serif", 
                    "ComicAndy", "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif"]
                    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    const teamLogoTitle = document.getElementById('team-logo-title');
    const randFont = Math.floor((this.TeamLogoLeft + this.TeamLogoRight).length % fonts.length);
    //teamLogoTitle.setAttribute('style', `font-family:${fonts[randFont]}`);
    this.FontFamily = fonts[randFont];
  },
  methods: {
    
  }
}
</script>

<style scoped>
.team-logo-container{
  position: absolute;
  width: 260px;
  /* height: 200px; */
  z-index: 9999;
  font-size: 32px;
  text-align: center;
}

.team-logo-container .team-logo-mod
{
  margin: 0 auto;
  position:absolute;
  top: 0px;
}

.team-logo-container .team-logo
{
  margin-top: 30%;
}

.team-logo-container .team-logo-title
{
  line-height: 30px;
  width: 260px;
  margin: 0 auto;
}

</style>
