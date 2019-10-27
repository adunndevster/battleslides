<template >
<div>
  <div class="reveal full">
    <div class="slides">

        <section class="normal">
            <h2>{{Slide1Content}}</h2>
        </section>
      
        <section class="normal">
            <h2>{{Slide2Content}}</h2>
        </section>

        <section class="normal">
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

        <section class="normal">
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

        <section class="normal">
          <h2>{{Demonstration}}</h2>
        </section>

        <section class="normal">
            <h3>{{PointHeader}}</h3>
            <ul>
                <li class="fragment">{{RandomPoints[0]}}</li>
                <li class="fragment">{{RandomPoints[1]}}</li>
                <li class="fragment">{{RandomPoints[2]}}</li>
            </ul>
        </section>

        <section class="normal">
          <div class="random-image-div">
          </div>
          <img class="random-image" :src="require(`@/assets/random-images/${MainSubject}.png`)"/>
          <img :src="require(`@/assets/random-images/${RandomBG}`)"/>
        </section>

        <section class="normal">
          <h3>{{RandomList}}</h3>
        </section>

        <section class="normal">
          <h3>{{RandomAcronym}}</h3>
        </section>

        <section class="normal">
          <h3>{{RandomSongText}}</h3>
          <audio data-autoplay :src="require(`@/assets/music/${RandomSongStyle}`)"></audio>
        </section>

        <section data-state="customContentShow" id="customImageSection"  class="normal">
          <div id="customContent" class = "stretch">
            <!-- <iframe style="width:100vw;height:50vh;" id="customImage"></iframe> -->
          </div>
        </section>

        <section class="normal">
          <h2>{{Conclusion}}</h2>
        </section>

        <!-- Debate Slides -->
        <section class="debate">
          <h2>Topic: {{DebateConcern}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team1Opening}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team2Opening}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team1Rebuttal}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team2Rebuttal}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team1Question}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team2Question}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team1Conclusion}}</h2>
        </section>

        <section class="debate">
          <h2>{{Team2Conclusion}}</h2>
        </section>

        <section class="debate">
          <h3>Everyone raise your hands who agrees with {{Team1Name}}</h3>
          <h3 class="fragment">Everyone raise your hands who agrees with {{Team2Name}}</h3>
        </section>

    </div>
     <transition name="bounce">
        <a id="btnContinue" @click="nextPresentation" v-if="showContinueButton">Continue</a>
     </transition>

</div>
<TeamLogo class="team1-logo" v-show="ShowTeam1Logo" :team-logo-left="Team1LogoLeft" :team-logo-right="Team1LogoRight" :team-name="Team1Name" />
<TeamLogo class="team2-logo" v-show="ShowTeam2Logo" :team-logo-left="Team2LogoLeft" :team-logo-right="Team2LogoRight" :team-name="Team2Name" />
</div>
</template>

