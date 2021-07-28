import { HospitalActions, HosptailTypes } from '@store/interface'

export const getHospitalDetails = (partnerId: String): HospitalActions => {
  return {
    type: HosptailTypes.Information.Information_REQUEST,
    partnerId
  }
}

export const getListHospital = (): HospitalActions => {
  return {
    type: HosptailTypes.ListHospital.ListHospital_REQUEST
  }
}
