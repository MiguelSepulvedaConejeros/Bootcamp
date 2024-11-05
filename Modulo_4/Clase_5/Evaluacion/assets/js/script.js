// Función constructora para crear objetos de empleado
function Empleado(nombre, salario, departamento) {
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;
  
    // Método para calcular el salario después de un aumento
    this.calcularSalarioConAumento = function (porcentajeAumento) {
      const aumento = (porcentajeAumento / 100) * this.salario;
      this.salario += aumento;
      return this.salario;
    };
  
    // Método para cambiar el departamento
    this.cambiarDepartamento = function (nuevoDepartamento) {
      this.departamento = nuevoDepartamento;
    };
  
    // Método para obtener detalles del empleado
    this.obtenerDetalles = function () {
      return `Nombre: ${this.nombre}, Salario: $${this.salario}, Departamento: ${this.departamento}`;
    };
  }
  
  // Ejemplo de uso de la función constructora y métodos
  const empleado1 = new Empleado("Juan Pérez", 50000, "Ventas");
  console.log(empleado1.obtenerDetalles());
  
  empleado1.calcularSalarioConAumento(10);
  console.log(empleado1.obtenerDetalles());
  
  empleado1.cambiarDepartamento("Marketing");
  console.log(empleado1.obtenerDetalles());
  