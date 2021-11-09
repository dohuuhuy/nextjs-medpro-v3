export const api = (url: any) => {
  return fetch(url)
    .then((rs) => {
      return rs ? rs.json() : null
    })
    .catch(() => {
      return null
    })
}
