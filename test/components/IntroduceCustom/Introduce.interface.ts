export interface IntroducHospital {
  contentIntro: ContentIntroItem
  cardIntro: CardIntroItem[]
}
export interface CardIntroItem {
  title: string
  subTitle: string
  imgCard: string
  link: string
  button: any
}
export interface ContentIntroItem {
  title: string
  subTitle: string
  description: string
}
