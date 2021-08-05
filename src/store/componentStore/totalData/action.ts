import {
  TotalDataActions,
  TotalDataParams,
  TotalDataTypes
} from '@store/interface'

export const getListPartners = (): TotalDataActions => {
  return {
    type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST
  }
}

export const listPartnersRequestSuccess = (listPartners: any) => {
  return {
    type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS,
    listPartners
  }
}

export const setPartnerIdLocal = ({
  partnerId
}: TotalDataParams.PartnerLocal): TotalDataActions => {
  return {
    type: TotalDataTypes.LocalPartnerId.PARTNERID_LOCAL_REQUEST,
    partnerId
  }
}

export const getListCity = (): TotalDataActions => {
  return {
    type: TotalDataTypes.ListCity.LIST_CITY_REQUEST
  }
}

export const getListCitySuccess = (listCity: any): TotalDataActions => {
  return {
    type: TotalDataTypes.ListCity.LIST_CITY_REQUEST_SUCCESS,
    listCity
  }
}
