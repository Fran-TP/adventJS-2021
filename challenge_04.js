export default function createXmasTree(height) {
  let tree = ''
  const trunk = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`
  for (let i = 1; i <= height; i++) {
    tree += `${'_'.repeat(height - (i - 1) - 1)}${'*'.repeat(
      2 * i - 1
    )}${'_'.repeat(height - (i - 1) - 1)}${i === height ? '' : '\n'}`
  }

  return `${tree}\n${trunk}\n${trunk}\n`.trim()
}
