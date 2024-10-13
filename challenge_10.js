/**
 * Calculates the minimum number of coins needed to make the given change.
 *
 * @param {number} change - The amount of change to be converted into coins.
 * @returns {number[]} An array representing the number of each coin needed, in the order of [50, 20, 10, 5, 2, 1] denominations.
 */
const getCoins = change => {
  const coins = [50, 20, 10, 5, 2, 1]
  const resultArray = []
  let currChange = change
  for (const coin of coins) {
    resultArray.unshift(Math.floor(change / coin))
    currChange %= coin
  }

  return resultArray
}

// test
console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
