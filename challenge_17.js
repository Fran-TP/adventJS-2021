const countPackages = (carriers, carrierID) => {
  const carrier = carriers.find(([id]) => id === carrierID)

  if (!carrier) return 0

  const [_, packages, subordinates] = carrier

  let totalPackages = packages

  for (const subordinate of subordinates) {
    totalPackages += countPackages(carriers, subordinate)
  }

  return totalPackages
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
