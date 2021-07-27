export interface Item {
  logoHeader: string
  logoMobile: string
  menu: ItemMenu[]
  menuMobile: ItemMenuMobile[]
  listSupport: ItemDrawer[]
  support: ItemSupport[]
}

export interface ItemMenu {
  id?: string
  key: string
  link: string
  url?: string
  label: string
  content: string
  sortOrder: number
  icon: string
  active: boolean
  group: string
}

export interface ItemMenuMobile {
  id?: string
  key: string
  link: string
  url?: string
  label: string
  group?: string
  sortOrder: number
  icon: string
}

export interface ItemSupport {
  textSuport: string
  icon: string
  phone: string
}

export interface ItemDrawer {
  funcGroup: ItemButton[]
  guideGroup: ItemButton[]
  supportGroup: ItemButton[]
}

export interface ItemButton {
  icon: string
  label: string
  link: string
}
