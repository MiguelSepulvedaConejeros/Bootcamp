<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et non numquam aut cumque rerum deleniti, similique cupiditate delectus optio autem reprehenderit unde. Quam ad sed totam reiciendis ipsum iure nesciunt.</p>
        <PostButton/>
    </div>
</template>

<script lang="js" setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc
}
</style>