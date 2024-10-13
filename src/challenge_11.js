/**
 * Determines if buying a fidelity card is more cost-effective than buying single tickets.
 *
 * @param {number} times - The number of times the service will be used.
 * @returns {boolean} - Returns true if buying the fidelity card is cheaper, otherwise false.
 */
export default function fShouldBuyFidelity(times) {
  return times > 23
}

/**
 * Determines if buying a fidelity card is more cost-effective than buying single tickets.
 *
 * @param {number} times - The number of times the service will be used.
 * @returns {boolean} - Returns true if buying the fidelity card is cheaper, otherwise false.
 */
export const shouldBuyFidelity = times => {
  const SINGLE_TICKET_COST = 12
  const FIDELITY_CARD_COST = 250

  const seriesSum =
    (SINGLE_TICKET_COST * (0.75 * (1 - 0.75 ** times))) / (1 - 0.75)

  const totalSingleTicketCost = SINGLE_TICKET_COST * times
  const totalFidelityCardCost = FIDELITY_CARD_COST + seriesSum

  return totalFidelityCardCost < totalSingleTicketCost
}

// test

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
