import { divNumber } from '@/utils'

describe('divNumber #number', () => {
  describe('#divNumber', () => {
    test('正常な値が返ってくること', () => {
      expect(divNumber(6, 3).toNumber()).toBe(2)
      expect(divNumber(6, 4).toNumber()).toBe(1.5)
    })
    it('不正な値の検出', () => {
      expect(divNumber().toNumber()).toBe(NaN)
      expect(divNumber(NaN).toNumber()).toBe(NaN)
      expect(divNumber({}).toNumber()).toBe(NaN)
      expect(divNumber(() => '2018-01-01').toNumber()).toBe(NaN)
      expect(divNumber(Infinity).toNumber()).toBe(NaN)
      expect(divNumber([2018, 5, 1, 13, 52, 44]).toNumber()).toBe(NaN)
    })
  })
})