<script>
import Reveal from 'reveal.js/js/reveal'
import { GameMode, GameSettings, GAME_MODE_PARTY } from '../common/GameSettings';
import router from '../router';
import TeamLogo from '../components/TeamLogo';
let vue = null;
export default {
  name: 'slides-screen',
  components: {
    TeamLogo
  },
  data: () => {
    
    return {
      MainSubject: "Tacos",
      TitleActions: GameSettings.SlideData.TitleActions,
      TitleSubjects: GameSettings.SlideData.TitleSubjects,
      SlideStatements: GameSettings.SlideData.SlideStatements,
      StatementActions: GameSettings.SlideData.StatementActions,
      ChartTypes: GameSettings.SlideData.ChartTypes,
      ChartMeasures: GameSettings.SlideData.ChartMeasures,
      Pros: GameSettings.SlideData.Pros,
      Cons: GameSettings.SlideData.Cons,
      PointHeaders: GameSettings.SlideData.PointHeaders,
      Points: GameSettings.SlideData.Points,
      DemonstrationsLeft: GameSettings.SlideData.DemonstrationsLeft,
      DemonstrationsRight: GameSettings.SlideData.DemonstrationsRight,
      Lists: GameSettings.SlideData.Lists,
      Acronyms: GameSettings.SlideData.Acronyms,
      MusicStyles: GameSettings.SlideData.MusicStyles,
      MusicThings: GameSettings.SlideData.MusicThings,
      Conclusions: GameSettings.SlideData.Conclusions,
      DebateConcerns: GameSettings.SlideData.DebateConcerns,
      DebateForActions: GameSettings.SlideData.DebateForActions,
      DebateAgainstActions: GameSettings.SlideData.DebateAgainstActions,
      Slide1Content: "",
      Slide2Content: "",
      ChartMeasure: "",
      ChartType: "line-down.svg",
      RandomPros: [],
      RandomCons: [],
      Demonstration: "",
      PointHeader: "",
      RandomPoints: [],
      RandomList: "",
      RandomAcronym: "",
      RandomSongText: "",
      RandomSongStyle: "rap1.mp3",
      Conclusion: "",
      RandomBG: "bg1.jpg",
      DebateConcern: "",
      Team1Opening: "",
      Team2Opening: "",
      Team1Rebuttal: "",
      Team2Rebuttal: "",
      Team1Question: "",
      Team2Question: "",
      Team1Conclusion: "",
      Team2Conclusion: "",
      styleEl: null,
      showContinueButton: false,
      customVideo: null,
      slideTransitionSound: null,
      Team1Name: GameSettings.Team1Name,
      Team1LogoLeft: GameSettings.Team1NameLeft,
      Team1LogoRight: GameSettings.Team1NameRight,
      Team2Name: GameSettings.Team2Name,
      Team2LogoLeft: GameSettings.Team2NameLeft,
      Team2LogoRight: GameSettings.Team2NameRight,
      Round: GameSettings.GetRound(),
      ShowTeam1Logo: false,
      ShowTeam2Logo: false,
      Team1Turn: GameSettings.Team1Turn
    }
  },
  mounted() {
    vue = this;
    Reveal.reset();

    this.setupAudio();
    if(vue.Round < 3)
    {
      this.hideDebateSlides();
      this.loadSlideStyle();
      //this.shuffleSlides();
      this.setupIntro();
      this.setupRandomStatement();
      this.setupChart();
      this.setupProsCons();
      this.setupDemonstration();
      this.setupPoints();
      this.setupImage();
      this.setupRandomList();
      this.setupAcronym();
      this.setupSong();
      this.setupCustomImage();
      this.setupConclusion();
    } else {
      this.hideNormalSlides();
      this.loadSlideStyle();
      this.setupTeam1Opening();
      this.setupTeam2Opening();
      this.setupTeam1Rebuttal();
      this.setupTeam2Rebuttal();
      this.setupTeam1Question();
      this.setupTeam2Question();
      this.setupTeam1Conclusion();
      this.setupTeam2Conclusion();
    }
    
    Reveal.initialize({
      controls: false
    });

    Reveal.addEventListener( 'slidechanged', this.slideChanged);
    Reveal.addEventListener( 'customContentShow', function() {
      if(vue.customVideo)
      {
        setTimeout(() => { vue.customVideo.play() }, 1000);
      }
    }, false );

    this.updateLogos();
    //HACK to fix centering wonkiness.
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1);
  },
  methods: {
    setupAudio(){
      const revealDiv = document.querySelector('.reveal');
      this.slideTransitionSound = document.createElement("audio");
      this.slideTransitionSound.src = require("@/assets/sounds/slide_transition.mp3");
      this.slideTransitionSound.setAttribute("preload", "auto");
      this.slideTransitionSound.setAttribute("controls", "none");
      this.slideTransitionSound.style.display = "none";
      revealDiv.appendChild(this.slideTransitionSound);
    },
    updateLogos()
    {

      if(this.Round < 3)
      {
        let currentSlide = Reveal.getIndices();
        this.ShowTeam1Logo = this.Team1Turn;
        this.ShowTeam2Logo = !this.Team1Turn;
      } else {
        let currentSlide = Reveal.getIndices();
        this.ShowTeam1Logo = currentSlide.h % 2 == 1;
        this.ShowTeam2Logo = currentSlide.h % 2 == 0;
        if(Reveal.isLastSlide() || Reveal.isFirstSlide())
        {
          this.ShowTeam1Logo = true;
          this.ShowTeam2Logo = true;
        }
        
      }
    },
    slideChanged(event){
      this.showContinueButton = Reveal.isLastSlide();
      this.slideTransitionSound.play();
      this.updateLogos();
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
    setupIntro() {
      const randTitleAction = this.TitleActions[Math.floor(Math.random() * this.TitleActions.length)];
      const randTitleSubject = this.TitleSubjects[Math.floor(Math.random() * this.TitleSubjects.length)];
      this.MainSubject = randTitleSubject;
      this.Slide1Content = (randTitleAction.indexOf(' ') === 0 || 
                            randTitleAction.indexOf('.') === 0 || 
                            randTitleAction.indexOf('?') === 0 || 
                            randTitleAction.indexOf(':') === 0 || 
                            randTitleAction.indexOf(',') === 0) ? randTitleSubject + randTitleAction : randTitleAction + randTitleSubject;

      GameSettings.RemoveSlideDataItem(randTitleAction, "TitleActions");
      GameSettings.RemoveSlideDataItem(randTitleSubject, "TitleSubjects");
    },
    setupRandomStatement() {
      const randAction = this.StatementActions[Math.floor(Math.random() * this.StatementActions.length)];
      const randStatement  = this.SlideStatements[Math.floor(Math.random() * this.SlideStatements.length)];
      this.Slide2Content = randStatement.replace(/---/g, this.MainSubject).replace(/___/g, randAction);
      GameSettings.RemoveSlideDataItem(randAction, "StatementActions");
      GameSettings.RemoveSlideDataItem(randStatement, "SlideStatements");
    },
    setupChart() {
      this.ChartMeasure = this.ChartMeasures[Math.floor(Math.random() * this.ChartMeasures.length)];
      this.ChartType = this.ChartTypes[Math.floor(Math.random() * this.ChartTypes.length)];
      //GameSettings.RemoveSlideDataItem(ChartMeasure, "ChartMeasures");
      //GameSettings.RemoveSlideDataItem(ChartType, "ChartTypes");
    },
    setupProsCons() {
      let shuffled = this.Pros.sort(() => 0.5 - Math.random());
      this.RandomPros = shuffled.slice(0, 3);

      shuffled = this.Cons.sort(() => 0.5 - Math.random());
      this.RandomCons = shuffled.slice(0, 3);
      GameSettings.RemoveSlideDataItem(this.RandomPros, "Pros");
      GameSettings.RemoveSlideDataItem(this.RandomCons, "Cons");
    },
    setupDemonstration() {
      const randLeft = this.DemonstrationsLeft[Math.floor(Math.random() * this.DemonstrationsLeft.length)];
      const randRight = this.DemonstrationsRight[Math.floor(Math.random() * this.DemonstrationsRight.length)];
      this.Demonstration = randLeft + randRight;

      GameSettings.RemoveSlideDataItem(randLeft, "DemonstrationsLeft");
      GameSettings.RemoveSlideDataItem(randRight, "DemonstrationsRight");
    },
    setupPoints() {
      this.PointHeader = this.PointHeaders[Math.floor(Math.random() * this.PointHeaders.length)];
      this.PointHeader = this.PointHeader.replace(/___/g, this.MainSubject)

      const shuffled = this.Points.sort(() => 0.5 - Math.random());
      this.RandomPoints = shuffled.slice(0, 3);

      GameSettings.RemoveSlideDataItem(this.PointHeader, "PointHeaders");
      GameSettings.RemoveSlideDataItem(this.RandomPoints, "Points");
    },
    setupImage() {
      this.RandomBG = "bg" + (Math.floor(Math.random() * 7) + 1) + ".jpg";
    },
    setupRandomList() {
      const listMin = 3;
      const listMax = 14;
      const randListCount = Math.floor(Math.random() * (listMax - listMin)) + listMin;
      this.RandomList = this.Lists[Math.floor(Math.random() * this.Lists.length)];
      this.RandomList = this.RandomList.replace(/___/g, randListCount).replace(/---/g, this.MainSubject);

      GameSettings.RemoveSlideDataItem(this.RandomList, "Lists");
    },
    setupAcronym() {
      const isRepeating = (Math.random() * 2) > 1;
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V'];
      const acroMin = 3;
      const acroMax = 5;
      const randAcroCount = Math.floor(Math.random() * (acroMax - acroMin)) + acroMin;
      const letter = getRandomLetter();
      let acronym = '';
      for(let ii=0; ii<randAcroCount; ii++)
      {
        acronym += (isRepeating) ? letter : getRandomLetter();
      }
      function getRandomLetter()
      {
        return letters[Math.floor(Math.random() * letters.length)];
      }
      this.RandomAcronym = this.Acronyms[Math.floor(Math.random() * this.Acronyms.length)];
      this.RandomAcronym = this.RandomAcronym.replace(/___/g, acronym).replace(/---/g, this.MainSubject);

      GameSettings.RemoveSlideDataItem(this.RandomAcronym, "Acronyms");
    },
    setupSong() {
      this.RandomSongText = this.MusicThings[Math.floor(Math.random() * this.MusicThings.length)];
      this.RandomSongStyle = this.MusicStyles[Math.floor(Math.random() * this.MusicStyles.length)];
      this.RandomSongText = this.RandomSongText.replace(/___/g, this.RandomSongStyle).replace(/---/g, this.MainSubject);
      
      this.RandomSongStyle += (Math.floor(Math.random() * 3) + 1) + ".mp3";

      GameSettings.RemoveSlideDataItem(this.RandomSongText, "MusicThings");
      GameSettings.RemoveSlideDataItem(this.RandomSongStyle, "MusicStyles");
    },
    setupCustomImage() {
      if(GameSettings.Images.length > 0 && GameSettings.ImageSpot < GameSettings.Images.length)
      {
        // currentPosition: 84
        // end: true
        // extra: {userid: "jxy9r9cf7oj", chunkSize: 60000}
        // lastModifiedDate: "Wed Aug 21 2019 18:02:15 GMT-0600 (Mountain Daylight Time)"
        // maxChunks: 83
        // name: "20190821_180209.mp4"
        // remoteUserId: "1yhlcihi6go"
        // size: 4929703
        // type: "video/mp4"
        // url: "blob:https://localhost:8080/51c7e475-3d15-4b95-8b5a-da24abcc286d"
        // userid: "jxy9r9cf7oj"
        // uuid: "6463720986830172"
        // __proto__: Blob
        const file = GameSettings.Images[GameSettings.ImageSpot];
        GameSettings.ImageSpot++;
        const customContent = document.getElementById("customContent");
        if(file.type.indexOf("video") > -1)
        {
          this.customVideo = document.createElement('video');
          this.customVideo.src = file.url;
          this.customVideo.autoplay = false;
          this.customVideo.controls = true;
          customContent.appendChild(this.customVideo);
        } else if(file.type.indexOf("image") > -1)
        {
          const image = document.createElement("IMG");
          image.src = file.url;
          customContent.appendChild(image);
        }
        

        // let iframe = document.getElementById('customImage');
        // iframe.style.display = 'block';
        // const file = GameSettings.Images[GameSettings.ImageSpot];
        // GameSettings.ImageSpot++;
        // iframe.onload = function() {
        //     Array.prototype.slice.call(iframe.contentWindow.document.body.querySelectorAll('*')).forEach(function(element) {
        //         element.style.display = 'block';
        //         element.style.margin = '0 auto 0 auto';
        //         element.style.width = '42%';
        //         element.removeAttribute('autoplay');
        //         element.removeAttribute('controls');
        //         element.setAttribute('muted');
        //     });
        //     if (!file.type || fileNameMatches || file.type.match(/image|video|audio|pdf/g) || iframe.src.indexOf('data:image/png') !== -1 || iframe.src.toLowerCase().search(/.png|.jpeg|.jpg|.gif/g) !== -1) {
        //         iframe.contentWindow.document.body.style.textAlign = 'center';
        //         iframe.contentWindow.document.body.style.background = 'black';
        //         iframe.contentWindow.document.body.style.color = 'white';
        //         return;
        //     }
        //     iframe.contentWindow.document.body.style.textAlign = 'left';
        //     iframe.contentWindow.document.body.style.background = 'white';
        //     iframe.contentWindow.document.body.style.color = 'black';
        // };
        // iframe.src = URL.createObjectURL(file);
        // iframe.contentWindow.document.body.style.overflow = 'hidden';
      } else {
        const section = document.getElementById('customImageSection');
        const slides = document.querySelector('.slides');
        slides.removeChild(section);
      }
    },
    setupConclusion() {
      this.Conclusion = this.Conclusions[Math.floor(Math.random() * this.Conclusions.length)].replace(/___/g, this.MainSubject);
      GameSettings.RemoveSlideDataItem(this.Conclusion, "Conclusions");
    },
    setupTeam1Opening() {
      const randTitleAction = this.TitleActions[Math.floor(Math.random() * this.TitleActions.length)];
      const randTitleSubject = this.TitleSubjects[Math.floor(Math.random() * this.TitleSubjects.length)];
      this.MainSubject = randTitleSubject;
      GameSettings.RemoveSlideDataItem(randTitleSubject, "TitleSubjects");
      this.DebateConcern = this.DebateConcerns[Math.floor(Math.random() * this.DebateConcerns.length)];
      GameSettings.RemoveSlideDataItem(this.DebateConcern, "DebateConcerns");
      this.Team1Opening = this.DebateForActions[Math.floor(Math.random() * this.DebateForActions.length)];
      GameSettings.RemoveSlideDataItem(this.Team1Opening, "DebateForActions");
      this.Team1Opening = this.Team1Opening
                              .replace(/___/g, this.MainSubject)
                              .replace(/---/g, this.DebateConcern);
    },
    setupTeam2Opening() {
      this.Team2Opening = this.DebateAgainstActions[Math.floor(Math.random() * this.DebateAgainstActions.length)];
      GameSettings.RemoveSlideDataItem(this.Team2Opening, "DebateAgainstActions");
      this.Team2Opening = this.Team2Opening.replace(/___/g, this.MainSubject)
                       .replace(/---/g, this.DebateConcern);
    },
    setupTeam1Rebuttal() {
      var label = GameSettings.SlideData.DebateLabels[Math.floor(Math.random() * GameSettings.SlideData.DebateLabels.length)];
      this.Team1Rebuttal = GameSettings.SlideData.DebateRebuttals[Math.floor(Math.random() * GameSettings.SlideData.DebateRebuttals.length)];
      GameSettings.RemoveSlideDataItem(this.Team1Rebuttal, "DebateRebuttals");
      this.Team1Rebuttal = this.Team1Rebuttal.replace(/___/g, label);
    },
    setupTeam2Rebuttal() {
      var label = GameSettings.SlideData.DebateLabels[Math.floor(Math.random() * GameSettings.SlideData.DebateLabels.length)];
      this.Team2Rebuttal = GameSettings.SlideData.DebateRebuttals[Math.floor(Math.random() * GameSettings.SlideData.DebateRebuttals.length)];
      GameSettings.RemoveSlideDataItem(this.Team2Rebuttal, "DebateRebuttals");
      this.Team2Rebuttal = this.Team2Rebuttal.replace(/___/g, label);
    },
    setupTeam1Question() {
      var question = GameSettings.SlideData.DebateQuestions[Math.floor(Math.random() * GameSettings.SlideData.DebateQuestions.length)];
      GameSettings.RemoveSlideDataItem(question, "DebateQuestions");
      var verb = GameSettings.SlideData.DebateVerbs[Math.floor(Math.random() * GameSettings.SlideData.DebateVerbs.length)];
      GameSettings.RemoveSlideDataItem(verb, "DebateVerbs");
      this.Team1Question = question.replace(/___/g, verb).replace(/---/g, this.MainSubject).replace(/~~~/g, this.DebateConcern);
    },
    setupTeam2Question() {
      var question = GameSettings.SlideData.DebateQuestions[Math.floor(Math.random() * GameSettings.SlideData.DebateQuestions.length)];
      GameSettings.RemoveSlideDataItem(question, "DebateQuestions");
      var verb = GameSettings.SlideData.DebateVerbs[Math.floor(Math.random() * GameSettings.SlideData.DebateVerbs.length)];
      GameSettings.RemoveSlideDataItem(verb, "DebateVerbs");
      this.Team2Question = question.replace(/___/g, verb).replace(/---/g, this.MainSubject).replace(/~~~/g, this.DebateConcern);
    },
    setupTeam1Conclusion() {
      var conclusion = GameSettings.SlideData.DebateConclusions[Math.floor(Math.random() * GameSettings.SlideData.DebateConclusions.length)];
      GameSettings.RemoveSlideDataItem(conclusion, "DebateConclusions");
      var action = GameSettings.SlideData.DebateConclusionActions[Math.floor(Math.random() * GameSettings.SlideData.DebateConclusionActions.length)];
      GameSettings.RemoveSlideDataItem(action, "DebateConclusionActions");
      this.Team1Conclusion = conclusion.replace(/---/g, action).replace(/___/g, this.MainSubject).replace(/~~~/g, this.DebateConcern);
    },
    setupTeam2Conclusion() {
      var conclusion = GameSettings.SlideData.DebateConclusions[Math.floor(Math.random() * GameSettings.SlideData.DebateConclusions.length)];
      GameSettings.RemoveSlideDataItem(conclusion, "DebateConclusions");
      var action = GameSettings.SlideData.DebateConclusionActions[Math.floor(Math.random() * GameSettings.SlideData.DebateConclusionActions.length)];
      GameSettings.RemoveSlideDataItem(action, "DebateConclusionActions");
      this.Team2Conclusion = conclusion.replace(/---/g, action).replace(/___/g, this.MainSubject).replace(/~~~/g, this.DebateConcern);
    },
    hideDebateSlides() {
      const removeElements = (elms) => elms.forEach(el => el.remove());
      removeElements( document.querySelectorAll(".debate") );
    },
    hideNormalSlides() {
      const removeElements = (elms) => elms.forEach(el => el.remove());
      removeElements( document.querySelectorAll(".normal") );
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
      revealDiv.style.backgroundColor = style.bg;
      revealDiv.style.backgroundImage = style.bg;
      revealDiv.style.textShadow = style["text-shadow"];
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
        text-shadow: ${style["text-shadow"]} !important;
      }
      `;

      this.styleEl = document.createElement('style');
      document.head.appendChild(this.styleEl);
      this.styleEl.type = "text/css";
      this.styleEl.appendChild(document.createTextNode(hStyles));
    },
    nextPresentation()
    {
      if(GameMode === GAME_MODE_PARTY || GameSettings.GetRound() < 3)
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

  #customImage {
    width: 100vw;
    height: 50vh;
    display: block;
  }

  .full
  {
    position:absolute;
    width: 100%;
    height: 100vh;
  }

  .team1-logo {
    position: absolute;
    top: 20px;
    left: 0px;
    transform: scale(0.4);
    filter: brightness(10%);
    opacity: .3;
  }

  .team2-logo {
    position: absolute;
    top: 20px;
    right: -88vw;
    transform: scale(0.4);
    filter: brightness(10%);
    opacity: .3;
  }
</style>
