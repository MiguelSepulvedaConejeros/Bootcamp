
$(document).ready(function(){
 
    $("#text1").mouseenter(function(){
           $("#text2").toggle();
       })
   
    $("#img").dblclick(function(){
        $("#img").css({width: '100%'})
       
    })  
    
    $("#img").mouseout(function(){
       $("#img").css({width: '20%'})
      
   }) 
   
   $("#caja3").dblclick(function(){
       $("#caja3").css('font-size', 'xx-large')
       $('#caja3').css('background-color', 'red')
    
   })
   });
   
   
