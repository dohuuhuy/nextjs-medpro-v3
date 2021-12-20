export interface TotalDataState {
  appId: AppId
  partnerId: string
  listPartners: ItemlistPartners[]
  typeReser: TypeReser
  listCity: any[]
  listDistrict: any[]
  listWard: any[]
  windows: any
  loading: boolean
}

export interface ItemlistPartners {
  domain: string[]
  partnerId: string
  description: string
}

type AppId = 'medpro' | 'danang' | ''

type TypeReser = 'parasitic' | 'normal'
