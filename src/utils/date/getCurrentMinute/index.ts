/**
 * 指定したminuteからhourに変換する
 * @param {number} minute ex.90
 * @returns {string} ex.1.5
 */
export const getCurrentMinute = (minute: number) => {
  if (minute < 0) {
    console.error('Valid input should be greater than or equal to 0.')
  }
  const hour = minute / 60
  return hour
}

export default getCurrentMinute
