<template>
      <h1 class="titulo">Lista de cursos</h1>
      <v-container>
        <v-row>
          <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="400" height="700">
              <v-img height="200" :src="curso.img"></v-img>
              <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">{{ curso.nombre }}</div>

                <v-timeline align="start" density="compact">
                  <v-timeline-item dot-color="purple"  size="small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <p>Costo: {{ curso.costo }}</p>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
                
                <v-timeline align="start" density="compact">
                  <v-timeline-item dot-color="green"  size="small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <p>Costo: {{ curso.cupos }}</p>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>

                <v-timeline align="start" density="compact">
                  <v-timeline-item dot-color="purple"  size="small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <p>Fecha de Registro: {{ curso.fecha_registro }}</p>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>

                <v-timeline align="start" density="compact">
                  <v-timeline-item dot-color="green"  size="small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <p>Descripcion: {{ curso.descripcion }}</p>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        
      </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import {mapState} from 'vuex'


export default defineComponent({
  name: 'HomeView',
  components: {
  },
  computed: {
    ...mapState (['cursos'])
  }
});
</script>

<style scope>
.titulo{
  display: flex;
  justify-content: center;
  font-size: 60px;
  font-weight: 300;
}
</style>
