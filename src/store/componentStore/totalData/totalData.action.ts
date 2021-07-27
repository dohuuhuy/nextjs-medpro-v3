import {
  ListPartners_ActionTypes,
  partnerId_Local_ActionTypes,
  totalData_Action,
  totalData_Params
} from '@store/interface'

export const get_PartnerId = (): totalData_Action => {
  return {
    type: ListPartners_ActionTypes.ListPartners_REQUEST
  }
}

export const set_partnerId_local = ({
  partnerId
}: totalData_Params.partnerLocal): totalData_Action => {
  return {
    type: partnerId_Local_ActionTypes.partnerId_Local_REQUEST,
    partnerId
  }
}
