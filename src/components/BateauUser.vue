<template>

    <div class="container">
        <div class="card" v-for="card in cards" :key="card.id_bateau">
            <div class="wrapper">
                <div class="banner-image"> </div>
                <h1> {{ card.nom }}</h1>
                <div class="infosBateau">
                    <p>Catégorie : {{ card.categorie }}</p>
                    <p>Année : {{ card.annee }}</p>
                    <p>Propriétaire : {{ card.proprietaire }}</p>
                    <p>Nombre de place : {{ card.nb_places }}</p>
                    <p>Numéro du bateau : {{ card.id_bateau }}</p>
                </div>
            </div>
            <div class="button-wrapper"> 
                <!-- <button class="btn outline">DETAILS</button> -->
                <button class="btn fill">MODIFIER</button>
                <button class="btn supp">SUPPRIMER</button>
            </div>
        </div>
    </div>
</template>
<script>
   import axios from "axios";
   import {store} from "../router/store.js";

export default {
    name: 'BateauUser',
    data() {
      return {
        cards: [],  // Tableau vide pour stocker les données des cartes
        myStore : store
      };
    },
    mounted(){
      this.envoiid(); // Appel de la fonction loaddata lorsque le composant est monté
    },
    methods: {
     envoiid: function() {
       // var infos = this.myStore;
       var comp = this;
       var id_utilisateur = this.myStore.infosUser.id_utilisateur ;
       let params = new URLSearchParams();
       params.append("id_utilisateur", id_utilisateur);  
       axios.post("http://localhost/projet_php_vue/bateau.php",params
       )
          .then(function(response) {
               
               comp.cards = response.data;  
               console.log(comp.cards);
              //  console.log("coucou");

           //  router.push('Accueil');
         })
         
         .catch(error => {
           console.error(error);
         });
     }
    },
    }
  </script>
<style scoped>
    .row{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 1%;
    }
    form{
       position: relative;
       left: 20%;
       width: 60%;
       background-color: grey;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       margin-bottom: 2%;
    }
    
.card{
   backdrop-filter: blur(16px) saturate(180%);
 -webkit-backdrop-filter: blur(16px) saturate(180%);
 background-color: rgba(17, 25, 40, 0.25);
 border-radius: 12px;
 border: 1px solid rgba(255, 255, 255, 0.125);  
 padding: 35px;  
 filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;
 text-align: center;
 margin-right: 3%;
 margin-bottom: 1%;
 margin-block-start: 0%;
 width: 30%;
}

.container {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
 
}

.wrapper {
 width: 100%;
 height: 100%;
 
}

.banner-image {
 background-image: url(../assets/beau_bateau.jpg);
 background-position: center;
 background-size: cover;
 height: 300px;
 width: 100%;
 border-radius: 12px;
 border: 1px solid rgba(255,255,255, 0.255)
}

h1{
 font-family: 'Righteous', sans-serif;
 color: rgba(255,255,255,0.98);
 text-transform: uppercase;
 font-size: 2.4rem;
}

/* p {
 color: #fff;
 font-family: 'Lato', sans-serif;
 text-align: center;
 font-size: 0.8rem;
 line-height: 150%;
 letter-spacing: 2px;
 text-transform: uppercase;
} */

.button-wrapper{
 margin-top: 18px;
 display: flex;
 flex-direction: row;
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

.btn + .btn {
 margin-left: 10px;
}

.outline {
 background: transparent;
 color: rgba(0, 212, 255, 0.9);
 border: 1px solid rgba(0, 212, 255, 0.6);
 transition: all .3s ease;
 
}

.outline:hover{
 transform: scale(1.125);
 color: rgba(255, 255, 255, 0.9);
 border-color: rgba(255, 255, 255, 0.9);
 transition: all .3s ease;  
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

.supp {
 background: rgba(255, 0, 0, 0.9);
 color: rgba(255,255,255,0.95);
 filter: drop-shadow(0);
 font-weight: bold;
 transition: all .3s ease; 
}

.supp:hover{
 transform: scale(1.125);  
 border-color: rgba(255, 255, 255, 0.9);
 filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
 transition: all .3s ease;    
}
.infosBateau{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   color: white;
   
}
.mesBateaux{
   color: white;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}
.mesBateaux span{
 margin-right: 5%;
 background-color: grey;
 border: none;
 padding: 12px 24px;
 border-radius: 24px;
 font-size: 12px;
 font-size: 0.8rem;  
 letter-spacing: 2px;
}
</style>