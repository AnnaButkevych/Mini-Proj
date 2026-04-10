import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import EventDetails from '../views/EventDetails.vue'
import RegistrationView from '../views/RegistrationView.vue'

const routes = [
  { path: '/', name: 'Events', component: EventsView },
  { path: '/events/:id', name: 'EventDetails', component: EventDetails, props: true },
  { path: '/register/:id', name: 'Register', component: RegistrationView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
