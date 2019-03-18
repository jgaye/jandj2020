<template>
  <div id="app">
    <h1>Julia and Julien 2020</h1>
    <div class="menu">
      <div v-if="selectedLanguage == 'english'">
        <a href="#"
          v-for="(item, index) in en_menu"
          :key="item"
          v-on:click="setActive(index)"
          :class="{'active': index == activeIndex}"
          >
          {{item}}
        </a>
      </div>
      <div v-else-if="selectedLanguage == 'french'">
        <a href="#"
          v-for="(item, index) in fr_menu"
          :key="item"
          v-on:click="setActive(index)"
          :class="{'active': index == activeIndex}"
          >
          {{item}}
        </a>
      </div>
      <div class="languageSelector">
        <img 
          v-on:click="setLanguage('english')" 
          src="./assets/usa.png">
        <img 
          v-on:click="setLanguage('french')" 
          src="./assets/france.png">
      </div>
    </div>

    <div v-if="activeIndex == 0">
      <Wedding :language=selectedLanguage />
    </div>
    <div v-if="activeIndex == 1">
      <OurStory :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 2">
      <Venue :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 3">
      <Travel :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 4">
      <UsVisitors :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 5">
      <Photos :language=selectedLanguage  />
    </div>
  </div>
</template>

<script>
import textContent from './assets/textContent.json'
import OurStory from './components/OurStory.vue'
import Wedding from './components/Wedding.vue'
import Photos from './components/Photos.vue'
import Venue from './components/Venue.vue'
import Travel from './components/Travel.vue'
import UsVisitors from './components/UsVisitors.vue'

export default {
  name: 'app',
  components: {
    OurStory,
    Wedding,
    Photos,
    Venue,
    Travel,
    UsVisitors
  },
  props: {
  },
  data: function(){
    return {
      activeIndex: 0,
      selectedLanguage: 'english',
      en_menu: ["Wedding", "Our Story","Venue","Travel","US Guests","Photos"],
      fr_menu: ["Mariage", "Notre Histoire", "Le Domaine","Accès","Visiteurs Américains","Photos"]
    }
  },
  methods: {
    setActive: function(index){
      this.activeIndex = index
    },
    setLanguage: function(language){
      this.selectedLanguage = language
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .menu{
    align-items: center;
    padding: 10px;
    color: #FFFFFF;
    justify-content: space-between;
    display: flex;
  }
  a {
    font-family: Tangerine;
    font-size: 18px;
    font-weight: 400;
    line-height: 3;
    margin: 0;
    color: #404040;
  }
  a.active {
    font-weight: bolder;
  }
</style>
