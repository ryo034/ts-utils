import { convertMinutesToHour } from '@/utils'

describe('convertMinutesToHour #number', () => {
  describe('#convertMinutesToHour', () => {
    test('正常な値が返ってくること', () => {
      expect(convertMinutesToHour(180)).toBe(3)
      expect(convertMinutesToHour(195)).toBe(3.3)
      expect(convertMinutesToHour(195, 2)).toBe(3.25)
    })
    it('不正な値の検出', () => {
      expect(convertMinutesToHour()).toBe(NaN)
      expect(convertMinutesToHour(NaN)).toBe(NaN)
      expect(convertMinutesToHour({})).toBe(NaN)
      expect(convertMinutesToHour(() => '2018-01-01')).toBe(NaN)
      expect(convertMinutesToHour(Infinity)).toBe(NaN)
      expect(convertMinutesToHour([2018, 5, 1, 13, 52, 44])).toBe(NaN)
    })
  })
})
