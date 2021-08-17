import { find, findIndex } from 'lodash'

export interface Props {
  quickView: any
  KEY: {
    vn: string
    en: string
  }
  name: string
  id: any
  subType: string
}

export const handlerQuickView = (props: Props) => {
  const { quickView, KEY, name, id, subType } = props
  const findKey = find(quickView, { key: KEY.vn })
  const findKeyIndex = findIndex(quickView, { key: KEY.vn })

  if (findKey) {
    quickView[findKeyIndex] = {
      key: KEY.vn,
      value: name,
      willIndex: id,
      subType
    }
  } else {
    quickView.push({
      key: KEY.vn,
      value: name,
      willIndex: id,
      subType
    })
  }
  return quickView
}

export const handlerValue = (props: any, KEY: any) => {
  const { stepBooking, bookingTree, quickView } = props

  const stepIndex = stepBooking.indexOf(KEY.en)
  const quickIndex = findIndex(quickView, { subType: KEY.en })

  const willIndex = quickView[quickIndex]?.willIndex

  const one = bookingTree?.child
  const two = one?.[willIndex]?.child
  const three = two?.[willIndex]?.child

  switch (stepIndex) {
    case 0:
      return one
    case 1:
      return two
    case 2:
      return three
    default:
      return []
  }
}

export const VNĐ = (x = 0) => {
  if (x) {
    const parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return parts.join('.')
  }
  return 0
}
