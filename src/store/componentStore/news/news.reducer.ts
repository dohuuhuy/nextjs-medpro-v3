import { NewsActions, NewsState, NewsTypes } from '@store/interface'

const init: NewsState = {
  newsAndEvent: [],
  listNewsBanner: [],
  listNewsContent: []
}

export default function newsReducer(state = init, action: NewsActions) {
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

    case NewsTypes.ListNewsContent.LISTNEWSCONTENT_REQUEST_SUCCESS:
      return {
        ...state,
        listNewsContent: action.listNewsContent
      }

    default:
      return state
  }
}
