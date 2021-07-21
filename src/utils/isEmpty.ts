export function isEmpty(value: unknown): boolean {
  if (typeof value === 'string') {
    return value.trim() === '' ? true : false
  }
  if (value !== null && typeof value === 'object') {
    if (Array.isArray(value)) {
      return !value.length
    } else if (typeof value === 'object') {
      return !(Object.keys(value).length)
    }
  }
  return true
}
