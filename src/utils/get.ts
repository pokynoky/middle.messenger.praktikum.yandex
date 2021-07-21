type SomeObject = {
  [key: string]: any
}

export function get(obj: SomeObject, path: string, defaultValue?: unknown): unknown {
  const keys = path.split('.')

  let result = obj
  for (let key of keys) {
    result = result[key]

    if (result === undefined) {
      return defaultValue        
    }
  }

  return result === undefined ? defaultValue : result
}