import { mount, createLocalVue } from "@vue/test-utils";
import GameItem from "../components/GameItem.vue";
import gameStore from "../store/index.js";
import Vuex from "vuex";

const propsData = {
  id: 100,
  name: "Game",
  price: 800,
  stock: 1,
  urlImage: "https://games.com/media/sonic.png",
};

const localVue = createLocalVue();
localVue.use(Vuex);

describe("DOM & html", () => {
  it("Simple render HTML", () => {
    const gameItem = mount(GameItem, { propsData });
    expect(gameItem).toMatchSnapshot();
  });
});

describe("vuex", () => {
  
  let gameItem = null;
  let store = null

  beforeEach(() => {
    store = new Vuex.Store(gameStore);
    gameItem = mount(GameItem, { propsData, localVue, store });
  });

  it("Item was added to cart", () => {
    gameItem.vm.addToCart(100)
    expect(store.state.gamesInCart.length).toBe(1)
  });

});
