/**
 * Checks if the gifts can be carried within the given capacity for the entire trip.
 *
 * @param {number} capacity - The maximum capacity of gifts that can be carried.
 * @param {Array} trip - An array of trips, each represented by an array with the number of gifts, pick-up point, and delivery point.
 * @returns {boolean} True if the gifts can be carried within the capacity, false otherwise.
 */
const canCarry = (capacity, trip) => {
  const events = []

  for (const [gifts, pickUp, delivery] of trip) {
    events.push([pickUp, gifts])
    events.push([delivery, -gifts])
  }

  events.sort((a, b) => a[0] - b[0])

  let currentLoad = 0

  for (const [, change] of events) {
    currentLoad += change
    if (currentLoad > capacity) return false
  }

  return true
}

// test
console.log(
  canCarry(4, [
    [2, 5, 8],
    [3, 6, 10]
  ])
) // true
console.log(
  canCarry(3, [
    [1, 1, 5],
    [2, 2, 10],
    [3, 3, 4]
  ])
) // false
console.log(
  canCarry(3, [
    [2, 1, 5],
    [3, 5, 7]
  ])
) // true
console.log(
  canCarry(4, [
    [2, 3, 8],
    [2, 5, 7]
  ])
) // true
console.log(canCarry(1, [[2, 3, 8]])) // false

export default canCarry
