import { HosptailTypes } from 'store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------

export type HospitalActions =
  | InfomationAction
  | FeatureAction
  | ListHospitalAction
  | BookingTreeAction

// -----------------------------thông tin bệnh viện---------------------------------------------

export type InfomationAction =
  | InformationRequest
  | InformationRequestSuccess
  | HospitalClearDetails

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
  partnerid: string
  typeReser: string
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

export type BookingTreeAction = BookingTreeRequest | BookingTreeRequestSuccess

export interface BookingTreeRequest {
  type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST
  partnerid: string
}

export interface BookingTreeRequestSuccess {
  type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS
  bookingTree: any[]
}
// --------------------------------------------------------------------------
