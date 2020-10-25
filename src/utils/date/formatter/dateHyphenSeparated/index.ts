import { ERROR_MESSAGES } from '@/constants'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * dateオブジェクトや文字列、数値の日付をハイフン区切りにして返す
 * @param {string | number |Date} val ex.Wed Jul 29 2020 08:45:00 GMT+0900 (日本標準時)
 * @returns {string} ex.2020-07-29
 */
export const dateHyphenSeparated = (date: string | number | Date): string => {
  if (!date) return ERROR_MESSAGES.EMPTY_ARGUMENT
  return dayjs(date).format('YYYY-MM-DD')
}

export default dateHyphenSeparated
