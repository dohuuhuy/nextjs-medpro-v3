export interface HeaderIF {
  authen: Authencation
  dataHeader: listHeader
}
export interface Authencation {
  isAuthen: boolean
  nameUser: string
}
export interface listHeader {
  logo: {
    desktop: string
    mobile: string
  }
  menu: {
    id: string
    key: string
    link: string
    url: string
    label: string
    group: string
    sortOrder: number
    status: boolean
  }[]
}
