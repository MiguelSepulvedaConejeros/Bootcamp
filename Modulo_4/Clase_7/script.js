//mt devuelve una posicion especifica
let texto = "hola";
console.log(texto.charAt(1)); //1

//unir cadenas de texto
let texto1 = "hola";
let texto2 = "mundo";
console.log(texto1.concat(texto2)); //hola mundo

//cadena dentro de una cadena
let texto3 =  "hola Mundo";
console.log(texto3.includes("Mundo")); //

//lastindexOf
let texto4 =  "hola Mundo Hola";
console.log(texto4.lastIndexOf("Hola")); //11

//reemplazar texto
let texto5 = "Hola Mundo";
console.log(texto5.replace("Mundo", "Pablito Neuquen")); //Hola Plablito Neuquen

let texto6 = "15123456 - K";
console.log(texto6.replace("-", "Pablito Neuquen")); //Hola Plablito Neuquen

//dividir cadenas
let texto7 = "Hola, Mundo";
console.log(texto7.split(",")); //[Hola, Mundo]