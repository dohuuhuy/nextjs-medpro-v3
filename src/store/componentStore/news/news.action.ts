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

export const getListNewsContent = (): NewsActions => {
  return {
    type: NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST
  }
}