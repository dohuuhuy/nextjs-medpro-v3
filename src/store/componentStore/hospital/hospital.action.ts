import { Hospital_Action, Hosptail_Types } from '@store/interface'

export const getHospitalDetails = (partnerId: String): Hospital_Action => {
  return {
    type: Hosptail_Types.Information.Information_REQUEST,
    partnerId
  }
}

export const getListHospital = () => {
  return {
    type: Hosptail_Types.ListHospital.ListHospital_REQUEST
  }
}
