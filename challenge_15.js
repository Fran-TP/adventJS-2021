const checkSledJump = heights => {
  const n = heights.length

  if (n < 3) return false

  let i = 0

  while (i < n - 1 && heights[i] < heights[i + 1]) {
    i++
  }

  if (i === 0 || i === n - 1) return false

  while (i < n - 1 && heights[i] > heights[i + 1]) {
    i++
  }

  return i === n - 1
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!
