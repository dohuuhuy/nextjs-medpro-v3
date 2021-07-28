import { news_Action, news_State, news_Types } from '@store/interface'

const totalData_InitialState: news_State = {
  newsAndEvent: [],
  listNewsBanner: []
}

export default function news_Reducer(
  state = totalData_InitialState,
  action: news_Action
) {
  switch (action.type) {
    case news_Types.NewsAndEvent.NewsAndEvent_REQUEST_SUCCESS:
      return {
        ...state,
        newsAndEvent: action.newsPin.concat(action.news)
      }

    case news_Types.ListNewsBanner.ListNewsBanner_REQUEST_SUCCESS:
      return {
        ...state,
        listNewsBanner: action.listNewsBanner
      }

    default:
      return state
  }
}
