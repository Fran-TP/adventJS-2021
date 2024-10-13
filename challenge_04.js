/**
 * Creates a string representation of a Christmas tree of a given height.
 *
 * @param {number} height - The height of the Christmas tree.
 * @returns {string} A string representation of the Christmas tree with the specified height.
 *
 * The tree consists of '*' characters for the leaves and '#' characters for the trunk.
 * Each level of the tree is centered with '_' characters.
 *
 * Example:
 * createXmasTree(3) will return:
 *   "__*__\n"
 *   "_***_\n"
 *   "*****\n"
 *   "__#__\n"
 *   "__#__"
 */
const createXmasTree = height => {
  let tree = ''
  const trunk = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`
  for (let i = 1; i <= height; i++) {
    tree += `${'_'.repeat(height - (i - 1) - 1)}${'*'.repeat(
      2 * i - 1
    )}${'_'.repeat(height - (i - 1) - 1)}${i === height ? '' : '\n'}`
  }

  return `${tree}\n${trunk}\n${trunk}\n`.trim()
}

const height = 3

console.log(createXmasTree(height))
