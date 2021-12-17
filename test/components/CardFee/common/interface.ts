export interface Item {
  title: string
  value: string
  setting: {
    title: {
      bold: number
      underline: number
      color: string
      fontSize: string
    }
    value: {
      bold: number
      underline: number
      color: string
      fontSize: string
    }
  }
}
