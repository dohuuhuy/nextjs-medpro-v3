export interface ConfirmInfoIF {
  listPatient: any
  schedule?: any
  loading?: boolean
  dispatch: any
  selectedPatient?: any
}

export interface StateConfirm {
  listPatient?: any[]
  patient?: any[]
  indexSelect?: number
  itemSelected: any
}

export interface User {
  fullname?: string
  sex?: number | string
  birthdate?: string
  mobile?: string
  profession?: {
    name: string
  }
  fullAddress?: string
}

export interface ItemInfo {
  visible: boolean
  title: string
  value: any
  status?: boolean
  sort?: number | any
  setting: {
    title: {
      bold: boolean | number
      color: string
      underline: boolean | number
    }
    value: {
      bold: boolean | number
      color: string
      underline: boolean | number
    }
  }
}
