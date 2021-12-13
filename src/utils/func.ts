import { currentEnv } from '@src/config/envs'

export const fetcherGuide = (url: string) =>
  fetch(url, {
    headers: { type: 'guide-booking', partnerid: 'medpro' }
  }).then((res) => res.json())

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

const time = new Date().getTime()

export const banner = (e: any) => {
  return `${currentEnv.API_Image}/static/images/${e}/web/banner_desktop.png?n=${time}`
}

export const HandleModile = (text: string) => {
  const str1 = text.slice(0, 4)
  const str2 = text.slice(4, 7)
  const str3 = text.slice(7, 10)
  return str1.concat(" " + str2 + " " + str3)
}

export const changeSex = (sex: number) => {
  return sex ? "Nam" : "Nữ"
}
