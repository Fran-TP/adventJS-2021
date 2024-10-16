/**
 * Decodes a string of symbols into a number based on predefined symbol values.
 *
 * @param {string} symbols - A string of symbols to decode.
 * @returns {number} The decoded number, or NaN if any symbol is undefined.
 */
const decodeNumbers = symbols => {
  const symbolValueMap = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  let result = 0

  for (let i = 0; i < symbols.length; i++) {
    const curr = symbolValueMap[symbols[i]]
    const next = symbolValueMap[symbols[i + 1]]

    if (typeof curr === 'undefined') return Number.NaN

    result += curr < next ? -curr : curr
  }

  return result
}

// test
console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN
