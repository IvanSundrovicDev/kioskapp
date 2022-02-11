<template>
  <div v-on:click="next" class="home-logo">
    <img src="../assets/images/logo.png" alt="Taylor Farms">
  </div>
</template>
<script>
  export default {
    methods:{
      next(){
        this.$emit('next')
      }
    }
  }
</script>
