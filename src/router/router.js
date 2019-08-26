import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/Main'
import Slots from '@/views/slots/Slots'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      meta: {
        title: 'Главная страница'
      },
      path: '/',
      components: {
        default: Main
      }
    },
    {
      meta: {
        title: 'Слоты'
      },
      path: '/slots',
      components: {
        default: Slots
      }
    }
  ]
})
