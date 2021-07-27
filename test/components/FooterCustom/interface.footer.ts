export interface PropsFooter {
  dataFooter: ItemFooter[]
}

export interface ItemFooter {
  logoFooter: string | undefined | null
  infoContact: ItemContact[]
  linkSupport: ItemSupport[]
  logoChecked: ItemChecked[]
}

export interface ItemContact {
  id?: string
  key?: string
  label?: string
  value: string
  link: string
}

export interface ItemSupport {
  id?: string
  label: string
  link: string
}

export interface ItemChecked {
  id?: string
  imgLogo: string
  link: string
}
