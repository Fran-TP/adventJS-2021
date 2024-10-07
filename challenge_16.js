const decodeNumbers = symbols => {
  const symbolArray = [...symbols]
  const symbolValueMap = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  const areAllValuesDefined = symbolArray.every(
    symbol => typeof symbolValueMap[symbol] !== 'undefined'
  )

  if (!areAllValuesDefined) return Number.NaN

  let result = 0

  for (let i = 0; i < symbolArray.length; i++) {
    const curr = symbolValueMap[symbolArray[i]]
    const next = symbolValueMap[symbolArray[i + 1]]

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
