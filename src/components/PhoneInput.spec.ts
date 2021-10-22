/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import TestComp from './PhoneInput.vue'
// import 'jsdom'

describe('initial test', () => {
  test('test 1', () => {
    const wrapper = mount(TestComp)
    expect(wrapper.text()).toContain('Test component')
  })
})
