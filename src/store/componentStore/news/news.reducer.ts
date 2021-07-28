import { NewsActions, NewsState, NewsTypes } from '@store/interface'

const init: NewsState = {
  newsAndEvent: [],
  listNewsBanner: []
}

export default function newsReducer(state = init, action: NewsActions) {
  switch (action.type) {
    case NewsTypes.NewsAndEvent.NEWS_AND_EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        newsAndEvent: action.newsPin.concat(action.news)
      }

    case NewsTypes.ListNewsBanner.LISTNEWSBANNER_REQUEST_SUCCESS:
      return {
        ...state,
        listNewsBanner: action.listNewsBanner
      }

    default:
      return state
  }
}
