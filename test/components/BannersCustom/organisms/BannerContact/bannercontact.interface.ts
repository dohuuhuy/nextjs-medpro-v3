export interface PropsBannerContact {
  dataBannerContact: ItemBanner[] | any
}

export interface ItemBanner {
  title?: string
  subTitle?: string
  imageBackground?: string
  cardContact: ItemCard[]
}

export interface ItemCard {
  id?: string
  key: string
  title: string
  subTitle: string
  img?: Images[]
  link?: string
  textBottom: string
  icon?: boolean
}

export interface Images {
  url: string
}
