import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Wedding from './components/Wedding.vue'
import RSVP from './components/RSVP.vue'
import OurStory from './components/OurStory.vue'
import Photos from './components/Photos.vue'
import BridalParty from './components/BridalParty.vue'
import Venue from './components/Venue.vue'
import Travel from './components/Travel.vue'
import UsVisitors from './components/UsVisitors.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '*', redirect: '/wedding' },
  { path: '/wedding', component: Wedding },
  { path: '/rsvp', component: RSVP},
  { path: '/our_story', component: OurStory},
  { path: '/photos', component: Photos },
  { path: '/bridal_party', component: BridalParty },
  { path: '/venue', component: Venue },
  { path: '/travel', component: Travel },
  { path: '/us_visitors', component: UsVisitors },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
