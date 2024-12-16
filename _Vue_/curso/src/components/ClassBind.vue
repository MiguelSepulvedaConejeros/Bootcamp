<template>
    <p :style="{backgroundColor : '#ccc', color: c}"> mensaje se ha enviado satisfactoriamente.</p> <!-- se puede usar :(la propiedad) para usar la directiva v-bind -->
    <button @click="handleClick()">Cambiar color</button> <!-- se puede usar @(la propiedad) para usar la directiva v-on -->
    <!-- <p v-bind:style="{backgroundColor : '#ccc', color: '#fff'}"> mensaje se ha enviado satisfactoriamente.</p> --> <!--se puede usar camelcase para usar estilos de forma mas simple al llamar la propiedad-->
    <!-- <p v-bind:class="{'danger' : hasError}">El mensaje se ha enviado satisfactoriamente.</p> --> <!-- se puede aplicar una clase de CSS -->
</template>

<script lang="js">
        import { defineComponent, ref } from 'vue';
        export default defineComponent({
        name: 'ClassBind',
        setup() {
            let c = ref('#fff');
            const handleClick = () => {c.value = '#ff0000'}
                return{c,handleClick}
            }
        }
    )
/*     import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        data() {
            return {
                c : '#fff',
            }
        },
        methods: {
            handleClick() {
                this.c = '#ff0000';
            }
        }
    }) aqui utilizamos data() para usar variables y metodos*/

    /*<script lang="js" setup>
    import { ref } from 'vue'
    let c = ref('#fff')
    const handleClick = () => {c.value = '#ff0000'} estustrura que se usa con setup*/
    
/*     import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        setup() {
            let hasError = false; //al cambiar su valor a true se aplicará la clase danger.
            return {hasError}
        }
    }) */

/*     import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        data() {
            return {hasError: false} //al cambiar su valor a true se aplicará la clase danger.
        }
    }) */
</script>

<style>
.danger{
    color: red;
}
</style>