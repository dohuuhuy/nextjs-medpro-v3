import { TotalDataTypes } from 'store/interface'

export type TotalDataActions =
  | ListPartnersAction
  | ListCityAction
  | PartnerIdlocalAction
  | TypeReservice

// ----------------------------------------------------------------------------------------------

export type ListPartnersAction =
  | ListPartnersReques
  | ListPartnersRequestSuccess
  | SetParnerId

export interface ListPartnersReques {
  type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST
}

export interface ListPartnersRequestSuccess {
  type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS
  listPartners: any[]
}

export interface SetParnerId {
  type: TotalDataTypes.ListPartners.SET_PARTNERID
  partnerId: any
}

// ----------------------------------------------------------------------------------------------
export type PartnerIdlocalAction = SetPartnerIdLocal

export interface SetPartnerIdLocal {
  type: TotalDataTypes.LocalPartnerId.PARTNERID_LOCAL_REQUEST
  partnerId: string
}

// ----------------------------------------danh sách tỉnh/thành------------------------------------------------------

export type ListCityAction =
  | ListCityReques
  | ListCityRequestSuccess
  | SetParnerId

export interface ListCityReques {
  type: TotalDataTypes.ListCity.LIST_CITY_REQUEST
}

export interface ListCityRequestSuccess {
  type: TotalDataTypes.ListCity.LIST_CITY_REQUEST_SUCCESS
  listCity: any[]
}

// ----------------------------------------loại đặt khám------------------------------------------------------

export interface TypeReservice {
  type: TotalDataTypes.TypeReser.TYPE_RESER
}
