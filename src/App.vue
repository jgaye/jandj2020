<template>
  <div id="app">
    <div id="contentWrap">
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
          <router-link class="navigation" to="/wedding">Wedding</router-link>
          <router-link class="navigation" to="/rsvp">RSVP</router-link>
          <router-link class="navigation" to="/our_story">Our Story</router-link>
          <router-link class="navigation" to="/photos">Photos</router-link>
          <router-link class="navigation" to="/bridal_party">Wedding Party</router-link>
          <router-link class="navigation" to="/registry">Wedding Registry</router-link>
          <router-link class="navigation" to="/venue">Venue and Accommodations</router-link>
          <router-link class="navigation" to="/travel">Travel</router-link>
          <router-link class="navigation" to="/us_visitors">US Guests</router-link>
        </div>
      </div>
      
      <div v-else-if="selectedLanguage == 'french'">
        <div class="menu">
          <router-link class="navigation" to="/wedding">Mariage</router-link>
          <router-link class="navigation" to="/rsvp">RSVP</router-link>
          <router-link class="navigation" to="/our_story">Notre Histoire</router-link>
          <router-link class="navigation" to="/photos">Photos</router-link>
          <router-link class="navigation" to="/bridal_party">Cortège</router-link>
          <router-link class="navigation" to="/registry">Liste de mariage</router-link>
          <router-link class="navigation" to="/venue">Le Domaine et Hébergement</router-link>
          <router-link class="navigation" to="/travel">Accès</router-link>
        </div>
      </div>

      <router-view :language=selectedLanguage></router-view>
    </div>

    <div class="footer">
      <img src="./assets/wisteria-pointing-left.png">
      <h6>This website was made with love by Julia and Julien. </h6>
      <img src="./assets/wisteria-pointing-right.png">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {
    },
    props: {
    },
    data(){
      return {
        selectedLanguage: 'english',
        }
    },
    methods: {
      setLanguage: function(language){
        this.selectedLanguage = language
      }
    },
    mounted(){
        if (window.location.hash.includes('fr')){
          this.setLanguage('french')
        }
    },
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
    height: 100vh;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: none;
    position: relative;
    min-height: 100%;
  }

  .menu{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #FFFFFF;
    justify-content: center;
    margin-top: 1vh;
  }

  a.navigation.router-link-active {
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

  #contentWrap {
    padding-bottom: 2.5rem;
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
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    color: white;
    background-color: rgb(135, 181, 105, 0.8);
    /*border-top: solid 1px silver;*/
  }
  .footer img{
    display: block;
    max-width:10vw;
    max-height:4vw;
    width: auto;
    height: auto;
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

  h5 {
    font-family: 'Stalemate', cursive;
    text-align: center;
    margin: 5px 1px;
    padding: 10px;
    font-weight: 500;
    line-height: 1;
    font-size: 40px;
    color: #404040;
  }

  h6 {
    font-family: 'Avenir', cursive;
    text-align: center;
    margin: 5px 1px;
    padding: 10px;
    font-weight: 500;
    line-height: 1;
    font-size: 14px;
  }

  h2.names {
    padding: 0;
    line-height: 1;
    font-size: 60px;
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

</style>
