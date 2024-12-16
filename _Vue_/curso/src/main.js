import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//se puede aplicar un valor permanente a la directiva perosonalizada
app.directive('font-size', {
    beforeMount: (el) => {
        el.style.fontSize = '70px'
    },
    /* updated: () => {} para agregar mas funcionalidades */
})


//se puede aplicar una valor dinamico a la directiva personalizada para que cambie en funcion de lo requerido
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + 'px'
    },
    /* updated: () => {} para agregar mas funcionalidades */
})

//se puede aplicar argumentos a la directiva personalizada
app.directive('custom-sizes', {
    beforeMount: (el, binding) => {
        let size = 18
        switch(binding.arg){
            case 'sm':
                size = 10
                break;
            case 'md':
                size = 18
                break;
            case 'lg':
                size = 25
                break;
            case 'xl':
                size = 40
                break;
            case 'xxl':
                size = 72
                break;
        }
        el.style.fontSize = size + 'px'
    },
    /* updated: () => {} para agregar mas funcionalidades */
})

app.directive('custom-font', {
    beforeMount: (el, binding) => {
        let size = 18

        if(binding.modifiers.sm){
            size = 10
        } else if(binding.modifiers.lg){
            size = 25
        }else if( binding.modifiers.xxl){
            size = 72
        }
        el.style.fontSize = size + 'px'
        if(binding.modifiers.red){
            el.style.color = '#ff0000'
        }else if( binding.modifiers.green){
            el.style.color = '#00ff00'
        }else if( binding.modifiers.blue){
            el.style.color = '#0000ff'
        }
    },
    /* updated: () => {} para agregar mas funcionalidades */
})

app.mount('#app')

