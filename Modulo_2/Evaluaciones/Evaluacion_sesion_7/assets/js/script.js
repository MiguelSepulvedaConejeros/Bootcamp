function mostrarMenu(){
    let opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")
    return opcion
}
//FUNCIONES

function main(){
    let opcion = mostrarMenu()
    switch (opcion) {
        case "1":
            boleypago()
            break;
        case "2":
            seyllama()
            break;
        case "3":
            ofercomer()
            break;
        case "4":
            otrascon()
            break;    
        default:
            alert("Opción no válida, Elije una opcion");
            return main()   
}
       
}
function boleypago(){
    let boletasypagos = prompt("Selecione una opcion \n1.- Ver Boleta \n2.- Pagar cuenta 3");
    switch (boletasypagos) {
        case "1":
            alert("Haga clic para descargar su boleta");
            break;
        case "2":
            alert("Usted esta siendo transferido, Espere por favor");
            break;
        default:
            alert("Opción no válida, Elije una opcion");
            return boleypago()   
    }
}

function seyllama(){
    let senalyllamada = prompt("Selecione una opcion \n1.- Problemas con la señal \n2.- Problemas con las llamadas");
    switch (senalyllamada) {
        case "1":
            var mensaje = prompt("A continuacion escriba su solicitud")
            alert("Estimado usuario, su solicitud: " + mensaje + " Ha sido ingresada con éxito, Pronto será contactado por uno de nuestros ejecutivos")
            break;
        case "2":
            var mensaje = prompt("A continuacion escriba su solicitud")
            alert("Estimado usuario, su solicitud: " + mensaje + " Ha sido ingresada con éxito, Pronto será contactado por uno de nuestros ejecutivos")
            break;    
        default:
            alert("Opción no válida, Elije una opcion");
            return seyllama()
    }
}

function ofercomer(){
    let senalcomercial = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades: Para conocer mas informacion y ser asesorado personalmente por un ejecutivo escribe SI y un ejecutivo te llamara, De lo contrario ingrese NO")
    switch (senalcomercial){
        case "SI","si":
            alert("Un ejecutivo contactara con usted")
            break;
        case "NO","no":
            alert("Gracias  por preferir nuestros servicios")
            break;
    default:
        alert("Opción no válida, Elije una opcion");
        return ofercomer()      
    }
}

function otrascon(){
    let otrasconsultas = prompt("A continuacion escriba su consulta");
    alert("Estimado usuario, su consulta: " + otrasconsultas + " Ha sido ingresada con éxito, Pronto sera contactado por uno de nuestros ejecutivos")
}

main();