export interface TotalDataState {
  appId: AppId
  partnerId: string
  listPartners: ItemlistPartners[]
  typeReser: TypeReser
  listCity: any[]
  listDistrict: any[]
  listWard: any[]
  windows: any
}

export interface ItemlistPartners {
  domain: string[]
  partnerId: string
  nameHospital: string
}

type AppId = 'medpro' | 'danang' | ''

type TypeReser = 'parasitic' | 'normal'
