/**
 * Checks if the mouse can eat the cheese in the given direction.
 *
 * @param {string} direction - The direction in which the mouse moves ('up', 'down', 'left', 'right').
 * @param {Array<Array<string>>} game - The game board represented as a 2D array.
 * @returns {boolean} True if the mouse can eat the cheese in the given direction, false otherwise.
 */
const canMouseEat = (direction, game) => {
  const directionMap = {
    up: { y: -1, x: 0 },
    down: { y: 1, x: 0 },
    left: { y: 0, x: -1 },
    right: { y: 0, x: 1 }
  }

  let position = null

  for (let y = 0; y < game.length; y++) {
    for (let x = 0; x < game[y].length; x++) {
      if (game[y][x] === 'm') {
        position = { y, x }
        break
      }
    }
    if (position) break
  }

  if (!position) return false

  const newPosition = {
    y: position.y + directionMap[direction].y,
    x: position.x + directionMap[direction].x
  }

  if (
    newPosition.y < 0 ||
    newPosition.y >= game.length ||
    newPosition.x < 0 ||
    newPosition.x >= game[0].length
  ) {
    return false
  }

  return game[newPosition.y][newPosition.x] === '*'
}

// test
const room = [
  ['1', '2', '3'],
  ['4', '5', 'm'],
  ['6', '7', '*']
]

console.log(canMouseEat('up', room)) // false
console.log(canMouseEat('down', room)) // true
console.log(canMouseEat('right', room)) // false
console.log(canMouseEat('left', room)) // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up', room2)) // false
console.log(canMouseEat('down', room2)) // false
console.log(canMouseEat('right', room2)) // true
console.log(canMouseEat('left', room2)) // false

const room3 = [['*', 'm']]

console.log(canMouseEat('up', room3)) // false
console.log(canMouseEat('down', room3)) // false
console.log(canMouseEat('right', room3)) // false
console.log(canMouseEat('left', room3)) // true
