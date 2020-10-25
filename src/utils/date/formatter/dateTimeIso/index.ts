import { ERROR_MESSAGES } from '@/constants'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * dateオブジェクトや文字列、数値の日時をISO8601形式で返す
 * @param {string | number |Date} val ex.Wed Jul 29 2020 08:45:00 GMT+0900 (日本標準時)
 * @returns {string} ex.2020-07-29T08:45:00
 */
export const dateTimeIso = (dateTime: string | number | Date): string => {
  if (!dateTime) return ERROR_MESSAGES.EMPTY_ARGUMENT
  return dayjs(dateTime).format('YYYY-MM-DDTHH:mm')
}

export default dateTimeIso
