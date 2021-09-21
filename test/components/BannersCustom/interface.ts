export interface Banner {
  getBanner: any
  listFeature: listFeature[]
  partnerId: string
}

interface listFeature {
  type: string
  _id: string
  parentId: string
  name: string
  image: string
  priority: number
  status: boolean
  mobileStatus: boolean
}
