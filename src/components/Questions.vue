<template>
  <div class="margin-container">
    <div class="card">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="Taylor Farms">
      </div>
      <div class="card-title">
        <h1>SYMPTOMS/QUESTIONS</h1>
      </div>
      <div class="question" v-for="(question, index) in questions" :key="question.id">
        <h1>{{ question.question }}</h1>
        <div class="flex flex-wrap mb-4 mx-2">
          <div class="w-1/2 h-auto my-5"  v-if="question.type === 'true/false'">
            <div class="ck-button">
              <label>
                <input type="radio" v-model="answers[index].answer" :value="question.answers[1]" :key="question.answers[1]"/> <span>{{ question.answers[1] }} </span>
              </label>
            </div>
          </div>
          <div class="w-1/2 h-auto my-5"  v-if="question.type === 'true/false'">
            <div class="ck-button">
              <label>
                <input type="radio" v-model="answers[index].answer" :value="question.answers[2]" :key="question.answers[2]"/> <span>{{ question.answers[2] }}</span>
              </label>
            </div>
          </div>
          <div class="w-1/2 h-auto my-5"  v-else v-for="answer in question.answers" :key="answer">
            <div>
              <div class="ck-button">
                <label>
                  <input type="checkbox" v-model="answers[index].answer" :value="answer" :key="answer"/> <span>{{ answer }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next">
        <img src="../assets/images/next_button.png" v-on:click="next">
        <p>NEXT</p>
      </div>
    </div>
  </div>
</template>

<script>
  import questionsJson from '../assets/questions.json'

  export default {
    data(){
      return{
          questions: questionsJson.questions,
          answers:{}
        }
    },
    methods:{
      next(){
        localStorage.setItem('answers', JSON.stringify(this.answers))
        this.$router.push('done');
      },
      getQuestions() {
        // TODO: API call to get questions
      }
    },
    beforeMount(){
      if (localStorage.getItem('answers')) {
        this.answers = localStorage.getItem('answers');
      }
      else {
        let answers = []
        let index = 0
        for(const item in this.questions){
          if (this.questions[item].type === 'true/false') {
            answers[index] = {id: this.questions[item].id, answer:""}
            index++
          }
          else{
            answers[index] = {id: this.questions[item].id, answer:[]}
            index++
          }
        }
        this.answers = answers        
      }
    }
  }
</script>
