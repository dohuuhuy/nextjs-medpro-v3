export interface TotalDataState {
  partnerId: string
  appId: string
  listPartners: ItemlistPartners[]
  listCity: any[]
  loading: boolean
}

export interface ItemlistPartners {
  domain: string[]
  partnerId: string
  nameHospital: string
}
