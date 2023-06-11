//PAGE PROFIL 
<template>

    <div class="titreBienvenue">
        <p>Bienvenue sur votre profil</p>
    </div>
    <div class="row">
         <form action="">
            <span>Votre nom : {{ myStore.infosUser.nom }}</span>
            <span>Votre prénom : {{ myStore.infosUser.prenom }}</span>
            <span>Votre Ville : {{ myStore.infosUser.ville }}</span>
            <span>Votre pseudo : {{ myStore.infosUser.pseudo }}</span>
         </form>
        </div>
    
 </template>
   <script>
   import {store} from "../router/store.js";
   
   export default {
     name: 'AnnonceBateau',
     data() {
       return {
         myStore : store
       };
     },
   }
   </script>
 <style scoped>
     .row{
         display: flex;
         flex-direction: column;
         justify-content: center;
         margin-top: 1%;
         color: white;
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