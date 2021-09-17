import { add } from './index'

describe('utils', () => {
  describe('add()', () => {
    it('adds numbers', () => {
      expect(add(1, 1)).toBe(2)
    })
  })
})
