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
            <li>Limoges* (60 km/37 miles)</li>
          </ul>
        </p>

        <p>*For your convenience, <b>a shuttle service will be available from the Limoges train station</b> to Le Domaine d’Essendiéras. Please check back as the date gets closer for more information. 
        </p>

        <p>Train tickets can be booked directly on <a target="_blank" href="https://en.oui.sncf/en/train-ticket">SNCF’s website</a>.</p> 
        <p>For the guests arriving on <b>Friday</b>, the train times we recommend (based on travel time and cost) are:</p>
        <p><ul>
          <li>Departure 9:29 PARIS AUSTERLITZ</li>
          <li>Arrival 12:46 LIMOGES BENEDICTINS</li>
          <br>
          <li>Departure 14:41 (2:41pm) PARIS AUSTERLITZ</li>
          <li>Arrival 17:54 (5:54pm) LIMOGES BENEDICTINS</li>
        </ul></p>
        <p>For the guests arriving on <b>Saturday</b>, the train times we recommend (based on travel time and cost) are:</p>
        <p><ul>
          <li>Departure 8:29 PARIS AUSTERLITZ</li>
          <li>Arrival 11:53 LIMOGES BENEDICTINS</li>
          <br>
          <li>Departure 9:29 PARIS AUSTERLITZ</li>
          <li>Arrival 12:46 LIMOGES BENEDICTINS</li>
        </ul></p>
        <p><b>Please keep in mind, there's an additional hour travel time from the train station to the venue.</b></p>
      </div>

      <h2>Airports</h2>

      <div>
        <p>Closest airports to Le Domaine d’Essendiéras:
        <ul>
          <li>Limoges – Bellegarde (73 km/45 miles)</li>
          <li>Bordeaux – Mérignac (206 km/128 miles)</li>
        </ul>
        </p>
      </div>

      <h2>By Car</h2>

      <div>
        <p>The address: <br>
        Lieu-dit Essendiéras <br>
        24160 Saint Médard d’Excideuil <br>
        DORDOGNE FRANCE</p>

        <p>Just past Limoges, take exit no. 36 off the A20. This takes you along a comfortable and captivating secondary road to the domaine. The general reception is located at the Clubhouse of the Golf, follow “Reception” signs.</p>
      </div>

      </div>
    </div>
    <div v-else-if="language == 'french'">
      <div>
        <h2> Trains </h2>
      <!-- verified --> 
      <div>
        <p> Gares les plus proches du Domaine d’Essendiéras :
          <ul>
            <li> Thiviers (26 km) </li>
            <li> Périgueux (39 km) </li>
            <li> Limoges* (60 km) </li>
          </ul>
        </p>
        <p>*Pour votre confort, <b>un service de navette sera disponible depuis la gare de Limoges</b> jusqu’au Domaine d’Essendiéras. Veuillez vérifier ce site web pour de plus amples informations ultérieurement. </p>

        <p>Pour les invités arrivant le <b>Vendredi</b>, les horaires de train que nous recommandons (en fonction du temps de trajet et du prix des billets) sont les suivants:</p>
        <p><ul>
          <li>Départ 9h29 PARIS AUSTERLITZ</li>
          <li>Arrivée 12h46 LIMOGES BENEDICTINS</li>
          <br>
          <li>Départ 14h41 PARIS AUSTERLITZ</li>
          <li>Arrivée 17h54 LIMOGES BENEDICTINS</li>
        </ul></p>
        <p>Pour les invités arrivant le <b>Samedi</b>, les horaires de train que nous recommandons (en fonction du temps de trajet et du prix des billets) sont les suivants:</p>
        <p><ul>
          <li>Départ 8h29 PARIS AUSTERLITZ</li>
          <li>Arrivée 11h53 LIMOGES BENEDICTINS</li>
          <br>
          <li>Départ 9h29 PARIS AUSTERLITZ</li>
          <li>Arrivée 12h46 LIMOGES BENEDICTINS</li>
        </ul></p>
        <p><b>Veuillez noter qu'il y a un temps de trajet supplémentaire entre la gare et le domaine.</b></p>

      </div>
      <h2> Aéroports </h2>
      <div>
        <p> Aéroports les plus proches du Domaine d’Essendiéras:
        <ul>
          <li> Limoges - Bellegarde (73 km) </li>
          <li> Bordeaux - Mérignac (206 km) </li>
        </ul>
        </p>
      </div>
      <h2> En Voiture </h2>
      <div>
        <p> L'adresse: <br>
        Lieu-dit Essendiéras <br>
        24160 Saint Médard d’Excideuil <br>
        DORDOGNE FRANCE </p>

        <p> Sortie 36 de l’A20 (Limoges). Suivre la D704 vers le sud pendant 50 km direction Saint Yrieix la Perche puis Lanouaille. Jusqu’à l’intersection avec la D705. <br/>
        Sortie 17 de l’A89 (Brive-Perigueux). Suivre la D704 vers le nord pendant 20 km direction Saint Yrieix la Perche. Jusqu’à l’intersection avec la D705. <br/>
        L’accueil général se situe au niveau du Clubhouse du Golf et est indiqué par un grand panneau « Reception ». </p>
      </div>
      </div>
    </div>
    <br>
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
