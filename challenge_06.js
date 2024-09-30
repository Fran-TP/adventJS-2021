export default function sumPairs(numbers, result) {
  const diffs = numbers.map((value, idx) => ({
    value,
    diff: result - value,
    idx,
  }))

  for (const { value, diff, idx } of diffs) {
    if (numbers.includes(diff) && numbers.lastIndexOf(diff) > idx) {
      return [value, diff]
    }
  }

  return null
}
