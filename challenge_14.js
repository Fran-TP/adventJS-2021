/**
 * Finds the missing reindeer ID from the given list of IDs.
 *
 * @param {number[]} ids - An array of integers representing the IDs of reindeers.
 * @returns {number} The missing reindeer ID.
 */
const missingReindeer = ids => {
  const n = ids.length
  const expectedSum = (n * (n + 1)) / 2
  const actualSum = ids.reduce((acc, curr) => acc + curr, 0)
  return expectedSum - actualSum
}

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([1])) // -> 0
console.log(
  missingReindeer([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21,
    22, 23,
  ])
) // -> 20
