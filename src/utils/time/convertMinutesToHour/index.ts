import { divNumber } from '@/utils'

/**
 * 分を時間に変換
 * @param {number} minute
 * @param {number} n 小数点第n位
 * @returns {number} 時
 *
 * 丸めモードはデフォルト(四捨五入)
 */
export const convertMinutesToHour = (minute: number, n = 1) => {
  if (typeof minute !== 'number' || minute === Infinity) return NaN
  return divNumber(minute, 60, n).toNumber()
}

export default convertMinutesToHour
