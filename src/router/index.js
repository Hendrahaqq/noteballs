import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '../views/ViewNotes.vue'
import ViewStats from '../views/ViewStats.vue'
import ViewEditNotes from '../views/ViewEditNotes.vue'
const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/edit/:id',
    name: 'edit-notes',
    component: ViewEditNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
