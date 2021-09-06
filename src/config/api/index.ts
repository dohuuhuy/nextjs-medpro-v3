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
