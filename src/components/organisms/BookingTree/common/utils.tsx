import { Icon } from '@componentsTest/Icon'
import { find, findIndex, indexOf, last } from 'lodash'
import React from 'react'
import { BacSi } from './bacsi'
import { ChuyenKhoa } from './chuyenkhoa'
import { DichVu } from './dichvu'
import { ClickItem, Props, StateBooking, Steps } from './interface'
import { ThoiGian } from './thoigian'

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
    content: (props: Props) => <BacSi {...props} />,
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
    content: (props: Props) => <DichVu {...props} />,
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
    content: (props: Props) => <ChuyenKhoa {...props} />,
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
    content: (props: Props) => <ThoiGian {...props} />,
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

export const clickItem = ({ item, props }: ClickItem) => {
  const { state, setstate, keys, dispatch, saveSchedule } = props

  // 1. lấy được index trong mảng arr stepper từ keys gửi xuống
  const index = findIndex(state.stepper, { key: keys })
  const findStep: Steps | any = find(state.stepper, { key: keys })
  const indexSub = findIndex(state.stepper, { key: item?.subType })

  // 2. tại vị trí index gán seleted = detail của item đang chọn
  state.stepper[index].open = true
  state.stepper[index].selected = item?.detail || []

  if (Object.keys(findStep?.selected).length) {
    if (indexSub > 0) {
      for (let i = indexSub; i <= state.stepper.length; i++) {
        if (state.stepper[i]) {
          state.stepper[i].data = []
          state.stepper[i].selected = {}
          state.stepper[i].open = true
        }
      }
      state.stepper[indexSub].data = item?.child || []
      state.stepper[indexSub].open = false
    }
  } else {
    // 3. tìm vị trí của step kế tiếp mảng
    // nếu có bước kế thì gán data và mở collasp cho bước kế đó
    if (indexSub > 0) {
      state.stepper[indexSub].data = item?.child || []
      state.stepper[indexSub].open = false
    }
  }

  // // nếu bước kế = null thì mở collasp
  if (item?.subType === null) {
    ;(last(state.stepper) as any).open = false
  }

  // -----------------------cuối cùng là cập nhật lại state--------------------------------------

  // save lại cái step đã chọn lưu vào localStorage window -> để loading lấy lại data
  const schedules = state.stepper.reduce(
    (obj: any, item) =>
      Object.assign(obj, {
        [item.key as string]: { selected: item.selected, data: item.data }
      }),
    {}
  )

  setstate((v: StateBooking) => ({
    ...v,
    schedules
  }))

  dispatch(saveSchedule())

  window.localStorage.setItem('selected', JSON.stringify(schedules))
}

export const checkActive = (item: any, props: any) => {
  if (!item || !props) return false

  const { state, keys } = props
  const findItem = find(state.stepper, { key: keys })

  if (findItem < 1) return false

  if (findItem.key === 'time') {
    if (Object.keys(findItem.selected).length) {
      return true
    }
  }

  if (!findItem.selected.id) return false

  if (item.id === findItem.selected.id) {
    return true
  } else return false
}
