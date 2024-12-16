<template>
    <ul>
        <!-- <li v-for="(country, index) in countries" v-bind:key="index">{{ country }}</li> se usa para iterar sobre la posicion del array con index -->
        <!-- <li v-for="(country, index) in countries" :key="index">{{ country }}</li> solo se puede usar :key en vez de v-bind:key--> 
        <!-- <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li> se itera a traves de su code y se llama a traves de su name-->
        <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li>
    </ul>
</template>

<script lang="js" setup>
    import {ref} from 'vue'
    let countries = ref([
        {
            code: 'es',
            name: 'Spanin'
        },
        {
            code: 'en',
            name: 'UK'
        },
        {
            code: 'fr',
            name: 'France'
        },
        {
            code: 'it',
            name: 'Italy'
        },
        {
            code: 'pt',
            name: 'Portugal'
        }
    ])
</script>

<style scoped>
</style>