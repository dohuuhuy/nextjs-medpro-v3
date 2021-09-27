import { isEmpty, isNull, isUndefined } from 'lodash'

export const check = (element: any) => {
  if (
    !element ||
    isEmpty(element) ||
    isNull(element) ||
    isUndefined(element) ||
    element.length < 1
  ) {
    return true
  } else return false
}
