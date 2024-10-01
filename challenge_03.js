export default function isValid(letter) {
  if (letter.includes('{') || letter.includes('[')) return false

  const toArray = [...letter]
  const stack = []

  for (let i = 0; i < toArray.length; i++) {
    const elm = toArray[i]

    if (elm === '(' && toArray[i + 1] === ')') {
      return false
    }

    if (elm === '(') {
      stack.push(elm)
    } else if (elm === ')') {
      stack.pop()
    }
  }

  return stack.length === 0
}
