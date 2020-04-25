<template>
  <div class="content">
    <div v-if="language == 'english'">
      <h2>RSVP</h2>
      <div class="pageRSVP">
        
        <div v-if="responseSent">
          <p>Thank you! Your response has been submitted.</p>
        </div>
        <div v-else-if="guestID == 0">
          <div class="searchWrapper">
            <p>We look forward to celebrating with you! Kindly RSVP by April 1st.</p>
            <label>Search your name:
              <input type="text" v-model="search" placeholder="Enter your name"/>
            </label>

            <div class="searchWrapper" v-if="sortedList.length <= 15">
                <label><span style="font-style: italic;">Select:</span></label>
                <tr v-for='guest in sortedList' v-bind:key='guest.name'>
                  <span class="selectName" v-on:click="setGuestID(guest.guestID)">{{ guest.name }}</span>
                </tr>
            </div>
          </div>
        </div>
        <div v-else>
          
          <div class="guestNames">
            <p>My Name: {{selectedGuest.name}}
            <br><span class="notMe" v-on:click="setGuestID(0)">Oops. This is not me!</span></p>
              <div class="familyArea">
                <p>All members of my party: </p>
                <div class="familyNames">
                  <tr v-for='guest in familyGuest' v-bind:key='guest.name'>
                      <span>{{ guest.name }}</span>
                  </tr>
                  <div class="row" v-if="selectedGuest.plusOneOption">
                    <label>My guest's name: </label>
                    <input type="text" v-model="selectedGuest.plusOneName" placeholder="Name"/>
                  </div>
                </div>
              </div>
          </div>
          
          <div class="sectionRSVP">
            <p>I'd like to RSVP for:</p>

            <div class="eventRSVP">
              <div v-if="selectedGuest.inviteFriday">
                <div class="eventSelector">
                  <label>Tuesday Dinner:</label>
                  <PlusMinusField v-model="selectedGuest.responseFriday" :min="0" :max="5"></PlusMinusField>
                </div>
              </div>

              <div class="eventSelector">
                <label>Wednesday Wedding:</label>
                <PlusMinusField v-model="selectedGuest.responseSaturday" :min="0" :max="5"></PlusMinusField>
              </div>

              <div class="eventSelector">
                <label>Thursday Brunch:</label>
                <PlusMinusField v-model="selectedGuest.responseSunday" :min="0" :max="5"></PlusMinusField>
              </div>
            </div>    
          </div>

          <div class="row">
            <label>My dietary restrictions: </label>
            <input type="text" v-model="selectedGuest.specialDiet" placeholder="Cheesesteaks, please!" />
          </div>

          <br>
          
          <p>For important updates from the bride and groom</p>
          <div class="row">
            <label>My email address: </label>
            <input type="text" v-model="selectedGuest.email" placeholder="me@email.com" />
          </div>

          <div class="button">
            <button v-on:click="saveGuestInfo(guestID)">Submit</button>
          </div>
        </div>
        
      </div>
    </div>

    <div v-else-if="language == 'french'">
      <h2>RSVP</h2>
      <div class="pageRSVP">
        
        <div v-if="responseSent">
          <p>Merci ! Votre réponse a bien été reçue.</p>
        </div>
        <div v-else-if="guestID == 0">
          <div class="searchWrapper">
            <p>Nous avons hâte de célébrer notre mariage avec vous ! Réponse souhaitée avant le 1er avril.</p>
            <label>Tapez votre nom ici :
              <input type="text" v-model="search" placeholder="Votre nom"/>
            </label>

            <div class="searchWrapper" v-if="sortedList.length <= 15">
                <label><span style="font-style: italic;">Sélectionnez votre nom :</span></label>
                <tr v-for='guest in sortedList' v-bind:key='guest.name'>
                  <span class="selectName" v-on:click="setGuestID(guest.guestID)">{{ guest.name }}</span>
                </tr>
            </div>
          </div>
        </div>
        <div v-else>
          
          <div class="guestNames">
            <p>Mon nom : {{selectedGuest.name}}
            <br><span class="notMe" v-on:click="setGuestID(0)">Oups. Ce n'est pas moi !</span></p>
              <div class="familyArea">
                <p>Les membres de ma famille : </p>
                <div class="familyNames">
                  <tr v-for='guest in familyGuest' v-bind:key='guest.name'>
                      <span>{{ guest.name }}</span>
                  </tr>
                  <div class="row" v-if="selectedGuest.plusOneOption">
                    <label>Le nom de mon invité : </label>
                    <input type="text" v-model="selectedGuest.plusOneName" placeholder="Name"/>
                  </div>
                </div>
              </div>
           </div>
          
          <div class="sectionRSVP">
            <p>Je souhaite indiquer le nombre de membres de ma familles présents pour :</p>

            <div class="eventRSVP">
              <div v-if="selectedGuest.inviteFriday">
                <div class="eventSelector">
                  <label>Le dîner de mardi :</label>
                  <PlusMinusField v-model="selectedGuest.responseFriday" :min="0" :max="5"></PlusMinusField>
                </div>
              </div>

              <div class="eventSelector">
                <label>Le mariage mercredi :</label>
                <PlusMinusField v-model="selectedGuest.responseSaturday" :min="0" :max="5"></PlusMinusField>
              </div>

              <div class="eventSelector">
                <label>Le brunch de jeudi :</label>
                <PlusMinusField v-model="selectedGuest.responseSunday" :min="0" :max="5"></PlusMinusField>
              </div>
            </div>    
          </div>

          <div class="row">
            <label>Mes allergies et restrictions alimentaires : </label>
            <input type="text" v-model="selectedGuest.specialDiet" placeholder="Les carottes sont cuites !" />
          </div>

          <br>
          <p>Pour recevoir les futures correspondances de la part des mariés</p>
          <div class="row">
            <label>Mon adresse email : </label>
            <input type="text" v-model="selectedGuest.email" placeholder="moi@email.com" />
          </div>

          <div class="button">
            <button v-on:click="saveGuestInfo(guestID)">Confirmer</button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PlusMinusField from './PlusMinusField.vue'

