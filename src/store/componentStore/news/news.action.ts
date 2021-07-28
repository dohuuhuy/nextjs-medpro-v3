import { NewsActions, NewsTypes } from '@store/interface'

export const getNewsAndEvent = (): NewsActions => {
  return {
    type: NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST
  }
}

export const getListNewsBanner = (): NewsActions => {
  return {
    type: NewsTypes.ListNewsBanner.LISTNEWSBANNER_REQUEST
  }
}

export const getListNewsContent = (): NewsActions => {
  return {
    type: NewsTypes.ListNewsContent.LISTNEWSCONTENT_REQUEST
  }
}
