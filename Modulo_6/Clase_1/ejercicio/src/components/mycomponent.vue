<template>
    <div class="my-component">
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default{
        name : 'MyComponent',
        data() {
            return {
                message: 'Hello Vue.js!'
            }
    }}
</script>