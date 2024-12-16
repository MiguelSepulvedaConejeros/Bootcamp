<template>
    <div>
        <input type="text" v-model="message"/>
        <h3 v-custom-font.xxl.blue>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<script lang="js" setup>
    import { ref, computed } from 'vue';
    let message = ref('')
    const reverse = computed(() => message.value.split('').reverse().join(''))

/*     //usamos compotion API
    import { defineComponent, ref, computed } from 'vue';
    export default defineComponent({
        name: 'ComputedExample',
        setup(){
            let message = ref('')
            const reverse = computed(() => message.value.split('').reverse().join(''))
            return { message, reverse}
        }
    }) */

/*  usamos option API
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ComputedExample',
        data(){
            return {
                message: ''
            }
        },
        computed: {
            reverse(){
                return this.message.split('').reverse().join('')
            }
        }
    }) */
</script>

<style scoped>
</style>