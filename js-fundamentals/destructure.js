// derstructuracion de objetos
// variables con el mismo nombre
const {name , lastname} = {name: "Carlitos", lastname:"Fingster"}

console.log(name)

// si queremos poner un alias (otro nombre)

const {name: theName , lastname: theLastname} = { name:"Tommy" , lastname: "Pickles"}

console.log(theName)

// en una manera similar podemos destructurar un arreglo

const fruits = ["apple", "banana", "grape", "orange"]

const [apple, banana, grape, orange] = fruits

console.log(orange)

// podemos derstructurar solo una parte del arreglo
const vegetables = ["onion", "garlic", "tomato", "carrot"]
// coinciden textualmente los nombres, pero en losarreglos lo que importa es la posicion de las variables, pueden llamarse como sea
const [onion, garlic, ...others] = vegetables

console.log(onion)
console.log(others)

// las funciones pueden recibir solo los valores que les interesan con la destructuración
const angelica = {name:"Angelica" , lastname: "Pickles"}

function destructure({name}, [vegetal]){
    return `I am ${name} and I eat ${vegetal}`
}

console.log(destructure(angelica, vegetables))