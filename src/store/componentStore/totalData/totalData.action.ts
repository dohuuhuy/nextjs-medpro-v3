import {
  TotalDataActions,
  TotalDataParams,
  TotalDataTypes
} from '@store/interface'

export const getPartnerId = (): TotalDataActions => {
  return {
    type: TotalDataTypes.ListPartners.ListPartners_REQUEST
  }
}

export const setPartnerIdLocal = ({
  partnerId
}: TotalDataParams.partnerLocal): TotalDataActions => {
  return {
    type: TotalDataTypes.LocalPartnerId.partnerId_Local_REQUEST,
    partnerId
  }
}
