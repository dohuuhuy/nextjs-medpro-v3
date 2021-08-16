export interface HospitalState {
  information: Information
  listFeature: ItemFeature[]
  listHospital: any
  bookingTree: any[]
}

export interface Information {
  partnerId: string
  header: any
  banners: any[]
  deployHospital: any[]
  introducHospital: any
  downloadApp: any
  supportMethods: any[]
  footer: any
  contentPage: any[]
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
