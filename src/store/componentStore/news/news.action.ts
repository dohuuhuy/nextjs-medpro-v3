import { news_Action, news_Types } from '@store/interface'

export const getNewsAndEvent = (): news_Action => {
  return {
    type: news_Types.NewsAndEvent.NewsAndEvent_REQUEST
  }
}
