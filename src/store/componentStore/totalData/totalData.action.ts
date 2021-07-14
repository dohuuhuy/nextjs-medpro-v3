import {
  ListPartners_Action_Types,
  partnerId_Local_Action_Types,
  totalData_Action,
  totalData_Params,
} from '@store/interface'

export const get_PartnerId = (): totalData_Action => {
  return {
    type: ListPartners_Action_Types.ListPartners_REQUEST,
  }
}

export const set_partnerId_local = ({
  partnerId,
  local,
}: totalData_Params.partnerLocal): totalData_Action => {
  return {
    type: partnerId_Local_Action_Types.partnerId_Local_REQUEST,
    partnerId,
    local,
  }
}
