const regExp = /[\wáéíóúñ]+/gi

export default function listGifts(letter) {
  const result = letter.match(regExp).reduce((prev, curr) => {
    if (!curr.startsWith('_')) {
      prev[curr] ??= 0
      prev[curr]++
    }

    return prev
  }, {})

  return result
}
