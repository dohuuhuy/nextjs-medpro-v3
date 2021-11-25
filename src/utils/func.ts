import { currentEnv } from '@config/envs/env'

export const fetcherGuide = (url: string) =>
  fetch(url, {
    headers: { type: 'guide-booking', partnerid: 'medpro' }
  }).then((res) => res.json())

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

const time = new Date().getTime()

export const banner = (e: any) => {
  return `${currentEnv.API_Image}/static/images/${e}/web/banner_desktop.png?n=${time}`
}
