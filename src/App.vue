<template>
  <div id="app">
    <h1>Julia and Julien 2020</h1>
    <div class="header">
      <a href="#"
        v-for="(item, index) in headerItems"
        :key="item"
        v-on:click="setActive(index)"
        :class="{'active': index == activeIndex}"
        >
        {{item}}
      </a>
    </div>

    <div v-if="activeIndex == 0">
      <Wedding :msg=wedding />
    </div>
    <div v-if="activeIndex == 1">
      <OurStory :msg=ourStory />
    </div>
    <div v-if="activeIndex == 2">
      <Venue :msg=venue />
    </div>
    <div v-if="activeIndex == 3">
      <Travel :msg=travel />
    </div>
    <div v-if="activeIndex == 4">
      <UsVisitors :msg=usVisitors />
    </div>
    <div v-if="activeIndex == 5">
      <Photos :msg=photos />
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
    items: Array,
  },
  data: function(){
    return {
      activeIndex: 0,
      textContent: textContent,
      headerItems: textContent.en_header,
      ourStory: textContent.en_our_story,
      wedding: textContent.en_wedding,
      photos: textContent.en_photos,
      venue: textContent.en_venue,
      travel: textContent.en_travel,
      usVisitors: textContent.en_passport
    }
  },
  methods: {
    setActive: function(index){
      this.activeIndex = index
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
  .header{
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
