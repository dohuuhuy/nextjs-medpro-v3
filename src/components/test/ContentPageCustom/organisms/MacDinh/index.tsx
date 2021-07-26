import React from 'react'
import Container from './../../../Container'
import style from './styles.module.less'

export const DefaultContent = ({ content }: any) => {
  if (!content) {
    return <Container className={style.containerError}>gelo</Container>
  }

  return (
    <Container className={style.containerDefault}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}
