// declaración de variables - case sensitive
var age = 26;
var AGE = 20;
var name = "Goku";
var monkey = {
  color: "brown",
  food: "banana",
  location: "jungle"
};

// operaciones

var operation = 1 + 8 - 9 * 5;

// comentario en una linea

/**
 * Comentario
 * multilinea
 */

// flow c9ontro
if (age === 1) console.log("You are a baby");
else console.warn("You are not a baby");

console.log( age === 1 ? "You are a baby" : "You are not a baby")

do {
  console.log("While");
  age++;
} while (age < 30);

for (var i = 0; i < 5; i++) {
  console.log(i);
}

var key = 0;
switch (key) {
  case 0:
    console.log("I have the key");
    break;
  default:
    console.log("I do not have the key");
    break;
}

// funciones y parametros

function eat(food) {
  console.log("Eat some " + food);
}

// tipos de datos

var string = "Hello"
var number = 20
var object = { name: "Vegeta" }
var _undefined = undefined
var _null = null // object
var array = [] // object
var _function = function(){ 
  return 5; 
}
var tets = true

console.log(typeof tets)