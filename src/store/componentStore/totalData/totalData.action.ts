import { listPartners_Action, ListPartners_Action_Types } from '@store/interface'


export const get_PartnerId = (): listPartners_Action => {
  return {
    type: ListPartners_Action_Types.ListPartners_REQUEST,
    id: 1,
  }
}
