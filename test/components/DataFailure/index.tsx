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
  desc: any
}

export const DataFailure = ({ desc }: Props) => {
  return (
    <p className='center'>
      <em>{desc}</em>
    </p>
  )
}
