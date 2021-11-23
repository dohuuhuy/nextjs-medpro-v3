export interface HospitalState {
  listHospital: any
  bookingTree: any[]
  listFeatureByApp: ItemFeature[]
  listFeatureByPartner: ItemFeature[]
  information: Information
}

export interface Information {
  partnerId?: string
  header?: any
  banners?: any[]
  deployHospital?: any[]
  introducHospital?: any
  downloadApp?: any
  supportMethods?: any[]
  footer?: any
  contentPage?: any[]
}

export interface ItemFeature {
  type: string
  _id: string
  parentId: string
  name: string
  image: string
  priority: number
  status: boolean
  mobileStatus: boolean
}
