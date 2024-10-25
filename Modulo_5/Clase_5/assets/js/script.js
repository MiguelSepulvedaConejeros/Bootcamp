$(function (){
    //modificacion del DOM
    $("#code").focus("click", function (){
        $(this).css({"background-color": "lightblue", "color": "blue"});
    })
    $("#code").focus("click", function (){
        $(this).css({"background-color": "lightgreen", "color": "green"});
    })
 
    //Controlar eventos
    $('#bt').on({
        click: function(){
            // rojo defecto
 
            //narajo para el estas seguro
            $(this).text("¿Estás Seguro?")
            $(this).css({"background-color": "orange"});
        },
         // si el usuario hace doble click
        dblclick: function(){
            $(this).text("¡OK!")
            $(this).css({"background-color": "blue"});
        },
 
        //mouse
        "mouseleave": function(){
        if ($(this).text() =="¡OK!"){
            $(this).text("COMPRADO")
            $(this).css({"background-color": "transparent", "color": "green"});
            }
        }
    })
 
});
 
 
$(document).ready(function(){
 

        let precioPolera = [44000, 44000, 44000];
        let descuento = 0;
        const costoEnvio = 5000;
        function calcularTotal(){
            let totalPoleras = 0;
            let cantidadT = 0
            $('.main').each(function(index){        
                let cantidad = parseInt($(this).find('.border').text());
                totalPoleras += precioPolera[index] * cantidad;
                cantidadT += cantidad;
            });
            $('.article').text(cantidadT + `  articulos`);
            let totalConDescuento = totalPoleras * (1 - descuento);
            $('.artiTotal').text('$' + totalConDescuento);
            // Sumar costo de envío
            let totalP = totalConDescuento + costoEnvio;
            $('.priceTotal').text('$' + totalP);
        }
        $('.main a').click(function(e){
            e.preventDefault();
            let elementoCantidad = $(this).siblings('.border');
            let cantidadActual = parseInt(elementoCantidad.text());
 
            if ($(this).text() === '+'){
                cantidadActual++;
            } else if ($(this).text() === '-' && cantidadActual > 0){
                cantidadActual--;
            }
            elementoCantidad.text(cantidadActual);
            calcularTotal();
        });
        $('#btnD').click(function() {
        let codigoDescuento = $('#code').val().trim().toLowerCase();
        
        // Aquí puedes definir qué descuento aplicar según el código
        if (codigoDescuento === "javascript") {
            descuento = 0.1; // 10% de descuento
        } else {
            descuento = 0; // Sin descuento si el código no es válido
        }

        calcularTotal(); // Recalcular total con descuento
    });
        
});


/* $('#bt').click(function() {
    const Value = $('#code').val();
    console.log(Value)
    
    switch(Value){
        case 'javascript':
        discount = 0,1;
        break;
        default:
        alert ('codigo de descuento invalido');
        return;
    }
}); */

/*     let precioPolera = [44000, 44000, 44000];
    const descuento = 0.1;
    const costoEnvio = 5000;
    let cantidadPoleras = 0;
    let  totalPoleras = 0;
    let cantidadT = 0
    const Value = $('#code').val();
 
    function calcularTotal(){
        $('.main').each(function(index){
            let cantidad = parseInt($(this).find('.border').text());
            totalPoleras += precioPolera[index] * cantidad;
            cantidadT += cantidad;
            $('#article').text(cantidadT + ` articulos`)
        });

        
 
        totalPoleras += costoEnvio;
        $('preciTotal').text('$' + totalPoleras);
    } */