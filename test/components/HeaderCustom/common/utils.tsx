import { filter } from 'lodash'

export const handleData = (list: any) => {
  const finData = filter(list, { isRead: false })

  if (finData.length < 1) {
    return list
  } else {
    return finData
  }
}
