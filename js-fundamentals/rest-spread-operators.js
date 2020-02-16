// spread operador
const hamburguer = { bread: 2, vegetables: "tomato", info: {
    place: "CDMX",
    price: "50"
}}
// funcionalidad muy similar al Object.assing, se sparce el objeto dentro de otro
const superhamburger = {...hamburguer}

superhamburger.vegetables = "pickles"
// de la misma manera solo funciona a un nivel de profundidad
superhamburger.info.place = "GDL"

/* console.log(hamburguer)
console.log(superhamburger) */


// srive para hacer merge de objetos
const aderezo = {
    salsa : "verde"
}

const quesadilla = {
    ingredient : "queso",
    material : "masa"
}

const quesadillaPicadillo = {
    ...quesadilla,
    ...aderezo,
    extra: "picadillo"
}

/* console.log(quesadillaPicadillo) */

// rest operator
//en las funcines se puede rescibir una liosta de argumentos variables, aqui es conocido como "rest operator"
// siempre debe ir al final de la lista de argumentos y se trata como un arreglo
function sum(a,b, ...numbers){
    let sum = a + b
    for(let i = 0; i < numbers.length ; i++){
        sum += numbers[i]
    }
    return sum
}

console.log( sum(1,2,3,4,5,6,7,8,9) )

// default parameter en funciones
function foo(value = "empty"){
    return value
}

console.log(foo())