export interface hospital_State {
  hospital_details: hospital_details | {}
  feature_list: Array<any>
}

export interface hospital_details {
  info: Array<infoItem>
  menu: Array<menuItem>
  menuFooter: Array<menuFooterItem>
}

export interface infoItem {
  key: String
  displayPrefix: String
  value: String
  isShow?: boolean
}

export interface menuItem {
  key: String
  link: String
  url: String
  name: String
  content: String
  sortOrder: String
  icon: String
}

export interface menuFooterItem {
  key: String
  link: String
  url: String
  name: String
  content: String
  sortOrder: String
  icon: String
}
