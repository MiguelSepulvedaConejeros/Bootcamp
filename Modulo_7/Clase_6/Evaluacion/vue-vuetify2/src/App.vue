<template>
  <v-app class="background-image" fluid>
    <navBar/>
    <v-main>
      <router-view/>
    </v-main>
    <FooTer/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue';

export default {
  name: 'App',
  components:{
    NavBar,
    FooTer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.background-image{
  background-image: url('https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt1ddae1f967bbd300/65baf21388b8ab550559bfb9/og_image.webp'); /* Cambia esta ruta a la de tu imagen */
  background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center;
  height: 100vh
}
</style>
