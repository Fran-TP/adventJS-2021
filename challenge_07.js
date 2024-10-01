const findProduct = (object, productToFind) => {
  for (const key in object) {
    const value = object[key]

    if (typeof value === 'object') {
      if (findProduct(value, productToFind)) {
        return true
      }
    } else if (value === productToFind) {
      return true
    }
  }

  return false
}
