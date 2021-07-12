import { partnerId_Action, PartnerId_Action_Types } from '@store/interface'

export const get_PartnerId = (): partnerId_Action => {
  return {
    type: PartnerId_Action_Types.PartnerId_REQUEST,
    id: 1,
  }
}
