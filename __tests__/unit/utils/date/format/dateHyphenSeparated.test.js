import * as dateUtil from '@/utils/date'
import { ERROR_MESSAGES } from '@/constants'

// 2020-07-10
const expected = 1594374371110

describe('dateHyphenSeparated #date', () => {
  describe('new Dateをmockする必要があるもの #dateHyphenSeparated', () => {
    let now
    let spiedDate

    beforeAll(() => {
      // new Dateをmock
      const OriginalDate = Date // 退避
      now = new OriginalDate(expected)
      Date.now = jest.fn().mockReturnValue(now.valueOf())
      spiedDate = jest.spyOn(global, 'Date').mockImplementation(() => now)
    })

    afterAll(() => {
      spiedDate.mockClear()
      spiedDate.mockRestore()
    })

    test('日付を指定した場合にその日付のハイフン繋ぎのものが返ってくること', () => {
      const formattedDateBySeparator = dateUtil.dateHyphenSeparated(expected)
      expect(formattedDateBySeparator).toBe('2020-07-10')
    })
  })

  describe('#dateHyphenSeparated', () => {
    it('不正な値の検出', () => {
      expect(dateUtil.dateHyphenSeparated()).toBe(ERROR_MESSAGES.EMPTY_ARGUMENT)
      expect(dateUtil.dateHyphenSeparated(NaN)).toBe(ERROR_MESSAGES.EMPTY_ARGUMENT)
      expect(dateUtil.dateHyphenSeparated({})).toBe('Invalid Date')
      expect(dateUtil.dateHyphenSeparated(() => '2018-01-01')).toBe('Invalid Date')
      expect(dateUtil.dateHyphenSeparated(Infinity)).toBe('Invalid Date')
      expect(dateUtil.dateHyphenSeparated([2018, 5, 1, 13, 52, 44])).toBe('Invalid Date')
    })
  })
})
