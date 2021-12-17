import Container from '@componentsTest/Container'
import React from 'react'
import styles from './styles.module.less'

export const DefaultContent = ({ content }: any) => {
  if (!content) {
    return (
      <Container className={styles.containerError}>
        <em>getContent không tồn tại</em>
      </Container>
    )
  }

  return (
    <Container className={styles.containerDefault}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}
