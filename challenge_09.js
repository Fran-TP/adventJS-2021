const groupBy = (collection, it) => {
  let object = {}

  for (const item of collection) {
    if (typeof it === 'function') {
      object = {
        ...object,
        [it(item)]: collection.filter(v => it(v) === it(item)),
      }
    } else {
      object = {
        ...object,
        [item[it]]: collection.filter(v => v[it] === item[it]),
      }
    }
  }

  return object
}
