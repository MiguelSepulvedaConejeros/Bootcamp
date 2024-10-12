

function reservaAsientos(){
    opcion = prompt("Seleccione el tipo de asiento \n1.- Asiento normal $5.000 \n2.-Asiento preferencial $9.000 \n3.-Asiento VIP $13.000")
    while (opcion  > 0) {
        switch (opcion){
            case '1':
                asientoNormal()
                reservaAsientos()
                break;
            case '2':
                asientoPreferencial()
                reservaAsientos()
                break;
            case '3':
                asientoVIP()
                reservaAsientos()
                break;
        }
        alert("Ingrese una opcion valida");
        reservaAsientos();
    }
}

function asientoNormal(){
    var asientos = prompt("Ingrese la cantidad de asientos que desea reservar")
    if (asientos >= 1  && asientos <= 4){
        valorN  = 5000 * asientos
        alert("El precio total de su reserva es: $"+ valorN)
        reservaAsientos();
    }
    if (asientos  >=5){
        valorN = asientos  * 5000
        descN = valorN * 10  / 100
        totalN =  valorN - descN
        alert("El precio total de su reserva es: $"+ totalN)
    }else{
        alert("Ingrese una cantidad valida de asientos")
        asientoNormal();
    }
}

function asientoPreferencial(){
    var asientos = prompt("Ingrese la cantidad de asientos que desea reservar")
    if (asientos >= 1  && asientos <= 4){
        valorN  = 9000 * asientos
        alert("El precio total de su reserva es: $"+ valorN)
        reservaAsientos();
    }
    if (asientos  >=5){
        valorN = asientos  * 9000
        descN = valorN * 10  / 100
        totalN =  valorN - descN
        alert("El precio total de su reserva es: $"+ totalN)
    }else{
        alert("Ingrese una cantidad valida de asientos")
        asientoPreferencial();
    }
}

function asientoVIP(){
    var asientos = prompt("Ingrese la cantidad de asientos que desea reservar")
    if (asientos >= 1  && asientos <= 4){
        valorN  = 13000 * asientos
        alert("El precio total de su reserva es: $"+ valorN)
        reservaAsientos();
    }
    if (asientos  >=5){
        valorN = asientos  * 13000
        descN = valorN * 10  / 100
        totalN =  valorN - descN
        alert("El precio total de su reserva es: $"+ totalN)
    }else{
        alert("Ingrese una cantidad valida de asientos")
        asientoVIP();
    }
}

reservaAsientos();