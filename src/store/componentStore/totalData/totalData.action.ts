import {
  totalData_Action,
  totalData_Params,
  totalData_Types
} from '@store/interface'

export const getPartnerId = (): totalData_Action => {
  return {
    type: totalData_Types.ListPartners.ListPartners_REQUEST
  }
}

export const set_partnerId_local = ({
  partnerId
}: totalData_Params.partnerLocal): totalData_Action => {
  return {
    type: totalData_Types.LocalPartnerId.partnerId_Local_REQUEST,
    partnerId
  }
}
