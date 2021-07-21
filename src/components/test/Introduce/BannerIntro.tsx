import React from 'react'
import Styles from './style.module.less'
import { Row, Col } from 'antd'
import Container from '../Container'

interface contentIntro {
  dataContentIntro: contentIntroItem
}
interface contentIntroItem {
  title: string
  subTitle: string
  description: string
}

export const BannerIntro = ({ dataContentIntro }: contentIntro) => {
  console.log('truyền ', dataContentIntro)
  return (
    <Row className={Styles.con_Para}>
      <Container className={Styles.Para}>
        <Row>
          <Col span={9} className={Styles.intro}>
            <div>
              <span>{dataContentIntro.title}</span>
            </div>
            <h3>{dataContentIntro.subTitle}</h3>
          </Col>
          <Col span={1} className={Styles.null} />
          <Col span={13} className={Styles.Paragraph}>
            <p
              dangerouslySetInnerHTML={{ __html: dataContentIntro.description }}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  )
}
