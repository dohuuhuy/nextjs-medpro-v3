import {
  Hospital_Action,
  Hospital_Details_Action_Types,
} from '@store/interface'

export const hospital_get_details = (partnerId: String): Hospital_Action => {
  return {
    type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS,
    partnerId,
  }
}
