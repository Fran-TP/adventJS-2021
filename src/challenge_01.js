/**
 * Filters an array of sheep objects to return only those that are red in color
 * and have names containing both 'n' and 'a' (case insensitive).
 *
 * @param {Array} sheep - The array of sheep objects to filter.
 * @param {string} sheep[].name - The name of the sheep.
 * @param {string} sheep[].color - The color of the sheep.
 * @returns {Array} - An array of sheep objects that meet the criteria.
 */
const countSheep = sheep => {
  const colorAccepted = 'rojo'
  const regExp = /(?=.*n)(?=.*a)/i

  return sheep.filter(s => s.color === colorAccepted && regExp.test(s.name))
}

// test
const sheep = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

console.log(countSheep(sheep))
