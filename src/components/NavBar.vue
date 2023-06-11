//NAVBAR
<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <span class="navbar-brand">RENT&BOAT</span>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Connexion</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/accueil">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/annonceBateau">Annonce</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/mesLocations">Mes locations</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profil">Profil</router-link>
                    </li>
                    
                    
                </ul>
            </div>
        </nav>
</template>
<script>
    export default{
        name: 'NavBar'
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: grey;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: grey;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
