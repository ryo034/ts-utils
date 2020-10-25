import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 2つの日時を比較して、差分を数値（hour）で返す
 * @param {string} fromDate 比較対象の日時 ex.2020-0101T08:00
 * @param {string} toDate 比較対象の日時 ex.2020-0101T12:30
 * @param {string} type 時間の単位を指定
 * @returns {number} ex.4.5
 */
export const timeDiff = (fromDate: string, toDate: string, type: any = 'hour') => {
  const fromDateFix = dayjs(fromDate)
  const toDateFix = dayjs(toDate)
  return toDateFix.diff(fromDateFix, type)
}

export default timeDiff
