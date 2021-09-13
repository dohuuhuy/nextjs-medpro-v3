export interface Personal {
  listUser: User[],
  listBooking: Booking[],
  listNotice: Notice[],
}

export interface User {
  fullname: string,
  birthdate: string,
  mobile: string,
  sex: number,
  nation: { name: string },
  fullAddress: string
}

export interface Booking {
  name: string,
  surname: string,
  bookings: listBooking[]
}

export interface listBooking {
  partner: { name: string },
  subject: { name: string },
  service: { name: string },
  date: string,
  description: string
}

export interface Notice {
  createdAt: string,
  title: string,
}