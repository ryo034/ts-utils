import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 対象日が土曜日かどうか
 * @param {number} year
 * @param {number} month
 * @param {number} date
 */
export const checkSaturday = (
  year: number,
  month: number,
  date: number
): boolean => {
  return dayjs(`${year}-${month}-${date}`).day() === 6
}

export default checkSaturday
