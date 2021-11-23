// Kiểm soát hành động -----------------------------------------------------------------------------------------

export namespace TotalDataTypes {
  export enum ListPartners {
    LIST_PARTNERS_REQUEST = 'LIST_PARTNERS_REQUEST',
    LIST_PARTNERS_REQUEST_SUCCESS = 'LIST_PARTNERS_REQUEST_SUCCESS',
    SET_PARTNERID = 'SET_PARTNERID'
  }

  export enum LocalPartnerId {
    PARTNERID_LOCAL_REQUEST = 'PARTNERID_LOCAL_REQUEST'
  }

  export enum Address {
    ADDRESS_REQUEST = 'ADDRESS_REQUEST',
    LIST_CITY_REQUEST_SUCCESS = 'LIST_CITY_REQUEST_SUCCESS',
    LIST_DISTRICT_REQUEST_SUCCESS = 'LIST_DISTRICT_REQUEST_SUCCESS',
    LIST_WARD_REQUEST_SUCCESS = 'LIST_WARD_REQUEST_SUCCESS'
  }
  export enum TypeReser {
    TYPE_RESER = 'TYPE_RESER'
  }
  export enum Window {
    Set_Window = 'Set_Window'
  }
}
