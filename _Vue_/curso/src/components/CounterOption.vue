<template>
    <h3>{{ counter }}</h3>
    <button @click="increment">Incrementar</button>
</template>

<script lang="js">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        data(){
            let counter = 0;
            return {counter}        
        },
        methods: {
            increment() {
                this.counter++;
            }
        }
    })
</script>

<style>
</style>
