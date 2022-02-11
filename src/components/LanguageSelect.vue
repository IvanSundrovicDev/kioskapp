<template>
  <div class="card-container">
    <div class="card">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="Taylor Farms">
      </div>
      <div class="card-title">
        <h1>CHOOSE LANGUAGE</h1>
      </div>
      <div class="lang-list text-center">
        <div class="w-1/2 h-auto my-5" style="display: inline-block">
          <div>
            <div class="ck-button">
              <label>
                <input type="radio" v-model="language" value="eng" @change="addToStorage" /> <span>ENGLISH</span>
              </label>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-auto my-5" style="display: inline-block">
          <div>
            <div class="ck-button">
              <label>
                <input type="radio" v-model="language" value="spa" @change="addToStorage" /> <span>SPANISH</span>
              </label>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-auto my-5" style="display: inline-block">
          <div>
            <div class="ck-button">
              <label>
                <input type="radio" v-model="language" value="fra" @change="addToStorage" /> <span>FRENCH</span>
              </label>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-auto my-5" style="display: inline-block">
          <div>
            <div class="ck-button">
              <label>
                <input type="radio" v-model="language" value="jpn" @change="addToStorage" /> <span>JAPANESE</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="next mt-10">
        <img src="../assets/images/next_button.png" v-on:click="next">
        <p>NEXT</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        language: ''
      }
    },
    methods:{
      addToStorage() {
        localStorage.setItem('language', this.language)
      },
      next(){
        this.$router.push('visitor');
      }
    },
    beforeMount() {
      if (localStorage.getItem('language')) {
        this.language = localStorage.getItem('language');
      }
    }
  }
</script>
