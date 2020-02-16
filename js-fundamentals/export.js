// exportar elementos individuales
export const cook = () => 'I am cooking'

const clean = () => 'Clean the room'

const work = () => 'Do your work'

// exportar agrupando los elementos
export {
    clean,
    work
}

// se puede exportar por defecto algo de un
function dance() {
    return 'Dance with me'
}

const test = () => 'I test it!'

export default { dance , test }