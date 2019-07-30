<template >
  <div class="reveal">
    <div class="slides">

        <section>
            <h1>{{Slide1Content}}</h1>
        </section>

        <section>
            <h2>{{Slide2Content}}</h2>
            
        </section>

        <section>
          <h3>{{MainSubject}} and {{ChartMeasure}}</h3>
          <div class="columns is-vcentered">
            <div class="column">{{MainSubject}}</div>
            <div class="column is-three-quarters"><img src="@/assets/line-up.svg"/></div>
          </div>
          <div class="columns">
            <div class="column"></div>
            <div class="column is-three-quarters">{{ChartMeasure}}</div>
          </div>
          
        </section>

        <section>
          <h1>Pros/Cons</h1>
        </section>

        <section>
          <h1>Demonstration / Story</h1>
        </section>

        <section>
            <h1>3 Points</h1>
            <p>Let's make some bullet points!</p>
            <ul>
                <li class="fragment">Some info</li>
                <li class="fragment">Some more info</li>
                <li class="fragment">Some extra info</li>
            </ul>
        </section>

        <section>
          <h1>Completely Random Slide</h1>
        </section>

        <section>
          <h1>Conclusion...</h1>
        </section>
    </div>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Reveal from 'reveal.js/js/reveal'
export default {
  name: 'slides-screen',
  data: () => {
    let slideData = 
      {
        "TitleActions":["Getting Started with ","Growing Your Business with ",", Listening and Learning","... Isn't It About Time?","Getting Down and Dirty With ","What Happens When you Try To Eat "," are for N00BS!",", Seeing is Believing",", let's DIVE IN!","... a 500 Foot View!","What My Parents Can Learn From "," Are as Overated as High Heels or Tupes",", and Getting Over Your Ex.","... Let's Get Effin Rich!",", or \"What the Chinese Do.\"",", Nobody Loves 'Em More Than Me. - Donald Trump","Engaging in Dangerous Acts with ",", Get the Heck Out of My Vagina!",", Am I Right!?","How to Get More Out of Your ","... Don't They Have Puncahble Faces?","Stop All Be Crawlin' on Your Bellies,  ",", You Got Played!"," and Other Iffy Choices","Unconventional Methods of Childcare Using ","","","","","","","","",""],
        "TitleSubjects":["Airlines","Airplanes","Automobiles","Ballerinas","Basketball players","Casinos","Cats","Computers","Cupcakes","Dogs","Fathers","Friends","Giraffes","Hotels","Mothers","Robots","Rock Bands","Sports","Tacos","Warrior princesses","Weddings","Elves","Bankers","Religions","Dolphins","Bakers","Hipsters","Fitness Instructors","Gamers","Hedgehogs and Plumbers","Children","Bush and Obama","Hemerhoids","Pencil Necks"],
        "SlideStatements":["Now is the time for --- to ___.","If only --- would ___, we wouldn't be in this situation.","I think --- should ___.","Who agrees that --- should ___?","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "StatementActions":["jump up and down until all the marbles fall out","dance, dance, dance, and never stop","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "ChartTypes":["Pie","Bar","Line","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "ChartMeasures":["My angst","Happiness","Cholesterol","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "Pros":["Cost effective","Aid in digestion","Can be sexy","Aphrodesiac","Appetite suppressant","Earns trust","Attracts friends","Good flame retardent","Cuter than a kitten","Can help you be an influencer","Gotten me out of more than one tight spot","Libido alert!","","","","","","","","","","","","","","","","","","","","","",""],
        "Cons":["Lead to addiction","Cause weight gain","Expensive","Lower your social standing","Can cause bloating","May lead to instant fame","Can test positive for diahrea","May cause the Lord to smite you","","","","","","","","","","","","","","","","","","","","","","","","","",""]
      };

    for (var key in slideData) {
      if (slideData.hasOwnProperty(key)) {
        slideData[key] = slideData[key].filter((item) => {
          return item !== "";
        })
      }
    }

    return {
      MainSubject: "",
      TitleActions: slideData.TitleActions,
      TitleSubjects: slideData.TitleSubjects,
      SlideStatements: slideData.SlideStatements,
      StatementActions: slideData.StatementActions,
      ChartMeasures: slideData.ChartMeasures,
      Pros: slideData.Pros,
      Cons: slideData.Cons,
      Slide1Content: "",
      Slide2Content: "",
      ChartMeasure: ""
    }
  },
  components: {
  },
  mounted() {
    this.setupSlide1();
    this.setupSlide2();
    this.setupSlide3();

    Reveal.initialize({
      controls: false
    })
  },
  methods: {
    setupSlide1() {
      const randTitleAction = this.TitleActions[Math.floor(Math.random() * this.SlideStatements.length)];
      const randTitleSubject = this.TitleSubjects[Math.floor(Math.random() * this.TitleSubjects.length)];
      this.MainSubject = randTitleSubject;
      this.Slide1Content = (randTitleAction.indexOf(' ') === 0 || 
                            randTitleAction.indexOf('.') === 0 || 
                            randTitleAction.indexOf(',') === 0) ? randTitleSubject + randTitleAction : randTitleAction + randTitleSubject;

    },
    setupSlide2() {
      const randAction = this.StatementActions[Math.floor(Math.random() * this.StatementActions.length)];
      const randStatement  = this.SlideStatements[Math.floor(Math.random() * this.SlideStatements.length)];
      this.Slide2Content = randStatement.replace(/---/g, this.MainSubject).replace(/___/g, randAction);
    },
    setupSlide3() {
      this.ChartMeasure = this.ChartMeasures[Math.floor(Math.random() * this.ChartMeasures.length)];
    }
  }
}
</script>


<style lang="less">
  
</style>
