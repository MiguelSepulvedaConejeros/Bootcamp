function mostrarMenu(){
    let opcion = prompt("¡Hola! Soy Miguel, \nEscribe el número de opción que deseas: \n1.- Te saludo \n2.- Haz una pregunta \n3.- Hago una suma  \n4.- Hago una resta  \n5.- Salir")
    return opcion
}

function main(){
    let opcion = mostrarMenu()
    switch (opcion){
        case "1":
            alert("Hola te saludo a traves de mi pagina")            
            return main()
        case "2":
            var mensaje = prompt("A continuacion escribe tu pregunta")
            alert("Hola tu pregunta: " + mensaje + " Ya la recibi, cuando la revise con gusto te respondere")           
            return main()
        case "3":
            var n1 = parseInt(prompt("Ingresa el primer numero numero"))
            var n2 = parseInt(prompt("Ingresa el segundo numero"))
            var res = n1 + n2
            alert("El resultado es " + res)
            return main()
        case "4":
            var n1 = parseInt(prompt("Ingresa el primer numero numero"))
            var n2 = parseInt(prompt("Ingresa el segundo numero"))
            var res = n1 - n2
            alert("El resultado es " + res)
            return main()
        case "5":
            break;        
    }
}

main()