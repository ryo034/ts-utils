import { roundFloat } from '@/utils'

describe('roundFloat #number', () => {
  describe('#roundFloat', () => {
    test('正常な値が返ってくること', () => {
      expect(roundFloat(1.8888).toNumber()).toBe(1.9)
      expect(roundFloat(1.567876, 2).toNumber()).toBe(1.57)
      expect(roundFloat(1.567876, 2, 'ROUND_UP').toNumber()).toBe(1.57)
      expect(roundFloat(1.567876, 2, 'ROUND_DOWN').toNumber()).toBe(1.56)
      expect(roundFloat(1.567876, 2, 'ROUND_CEIL').toNumber()).toBe(1.57)
      expect(roundFloat(1.567876, 2, 'ROUND_FLOOR').toNumber()).toBe(1.57)
      expect(roundFloat(1.567876, 2, 'ROUND_HALF_UP').toNumber()).toBe(1.57)
      expect(roundFloat(1.567876, 2, 'ROUND_HALF_DOWN').toNumber()).toBe(1.57)
      expect(roundFloat(1.567876, 2, 'ROUND_HALF_EVEN').toNumber()).toBe(1.57)
    })
    it('不正な値の検出', () => {
      expect(roundFloat().toNumber()).toBe(NaN)
      expect(roundFloat(NaN).toNumber()).toBe(NaN)
      expect(roundFloat({}).toNumber()).toBe(NaN)
      expect(roundFloat(() => '2018-01-01').toNumber()).toBe(NaN)
      expect(roundFloat(Infinity)).toBe(NaN)
      expect(roundFloat([2018, 5, 1, 13, 52, 44]).toNumber()).toBe(NaN)
    })
  })
})
