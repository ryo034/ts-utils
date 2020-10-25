import stringToNumber from '@/utils/cast/stringToNumber'
/**
 * ゼロ埋めした日付を返す
 * @param day 日付
 */
export const toZeroPaddingDay = (day: string): string => {
  const parsedDay = stringToNumber(day)
  if (parsedDay > 31 || parsedDay < 1) {
    throw new Error('正しい日付を指定してください。')
  }
  return parsedDay > 9 ? `${parsedDay}` : `0${parsedDay}`
}

export default toZeroPaddingDay
