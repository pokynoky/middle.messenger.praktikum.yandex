export function last(list) {
  if (Array.isArray(list)) {
    const len = list.length
    return len
      ? list[len - 1]
      : undefined
  }
  return undefined
}
