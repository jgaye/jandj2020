<template>
  <div class="content">
    <div v-if="language == 'english'">  
      <div>
        <h2>Photos</h2>
        <p>Enjoy photos from our civil ceremony in Croissy-sur-Seine, courtesy of Ophélie, sister-in-law of the groom.</p>
      </div>

      <Wedding2019Photos></Wedding2019Photos>

      <div>
        <br>
        <p>View our photo shoot in Montmartre at the Sacré-Cœur, by <a target="_blank" href="https://www.missparisphoto.com/">Krystal Kenny</a>.</p>
      </div>
        
      <EngagmentPhotos></EngagmentPhotos>
    
    </div>
    <div v-else-if="language == 'french'">
      <!-- verified --> 
      <div>
        <h2>Photos</h2>
        <p>Voici les photos de notre cérémonie civile à Croissy-sur-Seine, prises par d'Ophélie, belle-soeur du marié.</p>
      </div>

      <Wedding2019Photos></Wedding2019Photos>
      
      <div>
        <br>
        <p>Visionnez notre séance photo à Montmartre au Sacré-Cœur, par <a target="_blank" href="https://www.missparisphoto.com/">Krystal Kenny</a>.</p>
      </div>
        
      <EngagmentPhotos></EngagmentPhotos>
    
    </div>
  </div>
</template>

<script>
import Wedding2019Photos from './publicalbums/Wedding2019Photos.vue'
import EngagmentPhotos from './publicalbums/EngagmentPhotos.vue'

export default {
  name: 'Photos',
  components: {
    Wedding2019Photos,
    EngagmentPhotos
  },
  props: {
    language: String
  },
  mounted() {
    let publicalbumScript = document.createElement('script')
    publicalbumScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js')
    document.head.appendChild(publicalbumScript)
  },
  template: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
