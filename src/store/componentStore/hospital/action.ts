import { HospitalActions, HosptailTypes } from '@store/interface'

// lấy json thông tin bệnh viện
export const getHospitalDetails = (host: any): HospitalActions => {
  return {
    type: HosptailTypes.Information.INFORMATION_REQUEST,
    host
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

// lấy danh sách bệnh viện
export const getListHospital = (): HospitalActions => {
  return {
    type: HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST
  }
}

export const ListHospitalRequestSuccess = (listHospital: any) => {
  return {
    type: HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST_SUCCESS,
    listHospital
  }
}

// lấy luồng đặt khám
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

// lấy danh sách dịch vụ theo bệnh viện
export const FeatureByPartnerRequest = (): HospitalActions => {
  return {
    type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST
  }
}

export const FeatureByPartnerRequestSuccess = (
  listFeature: Record<string, any>
) => {
  return {
    type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS,
    listFeature
  }
}
