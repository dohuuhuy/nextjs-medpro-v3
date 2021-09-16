export interface PropsHeader {
  authen: Authencation
  dataHeader: listHeader
}
export interface Authencation {
  isAuthen: boolean,
  nameUser: string
}
export interface listHeader {
  logoHeader: string
  menuHeader: itemMenu[]
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