import { gameitems } from "../gameitems";

export default {
  state: {
    gameitems,
    gamesInCart:[]
  },
  getters: {
    game: (state) => (id) =>  {
      return state.gameitems.find(item => item.id === id)
    },
    countItemsInCart(state){
      return state.gamesInCart.length
    }
  },
  actions:{
    addGameToCart({state,commit},id){
      const game = state.gameitems.find(item => item.id === id)
      console.log(game)
      if(game){
        commit('addToCart', game)
      }
    }
  },
  mutations:{
    addToCart(state, game){
      state.gamesInCart.push(game)
    }
  }
};
