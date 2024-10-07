//cSpell: disable

const colorAccepted = 'rojo'
const regExp = /(?=.*n)(?=.*a)/i

const countSheep = sheep => {
  return sheep.filter(s => s.color === colorAccepted && regExp.test(s.name))
}

const sheep = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

console.log(countSheep(sheep))
