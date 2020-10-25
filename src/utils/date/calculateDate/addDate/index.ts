import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 年月日に指定の日数を加算して返します
 * @param {string | date} date 操作対象の年月日を指定する
 * @param {number} numberOfDays 加算したい日数を指定する
 * @return {string} YYYY-M-Dという形式で戻る
 */
export const addDate = (date: string | Date, numberOfDays: number) => {
  return dayjs(date).add(numberOfDays, 'day').format('YYYY-M-D')
}

export default addDate
