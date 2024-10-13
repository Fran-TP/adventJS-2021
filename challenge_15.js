/**
 * Checks if the given heights form a strict up and down sequence.
 *
 * @param {number[]} heights - An array of integers representing the heights.
 * @returns {boolean} True if the heights form a strict up and down sequence, false otherwise.
 */
const checkSledJump = heights => {
  const n = heights.length
  if (n < 3) return false

  let peakFound = false

  for (let i = 1; i < n; i++) {
    if (heights[i] === heights[i - 1]) {
      return false // No equal heights allowed
    }
    if (!peakFound) {
      if (heights[i] < heights[i - 1]) {
        if (i === 1) return false // Peak can't be the first element
        peakFound = true
      }
    } else {
      if (heights[i] > heights[i - 1]) {
        return false // Should strictly decrease after peak
      }
    }
  }

  return peakFound
}

// test

console.log(checkSledJump([1, 2, 3, 2, 1])) // -> true
console.log(checkSledJump([0, 1, 0])) // -> true
console.log(checkSledJump([0, 3, 2, 1])) // -> true
console.log(checkSledJump([0, 1000, 1])) // -> true
console.log(checkSledJump([2, 4, 4, 6, 2])) // -> false
console.log(checkSledJump([1, 2, 3])) // -> false
console.log(checkSledJump([3, 2, 1])) // -> false
