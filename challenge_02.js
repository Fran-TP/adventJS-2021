/**
 * Parses a letter to list the gifts mentioned in it.
 *
 * The function splits the letter by whitespace, filters out any words that start with an underscore,
 * and counts the occurrences of each gift.
 *
 * @param {string} letter - The letter containing the list of gifts.
 * @returns {Object} An object where the keys are the names of the gifts and the values are the counts of each gift.
 */
export default function listGifts(letter) {
  const toArray = letter.split(/\s+/)

  const result = toArray.reduce((prev, curr) => {
    if (!curr.startsWith('_')) {
      prev[curr] ??= 0
      prev[curr]++
    }

    return prev
  }, {})

  return result
}

// test
const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
