/**
 * Calculates the maximum profit that can be achieved from a list of stock prices.
 * The function returns the maximum difference between a later selling price and an earlier buying price.
 * If no profit can be made, it returns -1.
 *
 * @param {number[]} prices - An array of stock prices where each element represents the price of the stock on a given day.
 * @returns {number} The maximum profit that can be achieved, or -1 if no profit can be made.
 */
const maxProfit = prices => {
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

// test
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
