export function isEmpty(value) {
  if (typeof value === 'string') {
    return value.trim() === '' ? true : false
  }
  if (value !== null && typeof value === 'object') {
    if (Array.isArray(value)) {
    return !value.length
    } else {
    return !(Object.keys(value).length || value.size)
    }
  }
  return true
}
