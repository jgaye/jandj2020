<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>Accommodations</h2>

        <div class="textBox">
          <p>Le Domaine d'Essendiéras offers plenty of options to accommodate your stay during the wedding. There are various <a target="_blank" href="http://www.essendieras.com/location/holiday-homes/">holiday homes</a> that can be rented on the property and are only a 20-minute walk to the main area of the domaine. <a target="_blank" href="http://www.essendieras.com/location/campsite/">Camping</a> is also an option for those interested.</p> 

          <p><span style="font-weight: bold">Accommodations are not pre-reserved for all our wedding guests, and we encourage you to book your accommodations as soon as possible.</span> Most rental properties on the domaine house at least 6 people, and have a minimum stay of one week (keep in mind, the cost of the rental will decrease significantly when split amongst a group).</p>
          
          <p>The domaine is not accessible by public transportation. If you plan on staying outside of the domaine or wish to leave the domaine property during your stay, it is advisable to rent a car. We will have a shuttle service available to access the domaine from the Limoges train station. More information is on the Travel page.</p>

        </div>

        <h2>Le Domaine</h2>

        <div>
          <p>There are many <a target="_blank" href="http://www.essendieras.com/activities-facilities/activities-facilities-domain/">activities</a> on the domaine property to enjoy during your stay and should be taken advantage of to the fullest!</p> 

          <ul>
            <li>Spa</li>
            <li>Tennis Court</li>
            <li>Soccer Field</li>
            <li>Beach Volleyball</li>
            <li>Pétanque</li>
            <li>Swimming Pools</li>
            <li>Paddle Boats in the Pond</li>
            <li>Walking and Biking Trails</li>
            <li>Mountain bikes are available to rent</li>
            <li>9-Hole Golf Course</li>
            <ul>
              <li>Materials can be rented at the domain</li>
              <li>Contact the domaine for a group discount</li>
            </ul>
          </ul> 
        </div>
      </div> 
    </div>
    <div v-else-if="language == 'french'">
      <div>
        <h2> Hébergement </h2>
        <!-- verified --> 
        <div class = "textBox">
          <p> Le Domaine d'Essendiéras offre de nombreuses options pour organiser votre séjour pendant le mariage. Il existe différentes <a target="_blank" href="http://www.essendieras.fr/location/holiday-homes/"> maisons de vacances </a> qui peuvent être louées sur place et se trouvent à seulement 20 minutes à pied du lieu de la cérémonie. Le <a target="_blank" href="http://www.essendieras.fr/location/campsite/">camping </a> est également une option pour ceux qui sont intéressés.</p>

          <p><span style="font-weight: bold">Les logements n'étant pas tous reservés pour nos invités, nous vous encourageons fortement à contacter le domaine pour poser une option aussi vite que possible, via Helena : <a target="_blank" href="mailto:helena@essendieras.fr">helena@essendieras.fr.</a></span> La plupart des logements disponibles se louent par groupes de 6 personnes ou plus, avec une durée de location d'une semaine (notez que le prix de location dans ce cas est tout à fait acceptable pour un groupe de 6).</p>

          <p> Le domaine n’est pas accessible par les transports en commun. Si vous envisagez de séjourner en dehors du domaine ou souhaitez quitter la propriété pendant votre séjour, il est conseillé de louer une voiture. Nous aurons un service de navette disponible pour accéder au domaine depuis la gare de Limoges. Plus d’informations sur la page Accès. </p>
        </div>
        <h2> Le Domaine </h2>
        <div>
          <p> Il existe de nombreuses <a target="_blank" href="http://www.essendieras.fr/activites-loisirs/activites-sportives-detente/">activités</a> sur la propriété dont vous pourrez profiter pendant votre séjour ! </p>
          <ul>
            <li> Spa </li>
            <li> Terrain de tennis </li>
            <li> Terrain de football </li>
            <li> Beach volley </li>
            <li> Pétanque </li>
            <li> Piscines </li>
            <li> Pédalo sur l'étang </li>
            <li> Sentiers pédestres et cyclables </li>
            <li> Des VTT sont disponibles à la location </li>
            <li> Parcours de golf de 9 trous </li>
            <ul>
              <li> Vous pouvez louer tout le matériel sur le domaine </li>
              <li> Contactez le domaine pour une réduction de groupe </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Venue',
  props: {
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    margin-bottom: 20px;
  }
</style>
