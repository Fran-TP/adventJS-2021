export default function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    const target = result - numbers[i]

    if (numbers.includes(target) && numbers.lastIndexOf(target) > i) {
      return [numbers[i], target]
    }
  }

  return null
}
