import {createStore} from 'vuex';

const store = createStore ({
    state: {
        carrito: 0,
    },
    mutations: {
        agregarProducto(state){
            state.carrito++;
        },
        quitarProductos(state){
            if(state.carrito > 0){
                state.carrito--;
            }
        },
    },
    actions: {

    },
    getters: {
        totalProductos(state){
            return state.carrito; // retorno de cuantos productos hay en el carrito
        }
    }
});

export default store;