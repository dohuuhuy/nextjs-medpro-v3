import { HospitalActions, HosptailTypes } from '@store/interface'

export const getHospitalDetails = (partnerId: string): HospitalActions => {
  return {
    type: HosptailTypes.Information.INFORMATION_REQUEST,
    partnerId
  }
}

export const InformationRequestSuccess = (
  information: Record<string, any>
): HospitalActions => {
  return {
    type: HosptailTypes.Information.INFORMATION_REQUEST_SUCCESS,
    information
  }
}

export const getListHospital = (): HospitalActions => {
  return {
    type: HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST
  }
}

export const getBookingTree = (partnerid: any): HospitalActions => {
  return {
    type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST,
    partnerid
  }
}

export const getBookingTreeSuccess = (data: any): HospitalActions => {
  return {
    type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS,
    bookingTree: data
  }
}

export const FeatureByPartnerRequest = (): HospitalActions => {
  return {
    type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST
  }
}
