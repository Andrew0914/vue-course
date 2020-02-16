// la diferencia mas visible para funciones simples es que se pueden escribir en una sola linea (mas concisas)
function evolve(pokemon) {
    return  pokemon + " has evolved"
}

let evolve2 = function(pokemon) {
    return  pokemon + " has evolved"
}

// omites los curly braces y el return (solo si es una expresion que puede evaluarse a un valor)
let evolve3 = pokemon => pokemon + " has evolved"


// resultado igual diferente forma de escribir
console.log(evolve("pikachu"))
console.log(evolve2("pikachu"))
console.log(evolve3("pikachu"))

// forma de recibir 0, 1 o muchos parametros
const play = () => "soccer"
const eat = _ => "taco"
const jump = wall => "jump " + wall
const sum = (a , b) => a + b 
// si ya es un bloque de codigo
const circle = r => {
    const pi = 3.1416
    return pi * (r * r)
}
// para devolver on objeto en una linea
const returnObject = () => ({ name: "Jonh" })

// this no ligado

const it = {
    name: "Pennywise",
    eat: function(){
        return this.name + " eat kids 🎈"
    },
    laugh: () =>  this.name + ": ha ha ha 😁"
}



//en las funciones clasicas el this puede variar dependiendo del contexto donde es llamado, ahora el objeto "it"
console.log(it.eat())
//en las arrow function el this no esta ligado al contexto, si no que hace referencia a donde es contenida
console.log(it.laugh())

// otra forma de entenderla es que this -> sera una referencia de un nivel arriba del scope
const garfield = {
    food: "lasagna",
    eat: function () {
        setTimeout(() => {
            console.log("Eat 😸 " + this.food)
        }, 1000)
    } 
}

garfield.eat()