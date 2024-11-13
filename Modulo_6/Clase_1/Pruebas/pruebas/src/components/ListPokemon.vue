<template>
    <div>
        <h1>Lista Pokemon</h1>
        <ul>
            <li v-for = "pokemon in pokemons" :key="pokemon.name" >
                <h2>{{ pokemon.name }}</h2>
                <img src="pokemon.sprites.front_default" alt="Imagen de {{ pokemon.name }}">
                <p>{{ pokemon.weight }}</p>
                <p>{{ pokemon.height }}</p>
                <h3>Estadisticas</h3>
                <ul>
                    <li v-for = "(stat, index) in pokemon.stats" :key = "index">
                        {{ stat.stat.name }}: {{ stat.base_stat }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pokemons: [],
        };
    },
    mounted(){
        this.fetchPokemonList()
    }
}
</script>