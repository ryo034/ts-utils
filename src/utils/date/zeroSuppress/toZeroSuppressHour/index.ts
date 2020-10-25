import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { TEMPORARY_DATE } from '@/constants'

dayjs.locale('ja')
/**
 * ゼロを削除した時間を返す
 * @param {string} hourMinute ex.07:00
 * @returns {string} ex.7:00
 */
export const toZeroSuppressHour = (hourMinute: string) => {
  return dayjs(`${TEMPORARY_DATE.TEMPORARY_ISO_DATE}T${hourMinute}`).format('H:mm')
}

export default toZeroSuppressHour
