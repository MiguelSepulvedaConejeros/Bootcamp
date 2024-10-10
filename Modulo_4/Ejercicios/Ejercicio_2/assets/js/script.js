function getValue(value){
    var keys = document.getElementById(value).innerHTML;
    var screen = document.getElementById('screen').value;
    document.getElementById('screen').value = screen + keys;
}

function solve(){
    var screen = document.getElementById("screen").value;
    var screen = document.getElementById("screen").value = eval (screen);
}

function clearScreen(){
    var screen = document.getElementById("screen").value="";
}