const canReconfigure = (from, to) => {
  if (from.length !== to.length) return false

  const mapFromTo = {}
  const mapToFrom = {}

  for (let i = 0; i < from.length; i++) {
    const charFrom = from[i]
    const charTo = to[i]

    if (mapFromTo[charFrom] && mapFromTo[charFrom] !== charTo) {
      return false
    }

    if (mapToFrom[charTo] && mapToFrom[charTo] !== charFrom) {
      return false
    }

    mapFromTo[charFrom] = charTo
    mapToFrom[charTo] = charFrom
  }

  return true
}

// Ejemplos:
console.log(canReconfigure('BAL', 'LIB')) // true
console.log(canReconfigure('CON', 'JON')) // true
console.log(canReconfigure('XBOX', 'PSPS')) // false
console.log(canReconfigure('AA', 'CD')) // false
