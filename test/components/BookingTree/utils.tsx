import { find, findIndex } from 'lodash'
import React from 'react'
import { Icon } from '../Icon'
import { BacSi } from './compo/bacsi'
import { ChuyenKhoa } from './compo/chuyenkhoa'
import { DichVu } from './compo/dichvu'
import { ThoiGian } from './compo/thoigian'

export const steps = [
  {
    key: 'doctor',
    title: 'Bác sĩ',
    icon: <Icon name='bacsi' />,
    content: (props: any) => <BacSi {...props} />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: false,
    data: [],
    selected: {}
  },
  {
    key: 'service',
    title: 'Dịch vụ',
    icon: <Icon name='dichvu' />,
    content: (props: any) => <DichVu {...props} />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: false,
    data: [],
    selected: {}
  },
  {
    key: 'subject',
    title: 'Chuyên khoa',
    icon: <Icon name='chuyenkhoa' />,
    content: (props: any) => <ChuyenKhoa {...props} />,
    after: {
      icon: <Icon name='timkiem' />,
      place: 'Tìm nhanh chuyên khoa',
      input: true
    },
    open: false,
    data: [],
    selected: {}
  },

  {
    key: 'time',
    title: 'Ngày giờ',
    icon: <Icon name='ngaygio' />,
    content: (props: any) => <ThoiGian {...props} />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: false,
    data: [],
    selected: {}
  }
]

export const colLeft = {
  xl: 16,
  lg: 16,
  md: 16,
  sm: 24,
  xs: 24
}

export const colRight = { xl: 8, lg: 8, md: 8, sm: 24, xs: 24 }

export interface Steps {
  key: 'subject' | 'doctor' | 'service' | 'time'
  title: string
  icon: JSX.Element
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

export const selected = (item: any, props: any) => () => {
  console.log('item :>> ', item)
  const { state, setstate, keys } = props

  const index = findIndex(state.stepper, { key: keys })
  state.stepper[index].selected = item.detail

  const indexSub = findIndex(state.stepper, { key: item.subType })
  indexSub > 0 && (state.stepper[indexSub].data = item.child)

  setstate((v: any) => ({ ...v, name: 'huyi' }))
}

export const checkActive = (item: any, props: any) => {
  const { state, keys } = props
  const findItem = find(state.stepper, { key: keys })
  if (item.id === findItem.selected.id) {
    return true
  } else return false
}
