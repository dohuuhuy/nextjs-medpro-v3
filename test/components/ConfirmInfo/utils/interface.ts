export interface user {
  fullName: string
  userName: string
  email: string
}

export interface StateConfirm {
  listPatient?:any[]
  patient?:any[]
  indexSelect?: number,
  itemSelected: any
}

export interface ConfirmInfoIF {
  listPatient: any,
  schedule?:any
}
