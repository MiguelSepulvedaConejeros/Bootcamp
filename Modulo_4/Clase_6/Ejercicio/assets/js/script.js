

function Item(nombre, precio) {
    this.name = nombre;
    this.price = precio;
}

//Drinks
var martini = new Item('Martini', 2.550);
var cappuccino = new Item('Cappuccino', 1.370);
var latte = new Item('Latte', 1.350);
var mojito = new Item('Mojito', 2.290);

//Food
var riso = new Item('Insalata de riso', 6.750);
var cipollotti = new Item('Insalata ai cipollotti', 5.990);
var caprese = new Item('Insalata caprese', 8.250);

var meals = []
var drink = []


function getDrink() {
    drink = [];
    //food
    for (let i = 1; i < 5; i++) {
        var id = 'drink' + i;
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).checked) {
                console.log(i);

                switch (i) {
                    case 1:
                        drink.push(martini)
                        console.log(drink)
                        break;

                    case 2:
                        drink.push(cappuccino)
                        console.log(drink)
                        break;

                    case 3:
                        drink.push(latte)
                        console.log(drink)
                        break;
                    case 4:
                        drink.push(mojito)
                        console.log(drink)
                        break;

                    default:
                        break;
                }
            }
        }

    }
}



function getFood() {
    meals = [];
    //drinks
    for (let i = 1; i < 4; i++) {
        var id = 'meal' + i;
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).checked) {
                console.log(i);

                switch (i) {
                    case 1:
                        meals.push(riso)
                        console.log(meals)
                        break;

                    case 2:
                        meals.push(cipollotti)
                        console.log(meals)
                        break;

                    case 3:
                        meals.push(caprese)
                        console.log(meals)
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

function getTotals() {
    //limpia seccion de precios despues de calcular
    document.getElementById('drink').innerHTML = '';
    document.getElementById('food').innerHTML = '';
    document.getElementById('drinkPrice').innerHTML = '';
    document.getElementById('foodPrice').innerHTML = '';
    document.getElementById('finalPrice').innerHTML = '0';
    if (meals.length && drink.length === 1){
        // Muestra los item con precio en la consola
        console.log('Drink')
        console.log(drink[0])
        console.log('Meals')
        console.log(meals[0])
        console.log('Total')
        console.log(drink[0].price + meals[0].price)
        // Muestra los item en la seccion cuenta
        var drinks = [drink[0].name]
        var mealss = [meals[0].name]
        document.getElementById('drink').innerHTML = drinks[0];
        document.getElementById('food').innerHTML = mealss[0];
        // Muestra los precios de los item en la seccion cuenta
        var drinkp = [drink[0].price]
        var mealsp = [meals[0].price]
        var finalPrice =  drinkp[0] + mealsp[0]
        document.getElementById('drinkPrice').innerHTML = `$${drinkp[0]}0`;
        document.getElementById('foodPrice').innerHTML = `$${mealsp[0]}0`;
        document.getElementById('finalPrice').innerHTML = finalPrice+0;
    }
}