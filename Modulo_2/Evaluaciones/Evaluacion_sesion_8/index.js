var users ={
    128345:"1234",
    234567:"1234",
    334556:"1234"
}
var nombres ={
    128345: "Miguel Sepulveda",
    234567:"Jose Gutierrez",
    334556:"Alfredo Martinez"
}
var saldos ={
    128345:1110000,
    234567:2450000,
    334556:500000
}

function login(){
    alert("Bienvenido a Banca en Linea");
    usuario = prompt("Ingresa tu usuario")
    let contraseña = prompt("Ingresa tu contraseña")
    if (users[usuario] === contraseña) {
        alert("Bienvenido " + nombres[usuario])
        banca()
      } else {
        alert("Usuario o contraseña incorrectos");
        return login()
      }   
}

function banca(){
    let opcion = prompt("Selecione que desea hacer: \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar deposito  \n4.- Salir")
    switch (opcion){
        case "1":
            alert(saldos[usuario])            
            return banca()
        case "2":
            giroB()
            break;
        case "3":
            depositoB()
            break;
        case "4":
            alert("Gracias por preferir nuestro Banco")
            break;
        default:
            alert("Opción no válida, Elije una opcion");
            return banca()                
    }
}

function giroB(){
        let giro = parseInt(prompt("Su saldo actual es: " + saldos[usuario] + "\nIngrese el monto que desea girar"))
        if(giro<= saldos[usuario]){
            saldos[usuario] = saldos[usuario] - giro
            alert("Giro realizado. Su nuevo saldo es " + saldos[usuario])
            return banca()}
        else{
            alert("No tiene saldo suficiente")
        return giroB()           
    }
}                       

function depositoB(){
        let deposito = parseInt(prompt("Su saldo actual es: " + saldos[usuario] + "\nIngrese el monto que desea depositar"))
        saldos[usuario] = saldos[usuario] + deposito
        alert("Deposito realizado. Su nuevo saldo es " + saldos[usuario])
        return banca()
}                       


login()