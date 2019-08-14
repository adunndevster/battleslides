<template >
  <div class="reveal">
    <div class="slides">

        <section>
            <h2>{{Slide1Content}}</h2>
        </section>
      
        <section>
            <h2>{{Slide2Content}}</h2>
            
        </section>

        <section>
          <h3>{{MainSubject}} and {{ChartMeasure}}</h3>
          <div class="columns is-vcentered">
            <div class="column">{{MainSubject}}</div>
            <div class="column is-three-quarters"><img :src="require(`@/assets/${ChartType}`)"/></div>
          </div>
          <div class="columns">
            <div class="column"></div>
            <div class="column is-three-quarters">{{ChartMeasure}}</div>
          </div>
          
        </section>

        <section>
          <h2>{{MainSubject}}</h2>
          <div class="columns">
            <h3 class="column">Pros</h3>
            <h3 class="column">Cons</h3>
          </div>
          <div class="columns">
            <div class="column">
              <ul>
                <li class="fragment">{{RandomPros[0]}}</li>
                <li class="fragment">{{RandomPros[1]}}</li>
                <li class="fragment">{{RandomPros[2]}}</li>
              </ul>  
            </div>
            <div class="column">
              <ul>
                <li class="fragment">{{RandomCons[0]}}</li>
                <li class="fragment">{{RandomCons[1]}}</li>
                <li class="fragment">{{RandomCons[2]}}</li>
              </ul>  
            </div>
          </div>
        </section>

        <section>
          <h2>{{Demonstration}}</h2>
        </section>

        <section>
            <h3>{{PointHeader}}</h3>
            <ul>
                <li class="fragment">{{RandomPoints[0]}}</li>
                <li class="fragment">{{RandomPoints[1]}}</li>
                <li class="fragment">{{RandomPoints[2]}}</li>
            </ul>
        </section>

        <section>
          <div class="random-image-div">
          </div>
          <img class="random-image" :src="require(`@/assets/random-images/${MainSubject}.png`)"/>
          <img :src="require(`@/assets/random-images/${RandomBG}`)"/>
        </section>

        <section>
          <h2>{{Conclusion}}</h2>
        </section>
    </div>
     <transition name="bounce">
        <a id="btnContinue" @click="nextPresnetation" v-if="showContinueButton">Continue</a>
     </transition>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Reveal from 'reveal.js/js/reveal'
