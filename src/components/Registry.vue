<template>
  <div class="content">
    <div v-if="language == 'english'">
      
      <h2>Wedding Registry</h2>
      <div class="pageRegistry">

        <p>Thank you for looking at our wedding registry. If you want to gift us money, there will be a cagnotte at the wedding.</p>

        <div class="listWrapper">
          <tr class="listItem" v-for='gift in registry' v-bind:key='gift.name'>
            <a v-bind:href="gift.link" >{{ gift.name }}</a>
            <span v-if="gift.calledFor">
              <button class="button calledFor">This gift is called for</button>
            </span>
            <span v-else>
              <button class="button" v-on:click="callGiftFor(gift)">I want to purchase this</button>
            </span>
          </tr>
        </div>

      </div>
    
    </div>

    <div v-else-if="language == 'french'">
      
      <h2>Liste de mariage</h2>
      <div class="pageRegistry">
        TODO
      </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://dq55c3j7ge.execute-api.eu-west-3.amazonaws.com/v0/`,
})

export default {
  name: 'Registry',
  props: {
    language: String,
  },
  data() {
    return {
      registry: [],
      errors: [],
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
    // this.registry = [
    //   {"giftID":0, "name":"kettle", "link":"https://google.com/search?q=kettle", "calledFor": false},
    //   {"giftID":1, "name":"fondue", "link":"https://google.com/search?q=fondue", "calledFor": false},
    //   {"giftID":2, "name":"this is a very long name to test if this wraps", "link":"https://google.com/search?q=cagnotte", "calledFor": true},
    // ]
  },
  computed: {
  },
  methods: {
    callGiftFor: function(gift){ 
      // HTTP.post('guest/' + guestID, this.jsonBody)
      // .then(response => {
      //     this.responseSent = 1;
      //     return response.data;
      // })
      // .catch(error => {
      //    this.errors.push(error);
      // });
      gift.calledFor = true
    },
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
    justify-content: space-between;
    align-items: baseline;
  }

  button {
    background-color: rgb(135, 181, 105, 0.8);
    padding: 2vh 3vh;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;;
  }

  .button {
    margin-top: 3vh;
    margin-bottom: 5vh;
  }

  .button.calledFor {
      background-color: rgb(255, 0, 0, 0.8);
  }

  p {
    margin-bottom: .5em;
  }

  @media screen and (max-width: 640px) {

  }

</style>
