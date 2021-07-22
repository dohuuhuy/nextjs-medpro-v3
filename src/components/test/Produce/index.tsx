import { Row } from 'antd'
import React from 'react'
import Container from '../Container'
import { ItemProduce, PropsProduce } from './produce.interface'
import style from './styles.module.less'

const Produce = ({ dataProduce }: PropsProduce) => {
  if (!dataProduce || Object.keys(dataProduce).length < 1) {
    return <em>Lỗi không có dataProduce ...</em>
  }

  const { content }: any = dataProduce

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

export default Produce
