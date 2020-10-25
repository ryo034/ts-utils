/**
 * 先月を取得
 * @param month 現在の月
 */
export const getLastMonth = (month: number): number => {
  return month !== 1 ? month - 1 : 12
}

export default getLastMonth
