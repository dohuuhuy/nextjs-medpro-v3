import { NewsActions, NewsTypes } from '@store/interface'

export const getNewsAndEvent = (): NewsActions => {
  return {
    type: NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST
  }
}

export const getListNewsBanner = (): NewsActions => {
  return {
    type: NewsTypes.ListNewsBanner.LIST_NEWS_BANNER_REQUEST
  }
}

export const getListNewsContent = (page: number): NewsActions => {
  return {
    type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST,
    page
  }
}

export const getCountNewsContent = (): NewsActions => {
  return {
    type: NewsTypes.CountNewsContent.COUNT_NEWS_CONTENT_REQUEST
  }
}

export const getDetailNews = (slug: string | string[] | undefined): NewsActions => {
  return {
    type: NewsTypes.DetailNews.DETAIL_NEWS_REQUEST,
    slug
  }
}

export const getSameNews = (): NewsActions => {
  return {
    type: NewsTypes.SameNews.SAME_NEWS_REQUEST
  }
}
