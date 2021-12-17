import { Icon } from '@componentsTest/Icon'
import { find, findIndex, indexOf } from 'lodash'
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

  return sortByStep
}

export const clickItem = ({ item, props }: ClickItem) => {
  const { state, setstate, keys, dispatch, saveSchedule } = props

  // 1. lấy được index trong mảng arr stepper từ keys gửi xuống
  const index = findIndex(state.stepper, { key: keys })
  const findStep: Steps | any = find(state.stepper, { key: keys })
  const indexSub = findIndex(state.stepper, { key: item?.subType })

  // 2. tại vị trí index gán seleted = detail của item đang chọn
  state.stepper[index].selected = item?.detail || []

  if (Object.keys(findStep?.selected).length) {
    if (indexSub > 0) {
      for (let i = indexSub; i <= state.stepper.length; i++) {
        if (state.stepper[i]) {
          state.stepper[i].data = []
          state.stepper[i].selected = {}
        }
      }
      state.stepper[indexSub].data = item?.child || []
    }
  } else {
    // 3. tìm vị trí của step kế tiếp mảng
    if (indexSub > 0) {
      state.stepper[indexSub].data = item?.child || []
    }
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

  const willStep = state.stepper[index + 1]

  setstate((v: StateBooking) => ({
    ...v,
    schedules,
    stepCurrent: {
      key: index + 1,
      name: willStep?.title || '',
      index: willStep?.sort + 1
    }
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

const kyTuDacBiet = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi

export const validateCharUTF8 = (value: any) => {
  value = value.replace(kyTuDacBiet, '')
  value = value.replace(/^\s+|\s+$/g, ' ')
  value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  value = value.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  value = value.replace(/o|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  value = value.replace(/đ|d/g, 'd')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  value = value.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
  value = value.replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư
  return value
}

export const onSearchKey = (
  e: any,
  list: any[],
  setkeySearch: any,
  setlist: any
) => {
  const { value } = e.target
  setkeySearch(validateCharUTF8(value))
  const findItem = list.filter((v) => {
    const _name = validateCharUTF8(v.detail.name).toLowerCase()
    const _value = validateCharUTF8(value).toLowerCase()
    return _name.includes(_value)
  })
  setlist(findItem)
}

export const F_DATE = 'DD-MM-YYYY'
