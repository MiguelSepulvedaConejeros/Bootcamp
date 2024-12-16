<template>
    <form>
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree"> Acepto los términos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option> <!-- si no hay un value por defecto toma el valor dentro de la etiqueta -->
            <option value="UK">UK</option>
            <option value="France">France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>

<script lang="js" setup>
    import {ref} from 'vue'
    let inputText = ref('')
    let agree = ref(false)
    let country = ref('UK')


/*  como usar un checkbox para usar un dato booleano usando true o false.  
    import {ref, defineComponent} from 'vue'
    export default defineComponent({
        data() {
            return { 
                inputText: ref(''),
                agree: true
             }
        }
    }) */

/*  declarando el setup 
    import {ref, defineComponent} from 'vue'
    export default defineComponent({
        setup() {
            let inputText = ref('')
            return { inputText }
        }
    }) */
/*   usando setup
    import {ref} from 'vue';
            let inputText = ref('')  */
</script>

<style scoped>
</style>