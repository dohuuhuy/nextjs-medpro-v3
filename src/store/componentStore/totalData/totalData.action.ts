import {
  TotalDataActions,
  TotalDataParams,
  TotalDataTypes
} from '@store/interface'

export const getPartnerId = (): TotalDataActions => {
  return {
    type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST
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
