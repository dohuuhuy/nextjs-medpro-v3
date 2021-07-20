import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Styles from './style.module.less'
import { Benefit_left } from './Benefit_left'
import { Benefit_right } from './Benefit_right'

interface Content {
  imgMobile: string
  listBenefit: any[]
}

export const Content = ({ listBenefit, imgMobile }: Content) => {
  return (
    <React.Fragment>
      <div className={Styles.content}>
        <div className={Styles.div_background}>
          <div className={Styles.background} />
        </div>
        <Row className={Styles.con_content}>
          <Col span={2} className={Styles.null} />
          <Benefit_left listBenefit={listBenefit} />
          <Col span={6} className={Styles.img_big}>
            <img src={imgMobile} alt='' />
          </Col>
          <Benefit_right listBenefit={listBenefit} />
          <Col span={2} className={Styles.null} />
        </Row>
      </div>
    </React.Fragment>
  )
}
