<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>The Wedding</h2>

        <div class="textBox">
          <p class="wed">Please join us for our wedding celebration on:</p>

          <p class="wed b">
            Saturday, August 8, 2020
          </p>
          <img src="../assets/divider.png">
          <p class="wed">
            <span class="b">Le Domaine d'Essendiéras</span><br>
            Lieu-dit, Essendiéras<br> 
            24160 Saint-Médard-d'Excideuil<br>
            Dordogne, France
          </p>
          <img src="../assets/divider.png">
          <p style="text-align: center">There will be a late-afternoon religious ceremony, followed by cocktail hour, a sit-down dinner, and then the chance to party into the early morning hours. Please dress your best!</p>
        </div>

        </div>
    </div>
    <div v-if="language == 'french'">
      <p>TODO</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Wedding',
  props: {
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    height: 3vh;
    vertical-align: middle;
  }

  p{
    margin: 1.5em;
  }
</style>
