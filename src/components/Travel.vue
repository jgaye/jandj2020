<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
      <h2>Trains</h2>

      <div>
        <p>Closest train stations to Le Domaine d’Essendiéras:
          <ul>
            <li>Thiviers (26 km/16 miles)</li>
            <li>Périgueux (39 km/24 miles)</li>
            <li>Limoges (60 km/37 miles)</li>
          </ul>
        </p>

        <p>Train tickets can be booked directly on <a href="https://en.oui.sncf/en/train-ticket">SNCF’s website</a>.</p>

        <p>A shuttle service will be available from the Limoges train station to Le Domaine d’Essendiéras for your convenience. Please check back as the date gets closer, as more information will be shared at a later time. </p>
      </div>

      <h2>Airports</h2>

      <div>
        <p>Closest airports to Le Domaine d’Essendiéras:
        <ul>
          <li>Périgueux – Bassillac (34 km/21 miles)</li>
          <li>Brive – Vallée de la Dordogne (72 km/44 miles)</li>
          <li>Limoges – Bellegarde (73 km/45 miles)</li>
          <li>Bergerac – Dordogne Perigord (115 km/71 miles)</li>
          <li>Bordeaux – Mérignac (206 km/128 miles)</li>
        </ul>
        </p>
      </div>

      <h2>Driving</h2>

      <div>
        <p>The address: <br>
        Lieu-dit Essendiéras <br>
        24160 Saint Médard d’Excideuil <br>
        DORDOGNE FRANCE</p>

        <p>Just past Limoges, take exit no. 36 off the A20. This takes you along a comfortable and captivating secondary road to the domaine. The general reception is located at the Clubhouse of the Golf, follow “Reception” signs.</p>
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
  name: 'Travel',
  props: {
    language: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
