// Kiểm soát hành động -----------------------------------------------------------------------------------------
export enum ListPartners_Action_Types {
  ListPartners_REQUEST = 'ListPartners_REQUEST',
  ListPartners_REQUEST_SUCCESS = 'ListPartners_REQUEST_SUCCESS',
  ListPartners_REQUEST_FAILURE = ' ListPartners_REQUEST_FAILURE',
  ListPartners_UPDATE = 'ListPartners_UPDATE',
  ListPartners_DELETE = 'ListPartners_DELETE',
}

// Cách đăt tên:
// Exp: <Danh từ>_<tính năng>_<trạng thái>
// Tính năng: request, update, delete
// Trạng thái: success, failure, ...
