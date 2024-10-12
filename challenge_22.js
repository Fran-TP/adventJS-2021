/**
 * Counts the total number of decorations in a binary tree.
 *
 * @param {Object} node - The root node of the binary tree.
 * @param {number} node.value - The value of the node.
 * @param {Object|null} node.left - The left child node.
 * @param {Object|null} node.right - The right child node.
 * @returns {number} The total number of decorations in the binary tree.
 */
const countDecorations = node => {
  if (node === null) return 0

  return node.value + countDecorations(node.left) + countDecorations(node.right)
}

// test
const tree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
}

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

console.log(countDecorations(tree)) // 6
console.log(countDecorations(bigTree)) // 28
