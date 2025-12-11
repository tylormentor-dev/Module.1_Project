<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";

import EmployeeDetails from "../views/EmployeeDetails.vue";
import Employeelist from "../views/Employeelist.vue";
import Employees from "../components/Employees.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Employees,
  },
  
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  },

  {
    path: "/about",
    name: "EmployeeDetails",
    component: () => import("../views/EmployeeDetails.vue"),
  },

  {
    path: "/list",
    name: "Employeelist",
    component: Employeelist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
=======
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
>>>>>>> 87f8e6c1d6b9a810d969da743b166e5b6072a061
