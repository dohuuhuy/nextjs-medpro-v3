export interface SelectHospital {
  listHospital: ListHospital[]
  listCity: ListCity[]
}

export interface ListCity {
  id: string
  name: string
  code: string
}

export interface ListHospital {
  id: string
  name: string
  address: string
  image: string
  message: string
  partnerId: string
  deliveryStatus: number
  deliveryMessage: string
}
