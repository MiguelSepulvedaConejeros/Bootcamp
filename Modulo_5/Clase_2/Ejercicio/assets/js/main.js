import { Normal, Vip } from "./clases.js";
$(function(){
    const intocable = new Vip()
    $('#bm').click(function(){
        const mortal = new Normal($('#email1').val(), $('#pass1').val());
        //usuario random
        const randomNum = (min, max) => Math.random(Math.random()) *((max - min) +min)
        $('#welcome').text(`Bienvenido Usuario ${randomNum(0, 9)} ${randomNum(0, 9)} ${randomNum(0, 9)}`)
        $('#welcomeBody').text(mortal.mostrarDatos())
    })

    $(`#vipButton`).click(function(){
        const intocable = new Vip($('#email2').val(), $('#pass2').val(), $('#user').val());
        $('#welcome').text(`Bienvenido ${intocable.username}`)
        $('#welcomeBody').text(intocable.mostrarDatos())
    })
})