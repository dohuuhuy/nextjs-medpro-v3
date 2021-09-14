import {
  TotalDataActions,
  TotalDataParams,
  TotalDataTypes
} from 'store/interface'

// ---------------danh sách partner id -----------------------------------------------------------

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

// ---------------set partner id -----------------------------------------------------------

export const setPartnerIdLocal = ({
  partnerId
}: TotalDataParams.PartnerLocal): TotalDataActions => {
  return {
    type: TotalDataTypes.LocalPartnerId.PARTNERID_LOCAL_REQUEST,
    partnerId
  }
}

export const SetParnerId = (partnerId: any) => {
  return {
    type: TotalDataTypes.ListPartners.SET_PARTNERID,
    partnerId
  }
}

export const TypeReser = (): TotalDataActions => {
  return {
    type: TotalDataTypes.TypeReser.TYPE_RESER
  }
}

// ---------------xử lý địa chỉ-----------------------------------------------------------

export const handlerAddress = ({ type, id }: any): TotalDataActions => {
  return {
    type: TotalDataTypes.Address.ADDRESS_REQUEST,
    payload: {
      type,
      id
    }
  }
}

export const CityRequestSuccess = (listCity: any): TotalDataActions => {
  return {
    type: TotalDataTypes.Address.LIST_CITY_REQUEST_SUCCESS,
    listCity
  }
}

export const DistrictRequestSuccess = (listDistrict: any): TotalDataActions => {
  return {
    type: TotalDataTypes.Address.LIST_DISTRICT_REQUEST_SUCCESS,
    listDistrict
  }
}

export const WardRequestSuccess = (listWard: any): TotalDataActions => {
  return {
    type: TotalDataTypes.Address.LIST_WARD_REQUEST_SUCCESS,
    listWard
  }
}
