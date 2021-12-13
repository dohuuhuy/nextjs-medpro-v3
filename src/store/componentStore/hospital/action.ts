import { HospitalActions, HosptailTypes } from '@store/interface'

export const setParnerIdHospital = (partnerId: any): HospitalActions => {
  return {
    type: HosptailTypes.Information.SET_PARTNERID_HOSPITAL,
    partnerId
  }
}

export const saveInfoStep = (steps: any): HospitalActions => {
  return {
    type: HosptailTypes.Stepper.SAVE_INFO_STEP,
    steps
  }
}

export const saveSchedule = (schedule: any): HospitalActions => {
  return {
    type: HosptailTypes.Stepper.SAVE_SCHEDULE,
    schedule
  }
}

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
    partnerId,
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
export const getBookingTree = (partnerId: any): HospitalActions => {
  return {
    type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST,
    partnerId
  }
}

export const getBookingTreeSuccess = (data: any): HospitalActions => {
  return {
    type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS,
    bookingTree: data
  }
}

export const getbookingCur = (schedules: any): HospitalActions => {
  return {
    type: HosptailTypes.BookingTree.CurrentBooking_Request,
    schedules
  }
}

export const getbookingCurSuccess = (data: any): HospitalActions => {
  return {
    type: HosptailTypes.BookingTree.CurrentBooking_Success,
    bookingCur: data
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

// lấy Banners
export const getBanners = (partnerId: any): HospitalActions => {
  return {
    type: HosptailTypes.Banners.Banners_REQUEST,
    partnerId
  }
}

export const getBannersSuccess = (data: any): HospitalActions => {
  return {
    type: HosptailTypes.Banners.Banners_REQUEST_SUCCESS,
    banners: data
  }
}
