import { urlJson } from '@src/utils/contants'
import { fetcher } from '@utils/func'

export const HomeCtl = async (_ctx: any) => {
  const newsAndEvent = await getNewsAndEvent()

  const deployHospital = await fetcher(urlJson.urldeployHospital)

  return { deployHospital, newsAndEvent }
}

const getNewsAndEvent = async () => {
  try {
    const urlPin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: any = await fetcher(urlPin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: any = await fetcher(url)
    return newsPin.concat(news)
  } catch (error) {
    console.error(error)
    return null
  }
}
