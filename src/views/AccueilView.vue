<template>
    <nav>
      <NavBar></NavBar>
    </nav>
    <PageAccueil></PageAccueil>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import PageAccueil from '@/components/PageAccueil.vue';

export default {
    name: 'AccueilVue',
    components: {
    PageAccueil,
    NavBar
}
  }

</script>