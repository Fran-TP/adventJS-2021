const checkIsSameTree = (treeA, treeB) => {
  if (treeA === null || treeB === null) return false

  const queueA = [treeA]
  const queueB = [treeB]

  while (queueA.length > 0) {
    const nodeA = queueA.shift()
    const nodeB = queueB.shift()

    if (nodeA.value !== nodeB.value) return false

    if (nodeA.left !== null && nodeB.left !== null) {
      queueA.push(nodeA.left)
      queueB.push(nodeB.left)
    }

    if (nodeA.right !== null && nodeB.right !== null) {
      queueA.push(nodeA.right)
      queueB.push(nodeB.right)
    }
  }

  return true
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
