<template>
    <h3></h3>
    <button>Incrementar</button>
</template>

<script lang="js">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        components: {},
        data(){
            let counter = 0;
            return {counter}
        },
        methods
    })
</script>

<style>
</style>