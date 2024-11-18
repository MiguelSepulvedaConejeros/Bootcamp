<template>
    <div class="container">
        <h1 style="color: red;">Lo que buscas no esta aqui</h1>
        <P style="color: red">{{ route }}</P>
    </div>
</template>

<script>
    export default{
        conputed: {
            route() {
                return this.$route.name
            }
        }
    }
</script>