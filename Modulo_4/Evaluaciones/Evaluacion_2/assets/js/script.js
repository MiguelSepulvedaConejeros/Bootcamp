//obtener la funcion para comprar
function obtenerCategoria(){
    var categoria = prompt("Ingrese la categoria del producto: ");
    switch  (categoria.toLowerCase()) {
        case "ropa":
            obtenerCantidadropa()
            break
        case  "electronica":
            obtenerCantidadElect()
            break
        default:
            alert("Categoria no encontrada");
            return obtenerCategoria();
    }

}
//Obtener la cantidad de productos
function obtenerCantidadropa(){
    cantidad = prompt("Ingrese la cantidad de productos: ");
        if (cantidad > 0){
            return obtenerPrecioropa()
        }else{
            alert("La cantidad debe ser mayor a 0")
            obtenerCantidadropa()
        }
}
// Obtener el precio final de los productos
function obtenerPrecioropa(){
    precio = prompt("Ingrese el precio unitario del producto: ");
        if (precio > 0){
            precioT =  precio * cantidad    //calculo del precio sin descuento
            descuento = precioT * 5 / 100   //calculo del  descuento
            precioF = precioT - descuento   //calculo precio final
            alert("El precio total de su compra es: " + precioF)
            console.log(descuento)
        }else{
            alert("La cantidad debe ser mayor a 0")
            obtenerPrecioropa()
        }
}
//Obtener la cantidad de productos
function obtenerCantidadElect(){
    cantidad = prompt("Ingrese la cantidad de productos: ");
        if (cantidad > 0){
            return obtenerPrecioElect()
        }else{
            alert("La cantidad debe ser mayor a 0")
            obtenerCantidadElect()
        }
}
// Obtener el precio final de los productos
function obtenerPrecioElect(){
    precio = prompt("Ingrese el precio unitario del producto: ");
        if (precio > 0){
            precioT =  precio * cantidad    //calculo del precio sin descuento
            descuento = precioT * 10 / 100  //calculo del  descuento
            precioF = precioT - descuento   //calculo precio final
            alert("El precio total de su compra es: " + precioF)
            console.log(descuento)
        }else{
            alert("La cantidad debe ser mayor a 0")
            obtenerPrecioElect()
        }
}

obtenerCategoria()

