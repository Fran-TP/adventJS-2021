/**
 * Checks if two binary trees are the same.
 *
 * @param {Object} treeA - The root node of the first binary tree.
 * @param {Object} treeB - The root node of the second binary tree.
 * @returns {boolean} True if the two binary trees are the same, false otherwise.
 */
const checkIsSameTree = (treeA, treeB) => {
  if (treeA === null && treeB === null) return true
  if (treeA === null || treeB === null) return false
  if (treeA.value !== treeB.value) return false

  return (
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right)
  )
}

// test
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree)) // true
console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true
