/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HosptailTypes } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------

export type HospitalActions =
  | InfomationAction
  | FeatureAction
  | ListHospitalAction
  | BookingTreeAction

// --------------------------------------------------------------

export type InfomationAction =
  | InformationRequest
  | InformationRequestSuccess
  | HospitalClearDetails

export interface InformationRequest {
  type: HosptailTypes.Information.INFORMATION_REQUEST
  partnerId: string
}

export interface InformationRequestSuccess {
  type: HosptailTypes.Information.INFORMATION_REQUEST_SUCCESS
  information: Record<string, any>
}

export interface HospitalClearDetails {
  type: HosptailTypes.Information.INFORMATION_CLEAR
}

// --------------------------------------------------------------------------

export type FeatureAction =
  | FeatureByPartnerRequest
  | FeatureByPartnerRequestSuccess

export interface FeatureByPartnerRequest {
  type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST
}

export interface FeatureByPartnerRequestSuccess {
  type: HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS
  listFeature: any[]
}

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

//  -------------------------------------

export type BookingTreeAction = BookingTreeRequest | BookingTreeRequestSuccess

export interface BookingTreeRequest {
  type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST
  partnerid: string
}

export interface BookingTreeRequestSuccess {
  type: HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS
  bookingTree: any[]
}
