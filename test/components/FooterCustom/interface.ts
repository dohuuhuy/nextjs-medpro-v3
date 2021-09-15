export interface FooterIF {
  menu: Menu[]
  logo: Logo
  contact: Contact[]
  downApp: DownApp
  certificate: Certificate
}

interface Certificate {
  list: {
    label: string
    value: string
    setting: {
      status: boolean
      underline: boolean
      boolLabel: boolean
      boolValue: boolean
    }
  }[]
  images: {
    image: string
    link: string
  }[]
}

interface DownApp {
  QRcode: string
  imageDownApp: {
    key: string
    image: string
    link: string
  }[]
}

interface Contact {
  id: string
  key: string
  label: string
  value: string
  setting: {
    status: boolean
    underline: boolean
    boolLabel: boolean
    boolValue: boolean
  }
}
interface Menu {
  label: string
  link: string
}

interface Logo {
  image: string
  name: string
}
