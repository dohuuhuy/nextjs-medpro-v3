import cache from 'memory-cache'

export const api = async (url: any) => {
  const option: any = {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0
    }
  }
  return fetch(url, option)
    .then((rs) => {
      return rs ? rs.json() : null
    })
    .catch(() => {
      return null
    })
}

export const cachedFetch = async (url: RequestInfo) => {
  const cachedResponse = cache.get(url)
  if (cachedResponse) {
    return cachedResponse
  } else {
    const hours = 24
    const response = await fetch(url)
    const data = await response.json()
    cache.put(url, data, hours * 1000 * 60 * 60)
    return data
  }
}
