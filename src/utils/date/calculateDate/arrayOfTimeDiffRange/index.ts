import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 2つの時間を比較して、差分の範囲を配列で返す
 * @param {string} fromDate 比較対象の日時 ex.2020-0101T08:00
 * @param {string} toDate 比較対象の日時 ex.2020-0101T13:00
 * @returns {number[]} ex.[8, 9, 10, 11, 12, 13]
 */
export const arrayOfTimeDiffRange = (fromDate: string, toDate: string) => {
  const fromDateFix = dayjs(fromDate)
  const toDateFix = dayjs(toDate)
  const DateRange = toDateFix.diff(fromDateFix, 'h')
  const hour = dayjs(fromDate).format('HH')

  return [...Array(DateRange + 1)].map((_, i) => i + Number(hour))
}

export default arrayOfTimeDiffRange
