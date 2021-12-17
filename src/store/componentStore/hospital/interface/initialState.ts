export interface HospitalState {
  partnerId: string
  information: Information
  listHospital: any
  bookingTree: any
  bookingCurrent: any
  listFeatureByApp: ItemFeature[]
  listFeatureByPartner: ItemFeature[]
  schedule: any
  listPayment: any[]
  selectedPaymentFee: {}
  paymentFee: {
    totalFee: number
    subTotal: number
    grandTotal: number
  }
  passSchedules: boolean
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
