/**
 * 昨年を取得
 * @param year 現在の年
 * @param month 現在の月
 */
export const getLastYear = (year: number, month: number): number => {
  return month !== 1 ? year : year - 1
}

export default getLastYear
