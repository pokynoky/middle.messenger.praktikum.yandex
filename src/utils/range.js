export function range(start, end, step, isRight) {
  if (end === undefined) {
    end = start
    start = 0
  }
  if (step === undefined) {
    step = start < end ? 1 : -1
  }

  const res = []

  if (step === 0) {
    const count = Math.abs(end) - Math.abs(start)
    for (let idx = 0; idx < count; idx++) {
      res.push(start)
    }
    return res
  }

  while (Math.abs(start) < Math.abs(end)) {
    res.push(start)
    start += step
  }

  return isRight ? res.reverse() : res
}
