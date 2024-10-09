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
  const normalizedChars = matchPangramChars.map(char =>
    typeof accentMap[char] === 'undefined' ? char : accentMap[char]
  )

  return new Set(normalizedChars).size === SPANISH_SIZE_PANGRAM
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
