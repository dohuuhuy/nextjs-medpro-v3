import { Col, Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import styles from './styles.module.less'

interface ContentIntro {
  dataContentIntro: ContentIntroItem
}
interface ContentIntroItem {
  title: string
  subTitle: string
  description: string
}

export const BannerIntro = ({ dataContentIntro }: ContentIntro) => {
  if (!dataContentIntro) {
    return null
  }
  const { title, subTitle, description } = dataContentIntro

  return (
    <div className={styles.wapperIntro}>
      <Container className={styles.Para}>
        <Row className={styles.boxPara}>
          <Col xl={9} md={9} sm={24} className={styles.intro}>
            <span>{title}</span>
            <h3>{subTitle}</h3>
          </Col>

          <Col xl={15} md={15} sm={24} className={styles.Paragraph}>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
