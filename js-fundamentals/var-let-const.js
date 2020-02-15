var fruit = "apple"
const vegetable = "carrot"
let drink = "coke"

// var sirve para almacenar un valor y no tiene block scope
if(1 == 1){
    var name = "Jimmy"
}
// se puede modificar su valor
name = "Andy"

console.log(name)

// let sirve para almacenar un valor que puede cambiar pero tiene block scopen
if(true){
    let lastname = "Robinson"
    console.log(lastname)
}

// esto no va a funcionar ya que fuera el bloque es una variable desconocida
console.log(lastname)


// const sirve para declarar un constante, el valor no puede cambiar y tambien tiene block scope
if(true){
    const animal = "dog"
}

// no puedes cambiar el valor de una const
vegetable = "onion"

//esto no va a funcionar ya que fue del bloque no existe animal
console.log(animal)
