<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>

        <div>
          <p class="wed b">Together with their families,</p>

          <h2 class="names">Julia Dorothea Casciato</h2>
            <div style="text-align:center; margin-bottom:15px;">~ and ~</div>
          <h2 class="names">Julien Vincent Pierre Gaye</h2>

          <p class="wed b">
            will happily celebrate their mariage on
            <br>
            Saturday, August 8, 2020 at 4pm.
          </p>
          <img src="../assets/divider.png">
          <p class="wed">
            <span class="b">Le Domaine d'Essendiéras</span><br>
            Lieu-dit, Essendiéras<br> 
            24160 Saint-Médard-d'Excideuil<br>
            Dordogne, France
          </p>
          <img src="../assets/divider.png">
          <p style="text-align: center">The religious ceremony will be followed by cocktail hour, a sit-down dinner, and then the chance to party into the early morning hours. Please dress your best!
          <br/>
          <span class="note">Note: The ceremony will take place outside on the grass.</span></p>
        </div>

        <h2>Sunday Brunch</h2>

        <div>
          <p class="wed">All guests are invited to join us for brunch at the domaine:</p>

          <p class="wed b">
            Sunday, August 9, 2020 at 11am
          </p>
        </div>    

      </div>
    </div>
    <div v-else-if="language == 'french'">
      <div>
        <div>
          <p class = "wed b">Accompagnés de leurs familles,</p>

          <h2 class="names">Julia Dorothea Casciato</h2>
            <div style="text-align:center; margin-bottom:15px;">~ et ~</div>
          <h2 class="names">Julien Vincent Pierre Gaye</h2>

          <p class = "wed b">
            sont heureux de célébrer leur marriage
            <br>
            le samedi 8 Août 2020 à 16h.
          </p>
          <img src = "../assets/divider.png">
          <p class = "wed">
            <span class = "b"> Le Domaine d'Essendiéras </span> <br>
            Lieu-dit, Essendiéras<br>
            24160 Saint-Médard-d'Excideuil<br>
            Dordogne, france
          </p>
          <img src = "../assets/divider.png">
          <p style = "text-align: center">La cérémonie religieuse sera suivie d'un cocktail, d'un dîner assis et d'une grande fête jusqu'au petit matin. S'il vous plaît, tenue correcte exigée ! 
          <br/>
          <span class="note">Note: La cérémonie aura lieu dehors sur l'herbe.</span></p>
        </div>

        <h2> Brunch du Dimanche </h2>
        <div>
          <p class = "wed"> Tous les invités sont invités à se joindre à nous pour un brunch au domaine : </p>
          <p class = "wed b">
            Dimanche 9 Août 2020 à 11h
          </p>
        </div>
      </div>
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
  .note {
    text-align: center;
    font-style: italic;
    font-size: smaller;
  }
</style>
