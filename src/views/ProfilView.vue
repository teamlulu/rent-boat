<template>
  <nav>
    <NavBar></NavBar>
  </nav>
    <UnProfil></UnProfil>
    <div class="titreAnnonce">
                <span>VOS BATEAUX</span>
                <button class="btn fill" @click="afficherFormulaireAjoutBateau">+ Ajouter un bateau</button>
          </div>
    
            <div v-if="afficherFormulaire" class="leFormulaire">
            <div class="formulaireInscription">
            <div class="form-group-1">
              <label for="nom">Nom du bateau :</label>
              <input type="text" id="nom" v-model="registerForm.nom" required>
            </div>
            <div class="form-group">
              <label for="immatriculation">Immatriculation du bateau :</label>
              <input type="text" id="immatriculation" v-model="registerForm.immatriculation" required>
            </div>
            <div class="form-group">
              <label for="annee">Année du bateau :</label>
              <input type="int" id="annee" v-model="registerForm.annee" required>
            </div>
            <div class="form-group">
              <label for="categorie">Catégorie du bateau :</label>
              <input type="text" id="categorie" v-model="registerForm.categorie" required>
            </div>

            <div class="form-group">
              <label for="place">Nombre de place :</label>
              <input type="int" id="place" v-model="registerForm.place" required>
            </div>

            <!-- <div class="form-group">
              <label for="id_user">propriétaire : {{ myStore.infosUser.pseudo }}</label>
              <input type="int" id="id_user" v-model="registerForm.id" required>
            </div> -->

            <button class="submit-button" @click="envoiFormulaire">Ajouter le bateau</button>
          </div>
        </div>
    
    <BateauUser></BateauUser>
   
   
  </template>
  
  <script>
  
import UnProfil from '@/components/UnProfil.vue';
import BateauUser from '@/components/BateauUser.vue';
import NavBar from '@/components/NavBar.vue';
import axios from "axios";
import router from '@/router';
import {store} from "../router/store.js";
  
export default {
    name: 'ProfilView',
    data(){
    return {
      afficherFormulaire: false,
      registerForm: {
        nom: '',
        immatriculation: '',
        annee: '',
        categorie: '',
        place: '',
        // id_vendeur: '1',
        // id_loueur: '',
      },

      myStore : store,
    };
  },
      // Vos autres données
    components: {
    UnProfil,
    BateauUser,
    NavBar
    },
    methods:{
      afficherFormulaireAjoutBateau() {
      this.afficherFormulaire = true;
    },
    envoiFormulaire: function() {
        var infos = this;
        var id_utilisateur = this.myStore.infosUser.id_utilisateur ;
        let params = new URLSearchParams(this.registerForm);
        params.append("id_utilisateur", id_utilisateur);  
        // params.append("nom",this.registerForm.nom);
        axios.post("http://localhost/projet_php_vue/ajoutBateau.php",params
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
margin-top: 5%;
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