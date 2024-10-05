const wrapGifts = gifts => {
  if (gifts.length === 0) return []

  const giftLength = gifts[0].length
  const border = '*'.repeat(giftLength + 2)
  const wrappedGifts = gifts.map(gift => `*${gift}*`)

  return [border, ...wrappedGifts, border]
}
console.log(wrapGifts(['📷', '⚽️']))
console.log(wrapGifts(['🏈🎸', '🎮🧸']))
console.log(wrapGifts(['📷']))
