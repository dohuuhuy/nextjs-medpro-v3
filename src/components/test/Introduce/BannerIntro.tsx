import React from 'react'
import styles from './style.module.less'
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
    <div className={styles.wapperIntro}>
      <Container className={styles.Para}>
        <Row className={styles.boxPara}>
          <Col xl={9} md={9} sm={24} className={styles.intro}>
            <span>{dataContentIntro.title}</span>
            <h3>{dataContentIntro.subTitle}</h3>
          </Col>

          <Col xl={15} md={15} sm={24} className={styles.Paragraph}>
            <p
              dangerouslySetInnerHTML={{ __html: dataContentIntro.description }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
