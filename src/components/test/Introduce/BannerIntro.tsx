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
  return (
    <Row className={Styles.con_Para}>
      <Container className={Styles.Para}>
        <Row className={Styles.boxPara}>
          <Col span={9} className={Styles.intro}>
            <div>
              <span>{dataContentIntro.title}</span>
            </div>
            <h3>{dataContentIntro.subTitle}</h3>
          </Col>
          <Col span={1} />
          <Col span={14} className={Styles.Paragraph}>
            <p
              dangerouslySetInnerHTML={{ __html: dataContentIntro.description }}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  )
}
