import { NewsActions, NewsState, NewsTypes } from '@store/interface'

const news_InitialState: NewsState = {
  newsAndEvent: [],
  listNewsBanner: []
}

export default function newsReducer(
  state = news_InitialState,
  action: NewsActions
) {
  switch (action.type) {
    case NewsTypes.NewsAndEvent.NewsAndEvent_REQUEST_SUCCESS:
      return {
        ...state,
        newsAndEvent: action.newsPin.concat(action.news)
      }

    case NewsTypes.ListNewsBanner.ListNewsBanner_REQUEST_SUCCESS:
      return {
        ...state,
        listNewsBanner: action.listNewsBanner
      }

    default:
      return state
  }
}
