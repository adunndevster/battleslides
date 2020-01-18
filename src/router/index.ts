import Vue from 'vue'
import VueRouter from 'vue-router'
import TitleScreen from '../views/TitleScreen.vue';
import OpeningCredits from '../views/OpeningCredits.vue';
import IntroScreen from '../views/IntroScreen.vue';
import TurnScreen from '../views/TurnScreen.vue';
import SlidesScreen from '../views/SlidesScreen.vue';
import GameFinale from '../views/GameFinale.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opening-credits',
    component: OpeningCredits,
  },
  {
    path: '/title-screen',
    name: 'title-screen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TitleScreen,
  },
  {
    path: '/intro-screen',
    name: 'intro-screen',
    component: IntroScreen,
  },
  {
    path: '/turn-screen',
    name: 'turn-screen',
    component: TurnScreen,
  },
  {
    path: '/slides-screen',
    name: 'slides-screen',
    component: SlidesScreen,
  },
  {
    path: '/game-finale',
    name: 'game-finale',
    component: GameFinale,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
