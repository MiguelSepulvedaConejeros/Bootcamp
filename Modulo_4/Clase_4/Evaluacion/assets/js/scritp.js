
function orgPinic(){
    //variables para temperatura
    let temperatura;
    let celcius = prompt("Cual es la temperatura actual en grados celcius");
    //variable si esta lloviendo
    let lluvia;
    let soleado =  prompt("¿Esta lloviendo? (responde si o no)?");
    //variables minutos disponibles
    let minutosDis;
    let minutos = prompt("¿Cuántos minutos tienes disponibles para el picnic?");

    temperatura = (celcius >= 12 && celcius <= 30) ? true : false;
    lluvia = (soleado.toLowerCase() == "no") ? true : false;
    minutosDis = (minutos >= 90)  ? true : false;

    if (temperatura  && lluvia && minutosDis) {
        alert("!Es un buen momento para organizar un picnic¡");
    }else{
        alert("No es un buen momento para organizar un picnic, intenta de nuevo");
        orgPinic()
    }
}

orgPinic();