<template>
  <div class="hello">
    <h2>Accommodations</h2>

    <p>Le Domaine d'Essendiéras offers plenty of options to accommodate your stay during the wedding. There are various <a href="http://www.essendieras.com/location/holiday-homes/">holiday homes</a> that can be rented on the property and are only a 15-minute walk to the main area of the domain. <a href="http://www.essendieras.com/location/campsite/">Camping</a> is also an option for those interested.</p>

    <h2>Le Domaine</h2>

    <p>There are many activities on the domain property to enjoy during your stay and should be taken advantage of to the fullest!</p> 

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
        <li>All materials can be rented at the domain</li>
        <li>A group discount can be provided by contacting the domain</li>
      </ul>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'Venue',
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
