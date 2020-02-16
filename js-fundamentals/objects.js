// sintaxis de ub objeto -> si conocen los JSON sera muy fácil entender
const wolverine = {
    power : "regeneración",
    age: 100,
    attack: function(){
        console.log("claw attack")
    },
    defend (){
        console.log("use his adamantium skeleton")
    }
}
// nueva forma de declarar una funcion
wolverine.attack()
wolverine.defend()

// en JS todas los objetos  se pasan por referencia, es decir si pasas un objeto a una funcion y lo modificas estarás modificando el objeto original
// OBject.assign()
const dumbo = {
    action: "volar",
    friends: {
        mouse: "Timy"
    }
}

function foo(elephant){
    const nuevoDumbo = elephant
    nuevoDumbo.action = "nadar"
}


function bar(elephant){
    // solo funciona a un nivel, niveles mas profundos del objeto siguen apuntando a la misma referencia
    const nuevoDumbo = Object.assign({}, elephant)
    nuevoDumbo.friends.mouse = "Fredy"
    nuevoDumbo.action = "correr"
}


//foo(dumbo)
bar(dumbo)

console.log(dumbo)


// hack para copiar un objeto sin afectar el original pero se pierden datos
const person =  { 
    name: "Tom" , 
    action(){ console.log("walk") }
}

const personString = JSON.stringify(person)
const personClone = JSON.parse(personString)
personClone.name = "Steve"

console.log(person)
console.log(personClone)

// funciones interesantes / utiles
console.log(Object.keys(dumbo))
console.log(Object.values(dumbo))
