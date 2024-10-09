const fixFiles = files => {
  const occurrenceMap = files.reduce((acc, curr, idx) => {
    acc[curr] ??= { occurrenceIndexes: [] }
    acc[curr] = {
      occurrenceIndexes: [...acc[curr].occurrenceIndexes, idx]
    }

    return acc
  }, {})

  const result = Object.entries(occurrenceMap)
    .flatMap(([key, { occurrenceIndexes }]) =>
      occurrenceIndexes.map((index, selfIdx) =>
        selfIdx === 0
          ? { file: key, index }
          : { file: `${key}(${selfIdx})`, index }
      )
    )
    .sort(({ index: a }, { index: b }) => a - b)
    .map(({ file }) => file)

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
