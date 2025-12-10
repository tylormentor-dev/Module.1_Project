import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/components/Employees.vue'

createApp(App).use(router).mount('#app')