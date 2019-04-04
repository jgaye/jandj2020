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
            We got married!
          </label>
        </div>

        <div>
        <p>We first met in the summer of 2016 working at the same Philadelphia-based startup. Julien was in the US on a six-month work visa, and Julia was hired following her university graduation. We quickly struck up a friendship, and it wasn’t long before Julien admitted his feelings for Julia, and (eventually) she admitted the same.</p>

        <p>We were inseparable until Julien’s return to France, but the distance couldn’t keep us apart. Eight months later, Julia moved to Paris and we started to build our life together. On March 30, 2019, we legally wed during a civil ceremony in Croissy-sur-Seine. We are excited to celebrate our love and commitment with all of our family and friends from both sides of the Atlantic in 2020.</p>
        </div>

        </div>

        <h2>Our Vows</h2>  

        <div class="row">   
      
          <div class="column">

            <h2>Julia</h2>  
              
            <p>Julien, It’s not easy for me to describe the love I feel for you. It’s difficult to find the right words to explain how I feel when I look into your eyes or when you reach over to hold my hand.</p>

            <p>It’s the same feeling I had on a rooftop bar nearly three years go. You made me laugh in a way I never had before. I remember thinking, “This is how I want to spend forever.” At the time, I didn’t realize that my forever would be spent with you. So, thank you, for not giving up on me.</p>

            <p>Being with you, Julien, has been wonderous. You have accepted me, cared for me, loved me. We’ve built our life together, but it hasn’t come without sacrifice and hardships. Things that have undoubtedly made us better people and better partners to each other.</p>

            <p>As we take this next step together in marriage, I vow to keep that wonder and awe in our relationship. To learn from the difficult times and work through them as a team. To do what’s needed to be together.</p>

            <p>I will support you, through the highs and lows. And try my very best to be more patient. I want to give you my best self and be the better person you see in me.</p>

            <p>Most importantly, I promise to always love and respect you, unconditionally and with all my heart, even when I’m 296 years old.</p>

            <p>Je t’aime, mon Boo.</p>  
          </div>

          <div class="column">

            <h2>Julien</h2>  

            <p>Julia, Little Boo, it's not an easy exercise to convey with only a few vows how deeply I'm in love with you, and how much I will enjoy sharing all of life's experiences with you for the rest of our existence.</p>

            <p>But I tried my best here, and hopefully this will get you to tear up a little...</p>

            <p>So, first of all, I vow to continue making you laugh every day.</p>

            <p>I vow to always be by your side, and always be on your side even when you're wrong.</p>

            <p>I vow to follow you to the 4 corners of the earth, and to take you to see the other 4.</p>

            <p>I vow to never lose my patience.</p>

            <p>I vow to help you achieve your dreams, because US is always a part in them.</p>

            <p>I vow to always carry the heavy stuff up the stairs.</p>

            <p>I vow to provide you with a good life, to take care of you in good and bad times, to find happiness with you, and to cook you good meals while doing so. (Happiness and food are very connected as you know.)</p>

            <p>Boo, you know I could go on for hours, as we are both very good at making unfinishable lists. So I'll just conclude now:</p>

            <p>I vow to love you with all my heart, and to keep on discovering all of life's surprises with you, knowing full well you are the best of them all!</p>
          </div>
        </div>

      </div>
    
<!-- FRENCH -->

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
    margin: 0.5vw;
  }

  .row {
    display: flex;
  }

  .column {
    width: 100%;
    flex-grow: 1;
    padding: 0 15px;
  }
  
</style>
