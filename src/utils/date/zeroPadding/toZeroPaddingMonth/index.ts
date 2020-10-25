import stringToNumber from '@/utils/cast/stringToNumber'
/**
 * ゼロ埋めした月を返す
 * @param month 月
 */
export const toZeroPaddingMonth = (month: string): string => {
  const parsedMonth = stringToNumber(month)
  if (parsedMonth > 12 || parsedMonth < 1) {
    throw new Error('正しい月を指定してください。')
  }
  return parsedMonth > 9 ? `${parsedMonth}` : `0${parsedMonth}`
}
export default toZeroPaddingMonth
