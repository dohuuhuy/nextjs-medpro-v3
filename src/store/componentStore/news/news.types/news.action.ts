import { news_Types } from '@store/interface'

export type news_Action = NewsAndEvent_Action | ListNewsBanner_Action

// ----------------------------------------------------------------------------------------------

export type NewsAndEvent_Action =
  | NewsAndEvent_Request
  | NewsAndEvent_Request_Success

export interface NewsAndEvent_Request {
  type: news_Types.NewsAndEvent.NewsAndEvent_REQUEST
}

export interface NewsAndEvent_Request_Success {
  type: news_Types.NewsAndEvent.NewsAndEvent_REQUEST_SUCCESS
  newsPin: any[]
  news: any[]
}

export type ListNewsBanner_Action =
  | ListNewsBanner_Request
  | ListNewsBanner_Request_Success

export interface ListNewsBanner_Request {
  type: news_Types.ListNewsBanner.ListNewsBanner_REQUEST
}

export interface ListNewsBanner_Request_Success {
  type: news_Types.ListNewsBanner.ListNewsBanner_REQUEST_SUCCESS
  listNewsBanner: any[]
}
