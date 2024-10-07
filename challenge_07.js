const contains = (object, productToFind) => {
  for (const key in object) {
    const value = object[key]

    if (typeof value === 'object') {
      if (contains(value, productToFind)) {
        return true
      }
    } else if (value === productToFind) {
      return true
    }
  }

  return false
}

//test
const products = {
  computers: {
    laptops: {
      macbook: 'macbook',
      chromebook: 'chromebook'
    },
    desktops: {
      imac: 'imac',
      mac: 'mac'
    }
  },
  phones: {
    android: 'android',
    iphone: 'iphone'
  }
}

console.log(contains(products, 'macbook')) // true
console.log(contains(products, 'android')) // true
console.log(contains(products, 'windows')) // false
console.log(contains(products, 'iphone 11')) // false
