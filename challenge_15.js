const checkSledJump = heights => {
  const maxHeight = Math.max(...heights)
  const idxOfMax = heights.indexOf(maxHeight)
  let prev = heights[0]

  if (idxOfMax === heights.length - 1) return false

  for (let i = 1; i < heights.length; i++) {
    const curr = heights[i]

    if (i < idxOfMax) {
      if (prev - curr >= 0) {
        return false
      }
    }

    if (i > idxOfMax) {
      if (prev - curr < 0) {
        return false
      }
    }

    prev = curr
  }

  return true
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!
