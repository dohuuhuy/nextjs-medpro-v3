export const api = (url: any) => {
  const option: any = {
    headers: {
      'Cache-Control': 'public, max-age=1500, must-revalidate'
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
