/**
 * Groups the elements of a collection by a specified criterion.
 *
 * @param {Array} collection - The array of elements to be grouped.
 * @param {Function|string} it - The criterion by which to group the elements.
 *                               If a function is provided, it will be used to determine the group key for each element.
 *                               If a string is provided, it will be used as the key to group by the property of each element.
 * @returns {Object} An object where the keys are the group identifiers and the values are arrays of elements that belong to each group.
 */
const groupBy = (collection, it) => {
  const object = {}
  const cb = typeof it === 'function' ? it : v => v[it]

  for (const item of collection) {
    object[cb(item)] ??= []
    object[cb(item)].push(item)
  }

  return object
}

// Test cases

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }

console.log(
  groupBy([1397639141184, 1363223700000], timestamp =>
    new Date(timestamp).getFullYear()
  )
)
// { 2013: [1363223700000], 2014: [1397639141184] }

console.log(
  groupBy(
    [
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 }
    ],
    'rating'
  )
)
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
