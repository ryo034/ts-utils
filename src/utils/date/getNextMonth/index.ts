/**
 * 次月を取得
 * @param month 現在の月
 */
export const getNextMonth = (month: number): number => {
  return month !== 12 ? month + 1 : 1
}

export default getNextMonth
