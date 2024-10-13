/**
 * Checks if a given letter (string) contains valid parentheses.
 * A letter is considered valid if:
 * - It does not contain '{' or '[' characters.
 * - It does not contain empty parentheses '()'.
 * - All opened parentheses '(' are properly closed with ')'.
 *
 * @param {string} letter - The string to be checked for valid parentheses.
 * @returns {boolean} - Returns true if the letter contains valid parentheses, otherwise false.
 */
const isValid = letter => {
  if (letter.includes('{') || letter.includes('[')) return false

  const stack = []

  for (let i = 0; i < letter.length; i++) {
    const elm = letter[i]

    if (elm === '(' && letter[i + 1] === ')') {
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

// test
console.log(isValid('bici coche (balón) bici coche peluche')) // true
console.log(isValid('(muñeca) consola bici')) // true
console.log(isValid('bici coche (balón bici coche')) // false
console.log(isValid('peluche (bici [coche) bici coche balón')) // false
