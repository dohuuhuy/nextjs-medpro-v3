import { NewsActions, NewsState, NewsTypes } from '@store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const init: NewsState = {
  newsAndEvent: [],
  listNewsBanner: [],
  listNewsContent: [],
  totalPages: 0
}

export default function newsReducer(
  state = init,
  action: NewsActions | { type: typeof HYDRATE; payload: NewsState }
): NewsState {
  switch (action.type) {
    case NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        newsAndEvent: action.newsPin.concat(action.news)
      }

    case NewsTypes.ListNewsBanner.LIST_NEWS_BANNER_REQUEST_SUCCESS:
      return {
        ...state,
        listNewsBanner: action.listNewsBanner
      }

    case NewsTypes.ListNewsContent.LIST_NEWS_CONTENT_REQUEST_SUCCESS:
      return {
        ...state,
        listNewsContent: action.listNewsContent
      }
    case NewsTypes.CountNewsContent.COUNT_NEWS_CONTENT_REQUEST_SUCCESS:
      return {
        ...state,
        totalPages: action.totalPages
      }
    default:
      return state
  }
}
