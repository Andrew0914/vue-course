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
    },
    actions: {
        take({state, commit}, seatCode){
            const seat = state.seats.find( seat => seat.code === seatCode)
            if(seat){
                commit('takeSeat', seatCode)
            }
        }
    },
    mutations:{
        takeSeat(state, seatCode){
            const seat = state.seats.find( seat => seat.code === seatCode)
            seat.taked = !seat.taked
        }
    },
    getters: {
        countTaked(state){
            return state.seats.filter( seat => seat.taked ).length
        },
        countAvailable(state){
            return state.seats.filter( seat => !seat.taked ).length
        },
    }
}