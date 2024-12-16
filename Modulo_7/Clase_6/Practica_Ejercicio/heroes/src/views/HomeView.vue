<template>
    <v-app id="app-container">
      <!-- Barra de navegación -->
      
   
      <!-- Contenido principal -->

        <div class="home-background" fluid>
          <v-container class="text-center d-flex flex-column justify-center align-center ">
            <h1 class="display-2 white--text font-weight-bold mb-4">Desafía las expectativas de los MOBA</h1>
            <p class="white--text subtitle-1 mb-5">
              Épicos héroes y acción sin cesar en múltiples campos de batalla
            </p>
            <v-btn large color="orange darken-3" @click="$router.push('/Heroes')">Ver Héroes</v-btn>
          </v-container>
        </div>

   
      <!-- Pie de página -->
    
    </v-app>
  </template>
   
  <script>
  export default {
    name: "HomeView",
  };
  </script >
   
  <style scoped>
  html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Esto evitará el scroll */
}
.home-background {
    background: url('https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt1ddae1f967bbd300/65baf21388b8ab550559bfb9/og_image.webp') no-repeat center center fixed;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.white--text {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}
  </style>