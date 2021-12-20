export interface ItemListBill {
  disable: boolean
  title: string
  value: any
  setting: {
    title: {
      color: string
      bold: boolean
      underline: boolean
    }
    value: {
      color: string
      bold: boolean
      underline: boolean
    }
  }
  color?: undefined | string
  dash?: undefined | any
}
