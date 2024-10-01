export default function daysToXmas(date) {
  const xmasDate = new Date('Dec 25, 2021')
  const diffInMs = xmasDate.getTime() - date.getTime()

  const remainingDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

  return remainingDays
}