import { GameMode, GameSettings, GAME_MODE_PARTY } from '../common/GameSettings';
import router from '../router';
export default {
  name: 'slides-screen',
  data: () => {
    let slideData = 
      {
        "TitleActions":["Getting Started with ","Growing Your Business with ",", Listening and Learning","... Isn't It About Time?","Getting Down and Dirty With ","What Happens When you Try To Eat "," are for N00BS!",", Seeing is Believing",", let's DIVE IN!","... a 500 Foot View!","What My Parents Can Learn From "," Are as Overated as High Heels or Tupes",", and Getting Over Your Ex.","... Let's Get Effin Rich!",", or \"What the Chinese Do.\"",", Nobody Loves 'Em More Than Me. - Donald Trump","Engaging in Dangerous Acts with ",", Get the Heck Out of My Vagina!",", Am I Right!?","How to Get More Out of Your ","... Don't They Have Puncahble Faces?","Stop All Be Crawlin' on Your Bellies, ",", You Got Played!"," and Other Iffy Choices","Unconventional Methods of Childcare Using ","The Unexpected Benefits of ",": What Up With That?","You Can't Blame Me for Hating ","Why I Can't Get Enough of ","The Controversy Surrounding ",": Both Sides of the Story","","","","","","","","","","","","","","","","","","","",""],
        "TitleSubjects":["Airlines","Airplanes","Automobiles","Ballerinas","Basketball players","Casinos","Cats","Computers","Cupcakes","Dogs","Fathers","Friends","Giraffes","Hotels","Mothers","Robots","Rock Bands","Sports","Tacos","Warrior princesses","Weddings","Elves","Bankers","Religions","Dolphins","Bakers","Hipsters","Fitness Instructors","Gamers","Hedgehogs and Plumbers","Children","Bush and Obama","Hemorrhoids","Pencil necks","Hypnotists*","Flannels*","Novelty Tuxedo T-Shirts*","Homemade Vaccines*","Piercings*","Breath Mints*","Nude Sculptures*","Butterfly Kisses*","Athletic Underpants*","Books*","Maps*","Very Small Dogs*","Minivans*","Horses*","Venomous Snakes*","Buckets of Scorpions*","Razor Blades*"],
        "SlideStatements":["Now is the time for --- to ___.","If only --- would ___, we wouldn't be in this situation.","I think --- should ___.","Who agrees that --- should ___?","All the kids want --- to ___.","Can --- ___?","Women like --- when they ___.","My daddy wants --- to ___","Based on legal precendence, --- must now ___.","This is my way of asking you to ___.","If --- can ___, so can you.","Note that --- are known for their tendency to ___.","They all said I couldn't ___ with ---, and they were wrong.","They all said I couldn't ___ with ---, and they were right.","Fun fact: --- ___.","If you ___, you'll learn to love ---.","Take it from me: I love ---, and I ___ all the time.","I ___ every day, so naturally I can't get enough of ---.","If you're like me, --- makes you want to ___.","Thinking about --- makes me want to ___.","Don't assume --- will ___.","When I ___, I hope --- will be nearby.","When you are ready to ___, the --- will support you.","Men secretly want --- to ___.","How could --- ever ___ again after what happened?","You all need --- to ___.","You, too, can ___ with ---. Stay tuned.","The President needs --- to ___.","Don't believe what you've read: --- will ___.","Someday --- will finally ___.","Who can tell me why --- shouldn't ___?","When should --- ___?","I'm sensing some of you don't believe --- should ___.","You'll often find --- attempting to ___.","","","","","","","","","","","","","","","","",""],
        "StatementActions":["jump up and down until all the marbles fall out","dance, dance, dance, and never stop","put their money where their mouth is","flip the script","be more careful with dad's bank account","wave their hands in the air like the just don't care","hurry and rush to the bathroom","just please go get a job","get off my lawn","pair up, and really make some thing special","jump in a blender and make a soup","throw a bag of puppies in the river","call grandma a liar","swoop in and get them eggs","turn the tables","tickle my little bum-bum","snort some rails","comfort a stranger","wash hands without soap","complain to customer service","get featured in a Broadway musical","make me a sandwich","have dinner with my parents","explore the abandoned mine shaft on the edge of town","make a mixtape","travel the world","ride in a hot air balloon","DJ at weddings","sing karaoke","kiss a horse on the lips","play baseball with your dad","get something going","invite us to a fancy party","spread diseases","","","","","","","","","","","","","","","","",""],
        "ChartTypes":["line-up.svg","line-down.svg","pie.svg","pie2.svg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "ChartMeasures":["My Angst","Happiness","Cholesterol","Freed Refugees","Morning Woods","Mucus","Old Ladies Helped","Whales Slaughtered","My Waistline","Jobs for Millenials","My Relevance","Time","Years","Minutes","Softness","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "Pros":["Cost effective","Aid in digestion","Can be sexy","Aphrodesiac","Appetite suppressant","Earns trust","Attracts friends","Good flame retardent","Cuter than a kitten","Can help you be an instagram influencer","Gotten me out of more than one tight spot","Libido alert!","Lead to spiritual epiphanies","Can give you street cred","Valid form of birth control","Biodegradable","Just feels good, man","Lead to grocery discounts","Newsletter option available","Matching T-shirt available","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "Cons":["Lead to addiction","Cause weight gain","Expensive","Lower your social standing","Can cause bloating","May lead to instant fame","Can test positive for diahrea","May cause the Lord to smite you","Crypts are not cool with them, yo","Bloods are not cool with them, yo","Millenials are allergic to them","Instant babby!","Make the Mormons show up","Causes rash","Anal leakage","Death","Phone calls from the neighbors","Not Biodegradable","Loud","Snakes","Last time, someone died","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "PointHeaders":["Some reasons to think about ___","I'll tell you what I think about ___","I happen to have a lot in common with ___","We need to address the problem of ___","Why you should invest in ___","Anyone here single? Why it might be good to date ___...","Things mom said about ___","Why ___ will be the next big thing","Why my mother prefers ___","The story of how ___ changed my life","Why ___ make great pets","Reasons to avoid ___","Here's why ___ will benefit society","Extra! Extra! Read all about ___!","Sip these hot cups of ___:","True or false? When dealing with ___...","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "Points":["I once found them in my bathroom","I like to present them to my grandma","They make for delicious appetizers","We should organize a trip to take some to the zoo!","It would be fun to get matching tattoos","Don't get me STARTED","Imagine being stuck in a closet with them and Tom Cruise","They are my guilty pleasure","Throw in the crockpot, add a dash of salt and... muah!","Kim Jong Un is a huge fan, too","I think they are planning a coup d'état","There goes the neighborhood","The farmers get unhappy","Affects the global economy","The shorter, the better","So thick and juicy","May cause muscle spasms","I just want to play with them","Currently being adapted into a major motion picture","Good for the environment","Bad for large sea mammals","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "DemonstrationsLeft":["Now let that sink in. I'm hopping on one leg","I'm going to try some giraffe calls now","I'll lead us in a moment of silence","Time to feign incontinence","Lemme tell you how my grandpop got me interested in this","Here's the traumatic event that lead me to talk about this","Look at me! I'm dancing","Allow me to imitate a baseball player","Break time! Everyone dance","Now I will sing a song about this","Here's me walking on hot coals","Let me cavort across the room like a distinguished gentleman","Volunteer please! I'm going to show you all a karate move","Now is the time for me to compliment each person in the room","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "DemonstrationsRight":[", and have a serious face.",", while power queefing.",", and closing my eyes really tight.",", while I look on the ground for my keys.",", while doing squats.",", while I make intense eye contact.","! Why don't you join me?",", while faking an injury.",", while chest/fist bumping everyone!",", while someone physically tries to stop me!",", while shreiking like a donkey.",", while holding this sh#$-faced grin.",", while doing my best at the jump splits.",", while I scrunch up my face like this","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        "Conclusions":["So, are you all on board or what!?","Who's with me!!!?","And that's what I think about ___.","I hope you all have a better understanding of ___.","Now who's going to give me all their money?","And that's why ___ are going to lead us to the promised land.","And that's why we should enlist ___ to help us stop the next genocide.","But don't take my word for it, try ___ for yourself.","Please consider donating to the ___ foundation.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
      };

    for (var key in slideData) {
      if (slideData.hasOwnProperty(key)) {
        slideData[key] = slideData[key].filter((item) => {
          return item !== "" && item.indexOf('*') === -1;
        })
      }
    }

    return {
      MainSubject: "Tacos",
      TitleActions: slideData.TitleActions,
      TitleSubjects: slideData.TitleSubjects,
      SlideStatements: slideData.SlideStatements,
      StatementActions: slideData.StatementActions,
      ChartTypes: slideData.ChartTypes,
      ChartMeasures: slideData.ChartMeasures,
      Pros: slideData.Pros,
      Cons: slideData.Cons,
      PointHeaders: slideData.PointHeaders,
      Points: slideData.Points,
      DemonstrationsLeft: slideData.DemonstrationsLeft,
      DemonstrationsRight: slideData.DemonstrationsRight,
      Conclusions: slideData.Conclusions,
      Slide1Content: "",
      Slide2Content: "",
      ChartMeasure: "",
      ChartType: "line-down.svg",
      RandomPros: [],
      RandomCons: [],
      Demonstration: "",
      PointHeader: "",
      RandomPoints: [],
      Conclusion: "",
      RandomBG: "bg1.jpg",
      styleEl: null,
      showContinueButton: false
    }
  },
  components: {
  },
  mounted() {
    Reveal.reset();

    this.loadSlideStyle();
    this.shuffleSlides();
    this.setupSlide1();
    this.setupSlide2();
    this.setupSlide3();
    this.setupSlide4();
    this.setupSlide5();
    this.setupSlide6();
    this.setupSlide7();
    this.setupSlide8();

    Reveal.initialize({
      controls: false
    });

    Reveal.addEventListener( 'slidechanged', this.slideChanged);
  },
  methods: {
    slideChanged(event){
      this.showContinueButton = Reveal.isLastSlide();
    },
    shuffleSlides(){
      const slides = document.querySelector('.slides');
      const lastSlide = slides.children[slides.children.length-1];
      slides.appendChild(slides.children[0]);
      for (var i = slides.children.length-1; i >= 1; i--) {
          slides.appendChild(slides.children[(Math.random() * i) | 0]);
      }
      slides.appendChild(lastSlide);
    },
    setupSlide1() {
      const randTitleAction = this.TitleActions[Math.floor(Math.random() * this.TitleActions.length)];
      const randTitleSubject = this.TitleSubjects[Math.floor(Math.random() * this.TitleSubjects.length)];
      this.MainSubject = randTitleSubject;
      this.Slide1Content = (randTitleAction.indexOf(' ') === 0 || 
                            randTitleAction.indexOf('.') === 0 || 
                            randTitleAction.indexOf(':') === 0 || 
                            randTitleAction.indexOf(',') === 0) ? randTitleSubject + randTitleAction : randTitleAction + randTitleSubject;

    },
    setupSlide2() {
      const randAction = this.StatementActions[Math.floor(Math.random() * this.StatementActions.length)];
      const randStatement  = this.SlideStatements[Math.floor(Math.random() * this.SlideStatements.length)];
      this.Slide2Content = randStatement.replace(/---/g, this.MainSubject).replace(/___/g, randAction);
    },
    setupSlide3() {
      this.ChartMeasure = this.ChartMeasures[Math.floor(Math.random() * this.ChartMeasures.length)];
      this.ChartType = this.ChartTypes[Math.floor(Math.random() * this.ChartTypes.length)];
    },
    setupSlide4() {
      let shuffled = this.Pros.sort(() => 0.5 - Math.random());
      this.RandomPros = shuffled.slice(0, 3);

      shuffled = this.Cons.sort(() => 0.5 - Math.random());
      this.RandomCons = shuffled.slice(0, 3);
    },
    setupSlide5() {
      const randLeft = this.DemonstrationsLeft[Math.floor(Math.random() * this.DemonstrationsLeft.length)];
      const randRight = this.DemonstrationsRight[Math.floor(Math.random() * this.DemonstrationsRight.length)];
      this.Demonstration = randLeft + randRight;
    },
    setupSlide6() {
      this.PointHeader = this.PointHeaders[Math.floor(Math.random() * this.PointHeaders.length)];
      this.PointHeader = this.PointHeader.replace(/___/g, this.MainSubject)

      const shuffled = this.Points.sort(() => 0.5 - Math.random());
      this.RandomPoints = shuffled.slice(0, 3);
    },
    setupSlide7() {
      this.RandomBG = "bg" + (Math.floor(Math.random() * 7) + 1) + ".jpg";
    },
    setupSlide8() {
      this.Conclusion = this.Conclusions[Math.floor(Math.random() * this.Conclusions.length)].replace(/___/g, this.MainSubject);
    },
    loadSlideStyle()
    {
      const head = document.querySelector('head');
      const link = document.createElement('link');
      head.appendChild(link);
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = require(`@/assets/theme/serif.css`);

      const styles = require("@/assets/themes.json").styles;
      const style = styles[Math.floor(Math.random() * styles.length)];
      const revealDiv = document.querySelector('.reveal');
      const slides = document.querySelector('.slides');
      slides.style.color = style["font-color"];
      revealDiv.style.background = style.bg;
      for(let slide of slides.children)
      {
        if(style.bg.indexOf("jpg") > -1) slide.setAttribute("data-background", require(`@/assets/bgs/${style.bg}`));
      }

      var hStyles = 
      `
      .reveal{
        font-family: ${style["font"]} !important;
      }
      .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
        color: ${style["header-color"]} !important;
        font-family: ${style["font"]} !important;
      }
      `;

      this.styleEl = document.createElement('style');
      document.head.appendChild(this.styleEl);
      this.styleEl.type = "text/css";
      this.styleEl.appendChild(document.createTextNode(hStyles));
    },
    nextPresnetation()
    {
      if(GameMode === GAME_MODE_PARTY || GameSettings.GetRound() < 3 || GameSettings.Team1Turn)
      {
        GameSettings.NextPresentation();
        router.push("turn-screen");
      } else {
        router.push("game-finale");
      }
      
    }
  }
}
</script>


<style lang="less">
  .random-image-div{
    position: relative;
  }

  .random-image{
    position: absolute;
    width: 25%;
    left: 12%;
    bottom: 20%;
    float: left;
  }

  .reveal section img { background:none !important; border:none !important; box-shadow:none !important; border:none !important; }
  
  #btnContinue {
    z-index: 1000;
    position: absolute;
    bottom: 50px;
    right: 50px;
  }  

  .bounce-enter-active {
    transform: scale(0);
    animation: bounce-in .5s 3s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
