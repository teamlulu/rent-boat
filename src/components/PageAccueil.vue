//PAGE D'ACCUEIL

<template>
    <body>
        
    
   <div class="row">
        <div class="titreBienvenue">
            <p>BIENVENUE SUR RENT&BOAT {{ myStore.infosUser.pseudo }}</p>
        </div>
        <div class="speach">
            <div class="image">
                <img src="../assets/bateau2.jpg">
            </div>
            <div class="image">
                <img src="../assets/bateau_accueil.jpg">    
            </div>
        </div>
        <div class="textePresentation">
            <p>louer des bateaux ou mettez les vôtres en location</p>
        </div>
    </div>
</body>
</template>
<script>
import {store} from "../router/store.js";
    
    export default{
        
    name:'PageAccueil',
    data(){
        return{
            myStore : store
        }
    },
}
</script>
<style scoped>
    .row{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1%;
    }
    .titreBienvenue p{
        font-size: 70px;
        color: white;
        display: flex;
        justify-content: center;
        background-color: grey;
        border-radius: 50px;

    }
    .speach{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-items: center;
        justify-content: center;
    }
    .speach .image{
        margin: 10%;
    }
    .textePresentation{
        display: flex;
        background-color: grey;
        width: 40%;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        border-radius: 20px;
    }

</style>


