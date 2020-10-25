/**
 * 年月日を指定の形式に変換
 * 例：20200601
 * @param {any} year year
 * @param {any} month month
 * @param {any} day day
 */
export const toZeroPaddingDate = (
  year: string | number,
  month: string | number,
  day: string | number
): string => {
  const zeroPaddingMonth = month < 10 ? `0${month}` : month
  const zeroPaddingDate = day < 10 ? `0${day}` : day
  return `${year}${zeroPaddingMonth}${zeroPaddingDate}`
}

export default toZeroPaddingDate
