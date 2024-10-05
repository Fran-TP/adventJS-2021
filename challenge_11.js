// implicit solution
export default function fShouldBuyFidelity(times) {
  return times > 23
}

export const shouldBuyFidelity = times => {
  const SINGLE_TICKET_COST = 12
  const FIDELITY_CARD_COST = 250

  const seriesSum =
    (SINGLE_TICKET_COST * (0.75 * (1 - Math.pow(0.75, times)))) / (1 - 0.75)

  const totalSingleTicketCost = SINGLE_TICKET_COST * times
  const totalFidelityCardCost = FIDELITY_CARD_COST + seriesSum

  return totalFidelityCardCost < totalSingleTicketCost
}
