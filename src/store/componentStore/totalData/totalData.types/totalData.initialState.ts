export interface TotalDataState {
  partnerId: string
  appId: string
  listPartners: Array<ItemlistPartners>
  loading: boolean
}

export interface ItemlistPartners {
  domain: string[]
  partnerId: string
  nameHospital: string
}
