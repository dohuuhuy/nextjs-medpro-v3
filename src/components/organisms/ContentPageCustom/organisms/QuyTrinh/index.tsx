import Container from '@componentsTest/Container'
import { check } from '@src/utils/checkValue'
import { Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export const QuyTrinhContent = ({ content }: PropsProduce) => {
  if (check(content)) {
    return <em>Lỗi không có content ...</em>
  }

  return (
    <Container className={styles.viewProduce}>
      <Row className={styles.rowProduce}>
        <ul className={styles.step}>
          {content?.map(
            ({ id, stepName, name, content: contentItem }: ItemProduce) => (
              <li key={id} className={styles.rowStep}>
                <div className={styles.coltitle}>
                  <b className={styles.titleStep}>{stepName}</b>
                </div>
                <div className={styles.dot} />
                <div className={styles.colContent}>
                  <b className={styles.titleStep}>{name}</b>
                  <div
                    className={styles.view_content}
                    dangerouslySetInnerHTML={{ __html: contentItem }}
                  />
                </div>
              </li>
            )
          )}
        </ul>
      </Row>
    </Container>
  )
}

export interface PropsProduce {
  content: Item[] | any
}

export interface Item {
  key: string
  link: string
  url: string
  name: string
  sortOrder: number
  icon: string
  content: ItemProduce[]
}

export interface ItemProduce {
  id: string
  stepName: string
  name: string
  content: string
  sortOrder: number
}
