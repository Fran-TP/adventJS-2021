export default function isValid(letter) {
  const match = letter.match(/\([\wáéíóúñ]*\)*/g)
  const stack = []

  for (const item of match) {
    if (item.includes('{') || item.includes('[')) {
      return false
    }

    if (!/[a-záéíóúñ]+/gi.test(item)) {
      return false
    }

    for (let i = 0; i < item.length; i++) {
      if (item[i] == '(') {
        stack.push(item[i])
      } else if (item[i] === ')') {
        stack.pop()
      }
    }
  }

  return stack.length === 0
}
