import { NewsAtHome_Action_Types } from '@store/interface'

export type news_Action = NewAtHome_Action

// ----------------------------------------------------------------------------------------------

export type NewAtHome_Action = NewAtHome_Request | NewAtHome_Request_Success

export interface NewAtHome_Request {
  type: NewsAtHome_Action_Types.ListNewsAtHome_REQUEST
}

export interface NewAtHome_Request_Success {
  type: NewsAtHome_Action_Types.ListNewsAtHome_REQUEST_SUCCESS
  newsAndEvent: Array<any>
}
