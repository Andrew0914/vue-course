import { mount } from "@vue/test-utils";
import GameItem from "../components/GameItem.vue";

describe("DOM & html", () => {
  it("Simple render HTML", () => {
    const gameItem = mount(GameItem, {
      propsData: {
        id: 1,
        name: "Game",
        price: 800,
        stock: 1,
        urlImage: "https://games.com/media/sonic.png",
      },
    });
    expect(gameItem).toMatchSnapshot();
  });
});
