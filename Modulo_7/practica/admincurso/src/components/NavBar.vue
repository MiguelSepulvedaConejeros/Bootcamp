<template>
    <v-app-bar color="#6200EA">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <span v-bind="props"><v-app-bar-nav-icon></v-app-bar-nav-icon></span>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
      <router-link to="/"><v-icon color="white" type="button" class="mr-5">mdi-home</v-icon></router-link>
      <router-link to="/adminview"><v-icon color="white" type="button" class="mr-5">mdi-wrench</v-icon></router-link>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        items: [
          { title: 'uno'},
          { title: 'dos'},
          { title: 'tres'},
          { title: 'cuatro'},
        ],
      }
    }
  }
</script>

<style scoped>
</style>