<template>
    <div class="row">
        <div class="titreBienvenue">
            <p>Bienvenue sur RENT&BOAT {{ infosUser.pseudo }}</p>
        </div>
            
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'ConnexionReussi',
  data() {
    return {
      infosUser: []  // Tableau vide pour stocker les données des cartes
    };
  },
  mounted(){
    this.loaddata(); // Appel de la fonction loaddata lorsque le composant est monté
  },
  methods: {
    loaddata: function() {
      var comp = this;
      axios.get("http://localhost/projet_php_vue/connexion.php")
        .then(function(response) {
          
          comp.infosUser = response.data;  // Affecter les données à la propriété 'infosUser'
          console.log(comp.infosUser);
        })
        
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
