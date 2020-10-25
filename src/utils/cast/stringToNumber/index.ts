/**
 * 文字列を数字にキャスト
 * @param data キャストしたいデータ
 */
export const stringToNumber = (data: string, radix = 10): number | TypeError => {
  if (typeof data !== 'string') return TypeError('data is string')
  return parseInt(data, radix)
}

export default stringToNumber
