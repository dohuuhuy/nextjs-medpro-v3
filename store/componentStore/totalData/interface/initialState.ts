export interface TotalDataState {
  appId: string
  partnerId: string
  listPartners: ItemlistPartners[]
  listCity: any[]
  loading: boolean
}

export interface ItemlistPartners {
  domain: string[]
  partnerId: string
  nameHospital: string
}
