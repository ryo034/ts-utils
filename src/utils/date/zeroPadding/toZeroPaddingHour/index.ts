import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { TEMPORARY_DATE } from '@/constants'

dayjs.locale('ja')
/**
 * ゼロ埋めした時間を返す
 * @param {string} hourMinute ex.7:00
 * @returns {string} ex.07:00
 */
export const toZeroPaddingHour = (hourMinute: string) => {
  return dayjs(`${TEMPORARY_DATE.TEMPORARY_ISO_DATE}T${hourMinute}`).format('HH:mm')
}

export default toZeroPaddingHour
