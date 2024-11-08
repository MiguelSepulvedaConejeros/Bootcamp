// Función constructora para crear objetos de libro
function Libro(titulo, autor, anioPublicacion) {
  this.titulo = titulo;
  this.autor = autor;
  this.anioPublicacion = anioPublicacion;
}

// Método para formatear y mostrar la información detallada del libro
Libro.prototype.mostrarInformacionDetallada = function () {
  const tituloFormateado = this.titulo.replaceAll(" ", "_");
  const autorSinEspacios = this.autor.trim();
  const anioFormateado = this.anioPublicacion ?? "No especificado";

  console.log(`Título: ${tituloFormateado}`);
  console.log(`Autor: ${autorSinEspacios}`);
  console.log(`Año de publicación: ${anioFormateado}`);
};

// Ejemplo de uso
const libros = [
  new Libro("El señor de los anillos", "J.R.R. Tolkien", 1954),
  new Libro("Cien años de soledad", "Gabriel García Márquez", 1967),
  new Libro("1984", "George Orwell", null),
];

// Mostrar información detallada de todos los libros
libros.forEach(libro => {
  console.log("----------");
  libro.mostrarInformacionDetallada();
});

// Filtrar libros por autor
const autorBuscado = "J.R.R. Tolkien";
const librosFiltrados = libros.filter(libro => libro.autor === autorBuscado);
console.log("----------\nLibros de " + autorBuscado + ":");
librosFiltrados.forEach(libro => libro.mostrarInformacionDetallada());

