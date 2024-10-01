function maxProfit(prices) {
  let maxPrice = Math.max(...prices)
  let currentSale = 0
  for (let i = 0; i < prices.length; i++) {
    const lastIdx = prices.length - (i + 1)
    if (i < lastIdx) {
      currentSale =
        prices[lastIdx] > currentSale ? prices[lastIdx] : currentSale
      maxPrice = prices[i] < maxPrice ? prices[i] : maxPrice
    } else {
      break
    }
  }

  const result = currentSale - maxPrice
  return result > 0 ? result : -1
}
