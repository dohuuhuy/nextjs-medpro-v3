export interface PropsHeader {
  Authencation: Authen
  dataHeader: listHeader
}

export interface listHeader {
  logo: itemLogo
  menu: itemMenu[]
  menuMobile: itemMenuMobile[]
  listSupport: itemSupport
}
export interface itemLogo {
  desktop: string
  mobile: string
}
export interface itemMenu {
  id?: string,
  key: string,
  link: string,
  url: string,
  label: string,
  group: string,
  sortOrder: number,
  status: boolean
}

export interface Authen {
  isAuthen: boolean,
  nameUser: string
}
export interface itemMenuMobile {
  id?: string,
  key: string,
  link: string,
  url: string,
  label: string,
  group: string,
  sortOrder: number,
  icon: string
}

export interface itemSupport {
  funcGroup: Funcgroup[],
  guideGroup: Guidegroup[],
  supportGroup: Supportgroup[]
}

export interface Funcgroup {
  icon: string,
  label: string,
}

export interface Guidegroup {
  icon: string,
  label: string,
}

export interface Supportgroup {
  icon: string,
  label: string,
  link: string
}
