<template>
    <div class="titre">
        <h1><p>Vos Locations</p></h1>
    </div>
    <div class="container">
      <div class="card" v-for="card in cards" :key="card.id_annonce">
        <div class="wrapper">
          <div class="banner-image"></div>
          <h1>Titre : {{ card.titre }}</h1>
          <p>Prix : {{ card.prix }} €</p>
          <p>Date location : {{ card.date }}</p>
        </div>
        <!-- <div class="button-wrapper"> 
          <button class="btn outline">DETAILS</button>
          <button class="btn fill">LOUER</button>
        </div> -->
      </div>
      <!-- <div class="card">
        <div class="wrapper">
          <div class="banner-image"></div>
          <h1>Toyota Supra</h1>
          <p>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</p>
        </div>
        <div class="button-wrapper"> 
           <button class="btn outline">DETAILS</button>
          <button class="btn fill">LOUER</button>
          <input type="button" @click="loaddata" value="bouton">
        </div>
      </div> -->
    </div>
  </template>
  
  <script>
  import axios from "axios";
  // import router from '@/router';
  import {store} from "../router/store.js";
  
  export default {
    name: 'AnnonceBateau',
    data() {
      return {
        cards: []  ,// Tableau vide pour stocker les données des cartes
        myStore : store
      };
    },
    mounted(){
      this.envoiid();
      // this.loaddata(); // Appel de la fonction loaddata lorsque le composant est monté
    },
    methods: {
      // loaddata: function() {
      //   var comp = this;
      //   axios.get("http://localhost/projet_php_vue/location.php")
      //     .then(function(response) {
            
      //       comp.cards = response.data;  // Affecter les données à la propriété 'cards'
      //       console.log(comp.cards);
      //     })
          
      //     .catch(error => {
      //       console.error(error);
      //     });
      // },
      envoiid: function() {
        // var infos = this.myStore;
        var comp = this;
        var id_utilisateur = this.myStore.infosUser.id_utilisateur ;
        let params = new URLSearchParams();
        params.append("id_utilisateur", id_utilisateur);  
        axios.post("http://localhost/projet_php_vue/location.php",params
        )
           .then(function(response) {
                
                comp.cards = response.data;  
                console.log(comp.cards);

            //  router.push('Accueil');
          })
          
          .catch(error => {
            console.error(error);
          });
      }
    }
    
  }
  </script>
  
  
   <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
  
  body {
    /* solid background */
    background: rgb(0,212,255);
    
    /* gradient background*/
    background: linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(11,3,45,1) 100%);    
    
    /* photo background */
    background-image: url(https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80);
    background-size: cover;
    background-position: center;  
    
    display: flex;
    align-items: center;
    justify-content: center;    
    height: 100vh;  
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
    margin-right: 1%;
    margin-bottom: 1%;
    margin-block-start: 0%;
    width: 350px;
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
  .wrapper h1{
    width: 100%;
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
  
  p {
    color: #fff;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-size: 0.8rem;
    line-height: 150%;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  .button-wrapper{
    margin-top: 18px;
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
  .titre p{
    font-size: 20px;
    color: black;
  }
  </style>