import { find, findIndex, indexOf, slice } from 'lodash'
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
    icon: (props: any) => (
      <Icon
        name='bacsi'
        fill={
          props
            ? checkActive(props.item, props.props)
              ? '#1890ff'
              : '#000000d9'
            : null
        }
      />
    ),
    content: (props: any) => <BacSi {...props} />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: true,
    data: [],
    selected: {}
  },
  {
    key: 'service',
    title: 'Dịch vụ',
    icon: (props: any) => (
      <Icon
        name='dichvu'
        fill={
          props
            ? checkActive(props.item, props.props)
              ? '#1890ff'
              : '#000000d9'
            : null
        }
      />
    ),
    content: (props: any) => <DichVu {...props} />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: true,
    data: [],
    selected: {}
  },
  {
    key: 'subject',
    title: 'Chuyên khoa',
    icon: (props: any) => (
      <Icon
        name='chuyenkhoa'
        fill={
          props
            ? checkActive(props.item, props.props)
              ? '#1890ff'
              : '#000000d9'
            : null
        }
      />
    ),
    content: (props: any) => <ChuyenKhoa {...props} />,
    after: {
      icon: <Icon name='timkiem' />,
      place: 'Tìm nhanh chuyên khoa',
      input: true
    },
    open: true,
    data: [],
    selected: {}
  },

  {
    key: 'time',
    title: 'Ngày giờ',
    icon: (props: any) => (
      <Icon
        name='ngaygio'
        fill={
          props
            ? checkActive(props.item, props.props)
              ? '#1890ff'
              : '#000000d9'
            : null
        }
      />
    ),
    content: (props: any) => <ThoiGian {...props} />,
    after: {
      icon: <Icon name='timkiem' />
    },
    open: true,
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

export const handlerStep = ({ bookingTree }: any) => {
  if (!bookingTree) return []

  const pathStep = bookingTree?.path?.split('_') || [] // phân giải path của booking
  pathStep.push('time') // thêm time vào mãng trên
  const addSortStep = steps.map((v) => {
    const findIndex = indexOf(pathStep, v.key) // tìm ra vị trí của step
    return { ...v, sort: findIndex } // add vị trí tìm được vào phần tử
  })
  const sortByStep = addSortStep
    .sort((a, b) => a.sort - b.sort)
    .filter((v) => v.sort >= 0) // sắp xếp dựa trên sort phía trên

  sortByStep[0].data = bookingTree.child // mặc định add dữ liệu đầu tiên vào step đầu tiên
  sortByStep[0].open = false

  return sortByStep
}

export const selected = (item: any, props: any) => () => {
  const { state, setstate, keys } = props

  const findStep = find(state.stepper, { key: keys })
  const index = findIndex(state.stepper, { key: keys })
  const indexSub = findIndex(state.stepper, { key: item.subType })

  if (Object.keys(findStep.selected).length) {
    console.log('reset mảng và chọn lại từng bước :>> ', 1)

    state.stepper[index].selected = item.detail

    if (indexSub > 0) {
      for (let i = indexSub; i < state.stepper.length; i++) {
        state.stepper[i].selected = {}
        state.stepper[i].open = true
      }

      state.stepper[indexSub].data = item.child
      state.stepper[indexSub].open = false
    }

    setstate((v: any) => ({
      ...v,
      stepper: state.stepper
    }))
  } else {
    state.stepper[index].selected = item.detail

    if (indexSub > 0) {
      state.stepper[indexSub].data = item.child
      state.stepper[indexSub].open = false
    }

    if (item.subType === null) {
      state.stepper.at(-1).open = false
    }
    setstate((v: any) => ({
      ...v
    }))
  }
}

export const checkActive = (item: any, props: any) => {
  if (!item || !props) return false

  const { state, keys } = props
  const findItem = find(state.stepper, { key: keys })

  if (findItem < 1) return false

  if (!findItem.selected.id) return false

  if (item.id === findItem.selected.id) {
    return true
  } else return false
}
