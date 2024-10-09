const fixFiles = files => {
  const filesMap = new Map()
  const result = []

  for (const file of files) {
    if (!filesMap.has(file)) {
      filesMap.set(file, 0)
      result.push(file)
    } else {
      const count = filesMap.get(file) + 1
      const fileName = `${file}(${count})`

      filesMap.set(file, count)
      result.push(fileName)
    }
  }

  return result
}

// test
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

// const files2 = ['file', 'file', 'file', 'game', 'game']
// console.log(fixFiles(files2)) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
// const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
// console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
