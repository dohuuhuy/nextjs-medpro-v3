import { PartnerId_Action_Types } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type partnerId_Action = partnerId_Request | partnerId_Request_Success

export interface partnerId_Request {
  type: PartnerId_Action_Types.PartnerId_REQUEST
  id: number
}

export interface partnerId_Request_Success {
  type: PartnerId_Action_Types.PartnerId_REQUEST_SUCCESS
  list_partners: Array<any>
}

// Cách đăt tên:
// Exp: <Danh từ>_<tính năng>_<trạng thái>
// Tính năng: request, update, delete
// Trạng thái: success, failure, ...
