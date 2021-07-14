export interface totalData_State {
  partnerId: string
  list_partners: list_partners
}

export interface list_partners extends Array<list_partners_item> {}
export interface list_partners_item {
  domain: Array<String>
  partnerId: string
}

