/**
 * Checks if one string can be reconfigured to another string.
 *
 * @param {string} from - The original string.
 * @param {string} to - The target string.
 * @returns {boolean} True if the original string can be reconfigured to the target string, false otherwise.
 */
const canReconfigure = (from, to) => {
  if (from.length !== to.length) return false

  const map = new Map()

  for (let i = 0; i < from.length; i++) {
    const charFrom = from[i]
    const charTo = to[i]

    if (map.has(charFrom) && map.get(charFrom) !== charTo) {
      return false
    }

    if (map.has(charTo) && map.get(charTo) !== charFrom) {
      return false
    }

    map.set(charFrom, charTo)
    map.set(charTo, charFrom)
  }

  return true
}

// Ejemplos:
console.log(canReconfigure('BAL', 'LIB')) // true
console.log(canReconfigure('CON', 'JON')) // true
console.log(canReconfigure('XBOX', 'PSPS')) // false
console.log(canReconfigure('AA', 'CD')) // true
