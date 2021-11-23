import { HosptailTypes } from 'store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------

export type HospitalActions =
  | HeaderAction
  | FooterAction
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
