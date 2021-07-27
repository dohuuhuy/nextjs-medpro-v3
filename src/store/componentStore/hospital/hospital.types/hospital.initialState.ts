export interface hospital_State {
  information: information
  feature_list: feature_Item[]
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

export interface feature_Item {
  type: string
  _id: string
  parentId: string
  name: string
  image: string
  priority: number
  status: boolean
  mobileStatus: boolean
}
