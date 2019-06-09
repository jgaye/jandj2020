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

          <p>The two were inseparable until Julien’s return to France, but the distance couldn’t keep them apart. Eight months later, Julia moved to Paris and they started to build their life together. On March 30, 2019, they legally wed during a civil ceremony in Croissy-sur-Seine. Julia and Julien are excited to celebrate their love and commitment with all of their family and friends from both sides of the Atlantic in 2020.</p>
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
        <h2>Our Story</h2>

        <div class="picture_strip">
          <label>
            <img src="../assets/IMG_7702.png"><br>
            Nous nous sommes rencontrés.
          </label>
          <label>
            <img src="../assets/IMG_8174.png"><br>
            Nous sommes tombés amoureux.
          </label>
          <label>
            <img src="../assets/wedding.png"><br>
            Nous nous sommes mariés!
          </label>
        </div>

        <div>
          <p> Julia et Julien se sont rencontrés pour la première fois à l'été 2016 au sein de la même startup basée à Philadelphie. Julien était aux États-Unis avec un visa de travail de six mois et Julia a été embauchée après l'obtention de son diplôme universitaire. Ils ont rapidement noué une amitié, et Julien n’a pas tardé à admettre ses sentiments pour Julia, et (finalement) elle a admis la même chose. </p>

          <p> Les deux étaient inséparables jusqu’au retour de Julien en France, mais la distance ne pouvait les séparer. Huit mois plus tard, Julia a déménagé à Paris et ils ont commencé à se construire une vie commune. Le 30 mars 2019, ils se sont mariés légalement lors d'une cérémonie civile à Croissy-sur-Seine. Julia et Julien sont ravis de célébrer leur amour et leur engagement avec toute leur famille et leurs amis des deux côtés de l’Atlantique en 2020. </p>
        </div>

        </div>

        <h2>Nos vœux</h2>  

        <div class="row">   
      
          <div class="column">

            <h2>Julia</h2>  
              
            <p> Julien, c’est difficile pour moi de décrire l’amour que je ressens pour toi. Il est difficile de trouver les mots justes pour expliquer ce que je ressens lorsque je regarde dans les yeux ou que vous tendez la main pour me tenir la main. </p>

            <p> C’est le même sentiment que j’avais sur un bar sur le toit près de trois ans. Tu m'as fait rire d'une manière que je n'avais jamais vue auparavant. Je me souviens avoir pensé: «C’est ainsi que je veux dépenser pour toujours.» À l’époque, je ne savais pas que je passerais ma vie à jamais avec vous. Merci donc de ne pas m'abandonner. </p>

            <p> Etre avec toi, Julien, a été merveilleux. Tu m'as accepté, pris soin de moi, m'a aimé. Nous avons construit notre vie ensemble, mais elle n’est pas venue sans sacrifice et sans difficultés. Des choses qui ont sans aucun doute fait de nous de meilleures personnes et de meilleurs partenaires les uns pour les autres. </P>

            <p> Alors que nous franchissons ensemble la prochaine étape dans le mariage, je jure de garder cette merveille et notre respect dans notre relation. Apprendre des moments difficiles et les surmonter en équipe. Faire ce qui est nécessaire pour être ensemble. </p>

            <p> Je vais vous soutenir, à travers les hauts et les bas. Et fais de mon mieux pour être plus patient. Je veux vous donner le meilleur de moi-même et être la meilleure personne que vous voyez en moi. </p>

            <p> Plus important encore, je vous promets de toujours vous aimer et de vous respecter, sans réserve et de tout mon cœur, même à l'âge de 296 ans. </p>

            <p> Je t’aime, mon Boo. </p>
          </div>

          <div class="column">

            <h2>Julien</h2>  

            <p> Julia, Little Boo, ce n’est pas un exercice facile d’exprimer avec quelques voeux à quel point je suis amoureuse de toi et combien j’aimerais profiter de partager toutes les expériences de la vie avec vous pendant le reste de notre existence. </p>

            <p> Mais j'ai fait de mon mieux ici, et j'espère que cela vous fera déchirer un peu ... </p>

            <p> Alors, tout d’abord, je jure de continuer à vous faire rire tous les jours. </p>

            <p> Je m'engage à toujours être à vos côtés et toujours à vos côtés, même lorsque vous vous trompez. </p>

            <p> Je jure de vous suivre aux 4 coins de la terre et de vous emmener voir les 4 autres. </p>

            <p> Je jure de ne jamais perdre patience. </p>

            <p> Je jure de vous aider à réaliser vos rêves, car les États-Unis en font toujours partie. </p>

            <p> Je jure de toujours porter les objets lourds dans les escaliers. </p>

            <p> Je jure de vous offrir une bonne vie, de prendre soin de vous dans les bons et les mauvais moments, de trouver le bonheur avec vous et de vous cuisiner de bons repas en le faisant. (Le bonheur et la nourriture sont très liés, comme vous le savez.) </P>

            <p> Boo, tu sais que je pourrais continuer pendant des heures car nous sommes tous les deux très doués pour dresser des listes impossibles à terminer. Je vais donc simplement conclure maintenant: </p>

            <p> Je jure de vous aimer de tout mon cœur et de continuer à découvrir avec vous toutes les surprises de la vie, sachant très bien que vous êtes le meilleur de tous! </p>
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
  
</style>
