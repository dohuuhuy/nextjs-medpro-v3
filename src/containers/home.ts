import api from '@store/api'

export const HomeCtl = async (_ctx: any) => {
  const newsAndEvent = await getNewsAndEvent()

  return {
    newsAndEvent
  }
}

const getNewsAndEvent = async () => {
  try {
    const urlPin = `https://cms.medpro.com.vn/posts?pin_in=true&categories.slug=tin-tuc&_limit=1&_sort=updated_at:desc`
    const newsPin: any = await api(urlPin)

    const url = `https://cms.medpro.com.vn/posts?&categories.slug=tin-tuc&_limit=5&_sort=updated_at:desc`
    const news: any = await api(url)
    return newsPin.data.concat(news.data)
  } catch (error) {
    console.error(error)
    return null
  }
}
