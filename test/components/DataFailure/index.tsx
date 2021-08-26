import { isEmpty, isNull, isUndefined } from 'lodash'
import React from 'react'

export const checkData = (element: any) => {
  if (
    !element ||
    isEmpty(element) ||
    isNull(element) ||
    isUndefined(element) ||
    element.length < 1
  ) {
    return true
  }
}

interface Props {
  description: any
}

export const DataFailure = ({ description }: Props) => {
  return <h1>{description}</h1>
}
