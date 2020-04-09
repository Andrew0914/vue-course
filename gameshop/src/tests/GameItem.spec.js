import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
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

window.alert = jest.fn();

describe("DOM & html", () => {
  it("Simple render HTML", () => {
    const gameItem = mount(GameItem, { propsData });
    expect(gameItem).toMatchSnapshot();
  });

  it("Simple render HTML with child stubs", () => {
    const gameItem = shallowMount(GameItem, { propsData });
    expect(gameItem).toMatchSnapshot();
  });
});

describe("vuex", () => {
  let gameItem = null;
  let store = null;

  beforeEach(() => {
    store = new Vuex.Store(gameStore);
    gameItem = mount(GameItem, { propsData, localVue, store });
  });

  it("Item was added to cart", () => {
    gameItem.vm.addToCart(100);
    expect(store.state.gamesInCart.length).toBe(1);
  });
});

describe("Computed properties", () => {
  it("Game states whhe is new", () => {
    const mProps = { ...propsData };
    mProps.isNew = true;
    const gameItem = mount(GameItem, { propsData: mProps });
    expect(gameItem.vm.gameStatus).toEqual({
      status: "New",
      appereance: { game_new: true },
    });
  });

  it("Game item validate a valid urlImage", () => {
    const gameItem = mount(GameItem, { propsData });
    expect(gameItem.vm.$options.props.urlImage.validator("SOMETHING_WRONG")).toBeFalsy()
  })
});
