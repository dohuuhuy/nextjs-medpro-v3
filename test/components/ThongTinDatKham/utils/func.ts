import { find, findIndex } from 'lodash'

export const handlerQuickView = (quickView: any, KEY: string, name: string) => {
  const findKey = find(quickView, { key: KEY })
  const findKeyIndex = findIndex(quickView, { key: KEY })

  if (findKey) {
    quickView[findKeyIndex] = {
      key: KEY,
      value: name
    }
  } else {
    quickView.push({
      key: KEY,
      value: name
    })
  }
  return quickView
}
