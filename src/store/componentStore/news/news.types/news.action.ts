import { news_Types } from '@store/interface'

export type news_Action = NewAtHome_Action

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
