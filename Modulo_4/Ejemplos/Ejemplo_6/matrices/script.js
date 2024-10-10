class Estudiantes{
    constructor(nombre, notas){
    this.nombre = nombre;
    this.notas = notas;
    }


    mostrarNotas(){
        console.log(`Las notas de ${this.nombre}:`);
        this.notas.forEach(nota => {
            console.log(nota);
        })
    }

    promedioNota(){
        const total = this.notas.reduce((acc, curr)=> acc  + curr, 0);
        return total / this.notas.length;

    }

}
//crear objeto
const estudiante1 = new Estudiantes('Juan', [10, 20, 30]);

//calculos
estudiante1.mostrarNotas();
console.log(`Promedio: ${estudiante1.promedioNota()}`)