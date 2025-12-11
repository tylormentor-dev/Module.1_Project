import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Payroll from '../views/Payroll.vue'
import Payslip from '../views/Payslip.vue'
import Timeoff from '@/views/Timeoff.vue'
import Attendance from '@/views/Attendance.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
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
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance,
    },
    {
      path: '/timeoff',
      name: 'timeoff',
      component: Timeoff,
    },
  ],
})


export default router

