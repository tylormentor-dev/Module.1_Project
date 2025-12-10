import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Payroll from '../views/Payroll.vue'
import Payslip from '../views/Payslip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/payroll',
      name: 'payroll',
      component: Payroll,
    },
    { 
      path: "/payslip", 
      name: "payslip", 
      component: Payslip,
    },
  ],
})


export default router
