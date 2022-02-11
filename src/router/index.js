import Vue from 'vue'
import VueRouter from 'vue-router'
import LanguageSelect from "../components/LanguageSelect";
import VisitorInfo from "../components/VisitorInfo";
import Questions from "../components/Questions";
import Done from "../components/Done";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'langSelect',
    component: LanguageSelect
  },
    {
      path: '/visitor',
      name: 'visitor',
      component: VisitorInfo
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questions
    },
    {
      path: '/done',
      name: 'done',
      component: Done
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
