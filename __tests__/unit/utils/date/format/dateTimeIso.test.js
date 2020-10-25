import * as dateUtil from '@/utils/date'
import { ERROR_MESSAGES } from '@/constants'

// 2020-07-10T18:46
const expected = 1594374371110

describe('dateTimeIso #date', () => {
  describe('new Dateをmockする必要があるもの #dateTimeIso', () => {
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

    test('日付を指定した場合にその日付のハイフン繋ぎのYYYY-MM-DDTHH:mmが返ってくること', () => {
      const formattedDateBySeparator = dateUtil.dateTimeIso(expected)
      expect(formattedDateBySeparator).toBe('2020-07-10T18:46')
    })
  })

  describe('#dateTimeIso', () => {
    it('不正な値の検出', () => {
      expect(dateUtil.dateTimeIso()).toBe(ERROR_MESSAGES.EMPTY_ARGUMENT)
      expect(dateUtil.dateTimeIso(NaN)).toBe(ERROR_MESSAGES.EMPTY_ARGUMENT)
      expect(dateUtil.dateTimeIso({})).toBe('Invalid Date')
      expect(dateUtil.dateTimeIso(() => '2018-01-01')).toBe('Invalid Date')
      expect(dateUtil.dateTimeIso(Infinity)).toBe('Invalid Date')
      expect(dateUtil.dateTimeIso([2018, 5, 1, 13, 52, 44])).toBe('Invalid Date')
    })
  })
})
