export const api = (url: any) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  headers.append(
    'Access-Control-Allow-Origin',
    'https://resource-testing.medpro.com.vn'
  )
  headers.append('Access-Control-Allow-Credentials', 'true')

  const option: any = {
    headers
  }
  return fetch(url, option)
    .then((rs) => {
      return rs ? rs.json() : null
    })
    .catch(() => {
      return null
    })
}
