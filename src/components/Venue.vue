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
    <div v-if="language == 'french'">
      <p>TODO</p>
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
