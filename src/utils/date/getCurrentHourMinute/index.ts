import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * dateオブジェクトや文字列、数値の日付をハイフン区切りにして返す
 * @param {string | number |Date} val ex.Wed Jul 29 2020 08:45:00 GMT+0900 (日本標準時)
 * @returns {string} ex.09:00
 */
export const getCurrentHourMinute = (date: string | number | Date): string => {
  return dayjs(date).format('HH:mm')
}

export default getCurrentHourMinute
