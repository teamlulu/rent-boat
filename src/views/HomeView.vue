<template>
  <div>
    <div class="lesBoutons">
      <button class="boutonConnexion" @click="afficherFormulaireConnexion">CONNEXION</button>
      <button class="boutonInscription" @click="afficherFormulaireInscription">INSCRIPTION</button>
    </div>

    <div v-if="afficherFormulaire1">
      <!-- <h2>Connexion</h2> -->
      <!-- <form class="formulaireConnexion" @submit="login"> -->
        <div class="formulaireConnexion">
        <div class="form-group-1">
          <label for="pseudo">Pseudo:</label>
          <input type="text" id="pseudo" v-model="registerForm.pseudo" required>
        </div>

        <div class="form-group">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="registerForm.password" required>
        </div>

        <button class="submit-button" @click="connexion">Se Connecter</button>
      </div>
      <!-- </form> -->
    </div>

    <div v-if="afficherFormulaire2">
      <!-- <h2>Inscription</h2> 
      <form class="formulaireInscription" @submit="register" action=""> -->
        <div class="formulaireInscription">
        <div class="form-group-1">
          <label for="nom">Nom:</label>
          <input type="text" id="nom" v-model="registerForm.nom" required>
        </div>

        <div class="form-group">
          <label for="prenom">Prénom:</label>
          <input type="text" id="prenom" v-model="registerForm.prenom" required>
        </div>

        <div class="form-group">
          <label for="ville">Ville:</label>
          <input type="text" id="ville" v-model="registerForm.ville" required>
        </div>

        <div class="form-group">
          <label for="dateNaissance">Date de naissance:</label>
          <input type="date" id="dateNaissance" v-model="registerForm.dateNaissance" required>
        </div>

        <div class="form-group">
          <label for="pseudo">Pseudo:</label>
          <input type="text" id="pseudo" v-model="registerForm.pseudo" required>
        </div>

        <div class="form-group">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="registerForm.password" required>
        </div>

        <button class="submit-button" @click="envoiFormulaire">S'inscrire</button>
      </div>
      <!---</form>-->
    </div>

    <!-- Le reste de votre code -->
  </div>
</template>

<script>
import axios from "axios";
import router from '@/router';
import {store} from "../router/store.js";



export default {

  
  data() {
    return {
      afficherFormulaire1: false,
      afficherFormulaire2: false,
      registerForm: {
        nom: '',
        prenom: '',
        ville: '',
        dateNaissance: '',
        pseudo: '',
        password: '',
      },

      infosUser: [] , // Tableau vide pour stocker les données des cartes

      theStore: store,
      // Vos autres données
    };
  },
  methods: {
    afficherFormulaireConnexion() {
      this.afficherFormulaire1 = true;
      this.afficherFormulaire2 = false;
    },
    afficherFormulaireInscription() {
      this.afficherFormulaire1 = false;
      this.afficherFormulaire2 = true;
    },
    envoiFormulaire: function() {
        var infos = this;
        let params = new URLSearchParams(this.registerForm);
        // params.append("nom",this.registerForm.nom);
        axios.post("http://localhost/projet_php_vue/inscription.php",params
        )
          .then(function(response) {
            
            infos.formulaire = response.data;  
            console.log(infos.formulaire);
            // console.log(store)

            infos.afficherFormulaireConnexion();

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

    

    async connexion(){
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
  }

</script>
<style>
body {
  background-image: url(../assets/image_bateau.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 100%;
  margin-bottom: 0px;
  position: static;
  background-attachment: fixed;
}
</style>

<style scoped>

.formulaireInscription{
  margin-top: 1%;
  background-color: grey;
  width: 50%;
  position: absolute;
  right: 25%;
  border-radius: 10px;
  color: white;
}
.formulaireConnexion{
  margin-top: 1%;
  background-color: grey;
  width: 50%;
  position: absolute;
  right: 25%;
  border-radius: 10px;
  color: white;
}
.lesBoutons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.boutonConnexion,
.boutonInscription {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background-color: grey;
  color: #fff;
  margin: 0 8px;
  transition: background-color 0.3s ease;
}

.boutonConnexion:hover,
.boutonInscription:hover {
  background-color: #207ab1;
}
.form-group-1{
  margin-top: 2%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
/* Styles CSS pour le formulaire d'inscription */
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"],
input[type="password"] {
  width: 40%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background-color: grey;
  color: #fff;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #175e89;
}
</style>
