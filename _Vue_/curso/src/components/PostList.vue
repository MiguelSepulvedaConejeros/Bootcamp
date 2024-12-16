<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" @sayHi="showAlert" />
    </div>
</template>

<script lang="js" setup>
import PostDetail from './PostDetail.vue';
let info = [
    {
        title: "Este es el post 1",
        content:"Texto de ejemplo 1"
    },
    {
        title: "Este es el post 2",
        content:"Texto de ejemplo 2"
    },
    {
        title: "Este es el post 3",
        content:"Texto de ejemplo 3"
    },
    {
        title: "Este es el post 4",
        content:"Texto de ejemplo 4"
    },
    {
        title: "Este es el post 5",
        content:"Texto de ejemplo 5"
    }
    ];
    function showAlert(msg){
        alert(msg)
    }
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>