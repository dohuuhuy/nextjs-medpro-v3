export interface HospitalState {
  partnerId: string
  information: Information
  listHospital: any
  bookingTree: any
  bookingCurrent: any
  listFeatureByApp: ItemFeature[]
  listFeatureByPartner: ItemFeature[]
  selectedFeature: InfoPartner | any
  flow: string
  treeId: string
  schedule: any
  listPayment: any[]
  selectedPaymentFee: any
  paymentFee: {
    totalFee: number
    subTotal: number
    grandTotal: number
  }
  listHistoryPayment: any
  passSchedules: boolean
  reserveBooking: any[]
  infoBillFromRepayment: any
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

export interface InfoPartner {
  partnerId: string
  image: string
  bannerImage: string
  name: string
  address: string
  domain: string
  features: ItemFeature[]
}

export interface ItemFeature {
  children: []
  createdAt: string
  disabled: false
  id: string
  image: string
  message: string
  mobileStatus: boolean
  name: string
  priority: number
  status: boolean
  type: string
  updatedAt: string
  webStatus: false
  webRoute: string
}
