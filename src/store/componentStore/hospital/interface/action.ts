import { HosptailTypes, ItemFeature } from '@src/store/interface'

export type StepAction = ResetSchedule | Schedule

export interface ResetSchedule {
  type: HosptailTypes.Stepper.RESET_SCHEDULE
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
  | selectedFeature

export interface selectedFeature {
  type: HosptailTypes.Feature.SELECTED_FEATURE
  selectedFeature: ItemFeature
}

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
  bookingCurrent: any[]
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

// ------------------------------- Phương thức thanh toán ------------------------------

export type PaymentAction =
  | PaymentRequest
  | PaymentRequestSuccess
  | PaymentReset
  | SelectedPaymentFee

export interface PaymentRequest {
  type: HosptailTypes.Payment.PAYMENT_REQUEST
}

export interface PaymentRequestSuccess {
  type: HosptailTypes.Payment.PAYMENT_REQUEST_SUCCESS
  listPayment: any[]
}

export interface PaymentReset {
  type: HosptailTypes.Payment.PAYMENT_RESET
}

export interface SelectedPaymentFee {
  type: HosptailTypes.Payment.SELECTED_PAYMENT_FEE
  paymentFee: {}
}

// ------------------------------- Thực hiện đặt khám ------------------------------

export type ReserveBookingAction =
  | ReserveBookingRequest
  | ReserveBookingRequestSuccess

export interface ReserveBookingRequest {
  type: HosptailTypes.ReserveBooking.ReserveBooking_REQUEST
}

export interface ReserveBookingRequestSuccess {
  type: HosptailTypes.ReserveBooking.ReserveBooking_REQUEST_SUCCESS
  ReserveBooking: any[]
}

// ------------------------------- Thực hiện hủy phiếu khám ------------------------------

export type CancelBookingAction =
  | CancelBookingRequest
  | CancelBookingRequestSuccess

export interface CancelBookingRequest {
  type: HosptailTypes.CancelBooking.CancelBooking_REQUEST
  id: string
}

export interface CancelBookingRequestSuccess {
  type: HosptailTypes.CancelBooking.CancelBooking_REQUEST_SUCCESS
  CancelBooking: any
}

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
  | PaymentAction
  | ReserveBookingAction
  | CancelBookingAction
