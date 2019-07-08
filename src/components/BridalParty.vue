<template>
  <div class="content">
    <div v-if="language == 'english'">
      <div>
        <h2>Wedding Party</h2>

         <div class="row">   
          <div class="column">

            <h5>Alexandra - Maid of Honor</h5>
            <img src="../assets/alexandra.jpeg">
            <p class="bridal">Julia is honored to have her younger sister Alex as her Maid of Honor. The two of them have very different personalities, but can always bond over their love of travel, cheesesteaks, and the reality game show Big Brother. One of Julia's favorite memories is when they went to Iceland and Alex's adventurous side forced them to climb a steep waterfall. Julia will never forget how happy Alex was running across the mountaintops without a care in the world. The two have shared a lot over the years, making countless and precious memories.
            </p>
          </div>

          <div class="column">

            <h5>Loris - Best Man</h5>
            <img src="../assets/Loris.png">
            <p class="bridal">Julien is thrilled to have Loris, his closest friend from engineering school, as his Best Man. They initially bonded by helping each other in countless student clubs: organising parties with the Sound & Light, editing the school's newspaper, CdV, until the morning, etc. They continued supporting each other in years following college. They each travel a lot, but always managed to meet where they could: Montreal, New York, Philadelphia, London, Saint-Etienne, Gothenburg, and more. They are never far away from each other. 
            </p>
          </div>

        </div>
        <div class="row">   
          <div class="column"> 

            <h5>Sandra - Bridesmaid</h5>
            <img src="../assets/Sandra.jpg">
            <p class="bridal">Sandra and Julia became friends in high school when they sat at the same lunch table, where Sandra soon realized how loud her new friend was. At Drexel University, they worked together for the school’s student newspaper and became known as the Two-Headed News Team. They have a shared love for the Phillies and Sandra's cat <a target="_blank" href="https://www.instagram.com/realmunothecat/">Muno</a>. Sandra has always been one of Julia's biggest supporters, and they couldn't survive without their daily GChats.
            </p>

            <h5>Taylor - Bridesmaid</h5>
            <img src="../assets/Taylor.jpeg">
            <p class="bridal">Taylor and Julia met in third grade when they played on the same soccer team and were also in the same class. They grew up together playing jailbreak and watching scary movies. Their friendship continued to thrive over the years, going to countless Train concerts and wineries. Julia was thrilled to stand by Taylor's side on her wedding day, and Julia is excited to have Taylor do the same.
            </p>
          </div>

          <div class="column">

            <h5>Antoine - Groomsman</h5>
            <img src="../assets/Antoine.png">
            <p class="bridal">Julien has known Antoine, his older cousin, since he was born. As kids, they were always playing together during their summer and winter vacations, obsessing around the same books, movies, video games, etc. They continue having adventures each time they travel and during family events. Julien is very thankful for Antoine's presence at his and Julia's civil union and civil marriage, and that Antoine accepted to be his groomsman for this upcoming wedding celebration.
            </p>

            <h5>Guénolé - Groomsman</h5>
            <img src="../assets/Guenole.png">
            <p class="bridal">Guénolé and Julien started their friendship in the Pipocoptère student life group at their university. They were also members of many of the same school clubs. For Julien, Guénolé is the one friend you can always count on, be it to give a hand for one (or two, or three!) apartment moves, or to finalize a school newspaper article at 5AM. Julien is very proud to have Guénolé as a groomsman and to have his support.
            </p>
          </div>

        </div>

      </div>
    </div>

    <!-- NOT UPDATED -->
    <div v-else-if="language == 'french'">
      <div>
        <h2>Cortège</h2>

         <div class="row">   
          <div class="column">

            <h5>Alexandra - Dame d'Honneur</h5>
            <img src="../assets/alexandra.jpeg">
            <p class="bridal">Julia est honorée d'avoir sa petite soeur Alex comme demoiselle d'honneur. Elles ont des personnalités très différentes, mais elles se retrouvent toujours dans leur amour du voyage, des "cheesesteaks," et de Big Brother, l'émission de télé-réalité. L'un des souvenirs préférés de Julia date de leur voyage en Islande, quand Alex l'aventureuse les a obligés à escalader une cascade abrupte. Julia n'oubliera jamais à quel point Alex était heureuse de courir à travers les montagnes Islandaise sans aucun souci au monde.
            </p>
          </div>

          <div class="column">

            <h5>Loris - Homme d'Honneur</h5>
            <img src="../assets/Loris.png">
            <p class="bridal">Julien est très heureux et ému d'avoir Loris, son plus proche ami d'école d'ingénieur, comme homme d'honneur. Julien et Loris ont forgé leur profonde amitié en s'entraidant dans les clubs étudiants, que ce soit en faisant l'organisation Son & Lumière des soirés de l'école, ou en mettant en page le Coup de Venst jusqu'au petit matin. Ils ont tous deux beaucoup voyagé, et ont réussi à se retrouver à Montreal, New-York, Philadelphie, Londres, Saint-Etienne, Göteborg, ... Bref, ils ne sont jamais très loin l'un de l'autre. 
            </p>
          </div>

        </div>
        <div class="row">   
          <div class="column"> 

            <h5>Sandra - Demoiselle d'Honneur</h5>
            <img src="../assets/Sandra.jpg">
            <p class="bridal">Sandra et Julia sont devenues amies au lycée quand elles s'asseyaient à la même table au déjeuner. Sandra a vite compris à quel point sa nouvelle amie parlait fort ! À l’Université de Drexel, elles ont travaillé ensemble pour le journal étudiant et ont rapidement été connues comme "l’équipe des infos à deux têtes." Elles partagent un amour commun pour les Phillies et <a target="_blank" href="https://www.instagram.com/realmunothecat/">Muno</a>, le chat de Sandra. Sandra a toujours été l’une des plus grandes partisantes de Julia et elles ne pourraient pas survivre sans leur GChats quotidiens.
            </p>

            <h5>Taylor - Demoiselle d'Honneur</h5>
            <img src="../assets/Taylor.jpeg">
            <p class="bridal">Taylor et Julia se sont rencontrées dans la même classe de troisième année d'école primaire, lorsqu'elles jouaient dans la même équipe de football. Elles ont grandi ensemble en jouant au "jailbreak" et en regardant des films d'horreur. Leur amitié a continué à prospérer au fil des ans, à travers d'innombrables concerts du groupe Train, et de nombreuses visites dans des vignobles. Julia était ravie de se tenir aux côtés de Taylor le jour de son mariage et est comblée de voir Taylor faire de même pour elle.
            </p>
          </div>

          <div class="column">

            <h5>Antoine - Garçon d'Honneur</h5>
            <img src="../assets/Antoine.png">
            <p class="bridal">Julien connaît Antoine, son cousin ainé d'un an, depuis sa naissance. Ils ont fait les 400 coups chaque vacances d'été et d'hiver, partageant les mêmes obsessions autour des livres, films, jeux vidéos... Ils continuent leurs aventures autour du monde à chaque voyage ensemble, et à chaque réunion de famille. Julien est très ému qu'Antoine ai pu être présent à sa cérémonie de PACS, de mariage civile, et qu'il puisse enfin prendre sa place d'honneur pour cette célébration du mariage en famille.
            </p>

            <h5>Guénolé - Garçon d'Honneur</h5>
            <img src="../assets/Guenole.png">
            <p class="bridal">Guénolé et Julien se sont liés d'amitié dans la liste des Pipocoptères à Brest, et en participant presque à tous les mêmes clubs de l'école. Pour Julien, Guénolé est l'ami sur lequel on peut toujours compter, que ce soit pour aider pour un (ou deux, ou trois !) déménagement, ou pour finir de corriger un article du journal de l'école à 5 heures du matin. Il est extrêmement fier d'avoir Guénolé comme garçon d'honneur, et rassuré de pouvoir compter sur son soutien.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BridalParty',
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
    float: left;
    border-radius: 50%;
    max-width: 30%;
    margin-right: 25px;
  }

  .bridal{
    padding-top: 5px;
    text-align: justify;
  }
  .row {
    display: flex;
  }

  .column {
    width: 100%;
    flex-grow: 1;
    padding: 0 20px;
  }
</style>
