export interface HospitalState {
  information: information
  listFeature: ItemFeature[]
  listHospital: any
}

export interface information {
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
