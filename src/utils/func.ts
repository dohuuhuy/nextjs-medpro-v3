import { currentEnv } from '@src/config/envs'
import { urlApi } from './contants'

export const HandleModile = (text = '') => {
  if (!text) {
    return ''
  }

  const str1 = text.slice(0, 4)
  const str2 = text.slice(4, 7)
  const str3 = text.slice(7, 10)
  return str1.concat(' ' + str2 + ' ' + str3)
}

export const changeSex = (sex: any) => {
  return sex ? 'Nam' : 'Nữ'
}

export const fetcherGuide = async (url: string) => {
  try {
    const res = await timeout(
      3000,
      fetch(url, {
        headers: { type: 'guide-booking', partnerid: 'medpro' }
      })
    )
    return await res.json()
  } catch (error) {
    return {
      error: true
    }
  }
}

export const fetcher = (url: string) => {
  try {
    return fetch(url)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    return null
  }
}

const time = new Date().getTime()

export const banner = (e: any) => {
  return `${currentEnv.API_Image}/static/images/${e}/web/banner_desktop.png?n=${time}`
}

export const urlAddressType = (type: any, id: any) => {
  let url

  switch (type) {
    case 'city':
      url = urlApi.urlAddress + '?country_code=' + id
      break

    case 'district':
      url = urlApi.urlAddress + '?city_id=' + id
      break

    case 'ward':
      url = urlApi.urlAddress + '?district_id=' + id
      break
  }

  return url
}

export async function timeout<T>(ms: any, promise: any): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'))
    }, ms)
    resolve(await promise)
  })
}
