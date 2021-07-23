import {
  NewsAtHome_Action_Types,
  news_Action,
  news_State
} from '@store/interface'

const totalData_InitialState: news_State = {
  newsAndEvent: []
}

export default function news_Reducer(
  state = totalData_InitialState,
  action: news_Action
) {
  switch (action.type) {
    case NewsAtHome_Action_Types.ListNewsAtHome_REQUEST_SUCCESS:
      return {
        ...state,
        newsAndEvent: action.newsAndEvent
      }

    default:
      return state
  }
}
