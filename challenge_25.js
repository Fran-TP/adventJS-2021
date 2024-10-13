const canMouseEat = (direction, game) => {
  let position = null
  const directionMap = {
    up: -1,
    down: 1,
    right: 1,
    left: -1
  }

  for (let y = 0; y < game.length; y++) {
    for (let x = 0; x < game[y].length; x++) {
      if (game[y][x] === 'm') {
        position = { y, x }
        break
      }
    }
  }

  let newPosition = null

  if (direction === 'up' || direction === 'down') {
    newPosition = {
      y: position.y + directionMap[direction],
      x: position.x
    }
  } else {
    newPosition = {
      y: position.y,
      x: position.x + directionMap[direction]
    }
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
