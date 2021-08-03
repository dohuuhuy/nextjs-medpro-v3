import axios from 'axios'
import { useRouter } from 'next/router'

//--------------------------------------------------------------

export const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

//--------------------------------------------------------------\

export const countData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data.length
}

//--------------------------------------------------------------

