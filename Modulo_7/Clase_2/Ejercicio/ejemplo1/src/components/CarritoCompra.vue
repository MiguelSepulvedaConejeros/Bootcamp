<template>
    <div>
        <h1>Carrito de compras</h1>
        <p>Total de productos: {{ totalProductos }}</p>
        <button @click="agregarProducto">Agregar al carrito</button>
        <button @click="quitarProductos">Quitar del carrito</button>
    </div>
</template>

<script>
    import { computed } from 'vue';
    import {mapMutations, mapGetters} from 'vuex'

        export default {
            computed:{
                ...mapGetters(['totalProductos']),
            },
            methods:{
                ...mapMutations(['agregarProducto', 'quitarProductos']),
            },
        }
</script>

<style scoped>
button{
    margin: 5px;
}
</style>