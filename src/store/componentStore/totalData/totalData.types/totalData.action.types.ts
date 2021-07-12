// Kiểm soát hành động -----------------------------------------------------------------------------------------
export enum PartnerId_Action_Types {
  PartnerId_REQUEST = 'REQUEST',
  PartnerId_REQUEST_SUCCESS = 'PartnerId_REQUEST_SUCCESS',
  PartnerId_REQUEST_FAILURE = ' PartnerId_REQUEST_FAILURE',
  PartnerId_UPDATE = 'PartnerId_UPDATE',
  PartnerId_DELETE = 'PartnerId_DELETE',
}

// Cách đăt tên:
// Exp: <Danh từ>_<tính năng>_<trạng thái>
// Tính năng: request, update, delete
// Trạng thái: success, failure, ...
