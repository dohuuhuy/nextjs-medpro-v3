import { news_Types } from '@store/interface'

export type news_Action = NewAtHome_Action | ListNewsBanner_Action

// ----------------------------------------------------------------------------------------------

export type NewAtHome_Action = NewAtHome_Request | NewAtHome_Request_Success

export interface NewAtHome_Request {
  type: news_Types.NewsAndEvent.NewsAndEvent_REQUEST
}

export interface NewAtHome_Request_Success {
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
