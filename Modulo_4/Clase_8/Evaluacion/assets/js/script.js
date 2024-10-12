const roleSymbols = Symbol('role');


const empleado =  {
    [roleSymbols]:  'empleado',
    nombre: 'Juan',
    salario: 250000,
    datosPersonales:{
        edad: 30,
        direccion:  'Calle 123',
    },
}

