import { NewsActions, NewsTypes } from '@store/interface'

export const getNewsAndEvent = (): NewsActions => {
  return {
    type: NewsTypes.NewsAndEvent.NewsAndEvent_REQUEST
  }
}

export const getListNewsBanner = (): NewsActions => {
  return {
    type: NewsTypes.ListNewsBanner.ListNewsBanner_REQUEST
  }
}
