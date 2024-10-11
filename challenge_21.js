const canCarry = (capacity, trip) => {
  let result = 0
  const routes = trip.reduce((acc, [gifts, pickUp, delivery]) => {
    if (!acc[pickUp]) {
      acc[pickUp] = gifts
    } else {
      acc[pickUp] += gifts
    }
    acc[delivery] ??= -gifts

    return acc
  }, {})

  for (const key in routes) {
    result += routes[key]
    console.log(result)
    if (result > capacity) return false
  }

  return true
}

export default canCarry
