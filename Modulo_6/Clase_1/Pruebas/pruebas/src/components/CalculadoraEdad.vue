<template>
    <div>
        <h1>Calculadora Edad</h1>
        <p>Ingresa tu edad</p>
        <input v-model="edadAnios" type="number" placeholder="Tus años" />
        <p>Tu edad en meses es: {{ edadMeses }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            edadAnios: 0,
        };
    },
    computed: {
        edadMeses() {
            return this.edadAnios * 12;
        }
    }
}
</script>