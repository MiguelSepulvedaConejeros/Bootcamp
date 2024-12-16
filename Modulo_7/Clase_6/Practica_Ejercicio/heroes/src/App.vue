<template>
  <v-app>
    <v-app-bar app color="blue darken-4" dark>
      <v-btn icon @click="$router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title>Heroes of the Storm</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-3" @click="$router.push('/heroes')">Ver Héroes</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer app color="blue darken-4">
      <span class="white--text">&copy; Bienvenido a vuetify 2024</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style >

</style>
