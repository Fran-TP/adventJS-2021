/**
 * Checks if a given letter is a pangram in Spanish.
 *
 * @param {string} letter - The letter to check.
 * @returns {boolean} True if the letter is a pangram, false otherwise.
 */
const pangram = letter => {
  const SPANISH_SIZE_PANGRAM = 27
  const pangramRange = /[a-z\u00C0-\u017E]/gi
  const accentMap = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u'
  }

  const matchPangramChars = letter.toLowerCase().match(pangramRange)
  if (!matchPangramChars) return false

  const uniqueChars = new Set()

  for (const char of matchPangramChars) {
    uniqueChars.add(accentMap[char] || char)
  }

  return uniqueChars.size === SPANISH_SIZE_PANGRAM
}

// test
console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(
  pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
) // true
console.log(
  pangram(
    'Esto es una frase larga pero no tiene todas las letras del abecedario'
  )
) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false
