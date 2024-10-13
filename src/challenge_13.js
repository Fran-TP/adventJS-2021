/**
 * Wraps an array of gifts with a border of asterisks.
 *
 * @param {string[]} gifts - An array of strings representing the gifts to be wrapped.
 * @returns {string[]} An array of strings where each gift is wrapped with a border of asterisks.
 *                      The first and last elements of the array are the top and bottom borders, respectively.
 *
 * @example
 * // returns ["****", "*cat*", "*dog*", "****"]
 * wrapGifts(["cat", "dog"]);
 *
 * @example
 * // returns ["*****", "*ball*", "*doll*", "*****"]
 * wrapGifts(["ball", "doll"]);
 */
const wrapGifts = gifts => {
  if (gifts.length === 0) return []

  const giftLength = gifts[0].length
  const border = '*'.repeat(giftLength + 2)
  const wrappedGifts = gifts.map(gift => `*${gift}*`)

  return [border, ...wrappedGifts, border]
}

// test
console.log(wrapGifts(['📷', '⚽️']))
console.log(wrapGifts(['🏈🎸', '🎮🧸']))
console.log(wrapGifts(['📷']))
