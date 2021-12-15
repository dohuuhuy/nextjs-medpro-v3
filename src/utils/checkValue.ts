import { isEmpty, isNull, isUndefined } from 'lodash'

export const check = (element: any) => {
  if (
    element < 1 ||
    element === 0 ||
    element === ' ' ||
    element === null ||
    element === '' ||
    !element ||
    isEmpty(element) ||
    isNull(element) ||
    isUndefined(element) ||
    element.length < 1
  ) {
    return false
  } else return true
}
