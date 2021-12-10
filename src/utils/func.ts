import { currentEnv } from '@src/config/envs'
import { urlApi } from './contants'

export const fetcherGuide = (url: string) =>
  fetch(url, {
    headers: { type: 'guide-booking', partnerid: 'medpro' }
  }).then((res) => res.json())

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

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
