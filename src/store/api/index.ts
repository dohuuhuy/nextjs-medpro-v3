import axios from 'axios'

// --------------------------------------------------------------

export const getData = async (url: any) => {
  const res = await axios.get(url, { headers: { partnerid: 'medpro' } })
  const { data } = res
  return data
}

// --------------------------------------------------------------\

export const countData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data.length
}

// --------------------------------------------------------------

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api
