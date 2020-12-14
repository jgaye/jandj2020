<template>
  <div class="content">
    <div v-if="language == 'english'">
      
      <h2>Wedding Registry</h2>
      <div class="pageRegistry">

        <p>Your presence at our wedding is the greatest gift of all. However, if you would like to honor us with a money gift, you'll find a card box at the reception.</p>
        <p> For those favoring a physical gift, our wish list is below. Please feel no obligation to use this list.</p>
        <p>If you do intend to gift a listed item, click the button next to the item, so other guests will know it's been purchased.</p>

        <div class="listWrapper">
          <tr class="listItem" v-for='gift in registry' v-bind:key='gift.name'>
            
            <span v-if="gift.calledFor">
              <button class="button calledFor">This gift has already been purchased.</button>
            </span>
            <span v-else>
              <button class="button" v-on:click="showModal(gift.idregistry)">I purchased this item.</button>
            </span>
            <a class="giftLink" v-bind:href="gift.link" >{{ gift.name }}</a>
          </tr>
          <modal v-show="isModalVisible"
            :id="selectedIdRegistry"
            :language="language"
            v-on:cancel="cancelModal()" 
            @validate="validateModal">
          </modal>
        </div>
      </div>
    </div>

    <div v-else-if="language == 'french'">
      
      <h2>Liste de Mariage</h2>
      <div class="pageRegistry">
        <p>Votre presence à notre mariage est le plus beau cadeau qui soit. Cependant, si vous souhaitez nous faire un don pécunier pour nous aider à partir en voyage de noce, ou à acheter un foyer, nous aurons une boîte à dons à votre disposition lors de notre réception.</p>
        <p>Pour ceux qui préférent un cadeau physique, vous trouverez ci dessous notre liste de mariage. Ne vous sentez en aucun cas forcé à suivre cette liste.</p>
        <p>Si vous souahitez acheter un objet de la liste, appuyez sur le bouton en tête de sa ligne, de façon à ce que les autres invités puissent savoir qu'il vous est reservé.</p>

        <div class="listWrapper">
          <tr class="listItem" v-for='gift in registry' v-bind:key='gift.name'>
            
            <span v-if="gift.calledFor">
              <button class="button calledFor">Ce cadeau est déjà pris.</button>
            </span>
            <span v-else>
              <button class="button" v-on:click="showModal(gift.idregistry)">J'ai achete ce cadeau.</button>
            </span>
            <a class="giftLink" v-bind:href="gift.link" >{{ gift.name }}</a>
          </tr>
          <modal v-show="isModalVisible"
            :id="selectedIdRegistry"
            :language="language"
            v-on:cancel="cancelModal()" 
            @validate="validateModal">
          </modal>
        </div>

      </div>
    </div>
  
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './Modal.vue'

export const HTTP = axios.create({
  baseURL: `https://dq55c3j7ge.execute-api.eu-west-3.amazonaws.com/v0`,
  // baseURL: `https://api.jandj2020.wedding/`,
})

export default {
  name: 'Registry',
  components: {
    Modal
  },
  props: {
    language: String,
  },
  data() {
    return {
      registry: [],
      errors: [],
      isModalVisible: false,
      selectedIdRegistry: 0,
    }
  },
  mounted () {
    HTTP.get('registry')
    .then(response => {
       this.registry = response.data, "name";
    })
    .catch(error => {
       this.errors.push(error);
    });
  },
  computed: {
  },
  methods: {
    callGiftFor: function(id, calledBy){ 
      const gift = this.registry.find(item => item.idregistry === id)
      const datetime = new Date().toISOString()
      gift.calledFor = true
      HTTP.patch('registry/' + gift.idregistry, JSON.stringify({"calledBy":calledBy, "timeCalledFor":datetime}))
      .then(response => {
          return response.data;
      })
      .catch(error => {
         this.errors.push(error);
      });
    },
    showModal(id) {
      this.selectedIdRegistry = id
      this.isModalVisible = true;
    },
    cancelModal() {
      this.isModalVisible = false;
    },
    validateModal(calledBy) {
      this.callGiftFor(this.selectedIdRegistry, calledBy)
      this.isModalVisible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pageRegistry {
  }

  .listWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4vh;
    margin-bottom: 2vh;
  }

  .listItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2vh;
    margin-left: 20%;
  }

  .giftLink {
    margin-left:2vw;
    text-align: left;
  }

  button {
    background-color: rgb(135, 181, 105, 0.8);
    padding: 2vh 3vh;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    width: 140px;
  }

  .button.calledFor {
      background-color: rgb(120, 120, 120, 0.8);
      cursor: not-allowed;
  }

  p {
    margin-bottom: .5em;
  }

  @media screen and (max-width: 640px) {

  }

</style>
