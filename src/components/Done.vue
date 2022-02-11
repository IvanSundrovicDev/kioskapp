<template>
  <div class="card-container">
    <div class="card">
      <div class="done">
        <img class="logo" src="../assets/images/logo.png">
        <h1>OKAY, YOU'RE DONE!</h1>
        <img class="thank-you" src="../assets/images/thank_you.png">

        <div class="next mt-20">
          <img src="../assets/images/next_button.png" v-on:click="next">
          <p>Start Over</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        payload: {
          language: '',
          visitor: '',
          questionnaire: ''
        }
      }
    },
    methods: {
      next(){
        localStorage.clear()
        this.$router.push('/');
      },
      preparePayload() {
        this.payload.language = localStorage.getItem('language')
        this.payload.visitor = localStorage.getItem('visitor')
        this.payload.questionnaire = localStorage.getItem('answers')
      },
      sendPayload() {
        // TODO: API call to send data
      }
    },
    mounted() {
      this.preparePayload()
      setTimeout(this.next, 15000)
    }
  }
</script>