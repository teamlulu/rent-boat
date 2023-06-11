import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ExportView from '../views/ExportView.vue'
import AnnonceView from '../views/AnnonceView.vue'
import LocationView from '../views/LocationView.vue'
import ProfilView from '../views/ProfilView.vue'
import AccueilView from '../views/AccueilView.vue'

const routes = [
   {
     path: '/',
     name: 'HomeView',
     component: HomeView
   },
   {
    path: '/Accueil',
    name: 'AccueilView',
    component: AccueilView
  },
  
  {
    path: '/annonceBateau',
    name: 'AnnonceView',
    component: AnnonceView
  },

  {
    path: '/annonce',
    name: 'annonce',
    component: AnnonceView
  },
  {
    path: '/mesLocations',
    name: 'LocationView',
    component: LocationView
  },
  {
    path: '/profil',
    name: 'ProfilView',
    component: ProfilView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
