var santiago, paris, londres, nuevaYork, sPetersburgo, beijing, seoul = "";

function mostrarHora(Lugar = "santiago"){
    let d = new Date();
    let diferencia =  0;
    Lugar.toLowerCase();

    switch(Lugar){
        case "santiago": diferencia = 0
        break;
        case "paris": diferencia = 4
        break;
        case "londres": diferencia = 3
        break;
        case "nuevayork": diferencia = -2
        break;
        case "sPetersburgo": diferencia = 6
        break;
        case "beijing": diferencia = 11
        break;
        case "seoul": diferencia = 12
        break;
        default:
            break;
    }

    d.setHours(d.getHours() + diferencia)
    //fijar hora
    document.getElementById(Lugar).innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
    //hora local
    setInterval(function(){mostrarHora()}, 1000);

    var paris = () => setInterval(function(){mostrarHora("paris")}, 1000);
    var londres = () => setInterval(function(){mostrarHora("londres")}, 1000);
    var usa = () => setInterval(function(){mostrarHora("nuevayork")}, 1000);
    var rusia = () => setInterval(function(){mostrarHora("sanpetersburgo")}, 1000);
    var china = () => setInterval(function(){mostrarHora("beijing")}, 1000);
    var seul = () => setInterval(function(){mostrarHora("seul")}, 1000);

    //mostrar cambios
    setTimeout(paris, 4000)
    setTimeout(londres, 8000)
    setTimeout(usa, 12000)
    setTimeout(rusia, 16000)
    setTimeout(china, 20000)
    setTimeout(seul, 24000)

