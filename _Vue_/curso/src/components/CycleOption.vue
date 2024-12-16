<template>
<div>Hola Mundo</div>
</template>

<script lang="js" setup>

    //usando composition API
    import { onMounted, onUpdated } from 'vue';
    onMounted(() =>{
        console.log('Mounted');
    })

    onUpdated(() =>{
        console.log('Updated');
    })




/*  Usamos optionAPI
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CycleOption',
        data(){

        },
        methods: {

        },
        created(){
            console.log("created")
        },
        mounted(){
            console.log("mounted")
        },
        update(){
            console.log("update")
        },
        unmounted(){
            console.log("unmounted")
        }  
    }) */
</script>

<style scoped>
</style>