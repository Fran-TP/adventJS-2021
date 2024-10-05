const wrapGifts = gifts => {
  const len = gifts.length + 2
  const arr = Array.from({ length: len }, (_, idx) => {
    return idx === 0 || idx === len - 1
      ? '*'.repeat(gifts[0].length + 2)
      : `*${gifts[idx - 1]}*`
  })

  return arr
}
console.log(wrapGifts(['📷', '⚽️']))
console.log(wrapGifts(['🏈🎸', '🎮🧸']))
console.log(wrapGifts(['📷']))
