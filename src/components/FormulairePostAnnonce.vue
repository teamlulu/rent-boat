<template>
    <div>
      <h2>Mise en Location</h2>
      <form @submit="postAnnonce" class="formPostAnnonce">
        <div class="form-group">
        <label for="text">Titre de l'annonce :</label>
        <input type="text" id="titre" v-model="loginForm.titre" required>
        </div>

        <div class="form-group">
        <label for="int">Prix de la location:</label>
        <input type="int" id="prix" v-model="loginForm.prix" required>
        </div>

        <div class="form-group">
        <label for="date">Date de la location:</label>
        <input type="date" id="date_location" v-model="loginForm.date_location" required>
        </div>

        <div class="form-group">
        <label for="id_bateau"> bateau en location</label>
        <select name="nom_bateau" id="bateau_select" v-model="loginForm.id_bateau" required>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>
        </div>

        
        <button type="submit" class="bouton">mettre en location</button>
      </form>
      
      <!-- <h2>Inscription</h2>
      <form @submit="register">
        <label for="name">Nom:</label>
        <input type="text" id="name" v-model="registerForm.name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="registerForm.email" required>
        
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="registerForm.password" required>
        
        <button type="submit">S'inscrire</button>
      </form> -->
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
    name : "FormulairePostAnnonce",
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
  
</style>
  