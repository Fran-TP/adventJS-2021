/**
 * Finds the best pair of courses that can be taken within the given time.
 *
 * @param {number} time - The total available time to take courses.
 * @param {number[]} courses - An array of course durations.
 * @returns {number[]|null} - An array containing the indices of the two courses that best fit the available time, or null if no valid pair is found.
 */
const learn = (time, courses) => {
  let bestPair = null
  let maxTimeUsed = 0

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const totalTime = courses[i] + courses[j]

      if (totalTime <= time && totalTime > maxTimeUsed) {
        maxTimeUsed = totalTime
        bestPair = [i, j]
      }
    }
  }

  return bestPair
}

// test
console.log(learn(10, [2, 3, 8, 1, 4])) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
console.log(learn(15, [2, 10, 4, 1])) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
console.log(learn(25, [10, 15, 20, 5])) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
console.log(learn(8, [8, 2, 1])) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
console.log(learn(8, [8, 2, 1, 4, 3])) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.
console.log(learn(4, [10, 14, 20])) // null -> no nos da tiempo a hacer dos cursos
console.log(learn(5, [5, 5, 5])) // null -> no nos da tiempo a hacer dos cursos
