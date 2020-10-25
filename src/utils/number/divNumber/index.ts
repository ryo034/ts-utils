import BigNumber from 'bignumber.js'
import { roundFloat } from '@/utils'

/**
 * 割り算
 * @param {number} minute 対象
 * @param {number} n 割る数
 * @param {number} k 小数第k位まで
 * @return {string}
 * ## mode default - ROUND_HALF_UP
 * https://mikemcl.github.io/bignumber.js/#constructor-properties
 * - ROUND_UP - 切り上げ
 * - ROUND_DOWN - 切り捨て
 * - ROUND_CEIL - 数値として大きい方(天井方向)に丸める
 * - ROUND_FLOOR - 数値として小さい方(床方向)に丸める
 * - ROUND_HALF_UP - 四捨五入
 * - ROUND_HALF_DOWN - 五捨六入
 * - ROUND_HALF_EVEN - 5 の場合に偶数(EVEN)になるように丸める
 * - ROUND_HALF_CEIL -
 * - ROUND_HALF_FLOOR -
 */
export const divNumber = (number: number | BigNumber, n: number, k = 1, mode = 'ROUND_HALF_UP') => {
  return roundFloat(new BigNumber(number).div(n), k, mode)
}

export default divNumber
