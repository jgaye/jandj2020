<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>Our Story</h2>

        <div class="picture_strip">
          <label>
            <img src="../assets/IMG_7702.png"><br>
            We met.
          </label>
          <label>
            <img src="../assets/IMG_8174.png"><br>
            We fell in love.
          </label>
          <label>
            <img src="../assets/wedding_placeholder.png"><br>
            We married!
          </label>
        </div>

        <div class="textBox">
        <p>We first met in the summer of 2016 working at the same Philadelphia-based startup. Julien was in the US on a six-month work visa, and Julia was hired following her university graduation. We quickly struck up a friendship, and it wasn’t long before Julien admitted his feelings for Julia, and (eventually) she admitted the same.</p>

        <p>We were inseparable until Julien’s return to France, but the distance couldn’t keep us apart. Eight months later, Julia moved to Paris and we started to build our life together. On March 30, 2019, we legally wed during a civil ceremony in Croissy-sur-Seine. We are excited to celebrate our love and commitment with all of our family and friends from both sides of the Atlantic.</p>
        </div>

        </div>
      </div>
    <div v-if="language == 'french'">
      <h2>Notre Histoire</h2>

      <p>Julia and Julien se sont rencontrés pour la première fois durant l'été 2016, alors qu'ils travaillaient tous deux dans la même startup à Philadelphie.</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'OurStory',
  props: {
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 15vw;
    margin: 1vw;
  }
</style>
