<template>
<div v-if="afficherFormulaire2">
    <!-- <h2>Inscription</h2> 
    <form class="formulaireInscription" @submit="register" action=""> -->
      <div class="formulaireAjoutBateau">
      <div class="form-group-1">
        <label for="nom">Nom du bateau :</label>
        <input type="text" id="nom" v-model="registerForm.nom" required>
      </div>

      <div class="form-group">
        <label for="immatriculation">immatriculation du bateau :</label>
        <input type="text" id="prenom" v-model="registerForm.immatriculation" required>
      </div>

      <div class="form-group">
        <label for="annee">Année du bateau :</label>
        <input type="text" id="annee" v-model="registerForm.annee" required>
      </div>

      <div class="form-group">
        <label for="categorie">catégorie du bateau</label>
        <select name="nom_bateau" id="bateau_select" v-model="registerForm.categorie" required>
            <option value="A">catégorie A</option>
            <option value="B">catégorie B</option>
            <option value="C">catégorie C</option>
            <option value="D">catégorie D</option>
        </select>
        </div>

      <div class="form-group">
        <label for="nb_place">Nombre de place :</label>
        <input type="int" id="nb_place" v-model="registerForm.nb_place" required>
      </div>

      <button class="submit-button" @click="envoiFormulaire">S'inscrire</button>
    </div>
    <!---</form>-->
  </div>
</template>

<script>
import axios from "axios";
import router from '@/router';
import {store} from "../router/store.js";



export default {
data() {
    return {
      registerForm: {
        nom: '',
        immatriculation: '',
        annee: '',
        categorie: '',
        nb_place: '',
      },

      infosUser: [] , // Tableau vide pour stocker les données des cartes

      theStore: store,
      // Vos autres données
    };
  },
    envoiFormulaire: function() {
        var infos = this;
        let params = new URLSearchParams(this.registerForm);
        // params.append("nom",this.registerForm.nom);
        axios.post("http://localhost/projet_php_vue/ajoutBateau.php",params
        )
          .then(function(response) {
            
            infos.formulaire = response.data;  
            console.log(infos.formulaire);
          })
          
          .catch(error => {
            console.error(error);
          });
      },

    //   loadinfos: function() {
    //   var comp = this;
    //   axios.get("http://localhost/projet_php_vue/connexion.php")
    //     .then(function(response) {
          
    //       comp.infosUser = response.data;  // Affecter les données à la propriété 'cards'
    //       console.log(comp.infosUser);
          
    //       this.theStore.infosUser = this.infosUser;

    //       router.push('Accueil');
    //     })
        
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },

    

    connexion(){
        var infos = this;
        let params = new URLSearchParams(this.registerForm);
        // params.append("nom",this.registerForm.nom);
        axios.post("http://localhost/projet_php_vue/connexion.php",params
        
        )
          .then(function(response) {
            
            infos.infosUser = response.data;  
            console.log(infos.infosUser);

            infos.theStore.infosUser = infos.infosUser;

            router.push('Accueil');
          })
          
          .catch(error => {
            console.error(error);
          });
    }

    // register(event) {
    //   event.preventDefault();
    //   // Effectuer la logique d'inscription ici
    //   // console.log('Inscription');
    //   // console.log(this.registerForm);
      
    //   // Réinitialiser le formulaire
    //   this.registerForm.nom = '';
    //   this.registerForm.prenom = '';
    //   this.registerForm.ville = '';
    //   this.registerForm.dateNaissance = '';
    //   this.registerForm.pseudo = '';
    //   this.registerForm.password = '';
    // }, 

    }
    // Vos autres méthodes
</script>







<!-- <template>
    <div>
      <h2>Ajouter un bateau</h2>
      <form @submit="postAjout" class="formPostAjout">
        <div class="form-group">
        <label for="text">Nom du bateau :</label>
        <input type="text" id="titre" v-model="loginForm.nom" required>
        </div>

        <div class="form-group">
        <label for="int">immatriculation du bateau :</label>
        <input type="int" id="prix" v-model="loginForm.immatriculation" required>
        </div>

        <div class="form-group">
        <label for="int">année du bateau :</label>
        <input type="int" id="annee_bateau" v-model="loginForm.annee" required>
        </div>

        <div class="form-group">
        <label for="categorie">catégorie du bateau</label>
        <select name="nom_bateau" id="bateau_select" v-model="loginForm.categorie" required>
            <option value="A">catégorie A</option>
            <option value="B">catégorie B</option>
            <option value="C">catégorie C</option>
            <option value="D">catégorie D</option>
        </select>
        </div>

        
        <button type="submit" class="bouton">Ajouter le bateau</button>
      </form>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginForm: {
          email: '',
          password: ''
        },
        // registerForm: {
        //   name: '',
        //   email: '',
        //   password: ''
        // }
      };
    },
    name : "FormulaireAjoutBateau",
    methods: {
      login(event) {
        event.preventDefault();
        // Effectuer la logique de connexion ici
        console.log('Connexion');
        console.log(this.loginForm);
        
        // Réinitialiser le formulaire
        this.loginForm.email = '';
        this.loginForm.password = '';
      },
    //   register(event) {
    //     event.preventDefault();
    //     // Effectuer la logique d'inscription ici
    //     console.log('Inscription');
    //     console.log(this.registerForm);
        
    //     // Réinitialiser le formulaire
    //     this.registerForm.name = '';
    //     this.registerForm.email = '';
    //     this.registerForm.password = '';
    //   }
    }
  }
  </script>
  <style>
  .formPostAnnonce{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bouton{
    margin-bottom: 4%;
    width: 30%;
    border-radius: 20px;
  }
  
</style> -->
  