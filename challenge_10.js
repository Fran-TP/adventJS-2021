export default function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1]
  const resultArray = []
  let currChange = change
  for (const coin of coins) {
    resultArray.unshift(Math.floor(change / coin))
    currChange %= coin
  }

  return resultArray
}
