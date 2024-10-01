function maxProfit(prices) {
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    const potentialProfit = currentPrice - minPrice

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit
    }

    if (currentPrice < minPrice) {
      minPrice = currentPrice
    }
  }

  return maxProfit > 0 ? maxProfit : -1
}
