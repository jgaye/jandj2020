<template>
  <div>
  <div v-if="language == 'english'">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                Thank you!
              </slot>
            </div>

            <div class="modal-body">
              <div>
                <slot name="body">
                  Please confirm by clicking below.
                </slot>
              </div>
              <br>
              <div>
                <label>My name: </label>
                <input type="text" v-model="calledBy" placeholder="Name"/>
              </div>
              <br>
              <div class="modal-button-area">
                <button class="modal-default-button cancel" v-on:click="cancel()">
                Cancel
                </button>
                <button class="modal-default-button" v-on:click="validate(calledBy)">
                Confirm
                </button>   
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

<div v-if="language == 'french'">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Merci!
            </slot>
          </div>

          <div class="modal-body">
            <div>
              <slot name="body">
                Veuillez confirmer ci-dessous.
              </slot>
            </div>
            <br>
            <div>
              <label>Mon nom est: </label>
              <input type="text" v-model="calledBy" placeholder="Mon nom"/>
            </div>
            <br>
            <div class="modal-button-area">
              <button class="modal-default-button cancel" v-on:click="cancel()">
              Annuler
              </button>
              <button class="modal-default-button" v-on:click="validate(calledBy)">
              Confirmer
              </button>   
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    id : Number,
    language: String,
  },
  methods: {
    validate(name) {
      this.$emit('validate', name);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
}
</script>
<style lang="css" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .05);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: 'Avenir', sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-button-area {
    align-items: baseline;
  }

  .modal-default-button {
    background-color: rgb(135, 181, 105, 0.8);
    margin: 2vh 2vh;
    padding: 2vh 3vh;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .modal-default-button.cancel {      
    background-color: rgb(120, 120, 120, 0.8); 
  }

  .modal-default-button:hover {
    background-color: darkgreen;
  }


  input[type="text"] {
    border: solid 1px silver;
    border-radius: 3px;
    line-height: 2;
    padding: 1px 5px;
    min-width: 100px;
    font-size: 14px;
    margin: 0px 5px;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
