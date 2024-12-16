<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <div id="container-heroes">
          <h2>Desafia las expectativas de los MOBA</h2>
          <p>Epicos heroes y accion sin cesar en multiles campos de batalla</p>
          <v-btn id="btn-ver" color="#FF6D00">VER HEROES</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div id="container-description">
          <v-alert color="#4527A0" style="color:white">
            ¡Te damos la bienvenida al Nexo!¡En este reino entre reinos, todo es posible¡Elige entre decenas de heroes legendarios de todo el panteon de Blizzard, personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el genero.¡Esto no es un MOBA promedio, esto es Heroes of the Storm!
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'HomeView',

    components: {

    },
  }
</script>

<style scoped>
#container-heroes{
  width:48%;
  color:white;
  border: 3px solid gray;
  padding:10px;
  margin-top:60px;
}
#btn-ver{
  display: flex;
  justify-self: center;
}
#container-description{
  color:white;
}
</style>