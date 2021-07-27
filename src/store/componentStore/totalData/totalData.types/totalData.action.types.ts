// Kiểm soát hành động -----------------------------------------------------------------------------------------

export namespace totalData_Types {
  export enum ListPartners {
    ListPartners_REQUEST = 'ListPartners_REQUEST',
    ListPartners_REQUEST_SUCCESS = 'ListPartners_REQUEST_SUCCESS',
    ListPartners_REQUEST_FAILURE = ' ListPartners_REQUEST_FAILURE',
    ListPartners_UPDATE = 'ListPartners_UPDATE',
    ListPartners_DELETE = 'ListPartners_DELETE',
    CHECK_LOCALHOST = 'CHECK_LOCALHOST',
    ListPartners_ERROR = 'ListPartners_ERROR',
    SET_PartnerId = 'SET_PartnerId'
  }

  export enum LocalPartnerId {
    partnerId_Local_REQUEST = 'partnerId_Local_REQUEST'
  }
}
