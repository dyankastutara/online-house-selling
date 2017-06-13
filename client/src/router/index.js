import Vue from 'vue'
import Router from 'vue-router'
import ListHouses from '@/components/ListHouses'
import AddHouses from '@/components/AddHouses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListHouses',
      component: ListHouses
    },
    {
      path: '/add-house',
      name: 'AddHouses',
      component: AddHouses
    }
  ]
})
