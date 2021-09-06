export interface TotalDataState {
  appId: AppId
  partnerId: string
  listPartners: ItemlistPartners[]
  listCity: any[]
  typeReser: TypeReser
}

export interface ItemlistPartners {
  domain: string[]
  partnerId: string
  nameHospital: string
}

type AppId = 'medpro' | 'danang' | ''

type TypeReser = 'parasitic' | 'normal'
