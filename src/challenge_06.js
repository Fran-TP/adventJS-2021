/**
 * Finds the first pair of numbers in the given array that add up to the specified result.
 *
 * @param {number[]} numbers - The array of numbers to search through.
 * @param {number} result - The target sum for the pair of numbers.
 * @returns {number[]|null} - An array containing the pair of numbers that add up to the result, or null if no such pair exists.
 */
const sumPairs = (numbers, result) => {
  for (let i = 0; i < numbers.length; i++) {
    const target = result - numbers[i]

    if (numbers.includes(target) && numbers.lastIndexOf(target) > i) {
      return [numbers[i], target]
    }
  }

  return null
}

// test
console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]
