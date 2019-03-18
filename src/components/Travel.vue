<template>
  <div class="hello">
    <h2>Trains</h2>

    <p>Closest train stations to Le Domaine d’Essendiéras:
    <ul>
      <li>Thiviers (26 km/16 miles)</li>
      <li>Périgueux (39 km/24 miles)</li>
      <li>Limoges (60 km/37 miles)</li>
    </ul></p>

    <p>Train tickets can be booked directly on <a href="https://en.oui.sncf/en/train-ticket">SNCF’s website</a>.</p>

    <p>A shuttle service will be available from the Limoges train station to the Domaine d’Essendiéras for your convenience. More information will be shared at a later time. </p>

    <h2>Airports</h2>

    <p>Closest airports to Le Domaine d’Essendiéras:
    <ul>
      <li>Périgueux – Bassillac (34 km/21 miles)</li>
      <li>Brive – Vallée de la Dordogne (72 km/44 miles)</li>
      <li>Limoges – Bellegarde (73 km/45 miles)</li>
      <li>Bergerac – Dordogne Perigord (115 km/71 miles)</li>
      <li>Bordeaux – Mérignac (206 km/128 miles)</li>
    </ul></p>

    <h2>Driving</h2>

    <p>The address: <br>
    Lieu-dit Essendiéras <br>
    24160 Saint Médard d’Excideuil <br>
    DORDOGNE FRANCE</p>

    <p>Just past Limoges, take exit no. 36 off the A20. This takes you along a comfortable and captivating secondary road to the Domain.<br> 
    The general reception is located at the Clubhouse of the Golf, follow “Reception” signs.</p>
  </div>
</template>

<script>
export default {
  name: 'Travel',
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
