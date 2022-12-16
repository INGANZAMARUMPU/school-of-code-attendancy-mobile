import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Presence from '../views/Presence.vue'
import FormEmployee from '../views/FormEmployee.vue'

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/presences/:nom', name: 'Presence', component: Presence},
  { path: '/form-employee', name: 'FormEmployee', component: FormEmployee},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router