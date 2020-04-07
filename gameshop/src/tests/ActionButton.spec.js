import { mount } from "@vue/test-utils";
import ActionButton from "../components/ActionButton.vue";

it('Test button event', () => {
    const actionButton = mount(ActionButton, {propsData: {event: "test"}})
    const button = actionButton.find("button")
    button.trigger('click')

    expect(actionButton.emitted().test).toBeTruthy()
})