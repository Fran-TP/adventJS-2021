/**
 * Calculates the number of days remaining until Christmas (December 25, 2021).
 *
 * @param {Date} date - The date from which to calculate the remaining days until Christmas.
 * @returns {number} The number of days remaining until Christmas. If the date is after Christmas, the number will be negative.
 */
const daysToXmas = date => {
  const xmasDate = new Date('Dec 25, 2021')
  const diffInMs = xmasDate.getTime() - date.getTime()

  const remainingDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

  return remainingDays
}

// test
const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date('December 20, 2021 03:24:00')
console.log(daysToXmas(date4)) // 5
const date5 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1)) // -1
const date6 = new Date('Dec 31, 2021')
console.log(daysToXmas(date2)) // -6
