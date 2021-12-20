export interface Item {
  visable: boolean | number
  title: string
  value: string
  setting: {
    title: SettingItem
    value: SettingItem
  }
}

interface SettingItem {
  bold: boolean | number
  underline: boolean | number
  color: string
  fontSize: string
}
