export interface HospitalState {
  partnerId: string
  information: Information
  listHospital: any
  bookingTree: any
  bookingCurrent: any
  listFeatureByApp: ItemFeature[]
  listFeatureByPartner: ItemFeature[]
  selectedFeature: InfoPartner | any
  flow: string
  treeId: string
  schedule?: Schedule | any
  listPayment: any[]
  selectedPaymentFee: any
  paymentFee: {
    totalFee: number
    subTotal: number
    grandTotal: number
  }
  listHistoryPayment: any[]
  passSchedules: boolean
  reserveBooking: any[]
}

export interface Information {
  partnerId?: string
  header?: any
  banners?: any[]
  deployHospital?: any[]
  introducHospital?: any
  downloadApp?: any
  supportMethods?: any[]
  footer?: any
  contentPage?: any[]
}

export interface ItemFeature {
  type: string
  _id: string
  parentId: string
  name: string
  image: string
  priority: number
  status: boolean
  mobileStatus: boolean
}

export interface InfoPartner {
  partnerId: string
  image: string
  bannerImage: string
  name: string
  address: string
  domain: string
  features: ItemFeature[]
}

export interface ItemFeature {
  children: []
  createdAt: string
  disabled: false
  id: string
  image: string
  message: string
  mobileStatus: boolean
  name: string
  priority: number
  status: boolean
  type: string
  updatedAt: string
  webStatus: false
  webRoute: string
}

export interface Schedule {
  subject: Subject
  doctor: Doctor
  service: Service
  time: Time
}

export interface Subject {
  selected: Selected
  data: any[]
  other: any
}
export interface Doctor {
  selected: Selected
  data: any[]
  other: any
}

export interface Service {
  selected: Selected
  data: any[]
  other: any
}

export interface Time {
  selected: {
    chonNgay: ChonNgay
    chonGio: ChonGio
  }
  data: any[]
  other: any
}

export interface ChonNgay {
  shifts: Shift[]
  date: number
  timeSlots: any[]
  timemiliseconds: number
}

export interface ChonGio {
  timeId: string
  availableSlot: number
  maxSlot: number
  startTime: string
  endTime: string
}

export interface Selected {
  name: string
  id: string
  type: string
  roomType?: any
  description?: any
  room?: any
  bookingNote: string
  nextCombine: boolean
  combineNodes: any[]
  maxDay?: any
  price?: number
}

export interface TimeSlotInDay {
  timeId: string
  availableSlot: number
  maxSlot: number
  startTime: string
  endTime: string
}

export interface Shift {
  id: string
  shiftName: string
  shiftCode: string
  startTime: string
  endTime: string
  duration: number
  days: string
  services: any[]
  maxSlot: number
  timeSlotInDay: TimeSlotInDay[]
}
