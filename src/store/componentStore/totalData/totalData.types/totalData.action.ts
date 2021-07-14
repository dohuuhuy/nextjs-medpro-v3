import { ListPartners_Action_Types } from '@store/interface'

export type totalData = listPartners_Action | demo

export type listPartners_Action =
  | listPartners_Request
  | listPartners_Request_Success

export type demo = demo_get

export interface demo_get {
  type: 'from_cache'
  id: string
}

export interface listPartners_Request {
  type: ListPartners_Action_Types.ListPartners_REQUEST
  id: number
}

export interface listPartners_Request_Success {
  type: ListPartners_Action_Types.ListPartners_REQUEST_SUCCESS
  list_partners: Array<any>
}
