import { Hospital_Action, Hosptail_Types } from '@store/interface'

export const hospital_get_details = (partnerId: String): Hospital_Action => {
  return {
    type: Hosptail_Types.Hospital_Details.Hospital_DETAILS_REQUEST,
    partnerId
  }
}
