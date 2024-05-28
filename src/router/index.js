// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import StatisticsPage from '../pages/StatisticsPage.vue'

const routerOptions = {
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'details',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:id?',
      name: 'edit',
      component: ContactEdit
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatisticsPage
    },
  ]
}

const router = createRouter(routerOptions)

export default router
