import React from 'react'
import Styles from './style.module.less'
import { Row, Col } from 'antd'

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
    <React.Fragment>
      <Row className={Styles.con_Para}>
        <Col span={2} className={Styles.null} />
        <Col span={7} className={Styles.intro}>
          <div>
            <span>{dataContentIntro.title}</span>
          </div>
          <h3>{dataContentIntro.subTitle}</h3>
        </Col>
        <Col span={1} className={Styles.null} />
        <Col span={12} className={Styles.Paragraph}>
          <p
            dangerouslySetInnerHTML={{ __html: dataContentIntro.description }}
          />
        </Col>
        <Col span={2} className={Styles.null} />
      </Row>
    </React.Fragment>
  )
}
