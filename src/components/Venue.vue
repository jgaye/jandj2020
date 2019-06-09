<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>Accommodations</h2>

        <div class="textBox">
          <p>Le Domaine d'Essendiéras offers plenty of options to accommodate your stay during the wedding. There are various <a href="http://www.essendieras.com/location/holiday-homes/">holiday homes</a> that can be rented on the property and are only a 15-minute walk to the main area of the domaine. <a href="http://www.essendieras.com/location/campsite/">Camping</a> is also an option for those interested.</p>

          <p>Most rental properties on the domaine house at least 6 people. If you are a smaller group and need help coordinating with others for lodging, please contact us.</p>
          
          <p>The domaine is not accessible by public transportation. If you plan on staying outside of the domaine or wish to leave the domaine property during your stay, it is advisable to rent a car. We will have a shuttle service available to access the domaine from the Limoges train station. More information is on the Travel page.</p>

        </div>

        <h2>Le Domaine</h2>

        <div>
          <p>There are many <a href="http://www.essendieras.com/activities-facilities/activities-facilities-domain/">activities</a> on the domain property to enjoy during your stay and should be taken advantage of to the fullest!</p> 

          <ul>
            <li>Spa</li>
            <li>Tennis Court</li>
            <li>Soccer Field</li>
            <li>Beach Volleyball</li>
            <li>Bocce Ball</li>
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

        <div class = "textBox">
          <p> Le Domaine d'Essendiéras offre de nombreuses options pour organiser votre séjour pendant le mariage. Il existe différentes <a href="http://www.essendieras.com/location/holiday-homes/"> maisons de vacances </a> qui peuvent être louées sur place et se trouvent à seulement 15 minutes à pied des principales domaine du domaine. Le <a href="http://www.essendieras.com/location/campsite/"> Camping </a> est également une option pour ceux qui sont intéressés. </p>

          <p> La plupart des biens locatifs du domaine comptent au moins 6 personnes. Si vous êtes un petit groupe et que vous avez besoin d’aide pour la coordination avec d’autres, contactez-nous. </p>
          
          <p> Le domaine n’est pas accessible par les transports en commun. Si vous envisagez de rester en dehors du domaine ou souhaitez quitter la propriété du domaine pendant votre séjour, il est conseillé de louer une voiture. Nous aurons un service de navette disponible pour accéder au domaine depuis la gare de Limoges. Plus d’informations sur la page Voyages. </p>

        </div>

        <h2> Le Domaine </h2>

        <div>
          <p> Il existe de nombreuses <a href="http://www.essendieras.com/activities-facilities/activities-facilities-domain/"> activités </a> sur la propriété du domaine à apprécier pendant votre séjour et qui devraient être: profité au maximum! </p>

          <ul>
            <li> Spa </li>
            <li> court de tennis </li>
            <li> Terrain de football </li>
            <li> Beach volley </li>
            <li> Bocce Ball </li>
            <li> Piscines </li>
            <li> Pédalo dans l'étang </li>
            <li> Sentiers pédestres et cyclables </li>
            <li> Des VTT sont disponibles à la location </li>
            <li> parcours de golf de 9 trous </li>
            <ul>
              <li> Vous pouvez louer du matériel sur le domaine </li>
              <li> Contacter le domaine pour une réduction de groupe </li>
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
</style>
