import { currentEnv } from '@config/envs/env'

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

const time = new Date().getTime()

export const banner = (e: any) => {
  return `${currentEnv.API_Image}/static/images/${e}/web/banner_desktop.png?n=${time}`
}
