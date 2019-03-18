<template>
  <div class="hello">
    <h2>Our Story</h2>

    <p>Julia and Julien first met in the summer of 2016 working at the same Philadelphia-based startup. Julien was in the US on a six-month work visa, and Julia was hired following her university graduation. The two quickly struck up a friendship, and it wasn’t long before Julien admitted his true feelings for Julia. They were inseparable until Julien’s return to France, but the distance couldn’t keep them apart. Eight months later, Julia moved to Paris and they started to build their life together. On March 30, 2019, the two legally wed during a civil ceremony in Croissy-sur-Seine. They are excited to celebrate their love and commitment with their family and friends.</p>

  </div>
</template>

<script>
export default {
  name: 'OurStory',
  props: {
    msg: String
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
