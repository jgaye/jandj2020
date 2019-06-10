<template>
  <div id="app">
    <div class="header">
      <div class="header-content">
        <div></div>

        <h1>Julia and Julien 2020</h1>

        <div class="language_selector">
          <img 
            v-on:click="setLanguage('english')" 
            :class="{'active': selectedLanguage == 'english'}"
            src="./assets/usa.png">
          <img 
            v-on:click="setLanguage('french')" 
            :class="{'active': selectedLanguage == 'french'}"
            src="./assets/france.png">
        </div>
      </div>
    </div>
    <div v-if="selectedLanguage == 'english'">
      <div class="menu"> 
        <a class="navigation" href="#"
          v-for="(item, index) in en_menu"
          :key="item"
          v-on:click="setActive(index)"
          :class="{'active': index == activeIndex}"
          >
          {{item}}
        </a>
      </div>
    </div>
    
    <div v-else-if="selectedLanguage == 'french'">
      <div class="menu"> 
        <a class="navigation" href="#"
          v-for="(item, index) in fr_menu"
          :key="item"
          v-on:click="setActive(index)"
          :class="{'active': index == activeIndex}"
          >
          {{item}}
        </a>
      </div>
    </div>
    

    <div v-if="activeIndex == 0">
      <Wedding :language=selectedLanguage />
    </div>
    <div v-if="activeIndex == 1">
      <OurStory :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 2">
      <Photos :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 3">
      <Venue :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 4">
      <Travel :language=selectedLanguage  />
    </div>
    <div v-if="activeIndex == 5">
      <UsVisitors :language=selectedLanguage  />
    </div>
  </div>
</template>

<script>
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
      en_menu: ["Wedding", "Our Story","Photos","Venue","Travel","US Guests"],
      fr_menu: ["Mariage", "Notre Histoire", "Photos","Le Domaine","Accès"]
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

  @import url('https://fonts.googleapis.com/css?family=Stalemate');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  body{
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: none;
  }

  .menu{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #FFFFFF;
    justify-content: center;
    margin-top: 1vh;
  }

  a.navigation.active {
    text-decoration: none;
    color: darkgreen;
    margin: 0 2vw;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  a.navigation:link, a.navigation:visited, a.navigation:hover {
    text-decoration: none;
    color: darkgreen;
    margin: 0 2vw;
    font-size: 18px;
    cursor: pointer;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: underline;
    color: darkgreen;
    cursor: pointer;
  }

  ul{
    padding-left: 10vh;
  }

  li{
    text-align: left;
  }

  .content {
    margin: 0 15%;
    max-width: 90vw;
    box-sizing: border-box;
      position: relative;
    padding: 10px 15px;
  }

  .header {
    background-image: url('./assets/190303_Julia-1.png');
    background-size: cover;
    background-position: center;
    height: 48vh;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
  }
  .language_selector{
    text-align: right;
    line-height: 2.0;
    padding: 20px;
  }
  .language_selector img{
    height: 4vh;
    padding: 5px;
    opacity: 0.5;
  }
  .language_selector img:hover{
    opacity: 1;
  }
  .language_selector img.active{
    opacity: 1;
    zoom: 1.1;
  }

  h1 {
    font-family: 'Stalemate', cursive;
    font-weight: 400;
    line-height: 1.6;
    font-size: 70px;
    color: black;
  }

  h2 {
    font-family: 'Stalemate', cursive;
    text-align: center;
    margin: 5px 1px;
    font-weight: 400;
    line-height: 1.6;
    font-size: 50px;
    color: #404040;
  }

  h3,h4 {
    font-family: 'Avenir', sans-serif;
    text-align: left;
    margin: 5px 1px;
    padding: 10px;
    font-weight: 500;
    line-height: 1.2;
    font-size: 20px;
    color: #404040;
  }

  p {
      font-weight: 400;
      font-style: normal;
      line-height: 1.6;
      text-transform: none;
      letter-spacing: normal;
      text-align: left;
      font-size: 16px;
      color: #404040;
      margin-bottom: 1.5em;
  }

  .wed {
    text-align: center;
  }
  .b {
    font-size: 18px;
  }

  .picture_strip {
    display: flex;
    justify-content: center; 
    margin-bottom: 1.5em;
  }
</style>
