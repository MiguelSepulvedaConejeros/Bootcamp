import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Asegúrate de importar el router

createApp(App)
  .use(router) // Usa el router aquí
  .mount('#app')