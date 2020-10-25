import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

// 曜日の配列
const WeekChars = ['日', '月', '火', '水', '木', '金', '土']
/**
 * 指定した日付の曜日を取得
 * @param {any} year year
 * @param {any} month month
 * @param {any} day day
 *
 * @returns {string} 日, 月, 火, 水, 木, 金, 土
 */
export const getDayOfWeekText = (year: number, month: number, date: number): string => {
  // 入力された数値から日付オブジェクトを作る
  const userDate = dayjs(`${year}-${month}-${date}`)
  return WeekChars[userDate.day()]
}

export default getDayOfWeekText
