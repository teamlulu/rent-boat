<template>
  <nav>
    <NavBar></NavBar>
  </nav>
    <ListeLocation></ListeLocation>
    
   
   
  </template>
  
  <script>
  

import ListeLocation from '@/components/ListeLocation.vue'
import NavBar from '@/components/NavBar.vue';

  
  export default {
    name: 'LocationView',
    components: {
    ListeLocation,
    NavBar
}
  }
  
  
  </script>