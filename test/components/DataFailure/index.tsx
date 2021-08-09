import { Empty } from 'antd'
import { isEmpty, isNull, isUndefined } from 'lodash'
import React from 'react'
import Container from '../Container'
import style from './styles.module.less'

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
  return (
    <Container className={style.ContainerEmpty}>
      <Empty description={description} />
    </Container>
  )
}
