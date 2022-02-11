<template>
  <div v-bind:class="[visitor.photo ? 'margin-container' : 'card-container']">
    <div class="card">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="Taylor Farms">
      </div>
      <div class="card-title">
        <h1>NAME/PHOTO</h1>
      </div>
      <div class="input-group">
        <input type="text" v-model="visitor.first_name" placeholder="FIRST NAME">
        <input type="text" v-model="visitor.last_name" placeholder="LAST NAME">
      </div>
      <div class="next">
        <div v-if="!visitor.photo" class="image-upload">
          <label for="file-input">
            <img src="../assets/images/take_photo.png">
          </label>

          <input type="file" @change="onFileChange" id="file-input" accept="image/*;capture=camera">
          <p>CLICK TO TAKE PHOTO</p>
        </div>

        <div v-else id="rmPic">
          <img :src="visitor.photo" class="user-img" />
          <div class="remove-button" v-on:click="removeImage">Remove Photo</div>

          <div class="next">
            <img src="../assets/images/next_button.png" v-on:click="next">
            <p>NEXT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        visitor: {
          'first_name': '',
          'last_name': '',
          'photo': ''
        }
      }
    },
    methods:{
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        let reader = new FileReader();
        let vm = this;

        reader.onload = (e) => {
          vm.visitor.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeImage: function () {
        this.visitor.photo = '';
      },
      next: function () {
        localStorage.setItem('visitor', JSON.stringify(this.visitor))
        this.$router.push('questionnaire');
      }
    },
    beforeMount() {
      if (localStorage.getItem('visitor')){
        this.visitor = JSON.parse(localStorage.getItem('visitor'))
      }
    }
  }
</script>
