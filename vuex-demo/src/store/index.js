// fuente de datos
const initSeats = () => {
    const rows = ["A","B", "C", "D", "E"]
    let seats = []
    rows.forEach( row => {
        for(let i = 1 ; i <= 5; i++){
            seats.push({ code: `${row}-${i}` , taked: false})
        }
    })
    return seats
}

export default {
    state:{
        seats: initSeats()
    }
}