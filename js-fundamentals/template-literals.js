// manera de concatenar valores en un string más simple/limia
// se puede poner cualuqier exprecion que se evalue a un valor y concatenará

const name = "Leonard"
const message = "My name is " + name + " and I have " + (2020 - 1993) + " years old"
const message1 = `My name is ${name} and I have ${ 2020 - 1993 } years old`

/* console.log(message)
console.log(message1) */

// puedes hacer un string multilinea directamente
const text = `
Flotan 
—gruñó la cosa—, flotan, Georgie. 
Y cuando estés aquí abajo, conmigo, tú también flotarás. 🎈
`

// console.log(text)

const hours = 20

const recordar = (mensaje, horario , kilogramos) => {
    console.log(mensaje)
    console.log(horario)
    console.log(kilogramos)
}

recordar `Recuerda: Tu tienes que llamar a mamá a las ${hours} hrs y comprar ${ 50 + 5 } kg de papas`