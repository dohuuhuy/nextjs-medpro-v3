import { Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import style from './styles.module.less'

export const QuyTrinhContent = ({ content }: PropsProduce) => {
  if (!content || Object.keys(content).length < 1) {
    return <em>Lỗi không có content ...</em>
  }

  return (
    <Container className={style.viewProduce}>
      <Row className={style.rowProduce}>
        <ul className={style.step}>
          {content.map(({ id, stepName, name, content }: ItemProduce) => (
            <li key={id} className={style.rowStep}>
              <div className={style.coltitle}>
                <b className={style.titleStep}>{stepName}</b>
              </div>
              <div className={style.dot} />
              <div className={style.colContent}>
                <b className={style.titleStep}>{name}</b>
                <div
                  className={style.view_content}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  )
}

export interface PropsProduce {
  content?: Item[] | any
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
