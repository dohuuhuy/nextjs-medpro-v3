import { Empty } from 'antd'
import { isEmpty, isNull, isUndefined } from 'lodash'
import React from 'react'
import Container from 'test/components/Container'
import style from './styles.module.less'

export const checkDataInput = (element: any) => {
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

export const DataFailure = ({ content }: any) => {
  if (checkDataInput(content)) {
    return (
      <Container className={style.ThacMacContent}>
        <Empty description={'Lỗi không có data thắc mắc'} />
      </Container>
    )
  }
}
