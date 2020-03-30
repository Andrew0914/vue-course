import { gameitems } from "../gameitems";

export default {
  state: {
    gameitems
  },
  getters: {
    game: (state) => (id) =>  {
      return state.gameitems.find(item => item.id === id);
    }
  }
};
