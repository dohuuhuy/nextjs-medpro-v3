export interface totalData_State {
  partnerId: string
  list_partners: list_partners
  localhost: boolean
  loading: boolean
  list_error: any
}

export interface list_partners extends Array<list_partners_item> {}
export interface list_partners_item {
  domain: Array<string>
  partnerId: string
}
