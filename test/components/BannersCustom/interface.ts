export interface Banner {
  getBanner: any
  listFeature: ListFeature[]
  partnerId: string
}

interface ListFeature {
  type: string
  _id: string
  parentId: string
  name: string
  image: string
  priority: number
  status: boolean
  mobileStatus: boolean
}
