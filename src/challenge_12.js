/**
 * Calculates the minimum jump length needed to avoid all obstacles.
 *
 * @param {number[]} obstacles - An array of integers representing the positions of obstacles.
 * @returns {number} The minimum jump length required to avoid all obstacles.
 */
const getMinJump = obstacles => {
  const len = Math.max(...obstacles) + 1
  let increment = 1

  for (let i = 0; i <= len; i += increment) {
    if (obstacles.includes(i)) {
      i = 0
      increment++
    }
  }

  return increment
}

// test

console.log(getMinJump([5, 3, 6, 7, 9])) // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])) // -> 7
console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2
