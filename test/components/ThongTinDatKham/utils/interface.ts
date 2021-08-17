export interface Medthods {
  current: number
  stepBooking: any
  next: () => void
  prev: () => void
  optional: (i: any) => void
  bookingTree: any
  quickView: never[]
  setquickView: React.Dispatch<React.SetStateAction<never[]>>
  steps: null
  listPatient: any[]
}
