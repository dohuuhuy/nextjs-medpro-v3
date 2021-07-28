import { NewsTypes } from '@store/interface'

export type NewsActions = NewsAndEventAction | ListNewsBannerAction

// ----------------------------------------------------------------------------------------------

export type NewsAndEventAction =
  | NewsAndEvent_Request
  | NewsAndEvent_Request_Success

export interface NewsAndEvent_Request {
  type: NewsTypes.NewsAndEvent.NewsAndEvent_REQUEST
}

export interface NewsAndEvent_Request_Success {
  type: NewsTypes.NewsAndEvent.NewsAndEvent_REQUEST_SUCCESS
  newsPin: any[]
  news: any[]
}

export type ListNewsBannerAction =
  | ListNewsBanner_Request
  | ListNewsBanner_Request_Success

export interface ListNewsBanner_Request {
  type: NewsTypes.ListNewsBanner.ListNewsBanner_REQUEST
}

export interface ListNewsBanner_Request_Success {
  type: NewsTypes.ListNewsBanner.ListNewsBanner_REQUEST_SUCCESS
  listNewsBanner: any[]
}
