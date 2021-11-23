import { TotalDataTypes } from 'store/interface'

export type TotalDataActions =
  | ListPartnersAction
  | AddressAction
  | PartnerIdlocalAction
  | TypeReservice
  | WindowAction

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

export type AddressAction =
  | AddressReques
  | CityRequestSuccess
  | DistrictRequestSuccess
  | WardRequestSuccess

export interface AddressReques {
  type: TotalDataTypes.Address.ADDRESS_REQUEST
  payload: {
    type: string
    id: string
  }
}

export interface CityRequestSuccess {
  type: TotalDataTypes.Address.LIST_CITY_REQUEST_SUCCESS
  listCity: any[]
}

export interface DistrictRequestSuccess {
  type: TotalDataTypes.Address.LIST_DISTRICT_REQUEST_SUCCESS
  listDistrict: any[]
}

export interface WardRequestSuccess {
  type: TotalDataTypes.Address.LIST_WARD_REQUEST_SUCCESS
  listWard: any[]
}

// ----------------------------------------loại đặt khám------------------------------------------------------

export interface TypeReservice {
  type: TotalDataTypes.TypeReser.TYPE_RESER
}

// ----------------------------------------loại đặt khám------------------------------------------------------

export type WindowAction = Set_Window

export interface Set_Window {
  type: TotalDataTypes.Window.Set_Window
  data: any
}
