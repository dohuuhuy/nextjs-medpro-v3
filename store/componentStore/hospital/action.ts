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

// lấy danh sách dịch vụ theo bệnh viện
export const FeatureRequest = ({
  partnerId,
  typeReser
}: any): HospitalActions => {
  return {
    type: HosptailTypes.Feature.FEATURE_REQUEST,
    partnerid: partnerId,
    typeReser
  }
}

export const FeatureByAppSuccess = (listFeatureByApp: any): HospitalActions => {
  return {
    type: HosptailTypes.Feature.FEATURE_BY_APP_REQUEST_SUCCESS,
    listFeatureByApp
  }
}

export const FeatureByPartnerSuccess = (
  listFeatureByPartner: any
): HospitalActions => {
  return {
    type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS,
    listFeatureByPartner
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

// lấy header
export const getHeader = (partnerId: any): HospitalActions => {
  return {
    type: HosptailTypes.Header.Header_REQUEST,
    partnerId
  }
}

export const getHeaderSuccess = (data: any): HospitalActions => {
  return {
    type: HosptailTypes.Header.Header_REQUEST_SUCCESS,
    header: data
  }
}

// lấy footer
export const getFooter = (partnerId: any): HospitalActions => {
  return {
    type: HosptailTypes.Footer.Footer_REQUEST,
    partnerId
  }
}

export const getFooterSuccess = (data: any): HospitalActions => {
  return {
    type: HosptailTypes.Footer.Footer_REQUEST_SUCCESS,
    footer: data
  }
}
