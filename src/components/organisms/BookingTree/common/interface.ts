export interface BookingTreeIF {
  bookingTree: any
}

export interface Steps {
  key: Keys
  title: string
  icon: any
  content: any
  after?: {
    icon: JSX.Element
    input?: boolean
  }
  selected: any
  open: any
  sort: number
  data: any
  other?: any
}

export interface StateBooking {
  stepper: Steps[]
  schedules?: any
  stepCurrent: {
    key: number
    name: string
    index: number
  }
}

export interface StateDichVu {
  list?: any
  checkBHYT?: boolean
  selectedItem?: any
  selectedBHYT?: any
}

export type Keys =
  | 'subject'
  | 'doctor'
  | 'service'
  | 'time'
  | undefined
  | string

export interface Props {
  keys: Keys
  state: StateBooking
  setstate: React.Dispatch<React.SetStateAction<StateBooking>>
  data: Item[]
  saveSchedule: any
  dispatch: any
}

export interface Item {
  id: string
  type: string
  subType: string
  days: null
  path: string
  dynamic: boolean
  filter: boolean
  group: boolean
  child: any[]
  end: boolean
  waitingList: boolean
  pickType: null
  hocvi: string
  giocan: string
  detail: {
    serviceType: string
    subject: string
    gender: number
    name: string
    id: string
    type: string
    roomType: null
    description: null
    room: null
    bookingNote: string
    nextCombine: boolean
    combineNodes: any[]
    maxDay: null
  }
  // custom thêm
  other: any
}

export interface ClickItem {
  item: Item
  props: Props
}
