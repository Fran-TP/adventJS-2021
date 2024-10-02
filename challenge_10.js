export default function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1]
  const toArray = []
  for (const coin of coins) {
    const rest = change % coin

    if (rest !== change) {
      const contain = Math.floor(change / coin)
      change = rest
      toArray.unshift(contain)
    } else {
      toArray.unshift(0)
    }
  }

  return toArray
}
