/**
 * Counts the total number of packages for a carrier and its subordinates.
 *
 * @param {Array} carriers - An array of carriers, each represented by an array with the carrier ID, number of packages, and subordinates.
 * @param {string} carrierID - The ID of the carrier to start counting from.
 * @returns {number} The total number of packages for the carrier and its subordinates.
 */
const countPackages = (carriers, carrierID) => {
  const carrierMap = new Map(
    carriers.map(([id, packages, subordinates]) => [
      id,
      { packages, subordinates }
    ])
  )

  const count = id => {
    const carrier = carrierMap.get(id)
    if (!carrier) return 0

    const { packages, subordinates } = carrier
    return packages + subordinates.reduce((total, sub) => total + count(sub), 0)
  }

  return count(carrierID)
}

// test
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]
const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log(countPackages(carriers, 'dapelu')) // 9
console.log(countPackages(carriers2, 'camila')) // 15
