<template>
  <div class="hello">
    <div v-if="language == 'english'">
      <h2>The Wedding</h2>

      <p id="wed">Please join us for our wedding celebration on:</p>

      <p id="wed">Saturday 8 August 2020<br>
      Attire: Formal</p>

      <p id="wed">Le Domaine d'Essendiéras<br>
      Lieu-dit, Essendiéras<br> 
      24160 Saint-Médard-d'Excideuil<br>
      Dordogne, France</p>

      <p>There will be a late-afternoon religious ceremony, followed by cocktail hour, a sit-down dinner, and then the chance to party into the early morning hours.</p>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
