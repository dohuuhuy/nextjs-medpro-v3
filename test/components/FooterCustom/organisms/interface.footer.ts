import { ItemSupport } from '../molecules/SuportFooter'
import { ItemChecked } from '../molecules/ImageFooter'
import { ItemContact } from '../molecules/InfoFooter'

export interface PropsFooter {
  dataFooter: ItemFooter[]
}

export interface ItemFooter {
  logoFooter: string | undefined | null
  infoContact: ItemContact[]
  linkSupport: ItemSupport[]
  logoChecked: ItemChecked[]
}
