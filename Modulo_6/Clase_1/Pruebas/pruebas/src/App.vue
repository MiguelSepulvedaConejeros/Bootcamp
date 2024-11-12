<template>
  <div id="app">
    <CalculadoraEdad />
  </div>
</template>

<script>
import CalculadoraEdad from './components/CalculadoraEdad.vue';

export default {
  name: 'App',
  components: {
    CalculadoraEdad
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
