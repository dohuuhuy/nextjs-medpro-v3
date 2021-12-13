import { HosptailTypes } from '@src/store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------

export type HospitalActions =
  | HeaderAction
  | BannersAction
  | FooterAction
  | InfomationAction
  | FeatureAction
  | ListHospitalAction
  | BookingTreeAction
  | StepAction

export type StepAction = SaveStep | Schedule

export interface SaveStep {
  type: HosptailTypes.Stepper.SAVE_INFO_STEP
  steps: any
}
export interface Schedule {
  type: HosptailTypes.Stepper.SAVE_SCHEDULE
  schedule: any
}

// -----------------------------thông tin bệnh viện---------------------------------------------

export type InfomationAction =
  | InformationRequest
  | InformationRequestSuccess
  | HospitalClearDetails
  | SetParnerIdHospital

export interface SetParnerIdHospital {
  type: HosptailTypes.Information.SET_PARTNERID_HOSPITAL
  partnerId: any
}

export interface InformationRequest {
  type: HosptailTypes.Information.INFORMATION_REQUEST
  host: string
}

export interface InformationRequestSuccess {
  type: HosptailTypes.Information.INFORMATION_REQUEST_SUCCESS
  information: Record<string, any>
}

export interface HospitalClearDetails {
  type: HosptailTypes.Information.INFORMATION_CLEAR
}

// -----------------------------danh sách dịch vụ---------------------------------------------

export type FeatureAction =
  | FeatureRequest
  | FeatureByPartnertSuccess
  | FeatureByAppSuccess

export interface FeatureRequest {
  type: HosptailTypes.Feature.FEATURE_REQUEST
  partnerId: string
  typeReser: 'app' | 'partner'
}

export interface FeatureByPartnertSuccess {
  type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS
  listFeatureByPartner: any[]
}

export interface FeatureByAppSuccess {
  type: HosptailTypes.Feature.FEATURE_BY_APP_REQUEST_SUCCESS
  listFeatureByApp: any[]
}

// -------------------------------danh sách bệnh viện-------------------------------------------

export type ListHospitalAction =
  | ListHospitalRequest
  | ListHospitalRequestSuccess

export interface ListHospitalRequest {
  type: HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST
}

export interface ListHospitalRequestSuccess {
  type: HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST_SUCCESS
  listHospital: any[]
}

// -----------------------------luồng đặt khám---------------------------------------------

export type BookingTreeAction =
  | BookingTreeRequest
  | BookingTreeRequestSuccess
  | bookingCurRequest
  | bookingCurRequestSuccess

export interface BookingTreeRequest {
  type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST
  partnerId: string
}

export interface BookingTreeRequestSuccess {
  type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS
  bookingTree: any[]
}

export interface bookingCurRequest {
  type: HosptailTypes.BookingTree.CurrentBooking_Request
  schedules: any
}

export interface bookingCurRequestSuccess {
  type: HosptailTypes.BookingTree.CurrentBooking_Success
  bookingCur: any[]
}
// -----------------------------Lấy thông tin header---------------------------------------------

export type HeaderAction = HeaderRequest | HeaderRequestSuccess

export interface HeaderRequest {
  type: HosptailTypes.Header.Header_REQUEST
  partnerId: string
}

export interface HeaderRequestSuccess {
  type: HosptailTypes.Header.Header_REQUEST_SUCCESS
  header: any[]
}

// -----------------------------Lấy thông tin footer---------------------------------------------

export type FooterAction = FooterRequest | FooterRequestSuccess

export interface FooterRequest {
  type: HosptailTypes.Footer.Footer_REQUEST
  partnerId: string
}

export interface FooterRequestSuccess {
  type: HosptailTypes.Footer.Footer_REQUEST_SUCCESS
  footer: any[]
}

// -----------------------------Lấy thông tin footer---------------------------------------------

export type BannersAction = BannersRequest | BannersRequestSuccess

export interface BannersRequest {
  type: HosptailTypes.Banners.Banners_REQUEST
  partnerId: string
}

export interface BannersRequestSuccess {
  type: HosptailTypes.Banners.Banners_REQUEST_SUCCESS
  banners: any[]
}
