<template lang="">
  <div class="container">
    <div class="row" style="text-align: center">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Artista"
          aria-label="Artista"
          v-model="artista"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Albúm"
          aria-label="Albúm"
          v-model="album"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Imagen Portada"
          aria-label="Imagen Portada"
          v-model="imagen"
        />
        />
      </div>
      <div class="col">
        <select
          class="form-select"
          aria-label="Floating label select example"
          placeholder="Imagen Portada"
          v-model="categoria"
        >
          <option selected>Selecciona una categoría</option>
          <option value="Rap">Rap</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
        </select>
      </div>
      <div>
        <button class="btn info" @click="agrega()">Agregar albúm</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoria: "",
      artista: "",
      album: "",
      imagen: "",
    };
  },
  computed: {},
  methods: {
    agrega() {
      if (this.categoria === "Rap") {
        this.$store.commit("AGREGAR_RAP", {
          artist: this.artista,
          album: this.album,
          image: this.imagen,
          category: this.categoria,
        });
        this.$router.push("Rap");
      } else if (this.categoria === "Pop") {
        this.$store.commit("AGREGAR_POP", {
          artist: this.artista,
          album: this.album,
          image: this.imagen,
          category: this.categoria,
        });
        this.$router.push("Pop");
      } else {
        this.categoria === "Rock";
        this.$store.commit("AGREGAR_ROCK", {
          artist: this.artista,
          album: this.album,
          image: this.imagen,
          category: this.categoria,
        });
        this.$router.push("Pop");
      }
    },
  },
};
</script>
<style scoped>
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  margin: 20px;
  font-size: 16px;
  cursor: pointer;
}

/* Blue */
.info {
  border-color: #2196f3;
  color: dodgerblue;
}

.info:hover {
  background: #2196f3;
  color: white;
}
</style>
