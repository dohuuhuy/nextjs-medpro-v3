import { Hospital_Action, Hosptail_Types } from '@store/interface'

export const hospital_get_details = (partnerId: String): Hospital_Action => {
  return {
    type: Hosptail_Types.Information.Information_REQUEST,
    partnerId
  }
}
