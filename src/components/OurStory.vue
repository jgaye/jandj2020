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
            <img src="../assets/wedding.png"><br>
            We got married!
          </label>
        </div>

        <div>
          <p>Julia and Julien first met in the summer of 2016 working at the same Philadelphia-based startup. Julien was in the US on a six-month work visa, and Julia was hired following her university graduation. They quickly struck up a friendship, and it wasn’t long before Julien admitted his feelings for Julia, and (eventually) she admitted the same.</p>

          <p>The two were inseparable until Julien’s return to France, but the distance couldn’t keep them apart. Eight months later, Julia moved to Paris and they started to build their life together. On March 30, 2019, they married during a civil ceremony in Croissy-sur-Seine. Julia and Julien are excited to celebrate their love and commitment with all of their family and friends from both sides of the Atlantic in 2021.</p>
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

    <div v-else-if="language == 'french'">
      <div>
        <h2>Notre Histoire</h2>
        <!-- verified --> 
        <div class="picture_strip">
          <label>
            <img src="../assets/IMG_7702.png"><br>Nous nous<br/> sommes rencontrés.
          </label>
          <label>
            <img src="../assets/IMG_8174.png"><br>Nous sommes<br/> tombés amoureux.
          </label>
          <label>
            <img src="../assets/wedding.png"><br>Nous nous<br/> sommes mariés !
          </label>
        </div>

        <div>
          <p> Julia et Julien se sont rencontrés pour la première fois à l'été 2016 dans la même startup basée à Philadelphie. Ils ont rapidement noué une amitié, et Julien n’a pas tardé à admettre ses sentiments pour Julia, et (finalement) elle a admis la même chose. </p>

          <p> Les deux étaient inséparables jusqu’au depart de Julien pour la France, mais la distance ne pouvait les séparer. Huit mois plus tard, Julia a déménagé à Paris et ils ont commencé à se construire une vie commune. Le 30 mars 2019, ils se sont mariés lors d'une cérémonie civile à Croissy-sur-Seine. Julia et Julien sont ravis de célébrer de nouveau leur amour et leur engagement en 2021 avec toute leur famille et leurs amis venus des deux côtés de l’Atlantique. </p>
        </div>

        </div>

        <h2>Nos Vœux</h2>  

        <div class="row">   
          <div class="column">
            <!-- verified --> 
            <h2>Julia</h2>  
              
            <p> Julien, c’est difficile de mettre mes sentiments pour toi par écrit. Il y a quelque chose que je ne peux pas décrire comme ce que je ressens quand je regarde dans tes yeux ou quand tu me prends la main. </p>

            <p> C’est le même sentiment que j'ai eu au Bok Bar sur le rooftop à Philadelphie, il y a près de trois ans. Tu m'as fait rire comme je n'avais encore jamais ri. Je me souviens avoir pensé: «Cet homme est le type d'homme avec lequel je pourrais passer ma vie.» À ce moment-là, je ne réalisais pas que je passerais ma vie avec toi. Merci de ne pas avoir renoncé (et même d'avoir beacoup insisté). </p>

            <p> Être avec toi est merveilleux. Tu m'as accepté comme je suis, tu as pris soin de moi, tu m'as aimée. Nous avons construit notre vie ensemble, même si nous avons du faire des sacrifices et passer des moments pas faciles. La vie a fait de nous de meilleures personnes et nous sommes devenus les meilleurs copains du monde.</P>

            <p> Puisque nous prenons pour prochaine étape le mariage, je fais le serment de garder le merveilleux et l'admiration dans notre relation. Apprendre des moments difficiles et les traverser en équipe. Faire le nécessaire pour être ensemble. Te soutenir dans les hauts comme dans les bas. Et faire de mon mieux pour être patiente.</p>

            <p> Je veux te donner le meilleur de moi-même et être la meilleure personne que tu vois en moi. </p>

            <p> Le plus important, je fais le serment de toujours t'aimer et de toujours te respecter, sans conditions et de tout mon cœur. Même à l'âge de 296 ans. </p>

            <p> Je t’aime, mon Boo. </p>
          </div>

          <div class="column">
            <!-- NOT verified --> 
            <h2>Julien</h2>  

            <p> Julia, Little Boo, ce n’est pas un exercice facile d’exprimer avec seulement quelques voeux à quel point je suis amoureux de toi et combien j'ai envie de profiter de toutes les expériences de la vie avec toi, pour le reste de notre existence. </p>

            <p> Mais j'ai essayé de faire de mon mieux, et j'espère réussir à te faire verser une petite larme... </p>

            <p> Alors, tout d’abord, je jure de continuer à te faire rire tous les jours. </p>

            <p> Je jure d'être toujours à tes côtés, et de toujours être d'accord avec toi, même quand tu as tort. </p>

            <p> Je jure de te suivre aux 4 coins de la terre et de t'emmener voir les 4 autres. </p>

            <p> Je jure de ne jamais perdre patience. </p>

            <p> Je jure de t'aider à réaliser tes rêves, car NOUS en à toujours été une part importante. </p>

            <p> Je jure de toujours porter les objets lourds dans les escaliers. </p>

            <p> Je jure de t'offrir une bonne vie, de prendre soin de toi dans les bons et les mauvais moments, de trouver le bonheur avec toi et de toujours te cuisiner de bons petits plats. (Le bonheur et la nourriture sont très liés, comme tu le sais.) </p>

            <p> Boo, tu sais que je pourrais continuer pendant des heures car nous sommes tous les deux très doués pour commencer des listes longues comme le bras, impossibles à terminer. Je vais donc simplement conclure maintenant: </p>

            <p> Je jure de t'aimer de tout mon cœur et de continuer à découvrir avec toi toutes les surprises de la vie, sachant très bien que tu es la meilleure de toutes ! </p>
          </div>
        </div>
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

  .picture_strip {
    display: flex;
    justify-content: center; 
    margin-bottom: 1.5em;
  }

  @media screen and (max-width: 640px) {
    .row {
      flex-direction: column;
    }

    .column {
      padding: 0px;
    }

    .picture_strip {
      flex-direction: column;
    }

    .picture_strip label {
      padding-bottom: 5px;
    }
  }
  
</style>
