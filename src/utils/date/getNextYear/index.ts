/**
 * 来年を取得
 * @param year 現在の年
 * @param month 現在の月
 */
export const getNextYear = (year: number, month: number): number => {
  return month !== 12 ? year : year + 1
}
export default getNextYear
