export interface BookingTypeIF {
  getInfo: {
    partnerId: string
    image: string
    bannerImage: string
    name: string
    address: string
    domain: string
    features: {
      children: []
      createdAt: string
      disabled: false
      id: string
      image: string
      message: ''
      mobileStatus: true
      name: string
      priority: 1
      status: true
      type: string
      updatedAt: string
      webStatus: false
      webRoute: string
    }[]
  }
}
