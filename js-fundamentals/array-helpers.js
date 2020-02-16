// formas de crear un array
const shoppingList = ["huevos", "pan", "azucar", "miel", "jabon", "servilletas"]
const animals = new Array("elefante", "leon", "tortuga", "serpiente")

console.log(shoppingList)
console.log(animals)

//uso de forEach para iterar un arreglo
shoppingList.forEach( item => {
    console.log(`${item} : $10`)
})
 

 // uso de find para encontrar un elemento
const pan = shoppingList.find( item => item === "pan")

if(pan) console.log("Debo comprar pan")

//uso de filter para obtener una sublista segun el filtro dado
//includes tambien es un helper para los arrays y string 
const justE = shoppingList.filter( item => item.includes("e"))

console.log(justE)

// uso de indexOF para encontrar el indice de un elemeto
console.log("Indice de leon: " + animals.indexOf("leon"))

//uso del reduce para reducir un arreglo
const ages = [20,25,30,30,35]

const allAges = ages.reduce( (previo , actual) => actual + previo)

console.log(allAges)

//uso de map
const animalsWithType = animals.map( animal => ({ name: animal , type : "terrestre" }))

console.log(animalsWithType)