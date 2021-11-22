export interface HeaderIF {
  Authencation?: Authen
  dataHeader: ListHeader
}

export interface ListHeader {
  logo: ItemLogo
  menu: ItemMenu[]
  menuMobile: ItemMenuMobile[]
  listSupport: ItemSupport
}

export interface ItemLogo {
  desktop: string
  mobile: string
}

export interface ItemMenu {
  id?: string
  key: string
  link: string
  url: string
  label: string
  group: string
  sortOrder: number
  status: boolean
}

export interface Authen {
  isAuthen: boolean
  nameUser: string
}

export interface ItemMenuMobile {
  id?: string
  key: string
  link: string
  url: string
  label: string
  group: string
  sortOrder: number
  icon: string
}

export interface ItemSupport {
  funcGroup: Funcgroup[]
  guideGroup: Guidegroup[]
  supportGroup: Supportgroup[]
}

export interface Funcgroup {
  icon: string
  label: string
}

export interface Guidegroup {
  icon: string
  label: string
}

export interface Supportgroup {
  icon: string
  label: string
  link: string
}
