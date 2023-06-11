<template>
    <div>
      <!-- <h2>Connexion</h2>
      <form @submit="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="loginForm.email" required>
        
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="loginForm.password" required>
        
        <button type="submit">Se connecter</button>
      </form> -->
      
      <h2>Inscription</h2>
      <form @submit="register">
        <label for="name">Nom:</label>
        <input type="text" id="name" v-model="registerForm.name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="registerForm.email" required>
        
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="registerForm.password" required>
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // loginForm: {
        //   email: '',
        //   password: ''
        // },
        registerForm: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
    //   login(event) {
    //     event.preventDefault();
    //     // Effectuer la logique de connexion ici
    //     console.log('Connexion');
    //     console.log(this.loginForm);
        
    //     // Réinitialiser le formulaire
    //     this.loginForm.email = '';
    //     this.loginForm.password = '';
    //   },
      register(event) {
        event.preventDefault();
        // Effectuer la logique d'inscription ici
        console.log('Inscription');
        console.log(this.registerForm);
        
        // Réinitialiser le formulaire
        this.registerForm.name = '';
        this.registerForm.email = '';
        this.registerForm.password = '';
      }
    }
  }
  </script>
  