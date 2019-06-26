<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>Wedding Party</h2>

         <div class="row">   
          <div class="column">

            <h5>Alexandra - Maid of Honor</h5>
            <img src="../assets/IMG_7702.png">
            <p class="bridal">I'm honored to have my younger sister Alex as my maid of honor. The two of us have very different personalities, but we can always bond over our love of travel, cheesesteaks, and the reality game show Big Brother. One of my favorite memories is when we went to Iceland and Alex's adventurous side forced us to climb a steep waterfall. I'll never forget how happy she was running across the mountaintops without a care in the world.
            </p>
          </div>

          <div class="column">

            <h5>Loris - Best Man</h5>
            <img src="../assets/IMG_7702.png">
            <p class="bridal">Words go here.
            </p>
          </div>

        </div>
        <div class="row">   
          <div class="column"> 

            <h5>Sandra - Bridesmaid</h5>
            <img src="../assets/Sandra.jpg">
            <p class="bridal">Sandra and I became friends in high school when we sat at the same lunch table, where she soon realized how loud her new friend was. At Drexel University, we worked together for the school’s student newspaper and became known as the Two-Headed News Team. We have a shared love for the Phillies and her cat <a target="_blank" href="https://www.instagram.com/realmunothecat/">Muno</a>. Sandra has always been one of my biggest supporters, and I couldn't survive without our daily GChats.
            </p>

            <h5>Taylor</h5>
            <img src="../assets/Taylor.jpeg">
            <p class="bridal">Taylor and I met in third grade when we played on the same soccer team and were also in the same class. We grew up together playing jailbreak and watching scary movies. Our friendship continued to thrive over the years, going to countless Train concerts and wineries. I was thrilled to stand by Taylor's side on her wedding day, and I'm excited for her to do the same for me.
            </p>
          </div>

          <div class="column">

            <h5>Antoine - Groomsman</h5>
            <img src="../assets/IMG_7702.png">
            <p class="bridal">Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here.
            </p>

            <h5>Guénolé</h5>
            <img src="../assets/IMG_7702.png">
            <p class="bridal">Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here. Alex MOH words go here.
            </p>
          </div>

        </div>

      </div>
    </div>

    <!-- NOT UPDATED -->
    <div v-else-if="language == 'french'">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BridalParty',
  props: {
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  img{
    width: 15vw;
    margin: 0.5vw;
    float: left;
    border-radius: 50%;
    max-width: 30%;
  }

  .bridal{
    padding-top: 5px;
    text-align: justify;
  }
  .row {
    display: flex;
  }

  .column {
    width: 100%;
    flex-grow: 1;
    padding: 0 20px;
  }
</style>
