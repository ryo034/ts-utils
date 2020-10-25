import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 指定された日時の前にあるか
 * @param {string} firstDate
 * @param {string} secondDate
 * @returns {string}
 */
export const isBeforeDate = (firstDate: string, secondDate: string) => {
  return dayjs(firstDate).isBefore(dayjs(secondDate))
}

export default isBeforeDate
