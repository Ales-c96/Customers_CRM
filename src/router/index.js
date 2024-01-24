import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/CustomersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {title: "Panel de clientes"}
    }, 
    {
      path: '/add-new-customer',
      name: 'add-new-customer',
      component: () => import('../views/NewCustomerView.vue'),
      props: {title: "Agregar nuevo cliente"}
    },


  ]
})

export default router
