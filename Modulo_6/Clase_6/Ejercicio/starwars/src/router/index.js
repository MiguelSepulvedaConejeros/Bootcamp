import Vue from 'vue';
import VueRoute from 'vue-router';
import home from '@/views/home.vue';
import personajes from '@/views/personajes.vue';
import personaje from '@/views/personaje.vue';
import contacto from '@/views/contacto.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/personajes',
        name: 'personajes',
        component: home
    },
    {
        path: '/personajes/:id',
        name: 'personaje',
        component: home
    },      
    {
        path: '/contacto',
        name: 'contacto',
        component: home
    },
]

const router = new VueRouter({
    mode: 'history', // modo de navegacion
    base: process.env.BASE_URL, //ruta base
    routes
})
 
export default router //exporta el router para que se pueda usar en otras partes del proyecto
