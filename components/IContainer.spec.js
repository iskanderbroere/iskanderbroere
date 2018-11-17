/* eslint-disable */
import { shallowMount } from "@vue/test-utils"
import IContainer from "~/components/IContainer.vue"

describe("IContainer.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message"
    const wrapper = shallowMount(IContainer, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
