/* */

class Persona{
    constructor(nombre, edad,){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        document.write(`Nombre: ${this.nombre} <br>`);
        document.write(`Edad: ${this.edad} <br>`);
    }
}

class  Empleado extends Persona{
    constructor(nombre, edad, salario){
        super(nombre, edad);
        this.salario = salario;
    }
    imprimir(){
        super.imprimir();
        document.write(`Salario: ${this.salario} <br>`);
    }
}

const persona1 = new  Persona('Sabina', 52);
persona1.imprimir();
document.write(persona1.nombre + persona1.edad);


document.write(empleado1.salario)
