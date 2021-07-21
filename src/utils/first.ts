export function first<T>(list: T[]): T | undefined {
	if (Array.isArray(list)) {
    return list.length ? list[0] : undefined
  }
  return undefined
}
