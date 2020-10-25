import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { TEMPORARY_DATE } from '@/constants'

dayjs.locale('ja')

export const addMinute = (time: string, addCount: number) => {
  return dayjs(`${TEMPORARY_DATE.TEMPORARY_ISO_DATE}T${time}`)
    .add(addCount, 'minute')
    .format('HH:mm')
}

export default addMinute
