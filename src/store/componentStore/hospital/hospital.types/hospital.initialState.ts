export interface hospital_State {
  information: information
  feature_list: Array<feature_Item>
}

export interface information {
  partnerId: string
  header: any
  banners: Array<any>
  deployHospital: Array<any>
  introducHospital: any
  downloadApp: any
  supportMethods: Array<any>
  footer: any
  contentPage: Array<any>
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
