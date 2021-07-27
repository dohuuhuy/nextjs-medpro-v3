export interface IntroducHospital {
  contentIntro: contentIntroItem
  cardIntro: cardIntroItem[]
}
export interface cardIntroItem {
  title: string
  subTitle: string
  imgCard: string
  link: string
  button: any
}
export interface contentIntroItem {
  title: string
  subTitle: string
  description: string
}
