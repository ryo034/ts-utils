import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 年と月からその日数を取得
 * @param {string} year 対象の年
 * @param {string} month 対象の月
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return dayjs(`${year}-${month}-1`).daysInMonth()
}

export default getDaysInMonth
