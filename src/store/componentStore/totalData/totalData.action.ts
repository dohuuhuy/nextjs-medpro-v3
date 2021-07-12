import { partnerId_Request } from './totalData.types/totalData.action'
import { PartnerId_Action_Types } from './totalData.types/totalData.action.types'

export const get_PartnerId = (): partnerId_Request => {
  return {
    type: PartnerId_Action_Types.PartnerId_REQUEST,
  }
}
