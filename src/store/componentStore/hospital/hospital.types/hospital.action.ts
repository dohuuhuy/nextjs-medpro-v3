import { HosptailTypes } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------

export type HospitalActions =
  | InfomationAction
  | FeatureAction
  | ListHospitalAction

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
  type: HosptailTypes.Information.HOSPITAL_CLEAR_DETAILS
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
