export default function listGifts(letter) {
  const toArray = letter.split(/\s+/)

  const result = toArray.reduce((prev, curr) => {
    if (!curr.startsWith('_')) {
      prev[curr] ??= 0
      prev[curr]++
    }

    return prev
  }, {})

  return result
}
