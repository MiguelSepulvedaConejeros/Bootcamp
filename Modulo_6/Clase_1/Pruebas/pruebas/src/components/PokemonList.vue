<template>
  <div>
    <h1>Lista de Pokémon</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Imagen de {{ pokemon.name }}" />
        <p>Altura: {{ pokemon.height }}</p>
        <p>Peso: {{ pokemon.weight }}</p>
        <h3>Estadísticas:</h3>
        <ul>
          <li v-for="(stat, index) in pokemon.stats" :key="index">
            {{ stat.stat.name }}: {{ stat.base_stat }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    this.fetchPokemonList();
  },
  methods: {
    async fetchPokemonList() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10'); // Limite de 10 para una mejor visualización
        if (!response.ok) {
          throw new Error('Error al obtener la lista de Pokémon');
        }
        const data = await response.json();
        // Obtener información detallada de cada Pokémon
        const pokemonPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        this.pokemons = await Promise.all(pokemonPromises);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para el componente */
div{
  width: 550px;
}
h1 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 16px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
}
img {
  width: 100px;
  height: auto;
}
</style>