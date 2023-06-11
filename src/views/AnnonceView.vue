<template>
  <nav>
    <NavBar></NavBar>
  </nav>
        <div class="titreAnnonce">
                <span>Les Annonces de Marcel</span>
                <button class="btn fill" @click="afficherFormulairePostAnnonce">+ Poster une annonce</button>
          </div>
          
            <div v-if="afficherFormulaire" class="leFormulaire">
        <!-- <h2>Inscription</h2> 
        <form class="formulaireInscription" @submit="register" action=""> -->
            <div class="formulaireInscription">
            <div class="form-group-1">
              <label for="titre">Titre de l'annonce :</label>
              <input type="text" id="titre" v-model="registerForm.titre" required>
            </div>

            <div class="form-group">
              <label for="prix">Prix de la location :</label>
              <input type="int" id="prix" v-model="registerForm.prix" required>
            </div>

            <div class="form-group">
              <label for="date">date de la location :</label>
              <input type="date" id="date" v-model="registerForm.date" required>
            </div>
            <div class="form-group">
              <label for="id_bateau">Bateau numéro :</label>
              <input type="int" id="id_bateau" v-model="registerForm.id_bateau" required>
            </div>

  

            <!-- <div class="form-group">
              <label for="id_user">propriétaire : {{ myStore.infosUser.pseudo }}</label>
              <input type="int" id="id_user" v-model="registerForm.id" required>
            </div> -->

            <button class="submit-button" @click="envoiFormulaire">Poster l'annonce</button>
          </div>
        </div>
    

          <!-- <div v-if="afficherFormulaire"> -->
      <!-- <h2>Connexion</h2> -->
      <!-- <form class="formulaireConnexion" @submit="login"> -->
            <!-- <div class="leFormulaire"> -->
              <!-- <FormulairePostAnnonce></FormulairePostAnnonce> -->
            <!-- </div> -->
      <!-- </form> -->
          <!-- </div> -->
    <!-- <UneAnnonce></UneAnnonce> -->
    <AnnonceBateau></AnnonceBateau>

  </template>
  
  <script>

import axios from "axios";
import router from '@/router';
import {store} from "../router/store.js";
  
  import AnnonceBateau from '@/components/AnnonceBateau.vue';
import NavBar from "@/components/NavBar.vue";
  // import UneAnnonce from '@/components/UneAnnonce.vue'
  // import FormulairePostAnnonce from '@/components/FormulairePostAnnonce.vue'
  
  export default {
    data() {
    return {
      afficherFormulaire: false,
      registerForm: {
        titre: '',
        prix: '',
        date: '',
        // id_vendeur: '1',
        id_loueur: '',
        id_bateau: '',
        

        
      },
      myStore : store,
      // Vos autres données
    };
  },
    name: 'AnnonceView',
    components: {
    // UneAnnonce,
    AnnonceBateau,
    NavBar
},
    methods:{
      afficherFormulairePostAnnonce() {
      this.afficherFormulaire = true;
    },
    envoiFormulaire: function() {
        var infos = this;
        var id_utilisateur = this.myStore.infosUser.id_utilisateur ;
        let params = new URLSearchParams(this.registerForm);
        params.append("id_utilisateur", id_utilisateur);  
        // params.append("nom",this.registerForm.nom);
        axios.post("http://localhost/projet_php_vue/ajoutAnnonce.php",params
        )
          .then(function(response) {
            
            infos.formulaire = response.data;  
            console.log(infos.formulaire);

             router.push('Accueil');
          })
          
          .catch(error => {
            console.error(error);
          });
      },
    }
  }
  
  
  </script>
  <style scoped>
    .titreAnnonce{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: 20px;
    }
    .row{
        display: flex;
        flex-direction: column;
    }
    .btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;  
  cursor: pointer;
}
.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255,255,255,0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease; 
}
.fill:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
  transition: all .3s ease;    
}

.titreAnnonce{
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.titreAnnonce span{
  margin-right: 5%;
  background-color: grey;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;
}
.afficherFormulaire{
  margin-top: 1%;
  background-color: grey;
  width: 50%;
  position: absolute;
  right: 25%;
  border-radius: 10px;
}
.leFormulaire{
  margin-top: 1%;
  color: white;
  background-color: grey;
  width: 50%;
  height: 60%;
  position: absolute;
  right: 25%;
  border-radius: 10px;
  z-index: 10;
}
.form-group-1{
  margin-top: 15%;
}
/* .formulaireInscription{
  background-color: grey;
  border-radius: 20px;
  width: 60%;
  margin-bottom: 2%;
}
.leFormulaire{
  display: flex;
  justify-content: center;
} */

</style>