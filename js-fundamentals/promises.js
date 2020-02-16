//como crear una promesa simple
const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success")
    }, 1000)
  });

promise().then( result => { console.log(result) })

// se puede dar una respuesta exitosa o una fallida
const promise2 = isSuccess =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) resolve("Success");
      else reject("Fail")
    }, 1000);
  });

// forma 1: como cachar una respuesta de exito/fallida
promise2(false).then(
    resolve => console.log(resolve),
    reject => console.log(reject)
)

// forma 2: como cachar una respuesta de exito/fallida
promise2(false)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error)
  });

// funciones que regresan promesas
function callAPI(id) {
  const age = 20;
  return new Promise((resolve, reject) => {
    resolve({ id, name: "Woody", age })
  });
}

callAPI(5)
    .then( result => console.log(result))

// uso de Promise.all
const coffee = new Promise((resolve, reject) => {
  resolve("The coffee is not ready")
});

const toast = new Promise((resolve, reject) => {
  resolve("The toast is ready")
});

const fruit = new Promise((resolve, reject) => {
  resolve("The fruit is ready")
});

// se ejecutan todas las promesas en un arreglo y se obtiene un arreglo con sus respuestas
// si una falla solo se obntiene el error de la primera que falle
Promise.all([coffee, toast, fruit])
    .then( results => { console.log(results) } )
    .catch( errors => { console.log(errors) })

//usando Promise.resolve, devuelve una promesa resolviendola con el valor dado

const name = "Andy";
const asyncName = new Promise((resolve, reject) => {
  resolve("Sam")
});

Promise.resolve(name).then( name => console.log(name))
Promise.resolve(asyncName).then( name => console.log(name))

// con async y await puedes hacer que tu codigo espere la ejecucion de condigo asincrono
function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First the cereal!!!!");
    }, 1000)
  });
}

// forma 1: no garantiza el orden ejecucion
function foo() {
  prepare().then( result => console.log(result))
    console.log("Then the milk!!!")
}

foo()

// espera el orden de ejecución
async function bar() {
  const firstSttep = await prepare();
  console.log(firstSttep);
  console.log("then the milk")
}

bar()


// puedes regresar promesas usando asyn sin instanciar directamente de Promise

async function myPromise (){
    return "This is my promise"
}

async function failPromise (){
    throw "This is a fail"
}

//exitosa
myPromise().then(result => console.log(result))
//fallida
failPromise().catch(error => console.log(error))