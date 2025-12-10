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