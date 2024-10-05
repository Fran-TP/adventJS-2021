/**
 * Calculates the minimum jump length needed to avoid all obstacles.
 *
 * @param {number[]} obstacles - An array of integers representing the positions of obstacles.
 * @returns {number} The minimum jump length required to avoid all obstacles.
 */
const getMinJump = obstacles => {
  // Create an array where each index represents a position, and the value is 1 if there's an obstacle, 0 otherwise
  const arr = Array.from({ length: Math.max(...obstacles) + 1 }, (_, idx) =>
    obstacles.includes(idx) ? 1 : 0
  )

  let increment = 1
  // Iterate through the array with steps of 'increment'
  for (var i = 0; i <= arr.length; i += increment) {
    // If an obstacle is found at the current position
    if (arr[i] === 1) {
      // Reset the position and increase the jump length
      i = 0
      increment++
    }
  }

  return increment
}

console.log(getMinJump([5, 3, 6, 7, 9])) // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])) // -> 7
console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2
