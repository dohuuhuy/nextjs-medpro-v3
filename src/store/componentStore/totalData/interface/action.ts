/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TotalDataTypes } from '@store/interface'

export type TotalDataActions =
  | ListPartnersAction
  | ListCityAction
  | PartnerIdlocalAction

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

export const ListPartnersRequestSuccess = (listPartners: any) => {
  return {
    type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS,
    listPartners
  }
}

export interface SetParnerId {
  type: TotalDataTypes.ListPartners.SET_PARTNERID
  partnerId: any
}

export const SetParnerId = (partnerId: any) => {
  return {
    type: TotalDataTypes.ListPartners.SET_PARTNERID,
    partnerId
  }
}

// ----------------------------------------------------------------------------------------------
export type PartnerIdlocalAction = SetPartnerIdLocal

export interface SetPartnerIdLocal {
  type: TotalDataTypes.LocalPartnerId.PARTNERID_LOCAL_REQUEST
  partnerId: string
}

// ----------------------------------------------------------------------------------------------

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

export const ListCityRequestSuccess = (listCity: any) => {
  return {
    type: TotalDataTypes.ListCity.LIST_CITY_REQUEST_SUCCESS,
    listCity
  }
}