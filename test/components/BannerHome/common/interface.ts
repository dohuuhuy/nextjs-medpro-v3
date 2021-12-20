export interface BannerHomeIF {
  getBanner: any
  listFeature: ListFeature[]
  partnerId: string
}

export interface ListFeature {
  type: string
  parentId?: string
  name: string
  image: string
  priority?: number
  status?: boolean
  mobileStatus?: boolean
  toggle?: boolean
}

export interface BannerHomeItem {
  id: string
  linkImage: string
  alt: string
}
