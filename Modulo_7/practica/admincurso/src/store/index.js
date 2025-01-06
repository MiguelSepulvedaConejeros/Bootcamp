import { createStore } from 'vuex'

export default createStore({
  state: {
    cursos: [
      { id: 1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqRxXH-O5nLNEEDjIVCTM9hY_dzmwRmCGBJ3yRc0bSpIE512IdXH-6OBf8A-ZbM3bGKM&usqp=CAU', nombre: 'JavaScript Avanzado', costo: 30000, duracion:'2 meses', cupos: 20, inscritos: 10, completado: false, fecha_registro: '06/03/2022', descripcion: 'Curso con las nuevas actualizaciones de JavaScript', color:'green'},
      { id: 2, img: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png', nombre: 'CSS para principiantes', costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 23, completado: false, fecha_registro: '05/03/2022', descripcion: 'Aprendiendo estilos con CSS desde el nivel más básico.'},
      { id: 3, img: 'https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.jpg', nombre: 'JavaScript Básico de 0 a 100', costo: 20000, duracion: '2 meses',cupos: 25,inscritos: 0, completado: true, fecha_registro: '05/03/2022', descripcion: 'Programando para la web con JavaScript.'},
      { id: 4, img: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', nombre:'HTML Básico', costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 0, completado: true, fecha_registro: '31/01/2022', descripcion:'Aprende HTML 5 y crea tus primeras páginas web paso a paso condecenas de ejercicios.' },
      { id: 5, img: 'https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg', nombre: 'Vue JS de 0 a 100', costo:85500, duracion: '5 meses', cupos: 35, inscritos:35, completado:false, fecha_registro: '06/03/2022', descripcion: 'Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.' }, 
      { id: 6, img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png', nombre: 'Estilos con SASS', costo: 45000, duracion: '1 mes', cupos: 40, inscritos: 35, completado: false, fecha_registro: '06/03/2022', descripcion: 'Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.' }, 
    ]
  },
  getters: {
    alumnInscritos: (state) => {
      let total = 0;
      for (const curso of state.cursos){
        total += Number(curso.inscritos);
      }
      console.log(total)
      return total;
    },
    alumnPermitidos: (state) => {
      let total = 0;
      for (const curso of state.cursos){
        total += Number(curso.cupos);
      }
      console.log(total)
      return total;
    },
    alumnRestantes: (state, getters) => {
      const totalInscritos = getters.alumnInscritos;
      const totalPermitidos = getters.alumnPermitidos;
    
      const totalRestantes = totalPermitidos - totalInscritos;
    
      console.log(totalRestantes);
      return totalRestantes;
    },
    alumnTerminados: (state) => {
      let total = 0;
      for (const curso of state.cursos){
        total += Number(curso.completado);
      }
      console.log(total)
      return total;
    },
    cursosActivos: (state) => {
      let total = 0;
      for (const curso of state.cursos){
        if(!curso.completado){
          total += 1;
        }
      }
      console.log(total)
      return total;
    },
    cursosTotales: (state) => {
      const total = state.cursos.length;
      console.log(total);
      return total;
    }
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