export const HTTP = axios.create({
  baseURL: `https://dq55c3j7ge.execute-api.eu-west-3.amazonaws.com/v0/`,
})

export default {
  name: 'RSVP',
  components: {
    PlusMinusField
  },
  props: {
    language: String,
  },
  data() {
    return {
      guestID: 0,
      guests: [],
      search: '',
      errors: [],
      responseSent: 0
    }
  },
  mounted () {
    HTTP.get('guest')
    .then(response => {
       this.guests = response.data, "name";
    })
    .catch(error => {
       this.errors.push(error);
    });
  },
  computed: {
    filteredList() {
      return this.guests.filter(guest => {
        return guest.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    sortedList: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      return [...this.filteredList].sort(compare);
    },
    selectedGuest() {
      return this.guests.filter(guest =>
        guest.guestID === this.guestID
      )[0]
    },
    familyGuest() {
      return this.guests.filter(guest => guest.familyID === this.selectedGuest.familyID)
    },
    jsonBody() {
      var copiedSelectedGuest = [...this.selectedGuest]
      for (var key in this.selectedGuest) {
        if (typeof this.selectedGuest[key] == 'string') {
          copiedSelectedGuest[key] = this.copiedSelectedGuest[key].replace(/'/g,"’")
        }
      }
      return JSON.stringify(this.selectedGuest)
    }
  },
  methods: {
    saveGuestInfo: function(guestID){ 
      HTTP.post('guest/' + guestID, this.jsonBody)
      .then(response => {
          this.responseSent = 1;
          return response.data;
      })
      .catch(error => {
         this.errors.push(error);
      });
    },
    setGuestID: function(guestID){
      this.guestID = guestID
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pageRSVP {
    display: flex;
    justify-content: center;
  }

  .searchWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4vh;
    margin-bottom: 2vh;
  }

  .row {
    display: flex;
    align-items: baseline;
    margin-top: 10px;
  }

  .guestNames {
    display: flex;
    flex-direction: column;
  }

  .familyNames {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5vw;
  }

  .sectionRSVP {
    margin-top: 3vh;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: column;
  }

  .eventRSVP {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5vw;
  }

  input[type="text"] {
    border: solid 1px silver;
    border-radius: 3px;
    line-height: 2;
    padding: 1px 5px;
    min-width: 200px;
    font-size: 14px;
    margin: 0px 5px;
  }

  input[type="number"] {
    border: solid 1px silver;
    border-radius: 3px;
    width: 30px;
    padding: 1px 3px;
  }

  .notMe {
    font-size: smaller;
    font-style: italic;
    cursor: pointer;
  }

  .notMe:hover {
    color: darkgreen;
  }

  .selectName {
    cursor: pointer;
    line-height: 2;
  }

  .selectName:hover {
    font-size: larger;
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

  p {
    margin-bottom: .5em;
  }

  @media screen and (max-width: 640px) {

    .eventRSVP {
      align-items: center;
    }

    .eventSelector {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .row {
      padding-bottom: 2vh;
      flex-direction: column;
      text-align: left;
    }
  }

</style>
