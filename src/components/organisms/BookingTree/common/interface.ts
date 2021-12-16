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
  open: boolean
  sort: number
  data: any
}

export interface StateBooking {
  stepper: Array<Steps>
  schedules?: any
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
  setstate: any
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
}

export interface ClickItem {
  item: Item
  props: Props
}
